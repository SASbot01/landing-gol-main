import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { priceId } = req.body;

        // Validate price ID
        const validPrices = [
            process.env.VITE_STRIPE_PRICE_97,
            process.env.VITE_STRIPE_PRICE_67
        ];

        if (!validPrices.includes(priceId)) {
            return res.status(400).json({ error: 'Invalid price ID' });
        }

        // Retrieve price details from Stripe
        const price = await stripe.prices.retrieve(priceId);

        // Create Payment Intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price.unit_amount,
            currency: price.currency,
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                priceId: priceId,
                productId: price.product,
            },
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            amount: price.unit_amount,
            currency: price.currency
        });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
}

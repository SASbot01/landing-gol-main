import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Price IDs - hardcoded since VITE_ vars aren't available in serverless functions
const PRICE_97 = 'price_1SpoC3Cl8P39vjkQIzFKrMAa';
const PRICE_67 = 'price_1SsjvBCl8P39vjkQvK5owi9z';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { priceId } = req.body;

        // Validate price ID
        const validPrices = [PRICE_97, PRICE_67];

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

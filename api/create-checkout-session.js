import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Payment Link to Price ID mapping
const PAYMENT_LINK_MAPPING = {
    'https://buy.stripe.com/00w00i46nfNH9dj2iQ5kk04': process.env.VITE_STRIPE_PRICE_97, // $97
    'https://buy.stripe.com/7sYeVc6ev6d74X3aPm5kk08': process.env.VITE_STRIPE_PRICE_68, // $67
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { priceId, paymentLinkUrl } = req.body;

        // Determine the price ID - either from direct priceId or from paymentLinkUrl
        let finalPriceId = priceId;
        
        if (paymentLinkUrl && PAYMENT_LINK_MAPPING[paymentLinkUrl]) {
            finalPriceId = PAYMENT_LINK_MAPPING[paymentLinkUrl];
        }

        // Validate price ID
        const validPrices = [
            process.env.VITE_STRIPE_PRICE_97,
            process.env.VITE_STRIPE_PRICE_68
        ];

        if (!validPrices.includes(finalPriceId)) {
            return res.status(400).json({ error: 'Invalid price ID or payment link' });
        }

        // Create Checkout Session for embedded mode
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
                {
                    price: finalPriceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            return_url: `${req.headers.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.status(200).json({ clientSecret: session.client_secret });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
}

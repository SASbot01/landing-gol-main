// Environment detection and configuration
export const isDevelopment = typeof window !== 'undefined' && window.location.hostname === 'localhost';

export const APP_URL = isDevelopment
    ? 'http://localhost:5173'
    : 'https://game-of-life-landingmain.vercel.app';

// External authentication URL
export const AUTH_URL = 'https://gol.blackwolfsec.io/auth';

// Stripe Payment Links (Production)
export const STRIPE_MONTHLY_LINK = 'https://buy.stripe.com/7sY3cu5aratnexD1eM5kk01'; // $37/month - INITIATE
export const STRIPE_LIFETIME_LINK = 'https://buy.stripe.com/14A28qauL6d789f3mU5kk02'; // $333 lifetime - SOVEREIGN
export const STRIPE_FOUNDERS_LINK = 'https://buy.stripe.com/9B6bJ08mD5933SZ6z65kk03'; // $97 lifetime - FOUNDERS

export const ROUTES = {
    HOME: '/',
    TERMS: '/terms',
    PRIVACY: '/privacy',
} as const;


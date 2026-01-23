/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
    readonly VITE_STRIPE_PRICE_97: string;
    readonly VITE_STRIPE_PRICE_68: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

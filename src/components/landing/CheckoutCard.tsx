import { Shield, CreditCard, Lock, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { type Language } from "@/lib/i18n";
import { STRIPE_FOUNDERS_LINK } from "@/lib/constants";

interface CheckoutCardProps {
    lang?: Language;
}

export const CheckoutCard = ({ lang = 'en' }: CheckoutCardProps) => {
    const copy = {
        en: {
            spotsLeft: "14 FOUNDER SPOTS LEFT",
            originalPrice: "$997",
            currentPrice: "$97",
            period: "/month",
            cta: "INSTANT ACCESS",
            guarantee: "14-day money-back guarantee",
            ssl: "SSL Secured",
            stripe: "Powered by Stripe",
            encryption: "256-bit Encryption",
        },
        es: {
            spotsLeft: "14 PLAZAS DE FUNDADOR",
            originalPrice: "$997",
            currentPrice: "$97",
            period: "/mes",
            cta: "ACCESO INMEDIATO",
            guarantee: "Garantía 14 días",
            ssl: "SSL Seguro",
            stripe: "Powered by Stripe",
            encryption: "Encriptación 256-bit",
        }
    };

    const t = copy[lang];

    const handleCheckout = () => {
        // Track InitiateCheckout event for Meta Pixel
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
                value: 97.00,
                currency: 'USD',
                content_name: 'GOL - Monthly Access',
                content_category: 'Subscription'
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full max-w-md mx-auto"
        >
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-command-orange/30 p-6 md:p-8 chamfered shadow-[0_0_40px_rgba(255,153,0,0.15)]">
                {/* Price Display */}
                <div className="text-center pb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-2xl text-gray-500 line-through font-mono">{t.originalPrice}</span>
                        <span className="text-xl text-command-orange">→</span>
                    </div>
                    <div className="flex items-baseline justify-center">
                        <span className="text-6xl md:text-7xl font-display font-bold text-white">{t.currentPrice}</span>
                        <span className="text-xl text-gray-400 font-mono ml-1">{t.period}</span>
                    </div>
                </div>

                {/* CTA Button */}
                <a
                    href={STRIPE_FOUNDERS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCheckout}
                    className="block"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(255,153,0,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 md:py-5 bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg md:text-xl uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(255,153,0,0.4)] chamfered relative overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Lock className="w-5 h-5" />
                            {t.cta}
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>
                </a>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 mt-4 text-green-400 text-sm font-mono">
                    <RefreshCw className="w-4 h-4" />
                    <span>{t.guarantee}</span>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                        <Lock className="w-3 h-3" />
                        <span>{t.ssl}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                        <CreditCard className="w-3 h-3" />
                        <span>{t.stripe}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                        <Shield className="w-3 h-3" />
                        <span>{t.encryption}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

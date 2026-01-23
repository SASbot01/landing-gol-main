import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, RefreshCw, CreditCard } from "lucide-react";
import { type Language } from "@/lib/i18n";
import { STRIPE_FOUNDERS_LINK } from "@/lib/constants";

interface FinalCTAProps {
    lang?: Language;
}

export const FinalCTA = ({ lang = 'en' }: FinalCTAProps) => {
    const copy = {
        en: {
            title: "LAST CHANCE",
            subtitle: "14 founder spots remaining",
            cta: "BECOME A FOUNDER",
            guarantee: "14-day money-back guarantee",
            badges: {
                ssl: "SSL Secured",
                stripe: "Stripe",
                encryption: "256-bit"
            }
        },
        es: {
            title: "ÚLTIMA OPORTUNIDAD",
            subtitle: "14 plazas de fundador restantes",
            cta: "CONVIÉRTETE EN FUNDADOR",
            guarantee: "Garantía 14 días",
            badges: {
                ssl: "SSL Seguro",
                stripe: "Stripe",
                encryption: "256-bit"
            }
        }
    };

    const t = copy[lang];

    const handleCheckout = () => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
                value: 97.00,
                currency: 'USD',
                content_name: 'GOL - Founders Access',
                content_category: 'Lifetime Access'
            });
        }
    };

    return (
        <section className="py-20 md:py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-command-orange/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    {/* Scarcity Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-8 animate-pulse">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        {t.subtitle}
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight mb-8">
                        {t.title}
                    </h2>

                    {/* CTA Button */}
                    <a
                        href={STRIPE_FOUNDERS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCheckout}
                        className="inline-block"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,153,0,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 border border-orange-400 chamfered shadow-[0_0_40px_rgba(255,153,0,0.4)] transition-all uppercase tracking-widest relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {t.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </a>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2 mt-6 text-green-400 text-sm font-mono">
                        <RefreshCw className="w-4 h-4" />
                        <span>{t.guarantee}</span>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <div className="flex items-center gap-1.5 text-gray-600 text-xs font-mono">
                            <Lock className="w-3 h-3" />
                            <span>{t.badges.ssl}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600 text-xs font-mono">
                            <CreditCard className="w-3 h-3" />
                            <span>{t.badges.stripe}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600 text-xs font-mono">
                            <Shield className="w-3 h-3" />
                            <span>{t.badges.encryption}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

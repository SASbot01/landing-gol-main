import { motion } from "framer-motion";
import { type Language } from "@/lib/i18n";

interface SocialProofProps {
    lang?: Language;
}

export const SocialProof = ({ lang = 'en' }: SocialProofProps) => {
    const copy = {
        en: {
            title: "TRUSTED BY OPERATORS FROM",
            valueStack: "Total Value: $5,785",
            yourPrice: "Your Price Today: $97"
        },
        es: {
            title: "CONFIADO POR OPERADORES DE",
            valueStack: "Valor Total: $5,785",
            yourPrice: "Tu Precio Hoy: $97"
        }
    };

    const t = copy[lang];

    // Company logos as styled text badges (replace with actual logos when available)
    const companies = [
        "TECH",
        "FINANCE",
        "CONSULTING",
        "STARTUPS",
        "E-COMMERCE"
    ];

    return (
        <section className="py-12 md:py-16 bg-zinc-950 border-y border-white/5">
            <div className="container mx-auto px-6">
                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-6">
                        {t.title}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
                        {companies.map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="text-gray-600 font-display text-lg md:text-xl tracking-widest hover:text-gray-400 transition-colors"
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>

                    {/* Value Stack Summary */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <div className="font-mono text-sm text-gray-500">
                            <span className="line-through">{t.valueStack}</span>
                        </div>
                        <div className="hidden md:block text-command-orange">→</div>
                        <div className="font-display text-xl text-command-orange uppercase tracking-wider">
                            {t.yourPrice}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

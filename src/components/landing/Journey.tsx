import { motion } from "framer-motion";
import { type Language, getTranslation } from "@/lib/i18n";

interface JourneyProps {
    lang?: Language;
}

export const Journey = ({ lang = 'en' }: JourneyProps) => {
    const t = getTranslation(lang);
    const steps = t.journey.steps;

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="font-display text-2xl md:text-4xl mb-4 text-white">{t.journey.title}</h2>
                    <p className="font-mono text-command-orange text-sm tracking-widest uppercase">
                        {t.journey.subtitle}
                    </p>
                </div>

                <div className="space-y-12 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-command-orange/50 to-transparent hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col md:flex-row gap-8 relative"
                        >
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-10 h-10 bg-black border border-command-orange flex items-center justify-center font-mono text-command-orange font-bold z-10 shrink-0 chamfered-sm">
                                    {index + 1}
                                </div>
                            </div>

                            <div className="p-8 border border-white/10 bg-white/5 w-full hover:bg-white/10 transition-colors chamfered-sm group hover:border-command-orange/30">
                                <div className="font-mono text-xs text-command-orange/70 mb-2 group-hover:text-command-orange transition-colors">{step.subtitle}</div>
                                <h3 className="font-display text-2xl mb-4 text-white">{step.title}</h3>
                                <p className="font-mono text-gray-300 text-sm md:text-base leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

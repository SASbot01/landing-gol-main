import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";

interface FAQProps {
    lang?: Language;
}

export const FAQ = ({ lang = 'en' }: FAQProps) => {
    const t = getTranslation(lang);
    const faqs = t.faq.items;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="mb-12 text-center">
                    <h2 className="font-display text-2xl uppercase text-white mb-2">{t.faq.title}</h2>
                    <p className="text-command-orange font-mono text-xs tracking-widest">{t.faq.subtitle}</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 bg-white/5 rounded-none chamfered-sm group hover:border-command-orange/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-display text-lg pr-8 group-hover:text-command-orange transition-colors">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5 text-command-orange" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 font-mono text-gray-400 text-sm leading-relaxed border-t border-command-orange/20">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

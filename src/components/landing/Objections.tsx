import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldAlert } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";

interface ObjectionsProps {
    lang?: Language;
}

export const Objections = ({ lang = 'en' }: ObjectionsProps) => {
    const t = getTranslation(lang);
    const objections = t.objections.items;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black relative border-y border-white/10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <ShieldAlert className="text-command-orange w-6 h-6" />
                    <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tighter">
                        {t.objections.title} <span className="text-command-orange text-xs align-super ml-2">{t.objections.classified}</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {objections.map((obj, index) => (
                        <div key={index} className="border border-white/10 bg-white/5 overflow-hidden group hover:border-command-orange/50 transition-colors chamfered-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <div>
                                    <div className="text-command-orange font-mono text-xs mb-1 tracking-widest uppercase">{obj.title}</div>
                                    <h3 className="font-display text-lg text-white group-hover:text-command-orange transition-colors">{obj.question}</h3>
                                </div>
                                <div className="text-command-orange">
                                    {openIndex === index ? <Minus /> : <Plus />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 border-t border-command-orange/20">
                                            <p className="font-mono text-gray-400 leading-relaxed text-sm">
                                                <span className="text-command-orange mr-2">{">"}</span>
                                                {obj.answer}
                                            </p>
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

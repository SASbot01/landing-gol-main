import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";

interface FloatingCTAProps {
    lang?: Language;
}

export const FloatingCTA = ({ lang = 'en' }: FloatingCTAProps) => {
    const t = getTranslation(lang);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="fixed bottom-6 right-6 z-50 w-full md:w-auto px-6 md:px-0 flex justify-center md:block pointer-events-none"
        >
            <a href="#offer" className="pointer-events-auto">
                <button className="bg-command-orange hover:bg-orange-500 text-black font-display font-bold py-3 px-6 shadow-[0_5px_20px_rgba(255,153,0,0.5)] border border-orange-400 flex items-center gap-2 uppercase tracking-wider group hover:scale-105 transition-transform chamfered-sm">
                    {t.floatingCta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </a>
        </motion.div>
    );
};

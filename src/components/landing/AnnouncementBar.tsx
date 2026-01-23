import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";

interface AnnouncementBarProps {
    lang?: Language;
}

export const AnnouncementBar = ({ lang = 'en' }: AnnouncementBarProps) => {
    const t = getTranslation(lang);

    return (
        <a href="#pricing" className="block w-full bg-command-orange hover:bg-orange-500 text-black font-mono text-[10px] py-2 px-4 text-center cursor-pointer uppercase font-bold tracking-wider z-[60] fixed top-0 left-0 border-b-2 border-black overflow-hidden hover:text-white transition-colors">
            <div className="relative flex items-center justify-center gap-2">
                <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                <div className="overflow-hidden flex-1">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="whitespace-nowrap inline-block"
                    >
                        <span className="inline-block px-4">{t.announcement.text}</span>
                        <span className="inline-block px-4">{t.announcement.text}</span>
                        <span className="inline-block px-4">{t.announcement.text}</span>
                    </motion.div>
                </div>
            </div>
        </a>
    );
};

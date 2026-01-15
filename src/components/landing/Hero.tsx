import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Play } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";
import { VideoModal } from "@/components/ui/video-modal";

interface HeroProps {
    lang?: Language;
}

export const Hero = ({ lang = 'en' }: HeroProps) => {
    const t = getTranslation(lang);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative pt-24 pb-12 min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-grid-pattern overflow-hidden border-b border-white/5">
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoUrl="https://www.loom.com/embed/0af0333db96f43fd8ccd5b9638fc7a12"
            />

            {/* Background elements */}
            <div className="absolute inset-0 bg-black/95 z-0" />
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Ambient Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-command-orange/10 blur-[100px] rounded-full pointer-events-none z-0" />

            <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 border border-command-orange/30 bg-command-orange/10 text-command-orange font-mono text-[10px] tracking-[0.2em] uppercase chamfered-sm">
                        <span className="w-1.5 h-1.5 bg-command-orange animate-pulse" />
                        {t.hero.badge || "SYSTEM STATUS: CRITICAL"}
                    </span>
                </motion.div>

                <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6 uppercase leading-[0.95] text-glow-white">
                    {t.hero.title1 || "UNIFY YOUR"}<br />
                    <span className="text-command-orange block mt-1 text-glow-orange">{t.hero.title2 || "REALITY"}</span>
                </h1>

                <p className="font-mono text-gray-400 max-w-2xl text-xs md:text-sm lg:text-base leading-relaxed mb-8 uppercase tracking-wide" dangerouslySetInnerHTML={{ __html: t.hero.description }} />

                <div className="flex flex-col md:flex-row items-center gap-4 z-30">
                    <a href="#offer">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 153, 0, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg px-8 py-4 border border-orange-400 chamfered shadow-[0_0_20px_rgba(255,153,0,0.4)] transition-all uppercase tracking-widest relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Zap className="w-4 h-4 fill-black" />
                                {t.hero.ctaPrimary}
                            </span>
                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </a>

                    <motion.button
                        onClick={() => setIsVideoOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent hover:bg-white/5 text-white font-mono text-xs px-6 py-4 border border-white/20 hover:border-white/50 chamfered transition-all uppercase tracking-widest flex items-center gap-2 group"
                    >
                        <Play className="w-3 h-3 fill-white group-hover:text-command-orange group-hover:fill-command-orange transition-colors" />
                        <span>WATCH BRIEFING</span>
                    </motion.button>
                </div>
            </div>

            {/* Scanning line animation */}
            <div className="animate-scanline absolute inset-0 z-10 pointer-events-none opacity-20" />
        </section>
    );
};

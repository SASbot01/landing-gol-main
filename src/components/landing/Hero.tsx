import { motion } from "framer-motion";
import { Play, Shield, Zap, Activity, Gift, Clock, Users } from "lucide-react";
import { type Language } from "@/lib/i18n";
import { Link } from "react-router-dom";

interface HeroProps {
    lang?: Language;
}

export const Hero = ({ lang = 'en' }: HeroProps) => {
    const copy = {
        en: {
            badge: "⚠ CLASSIFIED BRIEFING",
            title: "COMMAND YOUR",
            titleHighlight: "REALITY.",
            subtitle: "7 founders joined this week. 8 spots left.",
            valuePreview: {
                title: "WHAT YOU'RE GETTING ACCESS TO:",
                items: [
                    { icon: Shield, text: "The Vault — Track every dollar, build real wealth" },
                    { icon: Zap, text: "Ops Center — Execute like a Navy SEAL" },
                    { icon: Activity, text: "Bio-Dome — Optimize health, energy, longevity" },
                ],
                bonus: "🎁 + 4 Founder Bonuses (disappearing soon)"
            },
            urgency: "⏱ Limited founder pricing ends when spots fill",
            cta: "WATCH THE BRIEFING",
            footnote: "3 min video. No BS. Unlock your price inside."
        },
        es: {
            badge: "⚠ BRIEFING CLASIFICADO",
            title: "COMANDA TU",
            titleHighlight: "REALIDAD.",
            subtitle: "7 fundadores esta semana. 8 plazas restantes.",
            valuePreview: {
                title: "A LO QUE VAS A ACCEDER:",
                items: [
                    { icon: Shield, text: "La Bóveda — Rastrea cada dólar, construye riqueza real" },
                    { icon: Zap, text: "Centro de Ops — Ejecuta como un Navy SEAL" },
                    { icon: Activity, text: "Bio-Domo — Optimiza salud, energía, longevidad" },
                ],
                bonus: "🎁 + 4 Bonuses de Fundador (desaparecen pronto)"
            },
            urgency: "⏱ Precio de fundador termina cuando se llenen las plazas",
            cta: "VER EL BRIEFING",
            footnote: "3 min de video. Sin rodeos. Desbloquea tu precio dentro."
        }
    };

    const t = copy[lang];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-grid-pattern overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-black/95 z-0" />
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Ambient Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-command-orange/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-xs tracking-[0.2em] uppercase animate-pulse">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        {t.badge}
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4 uppercase leading-[0.95]"
                >
                    {t.title}<br />
                    <span className="text-command-orange text-glow-orange">{t.titleHighlight}</span>
                </motion.h1>

                {/* Subtitle with scarcity */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="font-mono text-gray-400 text-lg md:text-xl mb-8 uppercase tracking-wider flex items-center gap-2"
                >
                    <Users className="w-5 h-5 text-command-orange" />
                    {t.subtitle}
                </motion.p>

                {/* Value Preview - FOMO style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-6 w-full max-w-lg"
                >
                    <div className="bg-zinc-900/80 border border-command-orange/30 p-6 chamfered shadow-[0_0_40px_rgba(255,153,0,0.1)]">
                        <h3 className="font-mono text-xs text-command-orange uppercase tracking-widest mb-4 text-center font-bold">
                            {t.valuePreview.title}
                        </h3>
                        <div className="space-y-3">
                            {t.valuePreview.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-3 text-left"
                                >
                                    <div className="w-8 h-8 bg-command-orange/20 border border-command-orange/40 flex items-center justify-center chamfered">
                                        <item.icon className="w-4 h-4 text-command-orange" />
                                    </div>
                                    <span className="font-mono text-sm text-gray-200">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-command-orange/20 flex items-center justify-center">
                            <span className="font-mono text-sm text-command-orange animate-pulse">{t.valuePreview.bonus}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Urgency message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="font-mono text-xs text-red-400 mb-6 flex items-center gap-2"
                >
                    <Clock className="w-4 h-4" />
                    {t.urgency}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Link to="/walkthrough">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,153,0,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 border border-orange-400 chamfered shadow-[0_0_40px_rgba(255,153,0,0.4)] transition-all uppercase tracking-widest relative overflow-hidden group flex items-center gap-3"
                        >
                            <Play className="w-5 h-5 fill-black" />
                            <span className="relative z-10">{t.cta}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Footnote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 font-mono text-xs text-gray-500"
                >
                    {t.footnote}
                </motion.p>
            </div>

            {/* Scanning line animation */}
            <div className="animate-scanline absolute inset-0 z-10 pointer-events-none opacity-20" />
        </section>
    );
};

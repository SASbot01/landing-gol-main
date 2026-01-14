import { motion } from "framer-motion";
import { Activity, Target, Landmark } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";

interface ModelExplanationProps {
    lang?: Language;
}

export const ModelExplanation = ({ lang = 'en' }: ModelExplanationProps) => {
    const t = getTranslation(lang);

    return (
        <section className="py-24 bg-grid-pattern relative">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-display text-2xl md:text-5xl text-white mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">{t.model.title}</h2>
                    <p className="font-mono text-command-orange text-sm md:text-base tracking-widest uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,153,0,0.5)]">
                        {t.model.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base">
                        {t.model.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Bio-Dome -> HABITAT (Amber) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 md:p-8 border border-white/20 bg-black/60 backdrop-blur hover:border-amber-500 hover:bg-black/40 transition-all duration-300 group relative overflow-hidden chamfered-sm"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Activity className="w-24 h-24 text-amber-500" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <Activity className="text-amber-500 w-6 h-6" />
                            <h3 className="font-display text-xl text-white">{t.model.bioDome.title}</h3>
                        </div>
                        <div className="font-mono text-xs text-amber-500 mb-4">{t.model.bioDome.subtitle}</div>
                        <p className="text-gray-300 group-hover:text-gray-100 text-sm md:text-base leading-relaxed transition-colors">
                            {t.model.bioDome.desc}
                        </p>
                    </motion.div>

                    {/* Ops Center -> COMMAND (Orange) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 md:p-8 border border-white/20 bg-black/60 backdrop-blur hover:border-command-orange hover:bg-black/40 transition-all duration-300 group relative overflow-hidden chamfered-sm"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-24 h-24 text-command-orange" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="text-command-orange w-6 h-6" />
                            <h3 className="font-display text-xl text-white">OPS CENTER</h3>
                        </div>
                        <div className="font-mono text-xs text-command-orange mb-4">[ INTELLIGENCE ENGINE ]</div>
                        <p className="text-gray-300 group-hover:text-gray-100 text-sm md:text-base leading-relaxed transition-colors">
                            Mission Control. This is where your strategic will is executed. We utilize military-grade hierarchy:
                            Areas {'>'} Projects {'>'} Missions {'>'} Tasks. No more vague to-do lists. You generate XP for every
                            completed objective. You see your rank rise in real-time.
                        </p>
                    </motion.div>

                    {/* The Vault -> TREASURY (Gold) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 md:p-8 border border-white/20 bg-black/60 backdrop-blur hover:border-yellow-500 hover:bg-black/40 transition-all duration-300 group relative overflow-hidden chamfered-sm"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Landmark className="w-24 h-24 text-yellow-500" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <Landmark className="text-yellow-500 w-6 h-6" />
                            <h3 className="font-display text-xl text-white">{t.model.vault.title}</h3>
                        </div>
                        <div className="font-mono text-xs text-yellow-500 mb-4">{t.model.vault.subtitle}</div>
                        <p className="text-gray-300 group-hover:text-gray-100 text-sm md:text-base leading-relaxed transition-colors">
                            {t.model.vault.desc}
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 p-8 border border-white/10 text-center bg-white/5 relative chamfered">
                    <h3 className="font-display text-2xl text-white mb-4">{t.model.synapse.title}</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.model.synapse.desc}
                    </p>
                </div>
            </div>
        </section>
    );
};

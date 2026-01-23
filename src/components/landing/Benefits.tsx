import { Wallet, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { type Language } from "@/lib/i18n";

interface BenefitsProps {
    lang?: Language;
}

export const Benefits = ({ lang = 'en' }: BenefitsProps) => {
    const copy = {
        en: {
            items: [
                { icon: Wallet, title: "THE VAULT", desc: "Real-time net worth tracking" },
                { icon: Zap, title: "OPS CENTER", desc: "Mission control for your life" },
                { icon: Activity, title: "BIO-DOME", desc: "Combat readiness monitoring" },
            ]
        },
        es: {
            items: [
                { icon: Wallet, title: "LA BÓVEDA", desc: "Patrimonio neto en tiempo real" },
                { icon: Zap, title: "CENTRO DE OPS", desc: "Control de misión para tu vida" },
                { icon: Activity, title: "BIO-DOMO", desc: "Monitoreo de preparación" },
            ]
        }
    };

    const t = copy[lang];

    return (
        <section className="py-16 md:py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {t.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-command-orange/10 border border-command-orange/30 flex items-center justify-center chamfered-sm group-hover:bg-command-orange/20 transition-colors">
                                <item.icon className="w-8 h-8 text-command-orange" />
                            </div>
                            <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">
                                {item.title}
                            </h3>
                            <p className="font-mono text-sm text-gray-400">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

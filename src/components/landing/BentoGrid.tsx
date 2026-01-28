import { motion } from "framer-motion";
import { Layers, Shield, Zap, Clock, Lock, Activity } from "lucide-react";

const capabilities = [
    {
        icon: Layers,
        title: "The Trinity Integration",
        description:
            "Radical Centralization. Bio-Dome, Ops Center, and The Vault fused into one interface. The death of cognitive anxiety.",
    },
    {
        icon: Shield,
        title: "Real Time Finance",
        description:
            "Double-entry accounting engine. Don't just track expenses; know your Net Worth survival rating in real-time.",
    },
    {
        icon: Zap,
        title: "Neuro-Engineering",
        description:
            "Dopamine hijacking mechanics. We turned discipline into a chemical addiction. Level up your life like a video game.",
    },
    {
        icon: Clock,
        title: "Chronos Engine",
        description:
            "Connected with Google Calendar. Bidirectional sync to keep your schedule and tasks perfectly aligned.",
    },
    {
        icon: Lock,
        title: "Data Sovereignty",
        description:
            "Your data is your property. Encrypted, private, and fully exportable. No Big Tech surveillance.",
    },
    {
        icon: Activity,
        title: "Commander's Playbook",
        description:
            "Pre-loaded SOPs and strategies used by elite operators. Don't build from scratch; execute from experience.",
    },
];

export const BentoGrid = () => {
    return (
        <section className="relative py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <span className="inline-block px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-xs font-mono text-gray-500 tracking-wider mb-4">
                        SYSTEM CAPABILITIES
                    </span>
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
                        Built for <span className="text-amber-500">Total Control</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-sans">
                        Every module designed to eliminate entropy and maximize operational efficiency.
                    </p>
                </motion.div>

                {/* Bento Grid - 2 cols mobile, 3 cols desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ y: -3 }}
                            className="card-glow p-3 md:p-5 group cursor-default"
                        >
                            {/* Icon */}
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3 border border-amber-500/20 group-hover:border-amber-500/40 group-hover:bg-amber-500/15 transition-all duration-300">
                                <capability.icon className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm md:text-base font-mono font-semibold text-white mb-1.5 md:mb-2 group-hover:text-amber-500 transition-colors duration-300">
                                {capability.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
                                {capability.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

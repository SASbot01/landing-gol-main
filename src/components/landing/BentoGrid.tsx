import { motion, AnimatePresence } from "framer-motion";
import { Layers, Shield, Zap, Clock, Lock, Activity, X } from "lucide-react";
import { useState } from "react";

const capabilities = [
    {
        icon: Layers,
        title: "The Trinity Integration",
        description:
            "Radical Centralization. Bio-Dome, Ops Center, and The Vault fused into one interface. The death of cognitive anxiety.",
        image: "/1.png",
    },
    {
        icon: Shield,
        title: "Real Time Finance",
        description:
            "Double-entry accounting engine. Don't just track expenses; know your Net Worth survival rating in real-time.",
        image: "/2.png",
    },
    {
        icon: Zap,
        title: "Neuro-Engineering",
        description:
            "Dopamine hijacking mechanics. We turned discipline into a chemical addiction. Level up your life like a video game.",
        image: "/3.png",
    },
    {
        icon: Clock,
        title: "Chronos Engine",
        description:
            "Connected with Google Calendar. Bidirectional sync to keep your schedule and tasks perfectly aligned.",
        image: "/4.png",
    },
    {
        icon: Lock,
        title: "Data Sovereignty",
        description:
            "Your data is your property. Encrypted, private, and fully exportable. No Big Tech surveillance.",
        image: "/5.png",
    },
    {
        icon: Activity,
        title: "Commander's Playbook",
        description:
            "Pre-loaded SOPs and strategies used by elite operators. Don't build from scratch; execute from experience.",
        image: "/6.png",
    },
];

export const BentoGrid = () => {
    const [selectedCapability, setSelectedCapability] = useState<number | null>(null);

    return (
        <>
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
                        <p className="text-amber-500/60 text-xs mt-2 font-mono">
                            Click any card to see it in action
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
                                onClick={() => setSelectedCapability(index)}
                                className="card-glow p-3 md:p-5 group cursor-pointer"
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

                                {/* Click indicator */}
                                <div className="mt-3 text-amber-500/50 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                    → Click to preview
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal/Popup for image preview */}
            <AnimatePresence>
                {selectedCapability !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCapability(null)}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-[#0a0a0a] border border-amber-500/30 rounded-xl overflow-hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCapability(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Header */}
                            <div className="p-4 md:p-6 border-b border-amber-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                                        {(() => {
                                            const IconComponent = capabilities[selectedCapability].icon;
                                            return <IconComponent className="w-5 h-5 text-amber-500" />;
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-mono font-bold text-white">
                                            {capabilities[selectedCapability].title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {capabilities[selectedCapability].description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="p-4 md:p-6">
                                <img
                                    src={capabilities[selectedCapability].image}
                                    alt={capabilities[selectedCapability].title}
                                    className="w-full h-auto rounded-lg border border-[#1a1a1a]"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

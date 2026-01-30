import { motion } from "framer-motion";
import { LogIn, Settings, Target, Cpu, RefreshCw } from "lucide-react";

const phases = [
    {
        number: 1,
        title: "Login & Onboarding",
        description: "Create your secure credentials and step inside the Command Center. You are no longer drifting; you have entered the grid.",
        icon: LogIn,
    },
    {
        number: 2,
        title: "Configuration",
        subtitle: "(Areas & Projects)",
        description: "Configure your key Areas (Health, Wealth, Intel). Deploy specific Projects within each sector and break them down into executable Tasks.",
        icon: Settings,
    },
    {
        number: 3,
        title: "Resource Allocation",
        subtitle: "(Priorities, Habits & Finances)",
        description: "Set your Priorities, what matters most. Calibrate your Habits (Bio-Dome). Input your Finances (The Vault) to track your fuel. The system is now loaded with your objectives.",
        icon: Target,
    },
    {
        number: 4,
        title: "Engage Autopilot",
        subtitle: "(System Active)",
        description: "From this moment, the System works for you. It tracks your progress, holds your focus, and manages the entropy. You don't carry the weight; the framework does.",
        icon: Cpu,
    },
    {
        number: 5,
        title: "The Daily Sync",
        subtitle: "(Execute)",
        description: "Connect once a day. Review the status, complete the daily log, update your tasks, and watch your stats rise. See the loop close. See the game progress. See the results in real life.",
        icon: RefreshCw,
    },
];

export const Roadmap = () => {
    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-4"
                >
                    Quick Start
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white"
                >
                    ROADMAP
                </motion.h2>
            </div>

            {/* Phases */}
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical line connecting phases */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent" />

                <div className="space-y-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex gap-6 md:gap-8"
                        >
                            {/* Phase number indicator */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0a0a0a] border border-amber-500/50 rounded-lg flex items-center justify-center group hover:border-amber-500 hover:shadow-[0_0_20px_rgba(255,184,0,0.3)] transition-all duration-300">
                                    <phase.icon className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                                </div>
                            </div>

                            {/* Phase content */}
                            <div className="flex-1 pb-8">
                                <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300 group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-amber-500 font-mono text-xs tracking-wider">
                                            PHASE {phase.number}
                                        </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-mono font-semibold text-white mb-1 group-hover:text-amber-500 transition-colors">
                                        {phase.title}
                                    </h3>
                                    {phase.subtitle && (
                                        <p className="text-sm font-mono text-gray-500 mb-3">
                                            {phase.subtitle}
                                        </p>
                                    )}
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

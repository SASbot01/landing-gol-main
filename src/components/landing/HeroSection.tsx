import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
            {/* Ambient glow - transparent to show grid background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-8"
                >
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-sm font-mono">
                        <span className="w-2 h-2 bg-green-500 rounded-full status-dot" />
                        <span className="text-gray-400">SYSTEM STATUS:</span>
                        <span className="text-green-500">ONLINE</span>
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight mb-6 leading-[1.1]"
                >
                    <span className="text-white">THE OPERATING SYSTEM</span>
                    <br />
                    <span className="text-white">FOR YOUR </span>
                    <span className="text-amber-glow">REALITY</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
                >
                    Transcend the assisted chaos. A tactical framework designed to{" "}
                    <span className="text-white">defend wealth</span>,{" "}
                    <span className="text-white">command biology</span>, and{" "}
                    <span className="text-white">execute strategy</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <Link to="/checkout">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-mono font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_40px_rgba(255,184,0,0.5)]"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-amber-900">&gt;</span>
                                INITIALIZE PROTOCOL
                            </span>
                        </motion.button>
                    </Link>

                    {/* Secondary CTA */}
                    <Link to="/walkthrough">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-[#333] hover:border-amber-500/50 text-white font-mono font-medium text-sm tracking-wider rounded-lg transition-all duration-300"
                        >
                            <Play className="w-4 h-4 text-amber-500" />
                            SYSTEM BRIEFING
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[#333] rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-amber-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

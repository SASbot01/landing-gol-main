import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

export const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { checkoutUrl } = useCountdown();

    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Spinning Logo with hover effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center mb-8"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`relative p-2 rounded-full transition-all duration-300 ${
                            isHovered
                                ? 'shadow-[0_0_40px_rgba(255,184,0,0.6),0_0_80px_rgba(255,184,0,0.3)]'
                                : ''
                        }`}
                    >
                        {/* Glow ring on hover */}
                        {isHovered && (
                            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-pulse" />
                        )}
                        <motion.img
                            src="/logo-gol.png"
                            alt="GOL Logo"
                            className="w-20 h-20 md:w-24 md:h-24 relative z-10 cursor-pointer"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: isHovered ? 5 : 20, // 4x faster on hover (20/4 = 5)
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>
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

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex items-center justify-center"
                >
                    {/* Primary CTA - Dynamic URL based on countdown */}
                    <Link to={checkoutUrl}>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-mono font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_40px_rgba(255,184,0,0.5)]"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-amber-900">&gt;</span>
                                INITIALIZE PROTOCOL
                            </span>
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

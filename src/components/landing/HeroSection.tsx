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
                                duration: isHovered ? 5 : 20,
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
                    className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight mb-4 leading-[1.1]"
                >
                    <span className="text-white">Grow in the </span>
                    <span className="text-amber-glow">Game</span>
                    <br />
                    <span className="text-gray-400 text-3xl md:text-4xl lg:text-5xl">See results in </span>
                    <span className="text-amber-glow text-3xl md:text-4xl lg:text-5xl">Real Life</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 font-sans leading-relaxed"
                >
                    In a game everything is recorded, so you seek progress; in life, if you don't measure your most important aspects, you enter a loop without knowing what is happening.
                </motion.p>

                {/* Second Headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-10 font-mono leading-relaxed"
                >
                    Turn your chaos and fragmentation into order and control to transform your life without setting Notions or spreadsheets that break.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex items-center justify-center"
                >
                    <Link to={checkoutUrl}>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-mono font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_40px_rgba(255,184,0,0.5)]"
                        >
                            ACCESS NOW
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
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

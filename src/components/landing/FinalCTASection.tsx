import { motion } from "framer-motion";
import { Check, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountdown } from "@/hooks/useCountdown";

const bonuses = [
    { icon: Users, text: "Founders Community" },
    { icon: Video, text: "Monthly Strategy Calls" },
];

export const FinalCTASection = () => {
    const { checkoutUrl } = useCountdown();

    return (
        <section className="relative py-12 md:py-16 px-6">
            <div className="max-w-xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-[#0a0a0a] border-2 border-amber-500/50 rounded-2xl p-8 md:p-10 border-pulse"
                >
                    {/* Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 bg-amber-500 text-black font-mono text-xs font-bold tracking-wider rounded-full">
                            FOUNDER'S ACCESS
                        </span>
                    </div>

                    {/* Content */}
                    <div className="text-center pt-4">
                        {/* Price comparison */}
                        <div className="mb-6">
                            <div className="text-gray-500 text-sm font-mono mb-2">
                                <span className="line-through">Before: $50/month</span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-5xl md:text-6xl font-mono font-bold text-white">
                                    $67
                                </span>
                            </div>
                            <div className="text-amber-500 font-mono text-sm tracking-wider mt-2">
                                ONE-TIME PAYMENT • LIFETIME ACCESS
                            </div>
                        </div>

                        {/* Warning text */}
                        <p className="text-gray-400 text-sm md:text-base mb-6 font-sans border border-amber-500/20 bg-amber-500/5 rounded-lg p-4">
                            Esta oferta va a terminar en cualquier momento y sin previo aviso.
                        </p>

                        {/* Bonuses */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            {bonuses.map((bonus, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-gray-400 text-sm"
                                >
                                    <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-amber-500" />
                                    </div>
                                    <span className="font-mono text-xs">+ {bonus.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link to={checkoutUrl}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-base md:text-lg tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(255,184,0,0.4)] hover:shadow-[0_0_60px_rgba(255,184,0,0.6)]"
                            >
                                ACCESS NOW
                            </motion.button>
                        </Link>

                        {/* Trust badges */}
                        <div className="mt-6 flex items-center justify-center gap-4 text-gray-500 text-xs font-mono">
                            <span className="flex items-center gap-1">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                Secure Checkout
                            </span>
                            <span>•</span>
                            <span>Instant Access</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

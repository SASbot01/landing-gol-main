import { motion } from "framer-motion";
import { Check, Users, Video, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountdown } from "@/hooks/useCountdown";

const bonuses = [
    { icon: Users, text: "Founders Community" },
    { icon: Video, text: "Monthly Strategy Calls" },
];

export const FinalCTASection = () => {
    const { hours, minutes, seconds, isExpired, checkoutUrl } = useCountdown();

    return (
        <section className="relative py-12 md:py-16 px-6">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

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
                            LAST OPPORTUNITY
                        </span>
                    </div>

                    {/* Content */}
                    <div className="text-center pt-4">
                        {/* Countdown Timer */}
                        {!isExpired ? (
                            <>
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-red-500" />
                                    <span className="font-mono text-sm text-red-500">Offer expires in:</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="bg-[#1a1a1a] border border-red-500/30 rounded-lg px-4 py-2">
                                        <span className="text-2xl md:text-3xl font-mono font-bold text-white">
                                            {String(hours).padStart(2, '0')}
                                        </span>
                                        <span className="block text-xs text-gray-500 font-mono">HRS</span>
                                    </div>
                                    <span className="text-2xl text-red-500 font-bold">:</span>
                                    <div className="bg-[#1a1a1a] border border-red-500/30 rounded-lg px-4 py-2">
                                        <span className="text-2xl md:text-3xl font-mono font-bold text-white">
                                            {String(minutes).padStart(2, '0')}
                                        </span>
                                        <span className="block text-xs text-gray-500 font-mono">MIN</span>
                                    </div>
                                    <span className="text-2xl text-red-500 font-bold">:</span>
                                    <div className="bg-[#1a1a1a] border border-red-500/30 rounded-lg px-4 py-2">
                                        <span className="text-2xl md:text-3xl font-mono font-bold text-white">
                                            {String(seconds).padStart(2, '0')}
                                        </span>
                                        <span className="block text-xs text-gray-500 font-mono">SEC</span>
                                    </div>
                                </div>

                                {/* Subtitle for discount */}
                                <p className="text-gray-400 text-sm md:text-base mb-6 font-sans">
                                    Limited time founder pricing.
                                    <br />
                                    <span className="text-amber-500 font-semibold">Save $30 before the timer runs out.</span>
                                </p>

                                {/* Price with discount */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-2xl text-gray-500 line-through font-mono">$97</span>
                                        <span className="text-5xl md:text-6xl font-mono font-bold text-white">
                                            $67
                                        </span>
                                        <span className="px-2 py-1 bg-red-600 text-white text-xs font-mono font-bold rounded">
                                            -30%
                                        </span>
                                    </div>
                                    <div className="text-amber-500 font-mono text-sm tracking-wider mt-2">
                                        LIFETIME ACCESS
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Expired state */}
                                <p className="text-gray-400 text-sm md:text-base mb-6 font-sans">
                                    The discount has expired, but you can still get lifetime access.
                                </p>

                                {/* Price without discount */}
                                <div className="mb-6">
                                    <span className="text-5xl md:text-6xl font-mono font-bold text-white">
                                        $97
                                    </span>
                                    <div className="text-amber-500 font-mono text-sm tracking-wider mt-2">
                                        LIFETIME ACCESS
                                    </div>
                                </div>
                            </>
                        )}

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

                        {/* CTA Button - Dynamic URL */}
                        <Link to={checkoutUrl}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-base md:text-lg tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(255,184,0,0.4)] hover:shadow-[0_0_60px_rgba(255,184,0,0.6)]"
                            >
                                {isExpired ? 'CLAIM $97 LIFETIME ACCESS' : 'CLAIM $67 LIFETIME ACCESS'}
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

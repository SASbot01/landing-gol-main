import { useEffect } from "react";
import { CheckCircle, Users, ArrowRight } from "lucide-react";
import { DISCORD_COMMUNITY_LINK } from "@/lib/constants";

export default function ThankYou() {
    // Track Purchase event when page loads
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Purchase', {
                value: 97.00,
                currency: 'USD',
                content_name: 'Game of Life - Founders Access',
                content_type: 'product'
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,0,0.05)_0%,transparent_70%)]" />
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-command-orange/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-command-orange/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl w-full">
                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-command-orange/20 rounded-full blur-xl animate-pulse" />
                        <CheckCircle className="w-24 h-24 text-command-orange relative animate-bounce" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 chamfered backdrop-blur-sm">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-command-orange/10 border border-command-orange/20 text-command-orange text-xs font-mono tracking-widest uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-command-orange opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-command-orange"></span>
                            </span>
                            PAYMENT SUCCESSFUL
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-tight">
                            Welcome to <span className="text-command-orange">Game of Life</span>!
                        </h1>

                        <p className="font-mono text-gray-400 text-lg leading-relaxed">
                            Thank you for joining the founders. Your lifetime access has been activated.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10 my-8" />

                    {/* Discord Section */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-command-orange/10 rounded-lg border border-command-orange/20">
                                <Users className="w-6 h-6 text-command-orange" />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-xl text-white mb-2">
                                    Join the Discord Community
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Our Game of Life team is available on Discord to help you with any questions or issues.
                                    Connect with other founders and get direct support from the team.
                                </p>

                                <a
                                    href={DISCORD_COMMUNITY_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:shadow-[0_0_30px_rgba(255,153,0,0.5)] chamfered-sm group"
                                >
                                    <span>Join Discord</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10 my-8" />

                    {/* Next Steps */}
                    <div className="space-y-4">
                        <h3 className="font-display text-lg text-white mb-4">Next Steps:</h3>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-command-orange/20 border border-command-orange/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-command-orange text-xs">1</span>
                                </div>
                                <p className="text-gray-400">
                                    Check your email for access credentials to the platform
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-command-orange/20 border border-command-orange/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-command-orange text-xs">2</span>
                                </div>
                                <p className="text-gray-400">
                                    Join our Discord community for support and updates
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-command-orange/20 border border-command-orange/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-command-orange text-xs">3</span>
                                </div>
                                <p className="text-gray-400">
                                    Start gamifying your life and achieve your goals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm font-mono">
                        Have questions? We're here to help you on Discord
                    </p>
                </div>
            </div>
        </div>
    );
}

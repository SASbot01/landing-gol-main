import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Activity, Cpu, LayoutDashboard, Wallet, Brain, Radio } from "lucide-react";
import { type Language } from "@/lib/i18n";

interface InterfaceCarouselProps {
    lang?: Language;
}

const TABS = [
    {
        id: "main-deck",
        label: "MAIN DECK",
        icon: LayoutDashboard,
        image: "/assets/screens/main-deck.png",
        desc: "Area Performance Dashboard"
    },
    {
        id: "command-center",
        label: "COMMAND CENTER",
        icon: Activity,
        image: "/assets/screens/command-center.png",
        desc: "Tactical Overview & Status"
    },
    {
        id: "bio-dome",
        label: "BIO DOME",
        icon: Radio,
        image: null, // Placeholder
        desc: "Biological Status Monitor"
    },
    {
        id: "ops-center",
        label: "OPS CENTER",
        icon: Cpu,
        image: "/assets/screens/ops-center.png",
        desc: "Mission Control & Task Management"
    },
    {
        id: "vault",
        label: "THE VAULT",
        icon: Wallet,
        image: "/assets/screens/vault.png",
        desc: "Financial Intelligence Unit"
    },
    {
        id: "cortex",
        label: "CORTEX",
        icon: Brain,
        image: "/assets/screens/cortex.png",
        desc: "Neural Link & Knowledge Base"
    }
];

export const InterfaceCarousel = ({ lang: _lang = 'en' }: InterfaceCarouselProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,rgba(255,153,0,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-2xl md:text-4xl text-white mb-4 tracking-tight uppercase">
                            <span className="text-command-orange">SYSTEM INTERFACE</span> OVERVIEW
                        </h2>
                        <p className="font-mono text-gray-400 text-xs md:text-sm tracking-widest uppercase max-w-2xl mx-auto">
                            Select a module to inspect capabilities
                        </p>
                    </motion.div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex overflow-x-auto pb-6 mb-8 md:mb-12 gap-2 md:justify-center no-scrollbar fade-edge-x px-4 -mx-4 md:mx-0">
                    {TABS.map((tab, index) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === index;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 border transition-all duration-300 min-w-max chamfered-sm cursor-pointer group/tab relative overflow-hidden
                                    ${isActive
                                        ? "bg-command-orange/10 border-command-orange text-white shadow-[0_0_20px_rgba(255,153,0,0.2)]"
                                        : "bg-zinc-900/50 border-white/10 text-gray-500 hover:text-gray-300 hover:bg-zinc-800/80 hover:border-white/30"}
                                `}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-command-orange/5 animate-pulse" />
                                )}
                                <Icon className={`w-4 h-4 z-10 relative transition-colors duration-300 ${isActive ? "text-command-orange scale-110" : "text-gray-500 group-hover/tab:text-gray-300"}`} />
                                <span className="font-mono text-xs md:text-sm tracking-wider font-bold uppercase z-10 relative">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Main Display Area */}
                <div className="max-w-6xl mx-auto relative group">
                    <div className="relative border border-white/10 bg-zinc-900/50 p-2 md:p-4 chamfered transition-colors duration-500 hover:border-white/20">

                        {/* Corner Accents */}
                        <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-command-orange/50" />
                        <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-command-orange/50" />
                        <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-command-orange/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-command-orange/20 to-transparent" />

                        {/* Content Container */}
                        <div className="relative aspect-[16/10] md:aspect-[16/9] bg-black overflow-hidden shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 1.02, filter: "brightness(0.5) blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.98, filter: "brightness(0.5) blur(5px)" }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                                >
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

                                    {TABS[activeTab].image ? (
                                        <img
                                            src={TABS[activeTab].image!}
                                            alt={TABS[activeTab].label}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full bg-zinc-900/80 backdrop-blur-sm relative overflow-hidden">
                                            {/* Security Pattern Background */}
                                            <div className="absolute inset-0 opacity-10" style={{
                                                backgroundImage: `repeating-linear-gradient(45deg, #FF2A2A 0, #FF2A2A 1px, transparent 0, transparent 50%)`,
                                                backgroundSize: '10px 10px'
                                            }} />

                                            <div className="w-24 h-24 mb-6 relative">
                                                <div className="absolute inset-0 bg-alert-red/20 animate-ping rounded-full duration-[3s]" />
                                                <div className="absolute inset-0 bg-alert-red/10 rounded-full animate-pulse" />
                                                <Lock className="w-24 h-24 text-alert-red relative z-10 drop-shadow-[0_0_15px_rgba(255,42,42,0.5)]" />
                                            </div>

                                            <h3 className="font-display text-3xl md:text-4xl text-alert-red mb-2 uppercase tracking-[0.2em] animate-pulse">
                                                SIGNAL ENCRYPTED
                                            </h3>

                                            <div className="font-mono text-alert-red/80 text-xs md:text-sm uppercase tracking-widest max-w-lg space-y-2 relative z-10 bg-black/50 p-4 border border-alert-red/20 chamfered-sm">
                                                <p>Biometric data stream intercepted.</p>
                                                <p>Security Clearance <span className="text-white font-bold">LEVEL 5</span> required for visual feedback.</p>
                                            </div>

                                            {/* Simulated Connection Log */}
                                            <div className="mt-8 font-mono text-[10px] text-left w-64 space-y-1 text-red-500/60 opacity-70">
                                                <div className="flex justify-between">
                                                    <span>&gt; ESTABLISHING LINK...</span>
                                                    <span>FAIL</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>&gt; BYPASSING FIREWALL...</span>
                                                    <span>DENIED</span>
                                                </div>
                                                <div className="flex justify-between animate-pulse text-red-500">
                                                    <span>&gt; TERMINATING CONNECTION</span>
                                                    <span>[OK]</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* UI Overlay Details */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 md:p-8 z-30 flex justify-between items-end">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 bg-command-orange animate-pulse" />
                                        <span className="font-mono text-command-orange text-xs uppercase tracking-widest">
                                            LIVE FEED // {TABS[activeTab].id.toUpperCase()}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl md:text-3xl text-white uppercase tracking-tight">
                                        {TABS[activeTab].desc}
                                    </h3>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="font-mono text-[10px] text-gray-500 uppercase">
                                        SECURE CONNECTION
                                    </div>
                                    <div className="font-mono text-xs text-command-orange uppercase">
                                        ENCRYPTED
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

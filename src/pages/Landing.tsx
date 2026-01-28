import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { TerminalSection } from "@/components/landing/TerminalSection";
import { BentoGrid } from "@/components/landing/BentoGrid";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FooterSection } from "@/components/landing/FooterSection";

export default function Landing() {
    return (
        <div className="landing-container min-h-screen text-white font-sans overflow-x-hidden relative">
            {/* Fixed Header */}
            <header className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-amber-500 rounded-full status-dot" />
                        <span className="font-mono text-sm text-white tracking-widest">
                            GOL // SYSTEM
                        </span>
                    </div>

                    {/* Nav */}
                    <nav className="flex items-center gap-6">
                        <a
                            href="https://gol.blackwolfsec.io/auth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-gray-400 hover:text-amber-500 transition-colors tracking-wider"
                        >
                            LOGIN
                        </a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <HeroSection />
                <SocialProofSection />
                <TerminalSection />
                <BentoGrid />
                <FinalCTASection />
            </main>

            <FooterSection />
        </div>
    );
}

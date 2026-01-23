import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { type Language } from "@/lib/i18n";

interface SystemHeaderProps {
    lang: Language;
    toggleLanguage: () => void;
}

export const SystemHeader = ({ lang, toggleLanguage }: SystemHeaderProps) => {
    return (
        <nav className="fixed top-10 w-full z-[70] bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-command-orange rounded-full animate-pulse shadow-[0_0_10px_#FF9900]" />
                    <span className="font-mono text-sm text-command-orange tracking-widest hidden md:inline-block">SYSTEM STATUS: ONLINE</span>
                </div>

                <div className="flex items-center gap-4 font-mono text-xs">
                    <span className="text-muted-foreground hidden md:inline-block">ENCRYPTION: AES-256</span>
                    <div className="h-4 w-[1px] bg-white/20 hidden md:block" />

                    <LanguageToggle currentLang={lang} onToggle={toggleLanguage} />

                    <a href="https://gol.blackwolfsec.io/auth" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" className="font-mono text-xs hover:bg-white/10 hover:text-white text-muted-foreground">
                            [ LOGIN ]
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

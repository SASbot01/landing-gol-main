import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/i18n";

interface LanguageToggleProps {
    currentLang: Language;
    onToggle: () => void;
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
    return (
        <button
            onClick={onToggle}
            className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20",
                "bg-background/50 backdrop-blur-sm hover:bg-white/10 transition-colors",
                "text-sm font-mono text-muted-foreground hover:text-white"
            )}
            aria-label="Toggle language"
        >
            <Languages className="w-4 h-4" />
            <span className="uppercase font-bold">{currentLang}</span>
        </button>
    );
}

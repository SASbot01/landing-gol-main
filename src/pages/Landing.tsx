import { useState } from "react";
import { type Language } from "@/lib/i18n";
import { SystemHeader } from "@/components/landing/SystemHeader";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
    const [lang, setLang] = useState<Language>('en');

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'es' : 'en');
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 overflow-x-hidden cursor-reticle">
            <SystemHeader lang={lang} toggleLanguage={toggleLanguage} />

            <main>
                <Hero lang={lang} />
            </main>

            <Footer lang={lang} />
        </div>
    );
}

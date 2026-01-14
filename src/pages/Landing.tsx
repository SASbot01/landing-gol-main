import { useState } from "react";
import { type Language } from "@/lib/i18n";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { SystemHeader } from "@/components/landing/SystemHeader";
import { Hero } from "@/components/landing/Hero";
import { Objections } from "@/components/landing/Objections";
import { InterfaceCarousel } from "@/components/landing/InterfaceCarousel";
import { ModelExplanation } from "@/components/landing/ModelExplanation";
import { Journey } from "@/components/landing/Journey";
import { Stacking } from "@/components/landing/Stacking";
import { Comparison } from "@/components/landing/Comparison";
import { FAQ } from "@/components/landing/FAQ";
import { FloatingCTA } from "@/components/landing/FloatingCTA";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
    const [lang, setLang] = useState<Language>('en');

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'es' : 'en');
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 overflow-x-hidden cursor-reticle">
            <AnnouncementBar lang={lang} />
            <SystemHeader lang={lang} toggleLanguage={toggleLanguage} />

            <main>
                <Hero lang={lang} />
                <Objections lang={lang} />
                <InterfaceCarousel lang={lang} />
                <ModelExplanation lang={lang} />
                {/* Testimonials would go here */}
                <Journey lang={lang} />
                <Stacking />
                {/* Video Testimonials would go here */}
                {/* Video Testimonials would go here */}
                <Comparison lang={lang} />
                <FAQ lang={lang} />
            </main>

            <Footer lang={lang} />
            <FloatingCTA lang={lang} />
        </div>
    );
}

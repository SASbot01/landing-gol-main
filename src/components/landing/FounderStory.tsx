import { type Language, getTranslation } from "@/lib/i18n";

interface FounderStoryProps {
    lang?: Language;
}

export const FounderStory = ({ lang = 'en' }: FounderStoryProps) => {
    const t = getTranslation(lang);

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-4xl border-l-2 border-command-orange/50 pl-8 md:pl-16 relative">
                {/* Quote icon decoration */}
                <div className="absolute -left-4 top-0 bg-black text-command-orange text-6xl font-display leading-none">"</div>

                <h2 className="font-display text-2xl md:text-4xl text-white mb-6 uppercase">
                    {t.founder.title} <span className="text-command-orange">@yzanpm</span>
                </h2>

                <div className="prose prose-invert prose-lg text-gray-400 font-mono text-sm md:text-base leading-relaxed space-y-6">
                    <p>{t.founder.p1}</p>
                    <p>{t.founder.p2}</p>
                    <p>
                        {t.founder.p3} <span className="text-white italic">{t.founder.quote}</span>
                    </p>
                    <p>{t.founder.p4}</p>
                    <p>{t.founder.p5}</p>
                    <p className="text-white font-bold uppercase tracking-widest pt-4">
                        {t.founder.footer}
                    </p>
                </div>
            </div>
        </section>
    );
};

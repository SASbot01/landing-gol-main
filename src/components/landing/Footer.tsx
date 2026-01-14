import { type Language, getTranslation } from "@/lib/i18n";

interface FooterProps {
    lang?: Language;
}

export const Footer = ({ lang = 'en' }: FooterProps) => {
    const t = getTranslation(lang);

    return (
        <footer className="py-12 border-t border-white/10 bg-black text-center font-mono text-xs text-gray-500">
            <div className="container mx-auto px-6 space-y-4">
                <h3 className="text-white font-display text-xl uppercase tracking-widest">BLACKWOLF HOLDINGS // INTELLIGENCE DIVISION</h3>
                <p>© 2026 BLACKWOLF HOLDINGS. ALL RIGHTS RESERVED.</p>

                <div className="flex justify-center gap-6 text-command-orange/80">
                    <span>{t.footer.privacy}</span>
                    <span>{t.footer.terms}</span>
                    <span>{t.footer.refund}</span>
                </div>

                <div className="pt-4 opacity-50">
                    Contact Command: support@blackwolfsec.io
                </div>
            </div>
        </footer>
    );
};

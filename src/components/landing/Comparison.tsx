import { Check } from "lucide-react";
import { type Language, getTranslation } from "@/lib/i18n";

interface ComparisonProps {
    lang?: Language;
}

export const Comparison = ({ lang = 'en' }: ComparisonProps) => {
    const t = getTranslation(lang);

    return (
        <section className="py-24 bg-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-2xl text-white mb-4">{t.comparison.title}</h2>
                    <p className="font-mono text-command-orange uppercase tracking-widest">
                        {t.comparison.subtitle}
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-sm border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-white/20">
                                {t.comparison.headers.map((header, i) => (
                                    <th key={i} className={`p-4 font-normal w-1/4 ${i === 3 ? 'bg-command-orange/20 text-command-orange font-bold border-x border-command-orange/50' : 'text-gray-500'}`}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {t.comparison.rows.map((row, i) => (
                                <tr key={i}>
                                    <td className="p-4 text-white">{row.title}</td>
                                    <td className="p-4 text-gray-400">{row.toy}</td>
                                    <td className="p-4 text-gray-400">{row.public}</td>
                                    <td className={`p-4 text-white bg-command-orange/10 border-x border-command-orange/30 ${i === 1 ? 'font-bold text-command-orange flex items-center gap-2' : ''} ${i === 3 ? 'font-display text-lg tracking-wider' : ''}`}>
                                        {i === 1 && <Check className="w-4 h-4" />}
                                        {i === 2 && row.gol === 'RADICAL CENTRALIZATION' ? row.gol : row.gol}
                                        {i !== 1 && i !== 2 && row.gol}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

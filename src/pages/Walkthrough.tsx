import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Lock, CheckCircle, Gift, ArrowRight, AlertTriangle, Zap } from "lucide-react";
import { type Language } from "@/lib/i18n";
import { SystemHeader } from "@/components/landing/SystemHeader";
import { Footer } from "@/components/landing/Footer";
import { PopupSystem } from "@/components/landing/PopupSystem";

export default function Walkthrough() {
    const navigate = useNavigate();
    const [lang, setLang] = useState<Language>('en');
    const [showEarlyCTA, setShowEarlyCTA] = useState(false);
    const [popupActive, setPopupActive] = useState(false);
    const [allPopupsClosed, setAllPopupsClosed] = useState(false);

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'es' : 'en');
    };

    // Check localStorage on mount to restore state
    useEffect(() => {
        const popup2Closed = localStorage.getItem('gol_popup2_closed');
        if (popup2Closed) {
            // User has already gone through all popups - show Last Opportunity directly
            setAllPopupsClosed(true);
            setShowEarlyCTA(false);
        }
    }, []);

    // Track ViewContent when video page loads
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'ViewContent', {
                content_name: 'GOL System Briefing Video',
                content_category: 'Video',
                content_type: 'video'
            });
        }
    }, []);

    // Show early CTA button after 10 seconds (only if popups haven't been exhausted)
    useEffect(() => {
        // Don't show early CTA if user already went through all popups
        const popup2Closed = localStorage.getItem('gol_popup2_closed');
        if (popup2Closed) return;

        const timer = setTimeout(() => {
            if (!popupActive && !allPopupsClosed) {
                setShowEarlyCTA(true);
            }
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, [popupActive, allPopupsClosed]);

    // Listen for popup events
    useEffect(() => {
        const handlePopupOpened = () => {
            setPopupActive(true);
            setShowEarlyCTA(false); // Hide early CTA when popup opens
        };

        const handleAllPopupsClosed = () => {
            setPopupActive(false);
            setAllPopupsClosed(true);
            // Scroll to Last Opportunity section after a short delay
            setTimeout(() => {
                const lastOpportunity = document.getElementById('last-opportunity');
                if (lastOpportunity) {
                    lastOpportunity.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        };

        window.addEventListener('popupOpened', handlePopupOpened);
        window.addEventListener('allPopupsClosed', handleAllPopupsClosed);

        return () => {
            window.removeEventListener('popupOpened', handlePopupOpened);
            window.removeEventListener('allPopupsClosed', handleAllPopupsClosed);
        };
    }, []);

    const handleEarlyCTA = () => {
        // Check if user already exhausted popups - don't allow reset
        const popup2Closed = localStorage.getItem('gol_popup2_closed');
        if (popup2Closed) {
            // If they've already seen all offers, just scroll to last opportunity
            const lastOpportunity = document.getElementById('last-opportunity');
            if (lastOpportunity) {
                lastOpportunity.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Trigger popup via custom event (but don't clear localStorage)
        window.dispatchEvent(new CustomEvent('triggerPopup'));
    };

    const handleLastChanceCTA = () => {
        // Track event
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
                value: 97.00,
                currency: 'USD',
                content_name: 'GOL - Last Opportunity $97',
                content_category: 'Lifetime Access'
            });
        }
        navigate('/checkout?price=97');
    };

    const copy = {
        en: {
            title: "SEE GOL // SYSTEM IN ACTION",
            subtitle: "Watch how operators command their reality",
            valueStack: {
                title: "WHAT YOU GET",
                items: [
                    { name: "GOL // SYSTEM: Complete Platform Access", value: "$497", desc: "All 3 engines: Vault, Ops Center, Bio-Dome" },
                    { name: "Onboarding Protocol", value: "$97", desc: "Step-by-step setup to go live in 24 hours" },
                    { name: "Wealth Defense Blueprint", value: "$147", desc: "Protect and grow your assets systematically" },
                    { name: "Commander's Playbook", value: "$97", desc: "Weekly templates and SOPs for execution" },
                ],
                bonusTitle: "FOUNDER BONUSES",
                bonuses: [
                    { name: "Private Founders Community", value: "$197" },
                    { name: "Monthly Strategy Calls", value: "$297" },
                    { name: "Priority Feature Requests", value: "Priceless" },
                ],
                total: "Total Value: $1,332+",
                unlock: {
                    title: "🔒 UNLOCK YOUR EXCLUSIVE PRICE",
                    subtitle: "Watch the briefing above to reveal founder pricing",
                    normalPrice: "Normal price: $97/month",
                    hint: "Founders get lifetime access. 8/15 slots available."
                },
                lastChance: {
                    title: "⚠️ LAST OPPORTUNITY",
                    subtitle: "You can't get it for $68 anymore...",
                    body: "But we'll honor the founder price for you.",
                    price: "$97",
                    priceLabel: "LIFETIME ACCESS",
                    slots: "8/15 founder slots remaining",
                    warning: "Once filled, price goes to $97/month",
                    cta: "CLAIM $97 LIFETIME"
                },
                earlyCTA: "Watched enough? See the offer →"
            }
        },
        es: {
            title: "MIRA GOL // SYSTEM EN ACCIÓN",
            subtitle: "Observa cómo los operadores comandan su realidad",
            valueStack: {
                title: "LO QUE OBTIENES",
                items: [
                    { name: "GOL // SYSTEM: Acceso Completo", value: "$497", desc: "Los 3 motores: Vault, Ops Center, Bio-Dome" },
                    { name: "Protocolo de Onboarding", value: "$97", desc: "Configuración paso a paso en 24 horas" },
                    { name: "Blueprint de Defensa de Riqueza", value: "$147", desc: "Protege y crece tus activos sistemáticamente" },
                    { name: "Playbook del Comandante", value: "$97", desc: "Templates semanales y SOPs de ejecución" },
                ],
                bonusTitle: "BONUSES DE FUNDADOR",
                bonuses: [
                    { name: "Comunidad Privada de Fundadores", value: "$197" },
                    { name: "Llamadas Mensuales de Estrategia", value: "$297" },
                    { name: "Solicitudes de Features Prioritarias", value: "Invaluable" },
                ],
                total: "Valor Total: $1,332+",
                unlock: {
                    title: "🔒 DESBLOQUEA TU PRECIO EXCLUSIVO",
                    subtitle: "Mira el briefing arriba para revelar el precio de fundador",
                    normalPrice: "Precio normal: $97/mes",
                    hint: "Los fundadores obtienen acceso de por vida. 8/15 plazas disponibles."
                },
                lastChance: {
                    title: "⚠️ ÚLTIMA OPORTUNIDAD",
                    subtitle: "Ya no puedes obtenerlo por $68...",
                    body: "Pero te honraremos el precio de fundador.",
                    price: "$97",
                    priceLabel: "ACCESO DE POR VIDA",
                    slots: "8/15 plazas de fundador restantes",
                    warning: "Una vez llenas, el precio sube a $97/mes",
                    cta: "RECLAMAR $97 DE POR VIDA"
                },
                earlyCTA: "¿Viste suficiente? Ver la oferta →"
            }
        }
    };

    const t = copy[lang];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 overflow-x-hidden">
            <SystemHeader lang={lang} toggleLanguage={toggleLanguage} />

            <main className="pt-32 pb-16">
                <div className="container mx-auto px-6">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight mb-4">
                            {t.title}
                        </h1>
                        <p className="font-mono text-gray-400">
                            {t.subtitle}
                        </p>
                    </motion.div>

                    {/* Video Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="relative aspect-video bg-zinc-900 border border-white/10 chamfered overflow-hidden group">
                            <iframe
                                src="https://www.loom.com/embed/d388117705f34663adb2c3049d3f5833"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                            {/* Play overlay for visual interest before load */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-0 pointer-events-none transition-opacity">
                                <div className="w-20 h-20 bg-command-orange/20 border-2 border-command-orange rounded-full flex items-center justify-center">
                                    <Play className="w-10 h-10 text-command-orange fill-command-orange ml-1" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Early CTA - appears after 30 seconds, hidden when popup opens */}
                    {showEarlyCTA && !popupActive && !allPopupsClosed && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto mb-8 text-center"
                        >
                            <button
                                onClick={handleEarlyCTA}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-command-orange/10 hover:bg-command-orange/20 border border-command-orange/30 text-command-orange font-mono text-sm transition-all chamfered group"
                            >
                                {t.valueStack.earlyCTA}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    )}

                    {/* Value Stack - Detailed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto mb-12"
                    >
                        <div className="bg-zinc-900/50 border border-white/10 p-6 md:p-8 chamfered">
                            <h2 className="font-mono text-sm text-command-orange uppercase tracking-widest mb-6 text-center font-bold">
                                {t.valueStack.title}
                            </h2>

                            {/* Main items with descriptions */}
                            <div className="space-y-4 mb-6">
                                {t.valueStack.items.map((item, index) => (
                                    <div key={index} className="flex justify-between items-start border-b border-white/5 pb-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="font-mono text-sm text-white">{item.name}</span>
                                            </div>
                                            <p className="font-mono text-xs text-gray-500 ml-6 mt-1">{item.desc}</p>
                                        </div>
                                        <span className="font-mono text-sm text-gray-400">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bonuses */}
                            <div className="border-t border-command-orange/30 pt-4 mb-6">
                                <h3 className="font-mono text-xs text-command-orange uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Gift className="w-4 h-4" />
                                    {t.valueStack.bonusTitle}
                                </h3>
                                <div className="space-y-2">
                                    {t.valueStack.bonuses.map((bonus, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="font-mono text-sm text-gray-300">+ {bonus.name}</span>
                                            <span className="font-mono text-xs text-command-orange">{bonus.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Total */}
                            <div className="text-center border-t border-white/10 pt-4">
                                <span className="font-mono text-lg text-gray-400 line-through">{t.valueStack.total}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Conditional Section: Unlock OR Last Chance */}
                    <motion.div
                        id="last-opportunity"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-xl mx-auto text-center"
                    >
                        {allPopupsClosed ? (
                            /* Last Chance Section - after both popups closed */
                            <div className="bg-zinc-800/50 border-2 border-red-500/30 p-8 chamfered shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="font-display text-2xl text-white uppercase mb-2">
                                    {t.valueStack.lastChance.title}
                                </h3>
                                <p className="font-mono text-lg text-red-400 mb-2">
                                    {t.valueStack.lastChance.subtitle}
                                </p>
                                <p className="font-mono text-sm text-gray-400 mb-6">
                                    {t.valueStack.lastChance.body}
                                </p>

                                {/* Price */}
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Zap className="w-6 h-6 text-command-orange" />
                                    <span className="text-5xl font-display text-white">{t.valueStack.lastChance.price}</span>
                                </div>
                                <div className="text-command-orange font-mono text-lg uppercase tracking-widest mb-4">
                                    {t.valueStack.lastChance.priceLabel}
                                </div>

                                {/* Scarcity */}
                                <p className="font-mono text-xs text-red-400 mb-2">
                                    {t.valueStack.lastChance.slots}
                                </p>
                                <p className="font-mono text-xs text-gray-500 mb-6">
                                    {t.valueStack.lastChance.warning}
                                </p>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleLastChanceCTA}
                                    className="w-full py-4 bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg uppercase tracking-widest transition-all chamfered shadow-[0_0_30px_rgba(255,153,0,0.4)]"
                                >
                                    {t.valueStack.lastChance.cta}
                                </motion.button>
                            </div>
                        ) : (
                            /* Unlock Section - before popups shown */
                            <div className="bg-zinc-800/50 border border-command-orange/20 p-8 chamfered">
                                <Lock className="w-12 h-12 text-command-orange mx-auto mb-4" />
                                <h3 className="font-display text-xl text-white uppercase mb-2">
                                    {t.valueStack.unlock.title}
                                </h3>
                                <p className="font-mono text-sm text-gray-400 mb-4">
                                    {t.valueStack.unlock.subtitle}
                                </p>
                                <p className="font-mono text-xs text-gray-500 mb-2">
                                    {t.valueStack.unlock.normalPrice}
                                </p>
                                <p className="font-mono text-xs text-command-orange animate-pulse">
                                    {t.valueStack.unlock.hint}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer lang={lang} />
            <PopupSystem lang={lang} />
        </div>
    );
}

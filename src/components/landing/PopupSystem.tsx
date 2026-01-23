import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, AlertTriangle, Users } from "lucide-react";
import { type Language } from "@/lib/i18n";

interface PopupSystemProps {
    lang?: Language;
}

const POPUP_DELAY_MS = 180000; // 3 minutes
const COUNTDOWN_DURATION_MS = 1 * 60 * 1000; // 1 minute

export const PopupSystem = ({ lang = 'en' }: PopupSystemProps) => {
    const navigate = useNavigate();
    const [activePopup, setActivePopup] = useState<1 | 2 | null>(null);
    const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION_MS);
    const [hasShownPopup1, setHasShownPopup1] = useState(false);
    const [hasShownPopup2, setHasShownPopup2] = useState(false);

    const copy = {
        en: {
            popup1: {
                title: "⚡ FOUNDER'S OFFER UNLOCKED ⚡",
                body: "You watched the briefing. Here's your reward.",
                slots: "🔥 8/15 Founder Slots Available",
                normalPrice: "Normal: $97/month",
                currentPrice: "$67",
                priceLabel: "LIFETIME ACCESS",
                subLabel: "30% OFF. One-time payment. Never pay again.",
                timer: "Offer expires in:",
                cta: "CLAIM 30% OFF LIFETIME",
                dismiss: "No thanks, I'll pay monthly instead"
            },
            popup2: {
                title: "🛑 WAIT — FINAL OFFER 🛑",
                body: "Last chance. Lock in lifetime access now.",
                slots: "⚠️ Only 8 founder slots remain",
                originalPrice: "$97/month",
                currentPrice: "$97",
                priceLabel: "LIFETIME ACCESS",
                subLabel: "One-time payment. Final offer.",
                timer: "This disappears in:",
                cta: "CLAIM LIFETIME ACCESS",
                dismiss: "Close"
            }
        },
        es: {
            popup1: {
                title: "⚡ OFERTA DE FUNDADOR DESBLOQUEADA ⚡",
                body: "Viste el briefing. Aquí está tu recompensa.",
                slots: "🔥 8/15 Plazas de Fundador Disponibles",
                normalPrice: "Normal: $97/mes",
                currentPrice: "$97",
                priceLabel: "ACCESO DE POR VIDA",
                subLabel: "Pago único. Nunca pagues de nuevo.",
                timer: "Oferta expira en:",
                cta: "RECLAMAR ACCESO DE POR VIDA",
                dismiss: "No gracias, prefiero pagar mensual"
            },
            popup2: {
                title: "🛑 ESPERA — OFERTA FINAL 🛑",
                body: "Realmente te queremos dentro. 30% OFF de por vida.",
                slots: "⚠️ Solo quedan 8 plazas de fundador",
                originalPrice: "$97",
                currentPrice: "$68",
                priceLabel: "ACCESO DE POR VIDA",
                subLabel: "30% off. Pago único. Oferta final.",
                timer: "Esto desaparece en:",
                cta: "RECLAMAR 30% OFF DE POR VIDA",
                dismiss: "Cerrar"
            }
        }
    };

    const t = copy[lang];

    // Check localStorage for popup state
    useEffect(() => {
        const popup1Shown = localStorage.getItem('gol_popup1_closed');
        const popup2Shown = localStorage.getItem('gol_popup2_closed');

        if (popup1Shown) setHasShownPopup1(true);
        if (popup2Shown) setHasShownPopup2(true);

        // Load saved countdown end time or set new one
        const savedEndTime = localStorage.getItem('gol_countdown_end');
        if (savedEndTime) {
            const remaining = parseInt(savedEndTime) - Date.now();
            if (remaining > 0) {
                setTimeLeft(remaining);
            }
        } else {
            const endTime = Date.now() + COUNTDOWN_DURATION_MS;
            localStorage.setItem('gol_countdown_end', endTime.toString());
        }
    }, []);

    // Exit intent detection (mouse leaving viewport)
    useEffect(() => {
        if (hasShownPopup1 || activePopup !== null) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                setActivePopup(1);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShownPopup1, activePopup]);

    // Time-based trigger (3 minutes)
    useEffect(() => {
        if (hasShownPopup1 || activePopup !== null) return;

        const timer = setTimeout(() => {
            setActivePopup(1);
        }, POPUP_DELAY_MS);

        return () => clearTimeout(timer);
    }, [hasShownPopup1, activePopup]);

    // Custom event trigger (from early CTA button)
    useEffect(() => {
        const handleTriggerPopup = () => {
            // Check localStorage - don't allow resetting if user already exhausted offers
            const popup2Closed = localStorage.getItem('gol_popup2_closed');
            if (popup2Closed) {
                // User already went through all offers - dispatch allPopupsClosed to show Last Opportunity
                window.dispatchEvent(new CustomEvent('allPopupsClosed'));
                return;
            }

            const popup1Closed = localStorage.getItem('gol_popup1_closed');
            if (popup1Closed) {
                // User already saw popup1 - show popup2 directly
                setHasShownPopup1(true);
                setActivePopup(2);
            } else {
                // First time - show popup1
                setActivePopup(1);
            }
        };

        window.addEventListener('triggerPopup', handleTriggerPopup);
        return () => window.removeEventListener('triggerPopup', handleTriggerPopup);
    }, []);

    // Dispatch popupOpened when popup 1 becomes active
    useEffect(() => {
        if (activePopup === 1) {
            window.dispatchEvent(new CustomEvent('popupOpened'));
        }
    }, [activePopup]);

    // Countdown timer
    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => Math.max(0, prev - 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const closePopup1 = useCallback(() => {
        setActivePopup(null);
        setHasShownPopup1(true);
        localStorage.setItem('gol_popup1_closed', 'true');

        // Trigger popup 2 after a short delay
        if (!hasShownPopup2) {
            setTimeout(() => {
                setActivePopup(2);
                window.dispatchEvent(new CustomEvent('popupOpened'));
            }, 500);
        }
    }, [hasShownPopup2]);

    const closePopup2 = useCallback(() => {
        setActivePopup(null);
        setHasShownPopup2(true);
        localStorage.setItem('gol_popup2_closed', 'true');
        // Notify that all popups are closed
        window.dispatchEvent(new CustomEvent('allPopupsClosed'));
    }, []);

    const handleCTA = (popup: 1 | 2) => {
        // Track event
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
                value: popup === 1 ? 67.00 : 97.00,
                currency: 'USD',
                content_name: popup === 1 ? 'GOL - Lifetime $67 (30% off)' : 'GOL - Lifetime $97',
                content_category: 'Lifetime Access'
            });
        }

        // Navigate to checkout with correct price
        const priceParam = popup === 1 ? '67' : '97';
        navigate(`/checkout?price=${priceParam}`);

        if (popup === 1) {
            closePopup1();
        } else {
            closePopup2();
        }
    };

    return (
        <AnimatePresence>
            {activePopup === 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closePopup1}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-zinc-900 border-2 border-command-orange/50 p-6 md:p-8 chamfered shadow-[0_0_60px_rgba(255,153,0,0.3)]"
                    >
                        {/* Close button */}
                        <button
                            onClick={closePopup1}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center">
                            {/* Title */}
                            <div className="text-2xl md:text-3xl font-display text-command-orange mb-4">
                                {t.popup1.title}
                            </div>

                            {/* Body */}
                            <p className="font-mono text-white text-lg mb-2">
                                {t.popup1.body}
                            </p>

                            {/* Slots scarcity */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-sm mb-4">
                                <Users className="w-4 h-4" />
                                {t.popup1.slots}
                            </div>

                            {/* Price comparison */}
                            <p className="font-mono text-gray-500 text-sm mb-2 line-through">
                                {t.popup1.normalPrice}
                            </p>

                            {/* Current price */}
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Zap className="w-6 h-6 text-command-orange" />
                                <span className="text-5xl font-display text-white">{t.popup1.currentPrice}</span>
                            </div>
                            <div className="text-command-orange font-mono text-lg uppercase tracking-widest mb-1">
                                {t.popup1.priceLabel}
                            </div>
                            <p className="font-mono text-gray-400 text-xs mb-6">
                                {t.popup1.subLabel}
                            </p>

                            {/* Countdown */}
                            <div className="bg-black/50 border border-white/10 p-4 mb-6 rounded">
                                <div className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2">
                                    {t.popup1.timer}
                                </div>
                                <div className="text-3xl font-display text-red-500 font-bold">
                                    {formatTime(timeLeft)}
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleCTA(1)}
                                className="w-full py-4 bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg uppercase tracking-widest transition-all chamfered shadow-[0_0_30px_rgba(255,153,0,0.4)]"
                            >
                                {t.popup1.cta}
                            </motion.button>

                            {/* Dismiss */}
                            <button
                                onClick={closePopup1}
                                className="mt-4 text-gray-500 hover:text-gray-300 font-mono text-xs underline transition-colors"
                            >
                                {t.popup1.dismiss}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {activePopup === 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closePopup2}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-zinc-900 border-2 border-red-500/50 p-6 md:p-8 chamfered shadow-[0_0_60px_rgba(239,68,68,0.3)]"
                    >
                        {/* Close button */}
                        <button
                            onClick={closePopup2}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center">
                            {/* Title */}
                            <div className="text-2xl md:text-3xl font-display text-red-500 mb-4">
                                {t.popup2.title}
                            </div>

                            {/* Body */}
                            <p className="font-mono text-gray-300 text-lg mb-4">
                                {t.popup2.body}
                            </p>

                            {/* Slots scarcity */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-sm mb-4">
                                <AlertTriangle className="w-4 h-4" />
                                {t.popup2.slots}
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="text-2xl text-gray-500 line-through font-mono">{t.popup2.originalPrice}</span>
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                <span className="text-5xl font-display text-white">{t.popup2.currentPrice}</span>
                            </div>
                            <div className="text-red-500 font-mono text-lg uppercase tracking-widest mb-1">
                                {t.popup2.priceLabel}
                            </div>
                            <p className="font-mono text-gray-400 text-xs mb-6">
                                {t.popup2.subLabel}
                            </p>

                            {/* Countdown */}
                            <div className="bg-black/50 border border-red-500/20 p-4 mb-6 rounded">
                                <div className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2">
                                    {t.popup2.timer}
                                </div>
                                <div className="text-3xl font-display text-red-500 font-bold">
                                    {formatTime(timeLeft)}
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleCTA(2)}
                                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-display font-bold text-lg uppercase tracking-widest transition-all chamfered shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                            >
                                {t.popup2.cta}
                            </motion.button>

                            {/* Dismiss */}
                            <button
                                onClick={closePopup2}
                                className="mt-4 text-gray-500 hover:text-gray-300 font-mono text-xs underline transition-colors"
                            >
                                {t.popup2.dismiss}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

import { useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Zap, CheckCircle, Gift, Clock, Users } from "lucide-react";
import { SystemHeader } from "@/components/landing/SystemHeader";
import { type Language } from "@/lib/i18n";

// Load Stripe outside of component
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Payment Link URLs
const PAYMENT_LINK_97 = 'https://buy.stripe.com/00w00i46nfNH9dj2iQ5kk04';
const PAYMENT_LINK_67 = 'https://buy.stripe.com/7sYeVc6ev6d74X3aPm5kk08';

export default function Checkout() {
    const [searchParams] = useSearchParams();
    const [lang, setLang] = useState<Language>('en');

    const priceParam = searchParams.get('price') || '97';
    const paymentLinkUrl = priceParam === '68' ? PAYMENT_LINK_67 : PAYMENT_LINK_97;
    const priceAmount = priceParam === '68' ? '$68' : '$97';
    const isDiscounted = priceParam === '68';

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'es' : 'en');
    };

    const copy = {
        en: {
            back: "Back to briefing",
            title: "COMPLETE YOUR ORDER",
            subtitle: "Secure checkout powered by Stripe",
            price: priceAmount,
            priceLabel: "LIFETIME ACCESS",
            originalPrice: "$97",
            discountBadge: "30% OFF",
            guarantee: "14-Day Money-Back Guarantee",
            secure: "256-bit SSL Encryption",
            instant: "Instant Access After Payment",
            slots: "8/15 Founder Slots Remaining",
            valueStack: {
                title: "WHAT YOU'RE GETTING:",
                items: [
                    { name: "GOL // SYSTEM Platform", value: "$497" },
                    { name: "Onboarding Protocol", value: "$97" },
                    { name: "Wealth Defense Blueprint", value: "$147" },
                    { name: "Commander's Playbook", value: "$97" },
                ],
                bonuses: [
                    "Private Founders Community",
                    "Monthly Strategy Calls",
                    "Priority Feature Requests",
                ],
                total: "Total Value: $1,332+"
            },
            urgency: "⏱ This offer expires when founder slots fill"
        },
        es: {
            back: "Volver al briefing",
            title: "COMPLETA TU ORDEN",
            subtitle: "Checkout seguro powered by Stripe",
            price: priceAmount,
            priceLabel: "ACCESO DE POR VIDA",
            originalPrice: "$97",
            discountBadge: "30% OFF",
            guarantee: "Garantía de 14 Días",
            secure: "Encriptación SSL 256-bit",
            instant: "Acceso Instantáneo",
            slots: "8/15 Plazas Restantes",
            valueStack: {
                title: "LO QUE OBTIENES:",
                items: [
                    { name: "Plataforma GOL // SYSTEM", value: "$497" },
                    { name: "Protocolo de Onboarding", value: "$97" },
                    { name: "Blueprint Defensa de Riqueza", value: "$147" },
                    { name: "Playbook del Comandante", value: "$97" },
                ],
                bonuses: [
                    "Comunidad Privada de Fundadores",
                    "Llamadas Mensuales de Estrategia",
                    "Solicitudes Prioritarias",
                ],
                total: "Valor Total: $1,332+"
            },
            urgency: "⏱ Esta oferta expira cuando se llenen las plazas"
        }
    };

    const t = copy[lang];

    const fetchClientSecret = useCallback(async () => {
        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentLinkUrl }),
        });
        const data = await response.json();
        return data.clientSecret;
    }, [paymentLinkUrl]);

    const options = { fetchClientSecret };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <SystemHeader lang={lang} toggleLanguage={toggleLanguage} />

            <main className="pt-24 md:pt-32 pb-12 md:pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Back link */}
                    <Link
                        to="/walkthrough"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-mono text-sm mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t.back}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                        {/* Left: Order Summary with Value Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="font-display text-3xl md:text-4xl text-white uppercase mb-2">
                                {t.title}
                            </h1>
                            <p className="font-mono text-gray-400 mb-6">
                                {t.subtitle}
                            </p>

                            {/* Scarcity Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-sm mb-6">
                                <Users className="w-4 h-4" />
                                {t.slots}
                            </div>

                            {/* Price Display */}
                            <div className="bg-zinc-900/50 border border-command-orange/30 p-6 chamfered mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-gray-300">GOL // SYSTEM</span>
                                    <div className="text-right">
                                        <div className="flex items-center gap-3">
                                            {isDiscounted && (
                                                <>
                                                    <span className="text-gray-500 line-through font-mono">{t.originalPrice}</span>
                                                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-mono">{t.discountBadge}</span>
                                                </>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <Zap className="w-5 h-5 text-command-orange" />
                                                <span className="text-3xl font-display text-white">{t.price}</span>
                                            </div>
                                        </div>
                                        <span className="font-mono text-xs text-command-orange uppercase">
                                            {t.priceLabel}
                                        </span>
                                    </div>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <div className="flex justify-between font-mono text-sm">
                                        <span className="text-gray-400">Total</span>
                                        <span className="text-white font-bold">{t.price} USD</span>
                                    </div>
                                </div>
                            </div>

                            {/* Value Stack */}
                            <div className="bg-zinc-900/30 border border-white/10 p-5 chamfered mb-6">
                                <h3 className="font-mono text-xs text-command-orange uppercase tracking-widest mb-4 font-bold">
                                    {t.valueStack.title}
                                </h3>
                                <div className="space-y-2 mb-4">
                                    {t.valueStack.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span className="font-mono text-xs md:text-sm text-gray-300 truncate">{item.name}</span>
                                            </div>
                                            <span className="font-mono text-xs text-gray-500 flex-shrink-0">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-command-orange/20 pt-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Gift className="w-4 h-4 text-command-orange" />
                                        <span className="font-mono text-xs text-command-orange uppercase">Founder Bonuses</span>
                                    </div>
                                    {t.valueStack.bonuses.map((bonus, i) => (
                                        <div key={i} className="flex items-center gap-2 ml-6">
                                            <span className="text-command-orange">+</span>
                                            <span className="font-mono text-xs text-gray-400">{bonus}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-4 pt-3 border-t border-white/5">
                                    <span className="font-mono text-sm text-gray-400 line-through">{t.valueStack.total}</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    {t.guarantee}
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                                    <Lock className="w-5 h-5 text-green-500" />
                                    {t.secure}
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                                    <Zap className="w-5 h-5 text-command-orange" />
                                    {t.instant}
                                </div>
                            </div>

                            {/* Urgency */}
                            <div className="flex items-center gap-2 text-red-400 font-mono text-xs">
                                <Clock className="w-4 h-4" />
                                {t.urgency}
                            </div>
                        </motion.div>

                        {/* Right: Stripe Embedded Checkout */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-lg p-1 min-h-[400px] md:min-h-[600px]"
                        >
                            <EmbeddedCheckoutProvider
                                stripe={stripePromise}
                                options={options}
                            >
                                <EmbeddedCheckout />
                            </EmbeddedCheckoutProvider>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Zap, CheckCircle, Gift, Clock, Users, Loader2 } from "lucide-react";
import { SystemHeader } from "@/components/landing/SystemHeader";
import { type Language } from "@/lib/i18n";

// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Price IDs
const PRICE_97 = import.meta.env.VITE_STRIPE_PRICE_97;
const PRICE_67 = import.meta.env.VITE_STRIPE_PRICE_67;

// Checkout Form Component
function CheckoutForm({ priceAmount, lang }: { priceAmount: string; lang: Language }) {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const copy = {
        en: {
            button: "COMPLETE PAYMENT",
            processing: "Processing...",
            error: "Payment failed. Please try again.",
        },
        es: {
            button: "COMPLETAR PAGO",
            processing: "Procesando...",
            error: "Pago fallido. Por favor intenta de nuevo.",
        }
    };

    const t = copy[lang];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setErrorMessage(null);

        // Track AddPaymentInfo event
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'AddPaymentInfo', {
                value: priceAmount === '$67' ? 67.00 : 97.00,
                currency: 'USD',
                content_name: `GOL System - ${priceAmount}`,
            });
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/thank-you`,
            },
        });

        if (error) {
            setErrorMessage(error.message || t.error);
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement
                options={{
                    layout: "tabs",
                }}
            />

            {errorMessage && (
                <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-3 rounded font-mono text-sm">
                    {errorMessage}
                </div>
            )}

            <motion.button
                type="submit"
                disabled={!stripe || isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className="w-full py-4 bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-lg uppercase tracking-widest transition-all chamfered shadow-[0_0_30px_rgba(255,153,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isProcessing ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.processing}
                    </>
                ) : (
                    t.button
                )}
            </motion.button>
        </form>
    );
}

export default function Checkout() {
    const [searchParams] = useSearchParams();
    const [lang, setLang] = useState<Language>('en');
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const priceParam = searchParams.get('price') || '97';
    const priceId = priceParam === '67' ? PRICE_67 : PRICE_97;
    const priceAmount = priceParam === '67' ? '$67' : '$97';
    const isDiscounted = priceParam === '67';

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'es' : 'en');
    };

    // Create Payment Intent on mount
    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await fetch("/api/create-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ priceId }),
                });

                const data = await response.json();

                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);

                    // Track InitiateCheckout
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                        (window as any).fbq('track', 'InitiateCheckout', {
                            value: priceParam === '67' ? 67.00 : 97.00,
                            currency: 'USD',
                            content_name: `GOL System - ${priceAmount}`,
                            content_category: 'Lifetime Access'
                        });
                    }
                }

                setLoading(false);
            } catch (error) {
                console.error('Error creating payment intent:', error);
                setLoading(false);
            }
        };

        createPaymentIntent();
    }, [priceId, priceParam, priceAmount]);

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
            urgency: "⏱ This offer expires when founder slots fill",
            loading: "Loading secure checkout..."
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
            urgency: "⏱ Esta oferta expira cuando se llenen las plazas",
            loading: "Cargando checkout seguro..."
        }
    };

    const t = copy[lang];

    const appearance = {
        theme: 'night' as const,
        variables: {
            colorPrimary: '#ff9900',
            colorBackground: '#18181b',
            colorText: '#ffffff',
            colorDanger: '#ef4444',
            fontFamily: 'JetBrains Mono, monospace',
            spacingUnit: '4px',
            borderRadius: '2px',
        },
        rules: {
            '.Input': {
                border: '1px solid rgba(255, 153, 0, 0.3)',
                backgroundColor: '#09090b',
                color: '#ffffff',
            },
            '.Input:focus': {
                border: '1px solid rgba(255, 153, 0, 0.6)',
                boxShadow: '0 0 0 1px rgba(255, 153, 0, 0.3)',
            },
            '.Label': {
                color: '#a1a1aa',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
            },
        },
    };

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
                        {/* Left: Order Summary */}
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

                        {/* Right: Stripe Elements Checkout */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-900/50 border border-white/10 p-6 md:p-8 chamfered"
                        >
                            {loading || !clientSecret ? (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <Loader2 className="w-12 h-12 text-command-orange animate-spin mb-4" />
                                    <p className="font-mono text-gray-400 text-sm">{t.loading}</p>
                                </div>
                            ) : (
                                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                                    <CheckoutForm priceAmount={priceAmount} lang={lang} />
                                </Elements>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}

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

// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Price IDs - hardcoded for consistency with backend
const PRICE_97 = 'price_1SpoC3Cl8P39vjkQIzFKrMAa';
const PRICE_67 = 'price_1SsjvBCl8P39vjkQvK5owi9z';

// Checkout Form Component
function CheckoutForm({ priceAmount }: { priceAmount: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
            setErrorMessage(error.message || "Payment failed. Please try again.");
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
                <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg font-mono text-sm">
                    {errorMessage}
                </div>
            )}

            <motion.button
                type="submit"
                disabled={!stripe || isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-lg uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(255,184,0,0.4)] hover:shadow-[0_0_50px_rgba(255,184,0,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isProcessing ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    "COMPLETE PAYMENT"
                )}
            </motion.button>
        </form>
    );
}

export default function Checkout() {
    const [searchParams] = useSearchParams();
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const priceParam = searchParams.get('price') || '97';
    const priceId = priceParam === '67' ? PRICE_67 : PRICE_97;
    const priceAmount = priceParam === '67' ? '$67' : '$97';
    const isDiscounted = priceParam === '67';

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

    const valueStackItems = [
        { name: "GOL // SYSTEM Platform", value: "$497" },
        { name: "Onboarding Protocol", value: "$97" },
        { name: "Wealth Defense Blueprint", value: "$147" },
        { name: "Commander's Playbook", value: "$97" },
    ];

    const bonuses = [
        "Private Founders Community",
        "Monthly Strategy Calls",
        "Priority Feature Requests",
    ];

    const appearance = {
        theme: 'night' as const,
        variables: {
            colorPrimary: '#f59e0b',
            colorBackground: '#0a0a0a',
            colorText: '#ffffff',
            colorDanger: '#ef4444',
            fontFamily: 'JetBrains Mono, monospace',
            spacingUnit: '4px',
            borderRadius: '8px',
        },
        rules: {
            '.Input': {
                border: '1px solid #1a1a1a',
                backgroundColor: '#050505',
                color: '#ffffff',
            },
            '.Input:focus': {
                border: '1px solid rgba(245, 158, 11, 0.5)',
                boxShadow: '0 0 0 2px rgba(245, 158, 11, 0.2)',
            },
            '.Label': {
                color: '#9ca3af',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
            },
            '.Tab': {
                border: '1px solid #1a1a1a',
                backgroundColor: '#0a0a0a',
            },
            '.Tab--selected': {
                borderColor: '#f59e0b',
                backgroundColor: '#0a0a0a',
            },
        },
    };

    return (
        <div className="landing-container min-h-screen text-white font-sans overflow-x-hidden relative">
            {/* Fixed Header */}
            <header className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                        <span className="font-mono text-sm text-white tracking-widest">
                            GOL // SYSTEM
                        </span>
                    </Link>

                    {/* Back */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-amber-500 font-mono text-xs transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK
                    </Link>
                </div>
            </header>

            <main className="pt-28 md:pt-32 pb-16 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">
                            Complete Your <span className="text-amber-500">Order</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-sm">
                            Secure checkout powered by Stripe
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left: Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="order-2 lg:order-1"
                        >
                            {/* Scarcity Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs rounded-full mb-6">
                                <Users className="w-4 h-4" />
                                8/15 Founder Slots Remaining
                            </div>

                            {/* Price Display */}
                            <div className="card-glow p-6 mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-gray-300">GOL // SYSTEM</span>
                                    <div className="text-right">
                                        <div className="flex items-center gap-3">
                                            {isDiscounted && (
                                                <>
                                                    <span className="text-gray-500 line-through font-mono">$97</span>
                                                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-mono rounded">-30%</span>
                                                </>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <Zap className="w-5 h-5 text-amber-500" />
                                                <span className="text-3xl font-mono font-bold text-white">{priceAmount}</span>
                                            </div>
                                        </div>
                                        <span className="font-mono text-xs text-amber-500 uppercase">
                                            LIFETIME ACCESS
                                        </span>
                                    </div>
                                </div>
                                <div className="border-t border-[#1a1a1a] pt-4">
                                    <div className="flex justify-between font-mono text-sm">
                                        <span className="text-gray-400">Total</span>
                                        <span className="text-white font-bold">{priceAmount} USD</span>
                                    </div>
                                </div>
                            </div>

                            {/* Value Stack */}
                            <div className="card-glow p-5 mb-6">
                                <h3 className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-4 font-bold">
                                    What you're getting:
                                </h3>
                                <div className="space-y-2 mb-4">
                                    {valueStackItems.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span className="font-mono text-xs md:text-sm text-gray-300 truncate">{item.name}</span>
                                            </div>
                                            <span className="font-mono text-xs text-gray-500 flex-shrink-0">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-amber-500/20 pt-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Gift className="w-4 h-4 text-amber-500" />
                                        <span className="font-mono text-xs text-amber-500 uppercase">Founder Bonuses</span>
                                    </div>
                                    {bonuses.map((bonus, i) => (
                                        <div key={i} className="flex items-center gap-2 ml-6">
                                            <span className="text-amber-500">+</span>
                                            <span className="font-mono text-xs text-gray-400">{bonus}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-4 pt-3 border-t border-[#1a1a1a]">
                                    <span className="font-mono text-sm text-gray-500 line-through">Total Value: $1,332+</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    14-Day Money-Back Guarantee
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                                    <Lock className="w-5 h-5 text-green-500" />
                                    256-bit SSL Encryption
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                                    <Zap className="w-5 h-5 text-amber-500" />
                                    Instant Access After Payment
                                </div>
                            </div>

                            {/* Urgency */}
                            <div className="flex items-center gap-2 text-red-400 font-mono text-xs">
                                <Clock className="w-4 h-4" />
                                This offer expires when founder slots fill
                            </div>
                        </motion.div>

                        {/* Right: Stripe Elements Checkout */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="card-glow p-6 md:p-8 order-1 lg:order-2"
                        >
                            <h2 className="font-mono text-lg text-white mb-6 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-amber-500" />
                                Payment Details
                            </h2>

                            {loading || !clientSecret ? (
                                <div className="flex flex-col items-center justify-center py-16">
                                    <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
                                    <p className="font-mono text-gray-400 text-sm">Loading secure checkout...</p>
                                </div>
                            ) : (
                                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                                    <CheckoutForm priceAmount={priceAmount} />
                                </Elements>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}

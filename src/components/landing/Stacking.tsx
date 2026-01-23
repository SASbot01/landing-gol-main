import { Shield, Monitor, Rocket, Users, Crosshair, AlertTriangle } from "lucide-react";
import { STRIPE_FOUNDERS_LINK } from "@/lib/constants";
export const Stacking = () => {
    return (
        <section id="offer" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,0,0.03)_0%,transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10">

                {/* HEADLINE */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-command-orange/10 border border-command-orange/20 text-command-orange text-xs font-mono tracking-widest uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-command-orange opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-command-orange"></span>
                        </span>
                        For the first 15 Founders Only
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl text-white mb-6 tracking-tight">
                        Your Exoskeleton for <br />
                        <span className="text-command-orange">Total Sovereignty</span>
                    </h2>
                    <p className="font-mono text-gray-400 text-lg tracking-wide max-w-2xl mx-auto">
                        Get Lifetime Access to the GOL System for a single one-time payment of just $97.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

                    {/* LEFT COLUMN: THE STACK */}
                    <div className="space-y-12">

                        {/* CORE MACHINE */}
                        <div className="relative border-l-2 border-white/10 pl-8 py-2">
                            <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                                <Monitor className="w-6 h-6 text-command-orange" />
                                <span>THE CORE MACHINE</span>
                            </h3>
                            <div className="space-y-6">
                                <StackItem
                                    title="Radical Centralization (Trinity System)"
                                    desc="Your Bio-Dome (Health), Ops Center (Work), and The Vault (Finance) fused into a single, command-center interface."
                                />
                                <StackItem
                                    title="Real-Time Net Worth Radar"
                                    desc="Double-entry accounting that gives you predatory security and eliminates financial fear."
                                />
                                <StackItem
                                    title="Neuro-Engineering Gamification"
                                    desc="A reward system so potent, discipline becomes a dopamine-driven addiction."
                                />
                                <StackItem
                                    title="Sci-Fi Command Interface (HUD)"
                                    desc="The visual validation that separates you from the herd and reinforces your identity as 'Player 1.'"
                                />
                                <StackItem
                                    title="Full Data Sovereignty"
                                    desc="Your data, encrypted and under your absolute control. Invisibility is power."
                                />
                            </div>
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-command-orange/0 via-command-orange/50 to-command-orange/0 opacity-50" />
                        </div>

                        {/* BONUSES */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-1" />
                                <span className="font-mono text-command-orange text-sm uppercase tracking-widest">4 Exclusive Bonuses</span>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <BonusItem
                                icon={<Rocket className="w-5 h-5 text-white" />}
                                title="BONUS #1: The Sovereign's Onboarding Protocol"
                                value="$297"
                                desc="A step-by-step tactical video guide to get your entire GOL system operational in 90 minutes. We eliminate all setup friction so you can start commanding from day one."
                                why="We refuse to let you fail at the starting line. Your momentum is non-negotiable."
                            />
                            <BonusItem
                                icon={<Shield className="w-5 h-5 text-white" />}
                                title="BONUS #2: The Vault Defense Blueprint"
                                value="$497"
                                desc="An exclusive guide to using The Vault to create an unbreachable financial fortress. This is how you achieve 'Predatory Security' and know you're protected from any collapse."
                                why="A Commander who can't defend his empire is just a caretaker. You need both offensive and defensive tools to dominate."
                            />
                            <BonusItem
                                icon={<Users className="w-5 h-5 text-white" />}
                                title="BONUS #3: The Commander's War Room - LIFETIME ACCESS"
                                value="$997/year"
                                desc="A private, encrypted community for GOL founders only. This is your strategic briefing room to connect with other elite operators, share vectors, and never feel alone on the command bridge again."
                                why="Your identity as 'Player 1' requires a tribe. You deserve a war room, not a Facebook group."
                            />
                            <BonusItem
                                icon={<Crosshair className="w-5 h-5 text-white" />}
                                title="BONUS #4: The Founder's War-Game Session"
                                value="$997"
                                desc="A private, 60-minute one-on-one strategy call with the founder of GAME OF LIFE. Map out your biggest challenge and get direct, unfiltered intelligence to ensure you win."
                                why="We're building an army of commanders, not a list of customers. We're putting skin in the game and betting on your success."
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: OFFER CARD & MISSION */}
                    <div className="space-y-12">

                        {/* VALUE STACK CARD */}
                        <div className="bg-zinc-900/30 border border-white/10 p-8 chamfered relative backdrop-blur-sm">
                            <h3 className="font-mono text-gray-400 text-sm uppercase tracking-widest mb-6 text-center">Value Stack</h3>
                            <div className="space-y-3 font-mono text-sm mb-8">
                                <ValueRow label="GAME OF LIFE: Lifetime Access" value="$2,997" />
                                <ValueRow label="Bonus 1: Onboarding Protocol" value="$297" />
                                <ValueRow label="Bonus 2: Vault Defense Blueprint" value="$497" />
                                <ValueRow label="Bonus 3: Commander's War Room" value="$997" />
                                <ValueRow label="Bonus 4: Founder's War-Game Session" value="$997" />
                                <div className="h-px bg-white/10 my-4" />
                                <div className="flex justify-between items-center text-white text-base">
                                    <span>TOTAL REAL-WORLD VALUE:</span>
                                    <span className="text-gray-400 line-through decoration-command-orange/50">$5,785</span>
                                </div>
                            </div>

                            {/* MAIN PRICE AREA */}
                            <div className="text-center py-8 bg-black/50 border border-white/5 mb-8 rounded">
                                <div className="text-command-orange font-mono text-sm uppercase tracking-widest mb-2">Your Price Today</div>
                                <div className="text-6xl md:text-7xl font-display text-white mb-2">$97</div>
                                <div className="text-gray-500 font-mono text-xs uppercase">Lifetime Access • One-time Payment</div>
                            </div>

                            <a
                                href={STRIPE_FOUNDERS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                                onClick={() => {
                                    // Track InitiateCheckout event for Meta Pixel
                                    if (typeof window !== 'undefined' && (window as any).fbq) {
                                        (window as any).fbq('track', 'InitiateCheckout', {
                                            value: 97.00,
                                            currency: 'USD',
                                            content_name: 'Game of Life - Founders Access',
                                            content_category: 'Lifetime Access'
                                        });
                                    }
                                }}
                            >
                                <button className="w-full py-5 bg-command-orange hover:bg-orange-500 text-black font-display font-bold text-xl uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(255,153,0,0.3)] hover:shadow-[0_0_50px_rgba(255,153,0,0.5)] chamfered relative overflow-hidden">
                                    <span className="relative z-10">Become A Founder</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </a>

                            <div className="mt-4 text-center">
                                <p className="text-red-500 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                                    <AlertTriangle className="w-3 h-3" />
                                    Only 15 Spots Available
                                </p>
                            </div>
                        </div>

                        {/* RECRUITMENT TEXT */}
                        <div>
                            <h3 className="font-display text-2xl text-white mb-6">WHY ARE WE DOING THIS?</h3>
                            <div className="prose prose-invert prose-sm font-mono text-gray-400 leading-relaxed space-y-4">
                                <p>
                                    Because we're not looking for customers. We're looking for our founding 15 Commanders.
                                </p>
                                <p>
                                    We need case studies. We need testimonials. We need to build a war room of the most ambitious, no-BS operators on the planet.
                                </p>
                                <p>
                                    In exchange for your feedback and your victory, we're giving you the keys to the entire kingdom for a ridiculous price. This is a one-time offer for the first 15 people who claim it. After that, the price goes to <span className="text-white">$497/year</span> and these bonuses disappear forever.
                                </p>
                                <p className="text-white border-l-2 border-command-orange pl-4 italic">
                                    This isn't a discount. It's a recruitment mission.
                                </p>
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <p className="mb-4 text-white">You have two choices:</p>
                                    <ol className="list-decimal pl-5 space-y-4 marker:text-command-orange">
                                        <li>
                                            <strong className="text-white">Walk away.</strong> Go back to fighting "Assisted Chaos" with a butter knife. Keep feeling like an impostor running a high-performance machine with Paleolithic tools. Keep accepting the cognitive anxiety of fragmentation.
                                        </li>
                                        <li>
                                            <strong className="text-white">Join the Founders.</strong> Claim your exoskeleton. Kill the chaos. Become the God of your own reality. For less than the price of a dinner, you get a lifetime of sovereignty.
                                        </li>
                                    </ol>
                                    <p className="mt-6 text-command-orange uppercase tracking-widest">
                                        The clock is ticking. There are only 15 spots.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const StackItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="group">
        <h4 className="text-white font-bold font-mono text-sm uppercase tracking-wide mb-1 group-hover:text-command-orange transition-colors duration-300">
            {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

const BonusItem = ({ icon, title, value, desc, why }: { icon: React.ReactNode, title: string, value: string, desc: string, why: string }) => (
    <div className="bg-zinc-900/20 border border-white/5 p-6 hover:bg-zinc-900/40 transition-colors chamfered-sm">
        <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-full text-command-orange">
                    {icon}
                </div>
                <h4 className="text-white font-bold font-display text-lg uppercase tracking-wide">{title}</h4>
            </div>
            <div className="text-command-orange font-mono text-sm whitespace-nowrap bg-command-orange/10 px-2 py-1 rounded">
                Value: {value}
            </div>
        </div>
        <div className="space-y-3 pl-[3.25rem]">
            <div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">What It Is:</span>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
            <div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">Why You're Getting It:</span>
                <p className="text-gray-400 text-sm leading-relaxed italic border-l border-white/10 pl-3">{why}</p>
            </div>
        </div>
    </div>
);

const ValueRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between items-center group">
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors">{label}</span>
        <span className="text-gray-400">{value}</span>
    </div>
);

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Finally got full visibility on my cash flow. No more guessing—just pure data-driven execution.",
        author: "@abelcasa",
    },
    {
        quote: "The expense tracking was a wake-up call. I was literally bleeding money without realizing it.",
        author: "@enformaconhugo",
    },
    {
        quote: "A tool that actually gets it—financial control is the foundation. This is the real deal.",
        author: "@adrianvillanueva",
    },
    {
        quote: "GOL isn't just software, it's a mindset shift. Now I operate with strategic clarity.",
        author: "@marcoantoniopv",
    },
    {
        quote: "The dashboard is insane. Everything I need to know about my status in a single glance.",
        author: "@yzanpm",
    },
    {
        quote: "Been looking for this for years. Clean, direct, effective. Zero fluff, maximum output.",
        author: "@alexsilvestre",
    },
    {
        quote: "Completely changed how I view my P&L. Now I have actual control over my runway.",
        author: "@castrolopez",
    },
    {
        quote: "Best ROI this year. Clear intel, smart decisions. This is how operators should work.",
        author: "@tonigonzalez",
    },
];

// Split testimonials into two rows
const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="card-glow p-3 md:p-4 min-w-[180px] md:min-w-[265px] mx-2 md:mx-2 flex-shrink-0">
        {/* Quote icon */}
        <div className="text-amber-500/30 text-2xl md:text-3xl font-serif mb-2 md:mb-3">"</div>

        {/* Quote text */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-5 font-sans">
            {testimonial.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full flex items-center justify-center border border-amber-500/20">
                <span className="text-amber-500 font-mono text-xs md:text-sm">
                    {testimonial.author.charAt(1).toUpperCase()}
                </span>
            </div>
            <span className="font-mono text-xs md:text-sm text-amber-500/80">
                {testimonial.author}
            </span>
        </div>
    </div>
);

export const SocialProofSection = () => {
    return (
        <section className="relative py-10 md:py-14 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-xs font-mono text-gray-500 tracking-wider mb-4">
                        OPERATOR INTEL
                    </span>
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-white">
                        What People <span className="text-amber-500">Say</span>
                    </h2>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="space-y-4 md:space-y-6">
                {/* Row 1 - moves left */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                    <motion.div
                        className="flex"
                        animate={{
                            x: [0, -780],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate testimonials for seamless loop */}
                        {[...row1, ...row1, ...row1, ...row1].map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - moves right */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                    <motion.div
                        className="flex"
                        initial={{ x: -780 }}
                        animate={{
                            x: [-780, 0],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate testimonials for seamless loop */}
                        {[...row2, ...row2, ...row2, ...row2].map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

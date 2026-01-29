import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const terminalLines = [
    { text: "$ init account --optimize-performance=100%", type: "command" },
    { text: "> Organizing Business & Ops... [OK]", type: "success" },
    { text: "> Optimizing Health Protocols... [OK]", type: "success" },
    { text: "> Structuring Net Worth... [SECURE]", type: "success" },
    { text: "> SYSTEM STATUS: 100% PERFORMANCE ACHIEVED", type: "highlight" },
];

const getLineColor = (type: string) => {
    switch (type) {
        case "command":
            return "text-amber-500";
        case "warning":
            return "text-red-400";
        case "info":
            return "text-gray-400";
        case "success":
            return "text-green-400";
        case "highlight":
            return "text-amber-400 font-bold";
        case "final":
            return "text-white font-semibold";
        default:
            return "text-gray-300";
    }
};

export const TerminalSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (isInView && visibleLines < terminalLines.length) {
            setIsTyping(true);
            const timer = setTimeout(() => {
                setVisibleLines((prev) => prev + 1);
                setIsTyping(false);
            }, 400 + Math.random() * 200);
            return () => clearTimeout(timer);
        }
    }, [isInView, visibleLines]);

    return (
        <section className="relative py-12 md:py-16 px-6" ref={ref}>
            <div className="max-w-3xl mx-auto">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-xs font-mono text-gray-500 tracking-wider">
                        QUICK START
                    </span>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="terminal-window shadow-2xl shadow-black/50"
                >
                    {/* Terminal Header */}
                    <div className="terminal-header">
                        <div className="terminal-dot bg-red-500" />
                        <div className="terminal-dot bg-yellow-500" />
                        <div className="terminal-dot bg-green-500" />
                        <span className="ml-4 text-xs text-gray-500 font-mono">
                            gol-system — bash
                        </span>
                    </div>

                    {/* Terminal Body */}
                    <div className="terminal-body min-h-[180px]">
                        {terminalLines.slice(0, visibleLines).map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`${getLineColor(line.type)} ${
                                    index === visibleLines - 1 && isTyping ? "typing-cursor" : ""
                                }`}
                            >
                                {line.text}
                            </motion.div>
                        ))}

                        {/* Typing cursor when waiting */}
                        {visibleLines < terminalLines.length && isInView && (
                            <span className="typing-cursor text-gray-600" />
                        )}

                        {/* Final state cursor */}
                        {visibleLines === terminalLines.length && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-2 text-gray-600"
                            >
                                <span className="typing-cursor">$</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

import { Link } from "react-router-dom";

export const FooterSection = () => {
    return (
        <footer className="relative py-16 px-6 border-t border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-amber-500 rounded-full" />
                        <span className="font-mono text-sm text-white tracking-widest">
                            GOL // SYSTEM
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm font-mono">
                        <Link
                            to="/privacy"
                            className="text-gray-500 hover:text-amber-500 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-500 hover:text-amber-500 transition-colors"
                        >
                            Terms
                        </Link>
                        <a
                            href="mailto:support@blackwolfsec.io"
                            className="text-gray-500 hover:text-amber-500 transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-600 text-xs font-mono">
                        © 2026 BLACKWOLF HOLDINGS
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 pt-8 border-t border-[#111] text-center">
                    <p className="text-gray-600 text-xs font-mono">
                        INTELLIGENCE DIVISION // ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
};

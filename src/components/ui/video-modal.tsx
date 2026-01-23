import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string; // Optional: Youtube URL or file path
}

export const VideoModal = ({ isOpen, onClose, videoUrl = "https://www.loom.com/embed/0af0333db96f43fd8ccd5b9638fc7a12" }: VideoModalProps) => {
    // Backdrop constraints
    const backdropRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        ref={backdropRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-5xl aspect-video bg-black border border-white/10 shadow-[0_0_50px_rgba(255,153,0,0.2)] chamfered overflow-hidden group"
                    >
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-command-orange/50 z-20" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-command-orange/50 z-20" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-command-orange/50 z-20" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-command-orange/50 z-20" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-command-orange/20 text-white/70 hover:text-command-orange transition-colors border border-transparent hover:border-command-orange/50 rounded-none"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video Frame */}
                        <div className="w-full h-full relative bg-gray-900">
                            <iframe
                                className="w-full h-full"
                                src={videoUrl}
                                title="System Walkthrough"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Scanline overlay (optional) */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

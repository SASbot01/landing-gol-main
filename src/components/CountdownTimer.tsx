import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
}

export function CountdownTimer() {
    // End: January 12, 2026 at 10:16 AM CET (7 days and 7 hours from Jan 5, 2026 3:16 AM)
    const endDate = new Date('2026-01-12T10:16:00+01:00');

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = endDate.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            isExpired: false,
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft.isExpired) {
        return (
            <div className="text-center p-6 bg-destructive/10 border border-destructive/30 rounded-xl">
                <p className="text-destructive font-display text-xl">
                    ⏰ Launch Window Closed
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    The early access period has ended. Contact us for availability.
                </p>
            </div>
        );
    }

    const TimeBlock = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div className="bg-ops/10 border border-ops/30 rounded-lg p-4 min-w-[80px] backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-display font-bold text-ops tabular-nums">
                    {value.toString().padStart(2, '0')}
                </div>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-2 font-mono uppercase">
                {label}
            </div>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-vault">
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-sm uppercase tracking-wider">
                    Launch Window Ends In
                </span>
            </div>

            <div className="flex justify-center gap-3 md:gap-6">
                <TimeBlock value={timeLeft.days} label="Days" />
                <TimeBlock value={timeLeft.hours} label="Hours" />
                <TimeBlock value={timeLeft.minutes} label="Minutes" />
                <TimeBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="text-center">
                <p className="text-xs text-muted-foreground font-mono">
                    Ends: January 12, 2026 at 10:16 AM CET
                </p>
            </div>
        </div>
    );
}

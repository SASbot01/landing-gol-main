import { useState, useEffect } from 'react';

const COUNTDOWN_KEY = 'gol_countdown_end';
const COUNTDOWN_HOURS = 4;
const COUNTDOWN_MINUTES = 20;
const TOTAL_MS = (COUNTDOWN_HOURS * 60 + COUNTDOWN_MINUTES) * 60 * 1000;

export const useCountdown = () => {
    const getInitialTime = () => {
        const saved = localStorage.getItem(COUNTDOWN_KEY);
        if (saved) {
            const endTime = parseInt(saved, 10);
            const remaining = endTime - Date.now();
            if (remaining > 0) {
                return remaining;
            }
        }
        // Set new countdown
        const endTime = Date.now() + TOTAL_MS;
        localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
        return TOTAL_MS;
    };

    const [timeLeft, setTimeLeft] = useState(getInitialTime());
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const saved = localStorage.getItem(COUNTDOWN_KEY);
            if (saved) {
                const endTime = parseInt(saved, 10);
                const remaining = endTime - Date.now();

                if (remaining <= 0) {
                    setIsExpired(true);
                    setTimeLeft(0);
                } else {
                    setTimeLeft(remaining);
                    setIsExpired(false);
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Return the checkout URL based on countdown status
    const checkoutUrl = isExpired ? '/checkout?price=97' : '/checkout?price=67';

    return {
        hours,
        minutes,
        seconds,
        isExpired,
        timeLeft,
        checkoutUrl
    };
};

import { useEffect, useState } from "react";

export default function useCycleInterval<T>(items: T[], delayMs: number) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => (i + 1) % items.length);
        }, delayMs);

        return () => clearInterval(interval);
    }, [items, delayMs]);

    return items[index];
}

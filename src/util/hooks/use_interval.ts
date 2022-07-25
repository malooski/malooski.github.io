import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, delayMs: number) {
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        const interval = setInterval(tick, delayMs);
        return () => clearInterval(interval);
    }, [delayMs]);
}

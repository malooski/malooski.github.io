import { useEffect, useRef, useState } from "react";

export function useOnEscKeydown(callback: () => void) {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                callbackRef.current();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);
}

export function useOnArrowKeydown(onLeft: () => void, onRight: () => void) {
    const leftCallbackRef = useRef(onLeft);
    leftCallbackRef.current = onLeft;
    const rightCallbackRef = useRef(onRight);
    rightCallbackRef.current = onRight;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                leftCallbackRef.current();
            } else if (event.key === "ArrowRight") {
                rightCallbackRef.current();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);
}

export function useImageLoadingState(imgUrl: string) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => setLoaded(true);
        img.onerror = () => setError(true);
    }, [imgUrl]);

    return { loaded, error };
}

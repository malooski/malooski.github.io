import { useEffect, useState } from "react";
import { clampToCycle } from "..";
import { preloadImage } from "../dom";
import { useConstRef } from "./use_const_ref";

export function useImagePreloadCycler(urls: string[], intervalMs: number): string {
    const [currIdx, setCurrIdx] = useState(0);
    const nextIdxRef = useConstRef(clampToCycle(currIdx + 1, urls.length));

    useEffect(() => {
        let timeoutId: number | undefined;

        function queueNextImage() {
            clearTimeout(timeoutId);
            setTimeout(() => {
                const nextUrl = urls[nextIdxRef.current];
                preloadImage(nextUrl).then(() => {
                    setCurrIdx(i => i + 1);
                    queueNextImage();
                });
            }, intervalMs);
        }

        queueNextImage();

        return () => {
            clearTimeout(timeoutId);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intervalMs]);

    return urls[currIdx];
}

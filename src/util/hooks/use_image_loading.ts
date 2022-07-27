import { useEffect, useState } from "react";

export function useImageLoading(imgUrl: string): { loading: boolean; error: unknown } {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const img = new Image();
        img.src = imgUrl;
        setLoading(true);
        setError(null);
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = (e: unknown) => {
            setError(e);
        };
    }, [imgUrl]);

    return { loading, error };
}

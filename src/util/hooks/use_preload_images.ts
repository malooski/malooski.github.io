import { useEffect } from "react";

export default function usePreloadImages(images: string[]) {
    useEffect(() => {
        images.forEach(image => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);
}

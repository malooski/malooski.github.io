import { useRef } from "react";

export function useConstRef<T>(value: T) {
    const ref = useRef(value);
    ref.current = value;
    return ref;
}

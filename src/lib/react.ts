import { debounce } from "lodash";
import { useRef, useMemo } from "react";

export function useDebounce(callback: () => void, delayMs: number) {
    const cbRef = useRef(callback);
    cbRef.current = callback;

    const debounceFun = useMemo(() => debounce(() => cbRef.current(), delayMs), [delayMs]);

    return debounceFun;
}

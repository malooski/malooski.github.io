import { debounce } from "lodash";
import {
    DependencyList,
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

export type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay == null) return;

        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
    }, [delay]);
}

export function useDebouncedMemo<T>(
    factory: () => T,
    deps: DependencyList | undefined,
    debounceMs: number
): T {
    const [state, setState] = useState(factory());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSetState = useCallback(debounce(setState, debounceMs), []);

    useEffect(() => {
        debouncedSetState(factory());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return state;
}

export function useAsyncMemo<T>(getter: () => Promise<T>, deps: any[]): T | undefined {
    const [state, setState] = useState<T | undefined>(undefined);
    useEffect(() => {
        getter().then(v => {
            setState(v);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return state;
}

export function useAnimationFrame(callback: (deltaMs: number) => boolean, deps: any[]) {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>(performance.now());

    function animate(time: number) {
        const deltaTime = time - previousTimeRef.current;

        if (callback(deltaTime)) {
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        } else {
            // Don't request next frame if callback returned false
            return;
        }
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            const requestRefCurr = requestRef.current;
            if (requestRefCurr) {
                cancelAnimationFrame(requestRefCurr);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deps]); // Make sure the effect runs only once
}

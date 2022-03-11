import { debounce } from "lodash";
import React, {
    DependencyList,
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

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

export type SimpleForm = { [key: string]: string | number | boolean };
export type SetSimpleForm<T extends SimpleForm> = Dispatch<SetStateAction<Partial<T>>>;

export function useSimpleForm<T extends SimpleForm>(initialValue: T): [T, SetSimpleForm<T>] {
    const [form, setForm] = useState(initialValue);

    const setPartialForm: SetSimpleForm<T> = value => {
        const newPartialForm = value instanceof Function ? value(form) : value;
        setForm(f => ({
            ...form,
            ...newPartialForm,
        }));
    };

    return [form, setPartialForm];
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

export function useUuid() {
    const [id] = useState(() => uuidv4());
    return id;
}

export function useOnceAsync<T>(getter: () => Promise<T>, deps: any[]): T | undefined {
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

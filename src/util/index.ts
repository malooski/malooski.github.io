export function parseIntOrNull(value: string | null | undefined): number | null {
    if (value == null) {
        return null;
    }

    const result = parseInt(value as string);

    if (Number.isNaN(result)) {
        return null;
    }

    return result;
}

export function clampToCycle(value: number, length: number): number {
    return ((value % length) + length) % length;
}

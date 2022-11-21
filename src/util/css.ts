export const middleChildSelector = ":not(:first-child):not(:last-child)";

export const SMARTPHONE_SELECTOR = "@media (max-width:480px)";

export function cssUrlify(url?: string | undefined | null): string | undefined {
    if (url == null) return undefined;

    return `url("${encodeURI(url)}")`;
}

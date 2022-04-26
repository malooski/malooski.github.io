export type AsyncFunctionReturnType<T extends (...args: any[]) => Promise<any>> = T extends (
    ...args: any[]
) => Promise<infer U>
    ? U
    : never;

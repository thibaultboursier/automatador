declare enum CursorSpeed {
    Fast = "fast",
    Normal = "normal"
}
interface CreateCursorOptions {
    speed?: CursorSpeed;
}
export declare const createCursor: (options?: CreateCursorOptions) => void;
export declare const getCursor: () => HTMLImageElement;
export {};

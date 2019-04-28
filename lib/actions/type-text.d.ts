interface TypeTextOptions {
    shouldClear?: boolean;
    shouldTypelikeAnUser?: boolean;
}
export declare const typeText: (element: HTMLInputElement, text: string, options?: TypeTextOptions) => Promise<void>;
export {};

interface Options {
    logs?: boolean;
}
declare type Story = () => Promise<void>;
export declare const runStories: (stories: Story[], options?: Options) => Promise<void>;
export {};

export type CustomState = `--${string}` | string;
export declare class CustomStateSet extends Set<CustomState> {
    static get isPolyfilled(): boolean;
    constructor(ref: HTMLElement);
    add(state: CustomState): this;
    clear(): void;
    delete(state: CustomState): boolean;
}

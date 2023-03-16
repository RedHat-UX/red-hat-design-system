import { ICustomElement } from "./types";
export type CustomState = `--${string}`;
export declare class CustomStateSet extends Set<CustomState> {
    static get isPolyfilled(): boolean;
    constructor(ref: ICustomElement);
    add(state: CustomState): this;
    clear(): void;
    delete(state: CustomState): boolean;
}

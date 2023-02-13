import type { ReactiveController, ReactiveElement } from 'lit';
export interface Options {
    observe?: boolean | MutationObserverInit;
    emptyWarning?: string;
}
export declare class LightDOMController implements ReactiveController {
    private host;
    private options?;
    private mo;
    private logger;
    private initializer;
    constructor(host: ReactiveElement, initializer: () => void, options?: Options | undefined);
    hostConnected(): void;
    hostDisconnected(): void;
    private initObserver;
    /**
     * Returns a boolean statement of whether or not this component contains any light DOM.
     */
    hasLightDOM(): boolean;
}

import type { ReactiveController, ReactiveElement } from 'lit';
export interface Options {
    /**
     * Force hide the scroll buttons regardless of overflow
     */
    hideOverflowButtons?: boolean;
    /**
     * Delay in ms to wait before checking for overflow
     */
    scrollTimeoutDelay?: number;
}
export declare class OverflowController implements ReactiveController {
    #private;
    host: ReactiveElement;
    private options?;
    showScrollButtons: boolean;
    overflowLeft: boolean;
    overflowRight: boolean;
    get firstItem(): HTMLElement | undefined;
    get lastItem(): HTMLElement | undefined;
    constructor(host: ReactiveElement, options?: Options | undefined);
    init(container: HTMLElement, items: HTMLElement[]): void;
    onScroll: () => void;
    scrollLeft(): void;
    scrollRight(): void;
    update(): void;
    hostConnected(): void;
}

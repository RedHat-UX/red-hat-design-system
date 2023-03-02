import type { ReactiveController, ReactiveControllerHost } from 'lit';
export interface Options {
    hideOverflowButtons?: boolean;
}
export declare class OverflowController implements ReactiveController {
    #private;
    host: ReactiveControllerHost & Element;
    private options?;
    showScrollButtons: boolean;
    overflowLeft: boolean;
    overflowRight: boolean;
    get firstItem(): HTMLElement | undefined;
    get lastItem(): HTMLElement | undefined;
    constructor(host: ReactiveControllerHost & Element, options?: Options | undefined);
    init(container: HTMLElement, items: HTMLElement[]): void;
    onScroll: () => void;
    scrollLeft(): void;
    scrollRight(): void;
    update(): void;
    hostConnected(): void;
}

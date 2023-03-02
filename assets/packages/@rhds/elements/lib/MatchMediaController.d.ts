import type { ReactiveControllerHost, ReactiveController } from 'lit';
export declare class MatchMediaController implements ReactiveController {
    /** reference to the host element using this controller */
    host: ReactiveControllerHost & Element;
    private mediaQuery;
    /**
     * The matchMedia result
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
     */
    mediaQueryList: MediaQueryList | null;
    private onChange;
    constructor(
    /** reference to the host element using this controller */
    host: ReactiveControllerHost & Element, mediaQuery?: string, options?: {
        onChange?(list: MediaQueryList): void;
    });
    hostConnected(): void;
    hostDisconnected(): void;
    /** Requests a render and calls the onChange callback */
    evaluate(): void;
}

import type { ReactiveControllerHost, ReactiveController } from 'lit';
export declare type BreakpointKey = 'mobile' | 'mobileXl' | 'desktopLarge' | 'desktopSmall' | 'tabletLandscape' | 'tabletPortrait' | 'mobileLandscape' | 'mobilePortrait';
export declare class ScreenSizeController implements ReactiveController {
    /** reference to the host element using this controller */
    host: ReactiveControllerHost;
    private breakpoint;
    static instances: Set<ScreenSizeController>;
    static queries: Map<BreakpointKey, MediaQueryList>;
    mobile: boolean;
    size: Omit<BreakpointKey, 'mobile'>;
    matches: Set<BreakpointKey>;
    private onChange;
    constructor(
    /** reference to the host element using this controller */
    host: ReactiveControllerHost, breakpoint: BreakpointKey | void, options?: {
        onChange?(matches: boolean): void;
    });
    hostConnected(): void;
    hostDisconnected(): void;
    /** Requests a render and calls the onChange callback */
    evaluate(): void;
}

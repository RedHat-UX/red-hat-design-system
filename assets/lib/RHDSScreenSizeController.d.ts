import type { ReactiveControllerHost, ReactiveController } from 'lit';
export declare type BreakpointKey = 'mobile' | 'mobileXl' | 'desktopLarge' | 'desktopSmall' | 'tabletLandscape' | 'tabletPortait' | 'mobileLandscape' | 'mobilePortrait';
export declare class RHDSScreenSizeController implements ReactiveController {
    /** reference to the host element using this controller */
    host: ReactiveControllerHost;
    static instances: Set<RHDSScreenSizeController>;
    static queries: Map<BreakpointKey, MediaQueryList>;
    mobile: boolean;
    size: Omit<BreakpointKey, 'mobile'>;
    constructor(
    /** reference to the host element using this controller */
    host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
}

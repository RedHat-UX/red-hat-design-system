import type { ReactiveController, ReactiveElement, CSSResultGroup } from 'lit';
declare global {
    interface ShadowRoot {
        adoptedStyleSheets: CSSStyleSheet[];
    }
}
/**
 * Controller which adds styles to it's host element.
 * Like `static styles = []`, except a controller.
 * Should typically only be used within other controllers.
 */
export declare class StyleController implements ReactiveController {
    private host;
    /** These styles will be applied to the host element */
    private styles;
    private stylesAdopted;
    constructor(host: ReactiveElement, 
    /** These styles will be applied to the host element */
    styles: CSSResultGroup);
    hostConnected(): void;
}

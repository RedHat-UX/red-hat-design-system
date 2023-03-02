import type { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
export declare class DirController implements ReactiveController {
    #private;
    host: ReactiveControllerHost & Element;
    /** The element's current `dir` */
    dir: string;
    constructor(host: ReactiveControllerHost & Element);
    hostConnected(): void;
}

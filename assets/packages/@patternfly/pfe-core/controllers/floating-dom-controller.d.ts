import type { Placement } from '@floating-ui/dom';
import type { ReactiveController, ReactiveElement } from 'lit';
import type { StyleInfo } from 'lit/directives/style-map.js';
import type { Options as Offset } from '@floating-ui/core/src/middleware/offset';
export type { Placement };
type Lazy<T> = T | (() => T | null | undefined);
interface FloatingDOMControllerOptions {
    content: Lazy<HTMLElement>;
    invoker?: Lazy<HTMLElement>;
    arrow?: Lazy<HTMLElement>;
    shift?: boolean;
    padding?: number;
    fallbackPlacements?: Placement[];
}
interface ShowOptions {
    offset?: Offset;
    placement?: Placement;
    flip?: boolean;
    fallbackPlacements?: Placement[];
}
export type Anchor = '' | 'top' | 'left' | 'bottom' | 'right';
export type Alignment = 'center' | 'start' | 'end';
/**
 * Controls floating DOM within a web component, e.g. tooltips and popovers
 */
export declare class FloatingDOMController implements ReactiveController {
    #private;
    private host;
    /** The crosswise alignment of the invoker on which to display the floating DOM */
    get alignment(): Alignment;
    /** The side of the invoker on which to display the floating DOM */
    get anchor(): Anchor;
    /**
     * When true, the floating DOM is visible
     */
    get open(): boolean;
    /** The computed placement of the floating DOM */
    get placement(): Placement;
    /**
     * Styles to apply to your element's container
     *
     * - `--_floating-content-translate`: translate to apply to floating content.
     */
    get styles(): StyleInfo;
    constructor(host: ReactiveElement, options: FloatingDOMControllerOptions);
    hostDisconnected(): void;
    /** Show the floating DOM */
    show({ offset, placement, flip, fallbackPlacements }?: ShowOptions): Promise<void>;
    /** Hide the floating DOM */
    hide(): Promise<void>;
}

import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { StyleInfo } from 'lit/directives/style-map.js';
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
    offset?: OffsetValue;
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
    constructor(host: ReactiveControllerHost, options: FloatingDOMControllerOptions);
    hostDisconnected(): void;
    /**
     * Show the floating DOM
     * @param [options={}]
     * @param options.offset
     * @param options.placement
     * @param options.flip
     * @param options.fallbackPlacements
     * */
    show({ offset, placement, flip, fallbackPlacements }?: ShowOptions): Promise<void>;
    /** Hide the floating DOM */
    hide(): Promise<void>;
}
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${'start' | 'end'}`;
export type Placement = Side | AlignedPlacement;
type OffsetValue = number | {
    /**
     * The axis that runs along the side of the floating element. Represents
     * the distance (gutter or margin) between the reference and floating
     * element.
     * @default 0
     */
    mainAxis?: number;
    /**
     * The axis that runs along the alignment of the floating element.
     * Represents the skidding between the reference and floating element.
     * @default 0
     */
    crossAxis?: number;
    /**
     * The same axis as `crossAxis` but applies only to aligned placements
     * and inverts the `end` alignment. When set to a number, it overrides the
     * `crossAxis` value.
     *
     * A positive number will move the floating element in the direction of
     * the opposite edge to the one that is aligned, while a negative number
     * the reverse.
     * @default null
     */
    alignmentAxis?: number | null;
};
export {};

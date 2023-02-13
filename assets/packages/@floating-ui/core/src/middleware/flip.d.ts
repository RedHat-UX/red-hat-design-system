import { Options as DetectOverflowOptions } from '../detectOverflow';
import type { Middleware, Placement } from '../types';
export interface Options {
    /**
     * The axis that runs along the side of the floating element. Determines
     * whether overflow along this axis is checked to perform a flip.
     * @default true
     */
    mainAxis: boolean;
    /**
     * The axis that runs along the alignment of the floating element. Determines
     * whether overflow along this axis is checked to perform a flip.
     * @default true
     */
    crossAxis: boolean;
    /**
     * Placements to try sequentially if the preferred `placement` does not fit.
     * @default [oppositePlacement] (computed)
     */
    fallbackPlacements: Array<Placement>;
    /**
     * What strategy to use when no placements fit.
     * @default 'bestFit'
     */
    fallbackStrategy: 'bestFit' | 'initialPlacement';
    /**
     * Whether to allow fallback to the perpendicular axis of the preferred
     * placement, and if so, which side direction along the axis to prefer.
     * @default 'none' (disallow fallback)
     */
    fallbackAxisSideDirection: 'none' | 'start' | 'end';
    /**
     * Whether to flip to placements with the opposite alignment if they fit
     * better.
     * @default true
     */
    flipAlignment: boolean;
}
/**
 * A visibility optimizer that changes the placement of the floating element in
 * order to keep it in view. By default, only the opposite placement is tried.
 *
 * It has the ability to flip to any placement, not just the opposite one. You
 * can use a series of “fallback” placements, where each placement is
 * progressively tried until the one that fits can be used.
 * @see https://floating-ui.com/docs/flip
 */
export declare const flip: (options?: Partial<Options & DetectOverflowOptions>) => Middleware;

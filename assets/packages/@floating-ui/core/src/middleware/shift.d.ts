import { Options as DetectOverflowOptions } from '../detectOverflow';
import type { Coords, Middleware, MiddlewareArguments } from '../types';
export interface Options {
    /**
     * The axis that runs along the alignment of the floating element. Determines
     * whether overflow along this axis is checked to perform shifting.
     * @default true
     */
    mainAxis: boolean;
    /**
     * The axis that runs along the side of the floating element. Determines
     * whether overflow along this axis is checked to perform shifting.
     * @default false
     */
    crossAxis: boolean;
    /**
     * Accepts a function that limits the shifting done in order to prevent
     * detachment.
     */
    limiter: {
        fn: (middlewareArguments: MiddlewareArguments) => Coords;
        options?: any;
    };
}
/**
 * A visibility optimizer that shifts the floating element along the specified
 * axes in order to keep it in view.
 * @see https://floating-ui.com/docs/shift
 */
export declare const shift: (options?: Partial<Options & DetectOverflowOptions>) => Middleware;
type LimitShiftOffset = ((args: MiddlewareArguments) => number | {
    /**
     * Offset the limiting of the axis that runs along the alignment of the
     * floating element.
     */
    mainAxis?: number;
    /**
     * Offset the limiting of the axis that runs along the side of the
     * floating element.
     */
    crossAxis?: number;
}) | number | {
    /**
     * Offset the limiting of the axis that runs along the alignment of the
     * floating element.
     */
    mainAxis?: number;
    /**
     * Offset the limiting of the axis that runs along the side of the
     * floating element.
     */
    crossAxis?: number;
};
export type LimitShiftOptions = {
    /**
     * Offset when limiting starts. `0` will limit when the opposite edges of the
     * reference and floating elements are aligned.
     * - positive = start limiting earlier
     * - negative = start limiting later
     */
    offset: LimitShiftOffset;
    /**
     * Whether to limit the axis that runs along the alignment of the floating
     * element.
     */
    mainAxis: boolean;
    /**
     * Whether to limit the axis that runs along the side of the floating element.
     */
    crossAxis: boolean;
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
export declare const limitShift: (options?: Partial<LimitShiftOptions>) => {
    options: Partial<LimitShiftOffset>;
    fn: (middlewareArguments: MiddlewareArguments) => Coords;
};
export {};

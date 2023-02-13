import { Options as DetectOverflowOptions } from '../detectOverflow';
import type { Middleware } from '../types';
export interface Options {
    /**
     * The strategy used to determine when to hide the floating element.
     */
    strategy: 'referenceHidden' | 'escaped';
}
/**
 * A data provider that allows you to hide the floating element in applicable
 * situations, usually when it’s not within the same clipping context as the
 * reference element.
 * @see https://floating-ui.com/docs/hide
 */
export declare const hide: (options?: Partial<Options & DetectOverflowOptions>) => Middleware;

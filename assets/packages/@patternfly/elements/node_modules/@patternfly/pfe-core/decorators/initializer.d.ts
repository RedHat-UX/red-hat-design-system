import type { ReactiveElement } from 'lit';
import type { Options } from '../controllers/light-dom-controller.js';
/**
 * Runs the decorated method in `connectedCallback`,
 * provided the element has light children, and sets
 * up a mutation observer to re-run the callback,
 * unless opted-out with `{ observe: false }`
 * @param  options        Set `observe` to `false` to skip mutation observer setup, or pass a MutationObserverInit as options
 */
export declare function initializer<T extends ReactiveElement>(options?: Options): (proto: T, key: string) => void;

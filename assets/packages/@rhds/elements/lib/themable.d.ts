import type { Constructor } from '@lit/reactive-element/decorators/base.js';
import { ReactiveElement } from 'lit';
/**
 * Ensures this element is [themable](https://ux.redhat.com/theming/).
 *
 * @param klass element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export declare function themable<T extends Constructor<ReactiveElement>>(klass: T): T;

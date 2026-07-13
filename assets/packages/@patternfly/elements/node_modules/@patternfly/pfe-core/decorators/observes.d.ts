import type { ReactiveElement } from 'lit';
import { type PropertyObserverOptions } from '@patternfly/pfe-core/controllers/property-observer-controller.js';
/**
 * Observes changes on the given property and calls the decorated method
 * with the old and new values when it changes. In cases where the decorated method
 * needs to access uninitialized class fields, You may need to wait for the element to connect
 * before running your effects. In that case, you can optionally specify which
 * lifecycle state to wait for. e.g.:
 * - `waitFor: 'firstUpdate'` waits until the first update cycle has completed
 * - `waitFor: 'updated'` waits until the next update cycle has completed
 * - `waitFor: 'connected'` waits until the element connects
 * @param propertyName property to react to
 * @param [options] options including lifecycle to wait on.
 */
export declare function observes<T extends ReactiveElement>(propertyName: string & keyof T, options?: Partial<Exclude<PropertyObserverOptions<T>, 'callback' | 'propertyName'>>): (proto: T, methodName: string) => void;

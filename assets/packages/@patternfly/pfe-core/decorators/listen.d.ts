import type { LitElement } from 'lit';
/**
 * Listens for a given event on the custom element.
 * equivalent to calling `this.addEventListener` in the constructor
 * @param type event type e.g. `click`
 * @param options event listener options object e.g. `{ passive: true }`
 */
export declare function listen<P extends LitElement>(type: keyof HTMLElementEventMap, options?: AddEventListenerOptions): (proto: LitElement, methodName: string) => void;

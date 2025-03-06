import { type ReactiveController, type ReactiveElement } from 'lit';
interface AnonymousSlot {
    hasContent: boolean;
    elements: Element[];
    slot: HTMLSlotElement | null;
}
interface NamedSlot extends AnonymousSlot {
    name: string;
    initialized: true;
}
export type Slot = NamedSlot | AnonymousSlot;
export interface SlotsConfig {
    slots: (string | null)[];
    /**
     * Object mapping new slot name keys to deprecated slot name values
     * @example `pf-modal--header` is deprecated in favour of `header`
     * ```js
     * new SlotController(this, {
     *   slots: ['header'],
     *   deprecations: {
     *     'header': 'pf-modal--header'
     *   }
     * })
     * ```
     */
    deprecations?: Record<string, string>;
}
export declare class SlotController implements ReactiveController {
    #private;
    host: ReactiveElement;
    static default: symbol;
    /** @deprecated use `default` */
    static anonymous: symbol;
    constructor(host: ReactiveElement, ...config: ([SlotsConfig] | (string | null)[]));
    hostConnected(): Promise<void>;
    hostUpdated(): void;
    hostDisconnected(): void;
    /**
     * Given a slot name or slot names, returns elements assigned to the requested slots as an array.
     * If no value is provided, it returns all children not assigned to a slot (without a slot attribute).
     * @param slotNames slots to query
     * @example Get header-slotted elements
     *          ```js
     *          this.getSlotted('header')
     *          ```
     * @example Get header- and footer-slotted elements
     *          ```js
     *          this.getSlotted('header', 'footer')
     *          ```
     * @example Get default-slotted elements
     *          ```js
     *          this.getSlotted();
     *          ```
     */
    getSlotted<T extends Element = Element>(...slotNames: string[]): T[];
    /**
     * Returns a boolean statement of whether or not any of those slots exists in the light DOM.
     * @param names The slot names to check.
     * @example this.hasSlotted('header');
     */
    hasSlotted(...names: (string | null | undefined)[]): boolean;
    /**
     * Whether or not all the requested slots are empty.
     * @param  names The slot names to query.  If no value is provided, it returns the default slot.
     * @example this.isEmpty('header', 'footer');
     * @example this.isEmpty();
     * @returns
     */
    isEmpty(...names: (string | null | undefined)[]): boolean;
}
export {};

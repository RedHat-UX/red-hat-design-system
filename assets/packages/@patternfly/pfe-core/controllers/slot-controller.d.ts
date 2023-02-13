import type { ReactiveController, ReactiveElement } from 'lit';
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
    host: ReactiveElement;
    static anonymous: symbol;
    private nodes;
    private logger;
    private firstUpdated;
    private mo;
    private slotNames;
    private deprecations;
    constructor(host: ReactiveElement, ...config: ([SlotsConfig] | (string | null)[]));
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    /**
     * Returns a boolean statement of whether or not any of those slots exists in the light DOM.
     *
     * @param {String|Array} name The slot name.
     * @example this.hasSlotted("header");
     */
    hasSlotted(...names: string[]): boolean;
    /**
     * Given a slot name or slot names, returns elements assigned to the requested slots as an array.
     * If no value is provided, it returns all children not assigned to a slot (without a slot attribute).
     *
     * @example Get header-slotted elements
     * ```js
     * this.getSlotted('header')
     * ```
     *
     * @example Get header- and footer-slotted elements
     * ```js
     * this.getSlotted('header', 'footer')
     * ```
     *
     * @example Get default-slotted elements
     * ```js
     * this.getSlotted();
     * ```
     */
    getSlotted<T extends Element = Element>(...slotNames: string[]): T[];
    private onSlotChange;
    private onMutation;
    private getChildrenForSlot;
    private initSlot;
    /**
     * Maps the defined slots into an object that is easier to query
     */
    private init;
}
export {};

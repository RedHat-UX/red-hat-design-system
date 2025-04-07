import type { ReactiveElement } from 'lit';
import { type SlotControllerArgs, type SlotControllerPublicAPI } from './slot-controller.js';
export declare class SlotController implements SlotControllerPublicAPI {
    host: ReactiveElement;
    static default: symbol;
    /** @deprecated use `default` */
    static anonymous: symbol;
    static attribute: "ssr-hint-has-slotted";
    static anonymousAttribute: "ssr-hint-has-slotted-default";
    constructor(host: ReactiveElement, ..._: SlotControllerArgs);
    hostConnected?(): Promise<void>;
    private fromAttribute;
    getSlotted<T extends Element = Element>(..._: string[]): T[];
    hasSlotted(...names: (string | null)[]): boolean;
    isEmpty(...names: (string | null)[]): boolean;
}

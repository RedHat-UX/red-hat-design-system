import { ElementInternals } from './element-internals.js';
import { CustomStateSet } from './CustomStateSet.js';
import './element-internals.js';
import { IElementInternals } from './types.js';
export * from './types.js';
declare global {
    interface Window {
        CustomStateSet: typeof CustomStateSet;
        ElementInternals: typeof ElementInternals;
        ShadyDOM: any;
    }
    interface HTMLElement {
        /**
         * Attaches an ElementInternals instance to a custom element. Calling this method
         * on a built-in element will throw an error.
         */
        attachInternals(): ElementInternals & IElementInternals;
    }
}

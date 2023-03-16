import { ElementInternals } from './element-internals';
import { CustomStateSet } from './CustomStateSet';
import './element-internals';
import { IElementInternals } from './types';
export * from './types';
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

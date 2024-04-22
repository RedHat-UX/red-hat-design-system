import { determineNeededPolyfills, maybePolyfillGlobalElementInternalsObject } from "./polyfill-global.js";
import { polyfillCustomStateSet } from './polyfill-custom-state-set.js';
maybePolyfillGlobalElementInternalsObject();
const { isFormAssociatedPolyfillNeeded, isCustomStateSetPolyfillNeeded } = determineNeededPolyfills();
if (isFormAssociatedPolyfillNeeded) {
    // polfyfillFormAssociatedCustomElements();
}
if (isCustomStateSetPolyfillNeeded) {
    polyfillCustomStateSet();
}

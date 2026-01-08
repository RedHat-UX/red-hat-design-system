import { forceCustomStateSetPolyfill, forceElementInternalsPolyfill, isElementInternalsSupported, } from "./element-internals.js";
import "./element-internals.js";
export * from "./types.js";
export { forceCustomStateSetPolyfill, forceElementInternalsPolyfill, } from "./element-internals.js";
// Deteermine whether the webcomponents polyfill has been applied.
const isCePolyfill = !!customElements.polyfillWrapFlushCallback;
// custom elements polyfill is on. Do not auto-apply. User should determine
// whether to force or not.
if (!isCePolyfill) {
    if (!isElementInternalsSupported()) {
        forceElementInternalsPolyfill(false);
    }
    else if (typeof window !== "undefined" && !window.CustomStateSet) {
        forceCustomStateSetPolyfill(HTMLElement.prototype.attachInternals);
    }
}

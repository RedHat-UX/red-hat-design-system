import { CustomStateSet } from "./CustomStateSet.js";
export const polyfillCustomStateSet = () => {
    const { ElementInternals } = globalThis;
    const attachInternals = HTMLElement.prototype.attachInternals;
    HTMLElement.prototype.attachInternals = function (...args) {
        const internals = attachInternals.call(this, ...args);
        Object.defineProperty(internals, 'states', {
            value: new CustomStateSet(this)
        });
        return internals;
    };
};

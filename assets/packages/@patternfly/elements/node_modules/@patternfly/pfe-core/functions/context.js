import { ContextRoot, createContext } from '@lit/context';
import { isServer } from 'lit';
let root;
function makeContextRoot() {
    const root = new ContextRoot();
    if (!isServer) {
        root.attach(document.body);
    }
    else {
        root.attach(
        // @ts-expect-error: enable context root in ssr
        globalThis.litServerRoot);
    }
    return root;
}
/**
 * In order to prevent late-upgrading-context-consumers from 'missing'
 * their rightful context providers, we must set up a `ContextRoot` on the body.
 * Always use this function when creating contexts that are shared with child elements.
 * @param args createContext args
 */
export function createContextWithRoot(...args) {
    root ?? (root = makeContextRoot());
    return createContext(...args);
}
//# sourceMappingURL=context.js.map
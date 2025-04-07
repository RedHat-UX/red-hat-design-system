var _HeadingLevelContextProvider_instances, _HeadingLevelContextProvider_options, _HeadingLevelContextProvider_getLevel, _HeadingLevelContextProvider_computeLevelFromChildren;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { ContextProvider } from '@lit/context';
const SELECTORS = `H1,H2,H3,H4,H5,H6`;
import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';
export const context = createContextWithRoot('rh-heading-context');
/**
 * **START**
 * `H`
 * named capture group 1 `lvl`:
 * > **0-9**
 * **END**
 */
const HLVL_RE = /^H(?<lvl>\d)$/;
function getLevel(heading) {
    const { lvl } = heading?.tagName.match(HLVL_RE)?.groups ?? {};
    return parseInt(lvl ?? '');
}
function canQuery(node) {
    return typeof node.querySelectorAll === 'function';
}
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextProvider extends ContextProvider {
    constructor(host, options) {
        var _a, _b;
        super(host, { context });
        _HeadingLevelContextProvider_instances.add(this);
        this.host = host;
        /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
        _HeadingLevelContextProvider_options.set(this, void 0);
        __classPrivateFieldSet(this, _HeadingLevelContextProvider_options, { level: 1, offset: 1, ...options }, "f");
        (_a = __classPrivateFieldGet(this, _HeadingLevelContextProvider_options, "f")).level ?? (_a.level = 1);
        (_b = __classPrivateFieldGet(this, _HeadingLevelContextProvider_options, "f")).offset ?? (_b.offset = 1);
        this.setValue({});
    }
    setValue(ctx) {
        const offset = __classPrivateFieldGet(this, _HeadingLevelContextProvider_options, "f")?.offset ?? 1;
        const level = __classPrivateFieldGet(this, _HeadingLevelContextProvider_options, "f")?.level ?? 1;
        super.setValue({ offset, level, ...ctx });
    }
    hostConnected() {
        super.hostConnected();
        const level = __classPrivateFieldGet(this, _HeadingLevelContextProvider_instances, "m", _HeadingLevelContextProvider_getLevel).call(this);
        this.setValue({ level });
    }
}
_HeadingLevelContextProvider_options = new WeakMap(), _HeadingLevelContextProvider_instances = new WeakSet(), _HeadingLevelContextProvider_getLevel = function _HeadingLevelContextProvider_getLevel() {
    const level = this.host.getAttribute(__classPrivateFieldGet(this, _HeadingLevelContextProvider_options, "f")?.attribute ?? '')
        ?? __classPrivateFieldGet(this, _HeadingLevelContextProvider_instances, "m", _HeadingLevelContextProvider_computeLevelFromChildren).call(this)
        ?? 1;
    const val = typeof level === 'string' ? parseInt(level) : level;
    if (typeof val === 'number' && !Number.isNaN(val)) {
        return val;
    }
}, _HeadingLevelContextProvider_computeLevelFromChildren = function _HeadingLevelContextProvider_computeLevelFromChildren() {
    const { host } = this;
    const slotted = host.querySelector(SELECTORS);
    if (slotted && host.shadowRoot) {
        return getLevel(slotted);
    }
    else {
        const root = host.getRootNode();
        if (canQuery(root)) {
            const { localName } = host;
            const els = [...root.querySelectorAll(`${SELECTORS},${localName}`)];
            const lastHeadingBeforeHost = els.slice(0, els.indexOf(host)).pop();
            return getLevel(lastHeadingBeforeHost);
        }
    }
};
//# sourceMappingURL=provider.js.map
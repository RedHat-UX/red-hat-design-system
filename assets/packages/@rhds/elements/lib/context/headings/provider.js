var _HeadingLevelContextProvider_instances, _HeadingLevelContextProvider_callbacks, _HeadingLevelContextProvider_computeLevelFromChildren, _HeadingLevelContextProvider_isHeadingContextRequestEvent, _HeadingLevelContextProvider_onChildContextRequestEvent;
import { __classPrivateFieldGet } from "tslib";
import { contextEvents, HeadingLevelController } from './controller.js';
import { ContextRequestEvent, } from '../event.js';
const SELECTORS = `H1,H2,H3,H4,H5,H6`;
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
export class HeadingLevelContextProvider extends HeadingLevelController {
    constructor() {
        super(...arguments);
        _HeadingLevelContextProvider_instances.add(this);
        /** Cache of context callbacks. Call each to update consumers */
        _HeadingLevelContextProvider_callbacks.set(this, new Set());
    }
    hostConnected() {
        this.host.addEventListener('context-request', e => __classPrivateFieldGet(this, _HeadingLevelContextProvider_instances, "m", _HeadingLevelContextProvider_onChildContextRequestEvent).call(this, e));
        for (const [host, fired] of contextEvents) {
            host.dispatchEvent(fired);
        }
        this.level =
            this.host.getAttribute(this.options?.attribute ?? '')
                ?? __classPrivateFieldGet(this, _HeadingLevelContextProvider_instances, "m", _HeadingLevelContextProvider_computeLevelFromChildren).call(this);
    }
}
_HeadingLevelContextProvider_callbacks = new WeakMap(), _HeadingLevelContextProvider_instances = new WeakSet(), _HeadingLevelContextProvider_computeLevelFromChildren = function _HeadingLevelContextProvider_computeLevelFromChildren() {
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
}, _HeadingLevelContextProvider_isHeadingContextRequestEvent = function _HeadingLevelContextProvider_isHeadingContextRequestEvent(event) {
    return event.target !== this.host && event.context === HeadingLevelController.context;
}, _HeadingLevelContextProvider_onChildContextRequestEvent = async function _HeadingLevelContextProvider_onChildContextRequestEvent(event) {
    // only handle ContextRequestEvents relevant to colour context
    if (__classPrivateFieldGet(this, _HeadingLevelContextProvider_instances, "m", _HeadingLevelContextProvider_isHeadingContextRequestEvent).call(this, event)) {
        // claim the context-request event for ourselves (required by context protocol)
        event.stopPropagation();
        // Run the callback to initialize the child's value
        event.callback(this.level);
        // Cache the callback for future updates, if requested
        if (event.subscribe) {
            __classPrivateFieldGet(this, _HeadingLevelContextProvider_callbacks, "f").add(event.callback);
        }
    }
};
//# sourceMappingURL=provider.js.map
var _a;
import { installWindowOnGlobal } from '@lit-labs/ssr/lib/dom-shim.js';
class ObserverShim {
    observe() {
        void 0;
    }
    disconnect() {
        void 0;
    }
}
class MiniHTMLElement {
    constructor(tagName) {
        this.tagName = tagName;
        this.innerHTML = '';
    }
}
class MiniHTMLTemplateElement extends MiniHTMLElement {
    constructor() {
        super(...arguments);
        this.content = { cloneNode: () => this.innerHTML };
    }
}
function getComputedStyle() {
    return {
        getPropertyPriority() {
            return '';
        },
        getPropertyValue() {
            return '';
        },
    };
}
;
// @ts-expect-error: opt in to event support in ssr
globalThis.litSsrCallConnectedCallback = true;
installWindowOnGlobal({
    ErrorEvent: Event,
    IntersectionObserver: ObserverShim,
    MutationObserver: ObserverShim,
    ResizeObserver: ObserverShim,
    getComputedStyle,
});
// @ts-expect-error: this runs in node
(_a = globalThis.navigator).userAgent ?? (_a.userAgent = '@lit-labs/ssr');
globalThis.document.createElement = function createElement(tagName) {
    switch (tagName) {
        case 'template':
            return new MiniHTMLTemplateElement(tagName);
        default:
            return new MiniHTMLElement(tagName);
    }
};
//# sourceMappingURL=ssr-shims.js.map
"use strict";
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
class MiniDocument {
    createElement(tagName) {
        switch (tagName) {
            case 'template':
                return new MiniHTMLTemplateElement(tagName);
            default:
                return new MiniHTMLElement(tagName);
        }
    }
}
// @ts-expect-error: this runs in node
globalThis.window ?? (globalThis.window = globalThis);
// @ts-expect-error: this runs in node
globalThis.document ?? (globalThis.document = new MiniDocument());
// @ts-expect-error: this runs in node
globalThis.navigator ?? (globalThis.navigator = { userAgent: '' });
// @ts-expect-error: this runs in node
globalThis.ErrorEvent ?? (globalThis.ErrorEvent = Event);
// @ts-expect-error: this runs in node
globalThis.IntersectionObserver ?? (globalThis.IntersectionObserver = ObserverShim);
// @ts-expect-error: this runs in node
globalThis.MutationObserver ?? (globalThis.MutationObserver = ObserverShim);
// @ts-expect-error: this runs in node
globalThis.ResizeObserver ?? (globalThis.ResizeObserver = ObserverShim);
// @ts-expect-error: this runs in node
globalThis.getComputedStyle ?? (globalThis.getComputedStyle = function () {
    return {
        getPropertyPriority() {
            return '';
        },
        getPropertyValue() {
            return '';
        },
    };
});
//# sourceMappingURL=ssr-shims.js.map
import { __decorate } from "tslib";
import { bound } from '../decorators/bound.js';
import { debounce } from '../functions/debounce.js';
import { Logger } from './logger.js';
export class CascadeController {
    constructor(host, options) {
        this.host = host;
        this.options = options;
        this.mo = new MutationObserver(this.parse);
        this.cache = new Map();
        this.class = host.constructor;
        this.logger = new Logger(this.host);
        CascadeController.instances.set(host, this);
        const properties = this.options?.properties ?? {};
        for (const [propName, cascade] of Object.entries(properties)) {
            this.initProp(propName, cascade);
        }
        host.addController(this);
        this.cascadeProperties = debounce(this.cascadeProperties, 1);
    }
    hostUpdated() {
        this.cascadeProperties();
    }
    hostConnected() {
        this.mo.observe(this.host, { attributes: true, childList: true });
        this.cascadeProperties();
    }
    hostDisconnected() {
        this.mo.disconnect();
    }
    /**
     * Handles the cascading of properties to nested components when new elements are added
     * Attribute updates/additions are handled by the attribute callback
     */
    cascadeProperties(nodeList = this.host.children) {
        if (this.host.isConnected) {
            const selectors = this.cache.keys();
            // Find out if anything in the nodeList matches any of the observed selectors for cacading properties
            if (!nodeList) {
                return this._cascadeAttributes(selectors, this.cache);
            }
            for (const node of nodeList) {
                // if this node has a match function (i.e., it's an HTMLElement, not a text node),
                if (node instanceof Element) {
                    // see if it matches one of the selectors, otherwise drop it (like it's hot).
                    for (const selector of selectors) {
                        // console.log('_copyAttribute', name, value, el.getAttribute(name));
                        if (node.matches(selector)) {
                            const attrNames = this.cache.get(selector);
                            // each selector can match multiple properties/attributes, so
                            // copy each of them
                            for (const attrName of attrNames ?? []) {
                                this._copyAttribute(attrName, node);
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Gets the configured attribute name for the decorated property,
     * falling back to the lowercased property name, and caches the attribute name
     * with it's designated child selectors for value-propagation on change
     */
    initProp(propName, cascade) {
        for (const nodeItem of [cascade].flat(Infinity).filter(Boolean)) {
            const { attribute } = this.class.getPropertyOptions(propName);
            const attr = typeof attribute === 'string' ? attribute
                : propName.toLowerCase();
            // Create an object with the node as the key and an array of attributes
            // that are to be cascaded down to it
            if (!this.cache.get(nodeItem)) {
                this.cache.set(nodeItem, [attr]);
            }
            else {
                this.cache.get(nodeItem)?.push(attr);
            }
        }
    }
    parse(mutations) {
        // Iterate over the mutation list, look for cascade updates
        for (const mutation of mutations ?? []) {
            // If a new node is added, attempt to cascade attributes to it
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                this.cascadeProperties(mutation.addedNodes);
            }
            else if (mutation.type === 'attributes') {
                this._cascadeAttributes(this.cache.keys(), this.cache);
            }
        }
    }
    /**
     * Copy the named attribute to a target element.
     */
    async _copyAttribute(name, el) {
        this.logger.log(`copying ${name} to ${el}`);
        const value = this.host.getAttribute(name);
        if (el.isConnected) {
            if (value == null) {
                el.removeAttribute(name);
            }
            else {
                el.setAttribute(name, value);
            }
        }
    }
    _cascadeAttributes(selectors, set) {
        for (const selector of selectors) {
            for (const attr of set.get(selector) ?? []) {
                this._cascadeAttribute(attr, selector);
            }
        }
    }
    /**
     * Trigger a cascade of the named attribute to any child elements that match
     * the `to` selector.  The selector can match elements in the light DOM and
     * shadow DOM.
     * @param  name The name of the attribute to cascade (not necessarily the same as the property name).
     * @param  to A CSS selector that matches the elements that should received the cascaded attribute.  The selector will be applied within `this` element's light and shadow DOM trees.
     */
    _cascadeAttribute(name, to) {
        const recipients = [
            ...this.host.querySelectorAll(to),
            ...this.host.shadowRoot?.querySelectorAll(to) ?? [],
        ];
        for (const node of recipients) {
            this._copyAttribute(name, node);
        }
    }
}
CascadeController.instances = new WeakMap();
__decorate([
    bound
], CascadeController.prototype, "parse", null);
//# sourceMappingURL=cascade-controller.js.map
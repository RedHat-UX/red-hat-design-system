var _RhFooterLinks_logger, _RhFooterLinks_mo;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host{display:flex;flex-direction:column;gap:.625em}[part]{display:contents}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:500;font-size:.875em;margin-top:0;margin-bottom:0}:host([header-hidden]) .header ::slotted(*){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
let RhFooterLinks = class RhFooterLinks extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Cause the header slot to be visually hidden.
         * Setting this to true will not affect `aria-labelledby`.
         */
        this.headerHidden = false;
        _RhFooterLinks_logger.set(this, new Logger(this));
        _RhFooterLinks_mo.set(this, new MutationObserver(() => this.updateAccessibility()));
        this.slots = new SlotController(this, 'header');
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateAccessibility();
        __classPrivateFieldGet(this, _RhFooterLinks_mo, "f").observe(this, { childList: true });
    }
    updateAccessibility() {
        // ensure we've rendered to our shadowroot
        const header = this.querySelector('[slot="header"]');
        const ul = this.querySelector('ul');
        if (header && ul) {
            // ensure there is an id on the header slot
            header.id || (header.id = getRandomId('rh-footer-links'));
            ul.setAttribute('aria-labelledby', header.id);
        }
        else {
            __classPrivateFieldGet(this, _RhFooterLinks_logger, "f").warn('This links set doesn\'t have a valid header associated with it.');
        }
    }
    render() {
        return html `
      <div part="header" class="header">
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <slot name="panel"></slot>
        <slot></slot>
      </div>
    `;
    }
};
_RhFooterLinks_logger = new WeakMap();
_RhFooterLinks_mo = new WeakMap();
RhFooterLinks.styles = style;
__decorate([
    property({
        type: Boolean,
        attribute: 'header-hidden',
        reflect: true,
    })
], RhFooterLinks.prototype, "headerHidden", void 0);
RhFooterLinks = __decorate([
    customElement('rh-footer-links')
], RhFooterLinks);
export { RhFooterLinks };
//# sourceMappingURL=rh-footer-links.js.map
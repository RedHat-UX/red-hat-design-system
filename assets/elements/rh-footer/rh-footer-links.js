import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { initializer } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import style from "./rh-footer-links.css.js";
let RhFooterLinks = class RhFooterLinks extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Visibily hide the header slot. Setting this to true will not affect
         * aria-labelledby.
         */
        this.headerHidden = false;
        this.logger = new Logger(this);
        this.slots = new SlotController(this, {
            slots: ['header'],
        });
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
            this.logger.warn('This links set doesn\'t have a valid header associated with it.');
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
RhFooterLinks.styles = style;
__decorate([
    property({ type: Boolean, attribute: 'header-hidden', reflect: true })
], RhFooterLinks.prototype, "headerHidden", void 0);
__decorate([
    initializer()
], RhFooterLinks.prototype, "updateAccessibility", null);
RhFooterLinks = __decorate([
    customElement('rh-footer-links')
], RhFooterLinks);
export { RhFooterLinks };
//# sourceMappingURL=rh-footer-links.js.map
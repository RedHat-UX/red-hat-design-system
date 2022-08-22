var _RhSecondaryNavMenuSection_instances, _RhSecondaryNavMenuSection_logger, _RhSecondaryNavMenuSection_updateAccessibility;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { isHeadingElement } from '../../lib/functions.js';
import styles from "./rh-secondary-nav-menu-section.css.js";
/**
 * @summary 'A menu section which auto upgrades header and sibling link list accessibility attributes'
 *
 * @slot header     - Adds a header tag to section, expects `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
 * @slot links      - Adds a ul tag to section, expects `<ul>, <ol>`
 * @slot cta        - Adds a section level CTA, expects `<rh-cta>`
 *
 * @csspart base    - container, <section> element
**/
let RhSecondaryNavMenuSection = class RhSecondaryNavMenuSection extends LitElement {
    constructor() {
        super(...arguments);
        _RhSecondaryNavMenuSection_instances.add(this);
        _RhSecondaryNavMenuSection_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhSecondaryNavMenuSection_instances, "m", _RhSecondaryNavMenuSection_updateAccessibility).call(this);
    }
    render() {
        return html `
      <section part="container">
        <slot name="header"></slot>
        <slot name="links"></slot>
        <slot name="cta"></slot>
      </section>
    `;
    }
};
_RhSecondaryNavMenuSection_logger = new WeakMap(), _RhSecondaryNavMenuSection_instances = new WeakSet(), _RhSecondaryNavMenuSection_updateAccessibility = function _RhSecondaryNavMenuSection_updateAccessibility() {
    const lists = this.querySelectorAll(':is([slot="links"]):is(ul, ol)');
    for (const list of lists) {
        if (!list.hasAttribute('aria-labelledby')) {
            const header = isHeadingElement(list.previousElementSibling) ? list.previousElementSibling : null;
            if (!header) {
                return __classPrivateFieldGet(this, _RhSecondaryNavMenuSection_logger, "f").warn('This links set doesn\'t have a valid header associated with it.');
            }
            else {
                // add an ID to the header if we need it
                header.id || (header.id = getRandomId('rh-secondary-nav-menu-section'));
                // add that header id to the aria-labelledby tag
                list.setAttribute('aria-labelledby', header.id);
            }
        }
    }
};
RhSecondaryNavMenuSection.styles = [styles];
RhSecondaryNavMenuSection = __decorate([
    customElement('rh-secondary-nav-menu-section')
], RhSecondaryNavMenuSection);
export { RhSecondaryNavMenuSection };
//# sourceMappingURL=rh-secondary-nav-menu-section.js.map
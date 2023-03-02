var _RhNavigationSecondaryMenuSection_instances, _RhNavigationSecondaryMenuSection_logger, _RhNavigationSecondaryMenuSection_updateAccessibility, _RhSecondaryNavMenuSection_logger;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { isHeadingElement } from '../../lib/functions.js';
import { css } from "lit";
const styles = css `:host{display:block}::slotted([slot=header]){padding:0}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif)}::slotted([slot=links]:is(ul,ol)){list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--rh-font-size-body-text-md,1rem)}::slotted([slot=cta]){padding:var(--rh-space-xl,24px) 0 0}::slotted([slot=cta]:last-of-type){padding:var(--rh-space-xl,24px) 0}@media screen and (min-width:992px){::slotted([slot=header]){padding:0}::slotted([slot=links]){padding:0;margin:0}}`;
/**
 * @summary 'A menu section which auto upgrades header and sibling link list accessibility attributes'
 *
 * @slot header     - Adds a header tag to section, expects `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
 * @slot links      - Adds a ul tag to section, expects `<ul>, <ol>`
 * @slot cta        - Adds a section level CTA, expects `<rh-cta>`
 *
 * @csspart base    - container, <section> element
**/
let RhNavigationSecondaryMenuSection = class RhNavigationSecondaryMenuSection extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationSecondaryMenuSection_instances.add(this);
        _RhNavigationSecondaryMenuSection_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhNavigationSecondaryMenuSection_instances, "m", _RhNavigationSecondaryMenuSection_updateAccessibility).call(this);
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
_RhNavigationSecondaryMenuSection_logger = new WeakMap(), _RhNavigationSecondaryMenuSection_instances = new WeakSet(), _RhNavigationSecondaryMenuSection_updateAccessibility = function _RhNavigationSecondaryMenuSection_updateAccessibility() {
    const lists = this.querySelectorAll(':is([slot="links"]):is(ul, ol)');
    for (const list of lists) {
        if (!list.hasAttribute('aria-labelledby')) {
            const header = isHeadingElement(list.previousElementSibling) ? list.previousElementSibling : null;
            if (!header) {
                return __classPrivateFieldGet(this, _RhNavigationSecondaryMenuSection_logger, "f").warn('This links set doesn\'t have a valid header associated with it.');
            }
            else {
                // add an ID to the header if we need it
                header.id || (header.id = getRandomId('rh-navigation-secondary-menu-section'));
                // add that header id to the aria-labelledby tag
                list.setAttribute('aria-labelledby', header.id);
            }
        }
    }
};
RhNavigationSecondaryMenuSection.styles = [styles];
RhNavigationSecondaryMenuSection = __decorate([
    customElement('rh-navigation-secondary-menu-section')
], RhNavigationSecondaryMenuSection);
export { RhNavigationSecondaryMenuSection };
let RhSecondaryNavMenuSection = class RhSecondaryNavMenuSection extends RhNavigationSecondaryMenuSection {
    constructor() {
        super();
        _RhSecondaryNavMenuSection_logger.set(this, new Logger(this));
        __classPrivateFieldGet(this, _RhSecondaryNavMenuSection_logger, "f").warn('rh-secondary-nav-menu-section is deprecated. Use rh-navigation-secondary-menu-section instead.');
    }
};
_RhSecondaryNavMenuSection_logger = new WeakMap();
RhSecondaryNavMenuSection = __decorate([
    customElement('rh-secondary-nav-menu-section')
], RhSecondaryNavMenuSection);
//# sourceMappingURL=rh-navigation-secondary-menu-section.js.map
var _RhNavigationSecondaryMenuSection_instances, _RhNavigationSecondaryMenuSection_logger, _RhNavigationSecondaryMenuSection_updateAccessibility;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { isHeadingElement } from '../../lib/functions.js';
import { css } from "lit";
const styles = css `:host{display:block}::slotted([slot=header]){padding:0}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)}::slotted([slot=links]:is(ul,ol)){list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--rh-font-size-body-text-md,1rem)}::slotted([slot=cta]){padding:var(--rh-space-xl,24px) 0 0}::slotted([slot=cta]:last-of-type){padding:var(--rh-space-xl,24px) 0}@media screen and (min-width:992px){::slotted([slot=header]){padding:0}::slotted([slot=links]){padding:0;margin:0}}`;
/**
 * Groups related links under a heading within a dropdown menu. Automatically
 * wires `aria-labelledby` between the slotted heading and adjacent `<ul>`/`<ol>`
 * for screen reader navigation. Renders as a `<section>` element. Must contain
 * a heading in the `header` slot and a list in the `links` slot. Should
 * provide an `id` on the heading or one will be auto-generated. Tab navigates
 * through links; the heading provides group context to assistive technology.
 *
 * @summary Accessible link group with heading for dropdown menus
 *
 * @slot header - Section heading (h1-h6). Auto-linked to list via aria-labelledby.
 * @slot links - Navigation link list. Expects `<ul>` or `<ol>` element.
 * @slot cta - Optional section-level call to action. Expects `<rh-cta>`.
 */
let RhNavigationSecondaryMenuSection = class RhNavigationSecondaryMenuSection extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationSecondaryMenuSection_instances.add(this);
        _RhNavigationSecondaryMenuSection_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            __classPrivateFieldGet(this, _RhNavigationSecondaryMenuSection_instances, "m", _RhNavigationSecondaryMenuSection_updateAccessibility).call(this);
        }
    }
    render() {
        return html `
      <!-- summary: menu section container
           description: |
             The semantic container for a menu section, grouping related navigation links
             under a common header. This part corresponds to a \`<section>\` element that
             provides structure and automatic accessibility enhancements.

             **Styling:**
             - Use this part to customize individual menu section appearance
             - Controls spacing and layout of header, links, and CTA
             - Sections are organized in a grid when multiple sections exist
             - Automatically applies aria-labelledby to link lists

             **Accessibility:**
             - Automatically associates heading with list using aria-labelledby
             - Generates IDs for headers if not present
             - Ensures semantic structure for screen reader users -->
      <section part="container">
        <!-- summary: section heading
             description: |
               Expects an \`<h1>\`-\`<h6>\` element. Auto-linked to the links list via
               \`aria-labelledby\` for screen reader group identification. An \`id\` is
               generated if not present. -->
        <slot name="header"></slot>
        <!-- summary: section link list
             description: |
               Expects a \`<ul>\` or \`<ol>\` element with navigation links. Automatically
               receives \`aria-labelledby\` pointing to the header for screen readers.
               Tab navigates through each link in the list. -->
        <slot name="links"></slot>
        <!-- summary: section-level call to action
             description: |
               Optional slot for an \`<rh-cta>\` element. Appears after the link list.
               Screen readers announce the CTA link text in document order. -->
        <slot name="cta"></slot>
      </section>
    `;
    }
};
_RhNavigationSecondaryMenuSection_logger = new WeakMap();
_RhNavigationSecondaryMenuSection_instances = new WeakSet();
_RhNavigationSecondaryMenuSection_updateAccessibility = function _RhNavigationSecondaryMenuSection_updateAccessibility() {
    const lists = this.querySelectorAll(':is([slot="links"]):is(ul, ol)');
    for (const list of lists) {
        if (!list.hasAttribute('aria-labelledby')) {
            const header = isHeadingElement(list.previousElementSibling) ?
                list.previousElementSibling
                : null;
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
//# sourceMappingURL=rh-navigation-secondary-menu-section.js.map
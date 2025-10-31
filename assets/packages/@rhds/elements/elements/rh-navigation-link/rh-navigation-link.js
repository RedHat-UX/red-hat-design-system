var _RhNavigationLink_internals;
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host{display:contents}#container{display:var(--_navigation-link-container-display,block);inline-size:var(--_navigation-link-container-inline-size,fit-content);block-size:var(--_navigation-link-container-block-size,auto);padding:var(--_navigation-link-container-padding,initial);align-items:var(--_navigation-link-container-align-items,initial);position:var(--_navigation-link-container-position,initial)}::slotted(a),a{position:relative;display:var(--_navigation-link-display,inline);color:var(--_navigation-link-color,var(--rh-color-text-primary))!important;font-size:var(--_navigation-link-font-size,1rem)!important;font-weight:var(--_navigation-link-font-weight,initial)!important;block-size:var(--_navigation-link-block-size,auto);inline-size:var(--_navigation-link-inline-size,auto);align-items:var(--_navigation-link-align-items,initial);align-content:var(--_navigation-link-align-content,initial);padding:var(--_navigation-link-padding,0);text-decoration:var(--_navigation-link-text-decoration,none)!important;gap:var(--_navigation-link-gap,initial);background-color:var(--_navigation-link-background-color,#0000)}::slotted(a):before,a:before{content:"";position:absolute;inset:0;border-inline-start:var(--_navigation-link-before-border-inline-start-width,0) solid var(--_navigation-link-before-border-inline-start-color,#0000)}::slotted(:is(a:hover,a:hover:focus-visible,:focus-visible,:active)),a:is(:hover,:hover:focus-visible,:focus-visible,:active){--_navigation-link-background-color:var(--_navigation-link-hover-background-color,light-dark(#0000,#0000))!important;--_navigation-link-color:var(--_navigation-link-color-hover,var(--rh-color-interactive-primary-hover))!important;text-underline-offset:var(--_navigation-link-text-underline-offset,4px)!important;text-decoration-color:var(--_navigation-link-text-decoration-color,light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-40,#a3a3a3)))!important;text-decoration-line:var(--_navigation-link-text-decoration-line,underline)!important;text-decoration-style:var(--_navigation-link-text-decoration-style,dashed)!important;text-decoration-skip-ink:auto!important}::slotted(a:is(:focus-visible,:hover:focus-visible,:focus-visible,:active)),a:is(:focus-visible,:hover:focus-visible,:focus-visible,:active){outline-offset:var(--_navigation-link-focus-outline-offset,0);outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}`;
/**
 * Navigation Link is a link element that is used as a child of the primary, secondary,
 * subnav, and vertical navigation elements. Intrinsically, the Navigation Link is a list
 * item and should not be used outside of navigation elements that define the parent list element.
 *
 * @summary A link that can be used as a child of navigation elements.
 * @alias navigation-link
 */
let RhNavigationLink = class RhNavigationLink extends LitElement {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line no-unused-private-class-members
        _RhNavigationLink_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
        /**
         * Indicates that this link refers to the current page for accessibility; used with the `href` attribute.
         * Sets the `aria-current` attribute to 'page' on the anchor element internally in the shadow DOM.
         */
        this.currentPage = false;
    }
    async scheduleUpdate() {
        if (this.icon) {
            await import('@rhds/elements/rh-icon/rh-icon.js');
        }
        super.scheduleUpdate();
    }
    render() {
        const isCurrentPage = this.currentPage ? 'page' : undefined;
        return html `
      <div id="container">
        ${this.href ? html `
          <a href="${ifDefined(this.href)}" aria-current="${ifDefined(isCurrentPage)}">
            <!--
              Use this slot when the \`icon\` and \`icon-set\` attributes are not set. 
              Must be used in conjunction with the \`href\` attribute.  
              Can contain a rh-icon, svg, or img tag.
            -->
            <slot name="icon">
              ${!this.icon ? html ``
            : html `<rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>
            <!--
              The default slot should contain the link text when the \`href\` attribute is set. 
              Alternatively, an anchor tag (\`<a href="...">\`) should be the first child inside
              the slot. Slot should never contain a button tag.
            -->
            <slot></slot>
          </a>`
            : html `<slot></slot>`}
      </div>
    `;
    }
};
_RhNavigationLink_internals = new WeakMap();
RhNavigationLink.styles = [styles];
RhNavigationLink.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property()
], RhNavigationLink.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhNavigationLink.prototype, "iconSet", void 0);
__decorate([
    property({ reflect: true })
], RhNavigationLink.prototype, "href", void 0);
__decorate([
    property({ attribute: 'current-page', type: Boolean })
], RhNavigationLink.prototype, "currentPage", void 0);
RhNavigationLink = __decorate([
    customElement('rh-navigation-link'),
    themable
], RhNavigationLink);
export { RhNavigationLink };
//# sourceMappingURL=rh-navigation-link.js.map
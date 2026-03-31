import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `span{margin-block:var(--rh-space-md,8px);padding-inline:var(--rh-space-lg,16px);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:18px;color:var(--rh-color-interactive-secondary-default)}`;
/**
 * A menu item group provides a labeled section within an `rh-menu`, allowing
 * authors to organize related `rh-menu-item` elements under a visible heading.
 * The heading is rendered as a presentational span, so screen reader users
 * navigate items via the parent menubar role. Authors should set the
 * `group-heading` attribute when grouping items to provide visual context.
 * Focus management is handled by the parent `rh-menu` roving tabindex.
 *
 * @summary A labeled group of related menu items
 *
 * @alias Menu Dropdown
 */
let RhMenuItemGroup = class RhMenuItemGroup extends LitElement {
    render() {
        return html `
      <span ?hidden="${!this.groupHeading}" role="presentation">${this.groupHeading}</span>
      <!-- summary: Group items
           description: |
             Accepts \`rh-menu-item\` elements. Authors must not place
             non-interactive content in this slot. Screen reader users
             navigate grouped items via the parent menu keyboard
             controls. -->
      <slot></slot>
    `;
    }
};
RhMenuItemGroup.styles = [styles];
__decorate([
    property({ attribute: 'group-heading', reflect: true })
], RhMenuItemGroup.prototype, "groupHeading", void 0);
RhMenuItemGroup = __decorate([
    customElement('rh-menu-item-group')
], RhMenuItemGroup);
export { RhMenuItemGroup };
//# sourceMappingURL=rh-menu-item-group.js.map
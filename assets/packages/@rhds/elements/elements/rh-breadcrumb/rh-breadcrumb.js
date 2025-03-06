import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{--_breadcrumb-caret-image-default:var(--rh-breadcrumb-caret-image,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23000000'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-caret-image-subtle:var(--rh-breadcrumb-caret-image-subtle,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23707070'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-link-color:var(--rh-breadcrumb-link-color,var(--rh-color-interactive-primary-default));--_breadcrumb-link-color-current-page:var(--rh-breadcrumb-link-color-current-page,var(--rh-color-text-primary));--_breadcrumb-link-color-current-page-subtle:var(--rh-breadcrumb-link-color-current-page-subtle,var(--rh-color-text-secondary));--_breadcrumb-link-color-hover:var(--rh-breadcrumb-link-color-hover,var(--rh-color-interactive-primary-hover));--_breadcrumb-link-color-visited:var(--rh-breadcrumb-link-color-visited,var(--rh-color-interactive-primary-visited-default));--_breadcrumb-link-color-visited-hover:var(--rh-breadcrumb-link-color-visited-hover,var(--rh-color-interactive-primary-visited-hover));--_breadcrumb-link-focus-outline-color:var(--rh-breadcrumb-link-focus-outline-color,var(--rh-color-border-interactive));display:block}#container.dark{--_breadcrumb-caret-image-default:var(--rh-breadcrumb-caret-image,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23ffffff'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-caret-image-subtle:var(--rh-breadcrumb-caret-image-subtle,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23a3a3a3'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-link-color:var(--rh-breadcrumb-link-color,var(--rh-color-interactive-primary-default));--_breadcrumb-link-color-current-page:var(--rh-breadcrumb-link-color-current-page,var(--rh-color-text-primary));--_breadcrumb-link-color-current-page-subtle:var(--rh-breadcrumb-link-color-current-page-subtle,var(--rh-color-text-secondary));--_breadcrumb-link-color-hover:var(--rh-breadcrumb-link-color-hover,var(--rh-color-interactive-primary-hover));--_breadcrumb-link-color-visited:var(--rh-breadcrumb-link-color-visited,var(--rh-color-interactive-primary-visited-default));--_breadcrumb-link-color-visited-hover:var(--rh-breadcrumb-link-color-visited-hover,var(--rh-color-interactive-primary-visited-hover));--_breadcrumb-link-focus-outline-color:var(--rh-breadcrumb-link-focus-outline-color,var(--rh-color-border-interactive))}`;
/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
 * @slot - Place an ordered list (`<ol>`) of your breadcrumbs into the slot
 * @csspart container - container element for slotted breadcrumb
 * @cssprop [--rh-breadcrumb-link-color=var(--rh-color-interactive-blue-darker, #0066cc)]
 *         The link color for each anchor in the list
 * @cssprop [--rh-breadcrumb-link-color-current-page=var(--rh-color-text-primary-on-light, #151515)]
 *         The current page's color
 * @cssprop [--rh-breadcrumb-link-color-current-page-subtle=var(--rh-color-text-secondary-on-light, #4d4d4d)]
 *         The current page's color for the `subtle` variant
 * @cssprop [--rh-breadcrumb-link-color-hover=var(--rh-color-interactive-blue-darkest, #003366)]
 *         The link color on hover/focus/active for each anchor in the list
 * @cssprop [--rh-breadcrumb-link-color-visited=var(--rh-color-interactive-purple-darker, #5e40be)]
 *         The visited color for each breadcrumb link
 * @cssprop [--rh-breadcrumb-link-color-visited-hover=var(--rh-color-interactive-purple-darkest, #21134d)]
 *         The visited color on hover for each breadcrumb link
 * @cssprop [--rh-breadcrumb-link-focus-outline-color=var(--rh-color-border-interactive-on-light, #0066cc)]
 *         The link focus outline color
 * @cssprop [--rh-breadcrumb-li-padding-inline-end=var(--rh-breadcrumb-li-padding-inline-end, 42px)]
 *          Sets the spacing between each breadcrumb item.
 * @cssprop --rh-breadcrumb-caret-image
 *          The default background image separating each breadcrumb item
 * @cssprop --rh-breadcrumb-caret-image-subtle
 *          The `subtle` variant background image separating each breadcrumb item
 */
export class RhBreadcrumb extends LitElement {
    render() {
        const { on = '' } = this;
        const label = this.accessibleLabel ? this.accessibleLabel : 'Breadcrumb';
        return html `
      <nav aria-label="${label}" part="container" id="container" class="${classMap({ on: true, [on]: !!on })}">
        <slot></slot>
      </nav>
    `;
    }
}
RhBreadcrumb.properties = {
    accessibleLabel: { attribute: 'accessible-label' },
    variant: { reflect: true }
};
RhBreadcrumb.styles = [styles];
__decorate([
    colorContextConsumer()
], RhBreadcrumb.prototype, "on", void 0);
customElements.define("rh-breadcrumb", RhBreadcrumb);
//# sourceMappingURL=rh-breadcrumb.js.map
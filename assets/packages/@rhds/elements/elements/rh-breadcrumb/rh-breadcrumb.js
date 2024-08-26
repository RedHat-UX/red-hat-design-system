import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{--_breadcrumb-caret-image-default:var(--rh-breadcrumb-caret-image, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23000000'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-caret-image-subtle:var(--rh-breadcrumb-caret-image-subtle, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23707070'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-link-color:var(\n        --rh-breadcrumb-link-color,\n        var(--rh-color-interactive-blue-darker, #0066cc)\n      );--_breadcrumb-link-color-current-page:var(\n        --rh-breadcrumb-link-color-current-page,\n        var(--rh-color-text-primary-on-light, #151515)\n      );--_breadcrumb-link-color-current-page-subtle:var(\n        --rh-breadcrumb-link-color-current-page-subtle,\n        var(--rh-color-text-secondary-on-light, #4d4d4d)\n      );--_breadcrumb-link-color-hover:var(\n        --rh-breadcrumb-link-color-hover,\n        var(--rh-color-interactive-blue-darkest, #003366)\n      );--_breadcrumb-link-color-visited:var(\n        --rh-breadcrumb-link-color-visited,\n        var(--rh-color-interactive-purple-darker, #5e40be)\n      );--_breadcrumb-link-color-visited-hover:var(\n        --rh-breadcrumb-link-color-visited-hover,\n        var(--rh-color-interactive-purple-darkest, #21134d)\n      );--_breadcrumb-link-focus-outline-color:var(\n        --rh-breadcrumb-link-focus-outline-color,\n        var(--rh-color-border-interactive-on-light, #0066cc)\n      );display:block}#container.dark{--_breadcrumb-caret-image-default:var(--rh-breadcrumb-caret-image, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23ffffff'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-caret-image-subtle:var(--rh-breadcrumb-caret-image-subtle, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='15' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23a3a3a3'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"));--_breadcrumb-link-color:var(\n        --rh-breadcrumb-link-color,\n        var(--rh-color-interactive-blue-lighter, #92c5f9)\n      );--_breadcrumb-link-color-current-page:var(\n        --rh-breadcrumb-link-color-current-page,\n        var(--rh-color-text-primary-on-dark, #ffffff)\n      );--_breadcrumb-link-color-current-page-subtle:var(\n        --rh-breadcrumb-link-color-current-page-subtle,\n        var(--rh-color-text-secondary-on-dark, #c7c7c7)\n      );--_breadcrumb-link-color-hover:var(\n        --rh-breadcrumb-link-color-hover,\n        var(--rh-color-interactive-blue-lightest, #b9dafc)\n      );--_breadcrumb-link-color-visited:var(\n        --rh-breadcrumb-link-color-visited,\n        var(--rh-color-interactive-purple-lighter, #b6a6e9)\n      );--_breadcrumb-link-color-visited-hover:var(\n        --rh-breadcrumb-link-color-visited-hover,\n        var(--rh-color-interactive-purple-lightest, #ece6ff)\n      );--_breadcrumb-link-focus-outline-color:var(\n        --rh-breadcrumb-link-focus-outline-color,\n        var(--rh-color-border-interactive-on-dark, #92c5f9)\n      )}`;
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
let RhBreadcrumb = class RhBreadcrumb extends LitElement {
    render() {
        const { on = '' } = this;
        const label = this.accessibleLabel ? this.accessibleLabel : 'Breadcrumb';
        return html `
      <nav aria-label="${label}" part="container" id="container" class="${classMap({ [on]: !!on })}">
        <slot></slot>
      </nav>
    `;
    }
};
RhBreadcrumb.styles = [styles];
__decorate([
    property({ attribute: 'accessible-label' })
], RhBreadcrumb.prototype, "accessibleLabel", void 0);
__decorate([
    property({ reflect: true })
], RhBreadcrumb.prototype, "variant", void 0);
__decorate([
    colorContextConsumer()
], RhBreadcrumb.prototype, "on", void 0);
RhBreadcrumb = __decorate([
    customElement('rh-breadcrumb')
], RhBreadcrumb);
export { RhBreadcrumb };
//# sourceMappingURL=rh-breadcrumb.js.map
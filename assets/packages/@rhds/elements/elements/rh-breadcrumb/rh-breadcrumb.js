import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block;--rh-breadcrumb-link-color:var(--rh-color-interactive-blue-darker,#06c);--rh-breadcrumb-link-color-current-page:var(--rh-color-text-primary-on-light,#151515);--rh-breadcrumb-link-color-current-page-subtle:var(--rh-color-text-secondary-on-light,#4d4d4d);--rh-breadcrumb-link-color-hover:var(--rh-color-interactive-blue-darkest,#036);--rh-breadcrumb-link-color-visited:var(--rh-color-interactive-purple-darker,#5e40be);--rh-breadcrumb-link-color-visited-hover:var(--rh-color-interactive-purple-darkest,#ece6ff);--rh-breadcrumb-link-focus-outline-color:var(--rh-color-border-interactive-on-light,#06c);--rh-breadcrumb-li-padding-inline-end:42px;--rh-breadcrumb-caret-image:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="10" height="21" viewBox="0 0 10 21"%3E%3Cpath d="m0 20.5 9-10-9-10" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');--rh-breadcrumb-caret-image-subtle:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="10" height="21" viewBox="0 0 10 21"%3E%3Cpath d="m0 20.5 9-10-9-10" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')}`;
/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
 *
 * @alias breadcrumb
 *
 */
let RhBreadcrumb = class RhBreadcrumb extends LitElement {
    render() {
        const label = this.accessibleLabel ? this.accessibleLabel : 'Breadcrumb';
        return html `
      <!-- container element for slotted breadcrumb -->
      <nav aria-label="${label}" part="container" id="container">
        <!-- Place an ordered list (\`<ol>\`) of your breadcrumbs into the slot -->
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
RhBreadcrumb = __decorate([
    customElement('rh-breadcrumb'),
    themable
], RhBreadcrumb);
export { RhBreadcrumb };
//# sourceMappingURL=rh-breadcrumb.js.map
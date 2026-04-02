var _RhBreadcrumb_instances, _RhBreadcrumb_onTruncationClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer, render } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block}`;
/** CSS class applied to the truncation toggle button. */
const truncateBtnClass = 'truncate-btn';
/** CSS class applied to the `<li>` wrapper around the truncation button. */
const truncateBtnContainerClass = `${truncateBtnClass}-container`;
/** Type guard: returns true when the event target is inside a truncation button. */
function isTruncateButtonDescendant(target) {
    return !!target
        && target instanceof HTMLElement
        && !!target.closest(`.${truncateBtnClass}`);
}
/**
 * Lit template for the ellipsis button that replaces hidden middle items.
 * The button uses `aria-expanded="false"` and a visually-hidden label
 * so screen readers announce "Show middle breadcrumb items".
 */
const truncationBtn = html `
  <button class="${truncateBtnClass}"
          aria-expanded="false"
          title="Show middle breadcrumb items"
          type="button">
    <span aria-hidden="true">&#8230;</span>
    <span class="visually-hidden">
      Show middle breadcrumb items
    </span>
  </button>`;
/**
 * A breadcrumb provides secondary navigation for showing the user's
 * hierarchical location within a site. Users must slot an `<ol>` with
 * `<li>` items containing `<a>` links. The last item should carry
 * `aria-current="page"` so screen readers announce the current page.
 * Keyboard users navigate breadcrumb links with Tab and activate
 * them with Enter.
 *
 * @summary Displays a hierarchical trail of links showing the user's
 *          location within a site
 *
 * @alias breadcrumb
 *
 * @cssprop [--rh-breadcrumb-caret-image={svg encoded as data URI}] -
 *          The `mask-image` separator icon between items; theme by
 *          providing an SVG data URI. Uses `--rh-color-icon-secondary`
 *          design token for the icon background color.
 * @cssprop [--rh-breadcrumb-li-padding-inline-end=var(--rh-space-lg, 16px)] -
 *          Inline-end spacing per item; defaults to the `--rh-space-lg`
 *          design token (16px)
 * @cssprop [--rh-breadcrumb-link-color=var(--rh-color-interactive-primary-default)] -
 *          Link color for anchors; defaults to the
 *          `--rh-color-interactive-primary-default` design token
 */
let RhBreadcrumb = class RhBreadcrumb extends LitElement {
    constructor() {
        super(...arguments);
        _RhBreadcrumb_instances.add(this);
        /**
         * When true, breadcrumb lists with five or more items are truncated:
         * middle items are hidden and replaced by an ellipsis button that
         * users can activate to reveal the full trail. Lists with fewer
         * than five items are not affected. The truncation button is
         * keyboard-accessible and announces its purpose to screen readers.
         */
        this.truncate = false;
    }
    render() {
        const label = this.accessibleLabel ? this.accessibleLabel : 'Breadcrumb';
        // delegating click events on the buttons to the nav element
        /* eslint-disable lit-a11y/click-events-have-key-events */
        return html `
      <!-- nav landmark with aria-label for assistive technology -->
      <nav id="container"
           part="container"
           aria-label="${label}"
           @click="${__classPrivateFieldGet(this, _RhBreadcrumb_instances, "m", _RhBreadcrumb_onTruncationClick)}">
        <!--
          summary: Expects a single \`<ol>\` block element with \`<li>\` items
          description: |
            Each \`<li>\` should contain an inline \`<a>\` text link.
            The final \`<a>\` should set \`aria-current="page"\`.
            The last \`<li>\` may contain inline text without a link
            for a non-interactive current page indicator.
        -->
        <slot></slot>
      </nav>
    `;
        /* eslint-enable lit-a11y/click-events-have-key-events */
    }
    /**
     * After first render, applies truncation when the `truncate` attribute
     * is set and the list contains five or more items. Middle items
     * (all except the first and last two) are hidden and an ellipsis
     * button is inserted before them.
     */
    firstUpdated() {
        if (isServer || !this.truncate) {
            return;
        }
        const list = this.querySelector('ol');
        if (!list) {
            return;
        }
        // Only truncate when there are enough items to warrant it
        if (list.children.length < 5) {
            return;
        }
        // Select middle items: skip the first and last two
        const middleItems = list.querySelectorAll('li:nth-child(n+2):nth-last-child(n+3)');
        for (const item of middleItems) {
            item.setAttribute('hidden', 'true');
        }
        // Insert the ellipsis button before the first hidden item
        const container = document.createElement('li');
        container.className = truncateBtnContainerClass;
        render(truncationBtn, container);
        middleItems[0].before(container);
    }
};
_RhBreadcrumb_instances = new WeakSet();
_RhBreadcrumb_onTruncationClick = function _RhBreadcrumb_onTruncationClick(event) {
    let listItems;
    if (!isServer
        && this.truncate
        && isTruncateButtonDescendant(event.target)
        && (listItems = this.querySelectorAll(':scope > ol > li'))) {
        for (const item of listItems) {
            item.removeAttribute('hidden');
        }
        // Remove the ellipsis button container from the DOM
        event.target.closest(`.${truncateBtnContainerClass}`)?.remove();
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
    property({ reflect: true, type: Boolean })
], RhBreadcrumb.prototype, "truncate", void 0);
RhBreadcrumb = __decorate([
    customElement('rh-breadcrumb'),
    themable
], RhBreadcrumb);
export { RhBreadcrumb };
//# sourceMappingURL=rh-breadcrumb.js.map
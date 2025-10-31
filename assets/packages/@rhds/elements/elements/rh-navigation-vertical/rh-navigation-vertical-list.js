var _RhNavigationVerticalList_instances, _a, _RhNavigationVerticalList_internals, _RhNavigationVerticalList_onKeydown, _RhNavigationVerticalList_toggle, _RhNavigationVerticalList_close;
var RhNavigationVerticalList_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
import { css } from "lit";
const styles = css `:host{display:block}details summary{display:flex;flex-direction:row;justify-content:space-between;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);list-style:none;cursor:pointer;position:relative;gap:var(--rh-space-lg,16px)}details summary::-webkit-details-marker,details summary::marker{display:none}details summary:is(:hover,:focus){background:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838))}details summary ::slotted([slot=summary]){font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md,1rem)!important;font-weight:var(--rh-font-weight-body-text-regular,400)}details summary rh-icon{transition:.2s;will-change:rotate;position:relative}details[open] rh-icon{transform:rotate(-180deg)}details #subtree{display:flex;flex-direction:column;gap:var(--rh-space-xs,4px);margin-inline-start:var(--rh-space-lg,16px);margin-block:var(--rh-space-xs,4px) var(--_subtree-margin-block-end,var(--rh-space-md,8px))}::slotted(rh-navigation-vertical-list){font-size:var(--rh-font-size-body-text-sm,.875rem);--_subtree-margin-block-end:0}::slotted(rh-navigation-link){--_navigation-link-display:flex;--_navigation-link-align-items:center;--_navigation-link-inline-size:100%;--_navigation-link-padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);--_navigation-link-font-size:var(--rh-font-size-body-text-sm,0.875rem);--_navigation-link-text-decoration:none;--_navigation-link-text-decoration-style:none;--_navigation-link-text-decoration-line:none;--_navigation-link-color:var(--rh-color-text-primary);--_navigation-link-color-hover:var(--rh-color-text-primary);--_navigation-link-hover-background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838));--_navigation-link-container-display:flex;--_navigation-link-container-align-items:center;--_navigation-link-container-position:relative;--_navigation-link-container-inline-size:100%}::slotted(rh-navigation-link:hover){--_navigation-link-before-border-inline-start-width:var(--rh-border-width-md,2px);--_navigation-link-before-border-inline-start-color:var(--rh-color-border-subtle)}::slotted(rh-navigation-link:active){--_navigation-link-before-border-inline-start-width:var(--rh-border-width-md,2px);--_navigation-link-before-border-inline-start-color:var(--rh-color-brand-red)}::slotted(rh-navigation-link[current-page]){--_navigation-link-background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838));--_navigation-link-before-border-inline-start-width:var(--rh-border-width-md,2px);--_navigation-link-before-border-inline-start-color:var(--rh-color-brand-red)}.highlight ::slotted(rh-navigation-link:first-child){--_navigation-link-font-weight:var(--rh-font-weight-body-text-medium,500)}`;
/**
 * A disclosure menu of grouped navigation items in a vertical navigation list.
 * @summary Vertical navigation group
 * @alias navigation-vertical-list
 */
let RhNavigationVerticalList = RhNavigationVerticalList_1 = _a = class RhNavigationVerticalList extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationVerticalList_instances.add(this);
        // eslint-disable-next-line no-unused-private-class-members
        _RhNavigationVerticalList_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
        /**
         * Optional open attribute that, sets the open state of the group.
         * Defaults to false.
         */
        this.open = false;
        /**
         * Bolds the first `<rh-navigation-link>` of the group. Should not be used if the first child is a `<rh-navigation-vertical-list>`.
         * Defaults to false.
         */
        this.highlight = false;
    }
    render() {
        const { highlight = false } = this;
        const classes = {
            highlight: !!highlight,
        };
        return html `
      <details 
        class="${classMap(classes)}"
        @toggle="${__classPrivateFieldGet(this, _RhNavigationVerticalList_instances, "m", _RhNavigationVerticalList_toggle)}" 
        ?open="${this.open}"
        @keydown="${__classPrivateFieldGet(this, _RhNavigationVerticalList_instances, "m", _RhNavigationVerticalList_onKeydown)}">
        <summary>
          <!-- A summary slot for the group title, overrides the summary attribute -->
          <slot name="summary">${this.summary}</slot>
          <rh-icon set="microns" icon="caret-down"></rh-icon>
        </summary>
        <div id="subtree" role="list">
          <!-- 
            Use this slot for \`<rh-navigation-link>\` or \`<rh-navigation-vertical-list>\` elements.
          -->
          <slot></slot>
        </div>
      </details>
      `;
    }
};
_RhNavigationVerticalList_internals = new WeakMap();
_RhNavigationVerticalList_instances = new WeakSet();
_RhNavigationVerticalList_onKeydown = function _RhNavigationVerticalList_onKeydown(event) {
    if (event.code === 'Escape') {
        event.stopPropagation();
        const escapeGuardElement = event.composedPath().reverse().find((element) => {
            return (element instanceof Element
                && element.matches(RhNavigationVerticalList_1.preventEscElements));
        });
        if (!escapeGuardElement) {
            __classPrivateFieldGet(this, _RhNavigationVerticalList_instances, "m", _RhNavigationVerticalList_close).call(this);
        }
    }
};
_RhNavigationVerticalList_toggle = function _RhNavigationVerticalList_toggle() {
    this.open = this.detailsEl.open;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
};
_RhNavigationVerticalList_close = function _RhNavigationVerticalList_close() {
    this.open = false;
    this.summaryEl.focus();
};
RhNavigationVerticalList.styles = [styles];
RhNavigationVerticalList.preventEscElements = [
    'input:not([type="hidden"]):not([type="radio"])',
    // Elements that need the :disabled selector:
    ...[
        'input[type="radio"]',
        'select',
        'textarea',
        'rh-audio-player',
        'rh-dialog',
    ].map(selector => `${selector}:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled)`),
    // Elements that don't need the :disabled selector:
    ...[
        'iframe',
        'audio[controls]',
        'video[controls]',
        '[contenteditable]',
    ].map(selector => `${selector}:not([inert]):not([inert] *):not([tabindex^='-'])`),
].join(',');
__decorate([
    property({ type: Boolean, reflect: true })
], RhNavigationVerticalList.prototype, "open", void 0);
__decorate([
    property({ type: String })
], RhNavigationVerticalList.prototype, "summary", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhNavigationVerticalList.prototype, "highlight", void 0);
__decorate([
    query('details')
], RhNavigationVerticalList.prototype, "detailsEl", void 0);
__decorate([
    query('summary')
], RhNavigationVerticalList.prototype, "summaryEl", void 0);
RhNavigationVerticalList = RhNavigationVerticalList_1 = __decorate([
    customElement('rh-navigation-vertical-list')
], RhNavigationVerticalList);
export { RhNavigationVerticalList };
//# sourceMappingURL=rh-navigation-vertical-list.js.map
var _RhDisclosure_instances, _a, _RhDisclosure_onToggle, _RhDisclosure_onKeydown, _RhDisclosure_closeDisclosure;
var RhDisclosure_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);display:block;font-family:var(--rh-font-family-body-text)}summary{background-color:var(--rh-color-surface);color:var(--rh-color-text-primary);cursor:pointer;font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-body-text-medium,500);list-style:none;padding-block:var(--rh-space-lg,16px);padding-inline:var(--rh-space-xl,24px)}summary::-webkit-details-marker,summary::marker{display:none}summary:active,summary:focus,summary:hover{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838))}summary:active,summary:focus{outline:var(--rh-border-width-md,2px) solid;outline-color:var(--rh-color-interactive-primary-default);outline-offset:-2px;position:relative;z-index:2}summary ::slotted([slot=summary]){font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md,1rem)!important;font-weight:var(--rh-font-weight-body-text-medium,500)}#caret{inline-size:var(--rh-space-lg,16px);block-size:var(--rh-space-lg,16px);transition:.2s;will-change:rotate;position:relative;inset-block-start:3px;margin-inline-end:var(--rh-space-md,8px)}#details-content{background-color:var(--rh-color-surface);color:var(--rh-color-text-primary);font-size:var(--rh-font-size-body-text-md,1rem);line-height:var(--rh-line-height-body-text,1.5);padding-block:var(--rh-space-lg,16px) var(--rh-space-xl,24px);padding-inline:var(--rh-space-xl,24px)}::slotted(:is(p,h1,h2,h3,h4,h5,h6):first-of-type){margin-block-start:0}::slotted(:is(p,li,dd):last-of-type){margin-block-end:0!important}details[open]{box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533);position:relative}details[open] #caret{transform:rotate(-180deg)}details[open]:before{content:"";border-inline-start:3px solid var(--rh-color-brand-red);position:absolute;z-index:1;inset-inline-start:-1px;inset-block:-1px}:host(:has(rh-jump-links)) details[open]:before{border:21px solid #ff0}`;
export class DisclosureToggleEvent extends Event {
    constructor() {
        super('toggle', { bubbles: true, cancelable: true });
    }
}
/**
 * A disclosure toggles the visibility of content when triggered.
 * @summary A disclosure toggles the visibility of content when triggered
 * @slot - Place the content you want to disclose in the default slot. This content is hidden by default.
 * @slot summary - The title of the disclosure
 * @fires {DisclosureToggleEvent} toggle - Fires when a user opens or closes a disclosure.
 * @csspart caret - The caret icon in the shadow DOM
 */
let RhDisclosure = RhDisclosure_1 = _a = class RhDisclosure extends LitElement {
    constructor() {
        super(...arguments);
        _RhDisclosure_instances.add(this);
        /**
         * Sets the disclosure to be in its open state
         */
        this.open = false;
    }
    render() {
        return html `
      <details
          ?open="${this.open}"
          @keydown="${__classPrivateFieldGet(this, _RhDisclosure_instances, "m", _RhDisclosure_onKeydown)}"
          @toggle="${__classPrivateFieldGet(this, _RhDisclosure_instances, "m", _RhDisclosure_onToggle)}">
        <summary>
          <rh-icon id="caret" set="ui" icon="caret-down"></rh-icon>
          <slot name="summary">${this.summary}</slot>
        </summary>
        <div id="details-content">
          <slot></slot>
        </div>
      </details>
    `;
    }
};
_RhDisclosure_instances = new WeakSet();
_RhDisclosure_onToggle = function _RhDisclosure_onToggle() {
    this.open = this.detailsEl.open;
    const event = new DisclosureToggleEvent();
    this.dispatchEvent(event);
};
_RhDisclosure_onKeydown = function _RhDisclosure_onKeydown(event) {
    if (event.code === 'Escape') {
        event.stopPropagation();
        const escapeGuardElement = event.composedPath().reverse().find((element) => {
            return (element instanceof Element && element.matches(RhDisclosure_1.preventEscElements));
        });
        if (!escapeGuardElement) {
            __classPrivateFieldGet(this, _RhDisclosure_instances, "m", _RhDisclosure_closeDisclosure).call(this);
        }
    }
};
_RhDisclosure_closeDisclosure = function _RhDisclosure_closeDisclosure() {
    if (!this.open) {
        return;
    }
    this.detailsEl.open = false;
    this.open = false;
    this.summaryEl.focus();
};
RhDisclosure.styles = [styles];
RhDisclosure.preventEscElements = [
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
    property({ reflect: true, attribute: 'color-palette' })
], RhDisclosure.prototype, "colorPalette", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhDisclosure.prototype, "open", void 0);
__decorate([
    property({ reflect: true })
], RhDisclosure.prototype, "summary", void 0);
__decorate([
    query('details')
], RhDisclosure.prototype, "detailsEl", void 0);
__decorate([
    query('summary')
], RhDisclosure.prototype, "summaryEl", void 0);
RhDisclosure = RhDisclosure_1 = __decorate([
    customElement('rh-disclosure'),
    colorPalettes,
    themable
], RhDisclosure);
export { RhDisclosure };
//# sourceMappingURL=rh-disclosure.js.map
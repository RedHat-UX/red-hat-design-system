var _RhDisclosure_instances, _a, _RhDisclosure_onToggle, _RhDisclosure_onKeydown, _RhDisclosure_closeDisclosure;
var RhDisclosure_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{border-width:var(--rh-border-width-sm,1px);border-style:solid;border-color:var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default,3px);display:block;font-family:var(--rh-font-family-body-text)}summary{background-color:var(--rh-color-surface);border-radius:var(--rh-border-radius-default,3px);color:var(--rh-color-text-primary);cursor:pointer;font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-body-text-medium,500);list-style:none;padding-block:var(--rh-space-lg,16px);padding-inline:var(--rh-space-xl,24px)}summary::-webkit-details-marker,summary::marker{display:none}summary:active,summary:focus,summary:hover{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838))}summary:active,summary:focus{outline:var(--rh-border-width-md,2px) solid;outline-color:var(--rh-color-interactive-primary-default);outline-offset:-2px;position:relative;z-index:2}summary ::slotted([slot=summary]){font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md,1rem)!important;font-weight:var(--rh-font-weight-body-text-medium,500)}summary ::slotted([slot=summary]:is(h1,h2,h3,h4,h5,h6)){display:inline}#caret{inline-size:var(--rh-space-lg,16px);block-size:var(--rh-space-lg,16px);transition:.2s;will-change:rotate;position:relative;inset-block-start:3px;margin-inline-end:var(--rh-space-md,8px)}#details-content{background-color:var(--rh-color-surface);border-radius:var(--rh-border-radius-default,3px);color:var(--rh-color-text-primary);font-size:var(--rh-font-size-body-text-md,1rem);line-height:var(--rh-line-height-body-text,1.5);padding-block:var(--rh-space-lg,16px) var(--rh-space-xl,24px);padding-inline:var(--rh-space-xl,24px)}::slotted(:is(p,h1,h2,h3,h4,h5,h6):first-of-type){margin-block-start:0}::slotted(:is(p,li,dd):last-of-type){margin-block-end:0!important}details[open]{box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533);position:relative}details[open] #caret{transform:rotate(-180deg)}details[open]:before{content:"";border-inline-start:3px solid var(--rh-color-brand-red);border-start-start-radius:var(--rh-border-radius-default,3px);border-end-start-radius:var(--rh-border-radius-default,3px);position:absolute;z-index:1;inset-inline-start:-1px;inset-block:-1px}details.hasJumpLinks[open]:before{border-inline-start-color:#0000}:host([variant~=compact]) summary{font-size:var(--rh-font-size-body-text-sm,.875rem);padding:var(--rh-space-md,8px) var(--rh-space-lg,16px)}:is(:host([variant~=compact]) summary) rh-icon{--rh-icon-size:14px}:host([variant~=compact]) #details-content{padding-inline:var(--rh-space-lg,16px)}:host([variant~=borderless]){--_hover-background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f));--_open-background-color:var(--_hover-background-color);border:0}:host([variant~=borderless]) summary{color:var(--rh-color-interactive-primary-default)}:is(:host([variant~=borderless]) summary):focus,:is(:host([variant~=borderless]) summary):hover{background-color:var(--_hover-background-color);color:var(--rh-color-interactive-primary-hover)}:is(:host([variant~=borderless]) summary):focus{outline-offset:var(--rh-length-3xs,2px)}:host([variant~=borderless]) details[open]{background-color:var(--_open-background-color);border-radius:var(--rh-border-radius-default,3px);box-shadow:none}:is(:host([variant~=borderless]) details[open]):before{border-inline-start:0}:is(:host([variant~=borderless]) details[open]) summary{background-color:var(--_open-background-color)}:is(:is(:host([variant~=borderless]) details[open]) summary):focus,:is(:is(:host([variant~=borderless]) details[open]) summary):hover{background-color:light-dark(var(--rh-color-surface-light,#e0e0e0),var(--rh-color-surface-dark,#383838))}:is(:host([variant~=borderless]) details[open]) #details-content{background-color:initial}`;
/**
 * Fired when a disclosure is opened or closed. The event bubbles and is
 * cancelable. Calling `preventDefault()` on the event prevents the
 * disclosure from changing state. The event carries no `detail`
 * payload; read the `open` property on `event.target` to determine
 * whether the disclosure is expanding or collapsing.
 */
export class DisclosureToggleEvent extends Event {
    constructor() {
        super('toggle', { bubbles: true, cancelable: true });
    }
}
/**
 * A disclosure allows users to toggle supplementary content via a
 * trigger. Authors should provide a title through the `summary`
 * attribute or slot. It renders a native `<details>`/`<summary>`
 * pair; screen readers announce state changes. Enter or Space
 * toggles the panel, Tab moves focus in, and Escape closes it.
 * Avoid nesting; use `rh-accordion` instead.
 *
 * @summary A disclosure toggles the visibility of content when triggered
 *
 * @fires {DisclosureToggleEvent} toggle - Fires when the disclosure
 *        opens or closes. The event has no `detail` payload; read
 *        `event.target.open` to determine the new state. The event
 *        bubbles and is cancelable — calling `preventDefault()` blocks
 *        the state change.
 */
let RhDisclosure = RhDisclosure_1 = _a = class RhDisclosure extends LitElement {
    constructor() {
        super(...arguments);
        _RhDisclosure_instances.add(this);
        /**
         * Sets the disclosure to be in its open (expanded) state
         */
        this.open = false;
        this.hasJumpLinks = false;
    }
    render() {
        const { open, summary, hasJumpLinks } = this;
        return html `
      <details
          ?open="${open}"
          class="${classMap({ hasJumpLinks })}"
          @keydown="${__classPrivateFieldGet(this, _RhDisclosure_instances, "m", _RhDisclosure_onKeydown)}"
          @toggle="${__classPrivateFieldGet(this, _RhDisclosure_instances, "m", _RhDisclosure_onToggle)}">
        <summary>
          <rh-icon id="caret" set="ui" icon="caret-down"></rh-icon>
          <!-- summary: The clickable title text for the disclosure.
               description: |
                 Accepts inline text or a heading element (e.g.
                 \`<h2>\`, \`<h3>\`). When a heading is slotted, it
                 renders inline. Falls back to the \`summary\` attribute
                 value when no slot content is provided. Authors should
                 keep the summary short and descriptive; screen readers
                 announce it as the accessible name for the disclosure
                 trigger. When using a heading element, ensure its level
                 fits the page outline so assistive technology presents
                 correct heading hierarchy. -->
          <slot name="summary">${summary}</slot>
        </summary>
        <div id="details-content">
          <!-- summary: Content revealed when the disclosure is open.
               description: |
                 Accepts block-level elements such as paragraphs, lists,
                 or nested components. Interactive children receive
                 focus via Tab when the panel is expanded. Slotted
                 content should follow WCAG reading order so screen
                 readers present it logically. Authors should ensure
                 that interactive elements inside the panel have
                 visible focus indicators and accessible labels so
                 keyboard and assistive-technology users can operate
                 them. The escape key returns focus to the summary
                 trigger unless the focused element is an input,
                 select, textarea, or media control, in which case
                 Escape is passed through to that element. -->
          <slot></slot>
        </div>
      </details>
    `;
    }
    _openChanged() {
        if (!isServer) {
            this.hasJumpLinks = !!this.querySelector('rh-jump-links');
        }
    }
};
_RhDisclosure_instances = new WeakSet();
_RhDisclosure_onToggle = function _RhDisclosure_onToggle() {
    const event = new DisclosureToggleEvent();
    if (this.dispatchEvent(event) && !event.defaultPrevented) {
        this.open = this.detailsEl.open;
    }
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
], RhDisclosure.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], RhDisclosure.prototype, "summary", void 0);
__decorate([
    state()
], RhDisclosure.prototype, "hasJumpLinks", void 0);
__decorate([
    query('details')
], RhDisclosure.prototype, "detailsEl", void 0);
__decorate([
    query('summary')
], RhDisclosure.prototype, "summaryEl", void 0);
__decorate([
    observes('open')
], RhDisclosure.prototype, "_openChanged", null);
RhDisclosure = RhDisclosure_1 = __decorate([
    customElement('rh-disclosure'),
    colorPalettes,
    themable
], RhDisclosure);
export { RhDisclosure };
//# sourceMappingURL=rh-disclosure.js.map
var _RhButton_instances, _RhButton_hasIcon_get, _RhButton_internals, _RhButton_onClick, _RhButton_renderIcon;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;height:max-content}[hidden]{display:none!important}[part=icon]{display:none;pointer-events:none}rh-icon{color:currentcolor}button{cursor:pointer;position:relative;font-family:inherit;border-width:0;border-style:solid;border-radius:var(--rh-border-radius-default,3px);color:var(--_color);background-color:var(--_background-color);font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5);padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-lg,16px);outline-offset:var(--rh-length-4xs,1px)}button:active{--_color:var(--_active-color);--_background-color:var(--_active-background-color);--_border-width:var(--_active-border-width)}button:after{position:absolute;inset:0;content:"";border-style:solid;border-color:var(--_border-color);border-width:var(--_border-width);border-radius:var(--rh-border-radius-default,3px)}button:focus{--_color:var(--_focus-color);--_background-color:var(--_focus-background-color);--_border-width:var(--_focus-border-width);outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default)}button:focus:after{border-width:var(--_border-width,var(--rh-border-width-md,2px))}button.hasIcon{position:relative;display:flex;gap:var(--rh-space-sm,6px);align-items:center;padding-inline-start:calc(var(--rh-space-lg, 16px)*.75)}button.hasIcon [part=icon]{display:contents}button.primary{--_color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_background-color:var(--rh-color-interactive-primary-default);--_border-color:#0000;--_border-width:var(--rh-border-width-sm,1px);--_active-color:var(--rh-color-text-primary-on-dark,#fff);--_active-background-color:var(--rh-color-interactive-primary-hover-on-light,#036);--_active-border-width:var(--rh-border-width-sm,1px);--_focus-color:var(--rh-color-text-primary-on-dark,#fff);--_focus-background-color:var(--rh-color-interactive-primary-hover-on-light,#036);--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_hover-background-color:var(--rh-color-interactive-primary-hover);--_hover-border-width:var(--rh-border-width-sm,1px)}button.danger{--_color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_background-color:var(--rh-color-status-danger);--_border-color:#0000;--_border-width:var(--rh-border-width-sm,1px);--_active-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_active-background-color:light-dark(#a30000,#ff7468);--_active-border-color:#0000;--_focus-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_focus-background-color:light-dark(#a30000,#ff7468);--_focus-border-color:#0000;--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_hover-background-color:light-dark(#a30000,#ff7468);--_hover-border-color:#0000}button.secondary{--_color:var(--rh-color-interactive-primary-default);--_background-color:#0000;--_border-color:var(--rh-color-interactive-primary-default);--_border-width:var(--rh-border-width-sm,1px);--_active-color:var(--rh-color-interactive-primary-default);--_active-background-color:#0000;--_active-border-color:var(--rh-color-interactive-primary-default);--_active-border-width:var(--rh-border-width-md,2px);--_focus-color:var(--rh-color-interactive-primary-default);--_focus-background-color:#0000;--_focus-border-color:var(--rh-color-interactive-primary-default);--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:var(--rh-color-interactive-primary-default);--_hover-background-color:#0000;--_hover-border-color:var(--rh-color-interactive-primary-default);--_hover-border-width:var(--rh-border-width-md,2px)}button.secondary.danger{--_color:var(--rh-color-status-danger);--_background-color:#0000;--_border-color:var(--rh-color-border-status-danger);--_active-color:light-dark(#c9190b,#fe5142);--_active-background-color:#0000;--_active-border-color:#0000;--_focus-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-30,#f9a8a8));--_focus-background-color:#0000;--_focus-border-color:#0000;--_hover-color:light-dark(#c9190b,#fe5142);--_hover-background-color:#0000;--_hover-border-color:#0000}button.tertiary{--_color:var(--rh-color-text-primary);--_background-color:#0000;--_border-color:var(--rh-color-border-strong);--_border-width:var(--rh-border-width-sm,1px);--_active-color:var(--rh-color-text-primary);--_active-background-color:#0000;--_active-border-color:var(--rh-color-border-strong);--_active-border-width:var(--rh-border-width-md,2px);--_focus-color:var(--rh-color-text-primary);--_focus-background-color:#0000;--_focus-border-color:var(--rh-color-border-strong);--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:var(--rh-color-text-primary);--_hover-background-color:#0000;--_hover-border-color:var(--rh-color-border-strong);--_hover-border-width:var(--rh-border-width-md,2px)}button.link{--_color:var(--rh-color-interactive-primary-default);--_background-color:#0000;--_border-color:#0000;--_active-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-interactive-primary-hover-on-dark,#b9dafc));--_active-background-color:#0000;--_focus-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-interactive-primary-hover-on-dark,#b9dafc));--_focus-background-color:#0000;--_focus-outline-color:var(--rh-color-interactive-primary-default);--_hover-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-interactive-primary-hover-on-dark,#b9dafc));--_hover-background-color:#0000;display:inline-flex}button.close{--_color:var(--rh-color-icon-secondary);--_background-color:#0000;--_active-color:var(--rh-color-interactive-secondary-active);--_active-background-color:#0000;--_focus-color:var(--rh-color-interactive-secondary-focus);--_focus-background-color:#0000;--_focus-outline-color:var(--rh-color-interactive-primary-default);--_hover-color:var(--rh-color-interactive-secondary-hover);--_hover-background-color:#0000;width:var(--rh-length-lg,16px);aspect-ratio:1}button.close rh-icon{color:inherit}button.play{--_color:var(--rh-color-icon-secondary-on-dark);--_background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-50,50%)),rgba(from white r g b/var(--rh-opacity-50,50%)));--_active-background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%)),rgba(from white r g b/var(--rh-opacity-80,80%)));--_focus-background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%)),rgba(from white r g b/var(--rh-opacity-80,80%)));--_focus-outline-color:var(--rh-color-interactive-primary-default);--_hover-background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%)),rgba(from white r g b/var(--rh-opacity-80,80%)));border-radius:100%;width:var(--rh-length-4xl,64px)}button.play [part=icon]{display:contents}button.play rh-icon{translate:10%;color:light-dark(var(--rh-color-icon-secondary-on-dark,#fff),var(--rh-color-icon-secondary-on-light,#151515))}button:is(.play,.close){--_border-color:#0000;aspect-ratio:1;display:inline-flex;align-items:center;justify-content:center;padding:0}button:is(.play,.close) #text{display:inline;position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}button:hover{--_color:var(--_hover-color);--_background-color:var(--_hover-background-color);--_border-width:var(--_hover-border-width)}button>span{display:contents}:host(:is(:disabled,[aria-disabled=true])),:host(:is(:disabled,[aria-disabled=true])) #container,:host(:is(:disabled,[aria-disabled=true])) button,:host(:is(:disabled,[aria-disabled=true])[danger]) button,:host(:is(:disabled,[aria-disabled=true])[variant=link]) button{pointer-events:none;cursor:default}[part=icon] ::slotted(*){width:16px;max-width:16px;height:16px;max-height:16px}:host(:is([variant=play i],[variant=close i])){line-height:0}:host(:disabled) button,:host(:disabled[danger]) button,:host(:disabled[variant=link]) button,button[disabled]{--rh-color-text-status-disabled:light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d));--rh-color-status-disabled:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-40,#a3a3a3));pointer-events:none;cursor:default;--_color:var(--rh-color-text-status-disabled);--_background-color:var(--rh-color-status-disabled)}:host(:disabled) button:after{--_border-color:#0000}:host(:not([disabled])) .hasIcon [part=icon]{cursor:pointer}`;
/**
 * Triggers actions via click, Enter, or Space. USE `variant` to set
 * hierarchy: primary (should limit one per page), secondary, tertiary,
 * or danger. Renders a native `<button>` with `delegatesFocus` for
 * keyboard access. Icon-only buttons must set `accessible-label` to
 * provide an ARIA accessible name. Supports form association (submit/reset).
 *
 * @summary Clickable button that triggers page or form actions
 */
let RhButton = class RhButton extends LitElement {
    constructor() {
        super(...arguments);
        _RhButton_instances.add(this);
        /**
         * Disables the button, preventing user interaction. When true, the button
         * receives `aria-disabled="true"` and pointer events are suppressed.
         * Disabled buttons are excluded from tab order unless `aria-disabled` is
         * used instead of `disabled`. Defaults to false.
         */
        this.disabled = false;
        /**
         * Controls the visual hierarchy and style of the button. Accepts
         * 'primary' | 'secondary' | 'tertiary' | 'close' | 'play'. Defaults to
         * 'primary'. Should limit primary to one per page. USE secondary for
         * general actions, tertiary for low-emphasis actions. Close and play
         * variants render icon-only circular buttons with visually hidden text.
         */
        this.variant = 'primary';
        /**
         * Applies danger styling for destructive or irreversible actions like
         * deleting data. Combines with `variant` to produce danger-primary or
         * danger-secondary styles. AVOID using for non-destructive actions.
         * Defaults to false.
         */
        this.danger = false;
        _RhButton_internals.set(this, InternalsController.of(this));
    }
    willUpdate() {
        if (__classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_hasIcon_get)) {
            import('@rhds/elements/rh-icon/rh-icon.js');
        }
    }
    render() {
        const { danger, variant } = this;
        const hasIcon = __classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_hasIcon_get);
        return html `
      <!-- summary: internal button element
           description: |
             Native button element that receives focus via delegatesFocus.
             Screen readers announce this as a button with the label or slotted text. -->
      <button aria-label="${ifDefined(this.accessibleLabel || this.label)}"
              class="${classMap({
            danger,
            hasIcon,
            [variant]: true,
        })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_onClick)}"
              aria-disabled=${String(!!this.disabled || !!__classPrivateFieldGet(this, _RhButton_internals, "f").formDisabled)}>
        <span aria-hidden="true">
          <!-- summary: icon slot for visual indicators
               description: |
                 Expects an \`rh-icon\` element or inline \`svg\`.
                 Wrapped in aria-hidden span so screen readers skip decorative icons.
                 Close and play variants auto-populate this slot via #renderIcon(). -->
          <slot id="icon"
                part="icon"
                name="icon">${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_renderIcon).call(this)}</slot>
        </span>
        <span aria-hidden=${String(!!this.accessibleLabel || !!this.label)}><!-- summary: button text label
               description: |
                 Expects inline text providing a concise, action-oriented label
                 (e.g. "Submit", "Delete"). Hidden from screen readers via
                 aria-hidden when the label attribute is set. For close and play
                 variants, text is visually hidden but remains accessible. --><slot id="text"></slot></span>
      </button>
    `;
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
    /**
     * Programmatically moves focus to the button element.
     *
     * This method focuses the internal button element, making it the active element
     * on the page. Useful for managing focus flow after dynamic content changes or
     * user interactions.
     *
     * ## Usage guidelines
     * - Use to direct user attention after completing an action
     * - Helpful for accessibility when managing focus programmatically
     * - Called automatically when the button is the target of a focus navigation
     * - Can be used after modals close to return focus to a trigger button
     *
     * ## Accessibility
     * - When focus is moved programmatically, ensure users are aware of the change
     * - Avoid moving focus unexpectedly as it can disorient users
     * - Moving focus to a button should be deliberate and serve user needs
     *
     * @example
     * ```js
     * const button = document.querySelector('rh-button');
     * button.focus();
     * ```
     */
    focus() {
        this._button?.focus();
    }
};
_RhButton_internals = new WeakMap();
_RhButton_instances = new WeakSet();
_RhButton_hasIcon_get = function _RhButton_hasIcon_get() {
    return this.variant === 'play' || this.variant === 'close' || !!this.icon;
};
_RhButton_onClick = function _RhButton_onClick() {
    switch (this.type) {
        case 'reset':
            return __classPrivateFieldGet(this, _RhButton_internals, "f").reset();
        default:
            return __classPrivateFieldGet(this, _RhButton_internals, "f").submit();
    }
};
_RhButton_renderIcon = function _RhButton_renderIcon() {
    switch (this.variant?.toLowerCase()) {
        case 'close':
            return html `<rh-icon set="microns" icon="close"></rh-icon>`;
        case 'play':
            return html `<rh-icon set="ui" icon="play-fill"></rh-icon>`;
        default:
            return html `<rh-icon set="${this.iconSet ?? 'ui'}" icon="${this.icon}"></rh-icon>`;
    }
};
RhButton.styles = [styles];
RhButton.formAssociated = true;
RhButton.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    property({ reflect: true, type: Boolean })
], RhButton.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true })
], RhButton.prototype, "type", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhButton.prototype, "accessibleLabel", void 0);
__decorate([
    property()
], RhButton.prototype, "label", void 0);
__decorate([
    property()
], RhButton.prototype, "value", void 0);
__decorate([
    property()
], RhButton.prototype, "name", void 0);
__decorate([
    property()
], RhButton.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhButton.prototype, "iconSet", void 0);
__decorate([
    query('button')
], RhButton.prototype, "_button", void 0);
__decorate([
    property({ reflect: true })
], RhButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhButton.prototype, "danger", void 0);
RhButton = __decorate([
    customElement('rh-button'),
    themable
], RhButton);
export { RhButton };
//# sourceMappingURL=rh-button.js.map
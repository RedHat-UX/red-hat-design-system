var _RhTile_instances, _RhTile_internals, _RhTile_logger, _RhTile_slots, _RhTile_isCheckable_get, _RhTile_input_get, _RhTile_setValidityFromInput, _RhTile_onClick, _RhTile_requestSelect, _RhTile_onKeydown, _RhTile_onKeyup;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-body-text-md, 1rem);font-weight:var(--rh-font-weight-heading-regular,300);line-height:var(--rh-line-height-body-text, 1.5)}:host([hidden]),[hidden]{display:none!important}:host(:focus),:host(:focus-within){outline:0!important}#content,#inner,#outer,:host{display:flex;flex-flow:column}#inner,#outer{flex:1 0 0}#content{height:100%}#outer{position:relative;padding:var(--_padding);font-weight:var(--rh-font-weight-heading-medium,500);border-radius:var(--rh-border-radius-default,3px);border:var(--rh-border-width-sm,1px) solid var(--rh-tile-border-color);background-color:var(--rh-tile-background-color);color:var(--rh-tile-text-color);--rh-tile-interactive-color:var(--rh-color-border-interactive-on-light, #0066cc);--rh-tile-focus-interactive-color:var(--rh-color-interactive-blue-darkest, #003366);--rh-tile-text-color:var(--rh-color-text-primary-on-light, #151515);--rh-tile-text-color-secondary:var(--rh-color-text-secondary-on-light, #4d4d4d);--rh-tile-background-color:var(--rh-color-surface-lightest, #ffffff);--rh-tile-focus-background-color:var(--rh-color-surface-lighter, #f2f2f2);--rh-tile-disabled-background-color:var(--rh-color-surface-light, #e0e0e0);--rh-tile-border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);--rh-tile-link-color:var(--_interactive-color);--_padding:var(--rh-space-2xl, 32px);--_margin:var(--rh-space-lg, 16px);--_interactive-color:var(--rh-tile-interactive-color)}#outer.dark{--rh-tile-interactive-color:var(--rh-color-border-interactive-on-dark, #92c5f9);--rh-tile-focus-interactive-color:var(--rh-color-interactive-blue-lightest, #b9dafc);--rh-tile-text-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-tile-text-color-secondary:var(--rh-color-text-secondary-on-dark, #c7c7c7);--rh-tile-background-color:var(--rh-color-surface-darkest, #151515);--rh-tile-focus-background-color:var(--rh-color-surface-darker, #1f1f1f);--rh-tile-disabled-background-color:var(--rh-color-surface-dark, #383838);--rh-tile-border-color:var(--rh-color-border-subtle-on-dark, #707070)}#outer:active,#outer:focus,#outer:focus-within,#outer:hover{--_interactive-color:var(--rh-tile-focus-interactive-color)}#outer:is(.desaturated,.checkable){--rh-tile-link-color:var(--rh-tile-text-color)}#outer.checkable{--rh-tile-link-after-display:none}#outer:is(.compact,.checkable){--_padding:var(--rh-space-xl, 24px)}:host(:focus-within) #outer{outline:3px solid var(--rh-tile-interactive-color);outline-offset:2px}:host(:is(:hover,:focus-within)) #outer{background-color:var(--rh-tile-focus-background-color)}#body,#footer-text,#headline,#icon,#image,#title{display:block}#outer.disabled{pointer-events:none!important;color:var(--rh-tile-text-color-secondary)!important;background-color:var(--rh-tile-disabled-background-color)!important;--_interactive-color:var(--rh-tile-text-color-secondary)!important}#outer:is(.compact,.checkable) #inner{display:flex;align-items:flex-start;justify-content:space-between}#image{--_bleed:calc(0px - var(--_padding))}#outer.bleed #image{margin:var(--_bleed) var(--_bleed) 0}#outer:is(.compact,.checkable) #icon{flex:0 0 auto}#outer:is(.compact,.checkable) #content{flex:1 1 auto;width:100%}#outer.checkable #header{display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto}#footer{display:flex;justify-content:space-between;align-items:flex-end;margin-block-start:auto}#outer.checkable #title{grid-column:1/2;grid-row:1/2}#outer.checkable #headline{grid-column:1/2;grid-row:2/3}#input-outer{grid-column:2/3;grid-row:1/3;align-self:flex-start;justify-self:flex-end;margin-bottom:var(--_margin);margin-inline-start:var(--_margin);accent-color:var(--_interactive-color)}input[type=radio]{flex:0 0 auto}pf-icon[icon=arrow-right]{color:var(--_interactive-color);width:var(--rh-space-xl,24px);height:var(--rh-space-xl,24px);pointer-events:none;translate:0 0;transition:translate var(--_trans);--_trans:var(--rh-animation-speed, 0.3s) var(--rh-animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946))}:host(:hover) #footer pf-icon{translate:3px 0}@supports not (translate:0 0){:host(:hover) #footer pf-icon{transform:translate(3px,0)}}svg{fill:var(--rh-tile-text-color-secondary);width:var(--rh-space-xl,24px);height:var(--rh-space-xl,24px)}#body{margin:0 0 var(--_margin)}::slotted(*){margin-top:0;margin-bottom:var(--_margin)}#body ::slotted(:last-of-type),::slotted(:last-child){margin-bottom:0}#body ::slotted(:first-of-type),::slotted(:first-child){margin-top:0}::slotted(a){color:var(--rh-tile-link-color)!important}::slotted([slot=image]){display:block;max-width:100%;margin-top:0;margin-bottom:var(--_padding)}::slotted([slot=icon]){width:100%;margin:0 0 var(--_padding);max-width:var(--rh-size-icon-05,48px)}::slotted([slot=title]){text-transform:uppercase}#outer:is(.compact,.checkable) ::slotted([slot=icon]){margin-inline-end:var(--_margin);max-width:var(--rh-size-icon-03,32px);max-height:var(--rh-size-icon-03,32px)}#body,#outer:is(.compact,.checkable) ::slotted([slot=headline]){font-size:var(--rh-font-size-body-text-lg, 1.125rem)}#outer:is(.compact,.checkable) #body,::slotted([slot=footer]){font-size:var(--rh-font-size-body-text-sm, .875rem)}#outer:is(.compact,.checkable) ::slotted([slot=footer]){font-size:var(--rh-font-size-body-text-xs, .75rem)}:is(#image,#tile,#headline,#body,#footer){z-index:2}`;
export class TileSelectEvent extends Event {
    constructor(force) {
        super('select', { bubbles: true, cancelable: true });
        this.force = force;
    }
}
/**
 * A tile is a flexible layout with a clickable and contained surface.
 *
 * @summary Creates a clickable, contained surface
 *
 * @fires {TileSelectEvent} select - when tile is clicked
 * @slot image - optional image on top of tile
 * @slot icon - optional icon
 * @slot title - optional title
 * @slot headline - optional headline / link title
 * @slot - optional body content
 * @slot footer - optional footer
 * @cssprop --rh-tile-text-color - color of text - {@default var(--rh-color-text-primary-on-light, #151515)}
 * @cssprop --rh-tile-text-color-secondary - disabled text and icons - {@default var(--rh-color-text-secondary-on-light, #4d4d4d)}
 * @cssprop --rh-tile-interactive-color - color of interactive elements - {@default var(--rh-color-border-interactive-on-light, #0066cc)}
 * @cssprop --rh-tile-link-color - color of tile link - {@default var(--rh-tile-interactive-color)}
 * @cssprop --rh-tile-link-text-decoration - tile link text decoration - {@default none}
 * @cssprop --rh-tile-background-color - color tile surface - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-tile-focus-background-color - color tile surface on focus/hover - {@default var(--rh-color-surface-lighter, #f2f2f2)}
 * @cssprop --rh-tile-disabled-background-color - color tile surface when disabled - {@default var(--rh-color-surface-light, #e0e0e0)}
 * @cssprop --rh-tile-border-color - color of tile border - {@default var(--rh-color-border-subtle-on-light, #c7c7c7)}
 */
let RhTile = class RhTile extends LitElement {
    constructor() {
        super();
        _RhTile_instances.add(this);
        /**
         * Whether image is full-width (i.e. bleeds into the padding)
         */
        this.bleed = false;
        /**
         * Whether headline link text is a desaturated color instead of blue;
         * `true` sets headline color to white on dark tiles or black on light tiles
         */
        this.desaturated = false;
        /**
         * Reduces tile padding for more compact spaces
         */
        this.compact = false;
        /**
         * When true, tile behaves like a checkbox unless it is part of an
         * `<rh-tile-group radio>`, in which case it behaves like a radio button
         */
        this.checkable = false;
        /**
         * If tile is checkable, whether it is currently checked
         */
        this.checked = false;
        /**
         * Whether tile interaction is disabled
         */
        this.disabled = false;
        // TODO(bennyp): https://lit.dev/docs/data/context/#content
        this.disabledGroup = false;
        // TODO(bennyp): https://lit.dev/docs/data/context/#content
        this.radioGroup = false;
        _RhTile_internals.set(this, InternalsController.of(this));
        _RhTile_logger.set(this, new Logger(this));
        _RhTile_slots.set(this, new SlotController(this, { slots: ['icon'] }));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_onKeydown));
        this.addEventListener('keyup', __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_onKeyup));
        this.addEventListener('click', __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_onClick));
    }
    /**
     * Update the internal accessible representation of the element's state
     * @param changed - the reactive properties which changed this cycle, and their old values
     */
    async willUpdate(changed) {
        __classPrivateFieldGet(this, _RhTile_internals, "f").role = this.radioGroup ? 'radio' : this.checkable ? 'checkbox' : null;
        __classPrivateFieldGet(this, _RhTile_internals, "f").ariaChecked = !__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get) ? null : String(!!this.checked);
        __classPrivateFieldGet(this, _RhTile_internals, "f").ariaDisabled = !__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get) ? null : String(!!this.disabled);
        __classPrivateFieldGet(this, _RhTile_internals, "f").ariaLabel =
            !(__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get) && this.accessibleLabel) ? null : this.accessibleLabel;
        if (changed.has('value') || changed.has('checked')) {
            const formValue = __classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get) && this.checked ? this.value ?? null : null;
            __classPrivateFieldGet(this, _RhTile_internals, "f").setFormValue(formValue);
        }
        if (this.checkable && !this.radioGroup) {
            this.setAttribute('tabindex', '0');
        }
        else if (!this.radioGroup) {
            this.removeAttribute('tabindex');
        }
    }
    render() {
        const { bleed, compact, checkable, checked, desaturated, on = '' } = this;
        const disabled = this.disabledGroup || this.disabled || __classPrivateFieldGet(this, _RhTile_internals, "f").formDisabled;
        const hasSlottedIcon = __classPrivateFieldGet(this, _RhTile_slots, "f").hasSlotted('icon');
        return html `
      <div id="outer" class="${classMap({
            bleed,
            checkable,
            compact,
            checked,
            desaturated,
            disabled,
            [on]: !!on,
        })}">
        <slot id="image"
              name="image"
              ?hidden="${this.checkable}"
        ></slot>
        <div id="inner">
          <slot id="icon" name="icon" ?hidden="${this.icon === undefined && !hasSlottedIcon}">
            ${this.icon !== undefined ?
            html `<pf-icon icon="${ifDefined(this.icon)}" size="md" set="far"></pf-icon>`
            : html ``}
          </slot>
          <div id="content">
            <div id="header">
              <slot id="title"
                    name="title"
                    ?hidden="${this.checkable || this.compact}"></slot>
              <slot id="headline" name="headline"></slot>
              <div id="input-outer" aria-hidden="true" ?hidden="${!__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get)}" ?inert="${!__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get)}">
                <input id="input"
                       type="${this.radioGroup ? 'radio' : 'checkbox'}"
                       tabindex="-1"
                       ?checked="${checked}"
                       ?disabled="${disabled}"></input>
              </div>
            </div>
            <slot id="body"></slot>
            <div id="footer">
              <slot id="footer-text" name="footer"></slot>${!this.checkable && !this.disabled ? html `
              <pf-icon icon="arrow-right" size="md" set="fas"></pf-icon>` : !this.checkable ? html `
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g id="uuid-0fd9e805-a455-40ef-9171-f2f334832bf2"><rect width="48" height="48" fill="none"/></g><g id="uuid-48f9e284-0601-4fcd-bbe7-8b444234ac6c"><path d="m24,7c-9.37,0-17,7.63-17,17s7.63,17,17,17,17-7.63,17-17S33.37,7,24,7Zm15,17c0,3.52-1.23,6.76-3.27,9.32L14.68,12.27c2.56-2.04,5.8-3.27,9.32-3.27,8.27,0,15,6.73,15,15Zm-30,0c0-4.03,1.61-7.69,4.2-10.38l21.18,21.18c-2.7,2.6-6.35,4.2-10.38,4.2-8.27,0-15-6.73-15-15Z"/></g></svg>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
    async formStateRestoreCallback(state, mode) {
        if (this.checkable && mode === 'restore') {
            const [maybeControlMode, maybeValue] = state.split('/');
            if (maybeValue ?? maybeControlMode === this.value) {
                __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_requestSelect).call(this, !!this.radioGroup);
            }
        }
    }
    setCustomValidity(message) {
        __classPrivateFieldGet(this, _RhTile_internals, "f").setValidity({}, message);
    }
    checkValidity() {
        __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_setValidityFromInput).call(this);
        return __classPrivateFieldGet(this, _RhTile_internals, "f").checkValidity();
    }
    reportValidity() {
        __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_setValidityFromInput).call(this);
        return __classPrivateFieldGet(this, _RhTile_internals, "f").reportValidity();
    }
};
_RhTile_internals = new WeakMap();
_RhTile_logger = new WeakMap();
_RhTile_slots = new WeakMap();
_RhTile_instances = new WeakSet();
_RhTile_isCheckable_get = function _RhTile_isCheckable_get() {
    return !!this.radioGroup || this.checkable;
};
_RhTile_input_get = function _RhTile_input_get() {
    return this.shadowRoot.getElementById('input');
};
_RhTile_setValidityFromInput = function _RhTile_setValidityFromInput() {
    if (!__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_input_get)) {
        __classPrivateFieldGet(this, _RhTile_logger, "f").warn('await updateComplete before validating');
    }
    else {
        __classPrivateFieldGet(this, _RhTile_internals, "f").setValidity(__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_input_get).validity, __classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_input_get).validationMessage);
    }
};
_RhTile_onClick = function _RhTile_onClick(event) {
    if (event.target === this) {
        __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_requestSelect).call(this);
    }
};
_RhTile_requestSelect = function _RhTile_requestSelect(force) {
    if (this.checkable
        && !this.disabled
        && !this.disabledGroup) {
        if (this.radioGroup) {
            this.dispatchEvent(new TileSelectEvent(force));
        }
        else {
            this.checked = !this.checked;
        }
    }
};
_RhTile_onKeydown = function _RhTile_onKeydown(event) {
    switch (event.key) {
        case ' ':
            if (event.target === this && this.checkable) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            break;
    }
};
_RhTile_onKeyup = function _RhTile_onKeyup(event) {
    switch (event.key) {
        case 'Enter':
        case ' ':
            if (event.target === this) {
                __classPrivateFieldGet(this, _RhTile_instances, "m", _RhTile_requestSelect).call(this);
            }
            break;
    }
};
RhTile.styles = [styles];
RhTile.formAssociated = true;
__decorate([
    property({ type: Boolean })
], RhTile.prototype, "bleed", void 0);
__decorate([
    property({ type: Boolean })
], RhTile.prototype, "desaturated", void 0);
__decorate([
    property({ type: Boolean })
], RhTile.prototype, "compact", void 0);
__decorate([
    property()
], RhTile.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhTile.prototype, "accessibleLabel", void 0);
__decorate([
    property()
], RhTile.prototype, "name", void 0);
__decorate([
    property()
], RhTile.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], RhTile.prototype, "checkable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhTile.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhTile.prototype, "disabled", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhTile.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhTile.prototype, "on", void 0);
__decorate([
    state()
], RhTile.prototype, "disabledGroup", void 0);
__decorate([
    state()
], RhTile.prototype, "radioGroup", void 0);
RhTile = __decorate([
    customElement('rh-tile')
], RhTile);
export { RhTile };
//# sourceMappingURL=rh-tile.js.map
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
import '@rhds/elements/rh-icon/rh-icon.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-heading-regular,400);line-height:var(--rh-line-height-body-text,1.5)}[hidden]{display:none!important}:host(:focus),:host(:focus-within){outline:none!important}#content,#inner,#outer,:host{display:flex;flex-direction:column}.compact #inner{flex-direction:row}#inner,#outer{flex:1 0 0}#content{height:100%}#outer{--_padding:var(--rh-space-2xl,32px);--_margin:var(--rh-space-lg,16px);--_interactive-color:var(--rh-tile-interactive-color,var(--rh-color-border-interactive));--_focus-interactive-color:var(--rh-tile-focus-interactive-color,var(--rh-color-interactive-primary-hover));--_text-color-secondary:var(--rh-tile-text-color-secondary,var(--rh-color-text-secondary));--_focus-background-color:light-dark(var(--rh-tile-focus-background-color,var(--rh-color-surface-lighter,#f2f2f2)),var(--rh-tile-focus-background-color,var(--rh-color-surface-darker,#1f1f1f)));--_disabled-background-color:light-dark(var(--rh-tile-disabled-background-color,var(--rh-color-surface-light,#e0e0e0)),var(--rh-tile-disabled-background-color,var(--rh-color-surface-dark,#383838)));--_border-color:var(--rh-tile-border-color,var(--rh-color-border-subtle));--_link-color:var(--rh-tile-link-color,var(--_interactive-color));position:relative;padding:var(--_padding);border-radius:var(--rh-border-radius-default,3px);border:var(--rh-border-width-sm,1px) solid var(--_border-color);color:var(--rh-tile-text-color,var(--rh-color-text-primary))}#outer ::slotted(*){margin-block:0 var(--_margin)}#outer #body ::slotted(:last-of-type),#outer ::slotted(:last-child){margin-block-end:0}#outer #body ::slotted(:first-of-type),#outer ::slotted(:first-child){margin-block-start:0}#outer ::slotted(a){color:var(--_link-color)!important}#outer #image{--_bleed:calc(0px - var(--_padding))}#outer #image::slotted(*),#outer #image>*{max-width:100%;margin-block:0 var(--_padding)}#outer #icon{--_size:var(--rh-size-icon-05,48px);margin-block-end:var(--rh-space-2xl,32px)}#outer #icon:is(.compact,.checkable){--_size:var(--rh-size-icon-03,32px);--_padding:var(--rh-space-lg,16px);margin-block-end:0}#outer #icon::slotted(*),#outer #icon>*{width:100%;margin:0 var(--_padding) 0 0;max-width:var(--_size);max-height:var(--_size)}#outer #title::slotted(*),#outer #title>*{font-size:var(--rh-font-size-body-text-md,1rem)!important}#outer #headline::slotted(*),#outer #headline>*{margin-block-end:var(--_margin)!important;font-size:var(--rh-font-size-heading-xs,1.25rem)!important;font-weight:var(--rh-font-weight-body-text-medium,500)!important}#outer.bleed #image{margin:var(--_bleed) var(--_bleed) 0}#outer:active,#outer:focus,#outer:focus-within,#outer:hover{--_interactive-color:var(--_focus-interactive-color)}#outer:is(.desaturated,.checkable){--_link-color:var(--rh-tile-text-color,var(--rh-color-text-primary))}#outer.checkable{--_link-after-display:none}#outer.checkable #title{grid-column:1/2;grid-row:1/2}#outer.checkable #headline{grid-column:1/2;grid-row:2/3}#outer.checkable #header{display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto}#outer:is(.compact,.checkable){--_padding:var(--rh-space-xl,24px)}#outer:is(.compact,.checkable) #inner{display:flex;align-items:flex-start;justify-content:space-between}#outer:is(.compact,.checkable) #icon{flex:0 0 auto}#outer:is(.compact,.checkable) #content{flex:1 1 auto;width:100%}#outer:is(.compact,.checkable) ::slotted([slot=headline]){font-size:var(--rh-font-size-body-text-lg,1.125rem)!important}#outer:is(.compact,.checkable) #body,#outer:is(.compact,.checkable) ::slotted([slot=footer]){font-size:var(--rh-font-size-body-text-sm,.875rem)!important}#outer:is(.compact,.checkable) ::slotted([slot=footer]){font-size:var(--rh-font-size-body-text-xs,.75rem)!important}#outer.disabled{pointer-events:none!important;color:var(--_text-color-secondary)!important;background-color:var(--_disabled-background-color)!important;--_interactive-color:var(--_text-color-secondary)!important}:host(:focus-within) #outer{outline:3px solid var(--_interactive-color);outline-offset:2px}:host(:is(:hover,:focus-within)) #outer{background-color:var(--_focus-background-color)}#body,#footer-text,#headline,#icon,#image,#title{display:block}#footer{display:flex;justify-content:space-between;align-items:flex-end;margin-block-start:auto}#footer.empty{position:absolute;inset-block-end:var(--_padding);inset-inline-end:var(--_padding)}#outer:not(.checkable) #body:not(.empty):has(+.empty):after{content:"";float:right;width:var(--rh-space-2xl,32px);height:var(--rh-space-lg,16px)}#input-outer{grid-column:2/3;grid-row:1/3;place-self:flex-start flex-end;margin-block-end:var(--_margin);margin-inline-start:var(--_margin);accent-color:var(--_interactive-color)}input[type=radio]{flex:0 0 auto}rh-icon{pointer-events:none;color:var(--_interactive-color)}rh-icon[icon=arrow-right]{width:var(--rh-space-xl,24px);height:var(--rh-space-xl,24px);translate:0 0;transition:translate var(--_trans);--_trans:var(--rh-animation-speed,0.3s) var(--rh-animation-timing,cubic-bezier(0.465,0.183,0.153,0.946))}:host(:hover) #footer rh-icon[icon=arrow-right]{translate:3px 0}@supports not (translate:0 0){:host(:hover) #footer rh-icon{transform:translate(3px)}}svg{fill:var(--_text-color-secondary);width:var(--rh-space-xl,24px);height:var(--rh-space-xl,24px)}#body{margin:0 0 var(--_margin);font-size:var(--rh-font-size-body-text-md,1rem)}:is(#image,#tile,#headline,#body,#footer){z-index:2}:host([color-palette^=dark]){--_interactive-color:var(--rh-color-border-interactive-on-dark);--_focus-interactive-color:var(--rh-color-interactive-primary-hover-on-dark);--_text-color-secondary:var(--rh-color-text-secondary-on-dark);--_disabled-background-color:var(--rh-color-surface-dark);--_border-color:var(--rh-color-border-subtle-on-dark);color:var(--rh-color-text-primary-on-dark)}:host([color-palette=darkest]){background-color:var(--rh-color-surface-darkest)}:host([color-palette=darker]){background-color:var(--rh-color-surface-darker)}:host([color-palette=dark]){background-color:var(--rh-color-surface-dark)}:host([color-palette^=light]){--_interactive-color:var(--rh-color-border-interactive-on-light);--_focus-interactive-color:var(--rh-color-interactive-primary-hover-on-light);--_text-color-secondary:var(--rh-color-text-secondary-on-light);--_disabled-background-color:var(--rh-color-surface-light);--_border-color:var(--rh-color-border-subtle-on-light);color:var(--rh-color-text-primary-on-light)}:host([color-palette=lightest]){background-color:var(--rh-color-surface-lightest)}:host([color-palette=lighter]){background-color:var(--rh-color-surface-lighter)}:host([color-palette=light]){background-color:var(--rh-color-surface-light)}`;
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
 * @alias tile
 *
 * @fires {TileSelectEvent} select - when tile is clicked
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
         * Icon set to display in the tile
         */
        this.iconSet = 'standard';
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
        _RhTile_slots.set(this, new SlotController(this, 'image', 'icon', 'title', 'headline', null, 'footer'));
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
        const { bleed, compact, checkable, checked, desaturated } = this;
        const disabled = this.disabledGroup || this.disabled || __classPrivateFieldGet(this, _RhTile_internals, "f").formDisabled;
        const hasSlottedIcon = __classPrivateFieldGet(this, _RhTile_slots, "f").hasSlotted('icon');
        const linkIcon = this.checkable ? ''
            : this.disabled ? 'ban'
                : this.link === 'private' ? 'lock'
                    : this.link === 'external' ? 'external-link'
                        : 'arrow-right';
        return html `
      <div id="outer" class="${classMap({ bleed, checkable, compact, checked, desaturated, disabled })}">
        <!-- optional image on top of tile -->
        <slot id="image"
              name="image"
              ?hidden="${this.checkable}"
        ></slot>
        <div id="inner">
          <!-- optional icon -->
          <slot id="icon"
                class="${classMap({ compact, checkable })}"
                name="icon"
                ?hidden="${this.icon === undefined && !hasSlottedIcon}">${this.icon === undefined ? ''
            : html `<rh-icon icon="${ifDefined(this.icon)}" set="${this.iconSet}"></rh-icon>`}
          </slot>
          <div id="content">
            <div id="header">
              <!-- A title provides secondary descriptive context. Selectable and compact tiles do not have title slots -->
              <slot id="title"
                    name="title"
                    ?hidden="${this.checkable || this.compact}"></slot>
              <!-- In a link tile, the heading should indicate what clicking on the tile will do. In a selectable tile, the heading labels the radio button or checkbox. -->
              <slot id="headline" name="headline"></slot>
              <div id="input-outer" aria-hidden="true" ?hidden="${!__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get)}" ?inert="${!__classPrivateFieldGet(this, _RhTile_instances, "a", _RhTile_isCheckable_get)}">
                <input id="input"
                       type="${this.radioGroup ? 'radio' : 'checkbox'}"
                       tabindex="-1"
                       ?checked="${checked}"
                       ?disabled="${disabled}"></input>
              </div>
            </div>
            <!-- The body text expands on heading content and gives the user more information. -->
            <slot id="body" class="${classMap({ empty: __classPrivateFieldGet(this, _RhTile_slots, "f").isEmpty() })}"></slot>
            <div id="footer" class="${classMap({ empty: __classPrivateFieldGet(this, _RhTile_slots, "f").isEmpty('footer') })}">
              <!-- Footer text should be brief and be used for supplementary information only. -->
              <slot id="footer-text" name="footer"></slot><rh-icon set="ui" icon="${linkIcon}"></rh-icon>
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
    property({ reflect: true })
], RhTile.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhTile.prototype, "iconSet", void 0);
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
    property({ reflect: true, attribute: 'color-palette' })
], RhTile.prototype, "colorPalette", void 0);
__decorate([
    property()
], RhTile.prototype, "link", void 0);
__decorate([
    state()
], RhTile.prototype, "disabledGroup", void 0);
__decorate([
    state()
], RhTile.prototype, "radioGroup", void 0);
RhTile = __decorate([
    customElement('rh-tile'),
    colorPalettes,
    themable
], RhTile);
export { RhTile };
//# sourceMappingURL=rh-tile.js.map
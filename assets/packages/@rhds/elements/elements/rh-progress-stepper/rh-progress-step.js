var _RhProgressStep_icon, _RhProgressStep_iconSet;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { compactContext, currentStepContext } from './context.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_step-line-style:linear-gradient(var(--_step-line-angle),#0000 13px,var(--_step-line-color) 13px,var(--_step-line-color) 15px,#0000 15px);--_step-color:var(--rh-color-text-primary);--_step-label-color:var(--rh-color-text-primary)}@container (width > 992px){:host{--_step-compact-horizontal-padding:var(--rh-length-5xl,80px)}}#container{position:relative;display:grid;grid-template-columns:var(--_step-template-columns);grid-template-rows:var(--_step-template-rows,24px) auto;grid-template-areas:var(--_step-template-areas);gap:var(--_step-row-gap,16px) var(--_step-column-gap,16px);justify-self:var(--_step-justify-self,start);align-items:var(--_step-align-items);padding-block-end:var(--_step-compact-vertical-padding);padding-inline-end:var(--_step-compact-horizontal-padding);inline-size:100%;block-size:100%;color:var(--rh-color-text-secondary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem);font-style:normal;line-height:1.5}#container:before{position:absolute;content:"";inset-block:var(--_step-line-position-block);inset-inline:var(--_step-line-position-inline);inline-size:var(--_step-line-size-inline);block-size:var(--_step-line-size-block);background:var(--_step-line-style);pointer-events:none}:is(rh-icon,.no-icon){grid-area:icon;place-self:center var(--_step-icon-justify-self);block-size:var(--_step-icon-width);inline-size:var(--_step-icon-width);border:var(--rh-border-width-md) solid var(--_step-line-color);border-radius:50%;color:var(--_step-color);background-color:light-dark(var(--rh-color-surface-lightest),var(--rh-color-surface-darkest))}#label{display:grid;grid-area:label;align-self:center;color:var(--_step-label-color);font-weight:var(--_current-step-weight,var(--rh-font-weight-body-text-regular,400))}#label:is(a[href]){text-decoration:underline dashed 1px;text-decoration-color:light-dark(var(--rh-color-gray-50),var(--rh-color-gray-40));text-underline-offset:max(5px,.28em);transition:text-underline-offset .3s ease}#label:is(a[href]):hover{color:var(--rh-color-interactive-primary-hover);text-decoration-color:var(--rh-color-interactive-primary-hover);text-underline-offset:max(6px,.33em)}#description{grid-area:description;display:grid;align-self:start;margin:0;grid-column:var(--_step-description-grid-column,1);font-weight:var(--rh-font-weight-body-text-regular,400);font-size:var(--rh-font-size-body-text-xs,.75rem)}.compact :is(#label,#description){block-size:1px;border:0;clip:rect(0,0,0,0);inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}:host([state=active]){--_step-color:var(--rh-color-status-note)}:host([state=complete]){--_step-color:var(--rh-color-status-success)}:host([state=warn]){--_step-color:light-dark(var(--rh-color-yellow-50,#b98412),var(--rh-color-yellow-30,#ffcc17));--_step-label-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-yellow-20,#ffe072))}:host([state=fail]){--_step-color:var(--rh-color-status-danger);--_step-label-color:var(--rh-color-status-danger)}:host([aria-current=step]),:host([icon]),:host([state=active]),:host([state=fail]),:host([state=warn]){--_current-step-weight:var(--rh-font-weight-body-text-medium,500)}`;
/**
 * Map of state names to their corresponding icon names
 */
const ICONS = new Map(Object.entries({
    active: 'resources-full',
    complete: 'check-circle-fill',
    warn: 'error-fill',
    fail: 'ban-fill',
}));
/**
 * Fired when a step becomes active
 */
export class RhProgressStepChangeEvent extends Event {
    constructor() {
        super('change', { bubbles: true });
    }
}
/**
 * A progress step represents a single step in a progress stepper.
 * Each step can have different states and may include an icon, label,
 * and description. Steps can also be linked to URLs.
 *
 * @summary Single step in a progress stepper
 *
 * @fires { RhProgressStepChangeEvent } fired when this step becomes active
 */
let RhProgressStep = class RhProgressStep extends LitElement {
    constructor() {
        super(...arguments);
        /** Icon set for the `icon` property - 'ui' by default */
        this.iconSet = 'ui';
        this.currentStep = null;
        _RhProgressStep_icon.set(this, this.icon);
        _RhProgressStep_iconSet.set(this, this.iconSet);
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'listitem';
    }
    render() {
        const compact = this.compact ?? false;
        const ariaCurrent = this.currentStep === this ? 'step' : undefined;
        const labelSlot = html `
      <!-- A short title for the step, which also serves as the step's accessible name -->
      <slot></slot>
    `;
        return html `
      <div id="container" class="${classMap({ compact })}">
        <!-- summary: custom icon for the step
             description: |
               Overrides the \`icon\` and \`icon-set\` attributes.
               Prefer using the \`icon\` attribute and the (default) UI Icon set.
               Avoid slotting content here if the step is in the \`warn\` or \`fail\` state,
               Since those states should always show their prescribed icons. -->
        <slot name="icon">
          <rh-icon icon="${ifDefined(__classPrivateFieldGet(this, _RhProgressStep_icon, "f"))}" set="${ifDefined(__classPrivateFieldGet(this, _RhProgressStep_iconSet, "f"))}"></rh-icon>
        </slot>${this.href ? html `
          <a id="label"
             href="${this.href}"
             aria-current="${ifDefined(ariaCurrent)}">${labelSlot}</a>` : html `
          <strong id="label"
                  aria-current="${ifDefined(ariaCurrent)}">${labelSlot}</strong>`}
        <!-- summary: Elaborative description for the step
             description: |
               Rich HTML content can be slotted here , to override the (plain text) \`description\` attribute.
               Avoid slotting links, images, block-level content, etc.: descriptions should be prose only. -->
        <slot name="description" id="description">${this.description}</slot>
      </div>
    `;
    }
    /**
     * Computes the icon for the step:
     * always use the prescribed warn or fail icons
     * otherwise, use the custom user icon,
     * or fall back to the default active/inactive icon
     */
    computeIcon() {
        const state = this.state?.toLowerCase();
        if (state === 'warn') {
            __classPrivateFieldSet(this, _RhProgressStep_icon, 'error-fill', "f");
        }
        else if (state === 'fail') {
            __classPrivateFieldSet(this, _RhProgressStep_icon, 'ban-fill', "f");
        }
        else if (this.icon) {
            __classPrivateFieldSet(this, _RhProgressStep_icon, this.icon, "f");
            if (this.iconSet) {
                __classPrivateFieldSet(this, _RhProgressStep_iconSet, this.iconSet, "f");
            }
            else {
                __classPrivateFieldSet(this, _RhProgressStep_iconSet, 'ui', "f");
            }
        }
        else if (ICONS.has(state)) {
            __classPrivateFieldSet(this, _RhProgressStep_icon, ICONS.get(state), "f");
        }
        else {
            __classPrivateFieldSet(this, _RhProgressStep_icon, undefined, "f");
        }
    }
    stateChanged() {
        this.dispatchEvent(new RhProgressStepChangeEvent());
    }
};
_RhProgressStep_icon = new WeakMap();
_RhProgressStep_iconSet = new WeakMap();
RhProgressStep.styles = [styles];
__decorate([
    property({ reflect: true })
], RhProgressStep.prototype, "state", void 0);
__decorate([
    property({ reflect: true })
], RhProgressStep.prototype, "description", void 0);
__decorate([
    property()
], RhProgressStep.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhProgressStep.prototype, "iconSet", void 0);
__decorate([
    property({ reflect: true })
], RhProgressStep.prototype, "href", void 0);
__decorate([
    consume({ context: compactContext, subscribe: true })
], RhProgressStep.prototype, "compact", void 0);
__decorate([
    consume({ context: currentStepContext, subscribe: true })
], RhProgressStep.prototype, "currentStep", void 0);
__decorate([
    observes('icon'),
    observes('iconSet'),
    observes('state')
], RhProgressStep.prototype, "computeIcon", null);
__decorate([
    observes('state')
], RhProgressStep.prototype, "stateChanged", null);
RhProgressStep = __decorate([
    customElement('rh-progress-step'),
    themable
], RhProgressStep);
export { RhProgressStep };
//# sourceMappingURL=rh-progress-step.js.map
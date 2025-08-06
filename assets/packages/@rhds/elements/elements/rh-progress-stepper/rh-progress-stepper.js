var _RhProgressStepper_instances, _RhProgressStepper_maxWidth, _RhProgressStepper_contentString, _RhProgressStepper_resizeTimeoutId, _RhProgressStepper_ro, _RhProgressStepper_onChange, _RhProgressStepper_updateState;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { provide } from '@lit/context';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { Breakpoint2xl, BreakpointLg, BreakpointMd, BreakpointSm, BreakpointXl, BreakpointXs, } from '@rhds/tokens/media.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { compactContext, currentStepContext } from './context.js';
import { RhProgressStep, RhProgressStepChangeEvent } from './rh-progress-step.js';
export * from './rh-progress-step.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_step-line-color:var(--rh-color-border-strong);--_current-step-color:var(--_rh-color-status-disabled,#6a6e73);--_current-step-label-color:var(--rh-color-text-primary);--_step-line-angle:-180deg;--_step-line-position-block:0 100%;--_step-line-position-inline:calc(-100% - var(--_step-icon-width)*-1) 100%;--_step-line-size-inline:calc(100% - var(--_step-icon-width));--_step-line-size-block:100%;--_step-template-areas:"icon" "label" "description";--_step-template-columns:auto;--_step-template-rows:calc(var(--rh-length-xl, 24px) + 4px) auto 1fr;--_step-justify-self:baseline;--_step-compact-vertical-padding:0;--_step-compact-horizontal-padding:var(--rh-length-2xl,32px);--_step-column-gap:var(--rh-length-lg,16px);--_step-row-gap:var(--rh-length-xs,4px);--_step-compact-grid-row:2;--_step-description-margin:inherit;--_step-align-items:center;--_step-icon-width:calc(var(--rh-size-icon-02, 24px) + 4px);container-type:inline-size;display:block}#container{display:flex;flex-direction:column;gap:var(--rh-length-lg,16px)}#step-list{padding:0;display:grid;place-content:baseline normal;grid-auto-flow:column;grid-auto-columns:var(--_stepper-grid-auto-column,1fr)}.visually-hidden{block-size:1px;border:0;clip:rect(0,0,0,0);inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;color:var(--_current-step-label-color);font-weight:var(--_current-step-weight,var(--rh-font-weight-body-text-medium,500))}::slotted(rh-progress-step:first-of-type){--_step-line-style:none}::slotted(:not([state],[icon])),::slotted([state=inactive]){--_step-line-color:var(--rh-color-border-subtle)!important}.vertical{--_step-line-angle:90deg;--_step-line-position-block:calc(-100% - var(--_step-icon-width)*-1) 100%;--_step-line-position-inline:0 100%;--_step-line-size-inline:100%;--_step-line-size-block:calc(100% - var(--_step-icon-width));--_step-template-areas:"icon label" "line description";--_step-template-columns:var(--_step-icon-width) auto;--_step-template-rows:auto;--_step-justify-self:start;--_step-icon-justify-self:center;--_step-description-grid-column:2;--_step-compact-vertical-padding:var(--rh-length-2xl,32px);--_step-column-gap:var(--rh-length-lg,16px);--_step-row-gap:var(--rh-length-xs,4px);--_step-align-items:baseline}.vertical #step-list{grid-auto-flow:row}.vertical ::slotted(rh-progress-step){--_step-compact-horizontal-padding:0}.compact{grid-template-rows:auto;--_step-template-areas:"icon";--_step-grid-row:var(--_step-compact-grid-row);--_step-template-rows:auto;--_step-compact-vertical-padding:0;--_step-compact-horizontal-padding:var(--rh-length-lg,16px);--_step-template-columns:var(--_step-icon-width);--_step-row-gap:0;--_step-column-gap:0;--_stepper-grid-auto-column:calc(var(--_step-icon-width) + var(--_step-compact-horizontal-padding))}.compact.vertical{--_step-template-areas:"icon" "line";--_step-compact-horizontal-padding:0;--_step-compact-vertical-padding:var(--rh-length-lg,16px)}.compact ::slotted(rh-progress-step){--_step-compact-horizontal-padding:var(--rh-length-lg,16px)}.compact #current-step{block-size:auto;border:none;clip:auto;inline-size:auto;margin:0;overflow:auto;padding:0;position:relative;white-space:normal;grid-column:1/-1;grid-row:1}.inactive{--_current-step-color:var(--_rh-color-status-disabled,#6a6e73)}.active{--_current-step-color:var(--rh-color-status-note)}.complete{--_current-step-color:var(--rh-color-status-success)}.warn{--_current-step-color:light-dark(var(--rh-color-yellow-50,#b98412),var(--rh-color-yellow-30,#ffcc17));--_current-step-label-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-yellow-20,#ffe072))!important}.fail{--_current-step-color:var(--rh-color-status-danger);--_current-step-label-color:var(--rh-color-status-danger)!important}`;
const BREAKPOINTS = new Map(Object.entries({
    '2xs': '320px',
    'xs': BreakpointXs,
    'sm': BreakpointSm,
    'md': BreakpointMd,
    'lg': BreakpointLg,
    'xl': BreakpointXl,
    '2xl': Breakpoint2xl,
}));
/**
 * A progress stepper conveys the steps necessary to complete a process or task, and the status of
 * each step. Steps have titles and descriptions; and each step can be in one of a number of possible states:
 * - inactive (yet to be performed)
 * - active (currently being performed)
 * - warn (succeeded, but with warnings)
 * - fail (failed to occur)
 * Or a custom state, set using the `icon` attribute.
 *
 * @summary Communicate how many steps are required to complete a process
 *
 * @alias Progress stepper
 */
let RhProgressStepper = class RhProgressStepper extends LitElement {
    constructor() {
        super(...arguments);
        _RhProgressStepper_instances.add(this);
        /**
         * Makes the element `vertical` at various container query based breakpoints.
         * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
         */
        this.verticalAt = undefined;
        /**
         * Sets the orientation of the progress stepper
         * - `horizontal` - Steps are displayed in a horizontal row
         * - `vertical` - Steps are displayed in a vertical column
         */
        this.orientation = 'horizontal';
        /**
         * Makes element display as `compact`
         */
        this.compact = false;
        /**
         * Defines the current step, so it can be marked as such with ARIA,
         * and so its label can be displayed in compact layouts.
         */
        this.currentStep = null;
        /**
         * Set when ResizeObserver detects width is less than the breakpoint (default: `--rh-breakpoint-sm`)
         */
        this.mobile = true;
        /**
         * Set to match current step's `state`
         */
        this.currentState = '';
        _RhProgressStepper_maxWidth.set(this, 768);
        /** normalized string content of the current step */
        _RhProgressStepper_contentString.set(this, '');
        _RhProgressStepper_resizeTimeoutId.set(this, void 0);
        /**
         *
         * This callback is debounced with a simple timeout.
         * In the future, we should consider StyleObserver:
         * @see https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/
         * @see https://github.com/LeaVerou/style-observer/
         */
        _RhProgressStepper_ro.set(this, new ResizeObserver(entries => {
            if (this.compact || this.orientation === 'vertical') {
                return;
            }
            if (__classPrivateFieldGet(this, _RhProgressStepper_resizeTimeoutId, "f")) {
                clearTimeout(__classPrivateFieldGet(this, _RhProgressStepper_resizeTimeoutId, "f"));
            }
            __classPrivateFieldSet(this, _RhProgressStepper_resizeTimeoutId, window.setTimeout(() => {
                const [{ contentBoxSize: [{ inlineSize } = {}] = [] } = {}] = entries;
                if (inlineSize != null) {
                    this.mobile = inlineSize < __classPrivateFieldGet(this, _RhProgressStepper_maxWidth, "f");
                }
            }, 100), "f");
        }));
    }
    firstUpdated() {
        // ensure we update initially on client hydration
        const isHydrated = isServer && !this.hasUpdated;
        if (!isHydrated) {
            this.mobile = this.offsetWidth < __classPrivateFieldGet(this, _RhProgressStepper_maxWidth, "f");
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'list';
        if (!isServer) {
            __classPrivateFieldGet(this, _RhProgressStepper_ro, "f")?.observe(this);
            __classPrivateFieldGet(this, _RhProgressStepper_instances, "m", _RhProgressStepper_updateState).call(this);
        }
        this.addEventListener('change', __classPrivateFieldGet(this, _RhProgressStepper_instances, "m", _RhProgressStepper_updateState));
    }
    render() {
        const compact = this.compact ?? false;
        const vertical = this.orientation === 'vertical' || this.mobile;
        const currentState = this.currentState || '';
        return html `
      <div id="container" class="${classMap({ compact, vertical, [currentState]: true })}">
        <strong id="current-step"
                class="visually-hidden"
                ?hidden="${!compact}">${__classPrivateFieldGet(this, _RhProgressStepper_contentString, "f")}</strong>
        <!-- Use this slot for \`<rh-progress-step>\` items -->
        <slot id="step-list" @change="${__classPrivateFieldGet(this, _RhProgressStepper_instances, "m", _RhProgressStepper_onChange)}"></slot>
      </div>
    `;
    }
    verticalAtChanged() {
        const breakpoint = BREAKPOINTS.get(this.verticalAt);
        if (breakpoint) {
            const int = parseInt(breakpoint.replace('px', ''));
            if (!Number.isNaN(breakpoint)) {
                __classPrivateFieldSet(this, _RhProgressStepper_maxWidth, int, "f");
            }
        }
    }
};
_RhProgressStepper_maxWidth = new WeakMap();
_RhProgressStepper_contentString = new WeakMap();
_RhProgressStepper_resizeTimeoutId = new WeakMap();
_RhProgressStepper_ro = new WeakMap();
_RhProgressStepper_instances = new WeakSet();
_RhProgressStepper_onChange = function _RhProgressStepper_onChange(event) {
    if (event instanceof RhProgressStepChangeEvent) {
        __classPrivateFieldGet(this, _RhProgressStepper_instances, "m", _RhProgressStepper_updateState).call(this);
    }
};
_RhProgressStepper_updateState = function _RhProgressStepper_updateState() {
    // all steps with `[state=active]`, `fail` or `warn`
    // `[state=complete]` is not a stateful step, since `complete` is always a past step
    const statefulSteps = this.querySelectorAll(/* css */ `
        rh-progress-step:is([state="active"], [state="fail"], [state="warn"], [icon]),
        rh-progress-step:has(> [slot=icon])
      `);
    // always, only take the last item in the list, in order to prevent having more
    // than one aria-current step, which is not approved of in the aria spec
    // see https://w3c.github.io/aria/#aria-current
    const activeStep = Array.from(statefulSteps).at(-1);
    this.currentStep = activeStep instanceof RhProgressStep ? activeStep : null;
    if (this.currentStep) {
        this.currentState = this.currentStep.state || '';
        __classPrivateFieldSet(this, _RhProgressStepper_contentString, '', "f");
        // Use childNodes instead of children to access both Element and Text nodes
        for (const node of this.currentStep.childNodes) {
            if (node instanceof Element && !node.hasAttribute('slot')) {
                __classPrivateFieldSet(this, _RhProgressStepper_contentString, __classPrivateFieldGet(this, _RhProgressStepper_contentString, "f") + node.textContent?.trim(), "f");
            }
            else if (node instanceof Text) {
                __classPrivateFieldSet(this, _RhProgressStepper_contentString, __classPrivateFieldGet(this, _RhProgressStepper_contentString, "f") + node.data.trim(), "f");
            }
        }
        ;
    }
};
RhProgressStepper.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'vertical-at' })
], RhProgressStepper.prototype, "verticalAt", void 0);
__decorate([
    property({ reflect: true })
], RhProgressStepper.prototype, "orientation", void 0);
__decorate([
    provide({ context: compactContext }),
    property({ reflect: true, type: Boolean })
], RhProgressStepper.prototype, "compact", void 0);
__decorate([
    provide({ context: currentStepContext }),
    state()
], RhProgressStepper.prototype, "currentStep", void 0);
__decorate([
    state()
], RhProgressStepper.prototype, "mobile", void 0);
__decorate([
    state()
], RhProgressStepper.prototype, "currentState", void 0);
__decorate([
    observes('verticalAt')
], RhProgressStepper.prototype, "verticalAtChanged", null);
RhProgressStepper = __decorate([
    customElement('rh-progress-stepper'),
    themable
], RhProgressStepper);
export { RhProgressStepper };
//# sourceMappingURL=rh-progress-stepper.js.map
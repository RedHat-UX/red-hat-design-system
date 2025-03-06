var _RhAlert_instances, _RhAlert_slots, _RhAlert_onClose, _RhAlert_aliasState;
import { __classPrivateFieldGet } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { LitElement, html, isServer, render } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{display:block;max-width:var(--_max-width,initial)}[hidden]{display:none!important}header{display:flex;align-items:center;justify-content:flex-start}.hasBody header{margin-block-end:var(--rh-space-xs,4px)}footer.hasActions{margin-block-start:var(--rh-space-lg,16px)}footer ::slotted([slot=actions]:not(rh-button[variant=link i])){margin-inline-end:var(--rh-space-xl,24px)!important;padding:0!important;border:none!important;background-color:initial!important;color:var(--rh-color-interactive-primary-default)!important;font-size:var(--rh-font-size-body-text-sm,.875rem)!important;font-family:var(--_font-family)!important}footer ::slotted([slot=actions]:focus){text-decoration:underline!important;color:var(--rh-color-interactive-primary-hover)!important}footer ::slotted([slot=actions]:hover){cursor:pointer!important;text-decoration:underline!important;color:var(--rh-color-interactive-primary-hover)!important}footer ::slotted(rh-button[variant=link i]){display:inline-block;translate:calc(var(--rh-space-lg, 16px)*-1)}#container{--_background-color:var(--rh-color-teal-10,#daf2f2);--_border-color:var(--rh-color-teal-50,#37a3a3);--_icon-color:var(--rh-color-teal-50,#37a3a3);border-width:var(--rh-border-width-md,2px);border-style:solid;border-color:var(--_border-color);border-inline-start-color:#0000;border-block-end-color:#0000;border-inline-end-color:#0000;background-color:var(--_background-color);box-shadow:var(--_box-shadow,none);padding:var(--rh-space-lg,16px);display:grid;grid-template-columns:min-content 1fr;gap:var(--rh-space-xs,4px);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);font-size:var(--rh-font-size-body-text-sm,.875rem);line-height:var(--rh-line-height-body-text,1.5)}#container header ::slotted(*){font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)!important;font-weight:var(--rh-font-weight-body-text-medium,500)!important;font-size:var(--rh-font-size-body-text-sm,.875rem)!important;line-height:var(--rh-line-height-body-text,1.5)!important;margin:0!important}#container header ::slotted(:is(h1,h2,h3,h4,h5,h6)){padding-block:2px var(--rh-space-xs,4px)!important}#container #description>::slotted(*){font-size:var(--rh-font-size-body-text-sm,.875rem)!important;margin-block:0!important;padding:0!important}#container.neutral{--_border-color:var(--rh-color-status-neutral);--_icon-color:var(--rh-color-icon-status-neutral);--_background-color:var(--rh-color-surface-status-neutral)}#container.info{--_border-color:var(--rh-color-status-info);--_icon-color:var(--rh-color-icon-status-info);--_background-color:var(--rh-color-surface-status-info)}#container.success{--_border-color:var(--rh-color-status-success);--_icon-color:var(--rh-color-icon-status-success);--_background-color:var(--rh-color-surface-status-success)}#container.caution{--_border-color:var(--rh-color-status-caution);--_icon-color:var(--rh-color-icon-status-caution);--_background-color:var(--rh-color-surface-status-caution)}#container.warning{--_border-color:var(--rh-color-status-warning);--_icon-color:var(--rh-color-icon-status-warning);--_background-color:var(--rh-color-surface-status-warning)}#container.danger{--_border-color:var(--rh-color-status-danger);--_icon-color:var(--rh-color-icon-status-danger);--_background-color:var(--rh-color-surface-status-danger)}#container.toast{--_background-color:var(--rh-color-surface-lightest,#fff);--_max-width:550px;--_box-shadow:var(--rh-box-shadow-xl,0 8px 24px 3px #15151559)}#container.alternate{border-inline-start-color:var(--_border-color);border-block-end-color:var(--_border-color);border-inline-end-color:var(--_border-color)}#left-column,#middle-column{display:inline-block;vertical-align:top}#header-actions{margin-inline-end:var(--rh-space-xs,4px)}#header{color:var(--rh-color-text-primary);flex:1 1 auto}#icon{display:flex;align-items:center;justify-content:center;width:var(--rh-size-icon-02,24px);height:var(--rh-size-icon-02,24px);color:var(--_icon-color)}#close-button{color:var(--rh-color-text-secondary);background-color:initial;border:none;height:var(--rh-length-xl,24px);width:var(--rh-length-xl,24px);cursor:pointer}#close-button:hover{color:var(--rh-color-text-primary)}`;
const toastStyles = css `.rh-alert-toast-group{position:fixed;z-index:1000;inset-block-start:var(--rh-space-lg,16px);inset-inline-end:var(--rh-space-lg,16px);padding-block-end:var(--rh-space-4xl,64px);display:grid;justify-items:end;justify-content:center;gap:var(--rh-space-lg,16px);pointer-events:none}.rh-alert-toast-group rh-alert{--_duration:8s;--_travel-distance:0;pointer-events:all;will-change:transform;animation:fade-in .3s ease,slide-in .3s ease,fade-out .3s ease var(--_duration)}@media (prefers-reduced-motion:no-preference){.rh-alert-toast-group rh-alert{--_travel-distance:var(--rh-space-4xl,64px)}}@keyframes fade-in{0%{opacity:0}}@keyframes fade-out{to{opacity:0}}@keyframes slide-in{0%{transform:translateY(var(--_travel-distance,var(--rh-space-lg,16px)))}}`;
import consumerStyles from '@rhds/tokens/css/color-context-consumer.css.js';
const ICONS = new Map(Object.entries({
    neutral: 'minus-circle-fill',
    info: 'information-fill',
    success: 'check-circle-fill',
    caution: 'error-fill',
    warning: 'warning-fill',
    danger: 'ban-fill',
}));
export class AlertCloseEvent extends Event {
    constructor() {
        super('close', { bubbles: true, cancelable: true });
    }
}
/**
 * An alert is a banner used to notify a user about a change in status
 * or communicate other information. It can be generated with or without
 * a user triggering an action first.
 *
 * @summary Notifies a user without blocking their workflow
 *
 * @fires {AlertCloseEvent} close - when the dismissable alert closes
 *
 * @slot         - Provide a description for the alert message
 * @slot header  - Provide a header for the alert message.
 * @slot actions - Provide actions that the user can take for the alert
 *
 */
export class RhAlert extends LitElement {
    constructor() {
        super(...arguments);
        _RhAlert_instances.add(this);
        _RhAlert_slots.set(this, new SlotController(this, 'header', null, 'actions'));
        /**
         * Communicates the urgency of a message and is denoted by various styling configurations.
         *
         *  - `neutral` - Indicates generic information or a message with no severity.
         *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
         *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
         *  - `caution` - Indicates an action or notice which should immediately draw the attention
         *  - `info` - Indicates helpful information or a message with very little to no severity.
         *  - `success` - Indicates a success state, like if a process was completed without errors.
         */
        this.state = 'neutral';
        /**
         * Alert variants have different rules regarding their ability to be dismissed by a user.
         * Default, Info, and Success Inline alerts can be dismissed by a user selecting the close button.
         * Warning and Danger Inline alerts can be dismissed by a user resolving the issues caused by the alert.
         * All Toast alerts can be dismissed by a user selecting the close button or waiting for them to time out.
         */
        this.dismissable = false;
    }
    /**
     * @see https://aerotwist.com/blog/flip-your-animations/
     * @param toast
     */
    static flip() {
        const first = this.toaster.offsetHeight;
        const last = this.toaster.offsetHeight;
        const invert = last - first;
        const animation = this.toaster.animate([
            { transform: `translateY(${invert}px)` },
            { transform: 'translateY(0)' },
        ], {
            duration: 150,
            easing: 'ease-out',
        });
        animation.startTime = document.timeline.currentTime;
    }
    ;
    static renderToasts() {
        render(repeat(this.toasts, x => x.id, toast => html `
      <rh-alert id="${toast.id}"
                state="${toast.state}"
                variant="toast"
                role="status"
                aria-live="polite">
        <h3 slot="header">${toast.heading}</h3>
        <p class="text" ?hidden="${!toast.message}">${toast.message}</p>
      </rh-alert>
    `), this.toaster);
    }
    /**
     * Toast a message with an rh-alert
     * @param options
     * @param options.message alert text
     * @param [options.heading] alert heading
     * @param [options.state] `<rh-alert state="...">`
     */
    static async toast({ message, heading = 'Success', state = 'info' }) {
        this.toaster ?? (this.toaster = this.init());
        const id = getRandomId();
        const toast = { heading, message, state, id };
        this.toasts.add(toast);
        const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
        this.renderToasts();
        const alert = this.toaster.querySelector(`#${id}`);
        if (this.toaster.children.length && motionOK) {
            this.flip();
        }
        await Promise.all([
            ...this.toaster.getAnimations().map(x => x.finished),
            ...(alert?.getAnimations().map(x => x.finished) ?? []),
        ]);
        this.toasts.delete(toast);
        this.renderToasts();
    }
    ;
    static init() {
        const node = document.createElement('section');
        node.classList.add('rh-alert-toast-group');
        // TODO: possibly allow other roots
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets ?? [],
            toastStyles.styleSheet,
        ];
        document.body.append(node);
        return node;
    }
    get icon() {
        const state = this.state.toLowerCase();
        switch (state) {
            case 'note': return ICONS.get('info');
            case 'default': return ICONS.get('neutral');
            case 'error': return ICONS.get('danger');
            default: return ICONS.get(state);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            this.requestUpdate();
        }
    }
    render() {
        const _isServer = isServer && !this.hasUpdated;
        const hasActions = _isServer || __classPrivateFieldGet(this, _RhAlert_slots, "f").hasSlotted('actions');
        const hasBody = _isServer || __classPrivateFieldGet(this, _RhAlert_slots, "f").hasSlotted(SlotController.default);
        const { variant = 'inline' } = this;
        const state = __classPrivateFieldGet(this, _RhAlert_instances, "m", _RhAlert_aliasState).call(this, this.state);
        return html `
      <rh-surface id="container"
                  class="${classMap({
            hasBody,
            on: true,
            light: true,
            [state]: true,
            [variant]: !!variant,
        })}"
                  role="alert"
                  aria-hidden="false"
                  color-palette="lightest">
        <div id="left-column">
          <rh-icon id="icon" set="ui" icon="${this.icon}"></rh-icon>
        </div>
        <div id="middle-column">
          <header ?hidden="${!_isServer && __classPrivateFieldGet(this, _RhAlert_slots, "f").isEmpty('header')}">
            <div id="header">
              <slot name="header"></slot>
            </div>${!this.dismissable && this.variant !== 'toast' ? '' : html `
            <div id="header-actions">
              <rh-button id="close-button"
                         variant="close"
                         accessible-label="Close"
                         confirm
                         @click=${__classPrivateFieldGet(this, _RhAlert_instances, "m", _RhAlert_onClose)}></rh-button>
            </div>`}
          </header>
          <div id="description">
            <slot></slot>
          </div>
          <footer class="${classMap({ hasActions })}">
            <slot name="actions"></slot>
          </footer>
        </div>
      </rh-surface>
    `;
    }
}
_RhAlert_slots = new WeakMap(), _RhAlert_instances = new WeakSet(), _RhAlert_onClose = function _RhAlert_onClose() {
    const event = new AlertCloseEvent();
    if (this.dispatchEvent(event)) {
        this.remove();
    }
}, _RhAlert_aliasState = function _RhAlert_aliasState(state) {
    switch (state.toLowerCase()) {
        // the first three are deprecated pre-DPO status names
        case 'note': return 'info';
        case 'default': return 'neutral';
        case 'error': return 'danger';
        // the following are DPO-approved status names
        case 'danger':
        case 'warning':
        case 'caution':
        case 'neutral':
        case 'info':
        case 'success':
            return state;
        default:
            return 'neutral';
    }
};
RhAlert.properties = {
    state: { reflect: true },
    variant: { reflect: true },
    dismissable: { reflect: true, type: Boolean }
};
RhAlert.styles = [styles, consumerStyles];
RhAlert.toasts = new Set();
customElements.define("rh-alert", RhAlert);
//# sourceMappingURL=rh-alert.js.map
var _PfAlert_instances, _PfAlert_timeoutId, _PfAlert_renderDefaultTitle, _PfAlert_onCloseClick, _PfAlert_onToggleClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `[hidden] {
  display: none !important;
}

:host {
\t--pf-c-alert--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-alert--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-alert--GridTemplateColumns: max-content 1fr max-content;
\t--pf-c-alert--GridTemplateAreas: "icon title close" ". description description" ". action action";
\t--pf-c-alert--BorderTopWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-alert--BorderTopColor: var(--pf-global--default-color--200, #009596);
\t--pf-c-alert--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t--pf-c-alert--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t--pf-c-alert--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t--pf-c-alert--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t--pf-c-alert__FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t--pf-c-alert__toggle--MarginTop: calc(-1 * var(--pf-global--spacer--form-element, 0.375rem) - 0.0625rem);
\t--pf-c-alert__toggle--MarginBottom: calc(-1 * var(--pf-global--spacer--form-element, 0.375rem));
\t--pf-c-alert__toggle--MarginLeft: calc(-1 * var(--pf-global--spacer--md, 1rem));
\t--pf-c-alert__toggle-icon--Rotate: 0;
\t--pf-c-alert__toggle-icon--Transition: var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1));
\t--pf-c-alert__icon--Color: var(--pf-global--default-color--200, #009596);
\t--pf-c-alert__icon--MarginTop: 0.0625rem;
\t--pf-c-alert__icon--MarginRight: var(--pf-global--spacer--sm, 0.5rem);
\t--pf-c-alert__icon--FontSize: var(--pf-global--icon--FontSize--md, 1.125rem);
\t--pf-c-alert__title--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t--pf-c-alert__title--Color: var(--pf-global--default-color--300, #003737);
\t--pf-c-alert__title--max-lines: 1;
\t--pf-c-alert__action--MarginTop: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-alert__action--MarginBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-alert__action--TranslateY: 0.125rem;
\t--pf-c-alert__action--MarginRight: calc(var(--pf-global--spacer--sm, 0.5rem) * -1);
\t--pf-c-alert__description--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-alert__action-group--PaddingTop-base: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-alert__action-group--PaddingTop: var(--pf-c-alert__action-group--PaddingTop-base);
\t--pf-c-alert__description--action-group--PaddingTop-base: var(--pf-global--spacer--md, 1rem);
\t--pf-c-alert__description--action-group--PaddingTop: var(--pf-c-alert__description--action-group--PaddingTop-base);
\t--pf-c-alert__action-group__c-button--not-last-child--MarginRight: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-alert--m-success--BorderTopColor: var(--pf-global--success-color--100, #3e8635);
\t--pf-c-alert--m-success__icon--Color: var(--pf-global--success-color--100, #3e8635);
\t--pf-c-alert--m-success__title--Color: var(--pf-global--success-color--200, #1e4f18);
\t--pf-c-alert--m-danger--BorderTopColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-alert--m-danger__icon--Color: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-alert--m-danger__title--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-alert--m-warning--BorderTopColor: var(--pf-global--warning-color--100, #f0ab00);
\t--pf-c-alert--m-warning__icon--Color: var(--pf-global--warning-color--100, #f0ab00);
\t--pf-c-alert--m-warning__title--Color: var(--pf-global--warning-color--200, #795600);
\t--pf-c-alert--m-info--BorderTopColor: var(--pf-global--info-color--100, #2b9af3);
\t--pf-c-alert--m-info__icon--Color: var(--pf-global--info-color--100, #2b9af3);
\t--pf-c-alert--m-info__title--Color: var(--pf-global--info-color--200, #002952);
\t--pf-c-alert--m-inline--BoxShadow: none;
\t--pf-c-alert--m-inline--BackgroundColor: var(--pf-global--palette--cyan-50, #f2f9f9);
\t--pf-c-alert--m-inline--m-success--BackgroundColor: var(--pf-global--palette--green-50, #f3faf2);
\t--pf-c-alert--m-inline--m-danger--BackgroundColor: var(--pf-global--palette--red-50, #faeae8);
\t--pf-c-alert--m-inline--m-warning--BackgroundColor: var(--pf-global--palette--gold-50, #fdf7e7);
\t--pf-c-alert--m-inline--m-info--BackgroundColor: var(--pf-global--palette--blue-50, #e7f1fa);
\t--pf-c-alert--m-inline--m-plain--BorderTopWidth: 0;
\t--pf-c-alert--m-inline--m-plain--BackgroundColor: transparent;
\t--pf-c-alert--m-inline--m-plain--PaddingTop: 0;
\t--pf-c-alert--m-inline--m-plain--PaddingRight: 0;
\t--pf-c-alert--m-inline--m-plain--PaddingBottom: 0;
\t--pf-c-alert--m-inline--m-plain--PaddingLeft: 0;
\t--pf-c-alert--m-expandable--GridTemplateColumns: auto max-content 1fr max-content;
\t--pf-c-alert--m-expandable--GridTemplateAreas: "toggle icon title close" ". . description description" ". . action action";
\t--pf-c-alert--m-expandable__description--action-group--PaddingTop: var(--pf-c-alert__action-group--PaddingTop-base);
\t--pf-c-alert--m-expanded__toggle-icon--Rotate: 90deg;
\t--pf-c-alert--m-expanded__description--action-group--PaddingTop: var(--pf-c-alert__description--action-group--PaddingTop-base);
\tcolor: var(--pf-global--Color--100, #151515);
\tposition: relative;
\tdisplay: grid;
\tpadding: var(--pf-c-alert--PaddingTop) var(--pf-c-alert--PaddingRight) var(--pf-c-alert--PaddingBottom) var(--pf-c-alert--PaddingLeft);
\tfont-size: var(--pf-c-alert__FontSize);
\tbackground-color: var(--pf-c-alert--BackgroundColor);
\tborder-top: var(--pf-c-alert--BorderTopWidth) solid var(--pf-c-alert--BorderTopColor);
\tbox-shadow: var(--pf-c-alert--BoxShadow);
\tgrid-template-columns: var(--pf-c-alert--GridTemplateColumns);
\tgrid-template-areas: var(--pf-c-alert--GridTemplateAreas);
}

:host([variant="success"]) {
  --pf-c-alert--BorderTopColor: var(--pf-c-alert--m-success--BorderTopColor);
  --pf-c-alert__icon--Color: var(--pf-c-alert--m-success__icon--Color);
  --pf-c-alert__title--Color: var(--pf-c-alert--m-success__title--Color);
  --pf-c-alert--m-inline--BackgroundColor: var(--pf-c-alert--m-inline--m-success--BackgroundColor);
}

:host([variant="danger"]) {
  --pf-c-alert--BorderTopColor: var(--pf-c-alert--m-danger--BorderTopColor);
  --pf-c-alert__icon--Color: var(--pf-c-alert--m-danger__icon--Color);
  --pf-c-alert__title--Color: var(--pf-c-alert--m-danger__title--Color);
  --pf-c-alert--m-inline--BackgroundColor: var(--pf-c-alert--m-inline--m-danger--BackgroundColor);
}

:host([variant="warning"]) {
  --pf-c-alert--BorderTopColor: var(--pf-c-alert--m-warning--BorderTopColor);
  --pf-c-alert__icon--Color: var(--pf-c-alert--m-warning__icon--Color);
  --pf-c-alert__title--Color: var(--pf-c-alert--m-warning__title--Color);
  --pf-c-alert--m-inline--BackgroundColor: var(--pf-c-alert--m-inline--m-warning--BackgroundColor);
}

:host([variant="info"]) {
  --pf-c-alert--BorderTopColor: var(--pf-c-alert--m-info--BorderTopColor);
  --pf-c-alert__icon--Color: var(--pf-c-alert--m-info__icon--Color);
  --pf-c-alert__title--Color: var(--pf-c-alert--m-info__title--Color);
  --pf-c-alert--m-inline--BackgroundColor: var(--pf-c-alert--m-inline--m-info--BackgroundColor);
}

:host([inline]) {
  --pf-c-alert--BoxShadow: var(--pf-c-alert--m-inline--BoxShadow);
  --pf-c-alert--BackgroundColor: var(--pf-c-alert--m-inline--BackgroundColor);
}

:host([plain]) {
  --pf-c-alert--BorderTopWidth: var(--pf-c-alert--m-inline--m-plain--BorderTopWidth);
  --pf-c-alert--BackgroundColor: var(--pf-c-alert--m-inline--m-plain--BackgroundColor);
  --pf-c-alert--PaddingTop: var(--pf-c-alert--m-inline--m-plain--PaddingTop);
  --pf-c-alert--PaddingRight: var(--pf-c-alert--m-inline--m-plain--PaddingRight);
  --pf-c-alert--PaddingBottom: var(--pf-c-alert--m-inline--m-plain--PaddingBottom);
  --pf-c-alert--PaddingLeft: var(--pf-c-alert--m-inline--m-plain--PaddingLeft);
}

:host([expandable]) {
  --pf-c-alert--GridTemplateColumns: var(--pf-c-alert--m-expandable--GridTemplateColumns);
  --pf-c-alert--GridTemplateAreas: var(--pf-c-alert--m-expandable--GridTemplateAreas);
  --pf-c-alert__description--action-group--PaddingTop: var(--pf-c-alert--m-expandable__description--action-group--PaddingTop);
}

:host([expanded]) {
  --pf-c-alert__toggle-icon--Rotate: var(--pf-c-alert--m-expanded__toggle-icon--Rotate);
  --pf-c-alert__description--action-group--PaddingTop: var(--pf-c-alert--m-expanded__description--action-group--PaddingTop);
}

#toggle {
  margin-top: var(--pf-c-alert__toggle--MarginTop);
  margin-bottom: var(--pf-c-alert__toggle--MarginBottom);
  margin-left: var(--pf-c-alert__toggle--MarginLeft);
}

#icon {
  grid-area: icon;
  display: flex;
  margin-top: var(--pf-c-alert__icon--MarginTop);
  margin-right: var(--pf-c-alert__icon--MarginRight);
  font-size: var(--pf-c-alert__icon--FontSize);
  --pf-icon--size: var(--pf-c-alert__icon--FontSize);
  color: var(--pf-c-alert__icon--Color);
  pf-icon,
  ::slotted(pf-icon) {
    translate: 0 0.125em;
  }
}

#title {
  grid-area: title;
  font-weight: var(--pf-c-alert__title--FontWeight);
  color: var(--pf-c-alert__title--Color);
  word-break: break-word;
  ::slotted(*) {
    color: inherit;
    font-weight: inherit;
  }
  :is(h1,h2,h3,h4,h5,h6),
  ::slotted(:is(h1,h2,h3,h4,h5,h6)) {
    margin-block: 0 !important;
  }
}

#close {
  grid-area: close;
}

#description {
  grid-area: description;
  padding-top: var(--pf-c-alert__description--PaddingTop);
  word-break: break-word;
}

#actions {
  grid-area: action;
  --pf-c-alert__action-group--PaddingTop: var(--pf-c-alert__description--action-group--PaddingTop);

  & ::slotted(a) {
    text-decoration: none;
    color: #06c;
    margin-inline-end: 1rem;
  }

  & ::slotted(a:hover),
  & ::slotted(a:focus),
  & ::slotted(a:active) {
    color: #004080;
  }
}
`;
const VariantIconMap = new Map(Object.entries({
    info: 'info-circle',
    success: 'check-circle',
    warning: 'exclamation-triangle',
    danger: 'exclamation-circle',
    neutral: 'bell',
}));
export class PfAlertCloseEvent extends Event {
    constructor(reason = 'closed') {
        super('close', { bubbles: true, cancelable: true });
        this.reason = reason;
    }
}
let PfAlert = class PfAlert extends LitElement {
    constructor() {
        super(...arguments);
        _PfAlert_instances.add(this);
        /**
         * Use the `timeout` property to automatically dismiss an alert after a period
         * of time. If set to `true`, the timeout will be 8000 milliseconds. Provide a
         * specific value to dismiss the alert after a different number of
         * milliseconds.
         */
        this.timeout = 0;
        /**
         * PatternFly supports several alert variants for different scenarios.
         * Each variant has an associated status icon, background, and alert title
         * coded to communicate the severity of an alert. Use the variant property to
         * apply the following styling options. If no variant is specified, then the
         * variant will be set to "default".
         *
         * - **Default** - Use for generic messages with no associated severity
         * - **Info** - Use for general informational messages
         * - **Success** - Use to indicate that a task or process has been completed successfully
         * - **Warning** - Use to indicate that a non-critical error has occurred
         * - **Danger** - Use to indicate that a critical or blocking error has occurred
         */
        this.variant = 'neutral';
        /**
         * Use inline alerts to display an alert inline with content. All alert
         * variants may use the `inline` attribute to position alerts in content-heavy
         * areas, such as within forms, wizards, or drawers.
         */
        this.inline = false;
        /**
         * Use the `plain` attribute to make any inline alert plain. Plain styling
         * removes the colored background but keeps colored text and icons.
         */
        this.plain = false;
        /**
         * An alert can contain additional, hidden information that is made visible
         * when users click a caret icon. This information can be expanded and
         * collapsed each time the icon is clicked.
         *
         * It is not recommended to use an expandable alert with a timeout in a toast
         * alert group because the alert could timeout before users have time to
         * interact with and view the entire alert.
         *
         * See the toast alert considerations section of the alert accessibility
         * documentation to understand the accessibility risks associated with using
         * toast alerts.
         */
        this.expandable = false;
        /**
         * True when an expandable alert is expanded
         */
        this.expanded = false;
        /**
         * When true, the alert displays a close button
         * Clicking the close button removes the alert
         */
        this.dismissable = false;
        _PfAlert_timeoutId.set(this, void 0);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(__classPrivateFieldGet(this, _PfAlert_timeoutId, "f"));
    }
    render() {
        const { expandable, expanded, variant } = this;
        const icon = this.icon ?? VariantIconMap.get(variant);
        return html `
      <pf-button id="toggle"
                 plain
                 ?hidden="${!expandable}"
                 icon="${expandable ? 'angle-down' : 'angle-right'}"
                 icon-set="fas"
                 @click="${__classPrivateFieldGet(this, _PfAlert_instances, "m", _PfAlert_onToggleClick)}"
                 aria-controls="${ifDefined(expandable ? 'description' : undefined)}"
                 aria-expanded="${ifDefined(expandable ? String(expanded) : undefined)}"
                 aria-label="${expanded ? 'Collapse Alert' : 'Expand Alert'}">
      </pf-button>

      <div id="icon">
        <slot name="icon">
          <pf-icon icon="${icon}"></pf-icon>
        </slot>
      </div>

      <div id="title">
        <slot name="title">${__classPrivateFieldGet(this, _PfAlert_instances, "m", _PfAlert_renderDefaultTitle).call(this)}</slot>
      </div>

      <div id="description"
           ?hidden="${expandable && !expanded}">
        <slot></slot>
      </div>

      <div id="actions">
        <slot name="actions"></slot>
      </div>

      <pf-button id="close"
                 plain
                 icon="close"
                 icon-set="patternfly"
                 ?hidden="${!this.dismissable}"
                 @click="${__classPrivateFieldGet(this, _PfAlert_instances, "m", _PfAlert_onCloseClick)}">
      </pf-button>
    `;
    }
    timeoutChanged() {
        clearTimeout(__classPrivateFieldGet(this, _PfAlert_timeoutId, "f"));
        let { timeout } = this;
        if (timeout === true) {
            timeout = 8000;
        }
        if (timeout > 0) {
            __classPrivateFieldSet(this, _PfAlert_timeoutId, setTimeout(() => {
                if (this.isConnected && this.dispatchEvent(new PfAlertCloseEvent('timeout'))) {
                    this.remove();
                }
            }, timeout), "f");
        }
    }
};
_PfAlert_timeoutId = new WeakMap();
_PfAlert_instances = new WeakSet();
_PfAlert_renderDefaultTitle = function _PfAlert_renderDefaultTitle() {
    if (!this.titleText) {
        return '';
    }
    switch (this.titleLevel ?? 3) {
        case 1: return html `<h1>${this.titleText}</h1>`;
        case 2: return html `<h2>${this.titleText}</h2>`;
        case 4: return html `<h4>${this.titleText}</h4>`;
        case 5: return html `<h5>${this.titleText}</h5>`;
        case 6: return html `<h6>${this.titleText}</h6>`;
        case 3:
        default: return html `<h3>${this.titleText}</h3>`;
    }
};
_PfAlert_onCloseClick = function _PfAlert_onCloseClick() {
    if (this.isConnected && this.dispatchEvent(new PfAlertCloseEvent())) {
        clearTimeout(__classPrivateFieldGet(this, _PfAlert_timeoutId, "f"));
        this.remove();
    }
};
_PfAlert_onToggleClick = function _PfAlert_onToggleClick() {
    this.expanded = !this.expanded;
};
PfAlert.styles = [styles];
PfAlert.version = "4.3.0";
__decorate([
    property({ type: Number })
], PfAlert.prototype, "timeout", void 0);
__decorate([
    property({ reflect: true })
], PfAlert.prototype, "variant", void 0);
__decorate([
    property()
], PfAlert.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'title-text', reflect: true })
], PfAlert.prototype, "titleText", void 0);
__decorate([
    property({ attribute: 'title-level', reflect: true })
], PfAlert.prototype, "titleLevel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAlert.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAlert.prototype, "plain", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfAlert.prototype, "expandable", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfAlert.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfAlert.prototype, "dismissable", void 0);
__decorate([
    observes('timeout')
], PfAlert.prototype, "timeoutChanged", null);
PfAlert = __decorate([
    customElement('pf-alert')
], PfAlert);
export { PfAlert };
//# sourceMappingURL=pf-alert.js.map
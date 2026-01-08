var _PfHint_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const styles = css `:host {
  display: block;

  /* Container */
  --pf-c-hint--GridRowGap: var(--pf-global--spacer--md, 1rem);
  --pf-c-hint--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
  --pf-c-hint--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
  --pf-c-hint--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
  --pf-c-hint--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
  --pf-c-hint--BackgroundColor: var(--pf-global--palette--blue-50, #e7f1fa);
  --pf-c-hint--BorderColor: var(--pf-global--palette--blue-100, #bee1f4);
  --pf-c-hint--BorderWidth: 1px;
  --pf-c-hint--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
  --pf-c-hint--BoxShadow: var(--pf-global--BoxShadow--sm, 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06));

  /* Title */
  --pf-c-hint__title--FontSize: 1.125rem;
  --pf-c-hint__title--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);
  --pf-c-hint__title--Color: var(--pf-global--Color--100, #151515);
  --pf-c-hint__title--LineHeight: var(--pf-global--LineHeight--md, 1.5);

  /* Body */
  --pf-c-hint__body--FontSize: 1rem;
  --pf-c-hint__body--Color: var(--pf-global--Color--100, #151515);
  --pf-c-hint__body--LineHeight: var(--pf-global--LineHeight--md, 1.5);

  /* Footer */
  --pf-c-hint__footer--MarginTop: 0;
  --pf-c-hint__footer--child--MarginRight: 1rem;

  /* Actions */
  --pf-c-hint__actions--Top: var(--pf-global--spacer--lg, 1.5rem);
  --pf-c-hint__actions--Right: var(--pf-global--spacer--lg, 1.5rem);
  --pf-c-hint__actions--MarginLeft: 3rem;
  --pf-c-hint__actions--c-dropdown--MarginTop: calc(0.375rem * -1);
}

#container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--pf-c-hint--GridRowGap);
  padding:
    var(--pf-c-hint--PaddingTop)
    var(--pf-c-hint--PaddingRight)
    var(--pf-c-hint--PaddingBottom)
    var(--pf-c-hint--PaddingLeft);
  background-color: var(--pf-c-hint--BackgroundColor);
  border: var(--pf-c-hint--BorderWidth) solid var(--pf-c-hint--BorderColor);
  border-radius: var(--pf-c-hint--BorderRadius);
  box-shadow: var(--pf-c-hint--BoxShadow);
  overflow: visible;
}

#container > * {
  grid-column: 1;
}

#actions {
  grid-column: 2;
  grid-row: 1 / -1;
  align-self: start;
  position: relative;
  z-index: 1000;
}

#actions ::slotted(pf-dropdown) {
  margin-top: var(--pf-c-hint__actions--c-dropdown--MarginTop);
  --pf-c-dropdown__menu--MinWidth: auto;
  --pf-c-dropdown__menu--Left: auto;
  --pf-c-dropdown__menu--Right: 0;
}

#title {
  font-size: var(--pf-c-hint__title--FontSize);
  font-weight: var(--pf-c-hint__title--FontWeight);
  color: var(--pf-c-hint__title--Color);
  line-height: var(--pf-c-hint__title--LineHeight);
}

#body {
  font-size: var(--pf-c-hint__body--FontSize);
  color: var(--pf-c-hint__body--Color);
  line-height: var(--pf-c-hint__body--LineHeight);
}

#footer {
  margin-top: var(--pf-c-hint__footer--MarginTop);
  font-size: var(--pf-c-hint__body--FontSize);
  line-height: var(--pf-c-hint__body--LineHeight);
}

#footer ::slotted(*) {
  margin-right: var(--pf-c-hint__footer--child--MarginRight);
}

#footer ::slotted(*:last-child) {
  margin-right: 0;
}

/* Hidden elements */
[hidden] {
  display: none !important;
}

/* Link styling within hint */
::slotted(a) {
  color: var(--pf-global--link--Color, #06c);
  text-decoration: none;
}

::slotted(a:hover) {
  color: var(--pf-global--link--Color--hover, #004080);
  text-decoration: underline;
}

/* Button styling in footer */
::slotted(pf-button) {
  --pf-c-button--m-link--Color: var(--pf-global--link--Color, #06c);
}
`;
let PfHint = class PfHint extends LitElement {
    constructor() {
        super(...arguments);
        _PfHint_slots.set(this, new SlotController(this, 'title', null, 'footer', 'actions'));
    }
    render() {
        const hasActions = !__classPrivateFieldGet(this, _PfHint_slots, "f").isEmpty('actions');
        return html `
      <div id="container"
           part="container"
           class=${classMap({
            'has-actions': hasActions,
        })}>
        <div id="actions"
             part="actions"
             class="pf-c-hint__actions"
             ?hidden=${__classPrivateFieldGet(this, _PfHint_slots, "f").isEmpty('actions')}>
          <!-- summary: Actions menu (e.g., kebab dropdown) -->
          <slot name="actions"></slot>
        </div>
        <div id="title"
             part="title"
             class="pf-c-hint__title"
             ?hidden=${__classPrivateFieldGet(this, _PfHint_slots, "f").isEmpty('title')}>
          <!-- summary: Optional title for the hint -->
          <slot name="title"></slot>
        </div>
        <div id="body"
             part="body"
             class="pf-c-hint__body">
          <!-- summary: Body content of the hint. Main informational text. -->
          <slot></slot>
        </div>
        <div id="footer"
             part="footer"
             class="pf-c-hint__footer"
             ?hidden=${__classPrivateFieldGet(this, _PfHint_slots, "f").isEmpty('footer')}>
          <!-- summary: Optional footer content, typically containing action links or buttons -->
          <slot name="footer"></slot>
        </div>
      </div>
    `;
    }
};
_PfHint_slots = new WeakMap();
PfHint.styles = [styles];
PfHint.version = "4.3.0";
PfHint = __decorate([
    customElement('pf-hint')
], PfHint);
export { PfHint };
//# sourceMappingURL=pf-hint.js.map
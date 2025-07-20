import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators/query.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n  width: 100%;\n  text-align: left;\n  white-space: nowrap;\n  border: none;\n  cursor: pointer;\n  font-size: var(\n    --pf-c-dropdown__menu-item--FontSize,\n    var(--pf-global--FontSize--md, 1rem)\n  );\n  font-weight: var(\n    --pf-c-dropdown__menu-item--FontWeight,\n    var(--pf-global--FontWeight--normal, 400)\n  );\n  line-height: var(\n    --pf-c-dropdown__menu-item--LineHeight,\n    var(--pf-global--LineHeight--md, 1.5)\n  );\n  color: var(\n    --pf-c-dropdown__menu-item--Color,\n    var(--pf-global--Color--dark-100, #151515)\n  );\n  background-color: var(\n    --pf-c-dropdown__menu-item--BackgroundColor,\n    transparent\n  );\n  border: 3px solid var(\n    --pf-c-dropdown__menu-item--BackgroundColor,\n    transparent\n  );\n}\n\n:host([hidden]),\n[hidden] {\n  display: none !important;\n}\n\n:host([disabled]),\n.disabled {\n  &, & a {\n    cursor: not-allowed;\n  }\n  --pf-c-dropdown__menu-item--Color: var(\n    --pf-c-dropdown__menu-item--disabled--Color,\n    var(--pf-global--Color--dark-200, #6a6e73)\n  );\n  --pf-c-dropdown__menu-item--BackgroundColor: var(\n    --pf-c-dropdown__menu-item--disabled--BackgroundColor,\n    transparent\n  );\n}\n\n:host(:hover) {\n  --pf-c-dropdown__menu-item--Color: var(\n    --pf-c-dropdown__menu-item--hover--Color,\n    var(--pf-global--Color--dark-100, #151515)\n  );\n  --pf-c-dropdown__menu-item--BackgroundColor: var(\n    --pf-c-dropdown__menu-item--hover--BackgroundColor,\n    var(--pf-global--BackgroundColor--light-300, #f0f0f0)\n  );\n  text-decoration: none;\n}\n\n:host(:focus-within) {\n  border: 3px solid var(--pf-global--link--Color, #0066cc);\n}\n\n#menuitem {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: var(\n      --pf-c-dropdown__menu-item--PaddingTop,\n      var(--pf-global--spacer--sm, 0.5rem)\n    )\n    var(\n      --pf-c-dropdown__menu-item--PaddingRight,\n      var(--pf-global--spacer--md, 1rem)\n    )\n    var(\n      --pf-c-dropdown__menu-item--PaddingBottom,\n      var(--pf-global--spacer--sm, 0.5rem)\n    )\n    var(\n      --pf-c-dropdown__menu-item--PaddingLeft,\n      var(--pf-global--spacer--md, 1rem)\n    );\n}\n\n#item {\n  display: flex;\n  align-items: center;\n}\n\n#item:focus {\n  outline: none;\n}\n\n#item::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n#description {\n  display: block;\n  flex: 1 0 100%;\n  font-size: var(\n    --pf-c-dropdown__menu-item-description--FontSize, var(\n      --pf-global--FontSize--sm, 0.75rem\n    )\n  );\n  color: var(\n    --pf-c-dropdown__menu-item-description--Color, var(\n      --pf-global--Color--dark-200, #6a6e73\n    )\n  );\n  word-break: break-all;\n}\n\na {\n  color: var(\n    --pf-c-dropdown__menu-item--Color,\n    var(--pf-global--Color--dark-100, #151515)\n  ) !important;\n  text-decoration: none !important;\n}\n\nslot:not([name]){\n  flex: 1 0 44px;\n  min-height: 44px;\n}\n\nslot[name="icon"]::slotted(*) {\n  margin-inline-end: 0.5em;\n}\n`;
export class DropdownItemChange extends Event {
    constructor() {
        super('change', { bubbles: true, cancelable: true });
    }
}
let PfDropdownItem = class PfDropdownItem extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Flag indicating whether the item is active
         */
        this.active = false;
        /**
         * Indicates whether the dropdown item is disabled.
         * A disabled item cannot be selected.
         */
        this.disabled = false;
    }
    updated(changed) {
        if (changed.has('href')) {
            this.dispatchEvent(new DropdownItemChange());
        }
    }
    render() {
        const { disabled } = this.ctx ?? { disabled: false };
        const isDisabled = !!this.disabled || !!this.ctx?.disabled;
        return html `
      <div id="menuitem" role="none" class="${classMap({ disabled })}">${this.href ? html `
        <a id="item" role="menuitem" href="${this.href}" aria-disabled="${isDisabled}">
          <slot name="icon"></slot>
          <slot></slot>
        </a>
        ` : html `
        <div id="item" role="menuitem" aria-disabled="${isDisabled}">
          <slot name="icon"></slot>
          <slot></slot>
        </div>`}
        <slot id="description" name="description">${this.description ?? ''}</slot>
      </div>`;
    }
};
PfDropdownItem.styles = [styles];
PfDropdownItem.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfDropdownItem.version = "4.1.0";
__decorate([
    property({ reflect: true })
], PfDropdownItem.prototype, "value", void 0);
__decorate([
    property({ attribute: 'href' })
], PfDropdownItem.prototype, "href", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfDropdownItem.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfDropdownItem.prototype, "disabled", void 0);
__decorate([
    property()
], PfDropdownItem.prototype, "description", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], PfDropdownItem.prototype, "ctx", void 0);
__decorate([
    query('#item')
], PfDropdownItem.prototype, "menuItem", void 0);
PfDropdownItem = __decorate([
    customElement('pf-dropdown-item')
], PfDropdownItem);
export { PfDropdownItem };
//# sourceMappingURL=pf-dropdown-item.js.map
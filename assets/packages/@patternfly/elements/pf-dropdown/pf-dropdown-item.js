import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators/query.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host {
  display: block;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  /** Dropdown item font size */
  font-size: var(
    --pf-c-dropdown__menu-item--FontSize,
    var(--pf-global--FontSize--md, 1rem)
  );
  /** Dropdown item font weight */
  font-weight: var(
    --pf-c-dropdown__menu-item--FontWeight,
    var(--pf-global--FontWeight--normal, 400)
  );
  /** Dropdown item line height */
  line-height: var(
    --pf-c-dropdown__menu-item--LineHeight,
    var(--pf-global--LineHeight--md, 1.5)
  );
  /** Dropdown item color */
  color: var(
    --pf-c-dropdown__menu-item--Color,
    var(--pf-global--Color--dark-100, #151515)
  );
  /** Dropdown item background color */
  background-color: var(
    --pf-c-dropdown__menu-item--BackgroundColor,
    transparent
  );
  border: 3px solid var(
    --pf-c-dropdown__menu-item--BackgroundColor,
    transparent
  );
}

:host([hidden]),
[hidden] {
  display: none !important;
}

:host([disabled]),
.disabled {
  &, & a {
    cursor: not-allowed;
  }
  --pf-c-dropdown__menu-item--Color: var(
    --pf-c-dropdown__menu-item--disabled--Color,
    var(--pf-global--Color--dark-200, #6a6e73)
  );
  --pf-c-dropdown__menu-item--BackgroundColor: var(
    --pf-c-dropdown__menu-item--disabled--BackgroundColor,
    transparent
  );
}

:host(:hover) {
  --pf-c-dropdown__menu-item--Color: var(
    --pf-c-dropdown__menu-item--hover--Color,
    var(--pf-global--Color--dark-100, #151515)
  );
  --pf-c-dropdown__menu-item--BackgroundColor: var(
    --pf-c-dropdown__menu-item--hover--BackgroundColor,
    var(--pf-global--BackgroundColor--light-300, #f0f0f0)
  );
  text-decoration: none;
}

:host(:focus-within) {
  border: 3px solid var(--pf-global--link--Color, #0066cc);
}

#menuitem {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  /** Dropdown item padding */
  padding: var(
      /** Dropdown item padding top */
      --pf-c-dropdown__menu-item--PaddingTop,
      var(--pf-global--spacer--sm, 0.5rem)
    )
    var(
      /** Dropdown item padding right */
      --pf-c-dropdown__menu-item--PaddingRight,
      var(--pf-global--spacer--md, 1rem)
    )
    var(
      /** Dropdown item padding bottom */
      --pf-c-dropdown__menu-item--PaddingBottom,
      var(--pf-global--spacer--sm, 0.5rem)
    )
    var(
      /** Dropdown item padding left */
      --pf-c-dropdown__menu-item--PaddingLeft,
      var(--pf-global--spacer--md, 1rem)
    );
}

#item {
  display: flex;
  align-items: center;
}

#item:focus {
  outline: none;
}

#item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#description {
  display: block;
  flex: 1 0 100%;
  font-size: var(
    --pf-c-dropdown__menu-item-description--FontSize, var(
      --pf-global--FontSize--sm, 0.75rem
    )
  );
  color: var(
    --pf-c-dropdown__menu-item-description--Color, var(
      --pf-global--Color--dark-200, #6a6e73
    )
  );
  word-break: break-all;
}

a {
  color: var(
    --pf-c-dropdown__menu-item--Color,
    var(--pf-global--Color--dark-100, #151515)
  ) !important;
  text-decoration: none !important;
}

slot:not([name]){
  flex: 1 0 44px;
  min-height: 44px;
}

slot[name="icon"]::slotted(*) {
  margin-inline-end: 0.5em;
}
`;
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
PfDropdownItem.version = "4.3.0";
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
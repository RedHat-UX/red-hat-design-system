var _PfTr_instances, _PfTr_expandedChanged, _PfTr_expandableChanged, _PfTr_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host {
  display: grid;
  align-items: center;
  padding-inline-start: calc(50px * var(--_pf-table--expandable-rows, 0));
}

::slotted(*) {
  height: 100%;
}

@media (min-width: 768px) {
  :host {
    /* TODO: provide ability to override */
    grid-template-columns: repeat(var(--_pf-table--number-of-columns), 1fr);
  }
}

#container {
  display: contents;
}

:host([expandable]),
#expansion {
  position: relative;
}

#expansion {
  display: block;
  margin-inline-start: calc(-1 * 50px * var(--_pf-table--expandable-rows, 0));
  grid-auto-flow: row;
  grid-template-columns: auto;
  padding: 0px 1.5rem;
  display: grid;
  grid-column: 1/-1;
}

:host(:not([expanded])),
:host([expanded]) #expansion {
  border-block-end: 1px solid #d2d2d2;
}

:host([expanded]) #expansion::before {
  content: '';
  position: absolute;
  inset: 0;
  border-block-start: 1px solid #d2d2d2;
  inset-block-start: -1px;
}


#expansion::slotted(pf-td) {
  padding-block-start: 0;
  padding-inline-start: 0;
}

:host([expandable][expanded])::before {
  position: absolute;
  inset-block-start: -1px;
  inset-inline-end: 0;
  inset-block-end: -1px;
  inset-inline-start: 0;
  content: "";
  border-inline-start: 3px solid #06c;
  pointer-events: none;
  z-index: 1;
}

#expansion::slotted(pf-table) {
  margin-block-end: -1px;
}

#toggle-cell {
  z-index: 2;
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 1.5rem;
  padding: 0;
}

#toggle-icon {
  transition: .2s ease-in 0s;
  vertical-align: -0.125em;
}

:host([expanded]) #toggle-icon {
  transform: rotate(90deg);
}
`;
import { ifDefined } from 'lit/directives/if-defined.js';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
export class RequestExpandEvent extends Event {
    constructor(compoundExpanded, row) {
        super('request-expand', {
            bubbles: true,
            cancelable: true,
        });
        /**
         * if provided, the slot name for the compound-expanded cell
         */
        this.compoundExpanded = false;
        if (row) {
            this.compoundExpanded = compoundExpanded ?? false;
            this.row = row;
        }
    }
}
function BooleanEnumConverter(...allowedAttributes) {
    const values = new Set(allowedAttributes);
    return {
        fromAttribute(value) {
            if (value && values.has(value.toLowerCase())) {
                return value;
            }
            else {
                return value != null;
            }
        },
        toAttribute(value) {
            if (!value) {
                return null;
            }
            else if (value === 'compound') {
                return value;
            }
            else {
                return '';
            }
        },
    };
}
const StringOrBooleanConverter = {
    fromAttribute(value) {
        return value || value !== null;
    },
    toAttribute(value) {
        if (!value) {
            return null;
        }
        else if (typeof value === 'string') {
            return value;
        }
        else {
            return '';
        }
    },
};
let PfTr = class PfTr extends LitElement {
    constructor() {
        super(...arguments);
        _PfTr_instances.add(this);
        this.expandable = false;
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _PfTr_instances, "m", _PfTr_expandableChanged).call(this);
    }
    willUpdate(changed) {
        if (changed.has('expandable')) {
            __classPrivateFieldGet(this, _PfTr_instances, "m", _PfTr_expandableChanged).call(this);
        }
        if (changed.has('expanded')) {
            __classPrivateFieldGet(this, _PfTr_instances, "m", _PfTr_expandedChanged).call(this);
        }
    }
    render() {
        return [
            this.expandable && this.expandable !== 'compound' && html `
        <pf-td id="toggle-cell">
          <pf-button id="toggle-button"
                     aria-expanded=${String(this.expanded)}
                     plain
                     @click=${__classPrivateFieldGet(this, _PfTr_instances, "m", _PfTr_onClick)}>
            <pf-icon id="toggle-icon"
                     icon="angle-right"
                     size="md"
            ></pf-icon>
          </pf-button>
        </pf-td>
      `,
            html `
        <div id="container" role="${ifDefined(this.expandable ? 'row' : undefined)}">
          <slot></slot>
        </div>
      `,
            this.expandable && this.expandable !== 'compound' && this.expanded && html `
        <div id="expansion" role="row"><slot name="expansion"></slot></div>
      `,
            this.expandable === 'compound' && html `
        <div id="expansion">${!this.expanded ? '' : html `
          <slot name="${this.expanded}"></slot>`}
        </div>
      `,
        ].filter(Boolean);
    }
};
_PfTr_instances = new WeakSet();
_PfTr_expandedChanged = function _PfTr_expandedChanged() {
    // disallow setting `expanded` unless `expandable` is also set
    if (this.expanded && !this.expandable) {
        this.expanded = false;
    }
};
_PfTr_expandableChanged = function _PfTr_expandableChanged() {
    switch (this.expandable) {
        case 'compound': {
            // TODO: do we need tab roles now?
            break;
        }
        case true:
            this.setAttribute('role', 'rowgroup');
            break;
        default:
            this.setAttribute('role', 'row');
    }
};
_PfTr_onClick = function _PfTr_onClick() {
    this.dispatchEvent(new RequestExpandEvent());
};
PfTr.styles = [styles];
PfTr.version = "4.3.0";
__decorate([
    property({
        reflect: true,
        converter: BooleanEnumConverter('compound'),
    })
], PfTr.prototype, "expandable", void 0);
__decorate([
    property({
        reflect: true,
        converter: StringOrBooleanConverter,
    })
], PfTr.prototype, "expanded", void 0);
PfTr = __decorate([
    customElement('pf-tr')
], PfTr);
export { PfTr };
//# sourceMappingURL=pf-tr.js.map
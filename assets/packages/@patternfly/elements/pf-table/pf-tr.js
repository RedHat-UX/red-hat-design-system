var _PfTr_instances, _PfTr_expandedChanged, _PfTr_expandableChanged, _PfTr_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host {\n  display: grid;\n  align-items: center;\n  padding-inline-start: calc(50px * var(--_pf-table--expandable-rows, 0));\n}\n\n::slotted(*) {\n  height: 100%;\n}\n\n@media (min-width: 768px) {\n  :host {\n    /* TODO: provide ability to override */\n    grid-template-columns: repeat(var(--_pf-table--number-of-columns), 1fr);\n  }\n}\n\n#container {\n  display: contents;\n}\n\n:host([expandable]),\n#expansion {\n  position: relative;\n}\n\n#expansion {\n  display: block;\n  margin-inline-start: calc(-1 * 50px * var(--_pf-table--expandable-rows, 0));\n  grid-auto-flow: row;\n  grid-template-columns: auto;\n  padding: 0px 1.5rem;\n  display: grid;\n  grid-column: 1/-1;\n}\n\n:host(:not([expanded])),\n:host([expanded]) #expansion {\n  border-block-end: 1px solid #d2d2d2;\n}\n\n:host([expanded]) #expansion::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-block-start: 1px solid #d2d2d2;\n  inset-block-start: -1px;\n}\n\n\n#expansion::slotted(pf-td) {\n  padding-block-start: 0;\n  padding-inline-start: 0;\n}\n\n:host([expandable][expanded])::before {\n  position: absolute;\n  inset-block-start: -1px;\n  inset-inline-end: 0;\n  inset-block-end: -1px;\n  inset-inline-start: 0;\n  content: "";\n  border-inline-start: 3px solid #06c;\n  pointer-events: none;\n  z-index: 1;\n}\n\n#expansion::slotted(pf-table) {\n  margin-block-end: -1px;\n}\n\n#toggle-cell {\n  z-index: 2;\n  position: absolute;\n  inset-inline-start: 0;\n  inset-block-start: 1.5rem;\n  padding: 0;\n}\n\n#toggle-icon {\n  transition: .2s ease-in 0s;\n  vertical-align: -0.125em;\n}\n\n:host([expanded]) #toggle-icon {\n  transform: rotate(90deg);\n}\n`;
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
PfTr.version = "4.1.0";
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
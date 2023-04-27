var _PfClipboardCopy_instances, _PfClipboardCopy_copied, _PfClipboardCopy_mo, _PfClipboardCopy_onClick, _PfClipboardCopy_onChange, _PfClipboardCopy_onMutation, _PfClipboardCopy_dedent;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseClipboardCopy } from './BaseClipboardCopy.js';
import { css } from "lit";
const styles = css `.container{display:flex;flex-direction:column}#input-group,#wrapper,pf-button,pf-tooltip{display:flex}.inline #wrapper{display:inline-flex}pf-button{height:100%}pf-tooltip::part(invoker){display:flex;height:100%}:host{--pf-icon--size:var(--pf-global--FontSize--md, 1rem)}#input-group>*+*{margin-left:-1px}input{color:var(--pf-c-form-control--Color,var(--pf-global--Color--100,var(--pf-global--Color--dark-100,#151515)));width:var(--pf-c-form-control--Width);padding:var(--pf-c-form-control--PaddingTop,calc(var(--pf-global--spacer--form-element,.375rem) - var(--pf-global--BorderWidth--sm,1px))) var(--pf-c-form-control--PaddingRight,var(--pf-c-form-control--inset--base,var(--pf-global--spacer--sm,.5rem))) var(--pf-c-form-control--PaddingBottom,calc(var(--pf-global--spacer--form-element,.375rem) - var(--pf-global--BorderWidth--sm,1px))) var(--pf-c-form-control--PaddingLeft,var(--pf-c-form-control--inset--base,var(--pf-global--spacer--sm,.5rem)));font-size:var(--pf-c-form-control--FontSize);line-height:var(--pf-c-form-control--LineHeight);background-color:var(--pf-c-form-control--BackgroundColor);background-repeat:no-repeat;border:var(--pf-c-form-control--BorderWidth,var(--pf-global--BorderWidth--sm,1px)) solid;border-color:var(--pf-c-form-control--BorderTopColor,var(--pf-global--BorderColor--300,#f0f0f0)) var(--pf-c-form-control--BorderRightColor,var(--pf-global--BorderColor--300,#f0f0f0)) var(--pf-c-form-control--BorderBottomColor,var(--pf-global--BorderColor--200,#8a8d90)) var(--pf-c-form-control--BorderLeftColor,var(--pf-global--BorderColor--300,#f0f0f0));border-radius:var(--pf-c-form-control--BorderRadius,0);margin:0;appearance:none;height:var(--pf-c-form-control--Height,calc(var(--pf-c-form-control--FontSize) * var(--pf-c-form-control--LineHeight) + var(--pf-c-form-control--BorderWidth) * 2 + var(--pf-c-form-control--PaddingTop) + var(--pf-c-form-control--PaddingBottom)),36px);text-overflow:ellipsis;flex:1 1 auto}input[disabled]{background-color:var(--pf-c-form-control--readonly--BackgroundColor,var(--pf-global--disabled-color--300,#f0f0f0))}textarea{display:flex;flex:1 1 auto;padding:var(--pf-c-clipboard-copy__expandable-content--PaddingTop,var(--pf-global--spacer--md,1rem)) var(--pf-c-clipboard-copy__expandable-content--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-clipboard-copy__expandable-content--PaddingBottom,var(--pf-global--spacer--md,1rem)) var(--pf-c-clipboard-copy__expandable-content--PaddingLeft,var(--pf-global--spacer--md,1rem));word-wrap:break-word;background-color:var(--pf-c-clipboard-copy__expandable-content--BackgroundColor,var(--pf-global--BackgroundColor--light-100,#fff));background-clip:padding-box;border:solid var(--pf-c-clipboard-copy__expandable-content--BorderColor,var(--pf-global--BorderColor--100,#d2d2d2));border-width:var(--pf-c-clipboard-copy__expandable-content--BorderTopWidth,0) var(--pf-c-clipboard-copy__expandable-content--BorderRightWidth,var(--pf-global--BorderWidth--sm,1px)) var(--pf-c-clipboard-copy__expandable-content--BorderBottomWidth,var(--pf-global--BorderWidth--sm,1px)) var(--pf-c-clipboard-copy__expandable-content--BorderLeftWidth,var(--pf-global--BorderWidth--sm,1px));box-shadow:var(--pf-c-clipboard-copy__expandable-content--BoxShadow);margin:0;color:inherit;font-family:inherit}.container.code textarea{font-family:var(--pf-global--FontFamily--monospace,\n    var(--pf-global--FontFamily--redhat--monospace,\n      "RedHatMono",\n      "Liberation Mono",\n      consolas,\n      "SFMono-Regular",\n      menlo,\n      monaco,\n      "Courier New",\n      monospace))}.container.expanded #expand-button pf-icon{rotate:90deg}.container.inline{display:inline;background-color:var(--pf-c-clipboard-copy--m-inline--BackgroundColor,var(--pf-global--BackgroundColor--200,#f0f0f0));padding-block-start:var(--pf-c-clipboard-copy--m-inline--PaddingTop,0px);padding-block-end:var(--pf-c-clipboard-copy--m-inline--PaddingBottom,0px);padding-inline-start:var(--pf-c-clipboard-copy--m-inline--PaddingLeft,var(--pf-global--spacer--xs,0.25rem));word-break:break-word;white-space:normal}#input-group{display:flex;height:100%}.container:is(.compact,.inline) #input-group{display:contents}.container:is(.compact,.inline) pf-tooltip,.container:is(.compact,.inline) pf-tooltip::part(invoker){display:inline-flex}.container:is(.compact,.inline) #input-group{background-color:var(--pf-c-button--m-plain--BackgroundColor,var(--pf-global--BackgroundColor--200,#f0f0f0))}.container.compact.block{display:block;background-color:var(--pf-c-clipboard-copy--m-inline--BackgroundColor,var(--pf-global--BackgroundColor--200,#f0f0f0))}.container:is(.compact,.inline) #copy-button,.container:is(.compact,.inline) slot[name=actions]::slotted(*){--pf-c-button--PaddingTop:var(--pf-c-clipboard-copy__actions-item--button--PaddingTop,\n    var(--pf-global--spacer--xs, 0.25rem));--pf-c-button--PaddingRight:var(--pf-c-clipboard-copy__actions-item--button--PaddingRight,\n    var(--pf-global--spacer--xs, 0.25rem));--pf-c-button--PaddingBottom:var(--pf-c-clipboard-copy__actions-item--button--PaddingBottom,\n    var(--pf-global--spacer--xs, 0.25rem));--pf-c-button--PaddingLeft:var(--pf-c-clipboard-copy__actions-item--button--PaddingLeft,\n    var(--pf-global--spacer--sm, 0.5rem));margin-block-start:calc(-1 * var(--pf-c-button--PaddingTop));margin-block-end:calc(-1 * var(--pf-c-button--PaddingBottom))}`;
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-tooltip/pf-tooltip.js';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
/**
 * The **clipboard copy** component allows users to quickly and easily copy content to their clipboard.
 *
 * @slot - Place content to copy here, or use the `value` attribute
 * @slot actions - Place additional action buttons here
 */
let PfClipboardCopy = class PfClipboardCopy extends BaseClipboardCopy {
    constructor() {
        super(...arguments);
        _PfClipboardCopy_instances.add(this);
        this.clickTip = 'Copied';
        this.hoverTip = 'Copy';
        this.textAriaLabel = 'Copyable input';
        this.toggleAriaLabel = 'Show content';
        this.entryDelay = 300;
        this.exitDelay = 1500;
        this.block = false;
        this.code = false;
        this.expanded = false;
        /**
         * Implies not `inline`.
         */
        this.expandable = false;
        this.readonly = false;
        /**
         * Implies not expandable. Overrules `expandable`.
         */
        this.inline = false;
        this.compact = false;
        this.value = '';
        _PfClipboardCopy_copied.set(this, false);
        _PfClipboardCopy_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onMutation).call(this)));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _PfClipboardCopy_mo, "f").observe(this, { characterData: true });
        __classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onMutation).call(this);
    }
    /**
     * @todo fix the collapsed whitespace between the end of the "inline-compact" variant and the text node.
     * This demonstrates the collapsed whitespace issue.
     * The extra space between the closing slot tag and the closing template literal results in a collapsed whitespace.
     */
    render() {
        const { expanded, expandable, inline, compact, code, block, readonly } = this;
        return html `
      <div class="container ${classMap({ code, expanded, inline, compact, block, })}">
        <div id="input-group">
          <div id="wrapper">
            <pf-button id="expand-button"
                        plain
                        variant="control"
                        label="EXPAND"
                        ?inert="${!expandable}"
                        @click="${__classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onClick)}">
              <pf-icon icon="chevron-right"></pf-icon>
            </pf-button>
          </div>
          <span ?hidden="${!(inline || compact)}">${this.value}</span>
          <input
              ?hidden="${inline || compact}"
              ?disabled="${expanded || readonly}"
              .value="${this.value}"
              @input="${__classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onChange)}"
              aria-label="${this.textAriaLabel}">
          <pf-tooltip>
            <pf-button id="copy-button"
                        plain
                        variant="${ifDefined(!(inline || compact) ? 'control' : undefined)}"
                        label="${this.hoverTip}"
                        size="lg"
                        @click="${this.copy}">
              <pf-icon icon="copy"></pf-icon>
            </pf-button>
            <span slot="content">${__classPrivateFieldGet(this, _PfClipboardCopy_copied, "f") ? this.clickTip : this.hoverTip}</span>
          </pf-tooltip>
          <slot name="actions"></slot>
        </div>
        <textarea .value="${this.value}"
                  .disabled="${this.readonly}"
                  ?hidden="${!(expandable && expanded)}"
                  @input="${__classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onChange)}">
        </textarea>
      </div>
    `;
    }
    async copy() {
        await super.copy();
        await sleep(this.entryDelay);
        __classPrivateFieldSet(this, _PfClipboardCopy_copied, true, "f");
        this.requestUpdate();
        await sleep(this.exitDelay);
        __classPrivateFieldSet(this, _PfClipboardCopy_copied, false, "f");
        this.requestUpdate();
    }
};
_PfClipboardCopy_copied = new WeakMap();
_PfClipboardCopy_mo = new WeakMap();
_PfClipboardCopy_instances = new WeakSet();
_PfClipboardCopy_onClick = function _PfClipboardCopy_onClick() {
    this.expanded = !this.expanded;
};
_PfClipboardCopy_onChange = function _PfClipboardCopy_onChange(e) {
    const { value } = e.target || HTMLTextAreaElement;
    this.value = value;
};
_PfClipboardCopy_onMutation = function _PfClipboardCopy_onMutation() {
    if (this.childNodes.length > 0) {
        this.value = this.getAttribute('value') ?? __classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_dedent).call(this, Array.from(this.childNodes, child => (child instanceof Element || child instanceof Text) ? (child.textContent ?? '') : '')
            .join(''));
    }
};
_PfClipboardCopy_dedent = function _PfClipboardCopy_dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
};
PfClipboardCopy.styles = [...BaseClipboardCopy.styles, styles];
PfClipboardCopy.shadowRootOptions = { ...BaseClipboardCopy.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ attribute: 'click-tip' })
], PfClipboardCopy.prototype, "clickTip", void 0);
__decorate([
    property({ attribute: 'hover-tip' })
], PfClipboardCopy.prototype, "hoverTip", void 0);
__decorate([
    property({ attribute: 'text-label' })
], PfClipboardCopy.prototype, "textAriaLabel", void 0);
__decorate([
    property({ attribute: 'toggle-label' })
], PfClipboardCopy.prototype, "toggleAriaLabel", void 0);
__decorate([
    property({ type: Number, attribute: 'entry-delay' })
], PfClipboardCopy.prototype, "entryDelay", void 0);
__decorate([
    property({ type: Number, attribute: 'exit-delay' })
], PfClipboardCopy.prototype, "exitDelay", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "block", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "code", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "expanded", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "expandable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "compact", void 0);
__decorate([
    property()
], PfClipboardCopy.prototype, "value", void 0);
PfClipboardCopy = __decorate([
    customElement('pf-clipboard-copy')
], PfClipboardCopy);
export { PfClipboardCopy };
//# sourceMappingURL=pf-clipboard-copy.js.map
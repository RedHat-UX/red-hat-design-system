var _PfCodeBlock_instances, _PfCodeBlock_expandedContent_get, _PfCodeBlock_content_get, _PfCodeBlock_toggle;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n  background-color: var(--pf-c-code-block--BackgroundColor, #f0f0f0);\n  font-size: var(--pf-c-code-block__pre--FontSize, 0.875rem);\n  font-family: var(--pf-c-code-block__pre--FontFamily, "Liberation Mono", consolas, "SFMono-Regular", menlo, monaco, "Courier New", monospace);\n}\n\n[hidden] {\n  display: none !important;\n}\n\n#container {\n  margin: 0;\n  padding-top: var(--pf-c-code-block__content--PaddingTop, 1rem);\n  padding-right: var(--pf-c-code-block__content--PaddingRight, 1rem);\n  padding-bottom: var(--pf-c-code-block__content--PaddingBottom, 1rem);\n  padding-left: var(--pf-c-code-block__content--PaddingLeft, 1rem);\n}\n\n#header {\n  border-bottom: var(--pf-c-code-block__header--BorderBottomWidth, 1px) solid var(--pf-c-code-block__header--BorderBottomColor, #d2d2d2);\n}\n\npre {\n  margin: 0;\n}\n\nslot[name="actions"] {\n  display: flex;\n  justify-content: end;\n}\n\n#expanded {\n  display: inline;\n}\n\nbutton {\n  display: flex;\n  background: none;\n  border: none;\n  padding: 6px 16px 6px 0;\n  color: #06c;\n  cursor: pointer;\n  font-size: 16px;\n}\n\nbutton svg {\n  color: #151515;\n  margin-right: 12px;\n  transition: .2s ease-in 0s;\n  vertical-align: -0.125em;\n}\n\n.expanded button svg {\n  transform: rotate(-90deg);\n}\n`;
/**
 * A **code block** is a component that contains 2 or more lines of read-only code. The code in a code block can be copied to the clipboard.
 * @slot code
 *       The slot to put the code in
 * @slot expandable-code
 *       The slot to put the code in that should be revealed when the "Show more" button is
 *       clicked to expand the code-block
 * @slot actions
 *       Contains the actions for the code-block. For example, copy to clipboard.
 * @attr {boolean} [expanded=false]
 *       Indicates if the code-block has been expanded
 * @cssprop {<color>} [--pf-c-code-block--BackgroundColor=#f0f0f0]
 * @cssprop {<length>} [--pf-c-code-block__header--BorderBottomWidth=1px]
 * @cssprop {<color>} [--pf-c-code-block__header--BorderBottomColor=#d2d2d2]
 * @cssprop {<length>} [--pf-c-code-block__content--PaddingTop=1rem]
 * @cssprop {<length>} [--pf-c-code-block__content--PaddingRight=1rem]
 * @cssprop {<length>} [--pf-c-code-block__content--PaddingBottom=1rem]
 * @cssprop {<length>} [--pf-c-code-block__content--PaddingLeft=1rem]
 * @cssprop {<length>} [--pf-c-code-block__pre--FontSize=0.875rem]
 * @cssprop {<string>} [--pf-c-code-block__pre--FontFamily="Liberation Mono", consolas, "SFMono-Regular", menlo, monaco, "Courier New", monospace]
 */
function dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}
let PfCodeBlock = class PfCodeBlock extends LitElement {
    constructor() {
        super(...arguments);
        _PfCodeBlock_instances.add(this);
        /** Flag for whether the code block is expanded */
        this.expanded = false;
    }
    render() {
        const { expanded } = this;
        return html `
      <div id="header">
        <div id="actions">
          <slot name="actions"></slot>
        </div>
      </div>
      <div id="container" class="${classMap({ expanded })}">
        <pre><code id="content">${__classPrivateFieldGet(this, _PfCodeBlock_instances, "a", _PfCodeBlock_content_get)}</code><code id="code-block-expand"
            ?hidden="${!expanded}">${__classPrivateFieldGet(this, _PfCodeBlock_instances, "a", _PfCodeBlock_expandedContent_get)}</code></pre>
        <button ?hidden="${!__classPrivateFieldGet(this, _PfCodeBlock_instances, "a", _PfCodeBlock_expandedContent_get)}"
                @click=${__classPrivateFieldGet(this, _PfCodeBlock_instances, "m", _PfCodeBlock_toggle)}
                aria-expanded=${this.expanded}
                aria-controls="code-block-expand">
          <svg fill="currentColor"
               height="1em"
               width="1em"
               viewBox="0 0 256 512"
               aria-hidden="true"
               role="img"><path
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
          ${!this.expanded ? 'Show more' : 'Show less'}
        </button>
      </div>
    `;
    }
};
_PfCodeBlock_instances = new WeakSet();
_PfCodeBlock_expandedContent_get = function _PfCodeBlock_expandedContent_get() {
    return this.querySelector?.('script[data-expand]')?.textContent ?? '';
};
_PfCodeBlock_content_get = function _PfCodeBlock_content_get() {
    const script = this.querySelector?.('script[type]');
    if (script?.type !== 'text/javascript-sample'
        && !!script?.type.match(/(j(ava)?|ecma|live)script/)) {
        return '';
    }
    else {
        return dedent(script?.textContent ?? '');
    }
};
_PfCodeBlock_toggle = function _PfCodeBlock_toggle() {
    this.expanded = !this.expanded;
};
PfCodeBlock.styles = [styles];
PfCodeBlock.version = "4.1.0";
__decorate([
    property({ type: Boolean, reflect: true })
], PfCodeBlock.prototype, "expanded", void 0);
PfCodeBlock = __decorate([
    customElement('pf-code-block')
], PfCodeBlock);
export { PfCodeBlock };
//# sourceMappingURL=pf-code-block.js.map
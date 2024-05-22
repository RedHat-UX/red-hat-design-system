var _RhCodeBlock_instances, _RhCodeBlock_slots, _RhCodeBlock_ro, _RhCodeBlock_lineHeights, _RhCodeBlock_wrapChanged, _RhCodeBlock_computeLineNumbers, _RhCodeBlock_onActionsClick, _RhCodeBlock_onActionsKeyup, _RhCodeBlock_onCodeAction, _RhCodeBlock_onClickExpand, _RhCodeBlock_copy;
var RhCodeBlock_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const style = css `:host{--rh-code-block-callout-size:var(--rh-size-icon-02, 24px);--_aspect-ratio:1;--_badge-size:var(--rh-code-block-callout-size);display:block;max-width:1000px;max-height:calc(10 * var(--rh-space-4xl,64px))}:host([full-height]){--_expand-toggle-rotate:0deg;max-height:initial}[hidden]{display:none!important}::slotted(pre){margin:0!important;padding:0!important;background:0 0!important;border:none!important}.shadow-fab{display:flex;align-items:center;justify-content:center;border:none;background:0 0;padding:var(--rh-space-md,8px);border-radius:var(--rh-border-radius-default,3px);width:var(--rh-length-3xl,48px);height:var(--rh-length-3xl,48px)}.shadow-fab:is(:hover,:focus,:active){background:var(--_code-action-hover-focus-active-background,var(--rh-color-surface-light,#e0e0e0))}.shadow-fab svg{width:var(--rh-size-icon-02,24px);height:var(--rh-size-icon-02,24px);color:var(--_code-action-color,var(--rh-color-text-primary-on-light,#151515))}.dark .shadow-fab{--_code-action-color:var(--rh-color-text-primary-on-dark, #ffffff);--_code-action-hover-focus-active-background:var(--rh-color-surface-dark, #383838)}#container,#content,#content-lines,#sizers{max-width:100%}#container{--_code-main-spacer:var(--rh-space-xl, 24px);display:grid;place-items:center;grid-template-columns:auto min-content;grid-template-areas:"code actions" "expand expand";column-gap:var(--_code-main-spacer);padding-inline-start:var(--_code-main-spacer);padding-block-end:var(--_code-main-spacer);border-radius:var(--rh-border-radius-default,3px);background-color:var(--_code-background-color,var(--rh-color-surface-lighter,#f2f2f2));color:var(--_code-color,var(--rh-color-text-primary-on-light,#151515));border:var(--rh-border-width-sm,1px) solid var(--_code-border-color,var(--rh-color-border-subtle-on-light,#c7c7c7));border-block-start-width:var(--rh-code-block-border-block-start-width,var(--rh-border-width-sm,1px))}#container.expandable{padding-block-end:0}#content,#sizers{display:block;font-family:var(--rh-font-family-code, RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace);z-index:1;place-self:start;grid-area:code}#content::slotted(:is(script,pre)),#sizers{display:inline;white-space:var(--_code-white-space,pre);word-wrap:var(--_code-word-wrap,initial);color:inherit}#content::slotted(rh-tag){width:var(--rh-size-icon-06,64px)}#content-lines{display:grid;column-gap:var(--rh-space-lg,16px);grid-area:code;grid-template-areas:"lines code";grid-template-columns:min-content 1fr;grid-template-rows:1fr;position:relative;overflow-y:auto;margin-block-start:var(--_code-main-spacer);width:100%}#sizers{position:absolute;min-width:100%;width:100%;opacity:0;pointer-events:none;z-index:-10000}#line-numbers{pointer-events:none;overflow-y:hidden;margin:0;grid-area:lines;list-style-type:none;padding-inline:0 var(--rh-space-md,8px);text-align:end;font-family:var(--rh-font-family-code, RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace);color:var(--_code-line-numbers-color,var(--rh-color-gray-60,#4d4d4d));font-weight:var(--rh-font-weight-code-regular,400);border-inline-end:var(--rh-border-width-sm,1px) solid var(--_code-line-numbers-border-color,var(--rh-color-border-subtle-on-light,#c7c7c7))}#actions{display:flex;grid-area:actions;gap:var(--rh-space-md,8px);flex-flow:column;margin-block-start:var(--rh-space-lg,16px);margin-inline-end:var(--rh-space-lg,16px);z-index:2;place-self:start center;height:100%;position:relative}#actions rh-tooltip{display:block}#expand{--_code-secondary-spacer:var(--rh-space-md, 8px);display:inline-flex;align-items:center;border:0;background:0 0;grid-area:expand;gap:var(--rh-space-md,8px);inset-block-end:var(--_code-secondary-spacer);margin-block:var(--_code-secondary-spacer);color:var(--_expand-toggle-color,var(--rh-color-text-primary-on-light,#151515));font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-body-text-sm, .875rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text, 1.5)}#expand svg{width:11px;height:7px;rotate:var(--_expand-toggle-rotate,180deg);transform:rotate .2s ease-in-out;color:var(--_expand-toggle-icon-color,var(--rh-color-icon-secondary-on-light,#151515))}#container.compact{--_code-main-spacer:var(--rh-space-lg, 16px);--_code-secondary-spacer:var(--rh-space-sm, 6px)}.resizable #content-lines{resize:vertical;overflow-x:scroll}.truncated #content-lines{max-height:calc(8 * var(--rh-font-size-code-md,1rem))}.truncated #content-lines:before{content:"";display:block;position:sticky;z-index:2;inset-block-end:0;inset-inline:0;height:var(--rh-space-3xl,48px);pointer-events:none;grid-column:-1/1;background:var(--_block-end-overflow-gradient,linear-gradient(0deg,#f2f2f2 0,rgba(242,242,242,0) 100%))}:not(.wrap) #actions:before{content:"";display:block;position:absolute;z-index:2;inset-block:0;inset-inline-start:calc(-1 * var(--rh-space-4xl,64px));width:var(--rh-space-4xl,64px);pointer-events:none;background:var(--_inline-end-overflow-gradient,linear-gradient(270deg,#f2f2f2 0,rgba(242,242,242,0) 100%))}:not(.actions) #actions{margin:0}.wrap{--_code-white-space:pre-wrap;--_code-word-wrap:anywhere}.dark{--_code-background-color:var(--rh-color-surface-dark-alt, #292929);--_code-border-color:var(--rh-color-border-subtle-on-dark, #707070);--_code-color:var(--rh-color-text-primary-on-dark, #ffffff);--_code-line-numbers-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_code-line-numbers-border-color:var(--rh-color-border-subtle-on-dark, #707070);--_expand-toggle-color:var(--rh-color-text-primary-on-dark, #ffffff);--_expand-toggle-icon-color:var(--rh-color-icon-secondary-on-dark, #ffffff);--_inline-end-overflow-gradient:linear-gradient(270deg, #292929 0%, rgba(41, 41, 41, 0) 100%);--_block-end-overflow-gradient:linear-gradient(0deg, #292929 0%, rgba(41, 41, 41, 0) 100%)}[name=legend]::slotted(dl){display:grid;grid-template-columns:max-content auto;margin-block:var(--rh-space-lg,16px);gap:var(--rh-space-md,8px)}`;
/**
 * A code block is formatted text within a container.
 * @summary Formats code strings within a container
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag. Can
 *         also be a `<pre>` tag.
 * @slot action-label-copy - tooltip content for the copy action button
 * @slot action-label-wrap - tooltip content for the wrap action button
 * @slot show-more - text content for the expandable toggle button when the code
 *                   block is collapsed.
 * @slot show-less - text content for the expandable toggle button when the code
 *                   block is expanded.
 * @slot legend - `<dl>` element containing rh-badges in the `<dt>`
 *                and legend text in the `<dd>` elements
 */
let RhCodeBlock = RhCodeBlock_1 = class RhCodeBlock extends LitElement {
    constructor() {
        super(...arguments);
        _RhCodeBlock_instances.add(this);
        this.actions = [];
        /** When set, the code block displays with compact spacing */
        this.compact = false;
        /** When set, the code block is resizable */
        this.resizable = false;
        /** When set, the code block occupies it's full height, without scrolling */
        this.fullHeight = false;
        /** When set, lines in the code snippet wrap */
        this.wrap = false;
        _RhCodeBlock_slots.set(this, new SlotController(this, null, 
        // 'actions',
        'action-label-copy', 'action-label-wrap', 'show-more', 'show-less', 'legend'));
        _RhCodeBlock_ro.set(this, new ResizeObserver(() => __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this)));
        _RhCodeBlock_lineHeights.set(this, []);
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhCodeBlock_ro, "f").observe(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _RhCodeBlock_ro, "f").disconnect();
    }
    render() {
        const { on = '', fullHeight, wrap, resizable, compact } = this;
        const expandable = __classPrivateFieldGet(this, _RhCodeBlock_lineHeights, "f").length > 5;
        const truncated = expandable && !fullHeight;
        const actions = !!this.actions.length;
        return html `
      <div id="container"
           class="${classMap({ [on]: !!on,
            actions,
            compact,
            expandable,
            fullHeight,
            resizable,
            truncated,
            wrap })}"
           @code-action="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onCodeAction)}">
        <div id="content-lines">
          <div id="sizers" aria-hidden="true"></div>
          <ol id="line-numbers" aria-hidden="true">${__classPrivateFieldGet(this, _RhCodeBlock_lineHeights, "f").map((height, i) => html `
            <li style="${styleMap({ height })}">${i + 1}</li>`)}
          </ol>
          <slot id="content" @slotchange="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers)}"></slot>
        </div>

        <div id="actions"
             @click="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onActionsClick)}"
             @keyup="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onActionsKeyup)}">
        <!-- <slot name="actions"> -->${this.actions.map(x => html `
          <rh-tooltip>
            <slot slot="content" name="action-label-${x}"></slot>
            <button id="action-${x}"
                    class="shadow-fab"
                    data-code-block-action="${x}">
              ${RhCodeBlock_1.actions.get(this.wrap && x === 'wrap' ? 'wrap-active' : x) ?? ''}
            </button>
          </rh-tooltip>`)}
        <!-- </slot> -->
        </div>

        <button id="expand"
                ?hidden="${!expandable}"
                @click="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onClickExpand)}">
          <slot name="show-more" ?hidden="${this.fullHeight}">Show more</slot>
          <slot name="show-less" ?hidden="${!this.fullHeight}">Show less</slot>
          <svg xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 11 7">
            <path d="M4.919.239.242 4.847a.801.801 0 0 0 0 1.148l.778.766a.83.83 0 0 0 1.165 0L5.5 3.495 8.815 6.76a.83.83 0 0 0 1.165 0l.778-.766a.802.802 0 0 0 0-1.148L6.08.239a.826.826 0 0 0-1.162 0Z"/>
          </svg>
        </button>
      </div>
      <slot name="legend" ?hidden="${__classPrivateFieldGet(this, _RhCodeBlock_slots, "f").isEmpty('legend')}"></slot>
    `;
    }
    firstUpdated() {
        __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this);
    }
    updated(changed) {
        if (changed.has('wrap')) {
            __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_wrapChanged).call(this);
        }
    }
};
_RhCodeBlock_slots = new WeakMap();
_RhCodeBlock_ro = new WeakMap();
_RhCodeBlock_lineHeights = new WeakMap();
_RhCodeBlock_instances = new WeakSet();
_RhCodeBlock_wrapChanged = function _RhCodeBlock_wrapChanged() {
    __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this);
    // TODO: handle slotted fabs
    const slot = this.shadowRoot?.querySelector('slot[name="action-label-wrap"]');
    for (const el of slot?.assignedElements() ?? []) {
        if (el instanceof HTMLElement) {
            el.hidden = (el.dataset.codeBlockState !== 'active') === this.wrap;
        }
    }
    this.requestUpdate();
};
_RhCodeBlock_computeLineNumbers = function _RhCodeBlock_computeLineNumbers() {
    const slot = this.shadowRoot?.getElementById('content');
    const codes = slot.assignedElements().flatMap(x => x instanceof HTMLScriptElement
        || x instanceof HTMLPreElement ? [x]
        : []);
    const infos = codes.map(element => {
        const sizer = document.createElement('span');
        sizer.className = 'sizer';
        sizer.innerText = '0';
        sizer.style.display = 'block';
        this.shadowRoot?.getElementById('sizers')?.appendChild(sizer);
        return {
            lines: element.textContent?.split(/\n(?!$)/g) ?? [],
            lineHeights: [],
            sizer,
            oneLinerHeight: sizer.getBoundingClientRect().height,
        };
    });
    for (const { lines, lineHeights, sizer, oneLinerHeight } of infos) {
        lineHeights[lines.length - 1] = undefined; // why?
        lines.forEach((line, i) => {
            if (line.length > 1) {
                const e = sizer.appendChild(document.createElement('span'));
                e.style.display = 'block';
                e.textContent = line;
            }
            else {
                lineHeights[i] = oneLinerHeight;
            }
        });
    }
    for (const { sizer, lineHeights } of infos) {
        let childIndex = 0;
        for (let i = 0; i < lineHeights.length; i++) {
            if (lineHeights[i] === undefined) {
                lineHeights[i] = sizer.children[childIndex++].getBoundingClientRect()?.height ?? 0;
            }
        }
        sizer.remove();
    }
    __classPrivateFieldSet(this, _RhCodeBlock_lineHeights, infos.flatMap(x => x.lineHeights?.map(y => `${y ?? x.oneLinerHeight}px`)), "f");
    this.requestUpdate('#linesNumbers', 0);
};
_RhCodeBlock_onActionsClick = function _RhCodeBlock_onActionsClick(event) {
    __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onCodeAction).call(this, event);
};
_RhCodeBlock_onActionsKeyup = function _RhCodeBlock_onActionsKeyup(event) {
    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault();
            __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onCodeAction).call(this, event);
    }
};
_RhCodeBlock_onCodeAction = function _RhCodeBlock_onCodeAction(event) {
    const el = event.composedPath().find((x) => x instanceof HTMLElement && !!x.dataset.codeBlockAction);
    if (el) {
        switch (el.dataset.codeBlockAction) {
            case 'copy':
                return __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_copy).call(this);
            case 'wrap':
                this.wrap = !this.wrap;
                this.requestUpdate();
                return;
        }
    }
};
_RhCodeBlock_onClickExpand = function _RhCodeBlock_onClickExpand() {
    this.fullHeight = !this.fullHeight;
};
_RhCodeBlock_copy = async function _RhCodeBlock_copy() {
    await navigator.clipboard.writeText(Array.from(this.querySelectorAll('script'), x => x.textContent).join(''));
    // TODO: handle slotted fabs
    const slot = this.shadowRoot?.querySelector('slot[name="action-label-copy"]');
    const tooltip = slot?.closest('rh-tooltip');
    tooltip?.hide();
    for (const el of slot?.assignedElements() ?? []) {
        if (el instanceof HTMLElement) {
            el.hidden = el.dataset.codeBlockState !== 'active';
        }
    }
    this.requestUpdate();
    tooltip?.show();
    await new Promise(r => setTimeout(r, 5000));
    tooltip?.hide();
    for (const el of slot?.assignedElements() ?? []) {
        if (el instanceof HTMLElement) {
            el.hidden = el.dataset.codeBlockState === 'active';
        }
    }
    this.requestUpdate();
    tooltip?.show();
};
RhCodeBlock.actions = new Map([
    ['wrap', html `
      <svg xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20">
        <path d="M19 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0ZM10.82 4.992C9.877 4.996 8.31 5.57 8.174 6c1.21.03 2.432-.073 3.635.08 2.181.383 3.677 2.796 3.066 4.922-.41 1.753-2.108 2.995-3.877 3.014L11 14H5.207l2.682-2.682-.707-.707L3.293 14.5l3.889 3.889.707-.707L5.207 15h5.736l.004-.008c1.444.005 2.896-.59 3.832-1.722 1.65-1.82 1.612-4.85-.08-6.63A5 5 0 0 0 11 5a1.948 1.948 0 0 0-.18-.008z"/>
        <path d="M4 5h7c-.039.313.077.781-.057 1H4V5ZM0 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0Z"/>
      </svg>
    `],
    ['wrap-active', html `
      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 21 20">
        <path fill="currentColor" d="M12 13h1v7h-1zM12 0h1v7h-1z"/>
        <path stroke="currentColor" d="M16.465 6.464 20 10l-3.535 3.536"/>
        <path fill="currentColor" d="M3 9.5h17v1H3zM0 0h1v20H0z"/>
      </svg>
    `],
    ['copy', html `
      <svg xmlns="http://www.w3.org/2000/svg"
           version="1.1"
           viewBox="0 0 20 20">
        <path fill="currentColor" d="M12 0H2C.9 0 0 .9 0 2v10h1V2c0-.6.4-1 1-1h10V0z"/>
        <path fill="currentColor" d="M18 20H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zM8 7c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H8z"/>
      </svg>
    `],
]);
RhCodeBlock.styles = [style];
__decorate([
    property({
        reflect: true,
        converter: {
            fromAttribute(value) {
                return ((value ?? '').split(/\s+/) ?? []).map(x => x.trim()).filter(Boolean);
            },
            toAttribute(value) {
                return Array.isArray(value) ? value.join(' ') : '';
            },
        },
    })
], RhCodeBlock.prototype, "actions", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhCodeBlock.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhCodeBlock.prototype, "resizable", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'full-height' })
], RhCodeBlock.prototype, "fullHeight", void 0);
__decorate([
    property({ type: Boolean })
], RhCodeBlock.prototype, "wrap", void 0);
__decorate([
    colorContextConsumer()
], RhCodeBlock.prototype, "on", void 0);
RhCodeBlock = RhCodeBlock_1 = __decorate([
    customElement('rh-code-block')
], RhCodeBlock);
export { RhCodeBlock };
/**
 * TODO: slotted fabs like this:
 *
 *```html
  <rh-tooltip slot="actions">
    <span slot="content">Copy to Clipboard</span>
    <span slot="content"
          hidden
          data-code-block-state="active">Copied!</span>
    <rh-fab icon="copy"
            data-code-block-action="copy"></rh-fab>
  </rh-tooltip>

  <rh-tooltip slot="actions">
    <span slot="content">Toggle linewrap</span>
    <span slot="content"
          hidden
          data-code-block-state="active">Toggle linewrap</span>
    <rh-fab icon="copy"
            data-code-block-action="copy"></rh-fab>
  </rh-tooltip>
  ````
 *
 */
//# sourceMappingURL=rh-code-block.js.map
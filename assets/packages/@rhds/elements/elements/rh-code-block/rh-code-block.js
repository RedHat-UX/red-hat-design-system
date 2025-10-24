var _RhCodeBlock_instances, _RhCodeBlock_logger, _RhCodeBlock_slots, _RhCodeBlock_prismOutput, _RhCodeBlock_isIntersecting, _RhCodeBlock_io, _RhCodeBlock_ro, _RhCodeBlock_lines, _RhCodeBlock_lineHeights, _RhCodeBlock_onSlotChange, _RhCodeBlock_applyPrismPrerenderedStyles, _RhCodeBlock_highlightWithPrism, _RhCodeBlock_wrapChanged, _RhCodeBlock_setSlottedLabelState, _RhCodeBlock_getSlottedCodeElements, _RhCodeBlock_computeLineNumbers, _RhCodeBlock_onActionsClick, _RhCodeBlock_onActionsKeyup, _RhCodeBlock_onCodeAction, _RhCodeBlock_onClickExpand, _RhCodeBlock_preCopy, _RhCodeBlock_copy;
var RhCodeBlock_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { CSSResult, LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const style = css `:host{--rh-code-block-callout-size:var(--rh-size-icon-02,24px);--_aspect-ratio:1;--_badge-size:var(--rh-code-block-callout-size);--_badge-padding:0;display:block;max-width:1000px;max-height:calc(var(--rh-space-4xl, 64px)*10)}:host([full-height]){--_expand-toggle-rotate:0deg;max-height:none}[hidden]{display:none!important}::slotted(pre){margin:0!important;padding:0!important;background:#0000!important;border:none!important}.shadow-fab{display:flex;align-items:center;justify-content:center;border:none;background:#0000;padding:var(--rh-space-md,8px);border-radius:var(--rh-border-radius-default,3px);width:var(--rh-length-3xl,48px);height:var(--rh-length-3xl,48px)}.shadow-fab:is(:hover,:focus,:active){background:var(--rh-color-surface)}.shadow-fab svg{width:var(--rh-size-icon-02,24px);height:var(--rh-size-icon-02,24px);color:var(--rh-color-text-primary)}#container,#content,#content-lines,#prism-output,#sizers{max-width:100%}#prism-output{margin:0}#prism-output code{font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit}#container{--_code-background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),oklch(from var(--rh-color-surface-dark,#383838) calc(l * 0.82) c h));--_code-main-spacer:var(--rh-space-xl,24px);--_cdata-color:var(--rh-color-text-secondary);--_comment-color:var(--rh-color-text-secondary);--_comment-block-color:var(--rh-color-text-secondary);--_doctype-color:var(--rh-color-text-secondary);--_default-color:light-dark(var(--rh-color-gray-95,#151515),var(--rh-color-gray-20,#e0e0e0));--_selected-text-background:light-dark(var(--rh-color-blue-10,#e0f0ff),var(--rh-color-gray-95,#151515));--_punctuation-color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-gray-20,#e0e0e0));--_namespace-color:light-dark(var(--rh-color-gray-95,#151515),var(--rh-color-red-40,#f56e6e));--_property-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-yellow-40,#dca614));--_tag-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-red-10,#fce3e3));--_boolean-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-orange-40,#f5921b));--_number-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-orange-40,#f5921b));--_constant-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-yellow-40,#dca614));--_symbol-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-yellow-40,#dca614));--_deleted-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-red-40,#f56e6e));--_function-name-color:light-dark(var(--rh-color-purple-50,#5e40be),var(--rh-color-teal-20,#b9e5e5));--_selector-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-purple-30,#b6a6e9));--_attr-name-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-red-40,#f56e6e));--_string-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-green-40,#87bb62));--_character-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-green-40,#87bb62));--_built-in-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-purple-30,#b6a6e9));--_inserted-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-green-40,#87bb62));--_operator-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-blue-40,#4394e5));--_entity-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-blue-40,#4394e5));--_url-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-blue-40,#4394e5));--_at-rule-color:light-dark(var(--rh-color-blue-60,#004d99),var(--rh-color-purple-30,#b6a6e9));--_attr-value-color:light-dark(var(--rh-color-blue-60,#004d99),var(--rh-color-green-40,#87bb62));--_keyword-color:light-dark(var(--rh-color-blue-60,#004d99),var(--rh-color-purple-30,#b6a6e9));--_function-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-orange-40,#f5921b));--_class-name-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-yellow-40,#dca614));--_regex-color:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-green-40,#87bb62));--_important-color:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-purple-30,#b6a6e9));--_variable-color:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-green-40,#87bb62));display:grid;content-visibility:auto;place-items:center;grid-template-columns:auto min-content;grid-template-areas:"code actions" "expand expand";column-gap:var(--_code-main-spacer);padding-inline-start:var(--_code-main-spacer);padding-block-end:var(--_code-main-spacer);border-radius:var(--rh-border-radius-default,3px);background-color:var(--_code-background-color);color:var(--rh-color-text-primary);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-block-start-width:var(--rh-code-block-border-block-start-width,var(--rh-border-width-sm,1px));--_gradient:linear-gradient(var(--_gradient-angle,0deg),var(--_code-background-color) 0%,#0000 100%)}#container.isIntersecting{content-visibility:visible}#container.expandable{padding-block-end:0}#content,#prism-output,#sizers{display:block;font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);z-index:1;place-self:start;grid-area:code}#content::slotted(:is(script,pre)),#prism-output,#sizers{display:inline;white-space:var(--_code-white-space,pre);word-wrap:var(--_code-word-wrap,initial);color:inherit}#content::slotted(:is(code[class*=language-],pre[class*=language-])){color:var(--_code-color);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:var(--rh-line-height-code,1.5);tab-size:4;hyphens:none;background:#0000}:host([highlighting=prerendered]) .wrap #content::slotted(pre[class*=language-]){white-space:pre-wrap}#content::slotted(rh-tag){width:var(--rh-size-icon-06,64px)}#content-lines{display:grid;column-gap:var(--rh-space-lg,16px);grid-area:code;grid-template-areas:"lines code";grid-template-columns:min-content 1fr;grid-template-rows:1fr;position:relative;overflow-y:auto;margin-block-start:var(--_code-main-spacer);width:100%}#sizers{position:absolute;min-width:100%;width:100%;opacity:0;pointer-events:none;z-index:-10000;line-height:var(--rh-line-height-code,1.5)}#line-numbers{pointer-events:none;overflow-y:hidden;margin:0;grid-area:lines;list-style-type:none;padding-inline:0 var(--rh-space-md,8px);text-align:end;font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);color:var(--rh-color-text-secondary);font-weight:var(--rh-font-weight-code-regular,400);border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#line-numbers li{line-height:var(--rh-line-height-code,1.5);display:block}#actions{display:flex;grid-area:actions;gap:var(--rh-space-md,8px);flex-flow:column;margin-block-start:var(--rh-space-lg,16px);margin-inline-end:var(--rh-space-lg,16px);z-index:2;place-self:start center;height:100%;position:relative;--_gradient-angle:270deg}#actions rh-tooltip{display:block}#expand{--_code-secondary-spacer:var(--rh-space-md,8px);display:inline-flex;align-items:center;border:0;background:#0000;grid-area:expand;gap:var(--rh-space-md,8px);inset-block-end:var(--_code-secondary-spacer);margin-block:var(--_code-secondary-spacer);color:var(--rh-color-text-primary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5)}#expand svg{width:11px;height:7px;rotate:var(--_expand-toggle-rotate,180deg);transform:rotate .2s ease-in-out;color:var(--rh-color-icon-secondary)}#container.compact{--_code-main-spacer:var(--rh-space-lg,16px);--_code-secondary-spacer:var(--rh-space-sm,6px)}.resizable #content-lines{resize:vertical;overflow-x:scroll}.truncated #content-lines{max-height:calc(var(--rh-font-size-code-md, 1rem)*8)}.truncated #content-lines:before{content:"";display:block;position:sticky;z-index:2;inset-block-end:0;inset-inline:0;height:var(--rh-space-3xl,48px);pointer-events:none;grid-column:-1/1;background:var(--_gradient)}:host([line-numbers=hidden]) #content-lines{grid-template-areas:"code";grid-template-columns:1fr}:host([line-numbers=hidden]) #line-numbers{display:none}:not(.wrap) #actions:before{content:"";display:block;position:absolute;z-index:2;inset-block:0;inset-inline-start:calc(var(--rh-space-4xl, 64px)*-1);width:var(--rh-space-4xl,64px);pointer-events:none;background:var(--_gradient)}:not(.actions) #actions{margin:0}.wrap{--_code-white-space:pre-wrap;--_code-word-wrap:anywhere}[name=legend]::slotted(dl){display:grid;grid-template-columns:max-content auto;margin-block:var(--rh-space-lg,16px);gap:var(--rh-space-md,8px)}:host([highlighting=client]) #content::slotted(:is(script,pre)){display:none}`;
/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param str indented string
 */
function dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    const out = match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
    return out.trim();
}
const prismApplyPromises = new WeakMap();
export class RhCodeBlockCopyEvent extends Event {
    constructor(
    /** Text content to copy */
    content) {
        super('copy', { bubbles: true, cancelable: true });
        this.content = content;
    }
}
/**
 * A code block applies special formatting to sections of code.
 *
 * @alias code-block
 *
 * @summary Formats code strings within a container
 * @event {RhCodeBlockCopyEvent} copy - fired when the user requests to copy the code block text.
 *                                      Modify the `event.content` field to change the copied text
 *                                      (e.g. to remove a prompt from a shell command)
 */
let RhCodeBlock = RhCodeBlock_1 = class RhCodeBlock extends LitElement {
    constructor() {
        super(...arguments);
        _RhCodeBlock_instances.add(this);
        /**
         * Space- or comma-separated list of code block action buttons to display, containing either 'copy', 'wrap', or both.
         * 'copy' adds a button that copies the text content to the clipboard. 'wrap' adds a button that toggles line wrap.
         *
         * To override the default labels, e.g. for purposes of internationalization, use the
         * `action-label-copy` and `action-label-wrap` slots. Each slot may receive two elements,
         * one for the action's default state (e.g. "Copy to clipboard"),
         * and one for the actions alternative state, e.g. "Copied!".
         * The active-state element must have the attributes `hidden data-code-block-state="active"`
         *
         * @example html```
         *          <rh-code-block actions="copy wrap">
         *            <span slot="action-label-copy">Copy to Clipboard</span>
         *            <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
         *            <span slot="action-label-copy" hidden data-code-block-state="failed">Copy failed!</span>
         *            <span slot="action-label-wrap">Toggle word wrap</span>
         *            <span slot="action-label-wrap" hidden data-code-block-state="active">Toggle overflow</span>
         *          </rh-code-block>
         *          ```
         */
        this.actions = [];
        /** When set, the code block displays with compact spacing */
        this.compact = false;
        /** When set, the code block source code will be dedented */
        this.dedent = false;
        /** When set, the code block is resizable */
        this.resizable = false;
        /** When set, the code block occupies it's full height, without scrolling */
        this.fullHeight = false;
        /** When set, lines in the code snippet wrap */
        this.wrap = false;
        this.copyButtonState = 'default';
        _RhCodeBlock_logger.set(this, new Logger(this));
        _RhCodeBlock_slots.set(this, new SlotController(this, null, 'action-label-copy', 'copy-failed', 'action-label-wrap', 'show-more', 'show-less', 'legend'));
        _RhCodeBlock_prismOutput.set(this, void 0);
        _RhCodeBlock_isIntersecting.set(this, false);
        _RhCodeBlock_io.set(this, new IntersectionObserver(rs => {
            const old = __classPrivateFieldGet(this, _RhCodeBlock_isIntersecting, "f");
            const isIntersecting = rs.some(r => r.isIntersecting);
            __classPrivateFieldSet(this, _RhCodeBlock_isIntersecting, isIntersecting, "f");
            if (old !== isIntersecting) {
                this.requestUpdate();
            }
            __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this);
        }, { rootMargin: '50% 0px' }));
        _RhCodeBlock_ro.set(this, new ResizeObserver(() => __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this)));
        _RhCodeBlock_lines.set(this, []);
        _RhCodeBlock_lineHeights.set(this, []);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            __classPrivateFieldGet(this, _RhCodeBlock_ro, "f").observe(this);
            __classPrivateFieldGet(this, _RhCodeBlock_io, "f").observe(this);
        }
        __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onSlotChange).call(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _RhCodeBlock_ro, "f").disconnect();
        __classPrivateFieldGet(this, _RhCodeBlock_io, "f").disconnect();
    }
    render() {
        const { fullHeight, wrap, resizable, compact } = this;
        const expandable = __classPrivateFieldGet(this, _RhCodeBlock_lines, "f").length > 5;
        const truncated = expandable && !fullHeight;
        const actions = !!this.actions.length;
        const isIntersecting = __classPrivateFieldGet(this, _RhCodeBlock_isIntersecting, "f");
        const actionCopyLabelledBy = this.copyButtonState === 'default' ?
            'copy-to-clipboard-label'
            : this.copyButtonState === 'active' ?
                'copied-label'
                : 'copy-failed-label';
        return html `
      <div id="container"
           class="${classMap({ actions, compact, expandable, fullHeight, isIntersecting, resizable, truncated, wrap })}"
           @code-action="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onCodeAction)}">
        <div id="content-lines" tabindex="${ifDefined((!fullHeight || undefined) && 0)}">
          <div id="sizers" aria-hidden="true"></div>
          <ol id="line-numbers" inert aria-hidden="true">${__classPrivateFieldGet(this, _RhCodeBlock_lineHeights, "f").map((height, i) => html `
            <li style="${styleMap({ height })}">${i + 1}</li>`)}
          </ol>
          <pre id="prism-output"
               class="language-${this.language}"
               ?hidden="${!__classPrivateFieldGet(this, _RhCodeBlock_prismOutput, "f")}">${__classPrivateFieldGet(this, _RhCodeBlock_prismOutput, "f")}</pre>
          <!--
            A non-executable script tag containing the sample content. JavaScript
            samples should use the type \`text/sample-javascript\`. HTML samples
            containing script tags must escape the closing \`</script>\` tag. Can
            also be a \`<pre>\` tag.
          -->
          <slot id="content"
                ?hidden="${!!__classPrivateFieldGet(this, _RhCodeBlock_prismOutput, "f")}"
                @slotchange="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onSlotChange)}"></slot>
        </div>

        <div id="actions"
             @click="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onActionsClick)}"
             @keyup="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onActionsKeyup)}">
        ${!this.actions.includes('copy') ? '' : html `
          <rh-tooltip silent>
            <!-- Tooltip content for the copy action button -->
            <slot slot="content" name="action-label-copy">
              <span ?hidden="${this.copyButtonState !== 'default'}" id="copy-to-clipboard-label">Copy to Clipboard</span>
              <span ?hidden="${this.copyButtonState !== 'active'}" id="copied-label">Copied!</span>
              <span ?hidden="${this.copyButtonState !== 'failed'}" id="copy-failed-label">Copy failed!</span>
            </slot>
            <button id="action-copy"
                   class="shadow-fab"
                   data-code-block-action="copy"
                   aria-labelledby="${actionCopyLabelledBy}">
             ${RhCodeBlock_1.actionIcons.get('copy')}
            </button>
          </rh-tooltip>`}
          ${!this.actions.includes('wrap') ? '' : html `
            <rh-tooltip silent>
             <!-- Tooltip content for the wrap action button -->
             <slot id="label-wrap" slot="content" name="action-label-wrap">
               <span ?hidden="${this.wrap}">Toggle word wrap</span>
               <span ?hidden="${!this.wrap}"
                     data-code-block-state="active">Toggle overflow</span>
             </slot>
             <button id="action-wrap"
                     class="shadow-fab"
                     data-code-block-action="wrap"
                     aria-labelledby="label-wrap">
               ${RhCodeBlock_1.actionIcons.get(this.wrap ? 'wrap-active' : 'wrap')}
             </button>
            </rh-tooltip>
          `}
        </div>

        <button id="expand"
                ?hidden="${!expandable}"
                aria-controls="content-lines"
                aria-expanded="${String(!!fullHeight)}"
                @click="${__classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_onClickExpand)}"
                aria-labelledby="${this.fullHeight === true ? 'show-less-label' : 'show-more-label'}">
          <span ?hidden="${this.fullHeight}" id="show-more-label">
            <!-- text content for the expandable toggle button when the code block is collapsed. -->
            <slot name="show-more">Show more</slot>
          </span>
          <span ?hidden="${!this.fullHeight}" id="show-less-label">
          <!-- text content for the expandable toggle button when the code block is expanded. -->
            <slot name="show-less">Show less</slot>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 11 7">
            <path d="M4.919.239.242 4.847a.801.801 0 0 0 0 1.148l.778.766a.83.83 0 0 0 1.165 0L5.5 3.495 8.815 6.76a.83.83 0 0 0 1.165 0l.778-.766a.802.802 0 0 0 0-1.148L6.08.239a.826.826 0 0 0-1.162 0Z"/>
          </svg>
        </button>
      </div>

      <!-- \`<dl>\` element containing rh-badges in the \`<dt>\` and legend text in the \`<dd>\` elements -->
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
        if (this.actions.length && !isServer) {
            import('@rhds/elements/rh-tooltip/rh-tooltip.js');
        }
    }
};
_RhCodeBlock_logger = new WeakMap();
_RhCodeBlock_slots = new WeakMap();
_RhCodeBlock_prismOutput = new WeakMap();
_RhCodeBlock_isIntersecting = new WeakMap();
_RhCodeBlock_io = new WeakMap();
_RhCodeBlock_ro = new WeakMap();
_RhCodeBlock_lines = new WeakMap();
_RhCodeBlock_lineHeights = new WeakMap();
_RhCodeBlock_instances = new WeakSet();
_RhCodeBlock_onSlotChange = async function _RhCodeBlock_onSlotChange() {
    switch (this.highlighting) {
        case 'client':
            await __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_highlightWithPrism).call(this);
            break;
        // TODO: if we ever support other tokenizers e.g. highlightjs,
        // dispatch here off of some supplemental attribute like `tokenizer="highlightjs"`
        case 'prerendered':
            await __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_applyPrismPrerenderedStyles).call(this);
            break;
    }
    __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this);
};
_RhCodeBlock_applyPrismPrerenderedStyles = async function _RhCodeBlock_applyPrismPrerenderedStyles() {
    let root;
    if (!isServer && !prismApplyPromises.has((root = this.getRootNode()))) {
        if (root instanceof Document || root instanceof ShadowRoot) {
            prismApplyPromises.set(root, (async function () {
                const { preRenderedLightDomStyles: { styleSheet } } = await import('./prism.css.js');
                root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
            })());
        }
    }
};
_RhCodeBlock_highlightWithPrism = async function _RhCodeBlock_highlightWithPrism() {
    if (!isServer) {
        const { highlight, prismStyles } = await import('./prism.js');
        const styleSheet = prismStyles instanceof CSSStyleSheet ? prismStyles
            : prismStyles.styleSheet;
        if (!this.shadowRoot.adoptedStyleSheets.includes(styleSheet)) {
            this.shadowRoot.adoptedStyleSheets = [
                ...this.shadowRoot.adoptedStyleSheets,
                styleSheet,
            ];
        }
        const scripts = this.querySelectorAll('script[type]:not([type="javascript"])');
        const preprocess = this.dedent ? dedent : (x) => x;
        const textContent = preprocess(Array.from(scripts, x => x.textContent).join(''));
        __classPrivateFieldSet(this, _RhCodeBlock_prismOutput, await highlight(textContent, this.language), "f");
        this.requestUpdate('#prismOutput', {});
        await this.updateComplete;
    }
};
_RhCodeBlock_wrapChanged = async function _RhCodeBlock_wrapChanged() {
    await this.updateComplete;
    __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_computeLineNumbers).call(this);
    __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_setSlottedLabelState).call(this, 'action-label-wrap', this.wrap ? 'active' : undefined);
};
_RhCodeBlock_setSlottedLabelState = function _RhCodeBlock_setSlottedLabelState(slotName, state) {
    if (__classPrivateFieldGet(this, _RhCodeBlock_slots, "f").hasSlotted(slotName)) {
        for (const el of __classPrivateFieldGet(this, _RhCodeBlock_slots, "f").getSlotted(slotName)) {
            if (el instanceof HTMLElement) {
                el.hidden = el.dataset.codeBlockState !== state;
            }
        }
    }
};
_RhCodeBlock_getSlottedCodeElements = function _RhCodeBlock_getSlottedCodeElements() {
    const slot = this.shadowRoot?.getElementById('content');
    return slot.assignedElements().flatMap(x => x instanceof HTMLScriptElement
        || x instanceof HTMLPreElement ? [x]
        : []);
};
_RhCodeBlock_computeLineNumbers = 
/**
 * Clone the text content and connect it to the document, in order to calculate the number of lines
 * @license MIT
 * Portions copyright prism.js authors (MIT license)
 */
async function _RhCodeBlock_computeLineNumbers() {
    if (!__classPrivateFieldGet(this, _RhCodeBlock_isIntersecting, "f")) {
        return;
    }
    await this.updateComplete;
    const codes = __classPrivateFieldGet(this, _RhCodeBlock_prismOutput, "f") ? [this.shadowRoot?.getElementById('prism-output')].filter(x => !!x)
        : __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_getSlottedCodeElements).call(this);
    __classPrivateFieldSet(this, _RhCodeBlock_lines, codes.flatMap(element => element.textContent?.split(/\n(?!$)/g) ?? []), "f");
    if (this.lineNumbers === 'hidden') {
        return;
    }
    const infos = codes.map(element => {
        const codeElement = __classPrivateFieldGet(this, _RhCodeBlock_prismOutput, "f") ? element.querySelector('code') : element;
        if (codeElement) {
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
        }
    }).filter(x => !!x);
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
            return;
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
_RhCodeBlock_preCopy = function _RhCodeBlock_preCopy() {
    let content;
    if (this.highlighting === 'prerendered') {
        content =
            Array.from(this.querySelectorAll('pre'), x => x?.textContent ?? '').join('');
    }
    else {
        content = Array.from(this.querySelectorAll('script'), x => x.textContent).join('');
    }
    const event = new RhCodeBlockCopyEvent(content);
    if (!this.dispatchEvent(event) || event.defaultPrevented) {
        throw new Error('copy cancelled');
    }
    return event.content;
};
_RhCodeBlock_copy = async function _RhCodeBlock_copy() {
    const slot = this.shadowRoot?.querySelector('slot[name="action-label-copy"]');
    const tooltip = slot?.closest('rh-tooltip');
    if (!tooltip) {
        return;
    }
    try {
        tooltip.hide();
        const content = __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_preCopy).call(this);
        await navigator.clipboard.writeText(content);
        this.copyButtonState = 'active';
        __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_setSlottedLabelState).call(this, 'action-label-copy', 'active');
    }
    catch (error) {
        __classPrivateFieldGet(this, _RhCodeBlock_logger, "f").error(error);
        this.copyButtonState = 'failed';
        __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_setSlottedLabelState).call(this, 'action-label-copy', 'failed');
    }
    tooltip.show();
    await new Promise(r => setTimeout(r, 5000));
    tooltip.hide();
    this.copyButtonState = 'default';
    __classPrivateFieldGet(this, _RhCodeBlock_instances, "m", _RhCodeBlock_setSlottedLabelState).call(this, 'action-label-copy', undefined);
    tooltip.show();
};
RhCodeBlock.actionIcons = new Map([
    ['wrap', html `
      <svg xmlns="http://www.w3.org/2000/svg"
           role="presentation"
           fill="currentColor"
           viewBox="0 0 20 20">
        <path d="M19 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0ZM10.82 4.992C9.877 4.996 8.31 5.57 8.174 6c1.21.03 2.432-.073 3.635.08 2.181.383 3.677 2.796 3.066 4.922-.41 1.753-2.108 2.995-3.877 3.014L11 14H5.207l2.682-2.682-.707-.707L3.293 14.5l3.889 3.889.707-.707L5.207 15h5.736l.004-.008c1.444.005 2.896-.59 3.832-1.722 1.65-1.82 1.612-4.85-.08-6.63A5 5 0 0 0 11 5a1.948 1.948 0 0 0-.18-.008z"/>
        <path d="M4 5h7c-.039.313.077.781-.057 1H4V5ZM0 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0Z"/>
      </svg>
    `],
    ['wrap-active', html `
      <svg xmlns="http://www.w3.org/2000/svg"
           role="presentation"
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
                return ((value ?? '').split(/\s+|,/) ?? []).map(x => x.trim()).filter(Boolean);
            },
            toAttribute(value) {
                return Array.isArray(value) ? value.join(' ') : '';
            },
        },
    })
], RhCodeBlock.prototype, "actions", void 0);
__decorate([
    property()
], RhCodeBlock.prototype, "highlighting", void 0);
__decorate([
    property()
], RhCodeBlock.prototype, "language", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhCodeBlock.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhCodeBlock.prototype, "dedent", void 0);
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
    property({ reflect: true, attribute: 'line-numbers' })
], RhCodeBlock.prototype, "lineNumbers", void 0);
__decorate([
    state()
], RhCodeBlock.prototype, "copyButtonState", void 0);
RhCodeBlock = RhCodeBlock_1 = __decorate([
    customElement('rh-code-block'),
    themable
], RhCodeBlock);
export { RhCodeBlock };
//# sourceMappingURL=rh-code-block.js.map
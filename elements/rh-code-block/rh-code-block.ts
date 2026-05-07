import { CSSResult, LitElement, type TemplateResult, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-code-block.css' with { type: 'css' };

import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param str indented string
 */
function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  const out = match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
  return out.trim();
}

const prismApplyPromises = new WeakMap();

/**
 * Fired when the user activates the copy button via click, Enter, or Space.
 * Provides `content` (string) for clipboard use. Listeners SHOULD modify
 * `content` to strip prompts. MUST call `preventDefault()` to cancel.
 * Screen reader users activate this via the keyboard-accessible button.
 */
export class RhCodeBlockCopyEvent extends Event {
  constructor(
    /** Text content to copy */
    public content: string
  ) {
    super('copy', { bubbles: true, cancelable: true });
  }
}

/**
 * A read-only code viewer for formatted snippets that allows syntax
 * highlighting, line numbers, and copy/wrap actions. Source must be
 * in a `<script type="text/sample-...">` or `<pre>` child. The code
 * region is keyboard-scrollable; screen readers announce it via ARIA
 * as a scrollable area. Authors should avoid nesting interactive
 * elements inside the code slot.
 *
 * @summary Formats code strings within a container
 *
 * @alias code-block
 *
 * @fires {RhCodeBlockCopyEvent} copy - Fired when the user clicks the copy
 *        action button or activates it with Enter/Space. The event's
 *        `content` field (string) contains the text to copy. Listeners MAY
 *        modify `event.content` to alter the copied text (e.g. to strip a
 *        shell prompt). Call `event.preventDefault()` to cancel the copy.
 */
@customElement('rh-code-block')
@themable
export class RhCodeBlock extends LitElement {
  private static actionIcons = new Map([
    ['wrap', html`
      <rh-icon set="ui" icon="wrap-text"></rh-icon>
    `],
    ['wrap-active', html`
      <rh-icon set="ui" icon="overflow-text"></rh-icon>
    `],
    ['copy', html`
      <rh-icon set="ui" icon="copy"></rh-icon>
    `],
  ]);

  static styles = [style];

  /**
   * Space- or comma-separated list of action buttons to display.
   * Accepts `'copy'`, `'wrap'`, or both (e.g. `"copy wrap"`). `'copy'` adds a
   * clipboard button; `'wrap'` adds a word-wrap toggle. Defaults to `[]`
   * (no actions shown). Labels can be overridden via the `action-label-copy`
   * and `action-label-wrap` slots for internationalization. The active-state
   * element must have `hidden data-code-block-state="active"`.
   *
   * @example ```html
   *          <rh-code-block actions="copy wrap">
   *            <span slot="action-label-copy">Copy to Clipboard</span>
   *            <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
   *            <span slot="action-label-copy" hidden data-code-block-state="failed">Copy failed!</span>
   *            <span slot="action-label-wrap">Toggle word wrap</span>
   *            <span slot="action-label-wrap" hidden data-code-block-state="active">Toggle overflow</span>
   *          </rh-code-block>
   *          ```
   */
  @property({
    reflect: true,
    converter: {
      /**
       * Converts the HTML attribute string to an array of action names.
       * Splits on spaces or commas, trims whitespace, and filters empty values.
       * @param value - Attribute string like "copy wrap" or "copy, wrap"
       * @returns Array of action names
       */
      fromAttribute(value) {
        return ((value ?? '').split(/\s+|,/) ?? []).map(x => x.trim()).filter(Boolean);
      },
      /**
       * Converts the array of action names to an HTML attribute string.
       * Joins array values with spaces.
       * @param value - Array of action names
       * @returns Space-separated string of actions
       */
      toAttribute(value) {
        return Array.isArray(value) ? value.join(' ') : '';
      },
    },
  }) actions: ('copy' | 'wrap')[] = [];

  /**
   * Controls how syntax highlighting is applied. Accepts `'client'` or
   * `'prerendered'`. When `'client'`, Prism.js is loaded on-demand and
   * highlights source from `<script>` children. When `'prerendered'`,
   * RHDS token colors are applied to existing Prism class names in child
   * `<pre>` elements. Defaults to `undefined` (no highlighting).
   */
  @property() highlighting?: 'client' | 'prerendered';

  /**
   * Specifies the Prism.js grammar for client-side highlighting. Requires
   * `highlighting="client"`. Accepts `'html'` | `'css'` | `'javascript'` |
   * `'typescript'` | `'bash'` | `'ruby'` | `'yaml'` | `'json'`. Defaults
   * to `undefined`. When omitted, no syntax coloring is applied.
   */
  @property() language?:
    | 'html'
    | 'css'
    | 'javascript'
    | 'typescript'
    | 'bash'
    | 'ruby'
    | 'yaml'
    | 'json';

  /** When true, reduces internal padding for tighter layouts. Defaults to false. */
  @property({ type: Boolean, reflect: true }) compact = false;

  /** When true, strips common leading whitespace from source lines before rendering. Defaults to false. */
  @property({ type: Boolean, reflect: true }) dedent = false;

  /** When true, allows the user to vertically resize the code area by dragging. Defaults to false. */
  @property({ type: Boolean, reflect: true }) resizable = false;

  /** When true, the code block expands to its full height without scroll truncation. Defaults to false. */
  @property({ type: Boolean, reflect: true, attribute: 'full-height' }) fullHeight = false;

  /** When true, long lines wrap instead of scrolling horizontally. Defaults to false. */
  @property({ type: Boolean }) wrap = false;

  /** Controls line-number visibility. Accepts `'hidden'` or `'visible'`. When `'hidden'`, the gutter column is removed. Defaults to `undefined` (visible). */
  @property({ reflect: true, attribute: 'line-numbers' }) lineNumbers?: 'hidden' | 'visible';

  @state() private copyButtonState: 'default' | 'active' | 'failed' = 'default';

  #logger = new Logger(this);

  #slots = new SlotController(
    this,
    null,
    'action-label-copy',
    'copy-failed',
    'action-label-wrap',
    'show-more',
    'show-less',
    'legend',
  );

  #prismHighlightedHtml?: string;

  #copyFeedbackTimeout?: ReturnType<typeof setTimeout>;

  #lines: string[] = [];
  #wrappedLines: TemplateResult[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.#onSlotChange();
  }

  render() {
    const { fullHeight, wrap, resizable, compact } = this;
    const lineNumbers = this.lineNumbers !== 'hidden';
    const expandable = this.#lines.length > 5;
    const truncated = expandable && !fullHeight;
    const actions = !!this.actions.length;
    const hasWrappedLines = this.#wrappedLines.length > 0;
    const actionCopyLabelledBy =
       this.copyButtonState === 'default' ?
         'copy-to-clipboard-label'
         : this.copyButtonState === 'active' ?
           'copied-label'
           : 'copy-failed-label';
    return html`
      <div id="container"
           class="${classMap({ actions, compact, expandable, fullHeight, resizable, truncated, wrap, 'line-numbers': lineNumbers })}"
           @code-action="${this.#onCodeAction}">
        <div id="content-lines" tabindex="${ifDefined((!fullHeight || undefined) && 0)}">
          <div id="code-with-line-numbers"
               class="language-${this.language}"
               ?hidden="${!hasWrappedLines}"
               aria-hidden="true"
               inert>${this.#wrappedLines}</div>
          <!-- summary: code content (default slot)
               description: |
                 Expects a non-executable \`<script type="text/sample-...">\` or \`<pre>\`
                 element containing source code. JavaScript samples should use
                 \`type="text/sample-javascript"\`. This region is keyboard-scrollable
                 and exposed to assistive technology as a scrollable code area;
                 avoid placing focusable or interactive children here. -->
          <slot id="content"
                ?hidden="${hasWrappedLines}"
                @slotchange="${this.#onSlotChange}"></slot>
        </div>

        <div id="actions"
             @click="${this.#onActionsClick}"
             @keyup="${this.#onActionsKeyup}">
        ${!this.actions.includes('copy') ? '' : html`
          <rh-tooltip silent>
            <!-- summary: copy button label (action-label-copy slot)
                 description: |
                   Expects inline text or \`<span>\` elements providing labels for
                   the copy button's default, active, and failed states. Wired to
                   \`aria-labelledby\` so screen readers announce the current state. -->
            <slot slot="content" name="action-label-copy">
              <span ?hidden="${this.copyButtonState !== 'default'}" id="copy-to-clipboard-label">Copy to Clipboard</span>
              <span ?hidden="${this.copyButtonState !== 'active'}" id="copied-label">Copied!</span>
              <span ?hidden="${this.copyButtonState !== 'failed'}" id="copy-failed-label">Copy failed!</span>
            </slot>
            <button id="action-copy"
                   class="shadow-fab"
                   data-code-block-action="copy"
                   aria-labelledby="${actionCopyLabelledBy}">
             ${RhCodeBlock.actionIcons.get('copy')}
            </button>
          </rh-tooltip>`}
          ${!this.actions.includes('wrap') ? '' : html`
            <rh-tooltip silent>
             <!-- summary: wrap button label (action-label-wrap slot)
                  description: |
                    Expects inline text or \`<span>\` elements providing labels for
                    the wrap toggle's default and active states. Wired to
                    \`aria-labelledby\` so screen readers announce the current state. -->
             <slot id="label-wrap" slot="content" name="action-label-wrap">
               <span ?hidden="${this.wrap}">Toggle word wrap</span>
               <span ?hidden="${!this.wrap}"
                     data-code-block-state="active">Toggle overflow</span>
             </slot>
             <button id="action-wrap"
                     class="shadow-fab"
                     data-code-block-action="wrap"
                     aria-labelledby="label-wrap">
               ${RhCodeBlock.actionIcons.get(this.wrap ? 'wrap-active' : 'wrap')}
             </button>
            </rh-tooltip>
          `}
        </div>

        <button id="expand"
                ?hidden="${!expandable}"
                aria-controls="content-lines"
                aria-expanded="${String(!!fullHeight) as 'true' | 'false'}"
                @click="${this.#onClickExpand}"
                aria-labelledby="${this.fullHeight === true ? 'show-less-label' : 'show-more-label'}">
          <span ?hidden="${this.fullHeight}" id="show-more-label">
            <!-- summary: collapsed toggle label (show-more slot)
                 description: |
                   Expects inline text for the expand button when code is collapsed.
                   Defaults to "Show more". Wired to \`aria-labelledby\` so screen
                   readers announce it as the button's accessible name. -->
            <slot name="show-more">Show more</slot>
          </span>
          <span ?hidden="${!this.fullHeight}" id="show-less-label">
          <!-- summary: expanded toggle label (show-less slot)
               description: |
                 Expects inline text for the collapse button when code is expanded.
                 Defaults to "Show less". Wired to \`aria-labelledby\` so screen
                 readers announce it as the button's accessible name. -->
            <slot name="show-less">Show less</slot>
          </span>
          <rh-icon set="microns" icon="caret-up"></rh-icon>
        </button>
      </div>

      <!-- summary: code callout legend (legend slot)
           description: |
             Expects a \`<dl>\` element containing \`<rh-badge>\` in \`<dt>\` and legend
             text in \`<dd>\` elements. Provides a key for callout annotations
             within the code block. Screen readers announce the list structure
             so users can correlate badges with their descriptions. Hidden when
             no content is slotted. -->
      <slot name="legend" ?hidden="${this.#slots.isEmpty('legend')}"></slot>
    `;
  }

  protected override firstUpdated(): void {
    this.#computeLines();
    switch (this.highlighting) {
      case 'prerendered': this.#wrapPrerenderedLines(); break;
      case 'client': break;
      default: this.#wrapDefaultContent(); break;
    }
  }

  protected override updated(changed: PropertyValues<this>): void {
    if (changed.has('wrap')) {
      this.#wrapChanged();
    }
    if (this.actions.length && !isServer) {
      import('@rhds/elements/rh-tooltip/rh-tooltip.js');
    }
  }

  async #onSlotChange() {
    switch (this.highlighting) {
      case 'client': await this.#highlightWithPrism(); break;
      // TODO: if we ever support other tokenizers e.g. highlightjs,
      // dispatch here off of some supplemental attribute like `tokenizer="highlightjs"`
      case 'prerendered': await this.#applyPrismPrerenderedStyles(); break;
      default: this.#wrapDefaultContent(); break;
    }
    await this.#computeLines();
    if (this.highlighting === 'prerendered') {
      this.#wrapPrerenderedLines();
    }
  }

  async #applyPrismPrerenderedStyles() {
    let root: Node;
    if (!isServer && !prismApplyPromises.has((root = this.getRootNode()))) {
      if (root instanceof Document || root instanceof ShadowRoot) {
        prismApplyPromises.set(root, (async function() {
          const { preRenderedLightDomStyles: { styleSheet } } = await import('./prism.css.js');
          root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet!];
        })());
      }
    }
  }

  async #highlightWithPrism() {
    if (!isServer) {
      const { highlight, prismStyles } = await import('./prism.js');
      const styleSheet =
          prismStyles instanceof CSSStyleSheet ? prismStyles
        : (prismStyles as CSSResult).styleSheet;
      if (!this.shadowRoot!.adoptedStyleSheets.includes(styleSheet!)) {
        this.shadowRoot!.adoptedStyleSheets = [
          ...this.shadowRoot!.adoptedStyleSheets as CSSStyleSheet[],
          styleSheet!,
        ];
      }
      const scripts = this.querySelectorAll('script[type]:not([type="javascript"])');
      const preprocess = this.dedent ? dedent : (x: string) => x;
      const textContent = preprocess(Array.from(scripts, x => x.textContent).join(''));
      this.#prismHighlightedHtml = await highlight(textContent, this.language);
      this.#wrapLinesInSpans(this.#prismHighlightedHtml);
      await this.updateComplete;
    }
  }

  #wrapLinesInSpans(htmlContent?: string) {
    if (!htmlContent) {
      this.#wrappedLines = [];
      return;
    }
    const lines = htmlContent.split('\n');
    this.#wrappedLines = lines.map(line => html`
      <span class="line"><span class="line-content">${unsafeHTML(line || ' ')}</span></span>`);
    this.requestUpdate();
  }

  #wrapDefaultContent() {
    if (isServer) {
      return;
    }
    const scripts = this.querySelectorAll('script[type]:not([type="javascript"])');
    const preprocess = this.dedent ? dedent : (x: string) => x;
    const textContent = preprocess(Array.from(scripts, x => x.textContent).join(''));
    if (textContent) {
      const div = document.createElement('div');
      div.textContent = textContent;
      this.#wrapLinesInSpans(div.innerHTML);
    }
  }

  #wrapPrerenderedLines() {
    if (isServer || this.highlighting !== 'prerendered') {
      return;
    }
    const codes = this.querySelectorAll('code[class*="language-"]');
    if (codes.length !== 1) {
      return;
    }
    const [code] = codes;
    if (code.querySelector('.rh-code-block-line')) {
      return;
    }
    this.#wrapLinesInSpans(code.innerHTML);
  }

  async #wrapChanged() {
    await this.updateComplete;
    this.#setSlottedLabelState('action-label-wrap', this.wrap ? 'active' : undefined);
  }

  #setSlottedLabelState(slotName: 'action-label-copy' | 'action-label-wrap', state?: string) {
    if (this.#slots.hasSlotted(slotName)) {
      for (const el of this.#slots.getSlotted(slotName)) {
        if (el instanceof HTMLElement) {
          el.hidden = el.dataset.codeBlockState !== state;
        }
      }
    }
  }

  #getSlottedCodeElements() {
    const slot = this.shadowRoot?.getElementById('content') as HTMLSlotElement;
    return slot.assignedElements().flatMap(x =>
        x instanceof HTMLScriptElement
        || x instanceof HTMLPreElement ? [x]
      : []);
  }

  async #computeLines() {
    await this.updateComplete;
    if (this.#prismHighlightedHtml) {
      this.#lines = this.#prismHighlightedHtml.split(/\n(?!$)/g);
    } else {
      const codes = this.#getSlottedCodeElements();
      this.#lines = codes.flatMap(element =>
        element.textContent?.split(/\n(?!$)/g) ?? []);
    }
    this.requestUpdate();
  }

  #onActionsClick(event: Event) {
    this.#onCodeAction(event);
  }

  #onActionsKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        return;
      case ' ':
        event.preventDefault();
        this.#onCodeAction(event);
    }
  }

  #onCodeAction(event: Event) {
    const el = event.composedPath().find((x: EventTarget): x is HTMLElement =>
      x instanceof HTMLElement && !!x.dataset.codeBlockAction);
    if (el) {
      switch (el.dataset.codeBlockAction) {
        case 'copy':
          return this.#copy();
        case 'wrap':
          this.wrap = !this.wrap;
          this.requestUpdate();
          return;
      }
    }
  }

  #onClickExpand() {
    this.fullHeight = !this.fullHeight;
  }

  #preCopy() {
    let content: string;
    if (this.highlighting === 'prerendered') {
      content =
        Array.from(
          this.querySelectorAll('pre'),
          x => x?.textContent ?? '',
        ).join('');
    } else {
      content = Array.from(
        this.querySelectorAll('script'),
        x => x.textContent,
      ).join('');
    }
    const event = new RhCodeBlockCopyEvent(content);
    if (!this.dispatchEvent(event) || event.defaultPrevented) {
      throw new Error('copy cancelled');
    }
    return event.content;
  }

  async #copy() {
    const slot =
      this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="action-label-copy"]');
    const tooltip =
      slot?.closest('rh-tooltip');
    if (!tooltip) {
      return;
    }

    // Cancel any previous feedback timeout to prevent stale timers
    // from interfering when the user clicks copy multiple times
    clearTimeout(this.#copyFeedbackTimeout);

    try {
      tooltip.hide();
      const content = this.#preCopy();
      await navigator.clipboard.writeText(content);
      this.copyButtonState = 'active';
      this.#setSlottedLabelState('action-label-copy', 'active');
    } catch (error) {
      this.#logger.error(error);
      this.copyButtonState = 'failed';
      this.#setSlottedLabelState('action-label-copy', 'failed');
    }
    tooltip.show();
    await new Promise<void>(r => {
      this.#copyFeedbackTimeout = setTimeout(r, 5_000);
    });
    await tooltip.hide();
    // Wait for the tooltip's CSS opacity transition to finish
    // before resetting the label, so the text doesn't flash
    // from "Copied!" to "Copy to Clipboard" while still visible
    const tooltipContent = tooltip.shadowRoot?.querySelector('#tooltip');
    await new Promise<void>(r => {
      tooltipContent?.addEventListener('transitionend', () => r(), { once: true });
      // fallback in case no transition fires (e.g. reduced motion)
      setTimeout(r, 300);
    });
    this.copyButtonState = 'default';
    this.#setSlottedLabelState('action-label-copy', undefined);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}

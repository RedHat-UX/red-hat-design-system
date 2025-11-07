import type { DirectiveResult } from 'lit-html/directive.js';
import { CSSResult, LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-code-block.css';

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML.
 * This function removes leading whitespace that is common to all lines, making code samples
 * more readable when they are indented in template literals.
 *
 * @param str - The indented string to process
 * @returns The dedented string with common leading whitespace removed and trimmed
 *
 * @example
 * ```ts
 * const code = dedent(`
 *     function hello() {
 *       console.log('world');
 *     }
 *   `);
 * // Returns: "function hello() {\n  console.log('world');\n}"
 * ```
 */
function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  const out = match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
  return out.trim();
}

/**
 * Information about code line heights used for calculating line number positioning.
 * This interface is used internally to track the computed heights of individual lines
 * in the code block for proper alignment with line numbers.
 */
interface CodeLineHeightsInfo {
  /** Array of text content for each line */
  lines: string[];
  /** Array of computed heights for each line in pixels (undefined if not yet calculated) */
  lineHeights: (number | undefined)[];
  /** Temporary DOM element used to measure line heights */
  sizer: HTMLElement;
  /** The height of a single line of text in pixels */
  oneLinerHeight: number;
}

/**
 * WeakMap to track which document/shadow roots have already had Prism styles applied.
 * This prevents duplicate style injection when multiple code blocks use prerendered highlighting.
 * @internal
 */
const prismApplyPromises = new WeakMap();

/**
 * requestIdleCallback when available, requestAnimationFrame when not
 * @param f callback
 */
const ric: typeof globalThis.requestIdleCallback =
     globalThis.requestIdleCallback
  ?? globalThis.requestAnimationFrame
  ?? (async (f: () => void) => Promise.resolve().then(f));

/**
 * Custom event fired when the user requests to copy the code block content.
 * The event is cancelable and allows modification of the copied content before
 * it is written to the clipboard.
 *
 * @example
 * ```ts
 * codeBlock.addEventListener('copy', (event) => {
 *   // Remove shell prompts from the copied text
 *   event.content = event.content.replace(/^\$ /gm, '');
 * });
 * ```
 */
export class RhCodeBlockCopyEvent extends Event {
  /**
   * Creates a new RhCodeBlockCopyEvent
   * @param content - The text content to copy to clipboard
   */
  constructor(
    /** Text content to copy */
    public content: string
  ) {
    super('copy', { bubbles: true, cancelable: true });
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
@customElement('rh-code-block')
@themable
export class RhCodeBlock extends LitElement {
  private static actionIcons = new Map([
    ['wrap', html`
      <svg xmlns="http://www.w3.org/2000/svg"
           role="presentation"
           fill="currentColor"
           viewBox="0 0 20 20">
        <path d="M19 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0ZM10.82 4.992C9.877 4.996 8.31 5.57 8.174 6c1.21.03 2.432-.073 3.635.08 2.181.383 3.677 2.796 3.066 4.922-.41 1.753-2.108 2.995-3.877 3.014L11 14H5.207l2.682-2.682-.707-.707L3.293 14.5l3.889 3.889.707-.707L5.207 15h5.736l.004-.008c1.444.005 2.896-.59 3.832-1.722 1.65-1.82 1.612-4.85-.08-6.63A5 5 0 0 0 11 5a1.948 1.948 0 0 0-.18-.008z"/>
        <path d="M4 5h7c-.039.313.077.781-.057 1H4V5ZM0 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0Z"/>
      </svg>
    `],
    ['wrap-active', html`
      <svg xmlns="http://www.w3.org/2000/svg"
           role="presentation"
           fill="none"
           viewBox="0 0 21 20">
        <path fill="currentColor" d="M12 13h1v7h-1zM12 0h1v7h-1z"/>
        <path stroke="currentColor" d="M16.465 6.464 20 10l-3.535 3.536"/>
        <path fill="currentColor" d="M3 9.5h17v1H3zM0 0h1v20H0z"/>
      </svg>
    `],
    ['copy', html`
      <svg xmlns="http://www.w3.org/2000/svg"
           version="1.1"
           viewBox="0 0 20 20">
        <path fill="currentColor" d="M12 0H2C.9 0 0 .9 0 2v10h1V2c0-.6.4-1 1-1h10V0z"/>
        <path fill="currentColor" d="M18 20H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zM8 7c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H8z"/>
      </svg>
    `],
  ]);

  static styles = [style];

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
  @property({
    reflect: true,
    converter: {
      fromAttribute(value) {
        return ((value ?? '').split(/\s+|,/) ?? []).map(x => x.trim()).filter(Boolean);
      },
      toAttribute(value) {
        return Array.isArray(value) ? value.join(' ') : '';
      },
    },
  }) actions: ('copy' | 'wrap')[] = [];

  /**
   * When set to "client", `<rh-code-block>` will automatically highlight the source using Prism.js
   * When set to "Prerendered", `<rh-code-block>` will apply supported RHDS styles to children with
   * prismjs classnames in the element's root.
   */
  @property() highlighting?: 'client' | 'prerendered';

  /** When set along with `highlighting="client"`, this grammar will be used to highlight source code */
  @property() language?:
    | 'html'
    | 'css'
    | 'javascript'
    | 'typescript'
    | 'bash'
    | 'ruby'
    | 'yaml'
    | 'json';

  /** When set, the code block displays with compact spacing */
  @property({ type: Boolean, reflect: true }) compact = false;

  /** When set, the code block source code will be dedented */
  @property({ type: Boolean, reflect: true }) dedent = false;

  /** When set, the code block is resizable */
  @property({ type: Boolean, reflect: true }) resizable = false;

  /** When set, the code block occupies it's full height, without scrolling */
  @property({ type: Boolean, reflect: true, attribute: 'full-height' }) fullHeight = false;

  /** When set, lines in the code snippet wrap */
  @property({ type: Boolean }) wrap = false;

  /** When set to `hidden`, the code block's line numbers are hidden */
  @property({ reflect: true, attribute: 'line-numbers' }) lineNumbers?: 'hidden';

  /**
   * Controls when the component performs expensive calculations like line number height computation.
   * - `lazy` (default): Uses intersection observer. Only calculates after the component has intersected at least once.
   * - `immediate`: Load immediately, no intersection observer. Performs all calculations as the browser renders.
   * - `deferred`: Uses requestIdleCallback to load when the main thread is available.
   */
  @property() load: 'lazy' | 'immediate' | 'deferred' = 'lazy';

  /** Current state of the copy action button (default, active after copy, or failed) */
  @state() private copyButtonState: 'default' | 'active' | 'failed' = 'default';

  /** Logger instance for error and debug messages */
  #logger = new Logger(this);

  /** Slot controller for managing named slots and their content */
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

  /** Directive result from Prism.js highlighting (when highlighting="client") */
  #prismOutput?: DirectiveResult;

  /** Whether the code block is currently intersecting the viewport (for lazy mode) */
  #isIntersecting = false;

  /** Whether line number calculations have been completed (for lazy mode cleanup) */
  #hasComputedLineNumbers = false;

  /**
   * Intersection observer to track visibility and optimize line number calculations.
   * Only used in lazy mode. Uses a 50% root margin to precompute before the element enters the viewport.
   */
  #io: IntersectionObserver | null = null;

  /** Array of text content for each line in the code block */
  #lines: string[] = [];

  /** Array of computed heights for each line, used for positioning line numbers */
  #lineHeights: `${string}px`[] = [];

  override connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#setupObservers();
    }
    this.#onSlotChange();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.#cleanupIntersectionObserver();
  }

  /**
   * Sets up IntersectionObserver for lazy mode.
   * Only creates observer if load mode is 'lazy'.
   */
  #setupObservers() {
    // Only create IntersectionObserver for lazy mode
    if (this.load === 'lazy' && !this.#io) {
      // Create a new IntersectionObserver instance for THIS component only
      // Each component has its own observer, so cleanup only affects this instance
      this.#io = new IntersectionObserver(entries => {
        // IntersectionObserver callback receives entries for all observed elements
        // Since each component has its own observer instance that only observes 'this',
        // entries will always contain exactly one entry for this element
        const [entry] = entries;
        if (entry && entry.target === this) {
          const wasIntersecting = this.#isIntersecting;
          const { isIntersecting } = entry;

          // Update intersection state
          this.#isIntersecting = isIntersecting;

          // Handle intersection when entering viewport (including initial intersection)
          // If element is intersecting and we haven't computed yet, handle it
          // The !wasIntersecting check ensures we only handle when entering, not leaving
          if (isIntersecting && !wasIntersecting && !this.#hasComputedLineNumbers) {
            this.#handleIntersection();
          }
        }
      }, { rootMargin: '50% 0px' });

      // Observe ONLY this element - each component has its own observer instance
      // When we cleanup, we only unobserve this element from this observer
      this.#io.observe(this);
    }
  }

  /**
   * Handles intersection - computes line numbers once
   */
  #handleIntersection() {
    // Prevent duplicate calls
    if (this.#hasComputedLineNumbers) {
      return;
    }

    this.requestUpdate();
    // Compute line numbers, which will set #hasComputedLineNumbers internally
    this.#computeLineNumbers().then(() => {
      // Clean up intersection observer after first calculation completes
      // Only clean up if we successfully computed (prevents cleanup if calculation failed)
      if (this.#hasComputedLineNumbers && this.#io) {
        this.#cleanupIntersectionObserver();
      }
    });
  }

  /**
   * Cleans up intersection observer for THIS component instance only.
   * Each component has its own IntersectionObserver, so this only affects this element.
   * Called after first calculation completes in lazy mode.
   */
  #cleanupIntersectionObserver() {
    if (this.#io) {
      // Since each component has its own observer instance (this.#io),
      // unobserve only removes this element from this specific observer
      // Other components' observers are unaffected
      this.#io.unobserve(this);
      // Disconnect this observer instance since it's no longer needed
      // (it only observed this one element anyway)
      this.#io.disconnect();
      this.#io = null;
    }
  }

  render() {
    const { fullHeight, wrap, resizable, compact } = this;
    const expandable = this.#lines.length > 5;
    const truncated = expandable && !fullHeight;
    const actions = !!this.actions.length;
    const isIntersecting = this.#isIntersecting;
    const actionCopyLabelledBy =
       this.copyButtonState === 'default' ?
         'copy-to-clipboard-label'
         : this.copyButtonState === 'active' ?
           'copied-label'
           : 'copy-failed-label';
    return html`
      <div id="container"
           class="${classMap({ actions, compact, expandable, fullHeight, isIntersecting, resizable, truncated, wrap })}"
           @code-action="${this.#onCodeAction}">
        <div id="content-lines" tabindex="${ifDefined((!fullHeight || undefined) && 0)}">
          <div id="sizers" aria-hidden="true"></div>
          <ol id="line-numbers" inert aria-hidden="true">${this.#lineHeights.map((height, i) => html`
            <li style="${styleMap({ height })}">${i + 1}</li>`)}
          </ol>
          <pre id="prism-output"
               class="language-${this.language}"
               ?hidden="${!this.#prismOutput}">${this.#prismOutput}</pre>
          <!--
            A non-executable script tag containing the sample content. JavaScript
            samples should use the type \`text/sample-javascript\`. HTML samples
            containing script tags must escape the closing \`</script>\` tag. Can
            also be a \`<pre>\` tag.
          -->
          <slot id="content"
                ?hidden="${!!this.#prismOutput}"
                @slotchange="${this.#onSlotChange}"></slot>
        </div>

        <div id="actions"
             @click="${this.#onActionsClick}"
             @keyup="${this.#onActionsKeyup}">
        ${!this.actions.includes('copy') ? '' : html`
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
             ${RhCodeBlock.actionIcons.get('copy')}
            </button>
          </rh-tooltip>`}
          ${!this.actions.includes('wrap') ? '' : html`
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
      <slot name="legend" ?hidden="${this.#slots.isEmpty('legend')}"></slot>
    `;
  }

  protected override firstUpdated(): void {
    switch (this.load) {
      case 'immediate':
        this.#computeLineNumbers();
        break;
      case 'lazy':
        // IntersectionObserver will fire when element enters viewport
        // or immediately if element is already in viewport
        break;
      case 'deferred':
        ric(() => this.#computeLineNumbers());
        break;
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

  /**
   * Extracts lines from code content. Used to populate #lines for expandable check.
   * This is a lightweight operation that doesn't compute line heights.
   * Can be called before Prism highlighting completes - will extract from raw slot content.
   */
  #extractLines() {
    if (isServer) {
      return;
    }
    // Try to get codes from Prism output first, fall back to slot content
    let codes: (HTMLElement | null)[] = [];

    if (this.#prismOutput) {
      const prismEl = this.shadowRoot?.getElementById('prism-output');
      if (prismEl) {
        codes = [prismEl];
      }
    }

    // If no Prism output yet, use slot content
    if (codes.length === 0) {
      codes = this.#getSlottedCodeElements();
    }

    if (codes.length === 0) {
      this.#lines = [];
      return;
    }

    // Extract lines from code content
    const lineArrays: string[][] = [];
    for (const code of codes) {
      const text = code?.textContent;
      if (text) {
        lineArrays.push(text.split(/\n(?!$)/g));
      }
    }
    this.#lines = lineArrays.flat();
  }

  /**
   * Handles slot content changes by applying appropriate syntax highlighting
   * and recalculating line numbers based on load mode.
   */
  async #onSlotChange() {
    switch (this.highlighting) {
      case 'client': await this.#highlightWithPrism(); break;
      // TODO: if we ever support other tokenizers e.g. highlightjs,
      // dispatch here off of some supplemental attribute like `tokenizer="highlightjs"`
      case 'prerendered': await this.#applyPrismPrerenderedStyles(); break;
    }

    // Always extract lines to determine expandable state, even in lazy mode
    // This is lightweight and doesn't compute line heights
    this.#extractLines();
    this.requestUpdate();

    // Compute line numbers based on load mode
    switch (this.load) {
      case 'immediate':
        this.#computeLineNumbers();
        break;
      case 'lazy':
        // Only compute line heights if already intersected
        // But #lines is already populated above for expandable check
        if (this.#isIntersecting || this.#hasComputedLineNumbers) {
          this.#computeLineNumbers();
        }
        break;
      case 'deferred':
        ric(() => this.#computeLineNumbers());
        break;
    }
  }

  /**
   * Applies Prism.js styles to the document or shadow root for prerendered code highlighting.
   * This method ensures styles are only applied once per root node using a WeakMap cache.
   * Used when `highlighting="prerendered"` attribute is set.
   */
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

  /**
   * Performs client-side syntax highlighting using Prism.js.
   * Dynamically imports Prism, applies styles to shadow root, extracts code from script elements,
   * and generates highlighted output. Used when `highlighting="client"` attribute is set.
   */
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
      this.#prismOutput = await highlight(textContent, this.language);
      this.requestUpdate('#prismOutput', {});
      await this.updateComplete;
      // Re-extract lines now that Prism output is available
      this.#extractLines();
      this.requestUpdate();
    }
  }

  /**
   * Handles changes to the wrap property by recalculating line numbers
   * and updating the wrap action button label state.
   */
  async #wrapChanged() {
    await this.updateComplete;
    // Reset computed flag to force recalculation
    this.#hasComputedLineNumbers = false;
    this.#computeLineNumbers();
    this.#setSlottedLabelState('action-label-wrap', this.wrap ? 'active' : undefined);
  }

  /**
   * Updates the visibility of slotted label elements based on the current state.
   * Shows/hides elements with matching data-code-block-state attributes.
   * @param slotName - The name of the slot containing label elements
   * @param state - The current state ('active', 'failed', or undefined for default)
   */
  #setSlottedLabelState(slotName: 'action-label-copy' | 'action-label-wrap', state?: string) {
    if (this.#slots.hasSlotted(slotName)) {
      for (const el of this.#slots.getSlotted(slotName)) {
        if (el instanceof HTMLElement) {
          el.hidden = el.dataset.codeBlockState !== state;
        }
      }
    }
  }

  /**
   * Retrieves code elements (script or pre tags) and text nodes from the default slot.
   * Handles both element nodes and text nodes for prerendered content.
   * @returns Array of HTMLScriptElement, HTMLPreElement, or Text node containers
   */
  #getSlottedCodeElements(): (HTMLScriptElement | HTMLPreElement | HTMLElement)[] {
    if (isServer) {
      return [];
    }
    const slot = this.shadowRoot?.getElementById('content') as HTMLSlotElement | null;
    if (!slot) {
      return [];
    }

    const assigned = slot.assignedNodes();
    const result: (HTMLScriptElement | HTMLPreElement | HTMLElement)[] = [];

    // Collect pre/script elements and text nodes (but skip whitespace-only text nodes)
    for (const node of assigned) {
      if (node instanceof HTMLScriptElement || node instanceof HTMLPreElement) {
        result.push(node);
      } else if (node instanceof Text) {
        const text = node.textContent;
        // Only include text nodes that have non-whitespace content
        // This filters out newlines/spaces between elements in the HTML
        if (text && text.trim()) {
          // Wrap text nodes in a temporary element for processing
          const wrapper = document.createElement('pre');
          wrapper.textContent = text;
          result.push(wrapper);
        }
      }
    }

    return result;
  }

  /**
   * Calculates the heights of individual code lines for proper line number alignment.
   * This method creates temporary DOM elements to measure the actual rendered height of each line,
   * accounting for wrapped text and variable-height content. Optimized for performance with
   * efficient DOM manipulation and minimal reflows.
   *
   * @license MIT
   * Portions copyright prism.js authors (MIT license)
   */
  async #computeLineNumbers() {
    if (isServer) {
      return;
    }
    // For lazy mode, only compute if intersecting or already computed
    if (this.load === 'lazy' && !this.#isIntersecting && !this.#hasComputedLineNumbers) {
      return;
    }

    await this.updateComplete;

    const sizersContainer = this.shadowRoot?.getElementById('sizers');
    if (!sizersContainer) {
      return;
    }

    const codes =
        this.#prismOutput ? [this.shadowRoot?.getElementById('prism-output')].filter(x => !!x)
      : this.#getSlottedCodeElements();

    if (codes.length === 0) {
      return;
    }

    // Extract lines if not already populated (for expandable check)
    // This ensures #lines is available even if #extractLines() wasn't called yet
    if (this.#lines.length === 0) {
      this.#extractLines();
    }

    if (this.lineNumbers === 'hidden') {
      return;
    }

    // Optimize: Pre-allocate arrays and batch DOM operations
    const infos: CodeLineHeightsInfo[] = [];
    for (const element of codes) {
      if (!element) {
        continue;
      }

      const codeElement = this.#prismOutput ? element.querySelector('code') : element;
      if (codeElement) {
        const sizer = document.createElement('span');
        sizer.className = 'sizer';
        sizer.innerText = '0';
        sizer.style.display = 'block';
        sizersContainer.appendChild(sizer);

        const text = element.textContent;
        const lines = text ? text.split(/\n(?!$)/g) : [];
        const lineHeights: (number | undefined)[] = new Array(lines.length);

        // Get one-liner height once
        const oneLinerHeight = sizer.getBoundingClientRect().height;

        infos.push({
          lines,
          lineHeights,
          sizer,
          oneLinerHeight,
        });
      }
    }

    // Optimize: Batch DOM reads and writes to minimize reflows
    // First pass: create DOM elements for lines that need measurement
    for (const info of infos) {
      const { lines, lineHeights, sizer, oneLinerHeight } = info;
      const lastIdx = lines.length - 1;
      lineHeights[lastIdx] = undefined; // Last line needs measurement

      // Pre-allocate for single-character lines
      for (const [i, line] of lines.entries()) {
        if (line.length <= 1) {
          lineHeights[i] = oneLinerHeight;
        }
      }

      // Create elements for lines that need measurement
      for (const [i, line] of lines.entries()) {
        if (lineHeights[i] === undefined && line.length > 1) {
          const e = document.createElement('span');
          e.style.display = 'block';
          e.textContent = line;
          sizer.appendChild(e);
        }
      }
    }

    // Second pass: batch read all measurements
    for (const info of infos) {
      const { sizer, lineHeights } = info;
      let childIndex = 0;

      for (const [i] of lineHeights.entries()) {
        if (lineHeights[i] === undefined) {
          const rect = sizer.children[childIndex]?.getBoundingClientRect();
          lineHeights[i] = rect?.height ?? 0;
          childIndex++;
        }
      }

      // Clean up sizer
      sizer.remove();
    }

    // Optimize: Use pre-allocated array and direct assignment
    const totalLines = infos.reduce((sum, { lines }) => sum + lines.length, 0);
    this.#lineHeights = new Array(totalLines) as `${string}px`[];
    let outputIdx = 0;

    for (const { lineHeights, oneLinerHeight } of infos) {
      for (const [, height] of lineHeights.entries()) {
        this.#lineHeights[outputIdx++] = `${height ?? oneLinerHeight}px` as const;
      }
    }

    this.#hasComputedLineNumbers = true;
    this.requestUpdate('#linesNumbers', 0);
  }

  /**
   * Handles click events on action buttons (copy, wrap).
   * Delegates to #onCodeAction for processing.
   * @param event - The click event
   */
  #onActionsClick(event: Event) {
    this.#onCodeAction(event);
  }

  /**
   * Handles keyboard events on action buttons.
   * Responds to Space key to trigger actions (Enter is handled natively by buttons).
   * @param event - The keyboard event
   */
  #onActionsKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        return;
      case ' ':
        event.preventDefault();
        this.#onCodeAction(event);
    }
  }

  /**
   * Routes action events to the appropriate handler based on data-code-block-action attribute.
   * Supports 'copy' (copy code to clipboard) and 'wrap' (toggle line wrapping) actions.
   * @param event - The triggering event
   */
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

  /**
   * Handles clicks on the expand/collapse button, toggling the fullHeight property.
   */
  #onClickExpand() {
    this.fullHeight = !this.fullHeight;
  }

  /**
   * Prepares the code content for copying and dispatches a cancelable copy event.
   * Extracts text from either pre elements (prerendered mode) or script elements (client mode).
   * Fires the RhCodeBlockCopyEvent which allows listeners to modify the content before copying.
   *
   * @returns The content to copy (potentially modified by event listeners)
   * @throws {Error} If the copy event is cancelled or prevented
   */
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

  /**
   * Copies the code block content to the clipboard and manages the copy button state.
   * Shows appropriate tooltip feedback (success or failure) for 5 seconds after the operation.
   * Updates the button state and tooltip content to reflect the copy operation result.
   */
  async #copy() {
    const slot =
      this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="action-label-copy"]');
    const tooltip =
      slot?.closest('rh-tooltip');
    if (!tooltip) {
      return;
    }

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
    await new Promise(r => setTimeout(r, 5_000));
    tooltip.hide();
    this.copyButtonState = 'default';
    this.#setSlottedLabelState('action-label-copy', undefined);
    tooltip.show();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}

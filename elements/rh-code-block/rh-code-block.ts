import type { DirectiveResult } from 'lit-html/directive.js';
import { CSSResult, LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-code-block.css';

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

interface CodeLineHeightsInfo {
  lines: string[];
  lineHeights: (number | undefined)[];
  sizer: HTMLElement;
  oneLinerHeight: number;
}

const prismApplyPromises = new WeakMap();

/**
 * A code block applies special formatting to sections of code.
 *
 * @summary Formats code strings within a container
 *
 * @alias code-block
 */
@customElement('rh-code-block')
@themable
export class RhCodeBlock extends LitElement {
  private static actionIcons = new Map([
    ['wrap', html`
      <svg xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20">
        <path d="M19 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0ZM10.82 4.992C9.877 4.996 8.31 5.57 8.174 6c1.21.03 2.432-.073 3.635.08 2.181.383 3.677 2.796 3.066 4.922-.41 1.753-2.108 2.995-3.877 3.014L11 14H5.207l2.682-2.682-.707-.707L3.293 14.5l3.889 3.889.707-.707L5.207 15h5.736l.004-.008c1.444.005 2.896-.59 3.832-1.722 1.65-1.82 1.612-4.85-.08-6.63A5 5 0 0 0 11 5a1.948 1.948 0 0 0-.18-.008z"/>
        <path d="M4 5h7c-.039.313.077.781-.057 1H4V5ZM0 0c.313.039.781-.077 1 .057V20c-.313-.039-.781.077-1-.057V0Z"/>
      </svg>
    `],
    ['wrap-active', html`
      <svg xmlns="http://www.w3.org/2000/svg"
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

  #slots = new SlotController(
    this,
    null,
    'action-label-copy',
    'action-label-wrap',
    'show-more',
    'show-less',
    'legend',
  );

  #prismOutput?: DirectiveResult;

  #isIntersecting = false;
  #io = new IntersectionObserver(rs => {
    this.#isIntersecting = rs.some(r => r.isIntersecting);
    this.#computeLineNumbers();
  }, { rootMargin: '50% 0px' });

  #ro = new ResizeObserver(() => this.#computeLineNumbers());

  #lineHeights: `${string}px`[] = [];

  override connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#ro.observe(this);
      this.#io.observe(this);
    }
    this.#onSlotChange();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.#ro.disconnect();
    this.#io.disconnect();
  }

  render() {
    const { fullHeight, wrap, resizable, compact } = this;
    const expandable = this.#lineHeights.length > 5;
    const truncated = expandable && !fullHeight;
    const actions = !!this.actions.length;
    const isIntersecting = this.#isIntersecting;
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
        ${this.actions.map(x => html`
          <rh-tooltip>
            <!-- tooltip content for the copy action button -->
            <slot id="label" slot="content" name="action-label-${x}">${x === 'copy' ? html`
              <span>Copy to Clipboard</span>
              <span hidden data-code-block-state="active">Copied!</span>` : html`
              <!-- tooltip content for the wrap action button -->
              <span>Toggle word wrap</span>
              <span hidden data-code-block-state="active">Toggle overflow</span>`}
            </slot>
            <button id="action-${x}"
                    class="shadow-fab"
                    data-code-block-action="${x}">
              ${RhCodeBlock.actionIcons.get(this.wrap && x === 'wrap' ? 'wrap-active' : x) ?? ''}
            </button>
          </rh-tooltip>`)}
        </div>

        <button id="expand"
                ?hidden="${!expandable}"
                aria-controls="content-lines"
                aria-expanded="${String(!!fullHeight) as 'true' | 'false'}"
                @click="${this.#onClickExpand}">
          <!-- text content for the expandable toggle button when the code block is collapsed. -->
          <slot name="show-more" ?hidden="${this.fullHeight}">Show more</slot>
          <!-- text content for the expandable toggle button when the code block is expanded. -->
          <slot name="show-less" ?hidden="${!this.fullHeight}">Show less</slot>
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
    this.#computeLineNumbers();
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
    }
    this.#computeLineNumbers();
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
      this.#prismOutput = await highlight(textContent, this.language);
      this.requestUpdate('#prismOutput', {});
      await this.updateComplete;
    }
  }

  async #wrapChanged() {
    await this.updateComplete;
    this.#computeLineNumbers();
    // TODO: handle slotted fabs
    const assignedElements =
      this.#getFabContentElements(this.shadowRoot?.querySelector('slot[name="action-label-wrap"]'));
    for (const el of assignedElements) {
      if (el instanceof HTMLElement) {
        el.hidden = (el.dataset.codeBlockState !== 'active') === this.wrap;
      }
    }
    this.requestUpdate();
  }

  #getSlottedCodeElements() {
    const slot = this.shadowRoot?.getElementById('content') as HTMLSlotElement;
    return slot.assignedElements().flatMap(x =>
        x instanceof HTMLScriptElement
        || x instanceof HTMLPreElement ? [x]
      : []);
  }

  #getFabContentElements(slot?: HTMLSlotElement | null) {
    const assignedElements = slot?.assignedElements() ?? [];
    if (!assignedElements.length) {
      return [...slot?.querySelectorAll('*') ?? []];
    }
    return assignedElements;
  }

  /**
   * Clone the text content and connect it to the document, in order to calculate the number of lines
   * @license MIT
   * Portions copyright prism.js authors (MIT license)
   */
  async #computeLineNumbers() {
    if (!this.#isIntersecting) {
      return;
    }
    await this.updateComplete;
    const codes =
        this.#prismOutput ? [this.shadowRoot?.getElementById('prism-output')].filter(x => !!x)
      : this.#getSlottedCodeElements();

    const infos: CodeLineHeightsInfo[] = codes.map(element => {
      const codeElement = this.#prismOutput ? element.querySelector('code') : element;
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
        } else {
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

    this.#lineHeights = infos.flatMap(x =>
      x.lineHeights?.map(y =>
        `${y ?? x.oneLinerHeight}px` as const));

    this.requestUpdate('#linesNumbers', 0);
  }

  #onActionsClick(event: Event) {
    this.#onCodeAction(event);
  }

  #onActionsKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
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

  async #copy() {
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
    await navigator.clipboard.writeText(content);
    // TODO: handle slotted fabs
    const slot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="action-label-copy"]');
    const tooltip = slot?.closest('rh-tooltip');
    tooltip?.hide();
    const assignedElements = this.#getFabContentElements(slot);
    for (const el of assignedElements) {
      if (el instanceof HTMLElement) {
        el.hidden = el.dataset.codeBlockState !== 'active';
      }
    }
    this.requestUpdate();
    tooltip?.show();
    await new Promise(r => setTimeout(r, 5_000));
    tooltip?.hide();
    for (const el of assignedElements) {
      if (el instanceof HTMLElement) {
        el.hidden = el.dataset.codeBlockState === 'active';
      }
    }
    this.requestUpdate();
    tooltip?.show();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}

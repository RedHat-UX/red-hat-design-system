import type { LitElement } from 'lit';

import { ContextProvider } from '@lit/context';

const SELECTORS = `H1,H2,H3,H4,H5,H6`;

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface HeadingContext {
  /** Root Heading level. default 1 */
  level: number;
  /** Heading offset for children. default 1 */
  offset: number;
}

export const context = createContextWithRoot<HeadingContext>('rh-heading-context');

export interface HeadingLevelContextOptions extends HeadingContext {
  /**
   * Attribute to read on the host which will determine root heading level.
   */
  attribute?: string;
}

/**
 * **START**
 * `H`
 * named capture group 1 `lvl`:
 * > **0-9**
 * **END**
 */
const HLVL_RE = /^H(?<lvl>\d)$/;

function getLevel(heading?: Element | null): number {
  const { lvl } = heading?.tagName.match(HLVL_RE)?.groups ?? {};
  return parseInt(lvl ?? '');
}

function canQuery(node: Node): node is Document | ShadowRoot {
  return typeof (node as Element).querySelectorAll === 'function';
}

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextProvider extends ContextProvider<typeof context, LitElement> {
  /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
  #options?: HeadingLevelContextOptions;

  constructor(
    public host: LitElement,
    options?: Partial<HeadingLevelContextOptions>,
  ) {
    super(host, { context });
    this.#options = { level: 1, offset: 1, ...options };
    this.#options.level ??= 1;
    this.#options.offset ??= 1;
    this.setValue({});
  }

  setValue(ctx: Partial<HeadingContext>) {
    const offset = this.#options?.offset ?? 1;
    const level = this.#options?.level ?? 1;
    super.setValue({ offset, level, ...ctx });
  }

  hostConnected() {
    super.hostConnected();
    const level = this.#getLevel();
    this.setValue({ level });
  }

  #getLevel() {
    const level = this.host.getAttribute(this.#options?.attribute ?? '')
      ?? this.#computeLevelFromChildren()
      ?? 1;
    const val = typeof level === 'string' ? parseInt(level) : level;
    if (typeof val === 'number' && !Number.isNaN(val)) {
      return val;
    }
  }

  #computeLevelFromChildren() {
    const { host } = this;
    const slotted = host.querySelector(SELECTORS);
    if (slotted && host.shadowRoot) {
      return getLevel(slotted);
    } else {
      const root = host.getRootNode();
      if (canQuery(root)) {
        const { localName } = host;
        const els = [...root.querySelectorAll(`${SELECTORS},${localName}`)];
        const lastHeadingBeforeHost = els.slice(0, els.indexOf(host)).pop();
        return getLevel(lastHeadingBeforeHost);
      }
    }
  }
}

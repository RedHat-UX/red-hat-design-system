import type { HeadingLevelContextOptions } from './context.js';
import type { ReactiveElement } from 'lit';

import { isServer } from 'lit';

import { ContextProvider } from '@lit/context';

import { context } from './context.js';

export { wrap } from './context.js';

const SELECTORS = `H1,H2,H3,H4,H5,H6`;

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
export class HeadingLevelContextProvider extends ContextProvider<typeof context, ReactiveElement> {
  get level(): number {
    return this.value.level;
  }

  set level(lvl: string | number | undefined | null) {
    const level = typeof lvl === 'string' ? parseInt(lvl) : lvl;
    if (typeof level === 'number' && !Number.isNaN(level)) {
      const { offset } = this.value;
      this.setValue({ level, offset });
    }
  }

  constructor(
    host: ReactiveElement,
    /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
    protected options?: HeadingLevelContextOptions,
  ) {
    super(host, { context, initialValue: {
      offset: options?.offset ?? 1,
      level: options?.level ?? 1,
    } });
  }

  hostConnected() {
    super.hostConnected();
    if (!isServer) {
      this.level = this.#computeLevelFromChildren();
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

import { contextEvents, HeadingLevelController } from './controller.js';

import {
  ContextRequestEvent,
  type UnknownContext,
  type ContextCallback,
} from '../event.js';

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
export class HeadingLevelContextProvider extends HeadingLevelController {
  /** Cache of context callbacks. Call each to update consumers */
  #callbacks = new Set<ContextCallback<number>>();

  hostConnected() {
    this.host.addEventListener('context-request', e =>
      this.#onChildContextRequestEvent(e as ContextRequestEvent<UnknownContext>));
    for (const [host, fired] of contextEvents) {
      host.dispatchEvent(fired);
    }
    this.level =
      this.host.getAttribute(this.options?.attribute ?? '')
      ?? this.#computeLevelFromChildren();
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

  /**
   * Was the context event fired requesting our colour-context context?
   * @param event
   */
  #isHeadingContextRequestEvent(
    event: ContextRequestEvent<UnknownContext>
  ): event is ContextRequestEvent<typeof HeadingLevelController.context> {
    return event.target !== this.host && event.context === HeadingLevelController.context;
  }

  async #onChildContextRequestEvent(event: ContextRequestEvent<UnknownContext>) {
    // only handle ContextRequestEvents relevant to colour context
    if (this.#isHeadingContextRequestEvent(event)) {
      // claim the context-request event for ourselves (required by context protocol)
      event.stopPropagation();

      // Run the callback to initialize the child's value
      event.callback(this.level);

      // Cache the callback for future updates, if requested
      if (event.subscribe) {
        this.#callbacks.add(event.callback);
      }
    }
  }
}

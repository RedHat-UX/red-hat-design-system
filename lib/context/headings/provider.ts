import { contextEvents, HeadingLevelController } from './controller.js';

import {
  ContextEvent,
  type Context,
  type UnknownContext,
  type ContextCallback,
} from '../event.js';

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextProvider extends HeadingLevelController {
  /** Cache of context callbacks. Call each to update consumers */
  #callbacks = new Set<ContextCallback<number>>();

  hostConnected() {
    this.host.addEventListener('context-request', e =>
      this.#onChildContextEvent(e as ContextEvent<UnknownContext>));

    for (const [host, fired] of contextEvents) {
      host.dispatchEvent(fired);
    }

    if (this.options?.attribute) {
      const val = this.host.getAttribute(this.options.attribute) ?? '';
      const int = parseInt(val);
      if (!Number.isNaN(int)) {
        this.level = int;
      } else {
        this.level = this.#computeLevelFromChildren();
      }
    } else {
      this.level = this.#computeLevelFromChildren();
    }
  }

  #computeLevelFromChildren() {
    const { host } = this;
    const { tagName } = this.host;
    let query = `H1,H2,H3,H4,H5,H6`;
    const slotted = host?.querySelector(query) as Element;
    const tag = host.shadowRoot ? slotted?.tagName : undefined;
    let level: number = tag ? parseInt(tag.replace('H', '')) : this.level;
    if (!tag) {
      query = `${query},${tagName}`;
      const elements = [...document.querySelectorAll(query)] as Array<Element>;
      const index = elements.indexOf(host) || -1;
      const slice = index && index > 0 ? [...elements].slice(0, index).filter(el=>el.tagName !== tagName) : undefined;
      level = !slice || slice.length < 1 ? this.level : parseInt(slice[slice.length - 1].tagName.replace('H', ''));
    }
    return level;
  }

  /** Was the context event fired requesting our colour-context context? */
  #isHeadingContextEvent(
    event: ContextEvent<UnknownContext>
  ): event is ContextEvent<Context<number>> {
    return (
      event.target !== this.host &&
        event.context.name === HeadingLevelController.CONTEXT
    );
  }

  async #onChildContextEvent(event: ContextEvent<UnknownContext>) {
    // only handle ContextEvents relevant to colour context
    if (this.#isHeadingContextEvent(event)) {
      // claim the context-request event for ourselves (required by context protocol)
      event.stopPropagation();

      // Run the callback to initialize the child's value
      event.callback(this.level);

      // Cache the callback for future updates, if requested
      if (event.multiple) {
        this.#callbacks.add(event.callback);
      }
    }
  }
}

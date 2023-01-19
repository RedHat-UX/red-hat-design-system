import type { ReactiveController, ReactiveElement } from 'lit';
import type { Context, ContextCallback, ContextEvent, UnknownContext } from './event.js';
import type { ColorContextProviderOptions } from './decorators.js';
import type { ColorTheme } from './types.js';

import { contextEvents, ColorContextController } from './controller.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export class ColorContextProvider<T extends ReactiveElement> extends ColorContextController<T> implements ReactiveController {
  #attribute: string;

  /** Cache of context callbacks. Call each to update consumers */
  #callbacks = new Set<ContextCallback<ColorTheme|null>>();

  /** Mutation observer which updates consumers when `on` or `color-palette` attributes change. */
  #mo = new MutationObserver(() => this.update(this.#contextVariable));

  /**
     * Cached (live) computed style declaration
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
     */
  #style: CSSStyleDeclaration;

  protected logger: Logger;

  #initialized = false;

  /** Return the current CSS `--context` value, or null */
  get #contextVariable(): ColorTheme | null {
    return this.#style.getPropertyValue('--context').trim() as ColorTheme || null;
  }

  constructor(host: T, options?: ColorContextProviderOptions<T>) {
    const { attribute = 'color-palette', ...rest } = options ?? {};
    super(host, rest);
    this.logger = new Logger(host);
    this.#style = window.getComputedStyle(host);
    this.#attribute = attribute;
    if (this.#attribute !== 'color-palette') {
      this.logger.warn('color context currently supports the `color-palette` attribute only.');
    }
  }

  /**
     * When a context provider connects, it listens for context-request events
     * it also fires all previously fired context-request events from their hosts,
     * in case this context provider upgraded after and is closer to a given consumer.
     */
  async hostConnected() {
    this.host.addEventListener('context-request', e => this.#onChildContextEvent(e));
    this.#mo.observe(this.host, { attributes: true, attributeFilter: [this.#attribute] });
    for (const [host, fired] of contextEvents) {
      host.dispatchEvent(fired);
    }
    await this.host.updateComplete;
    this.update();
  }

  hostUpdated() {
    this.#initialized ??= (this.update(), true);
  }

  /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
  hostDisconnected() {
    this.#callbacks.forEach(x => this.#callbacks.delete(x));
    this.#mo.disconnect();
  }

  /** Was the context event fired requesting our colour-context context? */
  #isColorContextEvent(
    event: ContextEvent<UnknownContext>
  ): event is ContextEvent<Context<ColorTheme|null>> {
    return (
      event.target !== this.host &&
        event.context.name === `${this.prefix}-color-context`
    );
  }

  /**
     * Provider part of context API
     * When a child connects, claim its context-request event
     * and add its callback to the Set of children if it requests multiple updates
     */
  async #onChildContextEvent(event: ContextEvent<UnknownContext>) {
    // only handle ContextEvents relevant to colour context
    if (this.#isColorContextEvent(event)) {
      // claim the context-request event for ourselves (required by context protocol)
      event.stopPropagation();

      // Run the callback to initialize the child's colour-context
      event.callback(this.#contextVariable);

      // Cache the callback for future updates, if requested
      if (event.multiple) {
        this.#callbacks.add(event.callback);
      }
    }
  }

  /** Calls the context callback for all consumers */
  public async update(next: ColorTheme | null = this.#contextVariable) {
    for (const cb of this.#callbacks) {
      cb(next);
    }
  }
}

import type { ReactiveController, ReactiveElement } from 'lit';
import type { Context, ContextCallback, ContextEvent, UnknownContext } from '../event.js';

import {
  contextEvents,
  ColorContextController,
  type ColorContextOptions,
} from './controller.js';

import { ColorContextConsumer, type ColorTheme } from './consumer.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

/**
 * A `ColorPalette` is a collection of specific color values
 * Choosing a palette sets both color properties and, if the component is a context provider,
 * implies a color theme for descendents.
 *
 * `ColorPalette` is associated with the `color-palette` attribute
 */
export type ColorPalette = (
  | 'base'
  | 'accent'
  | 'complement'
  | 'lighter'
  | 'lightest'
  | 'dark'
  | 'darker'
  | 'darkest'
);

export interface ColorContextProviderOptions<T extends ReactiveElement> extends ColorContextOptions<T> {
  /** Attribute to set context. Providers only */
  attribute?: string;
}

/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export class ColorContextProvider<
  T extends ReactiveElement
> extends ColorContextController<T> implements ReactiveController {
  static contexts = new Map(Object.entries({
    darkest: 'dark' as const,
    darker: 'dark' as const,
    dark: 'dark' as const,
    light: 'light' as const,
    lighter: 'light' as const,
    lightest: 'light' as const,
  }));

  #attribute: string;

  /** Cache of context callbacks. Call each to update consumers */
  #callbacks = new Set<ContextCallback<ColorTheme|null>>();

  /** Mutation observer which updates consumers when `color-palette` attribute change. */
  #mo = new MutationObserver(() => this.update());

  /**
   * Cached (live) computed style declaration
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
   */
  #style: CSSStyleDeclaration;

  #initialized = false;

  #logger: Logger;

  #consumer: ColorContextConsumer<T>;

  get local() {
    return this.#local;
  }

  get #local() {
    return ColorContextProvider.contexts.get(this.host.getAttribute(this.#attribute) ?? '');
  }

  get value(): ColorTheme {
    return this.#local ?? this.#consumer.value;
  }

  constructor(host: T, options?: ColorContextProviderOptions<T>) {
    const { attribute = 'color-palette', ...rest } = options ?? {};
    super(host, rest);
    this.#consumer = new ColorContextConsumer(host, { callback: value => this.update(value) });
    this.#logger = new Logger(host);
    this.#style = window.getComputedStyle(host);
    this.#attribute = attribute;
    if (this.#attribute !== 'color-palette') {
      this.#logger.warn('color context currently supports the `color-palette` attribute only.');
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
    this.#initialized ||= (this.update(), true);
    if (this.#local && this.value !== this.#consumer.value) {
      this.#consumer.update(this.#local);
      this.update();
    }
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
      event.callback(this.host.getAttribute(this.#attribute) as ColorTheme ?? this.#consumer.value);

      // Cache the callback for future updates, if requested
      if (event.multiple) {
        this.#callbacks.add(event.callback);
      }
    }
  }

  /** Calls the context callback for all consumers */
  public override async update(force?: ColorTheme) {
    const { value } = this;

    for (const cb of this.#callbacks) {
      cb(force ?? value);
    }
  }
}

/** Makes this element a color context provider which updates its consumers when the decorated field changes */
export function colorContextProvider<T extends ReactiveElement>(options?: ColorContextOptions<T>) {
  return function(proto: T, _propertyName: string) {
    const propertyName = _propertyName as keyof T;
    const klass = (proto.constructor as typeof ReactiveElement);
    const propOpts = klass.getPropertyOptions(_propertyName);
    const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
    klass.addInitializer(instance => {
      const controller = new ColorContextProvider(instance as T, { propertyName, attribute, ...options });
      // @ts-expect-error: this assignment is strictly for debugging purposes
      instance.__DEBUG_colorContextProvider = controller;
    });
  };
}


import type { Context, ContextCallback, UnknownContext } from './event.js';

import type { ReactiveController, ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { createContext, ContextEvent } from './event.js';

import CONTEXT_BASE_STYLES from './context-color.css';

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
  | 'darker'
  | 'darkest'
);

/**
 * A Color theme is a context-specific restriction on the available color palettes
 *
 * `ColorTheme` is associated with the `on` attribute and the `--context` css property
 */
export type ColorTheme = (
  | 'dark'
  | 'light'
  | 'saturated'
);

export interface ColorContextOptions<T extends ReactiveElement> {
  prefix?: string;
  propertyName?: keyof T;
}

export interface ColorContextProviderOptions<T extends ReactiveElement> extends ColorContextOptions<T> {
  /** Attribute to set context. Providers only */
  attribute?: string;
}

// TODO: QA
// 1. verify elements
//   rh-band - (easy)
//   rh-card - (easy)
//   rh-tabs - (easy)
//   rh-jump-links - (potentially fraught)
//   rh-autocomplete - (anyways broken)
//   rh-cta - (anyways broken)

/**
* Maps from consumer host elements to already-fired request events
* We hold these in memory in order to re-fire the events every time a new provider connects.
* This is a hedge against cases where an early-upgrading provider claims an early-upgrading
* consumer before a late-upgrading provider has a chance to register as the rightful provider
* @example Monkey-in-the-middle error
*          In this example, we must re-fire the event from eager-consumer when late-provider
*          upgrades, so as to ensure that late-provider claims it for itself
*          ```html
*          <early-provider>
*            <late-provider>
*              <eager-consumer>
*            </late-provider>
*          </early-provider>
*          ```
*/
const contextEvents = new Map<ReactiveElement, ContextEvent<UnknownContext>>();

/**
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
abstract class ColorContextController<T extends ReactiveElement> implements ReactiveController {
  abstract update(next: ColorTheme | null): void;

  /** The context object which describes the host's colour context */
  protected context: Context<ColorTheme|null>;

  /** The style controller which provides the necessary CSS. */
  protected styleController: StyleController;

  /** Prefix for colour context. Set this in Options to create a separate context */
  protected prefix = 'rh-';

  /** The last-known color context on the host */
  protected last: ColorTheme|null = null;

  protected logger: Logger;

  hostUpdate?(): void

  constructor(protected host: T, options?: ColorContextOptions<T>) {
    this.logger = new Logger(host);
    this.prefix = options?.prefix ?? 'rh-';
    this.context = createContext(`${this.prefix}-color-context`);
    this.styleController = new StyleController(host, CONTEXT_BASE_STYLES);
    host.addController(this);
  }
}

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

  #initialized = false;

  /** Return the current CSS `--context` value, or null */
  get #contextVariable(): ColorTheme | null {
    return this.#style.getPropertyValue('--context').trim() as ColorTheme || null;
  }

  constructor(host: T, options?: ColorContextProviderOptions<T>) {
    const { attribute = 'color-palette', ...rest } = options ?? {};
    super(host, rest);
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
  #onChildContextEvent(event: ContextEvent<UnknownContext>) {
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
  public update(next: ColorTheme | null = this.#contextVariable) {
    for (const cb of this.#callbacks) {
      cb(next);
    }
  }
}

/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export class ColorContextConsumer<T extends ReactiveElement> extends ColorContextController<T> implements ReactiveController {
  #propertyName: keyof T;

  get #propertyValue() {
    return this.host[this.#propertyName] as ColorTheme;
  }

  set #propertyValue(x) {
    this.host[this.#propertyName] = x as T[keyof T];
    this.host.requestUpdate();
  }

  #dispose?: () => void;

  #override: ColorTheme | null = null;

  constructor(host: T, private options?: ColorContextOptions<T>) {
    super(host, options);
    this.#propertyName = options?.propertyName ?? 'on' as keyof T;
  }

  /** When a consumer connects, it requests colour context from the closest provider. */
  async hostConnected() {
    const event = new ContextEvent(this.context, e => this.#contextCallback(e), true);
    this.#override = this.#propertyValue;
    this.host.dispatchEvent(event);
    contextEvents.set(this.host, event);
    await this.host.updateComplete;
    this.#override = null;
  }

  /** When a consumer disconnects, it's removed from the list of consumers. */
  hostDisconnected() {
    this.#dispose?.();
    this.#dispose = undefined;
    contextEvents.delete(this.host);
  }

  /** Register the dispose callback for hosts that requested multiple updates, then update the colour-context */
  #contextCallback(value: ColorTheme|null, dispose?: () => void) {
    // protect against changing providers
    if (dispose && dispose !== this.#dispose) {
      this.#dispose?.();
      this.#dispose = dispose;
    }
    this.update(value);
  }

  /** Sets the `on` attribute on the host and any children that requested multiple updates */
  public update(next: ColorTheme|null) {
    if (!this.#override && next !== this.last) {
      this.last = next;
      this.logger.log(`setting context from ${this.#propertyValue} to ${next}`);
      this.#propertyValue = (next ?? undefined) as ColorTheme;
    }
  }
}

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

export function colorContextConsumer<T extends ReactiveElement>(options?: ColorContextOptions<T>) {
  return function(proto: T, _propertyName: string|keyof T) {
    const propertyName = _propertyName as keyof T;
    (proto.constructor as typeof ReactiveElement).addInitializer(instance => {
      const controller = new ColorContextConsumer(instance as T, { propertyName, ...options });
      // @ts-expect-error: this assignment is strictly for debugging purposes
      instance.__DEBUG_colorContextConsumer = controller;
    });
  };
}

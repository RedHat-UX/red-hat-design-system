import type { ReactiveElement } from 'lit';
import type { ColorTheme } from './consumer.js';

import { ContextProvider } from '@lit/context';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import { context } from './context.js';

import styles from '@rhds/tokens/css/color-context-provider.css.js';

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
  | 'light'
  | 'lighter'
  | 'lightest'
  | 'dark'
  | 'darker'
  | 'darkest'
);

export interface ColorContextProviderOptions {
  /** Attribute to set context. Providers only */
  attribute?: string;
}

/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export class ColorContextProvider extends ContextProvider<typeof context> {
  static readonly contexts = new Map(Object.entries({
    darkest: 'dark' as const,
    darker: 'dark' as const,
    dark: 'dark' as const,
    light: 'light' as const,
    lighter: 'light' as const,
    lightest: 'light' as const,
  }));

  /** The last-known color context on the host */
  protected last: ColorTheme | null = null;

  #attribute: string;

  /** Mutation observer which updates consumers when `color-palette` attribute change. */
  #mo = new MutationObserver(() => this.update());

  #logger: Logger;

  get #local() {
    return ColorContextProvider.contexts.get(this.host.getAttribute(this.#attribute) ?? '');
  }

  constructor(protected host: ReactiveElement, options?: ColorContextProviderOptions) {
    super(host, { context });
    new StyleController(host, styles);
    this.#logger = new Logger(host);
    const { attribute = 'color-palette' } = options ?? {};
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
    super.hostConnected();
    this.#mo.observe(this.host, { attributes: true, attributeFilter: [this.#attribute] });
  }

  /**
   * When a context provider disconnects, it disconnects its mutation observer
   */
  hostDisconnected() {
    this.#mo.disconnect();
  }

  /**
   * Calls the context callback for all consumers
   * @param [force] override theme
   */
  public update(force?: ColorTheme) {
    this.setValue(force ?? this.#local ?? null);
  }
}

/**
 * Makes this element a color context provider which updates its consumers when the decorated field changes
 * @param options options
 */
export function colorContextProvider(options?: ColorContextProviderOptions) {
  return (proto: ReactiveElement, propertyName: string) => {
    const controllers = new WeakMap();
    const values = new Map();
    const klass = (proto.constructor as typeof ReactiveElement);
    const propOpts = klass.getPropertyOptions(propertyName);
    const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
    klass.addInitializer((instance: ReactiveElement) => {
      controllers.set(instance, new ColorContextProvider(instance, { attribute, ...options }));
    });
    Object.defineProperty(proto, propertyName, {
      get(this: ReactiveElement) {
        return values.get(this);
      },
      set(this: ReactiveElement, value: ColorTheme) {
        controllers.get(this)!.setValue(value);
        values.set(this, value);
      },
      enumerable: true,
      configurable: true,
    });
  };
}

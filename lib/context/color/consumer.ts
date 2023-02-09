import type { ReactiveController, ReactiveElement } from 'lit';

import {
  contextEvents,
  ColorContextController,
  type ColorContextOptions
} from './controller.js';

import { ContextEvent } from '../event.js';

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

/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export class ColorContextConsumer<
  T extends ReactiveElement
> extends ColorContextController<T> implements ReactiveController {
  #propertyName: keyof T;

  get #propertyValue() {
    return this.host[this.#propertyName] as ColorTheme;
  }

  set #propertyValue(x) {
    this.host[this.#propertyName] = x as T[keyof T];
    this.host.requestUpdate();
  }

  get value() {
    return this.#propertyValue;
  }

  #dispose?: () => void;

  #override: ColorTheme | null = null;

  constructor(host: T, private options?: ColorContextOptions<T> & {
    callback?: (value: ColorTheme) => void
  }) {
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
    const { last } = this;
    if (!this.#override && next !== last) {
      this.last = next;
      this.#propertyValue = (next ?? undefined) as ColorTheme;
    }
    this.options?.callback?.(this.#propertyValue);
  }
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

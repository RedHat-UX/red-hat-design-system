import type { ColorTheme } from './types.js';
import type { ColorContextOptions } from './decorators.js';

import type { ReactiveController, ReactiveElement } from 'lit';

import { contextEvents, ColorContextController } from './controller.js';
import { ContextEvent } from './event.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

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

  get value() {
    return this.#propertyValue;
  }

  #dispose?: () => void;

  #override: ColorTheme | null = null;

  #logger: Logger;

  constructor(host: T, private options?: ColorContextOptions<T>) {
    super(host, options);
    this.#logger = new Logger(host);
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
      this.#logger.log(`setting context from ${this.#propertyValue} to ${next}`);
      this.#propertyValue = (next ?? undefined) as ColorTheme;
    }
    this.dispatchEvent(new Event('change'));
  }
}


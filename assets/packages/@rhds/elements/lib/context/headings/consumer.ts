import { ContextRequestEvent } from '../event.js';

import { contextEvents, HeadingLevelController } from './controller.js';

export interface HeadingTemplateOptions {
  id?: string;
  hidden?: boolean;
  level?: number;
}

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextConsumer extends HeadingLevelController {
  #dispose?: () => void;

  /** When a consumer connects, it requests context from the closest provider. */
  hostConnected() {
    const { context } = HeadingLevelController;
    const event = new ContextRequestEvent<typeof context>(
      context,
      e => this.#contextCallback(e),
      true,
    );
    this.host.dispatchEvent(event);
    contextEvents.set(this.host, event);
  }

  /** When a consumer disconnects, it's removed from the list of consumers. */
  hostDisconnected() {
    this.#dispose?.();
    this.#dispose = undefined;
    contextEvents.delete(this.host);
  }

  /** Register the dispose callback for hosts that requested multiple updates, then update the colour-context */
  #contextCallback(value: number, dispose?: () => void) {
    // protect against changing providers
    if (dispose && dispose !== this.#dispose) {
      this.#dispose?.();
      this.#dispose = dispose;
    }
    this.update(value);
  }

  /** Sets the heading level on the host and any children that requested multiple updates */
  public update(next: number) {
    this.level = next;
    this.host.requestUpdate();
  }
}

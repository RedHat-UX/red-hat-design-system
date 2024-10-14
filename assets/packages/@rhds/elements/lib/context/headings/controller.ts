import type { ReactiveController, ReactiveElement, TemplateResult } from 'lit';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import {
  createContext,
  type ContextRequestEvent,
  type UnknownContext,
} from '../event.js';

import type { HeadingLevelContextConsumer } from './consumer.js';

export interface HeadingLevelTemplateOptions {
  id?: string;
  hidden?: boolean;
}

export interface HeadingLevelContextOptions {
  /** Root Heading level. default 1 */
  level?: number;
  /** Heading offset for children. default 1 */
  offset?: number;
  /**
   * Attribute to read on the host which will determine root heading level.
   */
  attribute?: string;
  /**
   * Only for providers which are also consumers.
   */
  parent?: HeadingLevelContextConsumer;
}

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
 *              <eager-consumer></eager-consumer>
 *            </late-provider>
 *          </early-provider>
 *          ```
 */
export const contextEvents = new Map<ReactiveElement, ContextRequestEvent<UnknownContext>>();

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelController implements ReactiveController {
  public static readonly context = createContext<number>(Symbol('rh-heading-level-context'));

  public offset: number;

  #level = 1;

  get level(): number {
    return this.#level;
  }

  set level(level: string | number | undefined | null) {
    const val = typeof level === 'string' ? parseInt(level) : level;
    if (typeof val === 'number' && !Number.isNaN(val)) {
      this.#level = val;
    }
  }

  constructor(
    protected host: ReactiveElement,
    /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
    protected options?: HeadingLevelContextOptions,
  ) {
    host.addController(this);
    this.offset = options?.offset ?? 1;
    if (options?.parent) {
      this.level = options.parent.level;
    } else if (options?.level) {
      this.level = options.level;
    }
  }

  hostConnected?(): void;

  /**
   * Wraps any renderable content in a heading, based on heading level
   */
  wrap(content: unknown, options?: HeadingLevelTemplateOptions): TemplateResult {
    const level = Math.max(1, this.level + this.offset);
    const id = options?.id;
    const hidden = options?.hidden ?? false;
    switch (level) {
      case 1: return html`<h1 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h1>`;
      case 2: return html`<h2 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h2>`;
      case 3: return html`<h3 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h3>`;
      case 4: return html`<h4 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h4>`;
      case 5: return html`<h5 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h5>`;
      default: return html`<h6 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h6>`;
    }
  }
}

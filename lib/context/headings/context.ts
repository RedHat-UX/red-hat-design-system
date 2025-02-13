import type { HeadingLevelContextConsumer } from './consumer.js';
import type { HeadingLevelContextProvider } from './provider.js';

import { html } from 'lit';

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

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

interface HeadingLevelContext {
  level: number;
  offset?: number;
}

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export const context = createContextWithRoot<HeadingLevelContext>('rh-heading-level-context');

/**
   * Wraps any renderable content in a heading, based on heading level
   * @param content
   * @param options
   */
export function wrap(
  this: HeadingLevelContextConsumer | HeadingLevelContextProvider,
  content: unknown,
  options?: HeadingLevelTemplateOptions,
) {
  const { level, offset } = this.value ?? { level: 1, offset: 1 };
  const id = options?.id;
  const hidden = options?.hidden ?? false;
  switch (Math.max(1, level + (offset ?? 1))) {
    case 1: return html`<h1 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h1>`;
    case 2: return html`<h2 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h2>`;
    case 3: return html`<h3 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h3>`;
    case 4: return html`<h4 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h4>`;
    case 5: return html`<h5 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h5>`;
    default: return html`<h6 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h6>`;
  }
}

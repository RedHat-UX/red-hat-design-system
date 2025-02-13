import type { ReactiveElement } from 'lit';

import { ContextConsumer } from '@lit/context';

import { context } from './context.js';

export interface HeadingTemplateOptions {
  id?: string;
  hidden?: boolean;
  level?: number;
}

export { wrap } from './context.js';

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextConsumer extends ContextConsumer<typeof context, ReactiveElement> {
  public level = 1;

  constructor(host: ReactiveElement) {
    super(host, {
      context,
      subscribe: true,
      callback: value => {
        this.level = value.level ?? 1;
      },
    });
  }
}

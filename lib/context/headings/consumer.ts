import { context } from './provider.js';

import { html, type LitElement, type TemplateResult } from 'lit';

import { ContextConsumer } from '@lit/context';
import { ifDefined } from 'lit-html/directives/if-defined.js';

export interface HeadingTemplateOptions {
  id?: string;
  hidden?: boolean;
  level?: number;
}

export interface HeadingLevelTemplateOptions {
  id?: string;
  hidden?: boolean;
}

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextConsumer extends ContextConsumer<typeof context, LitElement> {
  offset = 0;

  constructor(host: LitElement) {
    super(host, { context });
  }

  get level() {
    return this.value?.level ?? 2;
  }

  /**
   * Wraps any renderable content in a heading, based on heading level
   * @param content DOM content to wrap in a header
   * @param options id, hidden
   */
  wrap(content: unknown, options?: HeadingLevelTemplateOptions): TemplateResult {
    const level = this.value?.level ?? 0;
    const offset = this.value?.offset ?? 0;
    const offsetLevel = Math.max(1, level + offset);
    const id = options?.id;
    const hidden = options?.hidden ?? false;
    switch (offsetLevel) {
      case 1: return html`<h1 id="${ifDefined(id)}" ?hidden=${hidden}>${content}</h1>`;
      case 2: return html`<h2 id="${ifDefined(id)}" ?hidden=${hidden}>${content}</h2>`;
      case 3: return html`<h3 id="${ifDefined(id)}" ?hidden=${hidden}>${content}</h3>`;
      case 4: return html`<h4 id="${ifDefined(id)}" ?hidden=${hidden}>${content}</h4>`;
      case 5: return html`<h5 id="${ifDefined(id)}" ?hidden=${hidden}>${content}</h5>`;
      default: return html`<h6 id="${ifDefined(id)}" ?hidden=${hidden}>${content}</h6>`;
    }
  }
}

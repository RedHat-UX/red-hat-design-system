import type { ReactiveController, ReactiveControllerHost, TemplateResult } from 'lit';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';


export interface HeadingTemplateOptions {
  id?: string;
  hidden?: boolean;
  level?: number;
}

/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingController implements ReactiveController {
  public level: number;

  public offset: number;

  constructor(
    private host: ReactiveControllerHost & Element,
    /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
    options?: { level?: string | number | null; offset?: number },
  ) {
    host.addController(this);
    this.offset = options?.offset ?? 1;
    if (typeof options?.level === 'string') {
      this.level = parseInt(options?.level);
    } else {
      this.level = options?.level ?? 1;
    }
  }

  async hostConnected() {
    const { host } = this;
    const { tagName } = this.host;
    let query = `H1,H2,H3,H4,H5,H6`;
    const slotted = host?.querySelector(query) as Element;
    const tag = host.shadowRoot ? slotted?.tagName : undefined;
    let level: number | undefined = tag ? parseInt(tag.replace('H', '')) : undefined;
    if (!tag) {
      query = `${query},${tagName}`;
      const elements = [...document.querySelectorAll(query)] as Array<Element>;
      const index = elements.indexOf(host) || -1;
      const slice = index && index > 0 ? [...elements].slice(0, index).filter(el=>el.tagName !== tagName) : undefined;
      level = !slice || slice.length < 1 ? undefined : parseInt(slice[slice.length - 1].tagName.replace('H', ''));
    }
    this.level = level || parseInt(host?.getAttribute('heading-level') || '1');
    host.setAttribute('heading-level', `${this.level}`);
  }

  /**
   * Wraps any renderable content in a heading, based on heading level
   */
  wrap(content: unknown, options?: HeadingTemplateOptions): TemplateResult {
    const level = Math.max(1, (options?.level ?? this.level) + this.offset);
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

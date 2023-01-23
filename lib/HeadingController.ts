import type { ReactiveController, ReactiveControllerHost, TemplateResult } from 'lit';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Determines which heading level immadiately preceeds component
 * so that component can set its shadow DOM heading levels accessibly.
 */
export class HeadingController implements ReactiveController {
  /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
  public headingLevel = 1;

  constructor(public host: ReactiveControllerHost & Element) {
    this.host.addController(this);
  }

  async hostConnected() {
    const host = this.host as Element;
    const { tagName } = this.host;
    const query = `H1,H2,H3,H4,H5,H6,${tagName}`;
    const elements = [...document.querySelectorAll(query)] as Array<Element>;
    const index = elements.indexOf(host) || -1;
    const slice = index && index > 0 ? [...elements].slice(0, index).filter(el=>el.tagName !== tagName ) : undefined;
    const level = !slice || slice.length < 1 ? 1 : parseInt(slice[slice.length - 1].tagName.replace('H', ''));
    this.headingLevel = level;
    await this.host.updateComplete;
  }

  /**
   * template for a heading based on heading level
   */
  headingTemplate(heading:TemplateResult|string, options?: {
    id?: string,
    classes?: { [name: string]: string | boolean | number } | null | undefined,
    hidden?: boolean,
    level?:number
  }):TemplateResult {
    const level = options?.level || this.headingLevel;
    const classes = classMap(options?.classes || {});
    return level === 1 ? html`<h1 ?hidden=${options?.hidden} id="${ifDefined(options?.id)}" class="${classes}">${heading}</h1>`
      : level === 2 ? html`<h2 ?hidden=${options?.hidden} id="${ifDefined(options?.id)}" class="${classes}">${heading}</h2>`
      : level === 3 ? html`<h3 ?hidden=${options?.hidden} id="${ifDefined(options?.id)}" class="${classes}">${heading}</h3>`
      : level === 4 ? html`<h4 ?hidden=${options?.hidden} id="${ifDefined(options?.id)}" class="${classes}">${heading}</h4>`
      : level === 5 ? html`<h5 ?hidden=${options?.hidden} id="${ifDefined(options?.id)}" class="${classes}">${heading}</h5>`
      : html`<h6 ?hidden=${options?.hidden} id="${ifDefined(options?.id)}" class="${classes}">${heading}</h6>`;
  }
}

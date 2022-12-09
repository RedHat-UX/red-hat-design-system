import type { ReactiveController, ReactiveControllerHost } from 'lit';

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
    const { tagName } = this.host;
    const query = `H1,H2,H3,H4,H5,H6,${tagName}`;
    const elements = [...document.querySelectorAll(query)] as Array<HTMLElement | ReactiveController>;
    let found = false;
    let level = 1;
    elements.forEach(el => {
      if (el === this.host) {
        found = true;
        return;
      /* @ts-ignore */
      } else if (!found && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
        /* @ts-ignore */
        level = parseInt(el.tagName.replace('H', ''));
      }
    });
    await this.host.updateComplete;
    this.headingLevel = level;
  }
}

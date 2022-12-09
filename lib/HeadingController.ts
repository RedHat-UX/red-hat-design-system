import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
export class HeadingController implements ReactiveController {
  /** The element's current `dir` */
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

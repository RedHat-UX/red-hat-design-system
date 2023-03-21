import type { ReactiveControllerHost, ReactiveController } from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

/**
 */
export class lightdomAccessibleTextController implements ReactiveController {
  #logger?:Logger;

  constructor(public host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  async hostConnected() {
    this.#checkLinks();
    this.#checkButtons();
  }

  #checkLinks() {
    this.#logger = this.#logger || new Logger(this.host);
    for (const node of this.host.querySelectorAll('a,[role=link]')) {
      if (!this.#hasAccessibleText(node) && !!this.#logger) {
        this.#logger.warn(`This link does not have link text: "${node.outerHTML.replace(/>.*</g, '> ... <')}"`);
      }
    }
  }

  #checkButtons() {
    this.#logger = this.#logger || new Logger(this.host);
    for (const node of this.host.querySelectorAll('button,[role=button]')) {
      if (!this.#hasAccessibleText(node) && !!this.#logger) {
        this.#logger.warn(`This button does not have a label: "${node.outerHTML.replace(/>.*</g, '> ... <')}"`);
      }
    }
  }

  #hasAccessibleText(node:HTMLElement) {
    // gets non-empty string text or returns undefined
    const trimmed = (str:string|null|undefined) => !str?.trim() || str?.trim()?.length < 1 ? undefined : str?.trim();

    // gets text content of a node minus any <style> tags
    const styles = Array.from(node?.querySelectorAll('style')).map(style=>style?.textContent);
    const textContent = (el:Node|null|undefined) => {
      let text = el?.textContent;
      styles.forEach(str=>text = !str ? text : el?.textContent?.replace(str, ''));
      return trimmed(text);
    };

    /* gets label based on aria-label attribute or
       based on text of element identified by aria-labelledby attribute
    */
    const label = (el:HTMLElement|null|undefined) => trimmed(el?.getAttribute('aria-label')) || labelledby(el);
    const labelledby = (el:SVGElement|HTMLElement|null|undefined) => {
      const by = el?.getAttribute('aria-labelledby');
      return !by ? undefined : textContent(this.host.querySelector(`#${by}`));
    };

    /*
      if node contains an image gets its alt text or
      text of element identified by aria-labelledby attribute
    */
    const imageText = (el:HTMLElement) => trimmed(el.getAttribute('alt')) || labelledby(el);
    const images = Array.from(node.querySelectorAll('img')).filter(img => !!imageText(img));


    /*
      if node contains an svg gets its title's text or
      text of element identified by aria-labelledby attribute
    */
    const svgText = (el:SVGElement) => textContent(el.querySelector('title')) || labelledby(el);
    const svgs = Array.from(node.querySelectorAll('svg')).filter(svg => !!svgText(svg));

    return !!textContent(node) ||
      !!label(node) ||
      images?.length > 0 ||
      svgs?.length > 0;
  }
}

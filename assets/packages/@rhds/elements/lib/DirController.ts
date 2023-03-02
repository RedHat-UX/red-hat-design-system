import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
export class DirController implements ReactiveController {
  /** The element's current `dir` */
  public dir: string;

  constructor(public host: ReactiveControllerHost & Element) {
    this.dir = this.#getDirContext();
  }

  hostConnected() {
    this.dir = this.#getDirContext();
  }

  #getDirContext() {
    let host = this.host as Element;
    while (host) {
      const dirContext = host.closest('[dir]');
      if (dirContext?.hasAttribute('dir')) {
        return dirContext?.getAttribute('dir') || 'ltr';
      } else {
        ({ host } = (host?.getRootNode() as ShadowRoot) ?? {});
      }
    }
    return 'ltr';
  }
}

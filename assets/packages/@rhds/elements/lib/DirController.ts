import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
export class DirController implements ReactiveController {
  /** The element's current `dir` */
  public dir: 'ltr' | 'rtl' | 'auto' = 'auto';

  constructor(public host: ReactiveControllerHost & Element) {
    this.update();
  }

  hostConnected() {
    this.update();
  }

  async update() {
    const initial = this.dir;
    await this.host.updateComplete;
    this.dir = this.#getDirContext();
    if (this.dir !== initial) {
      this.host.requestUpdate();
    }
  }

  #getDirContext(): 'ltr' | 'rtl' | 'auto' {
    let host = this.host as Element;
    while (host) {
      const dirContext = host.closest('[dir]');
      if (dirContext) {
        return dirContext.getAttribute('dir') as DirController['dir'] ?? 'ltr';
      } else {
        ({ host } = (host?.getRootNode() as ShadowRoot) ?? {});
      }
    }
    return 'ltr';
  }
}

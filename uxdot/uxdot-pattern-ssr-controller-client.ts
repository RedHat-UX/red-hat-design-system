import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { noChange, type LitElement } from 'lit';

/** Hydrate the results of SSR on the client */
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
  allContent = noChange;
  htmlContent = noChange;
  jsContent = noChange;
  cssContent = noChange;
  hasCss = noChange;
  hasJs = noChange;
  hasWorkedAroundHydrationWoes = false;
  async hostConnected() {
    await this.host.updateComplete;
    this.host.requestUpdate('color-palette', null);
    await this.host.updateComplete;
    // workaround for awful terrible no good very bad ssr hydration lib problems
    const containers = this.host.shadowRoot!.querySelectorAll('#container');
    if (containers.length > 1) {
      const [, ...rest] = containers;
      for (const bad of rest) {
        bad.remove();
      }
      for (const sigh of this.host.shadowRoot!.querySelectorAll('[defer-hydration]')) {
        sigh.removeAttribute('defer-hydration');
        (sigh as LitElement).requestUpdate?.();
      }
      this.host.requestUpdate();
    }
    this.hasWorkedAroundHydrationWoes ||= (this.host.requestUpdate(), true);
  }

  hostUpdated() {
    if (!this.hasWorkedAroundHydrationWoes) {
      this.hostConnected();
    }
  }
}


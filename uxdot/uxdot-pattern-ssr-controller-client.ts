import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { noChange, type LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/** Hydrate the results of SSR on the client */
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
  allContent: ReturnType<typeof unsafeHTML> | typeof noChange = noChange;
  htmlContent: ReturnType<typeof unsafeHTML> | typeof noChange = noChange;
  jsContent: ReturnType<typeof unsafeHTML> | typeof noChange = noChange;
  cssContent: ReturnType<typeof unsafeHTML> | typeof noChange = noChange;
  hasCss: boolean | typeof noChange = noChange;
  hasJs: boolean | typeof noChange = noChange;
  hasWorkedAroundHydrationWoes = false;

  /**
   * Extract content from SSR-rendered shadow DOM before hydration.
   * Runs synchronously during connectedCallback (before the first update)
   * to provide hydration-compatible unsafeHTML directive values instead of
   * noChange primitives, which cause "Primitive found where TemplateResult
   * expected" hydration errors.
   */
  #extractSSRContent() {
    const root = this.host.shadowRoot;
    if (!root) {
      return;
    }

    const surface = root.querySelector('#content');
    if (surface) {
      // Strip Lit SSR hydration comment markers
      const content = surface.innerHTML.replace(/<!--\/?lit-[^>]*-->/g, '').trim();
      if (content) {
        this.allContent = unsafeHTML(content);
      }
    }

    // Extract highlighted code from each tab's code block
    for (const [panel, prop] of [
      ['#html-panel', 'htmlContent'],
      ['#css-panel', 'cssContent'],
      ['#js-panel', 'jsContent'],
    ] satisfies readonly [string, keyof this][]) {
      const pre = root.querySelector(`${panel} rh-code-block pre`);
      if (pre) {
        this[prop] = unsafeHTML(pre.outerHTML);
      }
    }

    this.hasCss = !!root.querySelector('#css-panel rh-code-block pre')?.textContent?.trim();
    this.hasJs = !!root.querySelector('#js-panel rh-code-block pre')?.textContent?.trim();
  }

  async hostConnected() {
    // Extract SSR content synchronously BEFORE the first update/hydration.
    // This provides unsafeHTML() directive values instead of noChange primitives,
    // ensuring forceRender recovery (if hydration fails) has content to work with.
    this.#extractSSRContent();

    await this.host.updateComplete;
    this.host.requestUpdate('colorPalette', null);
    this.host.requestUpdate('activeTab', null);
    await this.host.updateComplete;
    // workaround for awful terrible no good very bad ssr hydration lib problems
    const containers = this.host.shadowRoot!.querySelectorAll('#container');
    if (containers.length > 1) {
      // Keep the LAST container (Lit-managed with proper bindings and content);
      // remove earlier containers (SSR with broken hydration state)
      const last = containers[containers.length - 1];
      for (const container of containers) {
        if (container !== last) {
          container.remove();
        }
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

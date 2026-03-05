import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import style from './rh-icon.css' with { type: 'css' };

if (isServer) {
  await import('./ssr.js');
}

type Renderable = unknown;

export type IconResolverFunction = (set: string, icon: string) =>
  Renderable | Promise<Renderable>;

/**
 * requestIdleCallback when available, requestAnimationFrame when not
 * @param f callback
 */
const ric: typeof globalThis.requestIdleCallback =
  globalThis.requestIdleCallback
  ?? globalThis.requestAnimationFrame
  ?? (async (f: () => void) => Promise.resolve().then(f));

/** Fired when an icon fails to load */
export class IconResolveErrorEvent extends ErrorEvent {
  constructor(
    set: string,
    icon: string,
    /** The original error when importing the icon module */
    public originalError: Error
  ) {
    super('error', { message: `Could not load icon "${icon}" from set "${set}".` });
  }
}

/**
 * USE to display Red Hat brand icons as decorative or informational elements.
 * Hidden from assistive technology by default (role="presentation"). When
 * `accessible-label` is set, gains role="img" and aria-label for screen
 * readers. MUST NOT be the sole interactive element; wrap in a button or
 * link for keyboard access. Supports lazy, idle, and eager loading. AVOID
 * setting aria-hidden manually.
 *
 * @summary Displays Red Hat brand icons with configurable size and loading
 *
 * @alias icon
 *
 * @fires load - Fired when icon SVG content is loaded and rendered. Bubbles.
 *   No detail payload; check the element's `icon` and `set` properties.
 * @fires error - Fired when icon fails to load. Instance of
 *   {@link IconResolveErrorEvent} with `originalError` containing the
 *   import failure and `message` describing the icon and set.
 *
 * @cssprop --rh-icon-size
 * Controls both width and height (square aspect ratio). Defaults vary by
 * set: ui icons use `--rh-size-icon-01` (16px), standard icons use
 * `--rh-size-icon-04` (40px), microns use 12px (range 8-12px).
 */
@customElement('rh-icon')
export class RhIcon extends LitElement {
  public static readonly styles: CSSStyleSheet[] = [style];

  private static onIntersect: IntersectionObserverCallback = records =>
    records.forEach(({ isIntersecting, target }) => {
      const icon = target as RhIcon;
      icon.#intersecting = isIntersecting;
      icon.#dispatchLoad(false);
    });

  private static io = new IntersectionObserver(RhIcon.onIntersect);

  private static instances = new Set<RhIcon>();

  public static resolve: IconResolverFunction =
    (set, icon) =>
      import(`@rhds/icons/${set}/${icon}.js`)
          .then(mod => mod.default.cloneNode(true));

  /**
   * Icon set to load from. Accepts 'standard' | 'ui' | 'microns' or any
   * registered custom set name. Controls default sizing: standard=40px,
   * ui=16px, microns=12px. Defaults to 'standard'.
   */
  @property({ type: String, reflect: true }) set: IconSetName = 'standard';

  /**
   * Name of the icon within the specified set. When changed, triggers a
   * new icon load. Setting to undefined clears the rendered icon.
   * Defaults to undefined.
   */
  @property({ type: String, reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Accessible label for the icon. When set, applies `role="img"` and
   * `aria-label` so screen readers announce the icon. When absent, the
   * icon uses `role="presentation"` and is hidden from assistive technology.
   * USE for icons that convey meaning not present in surrounding text.
   * Defaults to undefined.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Controls when the icon data is fetched.
   * - `eager`: loads immediately, blocking the main thread
   * - `idle`: waits for browser idle via requestIdleCallback
   * - `lazy` (default): waits for the element to enter the viewport
   *   via IntersectionObserver. Defaults to 'lazy'.
   */
  @property() loading?: 'idle' | 'lazy' | 'eager' = 'lazy';

  /** Icon content. Any value that lit can render */
  @state() private content?: unknown;

  #intersecting = false;

  #logger = new Logger(this);

  #internals = InternalsController.of(this);

  connectedCallback(): void {
    super.connectedCallback();
    RhIcon.instances.add(this);
  }

  render(): TemplateResult {
    const { set } = this;
    const content = this.#getContent();
    return html`
      <div id="container"
           aria-hidden="${String(!!content)}"
           class="${classMap({ [set]: true })}">${!isServer ? content
        : unsafeHTML(content as unknown as string)}<!--
           Container for the fallback (i.e. slotted) content
        --><span part="fallback" ?hidden="${content}"><!--
          summary: Fallback content when icon fails to load
          description: |
            Displayed only when the icon SVG cannot be resolved.
            SHOULD contain meaningful text or an alternative image
            for screen readers if the icon conveys information.
            Hidden automatically when icon loads successfully.
        --><slot></slot></span>
      </div>
    `;
  }

  updated() {
    // this is a workaround for an apparent webkit / lit-ssr bug
    const [, ...duplicateContainers] = this.shadowRoot?.querySelectorAll('#container') ?? [];
    for (const dupe of duplicateContainers) {
      dupe.remove();
    }
  }

  #getContent() {
    if (isServer) {
      const { set = 'standard', icon } = this;
      if (!icon) {
        return '';
      }
      return globalThis.RH_ICONS.get(set)?.get(icon as never) ?? '';
    } else {
      return this.content as string ?? '';
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    RhIcon.io.unobserve(this);
    RhIcon.instances.delete(this);
  }

  @observes('icon')
  @observes('set')
  private iconChanged(): void {
    if (!this.icon) {
      this.content = null;
      return;
    }
    this.#dispatchLoad();
  }

  @observes('accessibleLabel')
  private accessibleLabelChanged(): void {
    this.#internals.ariaLabel = this.accessibleLabel ?? null;
    if (this.accessibleLabel) {
      this.#internals.role = 'img';
    } else {
      this.#internals.role = 'presentation';
    }
  }

  @observes('content' as keyof RhIcon)
  private async contentChanged(old?: unknown) {
    if (old !== this.content) {
      await this.updateComplete;
      this.dispatchEvent(new Event('load', { bubbles: true }));
    }
  }

  #lazyLoad(shouldObserve = true) {
    if (shouldObserve) {
      RhIcon.io.observe(this);
    }
    if (this.#intersecting) {
      this.#load();
    }
  }

  #dispatchLoad(shouldObserve = true) {
    switch (this.loading) {
      case 'idle': return void ric(() => this.#load());
      case 'lazy': return void this.#lazyLoad(shouldObserve);
      case 'eager': return void this.#load();
    }
  }

  async #load() {
    const { set = 'standard', icon } = this;
    if (set && icon) {
      try {
        this.content = await RhIcon.resolve?.(set, icon);
      } catch (error: unknown) {
        if (error instanceof Error) {
          this.#logger.error(error.message);
          this.dispatchEvent(new IconResolveErrorEvent(set, icon, error));
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-icon': RhIcon;
  }
}

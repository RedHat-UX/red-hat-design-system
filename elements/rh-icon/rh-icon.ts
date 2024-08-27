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

import style from './rh-icon.css';

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
 * Icons represents general concepts and can support text as a decorative element.
 * The icon element, <rh-icon>, is a container that allows users to add icons of varying
 * dimensions in the same area without shifting surrounding content.
 * @summary Decorative element which supports related content
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 * @cssprop --rh-icon-size - Override default icon size
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

  /** Icon set */
  @property({ type: String, reflect: true }) set?: IconSetName;

  /** Icon name */
  @property({ type: String, reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Defines a string value that labels the icon element.
   * Adds role="img" to element.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Controls how eager the element will be to load the icon data
   * - `eager`: eagerly load the icon, blocking the main thread
   * - `idle`: wait for the browser to attain an idle state before loading
   * - `lazy` (default): wait for the element to enter the viewport before loading
   */
  @property() loading?: 'idle' | 'lazy' | 'eager' = 'lazy';

  /** Icon content. Any value that lit can render */
  @state() protected content?: unknown;

  #intersecting = false;

  #logger = new Logger(this);

  #internals = InternalsController.of(this);

  connectedCallback(): void {
    super.connectedCallback();
    RhIcon.instances.add(this);
  }

  render(): TemplateResult {
    const { set = 'standard' } = this;
    const content = this.#getContent();
    return html`
      <div id="container"
           aria-hidden="${String(!!content)}"
           class="${classMap({ [set]: set, isServer })}">${!isServer ? content
        : unsafeHTML(content as unknown as string)}${content ? '' : html`
        <span part="fallback"><slot></slot></span>`}
      </div>
    `;
  }

  #getContent() {
    if (isServer) {
      const { set = 'standard', icon } = this;
      return globalThis.RH_ICONS.get(set)?.get(icon as never) ?? '';
    } else {
      return this.content ?? '';
    }
  }

  updated() {
    // terrible workaround for apparent lit bug: icons render twice, once for
    // ssr, then again for client-side.
    // updated() is not called on server
    this.shadowRoot?.querySelector('.isServer')?.remove();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    RhIcon.io.unobserve(this);
    RhIcon.instances.delete(this);
  }

  @observes('icon')
  @observes('set')
  private iconChanged(): void {
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

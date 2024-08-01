import { LitElement, html, type PropertyValues, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-icon.css';

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
export class IconResolveError extends ErrorEvent {
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
 * An **icon** component is a container that allows for icons of varying dimensions to
 * seamlessly replace each other without shifting surrounding content.
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 */
@customElement('rh-icon')
export class RhIcon extends LitElement {
  public static readonly styles: CSSStyleSheet[] = [style];

  private static onIntersect: IntersectionObserverCallback = records =>
    records.forEach(({ isIntersecting, target }) => {
      const icon = target as RhIcon;
      icon.#intersecting = isIntersecting;
      ric(() => {
        if (icon.#intersecting) {
          icon.load();
        }
      });
    });


  private static io = new IntersectionObserver(RhIcon.onIntersect);

  private static instances = new Set<RhIcon>();

  private static resolve: IconResolverFunction = (set: string, icon: string): Renderable =>
    import(`@rhds/icons/dist/${set}/${icon}.js`)
        .then(mod => mod.default.cloneNode(true));

  /** Icon set */
  @property() set = 'fas';

  /** Icon name */
  @property({ reflect: true }) icon = '';

  /**
   * Controls how eager the element will be to load the icon data
   * - `eager`: eagerly load the icon, blocking the main thread
   * - `idle`: wait for the browser to attain an idle state before loading
   * - `lazy` (default): wait for the element to enter the viewport before loading
   */
  @property() loading?: 'idle' | 'lazy' | 'eager' = 'lazy';

  /** Icon content. Any value that lit can render */
  @state() private content?: unknown;

  #intersecting = false;

  #logger = new Logger(this);

  #lazyLoad() {
    RhIcon.io.observe(this);
    if (this.#intersecting) {
      this.load();
    }
  }

  #load() {
    switch (this.loading) {
      case 'idle': return void ric(() => this.load());
      case 'lazy': return void this.#lazyLoad();
      case 'eager': return void this.load();
    }
  }

  async #contentChanged() {
    await this.updateComplete;
    this.dispatchEvent(new Event('load', { bubbles: true }));
  }

  connectedCallback(): void {
    super.connectedCallback();
    RhIcon.instances.add(this);
  }

  willUpdate(changed: PropertyValues<this>): void {
    if (changed.has('icon')) {
      this.#load();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    RhIcon.io.unobserve(this);
    RhIcon.instances.delete(this);
  }

  render(): TemplateResult<1> {
    const content = this.content ?? '';
    const { set } = this;
    const classes = { [set]: set };
    return html`
      <div id="container" aria-hidden="true" class="${classMap(classes)}">${content}<span part="fallback"
          ?hidden=${!!content}><slot></slot>
        </span>
      </div>
    `;
  }

  protected async load(): Promise<void> {
    const { set, icon } = this;
    const resolver = RhIcon.resolve;
    if (set && icon && typeof resolver === 'function') {
      try {
        this.content = await resolver(set, icon);
        this.#contentChanged();
      } catch (error: unknown) {
        this.#logger.error((error as IconResolveError).message);
        this.dispatchEvent(new IconResolveError(set, icon, error as Error));
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-icon': RhIcon;
  }
}

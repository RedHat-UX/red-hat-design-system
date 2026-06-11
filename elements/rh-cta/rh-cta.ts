import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-cta.css' with { type: 'css' };

function isSupportedContent(el: Element | null): el is HTMLAnchorElement | HTMLButtonElement {
  return el instanceof HTMLAnchorElement || el instanceof HTMLButtonElement;
}

/**
 * Provides a styled link or button for prominent user actions when you need to
 * draw attention to a key interaction. Must contain an `href` attribute or a
 * slotted `<a>` / `<button>`. Screen readers announce the slotted text. Used
 * primarily for linking to other pages. Users should prefer to use the `href`
 * attribute or slotted links with this component. Avoid `<button>` with the
 * default (no variant) style.
 *
 * @summary Styled link or button for prominent user actions
 *
 * @alias Call to action
 *
 */
@customElement('rh-cta')
@themable
export class RhCta extends LitElement {
  static readonly styles = [style];

  /**
   * Visual importance: `primary` (red fill), `secondary` (bordered),
   * `brick` (full-width grid), or undefined (default inline link with arrow).
   */
  @property({ reflect: true }) variant?: 'primary' | 'secondary' | 'brick';

  /** URL for the CTA link. Renders an internal `<a>` instead of using a slotted element. */
  @property({ reflect: true }) href?: string;

  /** Triggers a file download when `href` is set. Passes through to the link. */
  @property() download?: string;

  /** Referrer policy when `href` is set. Passes through to the link. */
  @property() referrerpolicy?: string;

  /** Link relationship when `href` is set. Passes through to the link. */
  @property() rel?: string;

  /** Browsing context when `href` is set (e.g. `_blank`). Passes through to the link. */
  @property() target?: string;

  /** Icon name. Overrides the default trailing arrow, or displays before text in brick variant. */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /** Icon set to load from. Defaults to `ui`. */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  override async scheduleUpdate() {
    if (this.icon || !this.variant && !customElements.get('rh-icon')) {
      await import('@rhds/elements/rh-icon/rh-icon.js');
    }
    super.scheduleUpdate();
  }

  #logger = new Logger(this);

  override render() {
    const {
      download, href, referrerpolicy, rel, target,
      icon, iconSet,
      variant,
    } = this;
    const isDefault = !variant;
    const svg = isDefault;
    const follower =
        (variant !== 'brick' && icon) ? html`<rh-icon icon="${icon}" set="${iconSet ?? 'ui'}"></rh-icon>`
      : (variant === undefined) ? html`<rh-icon icon="arrow-right" set="ui"></rh-icon>`
      : '';
    const iconContent =
      !(variant === 'brick' && icon) ? '' : html`<rh-icon .icon=${icon} set="${iconSet ?? 'ui'}"></rh-icon>`;
    const slot = html`<!--
          summary: CTA link text
          description: |
            Slot an anchor or button as the first child, or set href on the host. Screen readers
            announce this content as the CTA label. For long words, supply wbr at appropriate break points.
    --><slot></slot>`;
    const linkContent =
        !href ? slot
      : html`<a href=${href}
                download="${ifDefined(download)}"
                rel="${ifDefined(rel)}"
                referrerpolicy="${ifDefined(referrerpolicy)}"
                target="${ifDefined(target)}">${slot}</a>`;
    return html`
      <!-- container element for slotted CTA -->
      <span id="container"
            part="container"
            class=${classMap({ icon: !!icon, svg })}
            @slotchange=${this.firstUpdated}>${iconContent}${linkContent}${follower}</span>`;
  }

  override firstUpdated() {
    // workaround for lit-ssr bugs
    if (!isServer) {
      this.removeAttribute('defer-hydration');
      const [, ...duplicateContainers] = this.shadowRoot?.querySelectorAll('#container') ?? [];
      for (const dupe of duplicateContainers) {
        dupe.remove();
      }
    }
    // TODO: remove in next major version, recommend static HTML audits instead
    const { href, variant } = this;
    const cta =
         this.shadowRoot?.querySelector('a')
      ?? this.shadowRoot?.querySelector('slot')?.assignedElements().find(isSupportedContent)
      ?? null;

    if (href && cta !== this.shadowRoot?.querySelector('a')) {
      return this.#logger.warn(`When the href attribute is used, slotted content must not be a link`);
    } else if (!href && !cta) {
      return this.#logger.warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
    } else if (!href && cta instanceof HTMLButtonElement && !variant) {
      return this.#logger.warn(`Button tag is not supported semantically by the default link styles`);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-cta': RhCta;
  }
}

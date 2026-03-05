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
 * USE to style interactive links or buttons as prominent calls to action.
 * MUST contain either an `href` attribute or a slotted `<a>` or `<button>`.
 * Keyboard users MUST be able to focus via Tab and activate with Enter.
 * The element delegates focus to its inner link or button. Screen readers
 * announce the slotted link text. AVOID using `<button>` with the default
 * (no variant) style. USE `primary` for the most important page action.
 *
 * @summary Styled link or button for prominent user actions
 *
 * @alias call-to-action
 *
 * @cssprop --rh-icon-size
 * Size of the trailing icon. Controls width and height.
 * Defaults to `--rh-font-size-body-text-lg` (1.125rem).
 *
 * @cssprop --rh-cta-focus-container-outline-color
 * Outline color of the container on keyboard focus. MUST provide adequate
 * contrast for WCAG 2.4.7 compliance. Fallback: `--rh-cta-focus-outline-color`.
 *
 * @cssprop --rh-cta-focus-outline-color
 * Outline color of the inner focus indicator. Used when
 * `--rh-cta-focus-container-outline-color` is not set.
 *
 * @cssprop --rh-cta-font-size-priority
 * Font size for primary and secondary CTA variants. Defaults to
 * `--rh-font-size-body-text-md` (1rem).
 *
 * @cssprop --rh-cta-active-background-color
 * Background color during the active/pressed state. Provides visual
 * feedback on click or touch.
 */
@customElement('rh-cta')
@themable
export class RhCta extends LitElement {
  static readonly styles = [style];

  /**
   * Controls the visual importance and styling of the call to action.
   * Accepts 'primary' | 'secondary' | 'brick' or undefined (default).
   *   - **Primary**: USE for the most important page action. Red background, white text.
   *   - **Secondary**: USE for general links. Bordered with inverted hover.
   *   - **Brick**: USE to group links in a grid. Stretches to fill container width.
   *   - **Default** (undefined): USE for tertiary links. Inline text with arrow icon.
   * Defaults to undefined. AVOID using more than one primary CTA per page section.
   */
  @property({ reflect: true }) variant?: 'primary' | 'secondary' | 'brick';

  /**
   * URL for the call to action link. When set, renders an internal `<a>` tag
   * and overrides slotted anchor content. USE instead of a slotted `<a>` tag.
   * MUST NOT be combined with a slotted link. Defaults to undefined.
   */
  @property({ reflect: true }) href?: string;

  /** When `href` is set, triggers a file download. Passes through to the link's `download` attribute. Defaults to undefined. */
  @property() download?: string;

  /** When `href` is set, controls the referrer policy. Passes through to the link's `referrerpolicy` attribute. Defaults to undefined. */
  @property() referrerpolicy?: string;

  /** When `href` is set, specifies the link relationship. Passes through to the link's `rel` attribute. Defaults to undefined. */
  @property() rel?: string;

  /** When `href` is set, specifies where to open the link (e.g. '_blank'). Passes through to the link's `target` attribute. Defaults to undefined. */
  @property() target?: string;

  /** Name of the icon to display. For default variant, overrides the trailing arrow. For brick variant, displays before the text. Defaults to undefined. */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /** Icon set to load the icon from. Accepts any registered icon set name. Defaults to 'ui'. */
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
        (variant !== 'brick' && icon) ? html`<rh-icon icon=${icon} set=${iconSet ?? 'ui'}></rh-icon>`
      : (variant === undefined) ? html`<rh-icon icon="arrow-right" set="ui"></rh-icon>`
      : '';
    const iconContent =
      !(variant === 'brick' && icon) ? '' : html`<rh-icon .icon=${icon} set="${iconSet ?? 'ui'}"></rh-icon>`;
    const slot = html`<!--
          summary: CTA link or button content
          description: |
            When href is set, contains plain text for the link label.
            Otherwise, MUST contain an <a> tag as the first child.
            A <button> is allowed but MUST NOT be used with the default
            variant. Screen readers announce the slotted text as the
            accessible name for the interactive element.
    --><slot></slot>${follower}`;
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
            @slotchange=${this.firstUpdated}>${iconContent}${linkContent}</span>`;
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

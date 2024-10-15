import { LitElement, html, isServer, noChange } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { DirController } from '../../lib/DirController.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import style from './rh-cta.css';
import { state } from 'lit/decorators/state.js';

function isSupportedContent(el: Element | null): el is HTMLAnchorElement | HTMLButtonElement {
  return el instanceof HTMLAnchorElement || el instanceof HTMLButtonElement;
}

/**
 * A call to action is a styled link that entices users to make a selection.
 * @summary     Directs users to other pages or displays extra content
 * @slot
 *              The default slot contains the link text when the `href`
 *              attribute is set. In case there is no href attribute, an anchor
 *              tag (`<a href="...">`) should be the first child inside `rh-cta`
 *              element. Less preferred but allowed for specific use-cases
 *              include: `<button>` (note however that the `button` tag is not
 *              supported for the default CTA styles).
 * @csspart     container - container element for slotted CTA
 * @cssprop     {<color>} [--rh-cta-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color
 * @cssprop     [--rh-cta-background-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta background color
 * @cssprop     [--rh-cta-border-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta border color
 * @cssprop     [--rh-cta-hover-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on hover
 * @cssprop     [--rh-cta-hover-background-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta background color on hover
 * @cssprop     [--rh-cta-hover-border-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta boder color on hover
 * @cssprop     [--rh-cta-focus-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on focus
 * @cssprop     [--rh-cta-focus-background-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta background color on focus
 * @cssprop     [--rh-cta-focus-container-background-color=transparent]
 *              Sets the cta container background color on focus
 * @cssprop     [--rh-cta-focus-container-outline-color=#0066cc]
 *              Sets the cta container outline color on focus
 * @cssprop     [--rh-cta-focus-border-color=transparent]
 *              Sets the cta border color on focus
 * @cssprop     [--rh-cta-focus-inner-border-color=transparent]
 *              Sets the cta inner border color on focus
 * @cssprop     [--rh-cta-active-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on active. Applicable only for secondary variant
 * @cssprop     [--rh-cta-active-background-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta background color on active
 * @cssprop     [--rh-cta-active-container-background-color=#0066cc1a]
 *              Sets the cta container background color on active. Applicable only for default variant
 * @cssprop     [--rh-cta-active-inner-border-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta inner border color on active
 * @cssprop     [--rh-cta-text-decoration=none]
 *              Sets the cta text decoration
 * @cssprop     [--rh-cta-focus-text-decoration=none]
 *              Sets the cta text decoration on focus
 * @cssprop     [--rh-cta-hover-text-decoration=none]
 *              Sets the cta text decoration on hover
 * @cssprop     [--rh-cta-active-text-decoration=none]
 *              Sets the cta text decoration on active
 */
@customElement('rh-cta')
export class RhCta extends LitElement {
  static readonly styles = [style];

  /**
   * Indicates the importance of this call-to-action in the context of the page.
   * Will also influence how the call-to-action is styled.
   *   - **Primary**: Use for the primary or most important link. This variant is the highest in
   *       hierarchy and can also be used to play a video in a Modal or large container.
   *   - **Secondary**: Use for secondary or general links. This variant is lower in hierarchy than
   *       the Primary variant and can be used multiple times in the same container or layout.
   *   - **Brick**: Use to group links together. Only the Brick variant can stretch to fit a
   *       container or grid, otherwise the text label padding in other variants stays the same.
   *   - Default (no variant): Use for tertiary or the least important links. This variant is the
   *       lowest in hierarchy and can be used multiple times in the same container or layout.
   */
  @property({ reflect: true }) variant?: 'primary' | 'secondary' | 'brick';

  /**
   * When set, overrides the default slot. Use *instead* of a slotted anchor tag
   */
  @property({ reflect: true }) href?: string;

  /** when `href` is set, the link's `download` attribute */
  @property() download?: string;

  /** when `href` is set, the link's `referrerpolicy` attribute */
  @property() referrerpolicy?: string;

  /** when `href` is set, the link's `rel` attribute */
  @property() rel?: string;

  /** when `href` is set, the link's `target` attribute */
  @property() target?: string;

  /**
   * Icon name
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Icon set
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() @state() private on?: ColorTheme;

  protected override async getUpdateComplete(): Promise<boolean> {
    if (this.icon || !this.variant) {
      await import('@rhds/elements/rh-icon/rh-icon.js');
    }
    return super.getUpdateComplete();
  }

  /** Is the element in an RTL context? */
  #dir = new DirController(this);

  #logger = new Logger(this);

  override render() {
    const {
      download, href, referrerpolicy, rel, target,
      icon, iconSet,
      on = 'light', variant,
    } = this;
    const rtl = this.#dir.dir === 'rtl';
    const isDefault = !variant;
    const svg = isDefault;
    const iconOrSvg = isDefault || !!icon;
    const follower =
      (variant !== 'brick' && icon) ?
        html`<rh-icon .icon=${icon} .set=${iconSet ?? 'ui'}></rh-icon>`
        : (variant === undefined) ?
          html`<rh-icon set="ui" icon="arrow-right"></rh-icon>`
          : html``;
    const iconContent =
          (variant === 'brick' && icon) ?
            html`<rh-icon .icon=${icon} set="${iconSet ?? 'ui'}"></rh-icon>`
            : html``;
    const linkContent =
        !href ? html`<slot></slot>${follower}`
      : html`<a href=${href}
                download="${ifDefined(download)}"
                rel="${ifDefined(rel)}"
                referrerpolicy="${ifDefined(referrerpolicy)}"
                target="${ifDefined(target)}"><slot></slot>${follower}</a>`;
    return html`
      <span id="container"
            part="container"
            class=${classMap({ rtl, icon: !!icon, svg, on: true, [on]: true })}
            @slotchange=${this.firstUpdated}>${iconContent}${linkContent}</span>`;
  }

  override firstUpdated() {
    const { href, variant } = this;
    if (!isServer) {
      this.removeAttribute('defer-hydration');
    }
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

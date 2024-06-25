import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { DirController } from '../../lib/DirController.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import style from './rh-cta.css';

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
 * @cssprop     {<color>} --rh-cta-color
 *              Sets the cta color
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-background-color
 *              Sets the cta background color
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-border-color
 *              Sets the cta border color
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-hover-color
 *              Sets the cta color on hover
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-hover-background-color
 *              Sets the cta background color on hover
 *              {@default `var(--rh-color-brand-red-dark, #be0000)`}
 * @cssprop     --rh-cta-hover-border-color
 *              Sets the cta boder color on hover
 *              {@default `var(--rh-color-brand-red-dark, #be0000)`}
 * @cssprop     --rh-cta-focus-color
 *              Sets the cta color on focus
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-focus-background-color
 *              Sets the cta background color on focus
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-focus-container-background-color
 *              Sets the cta container background color on focus
 *              {@default transparent}
 * @cssprop     --rh-cta-focus-container-outline-color
 *              Sets the cta container outline color on focus
 *              {@default #0066cc}
 * @cssprop     --rh-cta-focus-border-color
 *              Sets the cta border color on focus
 *              {@default transparent}
 * @cssprop     --rh-cta-focus-inner-border-color
 *              Sets the cta inner border color on focus
 *              {@default transparent}
 * @cssprop     --rh-cta-active-color
 *              Sets the cta color on active. Applicable only for secondary variant
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-active-background-color
 *              Sets the cta background color on active
 *              {@default `var(--rh-color-brand-red-dark, #be0000)`}
 * @cssprop     --rh-cta-active-container-background-color
 *              Sets the cta container background color on active. Applicable only for default variant
 *              {@default #0066cc1a}
 * @cssprop     --rh-cta-active-inner-border-color
 *              Sets the cta inner border color on active
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-text-decoration
 *              Sets the cta text decoration
 *              {@default none}
 * @cssprop     --rh-cta-focus-text-decoration
 *              Sets the cta text decoration on focus
 *              {@default none}
 * @cssprop     --rh-cta-hover-text-decoration
 *              Sets the cta text decoration on hover
 *              {@default none}
 * @cssprop     --rh-cta-active-text-decoration
 *              Sets the cta text decoration on active
 *              {@default none}
 */
@customElement('rh-cta')
export class RhCta extends LitElement {
  static readonly version = '{{version}}';

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
  @property({ reflect: true }) icon?: string;

  /**
   * Icon set
   */
  @property({ attribute: 'icon-set' }) iconSet = 'far';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  protected override async getUpdateComplete(): Promise<boolean> {
    if (this.icon) {
      await import('@patternfly/elements/pf-icon/pf-icon.js');
    }
    return super.getUpdateComplete();
  }

  /**
   * The slotted `<a>` or `<button>` element
   * @deprecated use `data-analytics-` attributes instead
   */
  public get cta(): HTMLAnchorElement | HTMLButtonElement | null {
    return this.#cta;
  }

  get #cta() {
    return (
      this.shadowRoot?.querySelector('a')
      ?? this.shadowRoot?.querySelector('slot')?.assignedElements().find(isSupportedContent)
      ?? null
    );
  }

  /** Is the element in an RTL context? */
  #dir = new DirController(this);

  #logger = new Logger(this);

  override render() {
    const {
      download, href, referrerpolicy, rel, target,
      icon, iconSet,
      on = '', variant,
    } = this;
    const rtl = this.#dir.dir === 'rtl';
    const isDefault = !variant;
    const svg = isDefault;
    const iconOrSvg = isDefault || !!icon;
    const follower = !iconOrSvg ? '' : variant !== 'brick' && icon ? html`<!--
   --><pf-icon icon=${icon}
               set=${iconSet ?? 'far'}
               size="md"></pf-icon>` : variant ? '' : html`<!--
   --><svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 31.56 31.56"
           width="1em"
           focusable="false"
           aria-hidden="true">
        <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" />
      </svg>`;
    return html`
      <span id="container"
            part="container"
            class=${classMap({ rtl, icon: !!icon, svg, [on]: !!on })}
            @slotchange=${this.firstUpdated}>${variant === 'brick' && icon ? html`
        <pf-icon size="md"
                 icon=${icon}
                 set="${iconSet ?? 'far'}"></pf-icon>` : ''}${href ? html`
        <a href=${href}
           download="${ifDefined(download)}"
           rel="${ifDefined(rel)}"
           referrerpolicy="${ifDefined(referrerpolicy)}"
           target="${ifDefined(target)}"><slot></slot>${follower}</a>`
   : html`<slot></slot>${follower}`}
      </span>
    `;
  }

  override firstUpdated() {
    const { href, variant } = this;
    const cta = this.#cta;
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

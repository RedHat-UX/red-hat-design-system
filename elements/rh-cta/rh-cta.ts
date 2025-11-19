import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-cta.css';

function isSupportedContent(el: Element | null): el is HTMLAnchorElement | HTMLButtonElement {
  return el instanceof HTMLAnchorElement || el instanceof HTMLButtonElement;
}

/**
 * A call to action is styled text representing a link.
 * @summary     A call to action is styled text representing a link.
 *
 * @alias call-to-action
 *
 * @cssprop --rh-icon-size
 * Size of the icon displayed within the CTA. Controls both width and height of icon elements.
 *
 * @cssprop --rh-cta-focus-container-outline-color
 * Color of the focus outline for the CTA container. Used to indicate keyboard focus state
 * for accessibility.
 *
 * @cssprop --rh-cta-focus-outline-color
 * Color of the focus outline for the CTA link/button element. Should provide adequate
 * contrast against background for visibility.
 *
 * @cssprop --rh-cta-font-size-priority
 * Font size for priority/primary CTA variants. Used to emphasize important calls to action
 * with larger text.
 *
 * @cssprop --rh-cta-active-background-color
 * Background color when the CTA is in active/pressed state. Provides visual feedback
 * during user interaction.
 */
@customElement('rh-cta')
@themable
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

  /** Icon name */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /** Icon set */
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
          The default slot contains the link text when the \`href\`
          attribute is set. In case there is no href attribute, an anchor
          tag (\`<a href="...">\`) should be the first child inside \`rh-cta\`
          element. Less preferred but allowed for specific use-cases
          include: \`<button>\` (note however that the \`button\` tag is not
          supported for the default CTA styles).
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

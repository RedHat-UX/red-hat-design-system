import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { DirController } from '../../lib/DirController.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import style from './rh-cta.css';

import '@patternfly/elements/pf-icon/pf-icon.js';

export interface CtaData {
  href?: string;
  text?: string;
  title?: string;
  color?: string;
  type?: string;
}

const supportedTags = ['a', 'button']; // add input later
function isSupportedContent(el: Element | null): el is HTMLAnchorElement | HTMLButtonElement {
  return !!el && supportedTags.includes(el.localName);
}

const CONTENT = new WeakMap<Element, boolean>();
function contentInitialized(el: Element | null): boolean {
  return !!el && !!CONTENT.get(el);
}

function isButton(element: Element): element is HTMLButtonElement {
  return element.tagName.toLowerCase() === 'button';
}

/**
 * A call to action is a styled link that entices users to make a selection.
 *
 * @summary     Directs users to other pages or displays extra content
 *
 * @slot        
 *              We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the default CTA styles).
 *
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
 *              {@default #0066cc1a}
 * @cssprop     --rh-cta-focus-border-color
 *              Sets the cta border color on focus
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-focus-inner-border-color
 *              Sets the cta inner border color on focus
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
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
 * @cssprop     --rh-color-interactive-blue
 * @cssprop     --rh-color-interactive-blue-darker
 * @cssprop     --rh-color-interactive-blue-darkest
 * @cssprop     --rh-color-interactive-blue-lighter
 * @cssprop     --rh-color-interactive-blue-lightest
 * @cssprop     --rh-color-brand-red-on-light
 * @cssprop     --rh-color-brand-red-dark
 * @cssprop     --rh-color-text-primary-on-dark
 * @cssprop     --rh-color-text-primary-on-light
 * @cssprop     --rh-color-border-strong-on-light
 * @cssprop     --rh-color-border-strong-on-dark
 * @cssprop     --rh-color-border-subtle-on-light
 * @cssprop     --rh-color-border-subtle-on-dark
 * @cssprop     --rh-color-surface-light
 * @cssprop     --rh-color-surface-lighter
 * @cssprop     --rh-color-surface-lightest
 * @cssprop     --rh-color-surface-dark
 * @cssprop     --rh-color-surface-darker
 * @cssprop     --rh-color-surface-darkest
 * @cssprop     --rh-space-md
 * @cssprop     --rh-space-lg
 * @cssprop     --rh-space-xl
 * @cssprop     --rh-font-size-text-lg
 * @cssprop     --rh-font-size-text-xl
 * @cssprop     --rh-font-size-body-text-md
 * @cssprop     --rh-font-family-body-text
 * @cssprop     --rh-font-family-heading
 * @cssprop     --rh-font-weight-bold
 * @cssprop     --rh-font-weight-body-text-regular
 * @cssprop     --rh-line-height-lg
 * @cssprop     --rh-border-width-sm
 * @cssprop     --rh-border-radius-default
 * @cssprop     --rh-animation-speed
 * @cssprop     --rh-animation-timing
 * 
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

  @property({ reflect: true }) icon?: string;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /** The slotted `<a>` or `<button>` element */
  public cta: HTMLAnchorElement | HTMLButtonElement | null = null;

  /** true while the initializer method is running - to prevent double-execution */
  #initializing = false;

  /** Is the element in an RTL context? */
  #dir = new DirController(this);

  #logger = new Logger(this);

  get #isDefault(): boolean {
    return !this.hasAttribute('variant');
  }

  render() {
    const rtl = this.#dir.dir === 'rtl';
    const { on = '' } = this;
    const svg = !!this.#isDefault;
    const icon = !!this.icon;
    const iconOrSvg = !!this.#isDefault || !!this.icon;
    return html`
      <span id="container" part="container" class="${classMap({ rtl, [on]: !!on, icon, svg })}">
        <slot @slotchange=${this.firstUpdated}></slot>${!iconOrSvg ? '' : this.icon ? html`
        <pf-icon icon=${this.icon} size="md" set="far"></pf-icon>` : html`<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.56 31.56" focusable="false" width="1em" aria-hidden="true">
          <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" />
        </svg>`}
      </span>
    `;
  }

  firstUpdated() {
    let [cta] = this.shadowRoot?.querySelector('slot')?.assignedElements() ?? [];

    while (cta instanceof HTMLSlotElement) {
      [cta] = cta.assignedElements();
    }

    if (contentInitialized(cta) || this.#initializing) {
      return;
    }

    this.#initializing = true;

    // If the first child does not exist or that child is not a supported tag
    if (!isSupportedContent(cta)) {
      return this.#logger.warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
    } else if (isButton(cta) && !this.variant) {
      return this.#logger.warn(`Button tag is not supported semantically by the default link styles`);
    } else {
      // Capture the first child as the CTA element
      this.cta = cta;

      CONTENT.set(this.cta, true);
      this.#initializing = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-cta': RhCta;
  }
}

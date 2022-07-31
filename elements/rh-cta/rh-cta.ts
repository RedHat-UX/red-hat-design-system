import type { ColorPalette, ColorTheme } from '@patternfly/pfe-core';

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-cta.css';
import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';

export interface CtaData {
  href?: string;
  text?: string;
  title?: string;
  color?: string;
  type?: string;
}

const supportedTags = ['a', 'button']; // add input later
function isSupportedContent(el: Element|null): el is HTMLAnchorElement|HTMLButtonElement {
  return !!el && supportedTags.includes(el.localName);
}

const CONTENT = new WeakMap<Element, boolean>();
function contentInitialized(el: Element|null): boolean {
  return !!el && !!CONTENT.get(el);
}

function isButton(element: Element): element is HTMLButtonElement {
  return element.tagName.toLowerCase() === 'button';
}

export class CtaSelectEvent extends ComposedEvent {
  /** @summary The CTA Data for the event */
  public data: CtaData;
  constructor(
    /** The CTA Element which was selected */
    cta: RhCta,
    /** @summary The originating event */
    public originEvent: Event
  ) {
    super('select');
    this.data = {
      href: (cta.cta as HTMLAnchorElement).href,
      text: (cta.cta as HTMLAnchorElement).text,
      title: cta.cta?.title,
      color: cta.colorPalette,
      type: cta.priority,
    };
    // Append the variant to the data type
    if (cta.variant) {
      this.data.type = `${this.data.type} ${cta.variant}`;
    }

    // Override type if set to disabled
    if (cta.getAttribute('aria-disabled')) {
      this.data.type = 'disabled';
    }
  }
}

/**
 * Call to action stands out from regular hypertext links, and is used for linking users to webpages.
 *
 * @summary Directs a user to other pages or displays extra content
 *
 * @slot - We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the default CTA styles).
 *
 * @fires {CtaSelectEvent} select - This event is fired when a link is clicked and serves as a way to capture click events if necessary.
 *
 * @csspart container - container element for slotted CTA
 *
 */
@customElement('rh-cta')
export class RhCta extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [style];

  /**
   * Indicates the importance of this call-to-action in the context of the page.
   * Will also influence how the call-to-action is styled.
   */
  @property({ reflect: true }) priority?: 'primary'|'secondary';

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
  @colorContextConsumer()
  @property({ reflect: true }) on?: ColorTheme;

  /**
   * `priority="secondary"` has a `wind` variant (`variant="wind"`) that can be applied to change the style of the secondary call-to-action.
   *
   * ```html
   * <rh-cta priority="secondary" variant="wind">
   *   <a href="#">Wind variant</a>
   * </rh-cta>
   * ```
   */
  @property({ reflect: true }) variant?: 'wind';

  /** The slotted `<a>` or `<button>` element */
  public cta: HTMLAnchorElement|HTMLButtonElement|null = null;

  /** true while the initializer method is running - to prevent double-execution */
  #initializing = false;

  #logger = new Logger(this);

  get #isDefault(): boolean {
    return !this.hasAttribute('priority');
  }

  render() {
    return html`
      <span id="container" part="container">
        <slot @slotchange=${this.connectedCallback}></slot>${!this.#isDefault ? '' : html`
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.56 31.56" focusable="false" width="1em">
            <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" />
          </svg>`}
      </span>
    `;
  }

  /** Initialize the component */
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    const content = this.firstElementChild;

    if (contentInitialized(content) || this.#initializing) {
      return;
    }

    this.#initializing = true;

    // If the first child does not exist or that child is not a supported tag
    if (!isSupportedContent(content)) {
      return this.#logger.warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
    } else if (isButton(content) && !this.priority && this.getAttribute('aria-disabled') !== 'true') {
      return this.#logger.warn(`Button tag is not supported semantically by the default link styles`);
    } else {
      // Capture the first child as the CTA element
      this.cta = content;

      // Attach the click listener
      this.cta.addEventListener('click', e => this.#onClick(e));
      this.cta.addEventListener('keyup', e =>
        (e as KeyboardEvent).key === 'Enter' ? this.#onClick(e) : null);

      CONTENT.set(this.cta, true);
      this.#initializing = false;
    }
  }

  /** On click, trigger click event */
  #onClick(originEvent: Event) {
    this.dispatchEvent(new CtaSelectEvent(this, originEvent));
  }
}

 declare global {
   interface HTMLElementTagNameMap {
     'rh-cta': RhCta;
   }
 }


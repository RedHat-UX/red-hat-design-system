import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-back-to-top.css';


/**
 * Back to top component is a fragment link that allows users to quickly navigate
 * to the top of a lengthy content page.
 *
 * @summary A shortcut to the top of the page content
 *
 * @alias back-to-top
 *
 * @cssprop --rh-back-to-top-background-color
 * Background color for the back to top button. Defaults to `--rh-color-accent-base`,
 * which uses the design system's primary interactive blue color and automatically
 * adapts to light and dark color schemes (Blue 60 in light, Blue 30 in dark).
 *
 * ## Usage guidelines
 * - Most projects should use the default accent color for consistency
 * - Customize for brand-specific campaigns or special events requiring unique themes
 * - Custom values must maintain adequate color contrast with text (4.5:1 ratio minimum)
 * - Should provide appropriate colors for both light and dark color schemes
 *
 * @example Customizing the background color
 * ```css
 * .custom-theme {
 *   --rh-back-to-top-background-color: var(--custom-brand-color);
 * }
 * ```
 */
@customElement('rh-back-to-top')
export class RhBackToTop extends LitElement {
  static readonly styles = [styles];

  /**
   * Controls the visibility behavior of the back to top button.
   *
   * - `undefined` (default) - Button appears automatically after scrolling past `scroll-distance`
   * - `always` - Button is always visible, ignoring scroll position
   *
   * ## Usage guidelines
   * - Use the default behavior for most cases to avoid cluttering the viewport
   * - Use `visible="always"` only for testing or special use cases where the button
   *   should be permanently visible regardless of scroll position
   *
   * @example Always visible
   * ```html
   * <rh-back-to-top visible="always">Back to top</rh-back-to-top>
   * ```
   */
  @property({ reflect: true, attribute: 'visible' }) visible?: 'always' | undefined;

  /**
   * CSS selector for the element to monitor for scroll events.
   *
   * When not provided, the component monitors the window's scroll position (default behavior).
   * When provided, monitors the specified element's scroll position instead.
   *
   * ## Usage guidelines
   * - Use the default (window scrolling) for standard page layouts
   * - Set a selector when the main scrollable content is within a specific container element
   * - The selector must point to a scrollable element (with overflow: auto or scroll)
   * - Useful for single-page applications with scrollable panels
   *
   * @example Monitor a specific container
   * ```html
   * <rh-back-to-top scrollable-selector="#main-content">Back to top</rh-back-to-top>
   * ```
   */
  @property({ reflect: true, attribute: 'scrollable-selector' }) scrollableSelector?: string;

  /**
   * Distance in pixels from the top of the scrollable element to trigger button visibility.
   *
   * The button appears when the user scrolls past this threshold and disappears when
   * scrolling back above it. Default is 400px.
   *
   * ## Usage guidelines
   * - Default 400px works well for most standard page layouts
   * - Increase for longer pages where users need more scroll before the button appears
   * - Decrease for shorter pages or containers where users reach the bottom quickly
   * - Consider page fold height and content length when customizing
   *
   * @example Custom scroll threshold
   * ```html
   * <rh-back-to-top scroll-distance="800">Back to top</rh-back-to-top>
   * ```
   */
  @property({ type: Number, attribute: 'scroll-distance' }) scrollDistance = 400;

  /**
   * Page fragment identifier (anchor) for the target element to scroll to.
   *
   * Must be a hash link pointing to an element ID on the page. The hash symbol (#)
   * is automatically prepended if not provided.
   *
   * ## Usage guidelines
   * - The target element should be near the top of the page (typically the page title or skip link)
   * - Ensure the target element has a matching `id` attribute
   * - Common targets: `#top`, `#main`, `#content`, or the page's main heading ID
   * - Without this attribute, clicking the button scrolls to the top of the page/container
   *
   * ## Accessibility
   * - The href creates a proper anchor link for keyboard and screen reader users
   * - Provides a fallback navigation method if JavaScript is disabled
   *
   * @example Link to page top
   * ```html
   * <rh-back-to-top href="#top">Back to top</rh-back-to-top>
   * ```
   */
  @property({ reflect: true }) href?: string;

  #scrollSpy = false;

  #visible = false;

  #scrollElement?: Element | Window;

  get #rootNode(): Document | ShadowRoot {
    const root = this.getRootNode();
    if (root instanceof Document || root instanceof ShadowRoot) {
      return root;
    } else {
      return document;
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.#addScrollListener();
    }

    if (this.href && this.href.charAt(0) !== '#') {
      this.href = `#${this.href}`;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#removeScrollListener();
  }

  override willUpdate(changed: PropertyValues<this>): void {
    if (changed.has('scrollableSelector')) {
      this.#addScrollListener();
    }
    if (changed.has('visible')) {
      this.#toggleVisibility();
    }
  }

  render() {
    return html`
      <!-- summary: anchor link that triggers scroll to top
           description: |
             The clickable link element that navigates to the top of the page or specified target.
             This part can be styled to customize the button's appearance including hover states,
             borders, shadows, and positioning. The button uses a pill shape with the accent color
             background and includes both text and an upward caret icon. -->
      <a href="${ifDefined(this.href)}" ?hidden="${!this.#visible}" part="trigger">
        <!-- summary: link text content (default slot)
             description: |
               Text displayed within the back to top button. Defaults to "Back to top" if not provided.
               Keep text short and action-oriented. Should clearly indicate the button will navigate
               to the top of the page. Common alternatives include "Top", "Back to top", or localized
               equivalents. The text appears alongside an upward caret icon. -->
        <slot>Back to top</slot>
        <rh-icon set="ui" icon="caret-up"></rh-icon>
      </a>
    `;
  }

  #removeScrollListener() {
    this.#scrollElement?.removeEventListener('scroll', this.#toggleVisibility);
  }

  #addScrollListener() {
    this.#removeScrollListener();

    // scrollable-selector attribute cannot be empty:
    if (this.scrollableSelector?.trim() === '') {
      return;
    }

    this.#scrollSpy = !!this.scrollableSelector;
    if (this.#scrollSpy && this.scrollableSelector) {
      const scrollableElement = this.#rootNode.querySelector(this.scrollableSelector);
      if (!scrollableElement) {
        return;
      }
      this.#scrollElement = scrollableElement;
    } else {
      this.#scrollElement = window;
    }

    this.#scrollElement.addEventListener('scroll', this.#toggleVisibility, { passive: true });
    this.#toggleVisibility();
  }

  #toggleVisibility = () => {
    if (this.visible && this.visible === 'always') {
      this.#visible = true;
      this.requestUpdate();
      return;
    }
    const previousVisibility = this.#visible;
    if (this.#scrollElement) {
      const scrolled =
          (this.#scrollElement instanceof Window) ?
          this.#scrollElement.scrollY
        : this.#scrollElement.scrollTop;
      this.#visible = (scrolled > this.scrollDistance);
      if (previousVisibility !== this.#visible) {
        this.requestUpdate();
      }
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-back-to-top': RhBackToTop;
  }
}

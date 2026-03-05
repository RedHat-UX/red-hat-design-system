import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-back-to-top.css' with { type: 'css' };


/**
 * Back to top component is a fragment link that allows users to quickly navigate
 * to the top of a lengthy content page.
 *
 * @summary A shortcut to the top of the page content
 *
 * @alias back-to-top
 */
@customElement('rh-back-to-top')
export class RhBackToTop extends LitElement {
  static readonly styles = [styles];

  /** Flag to always show back to top button, defaults to false. */
  @property({ reflect: true, attribute: 'visible' }) visible?: 'always' | undefined;

  /** Element selector to spy on for scrolling. Not passing a selector defaults to spying on window scroll events */
  @property({ reflect: true, attribute: 'scrollable-selector' }) scrollableSelector?: string;

  /** Distance from the top of the scrollable element to trigger the visibility of the back to top button */
  @property({ type: Number, attribute: 'scroll-distance' }) scrollDistance = 400;

  /** Page fragment link to target element, must include hash ex: #top */
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
      <!-- back to top link anchor element -->
      <a href="${ifDefined(this.href)}" ?hidden="${!this.#visible}" part="trigger">
        <!-- Text for the back to top link -->
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

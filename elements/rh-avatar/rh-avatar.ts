import type { RandomPatternController } from './random-pattern-controller.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { LitElement, html, isServer, type PropertyValues } from 'lit';

import { themable } from '../../lib/themable.js';

import styles from './rh-avatar.css' with { type: 'css' };

/**
 * Provides a circular user thumbnail for mastheads, cards, and attribution when
 * you need to visually identify a person. Allows an image, a deterministic
 * pattern, or a default icon. Must not take focus or act as a control; images
 * carry `role="presentation"`. Authors should provide a name via the
 * default slot so screen readers have context.
 *
 * @summary Circular user thumbnail for mastheads, navigation, and attribution
 *
 * @slot - The user's display name — provides the accessible label for screen readers. Accepts text or an anchor for linked names.
 * @slot subtitle - Auxiliary info such as job title. Accepts text or `<a>` elements. Slotted anchors receive interactive color token styles. Screen readers announce this after the name.
 *
 * @csspart canvas - The `<canvas>` used for generated geometric patterns.
 * @csspart img - The `<img>` or default `<svg>` silhouette icon.
 *
 * @cssprop [--rh-avatar-size=var(--rh-size-icon-06, 64px)] - Thumbnail width and height; capped at the `--rh-size-icon-06` token (64px).
 * @cssprop [--rh-avatar-colors] - Space-separated hex values overriding the built-in light-dark pattern color tokens.
 *
 * @alias avatar
 */
@customElement('rh-avatar')
@themable
export class RhAvatar extends LitElement {
  static readonly styles = [styles];

  /**
   * URL to a custom avatar image. Replaces the default icon and any
   * generated pattern. The `<img>` has `role="presentation"`.
   */
  @property({ reflect: true }) src?: string;

  /**
   * The user's display name. Falls back as default slot content and
   * seeds the deterministic pattern generator when `pattern` is set.
   */
  @property({ reflect: true }) name?: string;

  /**
   * Auxiliary text such as job title or company. Falls back as default
   * content in the `subtitle` slot.
   */
  @property({ reflect: true }) subtitle?: string;

  /**
   * Thumbnail position relative to text: `'inline'` (default, left of text)
   * or `'block'` (stacked above). Both collapse to centered block below 576px.
   */
  @property({ reflect: true }) layout?: 'inline' | 'block';

  /**
   * Type of geometric pattern (`'squares'` or `'triangles'`). Generated
   * deterministically from `name` so the same name always yields the same
   * pattern. Colors come from the `--_colors` CSS custom property.
   *
   * @see [Style](https://ux.redhat.com/elements/avatar/style/)
   */
  @property({ reflect: true }) pattern?: 'squares' | 'triangles';

  /**
   * When true, visually hides the name and subtitle via CSS clip while
   * keeping them accessible to screen readers.
   */
  @property({ reflect: true, type: Boolean }) plain = false;

  /**
   * Adds a subtle border around the thumbnail when set to `'bordered'`.
   */
  @property({ reflect: true }) variant?: 'bordered';

  #style?: CSSStyleDeclaration;

  #pattern?: RandomPatternController;


  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#normalize();
    }
  }

  /**
   * Trims whitespace-only text nodes so they don't override attribute-driven
   * default slot content.
   */
  #normalize() {
    for (const node of this.childNodes) {
      if (node instanceof Text && !node.data.trim()) {
        node.data = node.data.trim();
      }
    }
    this.normalize();
  }

  render() {
    return html`
      <div id="container">${this.pattern ? html`
        <!--
          summary: Canvas for generated pattern
          description: |
            Renders a deterministic geometric pattern seeded by the user's name.
            Only present when the pattern attribute is set.
        -->
        <canvas part="canvas"></canvas>` : this.src ? html`
        <!--
          summary: Custom avatar image
          description: |
            Displays the user's uploaded photo when src is set. Circular crop,
            sized by --rh-avatar-size. Has role="presentation".
        -->
        <img src="${this.src}" role="presentation" part="img">` : html`
        <!--
          summary: Default silhouette icon
          description: |
            Fallback SVG shown when neither src nor pattern is provided.
            Has role="presentation".
        -->
        <svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36" role="presentation" part="img" id="default">
          <path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/>
          <path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/>
          <path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/>
          <path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
        </svg>
        `}
        <!--
          summary: The user's display name
          description: |
            Primary identity text. Falls back to the name attribute when empty.
            Should always be provided for accessibility.
        -->
        <slot id="title">${this.name}</slot>
        <!--
          summary: Auxiliary user info (e.g. job title)
          description: |
            Secondary text below the name. Falls back to the subtitle attribute.
            Slotted anchors receive interactive link color styles.
        -->
        <slot id="subtitle" name="subtitle">${this.subtitle}</slot>
      </div>
    `;
  }

  async updated(changed: PropertyValues<this>) {
    if ((changed.has('pattern') && this.pattern)
        || (this.#pattern && changed.has('name') || changed.has('on' as keyof RhAvatar))) {
      this.updatePattern();
    }
  }

  async #initPattern() {
    const { RandomPatternController } = await import('./random-pattern-controller.js');
    const canvas = this.shadowRoot?.querySelector('canvas');
    if (canvas) {
      this.#style ??= getComputedStyle(canvas);
      return new RandomPatternController(this, canvas);
    }
  }

  /**
   * Re-renders the geometric pattern. Called automatically when `pattern`
   * or `name` change; call manually after updating CSS custom properties.
   */
  async updatePattern() {
    this.#pattern ??= await this.#initPattern();
    if (this.#pattern) {
      const size = parseInt(this.#style?.getPropertyValue('width') ?? '0');
      const colors = this.#style?.getPropertyValue('--_colors')?.split(/\s+/) ?? [];
      const { name, pattern } = this;
      this.#pattern.render({ size, colors, name, pattern });
    }
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-avatar': RhAvatar;
  }
}

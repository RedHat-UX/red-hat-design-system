import type { RandomPatternController } from './random-pattern-controller.js';

import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { themable } from '@rhds/elements/lib/themable.js';

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

  render() {
    const { layout, name, pattern, plain, src, subtitle, variant } = this;
    const bordered = variant === 'bordered';
    const inline = layout === 'inline';
    const block = layout === 'block';

    return html`
      <div id="container"
           class="${classMap({ inline, block, plain, bordered })}">${pattern ? html`
        <!-- Target the canvas element -->
        <canvas part="canvas"></canvas>` : src ? html`
        <!-- Targets the img or svg element. Avoid using this part for theming -->
        <img part="img" src="${src}" role="presentation">` : html`
        <svg id="default"
             viewBox="0 0 36 36"
             role="presentation"
             part="img">
          <path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/>
          <path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/>
          <path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/>
          <path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
        </svg>
        `}
        <div id="title">
          <!--
            The subject's name. Should contain inline text, optionally wrapped in a link.
            When \`plain\` is set, the name and subtitle are used as accessible labels
          -->
          <slot>${name}</slot>
        </div>
        <div id="subtitle">
          <!--
            Auxiliary information about the subject, e.g. job title. Should contain inline text, optional links.
            When \`plain\` is set, the name and subtitle are used as accessible labels
          -->
          <slot name="subtitle">${subtitle}</slot>
        </div>
      </div>
    `;
  }

  async updated(changed: PropertyValues<this>) {
    if ((changed.has('pattern') && this.pattern) || (changed.has('name') && this.#pattern)) {
      this.updatePattern();
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
   * @deprecated a future version will remove this public method
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

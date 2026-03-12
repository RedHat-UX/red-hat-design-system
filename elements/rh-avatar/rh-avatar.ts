import type { RandomPatternController } from './random-pattern-controller.js';

import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-avatar.css' with { type: 'css' };

/**
 * Provides a small thumbnail representation of a user, including image and optional
 * title and subtitle. Use when representing a specific person by image, name, and/or
 * job title.
 *
 * @summary Visually represents a user in a masthead or navigation
 *
 * @alias avatar
 */
@customElement('rh-avatar')
@themable
export class RhAvatar extends LitElement {
  static readonly styles = [styles];

  /**
   * The URL to the user's custom avatar image.
   *
   * It will be displayed instead of a random pattern.
   */
  @property({ reflect: true }) src?: string;

  /**
   * The user's name, either given name and family name, or username.
   *
   * When displaying a pattern, the name will be used to seed the pattern generator.
   * When \`plain\` is set, the name and subtitle are used as accessible labels
   */
  @property({ reflect: true }) name?: string;

  /**
   * Auxiliary information about the user. May be used to add job title, company, etc.
   * When \`plain\` is set, the name and subtitle are used as accessible labels
   */
  @property({ reflect: true }) subtitle?: string;

  /** Places avatar on the left or on top of the text. */
  @property({ reflect: true }) layout?: 'inline' | 'block';

  /** The type of pattern to display. */
  @property({ reflect: true }) pattern?: 'squares' | 'triangles';

  /** When true, hides the title and subtitle */
  @property({ reflect: true, type: Boolean }) plain = false;

  /** Adds a subtle border to the avatar image */
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
   * Page authors may include whitespace in the element while also using `name`
   * or `subtitle` attributes to inject default content. In those cases, any
   * slotted text nodes, even if consisting solely of white-space, will override
   * the default content (i.e. attribute values)
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
   * Called when the pattern or name changes
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

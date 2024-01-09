import type { RandomPatternController } from './random-pattern-controller.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { LitElement, html, type PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';

import styles from './rh-avatar.css';

const lightSVG = html`<svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36" role="presentation" part="img">
<style>.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#f0f0f0}.st2{fill:#b8bbbe}.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#d2d2d2}.st4{fill:#d2d2d2}</style><path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/><path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/><path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
</svg>`;
const darkSVG = html`<svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36" role="presentation" part="img">
<style>.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#212427}.st2{fill:#4F5255}.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#6A6E73}.st4{fill:#6A6E73}</style><path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/><path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/><path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
</svg>`;

const DEFAULT_AVATARS = {
  light: lightSVG,
  lighter: lightSVG,
  lightest: lightSVG,
  dark: darkSVG,
  darker: darkSVG,
  darkest: darkSVG,
};


/**
 * An avatar is a small thumbnail representation of a user.
 *
 * @summary Visually represents a user in a masthead or navigation
 *
 * @slot                                                  - The subject's name
 * @slot subtitle                                         - auxiliary information about the subject, e.g. job title
 * @cssprop {<color>+} --rh-avatar-colors                 - List of colors to use when generating avatars
 * @cssprop {<length>} --rh-avatar-size                   - Size of the avatar, {@default 64px}
 */
@customElement('rh-avatar')
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
   */
  @property({ reflect: true }) name?: string;

  /** The auxiliary information about the user, e.g. job title */
  @property({ reflect: true }) subtitle?: string;

  /** The type of pattern to display. */
  @property({ reflect: true }) layout?: 'inline' | 'block';

  /** The type of pattern to display. */
  @property({ reflect: true }) pattern?: 'squares' | 'triangles';

  /** When true, hides the title and subtitle */
  @property({ reflect: true, type: Boolean }) plain = false;

  @colorContextConsumer() private on?: ColorPalette;

  #style?: CSSStyleDeclaration;

  #pattern?: RandomPatternController;

  #screen = new ScreenSizeController(this);

  connectedCallback() {
    super.connectedCallback();
    this.#normalize();
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

  render() {
    const { on = '' } = this;
    const { mobile } = this.#screen;
    return html`
      <div id="container" class="${classMap({ mobile, [on]: !!on })}">${this.pattern ? html`
        <canvas part="canvas"></canvas>` : this.src ? html`
        <img src="${this.src}" role="presentation" part="img">` : html`${DEFAULT_AVATARS[this.on ?? 'light']}`}
        <slot id="title">${this.name}</slot>
        <slot id="subtitle" name="subtitle">${this.subtitle}</slot>
      </div>
    `;
  }

  async updated(changed: PropertyValues<this>) {
    if ((changed.has('pattern') && this.pattern) ||
        (this.#pattern && changed.has('name') || changed.has('on' as keyof RhAvatar))) {
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

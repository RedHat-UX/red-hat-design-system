import type { RandomPatternController } from './random-pattern-controller.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { html, type PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { BaseAvatar } from '@patternfly/elements/pf-avatar/BaseAvatar.js';

import styles from './rh-avatar.css';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * An avatar is a visual used to represent a user. It may contain an image or
 * a placeholder graphic.
 *
 *
 * @summary  An avatar is a visual used to represent a user.
 *
 * @cssprop {<color>[]} --rh-avatar-colors list of colors to use when generating avatars
 *
 */
@customElement('rh-avatar')
export class RhAvatar extends BaseAvatar {
  static readonly styles = [...BaseAvatar.styles, styles];

   /**
    * Sets color theme based on parent context
    */
   @colorContextConsumer()
   @property({ reflect: true }) on?: ColorTheme;

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
  @property({ reflect: true }) name = '';

  /**
   * The type of pattern to display.
   */
  @property({ reflect: true }) pattern?: 'squares'|'triangles';

  /**
  * The shape of the avatar itself.
  */
  @property({ reflect: true }) shape: 'square'|'circle'|'rounded' = 'square';

  #style?: CSSStyleDeclaration;

  #logger = new Logger(this);

  #pattern?: RandomPatternController;

  render() {
    const { on = '' } = this;
    return html`
      <div id="container" class="${classMap({ [on]: !!on })}">${this.pattern ? html`
        <canvas part="canvas"></canvas>` : html`
        <img src="${ifDefined(this.src)}" alt="" part="img">`}
        <slot></slot>
        <slot name="subtitle"></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#style = getComputedStyle(this);
  }

  async updated(changed: PropertyValues<this>) {
    if (changed.has('pattern') && this.pattern) {
      const { RandomPatternController } = await import('./random-pattern-controller.js');
      const { name, pattern } = this;
      const size = parseInt(this.#style?.getPropertyValue('width') ?? '0');
      const canvas = this.shadowRoot?.querySelector('canvas') as HTMLCanvasElement;
      const colors = this.#style?.getPropertyValue('--rh-avatar-colors')?.split(/\s+/) ?? [];
      this.#pattern ??= new RandomPatternController(this, {
        name,
        pattern,
        canvas,
        size,
        colors,
      });
    }
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-avatar': RhAvatar;
  }
}

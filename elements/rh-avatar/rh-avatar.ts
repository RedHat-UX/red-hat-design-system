import { customElement, property } from 'lit/decorators.js';
import { html, type PropertyValues } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { hash } from './lib/djb-hash.js';
import { hsl2rgb, rgb2hsl, type RGBTriple } from './lib/hslrgb.js';

import { BaseAvatar } from '@patternfly/elements/pf-avatar/BaseAvatar.js';

import styles from './rh-avatar.css';

type Vector2D = [x: number, y: number];

const HEX_PARSERS = {
  // ex: "#0fc"
  [4 as number]: {
    regexp: /^#([A-f0-9])([A-f0-9])([A-f0-9])$/,
    parser: (c: string) => parseInt(`${c}${c}`, 16),
  },
  // ex: "#00ffcc"
  [7 as number]: {
    regexp: /^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/,
    parser: (c: string) => parseInt(c, 16),
  },
};

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
  @property({ reflect: true }) pattern: 'squares'|'triangles' = 'squares';

  /**
  * The shape of the avatar itself.
  */
  @property({ reflect: true }) shape: 'square'|'circle'|'rounded' = 'square';

  #style?: CSSStyleDeclaration;

  #logger = new Logger(this);

  #colors?: [string, string][];
  #squareSize = 0;
  #triangleSize = 0;
  #colorIndex = -1;
  #color1 = '';
  #color2 = '';
  #canvas?: HTMLCanvasElement;
  #ctx?: CanvasRenderingContext2D;

  render() {
    return html`
      <canvas part="canvas" ?hidden=${!!this.src}></canvas>
      <img .src="${this.src}" ?hidden=${!this.src} alt="" part="img">
    `;
  }

  firstUpdated() {
    this.#style = getComputedStyle(this);
    try {
      this.#initCanvas();
      this.dispatchEvent(new Event('ready'));
    } catch (e: any) {
      this.#logger.warn(e.message);
    }
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has('name') || changed.has('src') || changed.has('pattern')) {
      this.#update();
    }
  }

  #initCanvas() {
    this.#canvas ??= this.shadowRoot?.querySelector('canvas') ?? undefined;

    if (!this.#canvas) {
      throw new Error('canvas unavailable');
    }

    const size = parseInt(this.#style?.getPropertyValue('width') ?? '0');

    this.#canvas.width = size;
    this.#canvas.height = size;

    this.#squareSize = this.#canvas.width / 8;
    this.#triangleSize = this.#canvas.width / 4;

    this.#ctx = this.#canvas.getContext('2d') as CanvasRenderingContext2D;
    this.#update();
  }

  #update() {
    // if we have a src element, update the img, otherwise update the random pattern
    if (!this.src) {
      this.#colors ??= this.#initColors();
      const bitPattern = hash(this.name).toString(2);
      const arrPattern = bitPattern.split('').map(n => Number(n)) as Vector2D;
      this.#colorIndex = Math.floor(
        (this.#colors.length * parseInt(bitPattern, 2)) /
        Math.pow(2, 32)
      );
      [this.#color1, this.#color2] = this.#colors[this.#colorIndex] ?? [];

      this.#clear();
      this.#drawBackground();
      if (this.pattern === 'squares') {
        this.#drawSquarePattern(arrPattern);
      } else if (this.pattern === 'triangles') {
        this.#drawTrianglePattern(arrPattern);
      }
    }
  }

  #initColors() {
    const colors: [string, string][] = [];

    this.#style?.getPropertyValue('--rh-avatar-colors')?.split(/\s+/).forEach(colorCode => {
      const { regexp, parser } = HEX_PARSERS[colorCode.length] ?? {};
      if (regexp && parser) {
        const [, ...pattern] = regexp.exec(colorCode) ?? [];
        if (pattern.length) {
          const color = pattern.map(parser) as RGBTriple;
          colors.push([
            `rgb(${color.join(',')})`,
            `rgb(${adjustColor(color).join(',')})`,
          ]);
        } else {
          this.#logger.warn(`invalid color ${colorCode}`);
        }
      }
    });

    return colors;
  }

  #clear() {
    if (this.#ctx && this.#canvas) {
      this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
  }

  #drawBackground() {
    if (this.#ctx && this.#canvas) {
      this.#ctx.fillStyle = this.#color1;
      this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
  }

  #drawSquarePattern(pattern: Vector2D) {
    if (this.#ctx) {
      this.#ctx.fillStyle = this.#color2;
      let i = pattern.length;
      while (i--) {
        if (pattern[i]) {
          this.#drawMirroredSquare(i % 4, Math.floor(i / 4));
        }
      }
    }
  }

  /**
   * Draw a square at the given position, mirrored onto both the left and right half of the canvas.
   */
  #drawMirroredSquare(x: number, y: number) {
    if (this.#ctx) {
      this.#drawSquare(x, y);
      this.#drawSquare(7 - x, y);
    }
  }

  #drawSquare(x: number, y: number) {
    if (this.#ctx) {
      this.#ctx.fillRect(
        this.#squareSize * x,
        this.#squareSize * y,
        this.#squareSize,
        this.#squareSize
      );
    }
  }

  #drawTrianglePattern(pattern: number[]) {
    if (this.#ctx) {
      this.#ctx.fillStyle = this.#color2 ?? '';
      let i = pattern.length;
      while (i--) {
        if (pattern[i]) {
          const x = Math.floor(i / 2) % 2;
          const y = Math.floor(i / 4);
          const alt = i % 4;

          const p1: Vector2D = [x, y];
          const p2: Vector2D = [x, y];
          const p3: Vector2D = [x, y];

          switch (alt) {
            case 0:
              p2[1]++;
              p3[0]++;
              p3[1]++;
              break;
            case 1:
              p2[0]++;
              p3[0]++;
              p3[1]++;
              break;
            case 2:
              p2[0]++;
              p3[1]++;
              break;
            case 3:
              p1[0]++;
              p2[0]++;
              p2[1]++;
              p3[1]++;
              break;
          }

          this.#drawMirroredTriangle(p1, p2, p3);
        }
      }
    }
  }

  /**
   * Draw a square at the given position in the top-left quadrant of the
   * canvas, and mirrored to the other three quadrants.
   */
  #drawMirroredTriangle(p1: Vector2D, p2: Vector2D, p3: Vector2D) {
    if (this.#ctx) {
      this.#drawTriangle(p1, p2, p3);
      this.#drawTriangle([4 - p1[0], p1[1]], [4 - p2[0], p2[1]], [4 - p3[0], p3[1]]);
    }
  }

  #drawTriangle(p1: Vector2D, p2: Vector2D, p3: Vector2D) {
    const mult = (c: number) => c * this.#triangleSize;
    if (this.#ctx) {
      this.#ctx.beginPath();
      this.#ctx.moveTo(...p1.map(mult) as Vector2D);
      this.#ctx.lineTo(...p2.map(mult) as Vector2D);
      this.#ctx.lineTo(...p3.map(mult) as Vector2D);
      this.#ctx.closePath();
      this.#ctx.fill();
      this.#ctx.fill();
    }
  }
}

function adjustColor(color: RGBTriple): RGBTriple {
  const dark = 0.1;
  const lAdj = 0.1; // luminance adjustment
  const hsl = rgb2hsl(...color);

  // if luminance is too dark already, then lighten the alternate color
  // instead of darkening it.
  hsl[2] += hsl[2] > dark ? -lAdj : lAdj;

  return hsl2rgb(...hsl);
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-avatar': RhAvatar;
  }
}

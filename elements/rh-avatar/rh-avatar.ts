import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';

import { deprecatedCustomEvent } from '@patternfly/pfe-core/functions/deprecatedCustomEvent.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { bound, observed, query } from '@patternfly/pfe-core/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';
import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';

import { hash } from './lib/djb-hash.js';
import { hsl2rgb, rgb2hsl, RGBTriple } from './lib/hslrgb.js';

import { BaseAvatar } from '@patternfly/pfe-avatar/BaseAvatar.js';

import styles from './rh-avatar.css';

type Vector2D = [x: number, y: number];
type Colors = Record<`color${number}`, string>;

/** Ensure avatar colours are registered before custom elements upgrade */
function register(klass: typeof RhAvatar) {
  klass.registerColors();
}

/**
 * An avatar is a visual used to represent a user. It may contain an image or
 * a placeholder graphic.
 *
 *
 * @summary  An avatar is a visual used to represent a user.
 */
@customElement('rh-avatar')
export class RhAvatar extends BaseAvatar {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAvatar.styles, styles];

  private static readonly defaultSize = 128;

  private static readonly defaultColors = '#67accf #448087 #709c6b #a35252 #826cbb';

  private static _registerColor(color: RGBTriple): void {
    RhAvatar.colors.push({
      color1: `rgb(${color.join(',')})`,
      color2: `rgb(${this._adjustColor(color).join(',')})`,
    });
  }

  private static _adjustColor(color: RGBTriple): RGBTriple {
    const dark = 0.1;
    const lAdj = 0.1; // luminance adjustment
    const hsl = rgb2hsl(...color);

    // if luminance is too dark already, then lighten the alternate color
    // instead of darkening it.
    hsl[2] += hsl[2] > dark ? -lAdj : lAdj;

    return hsl2rgb(...hsl);
  }

  static colors: Colors[] = [];

  static customColors: string;

  static registerColors() {
    RhAvatar.colors = [];

    const contextColors = this.customColors || this.defaultColors;

    contextColors.split(/\s+/).forEach(colorCode => {
      let pattern;
      switch (colorCode.length) {
        case 4: // ex: "#0fc"
          pattern = /^#([A-f0-9])([A-f0-9])([A-f0-9])$/.exec(colorCode);
          if (pattern) {
            pattern.shift();
            const color = pattern.map(c => parseInt(c + c, 16)) as RGBTriple;
            RhAvatar._registerColor(color);
          } else {
            Logger.log(`[rh-avatar] invalid color ${colorCode}`);
          }

          break;
        case 7: // ex: "#00ffcc"
          pattern = /^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/.exec(colorCode);
          if (pattern) {
            pattern.shift();
            const color = pattern.map(c => parseInt(c, 16)) as RGBTriple;
            RhAvatar._registerColor(color);
          } else {
            Logger.log(`[rh-avatar] invalid color ${colorCode}`);
          }
      }
    });

    return this.colors;
  }

  get customColors() {
    return this.css.getVariable('rh-avatar--colors');
  }

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
   * The URL to the user's custom avatar image.
   *
   * It will be displayed instead of a random pattern.
   */
  @observed('_update')
  @property({ reflect: true }) src?: string;

  /**
   * The user's name, either given name and family name, or username.
   *
   * When displaying a pattern, the name will be used to seed the pattern generator.
   */
  @observed('_update')
  @property({ reflect: true }) name = '';

  /**
   * The type of pattern to display.
   */
  @observed('_update')
  @property({ reflect: true }) pattern: 'squares'|'triangles' = 'squares';

  /**
  * The shape of the avatar itself.
  */
  @property({ reflect: true }) shape: 'square'|'circle'|'rounded' = 'square';

  private _squareSize = 0;
  private _triangleSize = 0;
  private _ctx?: CanvasRenderingContext2D;
  private _colorIndex = -1;
  private color1 = '';
  private color2 = '';

  private css = new CssVariableController(this);

  @query('canvas') private _canvas?: HTMLCanvasElement;

  render() {
    return html`
      <canvas part="canvas"></canvas>
      <img src="${ifDefined(this.src)}" alt="" part="img"/>
    `;
  }

  firstUpdated() {
    this._initCanvas();
    this.dispatchEvent(deprecatedCustomEvent('rh-avatar:connected'));
  }

  @bound private _initCanvas() {
    if (!this._canvas) {
      throw new Error('canvas unavailable');
    }
    const cssVarWidth = this.css.getVariable('rh-avatar--width');
    const size = parseInt(cssVarWidth ?? RhAvatar.defaultSize.toString());
    this._canvas.width = size;
    this._canvas.height = size;

    this._squareSize = this._canvas.width / 8;
    this._triangleSize = this._canvas.width / 4;

    this._ctx = this._canvas.getContext('2d') as CanvasRenderingContext2D;
    this._update();
  }

  protected _update() {
    // if we have a src element, update the img, otherwise update the random pattern
    if (!this.src) {
      const bitPattern = hash(this.name).toString(2);
      const arrPattern = bitPattern.split('').map(n => Number(n)) as Vector2D;
      this._colorIndex = Math.floor(
        (RhAvatar.colors.length * parseInt(bitPattern, 2)) /
        Math.pow(2, 32)
      );
      this.color1 = RhAvatar.colors[this._colorIndex].color1;
      this.color2 = RhAvatar.colors[this._colorIndex].color2;

      this._clear();
      this._drawBackground();
      if (this.pattern === 'squares') {
        this._drawSquarePattern(arrPattern);
      } else if (this.pattern === 'triangles') {
        this._drawTrianglePattern(arrPattern);
      }
    }
  }

  private _clear() {
    if (this._ctx && this._canvas) {
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }

  private _drawBackground() {
    if (this._ctx && this._canvas) {
      this._ctx.fillStyle = this.color1;
      this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }

  private _drawSquarePattern(pattern: Vector2D) {
    if (this._ctx) {
      this._ctx.fillStyle = this.color2;
      let i = pattern.length;
      while (i--) {
        if (pattern[i]) {
          this._drawMirroredSquare(i % 4, Math.floor(i / 4));
        }
      }
    }
  }

  /**
  * Draw a square at the given position, mirrored onto both the left and right half of the canvas.
  */
  private _drawMirroredSquare(x: number, y: number) {
    if (this._ctx) {
      this._drawSquare(x, y);
      this._drawSquare(7 - x, y);
    }
  }

  private _drawSquare(x: number, y: number) {
    if (this._ctx) {
      this._ctx.fillRect(
        this._squareSize * x,
        this._squareSize * y,
        this._squareSize,
        this._squareSize
      );
    }
  }

  private _drawTrianglePattern(pattern: number[]) {
    if (this._ctx) {
      this._ctx.fillStyle = this.color2 ?? '';
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

          this._drawMirroredTriangle(p1, p2, p3);
        }
      }
    }
  }

  /**
   * Draw a square at the given position in the top-left quadrant of the
   * canvas, and mirrored to the other three quadrants.
   */
  private _drawMirroredTriangle(p1: Vector2D, p2: Vector2D, p3: Vector2D) {
    if (this._ctx) {
      this._drawTriangle(p1, p2, p3);
      this._drawTriangle([4 - p1[0], p1[1]], [4 - p2[0], p2[1]], [4 - p3[0], p3[1]]);
    }
  }

  private _drawTriangle(p1: Vector2D, p2: Vector2D, p3: Vector2D) {
    const mult = (c: number) => c * this._triangleSize;
    if (this._ctx) {
      this._ctx.beginPath();
      this._ctx.moveTo(...p1.map(mult) as Vector2D);
      this._ctx.lineTo(...p2.map(mult) as Vector2D);
      this._ctx.lineTo(...p3.map(mult) as Vector2D);
      this._ctx.closePath();
      this._ctx.fill();
      this._ctx.fill();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-avatar': RhAvatar;
  }
}

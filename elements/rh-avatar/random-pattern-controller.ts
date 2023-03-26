import type { ReactiveController, ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

export interface Options {
  name?: string;
  pattern?: 'squares' | 'triangles';
  size?: number;
  colors?: string[];
}

export interface Initializer extends Options {
  canvas: HTMLCanvasElement;
  colors: string[];
}

type Vector2D = [x: number, y: number];
type RGBTriple = [R: number, G: number, B: number];
type HSLTriple = [H: number, S: number, L: number];

/**
 * djb2 string hashing function.
 *
 * @see http://www.cse.yorku.ca/~oz/hash.html
 * @param  str the string to hash.
 * @return  a positive integer
 */

function hash(str: string): number {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

function h2rgb(v1: number, v2: number, vH: number): number {
  if (vH < 0) {
    vH += 1;
  }
  if (vH > 1) {
    vH -= 1;
  }
  if (6 * vH < 1) {
    return v1 + (v2 - v1) * 6 * vH;
  }
  if (2 * vH < 1) {
    return v2;
  }
  if (3 * vH < 2) {
    return v1 + (v2 - v1) * (2 / 3 - vH) * 6;
  }
  return v1;
}

/**
 * Convert an HSL color to RGB.
 *
 * @param h the hue component
 * @param s the saturation component
 * @param l the luminance component
 *
 * @see https://www.easyrgb.com/en/math.php
 */
function hsl2rgb(h: number, s: number, l: number): RGBTriple {
  let R; let G; let B;

  const H = Math.max(0, Math.min(1, h));
  const S = Math.max(0, Math.min(1, s));
  const L = Math.max(0, Math.min(1, l));

  if (S === 0) {
    R = L * 255;
    G = L * 255;
    B = L * 255;
  } else {
    const b = (L < 0.5) ? L * (1 + S) : L + S - S * L;
    const a = 2 * L - b;
    R = Math.floor(255 * h2rgb(a, b, H + 1 / 3));
    G = Math.floor(255 * h2rgb(a, b, H));
    B = Math.floor(255 * h2rgb(a, b, H - 1 / 3));
  }

  return [R, G, B];
}

/**
 * Convert an RGBcolor to HSL.
 *
 * @param _R the red component
 * @param _G the green component
 * @param _B the blue component
 *
 * @see https://www.easyrgb.com/en/math.php
 */
function rgb2hsl(_R: number, _G: number, _B: number): HSLTriple {
  let H; let S;

  const R = Math.max(0, Math.min(255, _R));
  const G = Math.max(0, Math.min(255, _G));
  const B = Math.max(0, Math.min(255, _B));

  const r = R / 255;
  const g = G / 255;
  const b = B / 255;

  const varMin = Math.min(Math.min(r, g), b);
  const varMax = Math.max(Math.max(r, g), b);
  const delMax = varMax - varMin;

  const L = (varMax + varMin) / 2;

  if (delMax === 0) {
    H = 0;
    S = 0;
  } else {
    if (L < 0.5) {
      S = delMax / (varMax + varMin);
    } else {
      S = delMax / (2 - varMax - varMin);
    }


    const delR = ((varMax - r) / 6 + delMax / 2) / delMax;
    const delG = ((varMax - g) / 6 + delMax / 2) / delMax;
    const delB = ((varMax - b) / 6 + delMax / 2) / delMax;

    if (r === varMax) {
      H = delB - delG;
    } else if (g === varMax) {
      H = 1 / 3 + delR - delB;
    } else if (b === varMax) {
      H = 2 / 3 + delG - delR;
    }

    H ??= 0;

    if (H < 0) {
      H += 1;
    } else if (H > 1) {
      H -= 1;
    }
  }

  return [H, S, L];
}

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

function adjustColor(color: RGBTriple): RGBTriple {
  const dark = 0.1;
  const lAdj = 0.1; // luminance adjustment
  const hsl = rgb2hsl(...color);

  // if luminance is too dark already, then lighten the alternate color
  // instead of darkening it.
  hsl[2] += hsl[2] > dark ? -lAdj : lAdj;

  return hsl2rgb(...hsl);
}

export class RandomPatternController implements ReactiveController {
  #colorTuples: [string, string][] = [];

  #colors: string[] = [];

  #name?: string;

  #pattern: 'squares' | 'triangles' = 'squares';

  #squareSize = 0;

  #triangleSize = 0;

  #color1 = '';

  #color2 = '';

  #canvas: HTMLCanvasElement;

  #ctx: CanvasRenderingContext2D;

  #logger: Logger;

  constructor(host: ReactiveElement, canvas: HTMLCanvasElement) {
    this.#logger = new Logger(host);
    this.#canvas = canvas;
    this.#ctx = this.#canvas.getContext('2d') as CanvasRenderingContext2D;
    this.render();
  }

  hostConnected?(): void

  render(options?: Options) {
    this.#name = options?.name ?? this.#name;
    this.#colors = options?.colors ?? this.#colors;
    this.#pattern = options?.pattern ?? this.#pattern;
    this.#canvas.width = options?.size ?? 0;
    this.#canvas.height = options?.size ?? 0;
    if (options?.colors) { this.#colorTuples = this.#initColorTuples(); }
    const bitPattern = hash(this.#name ?? '').toString(2);
    const arrPattern = bitPattern.split('').map(n => Number(n)) as Vector2D;
    const index = Math.floor((this.#colorTuples.length * parseInt(bitPattern, 2)) / (2 ** 32));
    [this.#color1, this.#color2] = this.#colorTuples[index] ?? [];
    this.#squareSize = this.#canvas.width / 8;
    this.#triangleSize = this.#canvas.width / 4;
    this.#clear();
    this.#drawBackground();
    if (this.#pattern === 'squares') {
      this.#drawSquarePattern(arrPattern);
    } else if (this.#pattern === 'triangles') {
      this.#drawTrianglePattern(arrPattern);
    }
  }

  #initColorTuples() {
    const tuples: [string, string][] = [];
    this.#colors.forEach(colorCode => {
      const { regexp, parser } = HEX_PARSERS[colorCode.length] ?? {};
      if (regexp && parser) {
        const [, ...pattern] = regexp.exec(colorCode) ?? [];
        if (pattern.length) {
          const color = pattern.map(parser) as RGBTriple;
          tuples.push([
            `rgb(${color.join(',')})`,
            `rgb(${adjustColor(color).join(',')})`,
          ]);
        } else {
          this.#logger.warn(`invalid color ${colorCode}`);
        }
      }
    });
    return tuples;
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

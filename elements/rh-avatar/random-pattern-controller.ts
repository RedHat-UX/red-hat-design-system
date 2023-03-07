import type { ReactiveController, ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { hash } from './lib/djb-hash.js';
import { hsl2rgb, rgb2hsl, type RGBTriple } from './lib/hslrgb.js';

type Vector2D = [x: number, y: number];

export interface Options {
  name?: string;
  pattern?: 'squares'|'triangles';
  size?: number;
  colors?: string[];
}

export interface Initializer extends Options {
  canvas: HTMLCanvasElement;
  colors: string[];
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

  #pattern: 'squares'|'triangles' = 'squares';

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

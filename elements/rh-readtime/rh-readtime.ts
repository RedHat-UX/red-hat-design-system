import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-readtime.css' with { type: 'css' };

/**
 * Research-based average reading speeds (words per minute) by language.
 * Source: Investigative Ophthalmology & Visual Science (iovs)
 * https://iovs.arvojournals.org/article.aspx?articleid=2166061
 * https://irisreading.com/average-reading-speed-in-various-languages
 */
const WPM_BY_LANGUAGE: Record<string, number> = {
  ar: 138,
  zh: 158,
  nl: 202,
  en: 228,
  fi: 161,
  fr: 195,
  de: 179,
  he: 187,
  it: 188,
  ja: 193,
  ko: 226,
  pl: 166,
  pt: 181,
  ru: 184,
  sl: 180,
  es: 218,
  sv: 199,
  tr: 166,
};

const DEFAULT_WPM = WPM_BY_LANGUAGE.en;

function getWpmForLang(lang: string): number {
  const normalized = lang.toLowerCase().trim();
  return WPM_BY_LANGUAGE[normalized]
    ?? WPM_BY_LANGUAGE[normalized.split('-')[0]]
    ?? DEFAULT_WPM;
}

function codeIsInRanges(code: number, ranges: number[][]): boolean {
  return ranges.some(([lower, upper]) => lower <= code && code <= upper);
}

const CJK_RANGES: number[][] = [
  [0x3040, 0x309f], // Hiragana
  [0x4e00, 0x9fff], // CJK Unified Ideographs
  [0xac00, 0xd7a3], // Hangul
  [0x20000, 0x2ebe0], // CJK Extensions
];

const CJK_PUNCTUATION_RANGES: number[][] = [
  [0x3000, 0x303f], // CJK Symbols and Punctuation
  [0xff00, 0xffef], // Full-width ASCII punctuation
];

function isCJK(c: string): boolean {
  return codeIsInRanges(c.charCodeAt(0), CJK_RANGES);
}

function isWordBound(c: string): boolean {
  return ' \n\r\t'.includes(c);
}

function isPunctuation(c: string): boolean {
  return codeIsInRanges(c.charCodeAt(0), CJK_PUNCTUATION_RANGES);
}

/**
 * Count words in a text string, handling CJK characters as individual words.
 * Adapted from ngryman/reading-time (MIT).
 * @param text - the text to count words in
 */
function countWords(text: string): number {
  let words = 0;
  let start = 0;
  let end = text.length - 1;

  while (start < text.length && isWordBound(text[start])) {
    start++;
  }
  while (end > start && isWordBound(text[end])) {
    end--;
  }

  if (start > end) {
    return 0;
  }

  const normalized = `${text}\n`;

  for (let i = start; i <= end; i++) {
    if (
      isCJK(normalized[i])
      || (!isWordBound(normalized[i])
        && (isWordBound(normalized[i + 1]) || isCJK(normalized[i + 1])))
    ) {
      words++;
    }
    if (isCJK(normalized[i])) {
      while (
        i <= end
        && (isPunctuation(normalized[i + 1]) || isWordBound(normalized[i + 1]))
      ) {
        i++;
      }
    }
  }

  return words;
}

/**
 * Calculate additional reading time for images using Medium's algorithm.
 * First image adds 12 seconds, each subsequent image decreases by 1 second
 * down to a minimum of 3 seconds per image.
 * @param count - number of images
 */
function calculateImageTime(count: number): number {
  if (count <= 0) {
    return 0;
  }
  const capped = Math.min(count, 10);
  const cappedTime = capped * (2 * 12 - (capped - 1)) / 2;
  const extraTime = Math.max(0, count - 10) * 3;
  return cappedTime + extraTime;
}

function getReadingTime(words: number, wpm: number, imageCount = 0): number {
  const wordMinutes = words / wpm;
  const imageMinutes = calculateImageTime(imageCount) / 60;
  return Math.max(1, Math.ceil(wordMinutes + imageMinutes));
}

/**
 * Provides an estimated reading time for content. Authors
 * SHOULD provide a `selector` or nest inside a container.
 * Authors MUST use `%t` in light DOM as a minutes placeholder.
 * AVOID combining `word-count` with `selector`. Renders as
 * inline text readable by screen readers without additional
 * ARIA roles. No keyboard interaction is needed as this
 * element is non-interactive display text.
 *
 * @summary Displays estimated reading time for content
 *
 * @alias readtime
 *
 *
 */
@customElement('rh-readtime')
@themable
export class RhReadtime extends LitElement {
  static readonly styles = [styles];

  /**
   * CSS selector targeting the content container to read from.
   * If omitted and `word-count` is not set, defaults to `parentElement`.
   */
  @property({ reflect: true }) selector?: string;

  /**
   * Manual word count. When set, the component uses this value
   * directly instead of reading from a container.
   */
  @property({ reflect: true, type: Number, attribute: 'word-count' }) wordCount?: number;

  /**
   * Manual image count. Enables image time weighting in either mode.
   * In container mode, overrides the DOM image count.
   */
  @property({ reflect: true, type: Number, attribute: 'image-count' }) imageCount?: number;

  /**
   * Opt-in to image weighting in container mode.
   * When set, counts `<img>` and non-decorative `<svg>` elements
   * from the target container. Not needed when `image-count` is set.
   * In property mode without `image-count`, has no effect.
   */
  @property({ reflect: true, type: Boolean }) images = false;

  /** Computed reading time in minutes. */
  get minutes(): number {
    return this.#minutes;
  }

  #minutes = 0;
  #template = '';

  override connectedCallback(): void {
    super.connectedCallback();
    this.#template = this.textContent?.trim() ?? '';
    if (!isServer) {
      this.#calculate();
    }
  }

  protected override willUpdate(): void {
    this.#calculate();
  }

  override render() {
    const mins = String(this.#minutes);
    const text = this.#template.includes('%t') ? this.#template.replace('%t', mins) : mins;
    return html`${text}`;
  }

  #isPropertyMode(): boolean {
    return this.wordCount != null;
  }

  #getLanguage(): string {
    if (isServer) {
      return 'en';
    }
    let lang = this.getAttribute('lang')
      || this.closest('[lang]')?.getAttribute('lang');
    let root = this.getRootNode();
    while (!lang && root instanceof ShadowRoot) {
      lang = root.host.closest('[lang]')?.getAttribute('lang') as string;
      root = root.host.getRootNode();
    }
    return lang ?? 'en';
  }

  #resolveTarget(): Element | null {
    if (isServer) {
      return null;
    }
    if (this.selector) {
      return document.querySelector(this.selector);
    }
    return this.parentElement;
  }

  #resolveImageCount(): number {
    if (this.imageCount != null) {
      return this.imageCount;
    }
    if (this.images && !this.#isPropertyMode()) {
      const target = this.#resolveTarget();
      return target?.querySelectorAll('img, svg:not([aria-hidden="true"])').length ?? 0;
    }
    return 0;
  }

  #calculate(): void {
    const wpm = getWpmForLang(this.#getLanguage());
    let words: number;

    if (this.#isPropertyMode()) {
      words = this.wordCount!;
    } else {
      const target = this.#resolveTarget();
      if (!target) {
        this.#minutes = 0;
        return;
      }
      words = countWords(target.textContent ?? '');
    }

    const imageCount = this.#resolveImageCount();
    this.#minutes = getReadingTime(words, wpm, imageCount);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-readtime': RhReadtime;
  }
}

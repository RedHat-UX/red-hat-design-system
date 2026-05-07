var _RhReadtime_instances, _RhReadtime_minutes, _RhReadtime_template, _RhReadtime_isPropertyMode, _RhReadtime_getLanguage, _RhReadtime_resolveTarget, _RhReadtime_resolveImageCount, _RhReadtime_calculate;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:inline;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5)}`;
/**
 * Research-based average reading speeds (words per minute) by language.
 * Source: Investigative Ophthalmology & Visual Science (iovs)
 * https://iovs.arvojournals.org/article.aspx?articleid=2166061
 * https://irisreading.com/average-reading-speed-in-various-languages
 */
const WPM_BY_LANGUAGE = {
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
function getWpmForLang(lang) {
    const normalized = lang.toLowerCase().trim();
    return WPM_BY_LANGUAGE[normalized]
        ?? WPM_BY_LANGUAGE[normalized.split('-')[0]]
        ?? DEFAULT_WPM;
}
function codeIsInRanges(code, ranges) {
    return ranges.some(([lower, upper]) => lower <= code && code <= upper);
}
const CJK_RANGES = [
    [0x3040, 0x309f], // Hiragana
    [0x4e00, 0x9fff], // CJK Unified Ideographs
    [0xac00, 0xd7a3], // Hangul
    [0x20000, 0x2ebe0], // CJK Extensions
];
const CJK_PUNCTUATION_RANGES = [
    [0x3000, 0x303f], // CJK Symbols and Punctuation
    [0xff00, 0xffef], // Full-width ASCII punctuation
];
function isCJK(c) {
    return codeIsInRanges(c.charCodeAt(0), CJK_RANGES);
}
function isWordBound(c) {
    return ' \n\r\t'.includes(c);
}
function isPunctuation(c) {
    return codeIsInRanges(c.charCodeAt(0), CJK_PUNCTUATION_RANGES);
}
/**
 * Count words in a text string, handling CJK characters as individual words.
 * Adapted from ngryman/reading-time (MIT).
 * @param text - the text to count words in
 */
function countWords(text) {
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
        if (isCJK(normalized[i])
            || (!isWordBound(normalized[i])
                && (isWordBound(normalized[i + 1]) || isCJK(normalized[i + 1])))) {
            words++;
        }
        if (isCJK(normalized[i])) {
            while (i <= end
                && (isPunctuation(normalized[i + 1]) || isWordBound(normalized[i + 1]))) {
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
function calculateImageTime(count) {
    if (count <= 0) {
        return 0;
    }
    const capped = Math.min(count, 10);
    const cappedTime = capped * (2 * 12 - (capped - 1)) / 2;
    const extraTime = Math.max(0, count - 10) * 3;
    return cappedTime + extraTime;
}
function getReadingTime(words, wpm, imageCount = 0) {
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
 * @summary Provides an estimated reading time for content
 */
let RhReadtime = class RhReadtime extends LitElement {
    constructor() {
        super(...arguments);
        _RhReadtime_instances.add(this);
        /**
         * Opt-in to image weighting in container mode.
         * When set, counts `<img>` and non-decorative `<svg>` elements
         * from the target container. Not needed when `image-count` is set.
         * In property mode without `image-count`, has no effect.
         */
        this.images = false;
        _RhReadtime_minutes.set(this, 0);
        _RhReadtime_template.set(this, '');
    }
    /** Computed reading time in minutes. */
    get minutes() {
        return __classPrivateFieldGet(this, _RhReadtime_minutes, "f");
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldSet(this, _RhReadtime_template, this.textContent?.trim() ?? '', "f");
        if (!isServer) {
            __classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_calculate).call(this);
        }
    }
    willUpdate() {
        __classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_calculate).call(this);
    }
    render() {
        const mins = String(__classPrivateFieldGet(this, _RhReadtime_minutes, "f"));
        const text = __classPrivateFieldGet(this, _RhReadtime_template, "f").includes('%t') ? __classPrivateFieldGet(this, _RhReadtime_template, "f").replace('%t', mins) : mins;
        return html `${text}`;
    }
};
_RhReadtime_minutes = new WeakMap();
_RhReadtime_template = new WeakMap();
_RhReadtime_instances = new WeakSet();
_RhReadtime_isPropertyMode = function _RhReadtime_isPropertyMode() {
    return this.wordCount != null;
};
_RhReadtime_getLanguage = function _RhReadtime_getLanguage() {
    if (isServer) {
        return 'en';
    }
    let lang = this.getAttribute('lang')
        || this.closest('[lang]')?.getAttribute('lang');
    let root = this.getRootNode();
    while (!lang && root instanceof ShadowRoot) {
        lang = root.host.closest('[lang]')?.getAttribute('lang');
        root = root.host.getRootNode();
    }
    return lang ?? 'en';
};
_RhReadtime_resolveTarget = function _RhReadtime_resolveTarget() {
    if (isServer) {
        return null;
    }
    if (this.selector) {
        return document.querySelector(this.selector);
    }
    return this.parentElement;
};
_RhReadtime_resolveImageCount = function _RhReadtime_resolveImageCount() {
    if (this.imageCount != null) {
        return this.imageCount;
    }
    if (this.images && !__classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_isPropertyMode).call(this)) {
        const target = __classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_resolveTarget).call(this);
        return target?.querySelectorAll('img, svg:not([aria-hidden="true"])').length ?? 0;
    }
    return 0;
};
_RhReadtime_calculate = function _RhReadtime_calculate() {
    const wpm = getWpmForLang(__classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_getLanguage).call(this));
    let words;
    if (__classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_isPropertyMode).call(this)) {
        words = this.wordCount;
    }
    else {
        const target = __classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_resolveTarget).call(this);
        if (!target) {
            __classPrivateFieldSet(this, _RhReadtime_minutes, 0, "f");
            return;
        }
        words = countWords(target.textContent ?? '');
    }
    const imageCount = __classPrivateFieldGet(this, _RhReadtime_instances, "m", _RhReadtime_resolveImageCount).call(this);
    __classPrivateFieldSet(this, _RhReadtime_minutes, getReadingTime(words, wpm, imageCount), "f");
};
RhReadtime.styles = [styles];
__decorate([
    property({ reflect: true })
], RhReadtime.prototype, "selector", void 0);
__decorate([
    property({ reflect: true, type: Number, attribute: 'word-count' })
], RhReadtime.prototype, "wordCount", void 0);
__decorate([
    property({ reflect: true, type: Number, attribute: 'image-count' })
], RhReadtime.prototype, "imageCount", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhReadtime.prototype, "images", void 0);
RhReadtime = __decorate([
    customElement('rh-readtime'),
    themable
], RhReadtime);
export { RhReadtime };
//# sourceMappingURL=rh-readtime.js.map
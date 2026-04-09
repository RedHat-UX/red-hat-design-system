import { LitElement } from 'lit';
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
export declare class RhReadtime extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * CSS selector targeting the content container to read from.
     * If omitted and `word-count` is not set, defaults to `parentElement`.
     */
    selector?: string;
    /**
     * Manual word count. When set, the component uses this value
     * directly instead of reading from a container.
     */
    wordCount?: number;
    /**
     * Manual image count. Enables image time weighting in either mode.
     * In container mode, overrides the DOM image count.
     */
    imageCount?: number;
    /**
     * Opt-in to image weighting in container mode.
     * When set, counts `<img>` and non-decorative `<svg>` elements
     * from the target container. Not needed when `image-count` is set.
     * In property mode without `image-count`, has no effect.
     */
    images: boolean;
    /** Computed reading time in minutes. */
    get minutes(): number;
    connectedCallback(): void;
    protected willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-readtime': RhReadtime;
    }
}

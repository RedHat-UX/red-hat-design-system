import { LitElement } from 'lit';
/**
 * A skeleton provides an animated placeholder for content that is loading
 * progressively. Must not receive focus or keyboard input.
 *
 * @summary A placeholder for content that is loading
 *
 * @alias skeleton
 */
export declare class RhSkeleton extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /** What shape the skeleton should be. Defaults to `body-copy`. */
    type?: 'body-copy' | 'heading' | 'circle' | 'square' | 'rectangle';
    /**
     * What size the skeleton should be. Defaults to `md`.
     * The `size` attribute is not valid on circle, square, or rectangle skeletons.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-skeleton': RhSkeleton;
    }
}

import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Jump links allow users to navigate sections of content on a page.
 *
 * @alias jump-links
 *
 * @fires toggle - when the `expanded` disclosure widget is toggled
 */
export declare class RhJumpLinks extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Whether the layout of children is vertical or horizontal. */
    orientation: 'horizontal' | 'vertical';
    /** Accessible label for nav */
    accessibleLabel?: string;
    connectedCallback(): void;
    firstUpdated(): void;
    protected labelChanged(): void;
    render(): TemplateResult<1>;
    orientationChanged(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-jump-links': RhJumpLinks;
    }
}

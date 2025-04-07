import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Jump links act as persistent navigation that consists of a vertical list of
 * anchor links. Selecting a link moves a user to content that corresponds with
 * the link selected. A link is displayed as active when the content it links to
 * is visible in the browser window.
.
 * @fires toggle - when the `expanded` disclosure widget is toggled
 * @slot - Place `<rh-jump-link>` or `<rh-jump-links-list>` elements here
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

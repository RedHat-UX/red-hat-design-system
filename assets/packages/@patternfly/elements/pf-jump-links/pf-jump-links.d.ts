import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * **Jump links** allow users to navigate to sections within a page.
 * @alias Jump Links
 * @fires toggle - when the `expanded` disclosure widget is toggled
 */
export declare class PfJumpLinks extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Whether the element features a disclosure widget around the nav items */
    expandable: boolean;
    /** Whether the expandable element's disclosure widget is expanded */
    expanded: boolean;
    /** Whether the layout of children is vertical or horizontal. */
    vertical: boolean;
    /** Whether to center children. */
    centered: boolean;
    /** Offset to add to the scroll position, potentially for a masthead which content scrolls under. */
    offset: number;
    /** Label to add to nav element. */
    label?: string;
    protected getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(changed: Map<string, unknown>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links': PfJumpLinks;
    }
}

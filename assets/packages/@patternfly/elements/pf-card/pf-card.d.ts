import { LitElement, type TemplateResult } from 'lit';
/**
 * A **card** is a square or rectangular container that can contain any kind of content.
 * Cards symbolize units of information, and each one acts as an entry point for
 * users to access more details. For example, in dashboards and catalog views, cards
 * function as a preview of a detailed page. Cards may also be used in data displays
 * like card views, or for positioning content on a page.
 * @summary Gives a preview of information in a small layout
 * @alias Card
 */
export declare class PfCard extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Optionally provide a size for the card and the card contents.
     * The default is set to `undefined` and provides default styles.
     * Compact provides styles which decreases the padding between the sections.
     * Large provides styles which increases the padding between the sections and the font size for the title, header, and footer.
     */
    size?: 'compact' | 'large';
    /**
     * Optionally apply a border radius for the drop shadow and/or border.
     */
    rounded: boolean;
    /**
     * Optionally allow the card to take up the full height of the parent element.
     */
    fullHeight: boolean;
    /**
     * Optionally remove the border on the card container.
     */
    plain: boolean;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-card': PfCard;
    }
}

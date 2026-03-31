import { LitElement, type TemplateResult } from 'lit';
/**
 * A menu item group provides a labeled section within an `rh-menu`, allowing
 * authors to organize related `rh-menu-item` elements under a visible heading.
 * The heading is rendered as a presentational span, so screen reader users
 * navigate items via the parent menubar role. Authors should set the
 * `group-heading` attribute when grouping items to provide visual context.
 * Focus management is handled by the parent `rh-menu` roving tabindex.
 *
 * @summary A labeled group of related menu items
 *
 * @alias Menu Dropdown
 */
export declare class RhMenuItemGroup extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * The visible heading text for this group of menu items.
     * When set, a label appears above the grouped items to provide
     * visual context for the section.
     */
    groupHeading?: string;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu-item-group': RhMenuItemGroup;
    }
}

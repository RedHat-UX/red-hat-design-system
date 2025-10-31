import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
import './rh-navigation-vertical-list.js';
/**
 * A vertical navigation list of top-level and grouped navigation items, typically used in a side navigation pattern.
 * @summary Vertical navigation
 * @alias Navigation (vertical)
 */
export declare class RhNavigationVertical extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private _title;
    /**
     * The accessible-label attribute labels the navigation using a visually hidden heading.
     * Defaults to 'Navigation'. This label should be changed if other navigation elements
     * are present or when translations are needed.
     */
    accessibleLabel: string;
    protected firstUpdated(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-vertical': RhNavigationVertical;
    }
}

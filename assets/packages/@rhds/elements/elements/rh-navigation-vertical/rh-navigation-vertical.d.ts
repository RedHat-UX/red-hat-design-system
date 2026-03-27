import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
import './rh-navigation-vertical-list.js';
/**
 * A vertical sidebar navigation for organizing site structure. Authors
 * must set `accessible-label` when multiple navigation landmarks exist.
 * Uses a `navigation` ARIA role with a visually hidden heading for
 * screen readers. Keyboard users tab through links and groups.
 *
 * @summary Organizes and communicates structure and content vertically
 * @alias Navigation (vertical)
 *
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

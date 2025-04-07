import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import './rh-navigation-primary-item-menu.js';
export declare class RhNavigationPrimaryItem extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private _details;
    open: boolean;
    summary?: string;
    variant?: 'link' | 'dropdown';
    /**
     * Hides the element at various container query based breakpoints.
     * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
     */
    hideAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: IconNameFor<IconSetName>;
    /** Icon set for the `icon` property - 'ui' by default */
    iconSet?: IconSetName;
    private compact?;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    hide(): void;
    show(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-primary-item': RhNavigationPrimaryItem;
    }
}

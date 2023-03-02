import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class SecondaryNavOverlayChangeEvent extends ComposedEvent {
    open: boolean;
    toggle: HTMLElement;
    constructor(open: boolean, toggle: HTMLElement);
}
/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
export declare class RhNavigationSecondaryOverlay extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    open: boolean;
    render(): import("lit-html").TemplateResult<1>;
    protected _openChanged(_oldValue?: boolean, newValue?: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-overlay': RhNavigationSecondaryOverlay;
    }
}

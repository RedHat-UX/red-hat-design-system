import { type TemplateResult, LitElement } from 'lit';
import '../rh-spinner/rh-spinner.js';
/**
 * Website status communicates the operational status of a website or domain using a status icon and link. It is usually located in the Footer component.
 *
 * @summary Communicates operational status of a website or domain
 *
 * @slot loading-text - Text to display while loading the status defaults to "Loading"
 */
export declare class RhSiteStatus extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static isApiStatus;
    /**
    * Sets color theme based on parent context
    */
    private on?;
    connectedCallback(): Promise<void>;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-site-status': RhSiteStatus;
    }
}

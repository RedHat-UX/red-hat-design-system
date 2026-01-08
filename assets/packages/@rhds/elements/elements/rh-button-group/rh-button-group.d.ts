import { LitElement } from 'lit';
/**
 * A button group visually organizes multiple related buttons into a single
 * collection.
 *
 * @summary Organize multiple related buttons into a single collection
 *
 * @alias button-group
 */
export declare class RhButtonGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-button-group': RhButtonGroup;
    }
}

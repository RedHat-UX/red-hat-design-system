import { LitElement, type TemplateResult } from 'lit';
/**
 * A **hint** is in-app messaging that provides a one-step reminder, explanation,
 * or call to action for a page or modal. Hints provide information about an interaction
 * or prerequisite step that might not be immediately obvious to the user.
 *
 * @summary Provides inline contextual help or information to users
 * @alias Hint
 */
export declare class PfHint extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-hint': PfHint;
    }
}

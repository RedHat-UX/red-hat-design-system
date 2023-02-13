import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
/**
 * @slot -
 *       Short description of the current step.
 * @slot description
 *       Longer description of the current step.
 * @slot icon
 *       Overrides the icon property
 *
 */
export declare class PfProgressStep extends LitElement {
    #private;
    protected static parentTagName: string;
    static readonly styles: import("lit").CSSResult[];
    /** Optional extended description of the step */
    description?: string;
    /** Step Icon */
    icon?: string;
    /** Step icon set */
    iconSet?: string;
    /** Describes the state of the current item */
    variant?: 'pending' | 'info' | 'success' | 'warning' | 'danger';
    /** Indicates if this item is the current active item. */
    current: boolean;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-progress-step': PfProgressStep;
    }
}

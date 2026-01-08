import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * A **progress stepper** displays a timeline of tasks in a workflow and tracks the user's current progress through this workflow.
 * @alias Progress Stepper
 */
export declare class PfProgressStepper extends LitElement {
    #private;
    protected static childTagName: string;
    static readonly styles: CSSStyleSheet[];
    static formAssociated: boolean;
    /** Whether to use the vertical layout */
    vertical: boolean;
    /** Whether to use the center alignment */
    center: boolean;
    /** Whether to use the compact layout */
    compact: boolean;
    get value(): number;
    constructor();
    render(): TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-progress-stepper': PfProgressStepper;
    }
}

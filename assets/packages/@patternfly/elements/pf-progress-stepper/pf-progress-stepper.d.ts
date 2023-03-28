import { LitElement } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * A progress stepper displays a timeline of tasks in a workflow and tracks the user's current progress through this workflow.
 */
export declare class PfProgressStepper extends LitElement {
    #private;
    protected static childTagName: string;
    static readonly styles: import("lit").CSSResult[];
    static formAssociated: boolean;
    /** Whether to use the vertical layout */
    vertical: boolean;
    /** Whether to use the center alignment */
    center: boolean;
    /** Whether to use the compact layout */
    compact: boolean;
    get value(): number;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-progress-stepper': PfProgressStepper;
    }
}

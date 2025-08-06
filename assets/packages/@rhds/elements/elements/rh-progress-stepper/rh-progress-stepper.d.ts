import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
export * from './rh-progress-step.js';
type ProgressStepsOrientation = 'horizontal' | 'vertical';
/**
 * A progress stepper conveys the steps necessary to complete a process or task, and the status of
 * each step. Steps have titles and descriptions; and each step can be in one of a number of possible states:
 * - inactive (yet to be performed)
 * - active (currently being performed)
 * - warn (succeeded, but with warnings)
 * - fail (failed to occur)
 * Or a custom state, set using the `icon` attribute.
 *
 * @summary Communicate how many steps are required to complete a process
 *
 * @alias Progress stepper
 */
export declare class RhProgressStepper extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Makes the element `vertical` at various container query based breakpoints.
     * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
     */
    verticalAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /**
     * Sets the orientation of the progress stepper
     * - `horizontal` - Steps are displayed in a horizontal row
     * - `vertical` - Steps are displayed in a vertical column
     */
    orientation: ProgressStepsOrientation;
    /**
     * Makes element display as `compact`
     */
    compact: boolean;
    /**
     * Defines the current step, so it can be marked as such with ARIA,
     * and so its label can be displayed in compact layouts.
     */
    private currentStep;
    /**
     * Set when ResizeObserver detects width is less than the breakpoint (default: `--rh-breakpoint-sm`)
     */
    private mobile;
    /**
     * Set to match current step's `state`
     */
    private currentState;
    protected firstUpdated(): void;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    protected verticalAtChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-progress-stepper': RhProgressStepper;
    }
}

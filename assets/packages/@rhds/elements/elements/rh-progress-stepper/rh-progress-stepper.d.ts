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
 * ## Usage guidelines
 * - Use 3-5 steps maximum to reduce cognitive load
 * - Designed to complement standard previous/next navigation. Avoid using as the only navigation.
 * - When process is completed, users cannot go back and must start over
 *
 * ## Accessibility
 * - Communicates list structure and step states to screen readers
 * - Supports keyboard navigation for linked step titles
 * - Maintains logical focus order (left to right, top to bottom)
 * - Provides aria-current for the active step
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
     *
     * Use when horizontal space becomes limited. The element automatically
     * changes to vertical orientation at screen sizes of <768px.
     */
    verticalAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /**
     * Sets the orientation of the progress stepper.
     * - `horizontal` - Steps are displayed in a horizontal row (default)
     * - `vertical` - Steps are displayed in a vertical column
     *
     * ## Responsive behavior
     * - >992px: Padding between steps is set to --rh-space-5xl
     * - ≤992px: Padding reduces to --rh-space-2xl
     * - <768px: Orientation automatically changes to vertical
     *
     * Use vertical orientation when horizontal space is limited or when
     * you need to display more detailed step information.
     */
    orientation: ProgressStepsOrientation;
    /**
     * Makes element display as `compact`.
     *
     * ## Usage guidelines
     * - Use when there is limited space and less visual prominence is needed
     * - Maintain the compact size as designed - do not stretch spacing between steps
     * - Switch to default size or different orientation instead of stretching compact
     * - Always include step titles even in compact mode for accessibility
     */
    compact: boolean;
    /**
     * Defines the current step, so it can be marked as such with ARIA,
     * and so its label can be displayed in compact layouts.
     *
     * ## Accessibility
     * This property ensures only one step is marked with aria-current="step"
     * as required by ARIA specification. Screen readers announce this step
     * as the current location in the process.
     */
    private currentStep;
    /**
     * Set when ResizeObserver detects width is less than the breakpoint (default: `--rh-breakpoint-sm`)
     * When true, the stepper switches to vertical orientation automatically.
     */
    private mobile;
    /**
     * Set to match current step's `state`
     */
    private currentState;
    /**
     * Initializes responsive behavior on first update.
     * Sets mobile state based on element width,
     * ensuring the stepper displays correctly on initial load.
     */
    protected firstUpdated(): void;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    /**
     * Handles changes to the verticalAt property.
     * Updates the breakpoint threshold for responsive vertical orientation switching.
     */
    protected verticalAtChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-progress-stepper': RhProgressStepper;
    }
}

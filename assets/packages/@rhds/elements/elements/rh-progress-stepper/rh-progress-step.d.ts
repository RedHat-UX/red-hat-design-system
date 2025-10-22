import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement } from 'lit';
/**
 * Available states for a progress step:
 * - `inactive` - The step is not active
 * - `active` - The step is currently active
 * - `complete` - The step has been completed
 * - `warn` - The step is in a warning state
 * - `fail` - The step has failed
 * - `custom` - The step uses a custom icon
 */
export type ProgressStepState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';
/**
 * Fired when a step becomes active
 */
export declare class RhProgressStepChangeEvent extends Event {
    constructor();
}
/**
 * A progress step represents a single step in a progress stepper.
 * Each step can have different states and may include an icon, label,
 * and description. Steps can also be linked to URLs.
 *
 * @summary Single step in a progress stepper
 *
 * @event { RhProgressStepChangeEvent } change - fired when this step becomes active
 */
export declare class RhProgressStep extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /**
     * Sets the state of the progress step
     * - `inactive` - The step is not active
     * - `active` - The step is currently active
     * - `complete` - The step has been completed
     * - `warn` - The step is in a warning state
     * - `fail` - The step has failed
     * - `custom` - The step uses a custom icon
     */
    state?: ProgressStepState;
    /**
     * Sets the description text for the progress step when more context is needed.
     * Descriptions are secondary to titles.
     *
     * It is overridden by the `description` slot.
     */
    description?: string;
    /**
     * Can be used to set a custom icon for the step.
     * When the step is in the `warn` or `fail` state, it should not have a custom icon.
     * If there's no custom icon, the default active or inactive icon will appear.
     *
     * It can be overridden by the `icon` slot.
     */
    icon?: IconNameFor<IconSetName>;
    /** Icon set for the `icon` property - 'ui' by default */
    iconSet: IconSetName;
    /**
     * Sets a URL to make the step's title clickable.
     * Only completed or current steps will appear linked.
     * The linked title will use our inline link styling, with gray, dashed underlines.
     */
    href?: string;
    private compact?;
    private currentStep;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Icons for each step indicates the status of a process or task.
     * Icons change as users progress.
     *
     * Computes the icon for the step:
     */
    protected computeIcon(): void;
    protected stateChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-progress-step': RhProgressStep;
    }
}

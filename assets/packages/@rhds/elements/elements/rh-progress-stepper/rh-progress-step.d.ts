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
 * @fires { RhProgressStepChangeEvent } fired when this step becomes active
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
     * Sets the description text for the progress step
     * Overridden by the `description` slot.
     */
    description?: string;
    /**
     * Custom icon for the step. Overridden by the `icon` slot.
     * When the step is in the `warn` or `fail` state, it should not have a custom
     * icon.
     */
    icon?: IconNameFor<IconSetName>;
    /** Icon set for the `icon` property - 'ui' by default */
    iconSet: IconSetName;
    /**
     * Sets a URL to make the step clickable
     */
    href?: string;
    private compact?;
    private currentStep;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Computes the icon for the step:
     * always use the prescribed warn or fail icons
     * otherwise, use the custom user icon,
     * or fall back to the default active/inactive icon
     */
    protected computeIcon(): void;
    protected stateChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-progress-step': RhProgressStep;
    }
}

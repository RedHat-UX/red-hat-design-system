import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement, type PropertyValues } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * An option within an `rh-select` dropdown. Must be a child of `rh-select`
 * or `rh-option-group`. Should include a `value` attribute for form data.
 * Must have text content or `label` for screen readers (ARIA `option` role).
 * Press Enter/Space to select; Arrow keys to navigate between options.
 * @summary A selectable option within a select list
 * @alias option
 * @demo https://ux.redhat.com/elements/select/demo/option-icons/ - Options with icons
 * @demo https://ux.redhat.com/elements/select/demo/option-descriptions/ - Options with descriptions
 */
export declare class RhOption extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Whether the option is disabled and cannot be selected. Defaults to `false`. */
    disabled: boolean;
    /**
     * Form value for this option.
     * Priority: value attr -> displayLabel -> ''
     */
    get value(): string;
    set value(v: string);
    /**
     * Gets the display text for the rh-option.
     * Priority: slotted text content -> label attr -> value attr -> ''
     */
    get displayLabel(): string;
    /** Whether the option is currently selected. Defaults to `false`. */
    selected: boolean;
    /** Icon set for the optional rh-icon to precede the option text - 'ui' by default */
    iconSet?: IconSetName;
    /** The icon name of an rh-icon */
    icon?: IconNameFor<IconSetName>;
    /** Optional option description; overridden by description slot. */
    description?: string;
    /** Display text for this option; overridden by slotted text content */
    label?: string;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Initialize cached display label on first client-side render
     * @param changedProperties - Properties that changed before this update
     */
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private selectedChanged;
    private disabledChanged;
    private labelChanged;
    private valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-option': RhOption;
    }
}

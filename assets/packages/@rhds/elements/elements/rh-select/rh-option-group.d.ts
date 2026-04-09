import { LitElement } from 'lit';
/**
 * Groups related `rh-option` elements within an `rh-select` for organizing
 * options into categories. Provides visual separation when used with `<hr>`.
 * Should include a `label` for screen readers (ARIA `group` role). When
 * `disabled`, all child options are disabled. Arrow keys and Tab navigate
 * through grouped options the same way as ungrouped options.
 * @summary Groups related rh-option elements within a select
 * @alias option-group
 * @demo https://ux.redhat.com/elements/select/demo/option-group/ - Options organized into labeled groups
 */
export declare class RhOptionGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Group label text displayed above the option group for identification.
     * Should be used to describe the category or purpose of grouped options.
     * Overridden by the label slot if provided. Required for accessibility.
     */
    label?: string;
    /**
     * Whether the option group and all its child options are disabled.
     * When true, automatically disables all rh-option children, preventing
     * selection of any options within this group.
     */
    disabled: boolean;
    private defaultSlot;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private disabledChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-option-group': RhOptionGroup;
    }
}

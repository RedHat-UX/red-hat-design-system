import { LitElement } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
/**
 * Base label class
*/
export declare abstract class BaseLabel extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    abstract variant?: string;
    abstract color?: string;
    abstract icon?: string;
    /** Represents the state of the anonymous and icon slots */
    protected slots: SlotController;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Fallback content for the icon slot. When the `icon` attribute is set, it
     * should render an icon corresponding to the value.
     *
     * @example ```html
     * <pf-icon icon=${this.icon}></pf-icon>
     * ```
     */
    protected abstract renderDefaultIcon?(): unknown;
    /**
     * Optional override to render content after the anonymous slot.
     * @example ```html
     * <button id="close-button">X</button>
     * ```
     */
    protected abstract renderSuffix?(): unknown;
}

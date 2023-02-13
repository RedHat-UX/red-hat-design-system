import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { LitElement } from 'lit';
export declare abstract class BaseTooltip extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    abstract content?: string;
    /** The position of the tooltip, relative to the invoking content */
    abstract position?: Placement;
    connectedCallback(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}

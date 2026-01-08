import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-tooltip/pf-tooltip.js';
export declare class PfClipboardCopyCopiedEvent extends Event {
    text: string;
    constructor(text: string);
}
/**
 * The **clipboard copy** component allows users to quickly and easily copy content to their clipboard.
 * @alias Clipboard Copy
 * @fires {PfClipboardCopyCopiedEvent} copy - when the text snippet is successfully copied.
 */
export declare class PfClipboardCopy extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /** Tooltip message to display when clicking the copy button */
    clickTip: string;
    /** Tooltip message to display when hover the copy button */
    hoverTip: string;
    /** Accessible label to use on the text input. */
    accessibleTextLabel: string;
    /** Accessible label to use on the toggle button. */
    accessibleToggleLabel: string;
    /** Delay in ms before the tooltip appears. */
    entryDelay: number;
    /** Delay in ms before the tooltip disappears. */
    exitDelay: number;
    /** Flag to determine if inline clipboard copy should be block styling */
    block: boolean;
    /** Flag to determine if clipboard copy content includes code */
    code: boolean;
    /** Flag to determine if clipboard copy is in the expanded state */
    expanded: boolean;
    /** Implies not `inline`. */
    expandable: boolean;
    /** Flag to show if the input is read only. */
    readonly: boolean;
    /** Implies not expandable. Overrules `expandable`. */
    inline: boolean;
    /** Flag to determine if inline clipboard copy should have compact styling */
    compact: boolean;
    /** String to copy */
    value: string;
    connectedCallback(): void;
    /**
     * @todo fix the collapsed whitespace between the end of the "inline-compact" variant and the text node.
     * This demonstrates the collapsed whitespace issue.
     * The extra space between the closing slot tag and the closing template literal results in a collapsed whitespace.
     */
    render(): TemplateResult<1>;
    /**
     * Copy the current value to the clipboard.
     */
    copy(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-clipboard-copy': PfClipboardCopy;
    }
}

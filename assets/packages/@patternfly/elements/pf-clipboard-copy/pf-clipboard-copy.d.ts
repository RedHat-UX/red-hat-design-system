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
 * @slot - Place content to copy here, or use the `value` attribute
 * @slot actions - Place additional action buttons here
 * @fires {PfClipboardCopyCopiedEvent} copy - when the text snippet is successfully copied.
 * @cssprop [--pf-c-clipboard-copy__toggle-icon--Transition=.2s ease-in 0s]
 * @cssprop [--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate=90deg]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--PaddingTop=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--BackgroundColor=var(--pf-global--BackgroundColor--light-100, #fff)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--BorderTopWidth=0]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--BorderRightWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--BorderBottomWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--BorderLeftWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--BorderColor=var(--pf-global--BorderColor--100, #d2d2d2)]
 * @cssprop [--pf-c-clipboard-copy__expandable-content--OutlineOffset=calc(-1 * var(--pf-global--spacer--xs, 0.25rem))]
 * @cssprop [--pf-c-clipboard-copy--m-inline--PaddingTop=0]
 * @cssprop [--pf-c-clipboard-copy--m-inline--PaddingBottom=0]
 * @cssprop [--pf-c-clipboard-copy--m-inline--PaddingLeft=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-clipboard-copy--m-inline--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 * @cssprop [--pf-c-clipboard-copy__text--m-code--FontFamily=var(--pf-global--FontFamily--monospace, "Liberation Mono", consolas, "SFMono-Regular", menlo, monaco, "Courier New", monospace)]
 * @cssprop [--pf-c-clipboard-copy__text--m-code--FontSize=var(--pf-global--FontSize--sm, 0.875rem)]
 * @cssprop [--pf-c-clipboard-copy__actions-item--MarginTop=calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))]
 * @cssprop [--pf-c-clipboard-copy__actions-item--MarginBottom=calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))]
 * @cssprop [--pf-c-clipboard-copy__actions-item--button--PaddingTop=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-clipboard-copy__actions-item--button--PaddingRight=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-clipboard-copy__actions-item--button--PaddingBottom=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-clipboard-copy__actions-item--button--PaddingLeft=var(--pf-global--spacer--sm, 0.5rem)]
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

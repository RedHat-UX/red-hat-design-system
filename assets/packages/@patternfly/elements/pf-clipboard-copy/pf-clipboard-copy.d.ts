import { BaseClipboardCopy } from './BaseClipboardCopy.js';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-tooltip/pf-tooltip.js';
/**
 * The clipboard copy component allows users to quickly and easily copy content to their clipboard.
 *
 * @slot - Place content to copy here, or use the `value` attribute
 * @slot actions - Place additional action buttons here
 */
export declare class PfClipboardCopy extends BaseClipboardCopy {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static shadowRootOptions: ShadowRootInit;
    clickTip: string;
    hoverTip: string;
    textAriaLabel: string;
    toggleAriaLabel: string;
    entryDelay: number;
    exitDelay: number;
    block: boolean;
    code: boolean;
    expanded: boolean;
    /**
     * Implies not `inline`.
     */
    expandable: boolean;
    readonly: boolean;
    /**
     * Implies not expandable. Overrules `expandable`.
     */
    inline: boolean;
    compact: boolean;
    value: string;
    connectedCallback(): void;
    /**
     * @todo fix the collapsed whitespace between the end of the "inline-compact" variant and the text node.
     * This demonstrates the collapsed whitespace issue.
     * The extra space between the closing slot tag and the closing template literal results in a collapsed whitespace.
     */
    render(): import("lit-html").TemplateResult<1>;
    copy(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-clipboard-copy': PfClipboardCopy;
    }
}

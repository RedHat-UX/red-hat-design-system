import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class ClipboardCopyCopiedEvent extends ComposedEvent {
    text: string;
    constructor(text: string);
}
/**
 * Clipboard Copy
 * @slot - Place element content here
 */
export declare abstract class BaseClipboardCopy extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    abstract value: string;
    /**
     * Copy the current value to the clipboard.
     */
    copy(): Promise<void>;
}

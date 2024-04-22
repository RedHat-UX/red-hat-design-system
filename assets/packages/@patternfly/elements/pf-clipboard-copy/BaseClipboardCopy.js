import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { css } from "lit";
const styles = css `[hidden],\n[inert],\n[inert]::slotted(*) {\n  display: none !important;\n}\n\n`;
export class ClipboardCopyCopiedEvent extends ComposedEvent {
    constructor(text) {
        super('copy');
        this.text = text;
    }
}
/**
 * Clipboard Copy
 * @slot - Place element content here
 */
export class BaseClipboardCopy extends LitElement {
    /**
     * Copy the current value to the clipboard.
     */
    async copy() {
        await navigator.clipboard.writeText(this.value);
        this.dispatchEvent(new ClipboardCopyCopiedEvent(this.value));
    }
}
BaseClipboardCopy.styles = [styles];
//# sourceMappingURL=BaseClipboardCopy.js.map
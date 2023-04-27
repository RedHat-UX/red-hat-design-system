import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { css } from "lit";
const styles = css `[hidden],[inert],[inert]::slotted(*){display:none!important}`;
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
class BaseClipboardCopy extends LitElement {
    /**
     * Copy the current value to the clipboard.
     */
    async copy() {
        await navigator.clipboard.writeText(this.value);
        this.dispatchEvent(new ClipboardCopyCopiedEvent(this.value));
    }
}
BaseClipboardCopy.styles = [styles];
export { BaseClipboardCopy };
//# sourceMappingURL=BaseClipboardCopy.js.map
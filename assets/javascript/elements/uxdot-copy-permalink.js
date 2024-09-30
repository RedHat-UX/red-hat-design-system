var _UxdotCopyPermalink_instances, _UxdotCopyPermalink_internals, _UxdotCopyPermalink_copyLink;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{display:flex;margin-block-end:var(--rh-space-lg);align-items:center}#signifier{display:var(--perma-signifier-display,none)}#button{height:1.75rem;background:none;border:none;border-radius:var(--rh-border-radius-default);display:none;align-items:center}#button:is(:hover,:focus){background:var(--rh-color-surface-light)}:host(:state(rendered)) #button{display:flex}::slotted(:is(h1,h2,h3,h4,h5,h6)){display:flex;margin-block-end:0!important;align-items:center;color:inherit;text-decoration:inherit}`;
let UxdotCopyPermalink = class UxdotCopyPermalink extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotCopyPermalink_instances.add(this);
        this.copyButtonLabel = 'Copy link to clipboard';
        this.copiedText = 'Link copied';
        _UxdotCopyPermalink_internals.set(this, this.attachInternals());
    }
    render() {
        return html `
      <slot></slot>
      <span id="signifier">(permalink)</span>
      <button @click="${__classPrivateFieldGet(this, _UxdotCopyPermalink_instances, "m", _UxdotCopyPermalink_copyLink)}"
              id="button"
              aria-label="${this.copyButtonLabel}">
        <rh-icon set="ui" icon="link"></rh-icon>
      </button>
    `;
    }
    firstUpdated() {
        __classPrivateFieldGet(this, _UxdotCopyPermalink_internals, "f").states.add('rendered');
    }
};
_UxdotCopyPermalink_internals = new WeakMap();
_UxdotCopyPermalink_instances = new WeakSet();
_UxdotCopyPermalink_copyLink = async function _UxdotCopyPermalink_copyLink() {
    const [link] = this.shadowRoot
        ?.querySelector('slot')
        ?.assignedElements({ flatten: true })
        ?.map(child => child.querySelector('a'))
        ?.filter(x => !!x) ?? [];
    if (link) {
        await navigator.clipboard.writeText(link.href);
        RhAlert.toast({ message: this.copiedText });
    }
};
UxdotCopyPermalink.styles = [styles];
__decorate([
    property({ attribute: 'copy-button-label' })
], UxdotCopyPermalink.prototype, "copyButtonLabel", void 0);
__decorate([
    property({ attribute: 'copied-text' })
], UxdotCopyPermalink.prototype, "copiedText", void 0);
UxdotCopyPermalink = __decorate([
    customElement('uxdot-copy-permalink')
], UxdotCopyPermalink);
export { UxdotCopyPermalink };
//# sourceMappingURL=uxdot-copy-permalink.js.map
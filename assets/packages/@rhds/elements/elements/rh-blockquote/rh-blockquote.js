import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{color:var(--rh-color-text-primary);margin:0 auto;text-align:start;font-size:var(--rh-font-size-body-text-lg,1.125rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--rh-font-weight-heading-regular,400)}@media (min-width:768px){:host{font-size:var(--rh-font-size-body-text-xl,1.25rem)}}blockquote,figure{margin:0}figure{display:block;max-inline-size:752px}blockquote ::slotted(p){font-size:var(--rh-font-size-body-text-xl,1.25rem)!important;margin:0;margin-block-end:var(--rh-length-lg,16px)}figcaption{color:var(--rh-color-text-secondary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem)}figcaption p{margin:0}#author{font-weight:var(--rh-font-weight-heading-bold,700);margin-block-start:var(--rh-space-lg,16px)}rh-icon{color:var(--rh-color-icon-primary)}:host([align=center]){text-align:center}:host([align=center]) figure{margin-inline:auto}:host([align=center]) blockquote ::slotted(p){max-inline-size:none!important}:host([size=large]) blockquote ::slotted(p){font-size:var(--rh-font-size-body-text-2xl,1.5rem)!important;line-height:var(--rh-line-height-heading,1.3)}@media (min-width:768px){:host([size=large]) blockquote ::slotted(p){font-size:var(--rh-font-size-heading-md,1.75rem)!important}}.highlight{border-inline-start:var(--rh-length-md,8px) solid var(--rh-color-accent-brand);padding-inline-start:var(--rh-length-xl,24px)}`;
/**
 * A blockquote is styled quote text with an icon and attribution text.
 *
 * @summary  Highlights quotations and citations with text styles
 *
 * @alias blockquote
 *
 */
let RhBlockquote = class RhBlockquote extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Blockquote';
        /**
         * Set the alignment of the blockquote. Possible values are:
         * - `left` (default)
         * - `center`
         */
        this.align = 'inline-start';
        /** Optional highlight attribute that, when present, shows a highlight on side of blockquote. */
        this.highlight = false;
        /**
         * Set the text size of the blockquote. Possible values are:
         * - `default`
         * - `large`
         */
        this.size = 'default';
    }
    render() {
        const { highlight } = this;
        return html `
      <figure id="container" class="${classMap({ highlight })}">
        <rh-icon set="standard" icon="quotemark-open"></rh-icon>
        <blockquote id="quote">
          <!-- Provide a quote for the blockquote -->
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><!-- Provide an author for the blockquote --><slot name="author"></slot></p>
          <p id="title"><!-- Provide an author title for the blockquote --><slot name="title"></slot></p>
        </figcaption>
      </figure>
    `;
    }
};
RhBlockquote.styles = styles;
__decorate([
    property({ type: String })
], RhBlockquote.prototype, "title", void 0);
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhBlockquote.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true })
], RhBlockquote.prototype, "align", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhBlockquote.prototype, "highlight", void 0);
__decorate([
    property({ reflect: true })
], RhBlockquote.prototype, "size", void 0);
RhBlockquote = __decorate([
    customElement('rh-blockquote'),
    colorPalettes,
    themable
], RhBlockquote);
export { RhBlockquote };
//# sourceMappingURL=rh-blockquote.js.map
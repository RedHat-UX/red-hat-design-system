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
 * Provides a styled blockquote for featuring quotes with an icon
 * and attribution. Use when highlighting a customer testimonial,
 * expert opinion, or notable statement. Authors must provide quoted
 * text and should include an author. Uses `<figure>` semantics
 * with `<blockquote>` and `<figcaption>`, so screen readers convey the quote
 * and its source. Avoid placing interactive elements inside.
 *
 * @summary Highlights quotations and citations with text styles
 *
 * @alias blockquote
 */
let RhBlockquote = class RhBlockquote extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * built-in tooltip blockquote figure element.
         * Defaults to 'Blockquote'.
         *
         * @deprecated use subtitle
         */
        this.title = 'Blockquote';
        /**
         * Controls the horizontal alignment of the blockquote content.
         * Use `center` for short quotes in visually prominent layouts.
         * Avoid centering long text, as it reduces readability.
         * Possible values are:
         * - `inline-start` (default)
         * - `center`
         */
        this.align = 'inline-start';
        /**
         * When present, renders a brand-colored emphasis border on the
         * inline-start side of the blockquote for additional visual prominence.
         */
        this.highlight = false;
        /**
         * Controls the text size of the quoted passage. Use `large` for
         * short, impactful quotes and `default` for longer passages.
         * Possible values are:
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
          <!-- Block elements like \`<p>\` for the quoted passage.
               Screen readers announce this within the \`figure\` landmark. -->
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><!--
            Inline text for the quoted person's name.
            Screen readers announce this as attribution for the quote.
            Overrides the \`author\` attribute.
          --><slot name="author">${this.author}</slot></p>
          <p id="title"><!--
            Inline text for the author's job title or role.
            Screen readers announce this in the figcaption.
            Deprecated: use \`subtitle\`.
          --><slot name="title"></slot>
            <!--
              Inline text for the author's job title or role.
              Screen readers announce this in the figcaption.
              Overrides the \`subtitle\` attribute.
              Should not contain long strings of text. May contain links.
            -->
             <slot name="subtitle">${this.subtitle}</slot>
          </p>
        </figcaption>
      </figure>
    `;
    }
};
RhBlockquote.styles = styles;
__decorate([
    property({ type: String })
], RhBlockquote.prototype, "author", void 0);
__decorate([
    property({ type: String })
], RhBlockquote.prototype, "subtitle", void 0);
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
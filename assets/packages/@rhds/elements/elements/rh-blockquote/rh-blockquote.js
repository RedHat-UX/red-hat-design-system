import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{color:var(--rh-color-text-primary);margin:0 auto;text-align:left;font-size:var(--rh-font-size-body-text-lg,1.125rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--rh-font-weight-heading-regular,300)}@media (min-width:700px){:host{font-size:var(--rh-font-size-body-text-xl,1.25rem)}}blockquote,figure{margin:0}blockquote ::slotted(p){margin:var(--rh-length-lg,16px) 0}figcaption{color:var(--rh-color-text-secondary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem)}figcaption p{margin:0}#author{font-weight:var(--rh-font-weight-heading-bold,700)}rh-icon{color:var(--rh-color-icon-primary)}:host([align=center]){text-align:center}:host([size=large]){font-size:var(--rh-font-size-body-text-2xl,1.5rem);line-height:var(--rh-line-height-heading,1.3)}@media (min-width:700px){:host([size=large]){font-size:var(--rh-font-size-heading-md,1.75rem)}}.highlight{border-inline-start:var(--rh-length-md,8px) solid var(--rh-color-accent-brand);padding-inline-start:var(--rh-length-xl,24px)}`;
/**
 * A blockquote is a styled quotation and citation offset from other text styles on the page.
 *
 * @summary  Highlights quotations and citations with text styles
 *
 * @slot         - Provide a quote for the blockquote
 * @slot author  - Provide an author for the blockquote
 * @slot title   - Provide an author title for the blockquote
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
        const { highlight, on = 'light' } = this;
        return html `
      <figure id="container" class="${classMap({ highlight, on: true, [on]: true })}">
        <rh-icon set="standard" icon="quotemark-open"></rh-icon>
        <blockquote id="quote">
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><slot name="author"></slot></p>
          <p id="title"><slot name="title"></slot></p>
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
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhBlockquote.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhBlockquote.prototype, "on", void 0);
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
    customElement('rh-blockquote')
], RhBlockquote);
export { RhBlockquote };
//# sourceMappingURL=rh-blockquote.js.map
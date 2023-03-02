import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{color:var(--rh-color-black-900,#151515);margin:0 auto;text-align:left;background-color:var(--rh-element-background-color);font-size:var(--rh-font-size-body-text-lg, 1.125rem);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);line-height:var(--rh-line-height-body-text, 1.5);font-weight:var(--rh-font-weight-heading-regular,300)}@media (min-width:700px){:host{font-size:var(--rh-font-size-body-text-xl, 1.25rem)}}blockquote{margin:0}blockquote ::slotted(p){margin:var(--rh-length-lg,16px) 0}figcaption{color:var(--rh-color-black-600,#6a6e73);font-family:var(--rh-font-family-text, "RedHatText", "Overpass", Overpass, Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-body-text-sm, .875rem)}figcaption p{margin:0}#author{font-weight:var(--rh-font-weight-heading-bold,700)}svg{color:var(--rh-color-brand-red-500,#e00)}:host([align=center]){text-align:center}:host([size=large]){font-size:var(--rh-font-size-body-text-2xl, 1.5rem);line-height:var(--rh-line-height-heading, 1.3)}@media (min-width:700px){:host([size=large]){font-size:var(--rh-font-size-heading-md, 1.75rem)}}:host([highlight]){--_border-width:8px;--_border-color:#43adaf;--_border-style:solid}:host([highlight]) figure{border-inline-start:var(--_border-width) var(--_border-style) var(--_border-color);padding-inline-start:var(--rh-length-xl,24px)}.dark,:host([color-palette=darkest]){color:var(--rh-color-white,#fff)}.dark svg,:host([color-palette=darkest]) svg{color:var(--rh-color-brand-red-400,#f33)}.dark figcaption,:host([color-palette=darkest]) figcaption{color:var(--rh-color-black-300,#d2d2d2)}`;
/**
 * A blockquote for displaying quote, author, and author title.
 *
 *
 * @summary  A blockquote for displaying quote, author, and author title.
 *
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
        const { on = '' } = this;
        return html `
      <figure id="container" class="${classMap({ [on]: !!on })}">
        <svg fill="currentColor" height="20px" width="29px" aria-hidden="true" role="img" viewBox="4.3799147605896 8.372319221496582 27.240171432495117 19.24776840209961">
          <g>
            <path d="M 10,15.38 H 5.63 C 5.7110461,11.992437 8.6223137,9.3690967 12,9.64 12.344668,9.6747086 12.649028,9.4157753 12.67,9.07 12.72,8.44 12.04,8.34 11.55,8.38 7.5982208,8.3522481 4.3799026,11.548123 4.38,15.5 V 27 C 4.3743,27.34475 4.6552502,27.6257 5,27.62 h 11 c 0.34475,0.0057 0.6257,-0.27525 0.62,-0.62 V 22 C 16.614493,18.346158 13.653842,15.385507 10,15.38 Z"></path>
            <path d="M 25,15.38 H 20.63 C 20.71105,11.992437 23.622314,9.3690967 27,9.64 27.342787,9.668766 27.643464,9.4129672 27.67,9.07 27.72,8.44 27.04,8.34 26.55,8.38 c -3.932267,0 -7.12,3.187733 -7.12,7.12 V 27 c -0.0057,0.34475 0.27525,0.6257 0.62,0.62 H 31 c 0.34475,0.0057 0.6257,-0.27525 0.62,-0.62 V 22 C 31.614493,18.346158 28.653842,15.385507 25,15.38 Z"></path>
          </g>
        </svg>
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
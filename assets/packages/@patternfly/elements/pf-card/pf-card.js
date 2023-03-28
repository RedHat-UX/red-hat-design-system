import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const style = css `:host{background-color:var(--pf-c-card--BackgroundColor,var(--pf-global--BackgroundColor--100,#fff));box-shadow:var(--pf-c-card--BoxShadow,var(--pf-global--BoxShadow--sm,0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06)))}:host([size=compact]){--_pf-c-card__body--FontSize:var(--pf-c-card--size-compact__body--FontSize, var(--pf-global--FontSize--sm, .875rem));--_pf-c-card__footer--FontSize:var(--pf-c-card--size-compact__footer--FontSize, var(--pf-global--spacer--md, 1rem));--_pf-c-card--first-child--PaddingTop:var(--pf-c-card--size-compact--first-child--PaddingTop, var(--pf-global--spacer--lg, 1.5rem));--_pf-c-card--child--PaddingRight:var(--pf-c-card--size-compact--child--PaddingRight, var(--pf-global--spacer--md, 1rem));--_pf-c-card--child--PaddingBottom:var(--pf-c-card--size-compact--child--PaddingBottom, var(--pf-global--spacer--md, 1rem));--_pf-c-card--child--PaddingLeft:var(--pf-c-card--size-compact--child--PaddingLeft, var(--pf-global--spacer--md, 1rem));--_pf-c-card__title--not--last-child--PaddingBottom:var(--pf-c-card--size-compact__title--not--last-child--PaddingBottom, var(--pf-global--spacer--sm, .5rem))}:host([size=large]){--pf-c-card__title--FontSize:var(--pf-c-card--size-large__title--FontSize, var(--pf-global--FontSize--xl, 1.25rem));--_pf-c-card--first-child--PaddingTop:var(--pf-c-card--size-large--first-child--PaddingTop, var(--pf-global--spacer--xl, 2rem));--_pf-c-card--child--PaddingRight:var(--pf-c-card--size-large--child--PaddingRight, var(--pf-global--spacer--xl, 2rem));--_pf-c-card--child--PaddingBottom:var(--pf-c-card--size-large--child--PaddingBottom, var(--pf-global--spacer--xl, 2rem));--_pf-c-card--child--PaddingLeft:var(--pf-c-card--size-large--child--PaddingLeft, var(--pf-global--spacer--xl, 2rem));--_pf-c-card__title--not--last-child--PaddingBottom:var(--pf-c-card--size-large__title--not--last-child--PaddingBottom, var(--pf-global--spacer--lg, 1.5rem))}:host([flat]){--pf-c-card--BoxShadow:none;border:var(--pf-c-card--m-flat--BorderWidth,var(--pf-global--BorderWidth--sm,1px)) solid var(--pf-c-card--m-flat--BorderColor,var(--pf-global--BorderColor--100,#d2d2d2))}:host([plain]){--pf-c-card--BoxShadow:var(--pf-c-card--m-plain--BoxShadow, none);--pf-c-card--BackgroundColor:var(--pf-c-card--m-plain--BackgroundColor, transparent)}:host([rounded]){border-radius:var(--pf-c-card--m-rounded--BorderRadius,var(--pf-global--BorderRadius--sm,3px))}:host([full-height]){height:var(--pf-c-card--m-full-height--Height,100%);--_pf-c-card__body--FullHeight--Flex:1 1 auto}[part=body],[part=footer],[part=header]{padding-inline-start:var(--_pf-c-card--child--PaddingLeft,var(--pf-global--spacer--lg,1.5rem));padding-inline-end:var(--_pf-c-card--child--PaddingRight,var(--pf-global--spacer--lg,1.5rem));padding-block-end:var(--_pf-c-card--child--PaddingBottom,var(--pf-global--spacer--lg,1.5rem))}[part=body]{font-size:var(--_pf-c-card__body--FontSize, var(--pf-global--FontSize--md, 1rem));flex:var(--_pf-c-card__body--FullHeight--Flex,initial)}header{padding-block-start:var(--_pf-c-card--first-child--PaddingTop,var(--pf-global--spacer--lg,1.5rem));padding-block-end:var(--_pf-c-card__title--not--last-child--PaddingBottom,var(--pf-global--spacer--md,1rem))}header ::slotted(*){font-family:var(--pf-c-card__title--FontFamily, var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplayUpdated", helvetica, arial, sans-serif));font-size:var(--pf-c-card__title--FontSize, var(--pf-global--FontSize--md, 1rem));font-weight:var(--pf-c-card__title--FontWeight,var(--pf-global--FontWeight--bold,700));margin-block:0}[part=footer]{font-size:var(--_pf-c-card__footer--FontSize, var(--pf-global--FontSize--md, 1rem));margin-block-start:auto}`;
import { BaseCard } from './BaseCard.js';
/**
 * A card is a square or rectangular container that can contain any kind of content.
 * Cards symbolize units of information, and each one acts as an entry point for
 * users to access more details. For example, in dashboards and catalog views, cards
 * function as a preview of a detailed page. Cards may also be used in data displays
 * like card views, or for positioning content on a page.
 *
 * @summary Gives a preview of information in a small layout
 *
 * @slot header
 *       If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *       An icon, svg, or use of the icon component are also valid in this region.
 * @slot - Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot footer
 *       Use this slot for anything that you want to be stuck to the base of the card.
 *
 * @csspart header - The container for *header* content
 * @csspart body - The container for *body* content
 * @csspart footer - The container for *footer* content
 *
 *
 * @cssproperty {<color>} --pf-c-card--BackgroundColor {@default `#ffffff`}
 * @cssproperty {<color>} --pf-c-card--BoxShadow {@default `0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06)`}
 * @cssproperty {<color>} --pf-c-card--size-compact__body--FontSize {@default `.875rem`}
 * @cssproperty {<color>} --pf-c-card--size-compact__footer--FontSize {@default `1rem`}
 * @cssproperty {<color>} --pf-c-card--size-compact--first-child--PaddingTop {@default `1.5rem`}
 * @cssproperty {<color>} --pf-c-card--size-compact--child--PaddingRight {@default `1rem`}
 * @cssproperty {<color>} --pf-c-card--size-compact--child--PaddingBottom {@default `1rem`}
 * @cssproperty {<color>} --pf-c-card--size-compact--child--PaddingLeft {@default `1rem`}
 * @cssproperty {<color>} --pf-c-card--size-compact__title--not--last-child--PaddingBottom {@default `.5rem`}
 * @cssproperty {<color>} --pf-c-card--size-large__title--FontSize {@default `1.25rem`}
 * @cssproperty {<color>} --pf-c-card--size-large--first-child--PaddingTop {@default `2rem`}
 * @cssproperty {<color>} --pf-c-card--size-large--child--PaddingRight {@default `2rem`}
 * @cssproperty {<color>} --pf-c-card--size-large--child--PaddingBottom {@default `2rem`}
 * @cssproperty {<color>} --pf-c-card--size-large--child--PaddingLeft {@default `2rem`}
 * @cssproperty {<color>} --pf-c-card--size-large__title--not--last-child--PaddingBottom {@default `1.5rem`}
 * @cssproperty {<color>} --pf-c-card--m-flat--BorderWidth {@default `1px solid #d2d2d2`}
 * @cssproperty {<color>} --pf-c-card--m-plain--BoxShadow {@default `none`}
 * @cssproperty {<color>} --pf-c-card--m-plain--BackgroundColor {@default `transparent`}
 * @cssproperty {<color>} --pf-c-card--m-rounded--BorderRadius {@default `3px`}
 * @cssproperty {<color>} --pf-c-card--m-full-height--Height {@default `100%`}
 * @cssproperty {<color>} --pf-c-card__title--FontFamily {@default `"RedHatDisplayUpdated", helvetica, arial, sans-serif`}
 * @cssproperty {<color>} --pf-c-card__title--FontSize {@default `1rem`}
 * @cssproperty {<color>} --pf-c-card__title--FontWeight {@default `700`}
 */
let PfCard = class PfCard extends BaseCard {
    constructor() {
        super(...arguments);
        /**
        * Optionally apply a border radius for the drop shadow and/or border.
        */
        this.rounded = false;
        /**
       * Optionally allow the card to take up the full height of the parent element.
       */
        this.fullHeight = false;
        /**
         * Optionally remove the border on the card container.
         */
        this.plain = false;
    }
};
PfCard.styles = [...BaseCard.styles, style];
__decorate([
    property({ reflect: true })
], PfCard.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfCard.prototype, "rounded", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'full-height' })
], PfCard.prototype, "fullHeight", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfCard.prototype, "plain", void 0);
PfCard = __decorate([
    customElement('pf-card')
], PfCard);
export { PfCard };
//# sourceMappingURL=pf-card.js.map
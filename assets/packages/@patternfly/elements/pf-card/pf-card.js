var _PfCard_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const style = css `:host {
\t/** BackgroundColor for the card */
\t--pf-c-card--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** BoxShadow for the card */
\t--pf-c-card--BoxShadow: var(--pf-global--BoxShadow--sm, 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--first-child--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--child--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--child--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--child--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--c-divider--child--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t/** FontFamily for the card title */
\t--pf-c-card__title--FontFamily: var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplay", "Overpass", overpass, helvetica, arial, sans-serif);
\t/** FontSize for the card title */
\t--pf-c-card__title--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** FontWeight for the card title */
\t--pf-c-card__title--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t--pf-c-card__title--not--last-child--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t--pf-c-card__body--FontSize: var(--pf-global--FontSize--md, 1rem);
\t--pf-c-card__footer--FontSize: var(--pf-global--FontSize--md, 1rem);
\t--pf-c-card__actions--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t--pf-c-card__actions--child--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
\t--pf-c-card__header-toggle--MarginTop: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-card__header-toggle--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-card__header-toggle--MarginBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-card__header-toggle--MarginLeft: calc(var(--pf-global--spacer--md, 1rem) * -1);
\t--pf-c-card__header-toggle-icon--Transition: var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1));
\t--pf-c-card--m-expanded__header-toggle-icon--Rotate: 90deg;
\t--pf-c-card--m-hoverable--hover--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--hover--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--focus--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--active--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--m-selected--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--m-selected--before--Height: var(--pf-global--BorderWidth--lg, 3px);
\t--pf-c-card--m-selectable--m-selected--before--BackgroundColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-card--m-hoverable-raised--hover--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-hoverable-raised--hover--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--before--Right: 0;
\t--pf-c-card--m-selectable-raised--before--Bottom: 0;
\t--pf-c-card--m-selectable-raised--before--Left: 0;
\t--pf-c-card--m-flat--m-selectable-raised--before--Right: calc(-1 * var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-flat--m-selectable-raised--before--Bottom: calc(-1 * var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-flat--m-selectable-raised--before--Left: calc(-1 * var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-selectable-raised--before--Height: var(--pf-global--BorderWidth--xl, 4px);
\t--pf-c-card--m-selectable-raised--before--BackgroundColor: transparent;
\t--pf-c-card--m-selectable-raised--before--Transition: none;
\t--pf-c-card--m-selectable-raised--before--ScaleY: 1;
\t--pf-c-card--m-selectable-raised--before--TranslateY: 0;
\t--pf-c-card--m-selectable-raised--hover--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-selectable-raised--hover--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--focus--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-selectable-raised--focus--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--active--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-selectable-raised--active--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--BackgroundColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-card--m-selectable-raised--m-selected-raised--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base: -0.5rem;
\t--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY: var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base);
\t--pf-c-card--m-flat--m-selectable-raised--m-selected-raised--TranslateY: calc(var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base) + var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-rounded--m-selectable-raised--m-selected-raised--TranslateY: calc(var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base) + var(--pf-c-card--m-rounded--BorderRadius));
\t--pf-c-card--m-selectable-raised--m-selected-raised--ZIndex: var(--pf-global--ZIndex--xs, 100);
\t--pf-c-card--m-selectable-raised--m-selected-raised--Transition: transform .25s linear, box-shadow .25s linear;
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--Transition: transform .25s linear;
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--TranslateY: calc(var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY) * -1);
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--ScaleY: 2;
\t--pf-c-card--m-non-selectable-raised--BackgroundColor: var(--pf-global--BackgroundColor--light-200, #fafafa);
\t--pf-c-card--m-non-selectable-raised--before--BackgroundColor: var(--pf-global--disabled-color--200, #d2d2d2);
\t--pf-c-card--m-non-selectable-raised--before--ScaleY: 2;
\t--pf-c-card--m-flat--m-non-selectable-raised--before--BorderColor: var(--pf-global--disabled-color--200, #d2d2d2);
\t/** FontSize for the card body in compact size */
\t--pf-c-card--m-compact__body--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** FontSize for the card footer in compact size */
\t--pf-c-card--m-compact__footer--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** PaddingTop for the first child in compact size */
\t--pf-c-card--m-compact--first-child--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** PaddingRight for children in compact size */
\t--pf-c-card--m-compact--child--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for children in compact size */
\t--pf-c-card--m-compact--child--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t/** PaddingLeft for children in compact size */
\t--pf-c-card--m-compact--child--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t--pf-c-card--m-compact--c-divider--child--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for the title when not last child in compact size */
\t--pf-c-card--m-compact__title--not--last-child--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);
\t/** FontSize for the title in large size */
\t--pf-c-card--m-display-lg__title--FontSize: var(--pf-global--FontSize--xl, 1.25rem);
\t/** PaddingTop for the first child in large size */
\t--pf-c-card--m-display-lg--first-child--PaddingTop: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingRight for children in large size */
\t--pf-c-card--m-display-lg--child--PaddingRight: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingBottom for children in large size */
\t--pf-c-card--m-display-lg--child--PaddingBottom: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingLeft for children in large size */
\t--pf-c-card--m-display-lg--child--PaddingLeft: var(--pf-global--spacer--xl, 2rem);
\t--pf-c-card--m-display-lg--c-divider--child--PaddingTop: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingBottom for the title when not last child in large size */
\t--pf-c-card--m-display-lg__title--not--last-child--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
\t/** BorderWidth for the flat variant */
\t--pf-c-card--m-flat--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderColor for the flat variant */
\t--pf-c-card--m-flat--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** BorderRadius for the rounded variant */
\t--pf-c-card--m-rounded--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
\t/** Height for the full height variant */
\t--pf-c-card--m-full-height--Height: 100%;
\t/** BoxShadow for the plain variant */
\t--pf-c-card--m-plain--BoxShadow: none;
\t/** BackgroundColor for the plain variant */
\t--pf-c-card--m-plain--BackgroundColor: transparent;
\t--pf-c-card__header--m-toggle-right--toggle--MarginRight: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-card__header--m-toggle-right--toggle--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-card__header--m-toggle-right--actions--MarginRight: 0;
\t--pf-c-card__input--focus--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-card__input--focus--BorderColor: var(--pf-global--primary-color--100, #06c);
  display: flex;
  flex-direction: column;
\tbackground-color: var(--pf-c-card--BackgroundColor);
\tbox-shadow: var(--pf-c-card--BoxShadow);
}

[hidden],
.empty {
  display: none !important;
}

header {
  padding-block-start: var(--pf-c-card--first-child--PaddingTop);
  padding-block-end: var(--pf-c-card__title--not--last-child--PaddingBottom);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

header ::slotted(*) {
  margin-block: 0 !important;

  font-family: var(--pf-c-card__title--FontFamily) !important;
  font-size: var(--pf-c-card__title--FontSize) !important;
  font-weight: var(--pf-c-card__title--FontWeight) !important;
}

header ::slotted(pf-dropdown) {
  margin-inline-start: auto;
}

article {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

[part="header"],
[part="body"],
[part="footer"] {
  padding-inline-start: var(--pf-c-card--child--PaddingLeft);
  padding-inline-end: var(--pf-c-card--child--PaddingRight);
  padding-block-end: var(--pf-c-card--child--PaddingBottom);
}

#title {
  display: block;
  flex: 1 0 100%;
  padding-block-start: var(--pf-c-card__title--not--last-child--PaddingBottom);
}

[part="body"] {
  font-size: var(--pf-c-card__body--FontSize);
  flex: var(--pf-c-card__body--FullHeight--Flex);
}

[part="body"] ::slotted(:not([slot]):first-of-type) {
  margin-block-start: 0 !important;
}

[part="body"] ::slotted(:not([slot]):last-of-type) {
  margin-block-end: 0 !important;
}

[part="footer"] {
  margin-block-start: auto;
  display: flex;
  gap: 0.5em;
  inset-block-end: 0;
  font-size: var(--pf-c-card__footer--FontSize);
}

:host([size="compact"]) {
\t--pf-c-card__body--FontSize: var(--pf-c-card--m-compact__body--FontSize);
\t--pf-c-card__footer--FontSize: var(--pf-c-card--m-compact__footer--FontSize);
\t--pf-c-card--first-child--PaddingTop: var(--pf-c-card--m-compact--first-child--PaddingTop);
\t--pf-c-card--child--PaddingRight: var(--pf-c-card--m-compact--child--PaddingRight);
\t--pf-c-card--child--PaddingBottom: var(--pf-c-card--m-compact--child--PaddingBottom);
\t--pf-c-card--child--PaddingLeft: var(--pf-c-card--m-compact--child--PaddingLeft);
\t--pf-c-card--c-divider--child--PaddingTop: var(--pf-c-card--m-compact--c-divider--child--PaddingTop);
\t--pf-c-card__title--not--last-child--PaddingBottom: var(--pf-c-card--m-compact__title--not--last-child--PaddingBottom);
}

:host([size="large"]) {
\t--pf-c-card__title--FontSize: var(--pf-c-card--m-display-lg__title--FontSize);
\t--pf-c-card--first-child--PaddingTop: var(--pf-c-card--m-display-lg--first-child--PaddingTop);
\t--pf-c-card--child--PaddingRight: var(--pf-c-card--m-display-lg--child--PaddingRight);
\t--pf-c-card--child--PaddingBottom: var(--pf-c-card--m-display-lg--child--PaddingBottom);
\t--pf-c-card--child--PaddingLeft: var(--pf-c-card--m-display-lg--child--PaddingLeft);
\t--pf-c-card--c-divider--child--PaddingTop: var(--pf-c-card--m-display-lg--c-divider--child--PaddingTop);
\t--pf-c-card__title--not--last-child--PaddingBottom: var(--pf-c-card--m-display-lg__title--not--last-child--PaddingBottom);
}

:host([flat]) {
  --pf-c-card--BoxShadow: none;
  border: var(--pf-c-card--m-flat--BorderWidth) solid var(--pf-c-card--m-flat--BorderColor);
}

:host([plain]) {
  --pf-c-card--BoxShadow: var(--pf-c-card--m-plain--BoxShadow);
  --pf-c-card--BackgroundColor: var(--pf-c-card--m-plain--BackgroundColor);
}

:host([rounded]) {
  border-radius: var(--pf-c-card--m-rounded--BorderRadius);
}

:host([full-height]) {
  height: var(--pf-c-card--m-full-height--Height);
  --pf-c-card__body--FullHeight--Flex: 1 1 auto;
}

`;
let PfCard = class PfCard extends LitElement {
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
        _PfCard_slots.set(this, new SlotController(this, 'header', 'title', null, 'footer'));
    }
    render() {
        return html `
      <article>
        <!-- summary: The container for *header* content -->
        <header id="header"
                part="header"
                class="${classMap({ empty: __classPrivateFieldGet(this, _PfCard_slots, "f").isEmpty('header') })}">
          <!-- summary: When included, defines the contents of a card.
               description: |
                 Card headers can contain images as well as the title of a card and an actions menu
                 represented by the right-aligned kebab. In most cases, your card should include a
                 header. The only exceptions are when cards being used as a layout element to
                 create a white background behind other content.
          -->
          <slot name="header"></slot>
          <!-- summary: Communicates the title of a card if it's not included in the header.
               description: |
                 If a card will be utilized as a selectable and clickable card, the title
                 needs to be made as a linked text to trigger action and indicate interaction.
          -->
          <slot id="title" name="title" ?hidden="${__classPrivateFieldGet(this, _PfCard_slots, "f").isEmpty('title')}"></slot>
        </header>
        <!-- summary: The container for *body* content -->
        <div id="body"
             part="body"
             class="${classMap({ empty: __classPrivateFieldGet(this, _PfCard_slots, "f").isEmpty(null) })}">
          <!-- summary: Body. Provides details about the item.
               description: |
                 A card body can include any combination of static text and/or active content.
          -->
          <slot></slot>
        </div>
        <!-- summary: The container for *footer* content -->
        <footer id="footer"
                part="footer"
                class="${classMap({ empty: __classPrivateFieldGet(this, _PfCard_slots, "f").isEmpty('footer') })}">
          <!-- summary: Contains external links, actions, or static text at the bottom of a card. -->
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
    }
};
_PfCard_slots = new WeakMap();
PfCard.styles = [style];
PfCard.version = "4.3.0";
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
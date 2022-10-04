import {css} from 'lit';
export const styles = css`:host {
  /* apply sensible defaults based on redhat standards. */
  color: var(--rh-color-white, #ffffff);
  font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif) !important;
  line-height: var(--rh-line-height-body-text, 1.5);
  font-weight: var(--_font-weight);
  font-size: initial;
  display: flex;
  flex-direction: column;
}

footer,
.global-base {
  --_icon-color: var(--rh-footer-icon-color, var(--rh-color-black-500, #8a8d90));
  --_icon-color-hover: var(--rh-footer-icon-color-hover, var(--rh-color-black-400, #b8bbbe));
  --_border-color: var(--rh-footer-border-color, var(--rh-color-black-600, #6a6e73));
  --_accent-color: var(--rh-footer-accent-color, var(--rh-color-brand-red-on-light, #ee0000));
  --_section-side-gap: var(--rh-footer-section-side-gap, var(--rh-space-2xl, 32px));
  --_accordion-background: var(--rh-color-white, #ffffff);
  --_logo-width: var(--rh-size-icon-04, 40px);
  --_font-weight: var(--rh-font-weight-body-text-regular, 400);

  /* Style Accordions */
  --pfe-accordion--Color: var(--_accordion-background);
  --pfe-accordion--Color--expanded: var(--_accordion-background);
  --pfe-accordion--Color--active: var(--_accordion-background);
  --pfe-accordion--BackgroundColor: transparent;
  --pfe-accordion--BackgroundColor--active: transparent;
  --pfe-accordion--BackgroundColor--expanded: var(--rh-color-surface-darkest, #151515);
  --pfe-accordion--BorderColor: var(--_border-color);
  --pfe-accordion--FontSize--header: initial;
  --pfe-accordion--FontWeight--header: var(--_font-weight);
  --pfe-accordion--accent--expanded: var(--_accent-color);
  --pfe-accordion--accent--active: var(--_accent-color);
}

pfe-accordion {
  --pfe-context-background-color: transparent;
}

* {
  box-sizing: border-box;
}

::slotted(:is(h1,h2,h3,h4,h5,h6)) {
  font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif) !important;
}

/**
 * Debugging
 */
:host([debug]) *:not(.spacer, .base, a, svg) {
  /* make sure we have some */
  min-height: var(--rh-length-xl, 24px);
  position: relative;
  outline: var(--rh-length-3xs, 2px) dotted red;
}

:host([debug]) *:not(.spacer, .base, a, svg):after {
  content: attr(part);
  display: block;
  position: absolute;
  color: white;
  background-color: darkslategray;
  padding: var(--rh-space-xs, 4px);
  top: 0;
  right: 0;
  font-family: var(--rh-font-family-code, RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace);
  font-size: var(--rh-font-size-code-xs, 0.75rem);
}

/**
 * Regions
 */
.section {
  padding: var(--rh-space-2xl, 32px) var(--_section-side-gap);
}

.header {
  background-color: var(--rh-color-surface-darker, #212427);

  /* children should flex wrap on mobile */
  display: flex;
  flex-wrap: wrap;
  gap: var(--rh-space-2xl, 32px);
  align-items: center;
  position: relative;
}

.header:after {
  display: block;
  content: "";
  background-color: var(--_border-color);
  height: var(--rh-length-4xs, 1px);
  position: absolute;
  bottom: 0;
  width: calc(100% - var(--_section-side-gap) * 2);
  left: var(--_section-side-gap);
}

.header-primary {
  flex: 1 1 auto;
}

.header-secondary {
  /* secondary should be push to the end */

  /* of the line on mobile */
  flex: 0 1 auto;
}

.main {
  background-color: var(--rh-color-surface-darker, #212427);
  display: grid;
  gap: var(--rh-space-2xl, 32px);
}

.main-secondary {
  display: grid;
  gap: var(--pf-global--spacer--xl, 32px);
  place-items: baseline;
  place-content: start;
}

.global-base {
  --rh-footer-link-font-size: var(--rh-font-size-body-text-xs, 0.75rem);

  /* reduce the line-height for global links */
  line-height: 100%;
  background-color: var(--rh-color-surface-darkest, #151515);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "logo"
    "primary"
    "spacer"
    "secondary"
    "tertiary";
  gap: var(--rh-space-2xl, 32px) var(--rh-space-xl, 24px);
}

.global-logo {
  grid-area: logo;
  width: var(--_logo-width);
}

.global-logo-image {
  fill: var(--_icon-color);
}

.global-logo-image:is(:hover, :focus-within) {
  fill: var(--_icon-color-hover);
}

.global-primary {
  grid-area: primary;
}

.global-secondary {
  grid-area: secondary;
  color: var(--rh-color-text-secondary-on-dark, #d2d2d2);
  display: flex;
  flex-direction: column;
  gap: var(--rh-space-lg, 16px);
  justify-content: space-between;
}

.global-tertiary {
  grid-area: tertiary;
  display: grid;
  justify-content: start;
  align-items: start;
}

.global-links-primary {
  display: flex;
  flex-direction: column;
  gap: var(--rh-space-md, 8px) var(--rh-space-xl, 24px);
}

.global-links-secondary {
  display: flex;
  flex-direction: column;
  gap: var(--rh-space-md, 8px) var(--rh-space-xl, 24px);
}

/* reduce the font size of the content in these regions */
:is(.global-primary, .global-secondary, .global-tertiary) ::slotted(*) {
  font-size: var(--rh-font-size-body-text-xs, 0.75rem);
}

.logo {
  /* fix wierd problem where there is extra space below logo */
  line-height: 0px;
}

.social-links {
  display: flex;
  margin-inline-start: 0;
  padding-inline-start: 0;
}

.social-links rh-footer-links,
.social-links slot::slotted(rh-footer-links) {
  display: flex;
  flex-direction: row;
  gap: var(--rh-space-xl, 24px);
}

:is(.links, .global-links-primary, .global-links-secondary) ::slotted(ul) {
  padding: 0;
  margin: 0;
  display: contents;
}

.isMobile .links {
  --rh-footer-link-header-font-size: var(--rh-font-size-body-text-lg, 1.125rem);
}

.isMobile .links ::slotted(ul) {
  --rh-footer-link-font-size: 1em;

  display: grid;
  grid-template-columns: 1fr;
  gap: calc(var(--rh-space-2xl, 32px) / 2);
}

[part="base"]:not(.isMobile) .links {
  display: grid;
  grid-template-columns: repeat(1fr, 25%);
  grid-template-rows: repeat(2, min-content auto);
  grid-auto-columns: minmax(0, 1fr);
  row-gap: var(--rh-space-lg, 16px);
  column-gap: var(--rh-space-2xl, 32px);
  grid-auto-flow: column;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(1)) {
  grid-column: 1/2;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(2)) {
  grid-column: 2/3;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(3)) {
  grid-column: 3/4;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(4)) {
  grid-column: 4/5;
  grid-row: 1/2;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(5)) {
  grid-column: 1/2;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(6)) {
  grid-column: 2/3;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(7)) {
  grid-column: 3/4;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(h2, h3, h4, h5, h6):nth-of-type(8)) {
  grid-column: 4/5;
  grid-row: 3/4;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(1))) {
  grid-column: 1/2;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(2))) {
  grid-column: 2/3;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(3))) {
  grid-column: 3/4;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(4))) {
  grid-column: 4/5;
  grid-row: 2/3;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(5))) {
  grid-column: 1/2;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(6))) {
  grid-column: 2/3;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(7))) {
  grid-column: 3/4;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(8))) {
  grid-column: 4/5;
  grid-row: 4/5;
}

[part="base"]:not(.isMobile) .links ::slotted(ul) {
  gap: var(--rh-footer-links-gap, var(--rh-space-lg, 16px));
  display: flex;
  flex-direction: column;
}

#footer-logo {
  width: var(--_logo-width);
}

:is(.links, .global-links-primary, .global-links-secondary) ::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: var(--rh-font-weight-heading-medium, 500) !important;
  margin-block: 0 !important;
  font-size:
    var(
      --rh-footer-link-header-font-size,
      var(--rh-font-size-body-text-sm, 0.875rem)
    ) !important;
  color: var(--rh-color-white, #ffffff) !important; 
}
`;
export default styles;

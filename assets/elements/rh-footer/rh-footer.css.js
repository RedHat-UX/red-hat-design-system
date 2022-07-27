import {css} from 'lit';
export const styles = css`/* TODO: RHDS tokens */
:host {
  --_icon-color: var(--rh-footer-icon-color, #8a8d90);
  --_icon-color-hover: var(--rh-footer-icon-color-hover, #b8bbbe);
  --_border-color: var(--rh-footer-border-color, #6a6e73);
  --_accent-color: var(--rh-footer-accent-color, #e00);
  --_section-side-gap: var(--rh-footer-section-side-gap, var(--pf-global--spacer--xl, 32px));

  /* Style Accordions */
  --pfe-accordion--Color: #fff;
  --pfe-accordion--Color--expanded: #fff;
  --pfe-accordion--Color--active: #fff;
  --pfe-accordion--BackgroundColor: transparent;
  --pfe-accordion--BackgroundColor--active: transparent;
  --pfe-accordion--BackgroundColor--expanded: #151515;
  --pfe-accordion--BorderColor: var(--_border-color);
  --pfe-accordion--FontSize--header: initial;
  --pfe-accordion--FontWeight--header: 300;
  --pfe-accordion--accent--expanded: var(--_accent-color);
  --pfe-accordion--accent--active: var(--_accent-color);

  /* apply sensible defaults based on redhat standards. */
  color: #fff;
  font-family: 'Red Hat Text', 'RedHatText', 'Overpass', Overpass, Arial, sans-serif;
  line-height: 150%;
  font-weight: 300;

  font-size: initial;
  display: flex;
  flex-direction: column;
}

pfe-accordion {
  --pfe-context-background-color: transparent;
}

* {
  box-sizing: border-box;
}

::slotted(:is(h1,h2,h3,h4,h5,h6)) {
  font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Overpass, Helvetica, Arial, sans-serif) !important;
}

/**
 * Debugging
 */
:host([debug]) *:not(.spacer, .base, a, svg) {
  position: relative;
  outline: 2px dotted red;
  /* make sure we have some */
  min-height: 1.5625em;
}

:host([debug]) *:not(.spacer, .base, a, svg)::after {
  content: attr(part);
  display: block;
  position: absolute;
  color: white;
  background-color: darkslategray;
  padding: 0.3em;
  top: 0;
  right: 0;
  font-size: 0.7rem;
}

/**
 * Regions
 */
.section {
  padding: var(--pf-global--spacer--xl, 32px) var(--_section-side-gap);
}

.header {
  background-color: #212427;
  /* children should flex wrap on mobile */
  display: flex;
  flex-wrap: wrap;
  gap: var(--pf-global--spacer--xl, 32px);
  align-items: center;
  position: relative;
}

.header::after {
  display: block;
  content: '';
  background-color: var(--_border-color);
  height: 1px;
  position: absolute;
  bottom: 0px;
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
  background-color: #212427;
  display: grid;
  gap: var(--pf-global--spacer--xl, 32px);
}

.global-base {
  --link-font-size: 0.75em;
  /* reduce the line-height for global links */
  line-height: 100%;
  background-color: #151515;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'logo'
    'primary'
    'spacer'
    'secondary'
    'tertiary';
  gap: 2em 1.5em;
}

.global-logo {
  grid-area: logo;
  width: 2.625em;
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
  color: #d2d2d2;
  display: flex;
  flex-direction: column;
  gap: 1em;
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
  gap: 0.5em 1.5em;
}

.global-links-secondary {
  display: flex;
  flex-direction: column;
  gap: 0.5em 1.5em;
}

/* reduce the font size of the content in these regions */
:is(.global-primary, .global-secondary, .global-tertiary) ::slotted(*) {
  font-size: 0.75em;
}

.logo {
  /* fix wierd problem where there is extra space below logo */
  line-height: 0px;
}

.logo slot::slotted(a),
.logo a {
  display: inline-flex;
  width: 9.75em;
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
  gap: 1.5em;
}

[part="base"]:not(.isMobile) .links {
  display: grid;
  grid-template-columns: repeat(1fr, 25%);
  grid-template-rows: repeat(2, min-content auto);
  gap: var(--rh-footer-links-column-gap, 32px);
  grid-auto-columns: minmax(0, 1fr);
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
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--rh-footer-links-gap, 10px);
  margin-block-start:
    calc(
      var(--rh-footer-links-column-gap, 32px)
      * -1
      + var(--rh-footer-links-gap, 10px)
    ) !important;
}

.isMobile .links ::slotted(ul) {
  --link-font-size: 1em;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--rh-footer-links-column-gap, 16px);
}

#footer-logo {
  width: 2.625em;
}

:is(.links, .global-links-primary, .global-links-secondary) ::slotted(ul) {
  padding: 0;
  margin: 0;
  display: contents;
}

:is(.links, .global-links-primary, .global-links-secondary) ::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: 500 !important;
  margin-block: 0 !important;
  font-size: var(--rh-footer-link-header-font-size, 0.875em) !important;
}
`;
export default styles;

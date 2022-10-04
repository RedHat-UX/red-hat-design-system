import {css} from 'lit';
export const styles = css`:host {
  display: block;
  position: relative;
}

/** Add margin to blocks that aren't first in the sidebar. */

/** Add the separator to blocks in the middle */
:host(:not(:last-of-type, :first-of-type)):after {
  content: "";
  display: block;
  height: 1px;
  width: 100%;
  margin-block-start: var(--rh-space-2xl, 32px);
  background: var(--_border-color);
}

::slotted(*) {
  color: var(--rh-color-text-primary-on-dark, #ffffff);
  font-size: var(--rh-font-size-body-text-sm, 0.875rem);
  text-decoration: none;
  max-width: 650px;
}

::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: var(--rh-font-weight-heading-medium, 500) !important;
  font-size: var(--rh-font-size-body-text-sm, 0.875rem) !important;
  margin-block: 0 var(--rh-space-lg, 16px) !important;
  color: var(--rh-color-white, #ffffff) !important; 
}

::slotted(:last-child) {
  margin-block-end: 0 !important;
}

.content ::slotted(*) {
  color: var(--rh-color-text-secondary-on-dark, #d2d2d2);
  font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  font-weight: var(--rh-font-weight-body-text-regular, 400);
}
`;
export default styles;

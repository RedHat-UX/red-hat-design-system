import {css} from 'lit';
export const styles = css`:host {
  display: block;
  position: relative;
}

/** Add margin to blocks that aren't first in the sidebar. */
:host(:not(:first-of-type)) {
  margin-top: var(--rh-space-xl, 24px);
}

/** Add the separator to blocks in the middle */
:host(:not(:last-of-type, :first-of-type)) {
  border-bottom: var(--rh-border-width-sm, 1px) solid var(--_border-color);
  padding-bottom: var(--rh-space-xl, 24px);
}

::slotted(*) {
  color: var(--rh-color-text-primary-on-dark, #ffffff);
  font-size: var(--rh-font-size-body-text-sm, 0.875rem);
  text-decoration: none;
}

::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: var(--rh-font-weight-heading-medium, 500) !important;
  font-size: var(--rh-font-size-body-text-sm, 0.875rem) !important;
  margin-block: 0 var(--rh-space-lg, 16px) !important;
}

.content ::slotted(*) {
  color: var(--rh-color-text-secondary-on-dark, #d2d2d2);
  font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  font-weight: var(--rh-font-weight-body-text-regular, 400);
}
`;
export default styles;

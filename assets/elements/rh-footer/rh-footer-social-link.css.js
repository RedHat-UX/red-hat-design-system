import {css} from 'lit';
export const styles = css`:host {
  display: block;

  /* @Deprecated with PFE 2.0 */
  --pfe-icon--color: var(--_icon-color);
  --pfe-icon--size: var(--rh-footer--social-icon--size, var(--rh-size-icon-02, 24px));
}

::slotted(a) {
  color: var(--_icon-color) !important;
}

::slotted(a:is(:hover, :focus-within)) {
  color: var(--_icon-color-hover) !important;
}
`;
export default styles;

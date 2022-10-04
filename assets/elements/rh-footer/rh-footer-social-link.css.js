import {css} from 'lit';
export const styles = css`:host {
  display: block;

  --pfe-icon--color: var(--_icon-color);
  --pfe-icon--size: var(--rh-footer--social-icon--size, var(--rh-size-icon-02, 24px));
}

:host(:is(:hover, :focus-within)) {
  --pfe-icon--color: var(--_icon-color-hover);
}
`;
export default styles;

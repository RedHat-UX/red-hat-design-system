import {css} from 'lit';
export const styles = css`:host {
  display: block;
  --pfe-icon--color: var(--_icon-color);
  --pfe-icon--size: var(--rh-footer--social-icon--size, 1.75em);
}

:host(:is(:hover, :focus-within)) {
  --pfe-icon--color: var(--_icon-color-hover);
}
`;
export default styles;

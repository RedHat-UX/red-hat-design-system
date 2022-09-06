import {css} from 'lit';
export const styles = css`:host {
  position: fixed;
  background: rgb(21, 21, 21, 0.75);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--rh-secondary-nav-overlay-z-index, -1);
}

:host([open]) {
  display: block;
}

:host(:not([open])) {
  display: none;
}
`;
export default styles;

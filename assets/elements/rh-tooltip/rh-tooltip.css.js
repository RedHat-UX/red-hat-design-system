import {css} from 'lit';
export const styles = css`:host([on="dark"]) {
  --pf-c-tooltip__content--BackgroundColor: #ffffff;
  --pf-c-tooltip__content--Color: #151515;
}

:host {
  --pf-c-tooltip--BoxShadow: var(--rh-box-shadow-sm, 0 2px 4px 0 rgba(21, 21, 21, 0.2));
  --pf-c-tooltip__content--PaddingTop: var(--rh-space-lg, 16px);
  --pf-c-tooltip__content--PaddingRight: var(--rh-space-lg, 16px);
  --pf-c-tooltip__content--PaddingBottom: var(--rh-space-lg, 16px);
  --pf-c-tooltip__content--PaddingLeft: var(--rh-space-lg, 16px);
  --pf-c-tooltip__arrow--Width: 11px;
  --pf-c-tooltip__arrow--Height: 11px;
}
`;
export default styles;

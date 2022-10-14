import {css} from 'lit';
export const styles = css`:host {
  display: block;
  min-height: 4em;
}

[hidden] {
  display: none !important;
}

#container {
  display: flex;
  gap: calc(var(--rh-space-xs, 4px) / 2);
  flex-wrap: wrap;
}

nav {
  display: contents;
}

svg {
  fill: currentcolor;
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: var(--rh-color-surface-light, #f0f0f0);
  outline: none;
  color: var(--rh-pagination-stepper-color, var(--rh-color-black-600, #6a6e73));
  box-sizing: border-box;
}

.stepper:focus {
  border: 2px solid var(--rh-color-border-interactive-on-light, #0066cc);
}

.stepper svg {
  height: 14px;
}

:is(#next, #last) svg {
  rotate: 180deg;
}

.stepper[inert] {
  pointer-events: none;
  color: var(--rh-pagination-background-focused, var(--rh-color-black-300, #d2d2d2));
}

/* MOBILE styles */

.mobile .stepper:hover {
  background: var(--rh-color-black-300, #d2d2d2);
}

#numeric {
  margin-block-start: var(--rh-space-2xl, 32px);
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  gap: 0.5em;
}

input {
  height: var(--rh-length-2xl, 32px);
  width: var(--rh-length-4xl, 64px);
  font-size: var(--rh-font-size-body-text-md, 1rem);
  background: var(--rh-color-surface-lightest, #ffffff);
  border: 1px solid var(--rh-color-black-300, #d2d2d2);
  border-block-end: 1px solid var(--rh-color-black-600, #6a6e73);
  box-sizing: border-box;
  padding: 2px;
}

input:focus {
  outline: none;
  border: 2px solid var(--rh-pagination-accent-color, var(--rh-color-interactive-blue, #0066cc));
  padding: 1px;
}

input:invalid {
  border-block-end: 1px solid var(--rh-color-border-danger-on-light, #ee0000);
}

:host([on="dark"]) input:invalid {
  border-block-end: 1px solid var(--rh-color-border-danger-on-dark, #ff3333);
}

#numeric a {
  text-decoration: none;
  color: var(--rh-color-interactive-blue-darker, #0066cc);
}

#numeric a:hover {
  color: var(--rh-color-interactive-blue-darkest, #004080);
}

#numeric a:visited {
  color: var(--rh-color-interactive-purple-darker, #6753ac);
}

#numeric a:visited:hover {
  color: var(--rh-color-interactive-purple-darkest, #1f0066);
}

@media (min-width: 700px) {
  #numeric {
    margin-block-start: 0;
    margin-inline-start: var(--rh-space-xl, 24px);
    flex: 1 0 0%;
  }

  #container {
    flex-wrap: nowrap;
  }
}
`;
export default styles;

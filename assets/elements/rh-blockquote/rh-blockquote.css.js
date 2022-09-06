import {css} from 'lit';
export const styles = css`:host {
  color: var(--rh-color-black-900, #151515);
  margin: 0 auto;
  text-align: left;
  background-color: var(--rh-element-background-color);
  font-size: var(--rh-font-size-body-text-lg, 1.125rem);
  font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  line-height: var(--rh-line-height-body-text, 1.5);
}

@media (min-width: 700px) {
  :host {
    font-size: var(--rh-font-size-body-text-xl, 1.25rem);
  }
}

blockquote {
  margin: 0;
}

blockquote ::slotted(p) {
  margin: var(--rh-length-md, 8px);
}

figcaption {
  color: var(--rh-color-black-600, #6a6e73);
  font-family: var(--rh-font-family-text, "RedHatText", "Overpass", Overpass, Helvetica, Arial, sans-serif);
  font-size: var(--rh-font-size-body-text-sm, 0.875rem);
}

figcaption p {
  margin: 0;
}

#author {
  font-weight: 500;
}

svg {
  color: var(--rh-color-brand-red-500, #ee0000);
}

:host([align="center"]) {
  text-align: center;
}

:host([size="large"]) {
  font-size: var(--rh-font-size-body-text-2xl, 1.5rem);
  line-height: var(--rh-line-height-heading, 1.3);
}

@media (min-width: 700px) {
  :host([size="large"]) {
    font-size: var(--rh-font-size-heading-md, 1.75rem);
  }
}

:host([highlight]) {
  --BorderWidth: 8px;
  --BorderColor: #43adaf;
  --BorderStyle: solid;
}

:host([highlight]) figure {
  border-inline-start: var(--BorderWidth) var(--BorderStyle) var(--BorderColor);
  padding-inline-start: var(--rh-length-lg, 16px);
}

:host([color-palette="darkest"]) {
  color: var(--rh-color-white, #ffffff);
}

:host([color-palette="darkest"]) svg {
  color: var(--rh-color-brand-red-400, #ff3333);
}

:host([color-palette="darkest"]) figcaption {
  color: var(--rh-color-black-300, #d2d2d2);
}
`;
export default styles;

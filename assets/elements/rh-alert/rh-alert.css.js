import {css} from 'lit';
export const styles = css`:host {
  --_background-color: var(--rh-color-cyan-50, #f2f9f9);
  --_border-color: var(--rh-color-cyan-300, #009596);
  --_header-color: var(--rh-color-cyan-500, #003737);
  --_icon-color: var(--rh-color-cyan-300, #009596);
  --_font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);

  display: block;
}

:host([hidden]) {
  display: none;
}

:host([state="info"]) {
  --_border-color: var(--rh-color-blue-250, #2b9af3);
  --_icon-color: var(--rh-color-blue-250, #2b9af3);
  --_header-color: var(--rh-color-blue-600, #002952);
  --_background-color: var(--rh-color-blue-50, #e7f1fa);
}

:host([state="success"]) {
  --_border-color: var(--rh-color-green-500, #3e8635);
  --_icon-color: var(--rh-color-green-500, #3e8635);
  --_header-color: var(--rh-color-green-600, #1e4f18);
  --_background-color: var(--rh-color-green-50, #f3faf2);
}

:host([state="warning"]) {
  --_border-color: var(--rh-color-gold-400, #f0ab00);
  --_icon-color: var(--rh-color-gold-400, #f0ab00);
  --_header-color: var(--rh-color-gold-600, #795600);
  --_background-color: var(--rh-color-gold-50, #fdf7e7);
}

:host([state="danger"]) {
  --_border-color: #c9190b; /* WARNING: not a recognized token value */
  --_icon-color: #c9190b; /* WARNING: not a recognized token value */
  --_header-color: #7d1007; /* WARNING: not a recognized token value */
  --_background-color: var(--rh-color-red-50, #faeae8);
}

:host([toast]) {
  --_background-color: var(--rh-color-surface-lightest, #ffffff);

  max-width: 550px;
}

#container {
  border-width: var(--rh-border-width-md, 2px);
  border-color: var(--_border-color);
  border-style: solid;
  background-color: var(--_background-color);
  padding: var(--rh-space-lg, 16px);
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: var(--rh-space-xs, 4px);
  font-family: var(--_font-family);
}

#left-column {
  display: inline-block;
  vertical-align: top;
}

#middle-column {
  display: inline-block;
  vertical-align: top;
}

header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--rh-space-xs, 4px);
}

header ::slotted(:is(h1,h2,h3,h4,h5,h6)) {
  font-size: var(--rh-font-size-body-text-sm, 0.875rem);
  margin: 0;

  --rh-font-family-heading: var(--_font-family);
}

#header-actions {
  margin-right: var(--rh-space-xs, 4px);
}

#header {
  color: var(--_header-color);
  font-weight: var(--rh-font-weight-heading-medium, 500);
  flex: 1 1 auto;
}

#icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--rh-font-size-body-text-2xl, 1.5rem);
  height: var(--rh-font-size-body-text-2xl, 1.5rem);
  color: var(--_icon-color);
}

#close-button {
  color: var(--rh-color-text-secondary-on-light, #6a6e73);
  background-color: transparent;
  border: none;
  height: var(--rh-length-xl, 24px);
  width: var(--rh-length-xl, 24px);
  cursor: pointer;
}

#close-button:hover {
  color: var(--rh-color-text-primary-on-light, #151515);
}

#description {
  font-size: var(--rh-font-size-body-text-sm, 0.875rem);
}

#description > ::slotted(*) {
  margin-top: var(--rh-space-md, 8px);
  margin-bottom: var(--rh-space-lg, 16px);
}

footer {
  margin-top: var(--rh-space-lg, 16px);
}

footer ::slotted([slot="actions"]) {
  margin-right: var(--actions-item--MarginRight, var(--rh-alert__actions--Gap, 24px)) !important;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--rh-color-interactive-blue-darker, #0066cc);
  font-size: var(--rh-font-size-body-text-sm, 0.875rem);
  font-family: var(--_font-family);
}

/* TODO: separate focus and hover styles */
footer ::slotted([slot="actions"]:focus) {
  text-decoration: underline;
  color: var(--rh-color-interactive-blue-darkest, #004080);
}

footer ::slotted([slot="actions"]:hover) {
  cursor: pointer;
  text-decoration: underline;
  color: var(--rh-color-interactive-blue-darkest, #004080);
}

:host(:not([variant])) #container,
:host([toast]) #container {
  border-left: 0;
  border-bottom: none;
  border-right: 0;
}

:host([toast]) #container {
  box-shadow: var(--rh-box-shadow-lg, 0 6px 8px 2px rgba(21, 21, 21, 0.3));
}
`;
export default styles;

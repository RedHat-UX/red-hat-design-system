import {css} from 'lit';
export const styles = css`:host {
  --_chevron-size: calc(var(--rh-font-size-body-text-md, 1rem) * 0.35);
  --_chevron-thickness: calc(var(--rh-font-size-body-text-md, 1rem) * 0.125);
  --_chevron-up: 45deg;
  --_chevron-down: -135deg;
  --_chevron-correction-x: calc(-1 * var(--rh-font-size-body-text-md, 1rem) / 16);
  --_chevron-correction-y: calc(-1 * var(--rh-font-size-body-text-md, 1rem) / 16);
  --_chevron-color: var(--rh-color-text-primary-on-light, #151515);
  --_chevron-transform-collapsed: 
      rotate(var(--_chevron-up)) 
      translate(var(--_chevron-correction-x), var(--_chevron-correction-x));
  --_chevron-transform-expanded: 
      rotate(var(--_chevron-down))
      translate(var(--_chevron-correction-y), var(--_chevron-correction-y));
  --_button-font-color: var(--rh-color-text-primary-on-light, #151515);
  --_nav-max-height: var(--_max-height, max-content);
  --_nav-min-height: var(--_min-height, 74px);

  z-index: var(--rh-secondary-nav-z-index, 102);
}

:host([color-palette="darker"]) {
  --_button-font-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --_chevron-color: var(--rh-color-text-primary-on-dark, #ffffff);
}

nav {
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: var(--_min-height);
  z-index: var(--rh-secondary-nav-z-index, 102);
}

:host([color-palette="darker"])nav.compact {
  border-block-end: 1px solid var(--rh-color-border-subtle-on-dark, #6a6e73);
}

nav.rtl {
  --_chevron-transform-collapsed: 
      rotate(calc(-1 * var(--_chevron-up))) 
      translate(calc(1 * var(--_chevron-correction-y)), var(--_chevron-correction-y));
  --_chevron-transform-expanded: 
      rotate(calc(-1 * var(--_chevron-down))) 
      translate(calc(1 * var(--_chevron-correction-x)), var(--_chevron-correction-x));
}

#container {
  display: grid;
  position: relative;
  z-index: var(--rh-secondary-nav-z-index, 102);
  background-color: var(--rh-color-surface-light, #f0f0f0);
  gap: 0 var(--rh-space-lg, 16px);
  grid-template-rows: minmax(var(--_nav-min-height), var(--_nav-max-height)) max-content max-content;
  grid-template-columns: 1fr max-content;
  grid-template-areas:
    "logo menu"
    "nav nav"
    "cta cta";
  height: fit-content;
  min-height: var(--_min-height);
  max-height: 100vh;
  overflow-y: auto;
}

#cta {
  grid-area: cta;
}

#container.expanded {
  --_chevron-color: var(--rh-color-text-primary-on-light, #151515);
}

:host([color-palette="darker"]) #container {
  background-color: var(--rh-color-surface-dark, #3c3f42);
}

#container.expanded ::slotted([slot="nav"]),
#container.expanded ::slotted([slot="cta"]) {
  display: flex !important;
}

#container.expanded ::slotted([slot="nav"]) {
  list-style: none;
  flex-direction: column;
  padding: 2rem 1rem 0;
  padding: 
    var(--rh-space-2xl, 32px)
    var(--rh-space-lg, 16px)
    0
    var(--rh-space-lg, 16px);
  margin: 0 !important;
}

nav.compact #container.expanded ::slotted([slot="nav"]) {
  background-color: var(--rh-color-surface-lightest, #ffffff);
}

#container.expanded ::slotted([slot="cta"]) {
  padding: 2rem 1rem;
}

nav.compact #container.expanded #cta {
  background-color: var(--rh-color-surface-lightest, #ffffff);
}

button {
  grid-area: menu;
  border: none;
  display: flex;
  height: 100%;
  align-items: center;
  font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  font-size: var(--rh-font-size-body-text-md, 1rem);
  padding: var(--rh-space-lg, 16px);
  border-block-start: var(--rh-border-width-lg, 3px) solid transparent;
  margin-inline-end: var(--rh-space-lg, 16px);
  color: var(--_button-font-color);
  background-color: var(--rh-color-surface-light, #f0f0f0);
  gap: var(--rh-space-md, 8px);
}

button:hover {
  border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
}

button:after {
  box-sizing: content-box !important;
  content: "";
  display: block;
  width: var(--_chevron-size);
  height: var(--_chevron-size);
  border-inline-end: var(--_chevron-thickness) solid var(--_chevron-color);
  border-block-end: var(--_chevron-thickness) solid var(--_chevron-color);
  transform: var(--_chevron-transform-collapsed);
}

button[aria-expanded="true"]:after {
  transform: var(--_chevron-transform-expanded);
}

button:focus {
  border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
}

:host([color-palette="darker"]) button {
  background-color: var(--rh-color-surface-dark, #3c3f42);
}

button:active,
button[aria-expanded="true"],
:host([color-palette="darker"]) button[aria-expanded="true"] {
  color: var(--rh-color-text-primary-on-light, #151515);
  background-color: var(--rh-color-surface-lightest, #ffffff);
  border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
  border-block-end: none;
}

:host([color-palette="darker"]) button:active {
  color: var(--rh-color-text-primary-on-dark, #ffffff);
}

:host([color-palette="darker"]) button[aria-expanded="true"]:active {
  color: var(--rh-color-text-primary-on-light, #151515);
}

@media screen and (min-width: 768px) {
  button {
    margin-inline-end: var(--rh-space-2xl, 32px);
  }

  #container.expanded ::slotted([slot="nav"]) {
    padding: 
      var(--rh-space-2xl, 32px) 
      var(--rh-space-2xl, 32px)
      0 !important;
  }

  #container.expanded ::slotted([slot="cta"]) {
    padding: var(--rh-space-2xl, 32px) !important;
  }
}

@media screen and (min-width: 992px) {
  nav {
    position: relative;
  }

  #container {
    grid-template-areas: "logo nav cta";
    grid-template-rows: auto;
    grid-template-columns: max-content 1fr max-content;
    height: 100%;
    max-height: initial;
    overflow-y: initial;
  }

  #container.expanded ::slotted([slot="nav"]) {
    max-height: calc(100vh - var(--_nav-min-height));
  }

  button {
    display: none;
  }
}
`;
export default styles;

import {css} from 'lit';
export const styles = css`:host {
  --_border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);

  color: var(--rh-color-black-900, #151515);
  background-color: var(--rh-color-white, #ffffff);
}

:host([on="dark"]) {
  --_border-color: var(--rh-color-black-600, #6a6e73);
}

#container { display: contents; }

::slotted(rh-accordion-header:first-child) {
  display: block;
  border-block: 1px solid var(--_border-color);
}

::slotted(rh-accordion-header:not(:first-child)) {
  display: block;
  border-block-end: 1px solid var(--_border-color);
}

::slotted(rh-accordion-header:is([expanded])) {
  display: block;
  border-block-end: 0;
  box-shadow: var(--rh-box-shadow-sm, 0 2px 4px 0 rgba(21, 21, 21, 0.2));
}

::slotted(rh-accordion-panel:is([expanded])) {
  display: block;
  border-block-end: 1px solid var(--_border-color);
  box-shadow: var(--rh-box-shadow-sm, 0 2px 4px 0 rgba(21, 21, 21, 0.2));
}
`;
export default styles;

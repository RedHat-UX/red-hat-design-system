import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

#container {
  border-inline-start: 3px solid transparent;
  border-inline-end: 1px solid transparent;
  display: block;
  height: 100%;
}

/*
 * Move expanded back to an attribute if we decide
 * that we are going to abstract this component
 */
#container.expanded {
  border-inline-start-color: var(--rh-color-text-brand-on-light, #ee0000);
  border-inline-end-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  box-shadow: var(--rh-box-shadow-sm, 0 2px 4px 0 rgba(21, 21, 21, 0.2));
}

::slotted([slot="link"]) {
  justify-content: space-between;
  position: relative;
  gap: 0.85em;
}

::slotted([slot="link"]):after {
  box-sizing: content-box !important;
  content: "";
  display: block;
  width: var(--_chevron-size);
  height: var(--_chevron-size);
  border-inline-end: var(--_chevron-thickness) solid var(--_chevron-color);
  border-block-end: var(--_chevron-thickness) solid var(--_chevron-color);
  transform: var(--_chevron-transform-collapsed);
}

#container.expanded ::slotted([slot="link"]):after {
  transform: var(--_chevron-transform-expanded);
}

@media screen and (min-width: 992px) {
  #container {
    border-inline-start: none;
    border-inline-end: none;
  }

  /*
 * Move expanded back to an attribute if we decide
 * that we are going to abstract this component
 */
  #container.expanded {
    box-shadow: none;
  }

  ::slotted([slot="link"]) {
    justify-content: flex-start;
  }

  ::slotted([slot="link"][aria-expanded="true"]) {
    background: var(--rh-color-surface-lightest, #ffffff) !important;
    border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
    color: var(--rh-color-text-primary-on-light, #151515);

    --_chevron-color: var(--rh-color-text-primary-on-light, #151515);
  }
}
`;
export default styles;

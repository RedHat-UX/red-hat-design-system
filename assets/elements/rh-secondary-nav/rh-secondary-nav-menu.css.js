import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

#container {
  position: relative;
}

#container:not(:is(.visible)) {
  display: none;
}

#container.visible {
  background-color: var(--rh-color-surface-lightest, #ffffff);
}

#sections {
  padding: var(--rh-space-xl, 24px);
}

:host(:not([type="fixed-width"])) #sections {
  display: grid;
  grid-template-columns:
    var(
      --rh-secondary-nav-menu-section-grid,
      repeat(auto-fit, minmax(15.5rem, 1fr))
    );
  grid-template-rows: auto;
  gap: var(--rh-secondary-nav-menu-section-grid-gap, var(--rh-space-2xl, 32px));
}

::slotted(:is(ul, ol)) {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--rh-font-size-body-text-md, 1rem);
}

@media screen and (min-width: 992px) {
  #container.visible {
    position: absolute;
    left: 0;
    right: 0;
    padding: 
      var(--rh-space-4xl, 64px)
      var(--rh-space-2xl, 32px)
      var(--rh-space-3xl, 48px);
    box-shadow: var(--rh-box-shadow-sm, 0 2px 4px 0 rgba(21, 21, 21, 0.2));
    z-index: -1;
    max-height: calc(100vh - (var(--rh-space-4xl, 64px)) - var(--_nav-min-height));
    overflow-y: scroll;
  }

  :host([layout="fixed-width"]) #container {
    position: absolute;
    top: var(--_nav-height);
    left: auto;
    right: auto;
    bottom: auto;
    margin-top: 0;
    padding: 0;
  }

  #sections {
    padding: 0;
    max-width: var(--rh-secondary-nav-menu-content-max-width, 1136px);
    margin: auto;
  }

  :host([layout="fixed-width"]) #sections {
    padding: var(--rh-space-2xl, 32px);
  }
}

@media screen and (min-width: 1200px) {
  #container.visible {
    padding: var(--rh-space-3xl, 48px) var(--rh-space-2xl, 32px);
  }
}

@media screen and (min-width: 1440px) {
  #container.visible {
    padding: var(--rh-space-3xl, 48px) var(--rh-space-4xl, 64px);
  }
}

@media screen and (min-width: 1600px) {
  #full-width {
    margin: auto;
  }
}
`;
export default styles;

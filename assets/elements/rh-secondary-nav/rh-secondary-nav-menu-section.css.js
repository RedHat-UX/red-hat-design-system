import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

::slotted([slot="header"]) {
  padding: 0;
}

::slotted(:is(h1,h2,h3,h4,h5,h6)) {
  font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif) !important;
}

::slotted([slot="links"]:is(ul, ol)) {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

::slotted([slot="cta"]) {
  padding: var(--rh-space-xl, 24px) 0 0;
}

::slotted([slot="cta"]:last-of-type) {
  padding: var(--rh-space-xl, 24px) 0;
}

@media screen and (min-width: 992px) {
  ::slotted([slot="header"]) {
    padding: 0;
  }

  ::slotted([slot="links"]) {
    padding: 0;
    margin: 0;
  }
}
`;
export default styles;

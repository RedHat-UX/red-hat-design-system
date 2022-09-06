import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

div {
  width: 100%;
  height: 100%;
  display: flex;

  --_accent-color: var(--rh-color-brand-red, #ee0000);

  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}

:host([on="dark"]) div {
  --_accent-color: #ffffff;
}

span,
::slotted(*) {
  display: block;
  text-align: center;
}

pfe-icon[size="md"],
::slotted(pfe-icon[size="md"]) {
  --pfe-icon--size: var(--rh-font-size-heading-xl, 2.5rem);

  display: contents;
}

.hasIcon ::slotted([slot="icon"]),
.hasIcon pfe-icon[size="md"] {
  order: 1;
  display: block;
  color: black;
  margin-bottom: 16px;
}

#title {
  order: 1;
  color: var(--_accent-color);
  font-size: var(--rh-font-size-body-text-xl, 1.25rem);
  font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  font-weight: var(--rh-font-weight-regular, 400);
  text-transform: uppercase;
}

#statistic {
  order: 2;
  color: var(--_accent-color);
  font-size: var(--rh-font-size-heading-lg, 2.25rem);
  font-weight: var(--rh-font-weight-regular, 300);
  font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
}

#content {
  order: 3;
  font-size: var(--rh-font-size-body-text-lg, 1.125rem);
  font-family: var(--rh-font-family-text, "RedHatText", "Overpass", Helvetica, Arial, sans-serif);
  margin-top: var(--rh-space-sm, 6px);
}

#cta {
  order: 4;
  font-size: var(--rh-font-size-body-text-lg, 1.125rem);
  font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  margin-top: var(--rh-space-lg, 16px);
}

:not(.hasIcon) #icon,
:not(.hasStatistic) #statistic,
:not(.hasTitle) #title,
:not(.hasCta) #cta {
  display: none;
}

:host([size="large"]) #statistic {
  font-size: var(--rh-font-size-heading-2xl, 3rem);
}

.isMobile #content {
  font-size: var(--rh-font-size-body-text-lg, 1.125rem);
}

.isMobile #statistic {
  font-size: 32px;
}

:host([top="statistic"]) #statistic {
  order: 1;
}

:host([top="statistic"]) #title {
  order: 2;
}
`;
export default styles;

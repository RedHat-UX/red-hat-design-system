import {css} from 'lit';
export const styles = css`#rhds-wrapper {
  display: contents;
  font-family: "Red Hat Text", RedHatText, Overpass, Helvetica, sans-serif;

  --offset: var(--rh-space-md, 8px);
  --offset-top: var(--offset);
  --offset-right: var(--offset);
}

header ::slotted(:is(h1, h2, h3, h4, h5, h6)[slot="header"]) {
  font-family: "Red Hat Display", RedHatDisplay, Overpass, Helvetica, sans-serif;
}

[part="dialog"] {
  background-color: var(--rh-color-surface-lightest, #ffffff);
  max-width: min(90%, 1140px);
  border-radius: var(--rh-border-radius-default, 3px);
  color: var(--rh-color-text-primary-on-light, #151515);
  font-family: inherit;
}

[part="content"] {
  border-radius: var(--rh-border-radius-default, 3px);
}

[part="close-button"] {
  /* NB: hardcoded, no token colour matches this (yet) */
  color: var(--rh-dialog-close-button-color, #6a6e73);
}

[part="close-button"]:is(:hover, :focus-within, :focus-visible) svg:is(svg, :hover) {
  fill: var(--rh-color-black-900, #151515);
}

:host([type="video"]) {
  --rh-dialog-close-button-color: white;
}

:host([type="video"]) [part="close-button"] {
  top: var(--offset-top);
  right: var(--offset-right);
  padding: var(--rh-space-sm, 6px);
  color: var(--rh-dialog-close-button-color, #6a6e73);
}

:host([type="video"]) [part="content"] {
  overflow: hidden;
}

:host([type="video"][open]) [part="overlay"] {
  background-color: #151515;
  opacity: 0.65;
}

:host([type="video"][open]) [part="dialog"] {
  --_aspect-ratio: var(--rh-modal-video-aspect-ratio, 16/9);

  aspect-ratio: var(--_aspect-ratio);
  max-width: min(90%, calc(90vh * var(--_aspect-ratio) + var(--offset-top)));
  padding: 0;
  margin: 0;
}

:host([type="video"]) #rhds-wrapper.mobile [part="close-button"] {
  --offset-right: var(--rh-space-sm, 6px);
}

:host([type="video"]) #container,
:host([type="video"]) [part="content"],
:host([type="video"]) ::slotted(:not([slot])) {
  aspect-ratio: var(--rh-modal-video-aspect-ratio, 16/9);

  /* account for a 1px descrepency between dialog and container aspect ratio */
  width: calc(100% + 1px);
  position: absolute;
  inset: 0;
  max-height: none;
}
`;
export default styles;

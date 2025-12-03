## Style

A scheme toggle is three radio buttons visually grouped in a button group next to a text label.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img src="../scheme-toggle-style-anatomy.svg"
          alt="A scheme toggle with the label (1), light scheme button (2), dark scheme button (3), and the system default button (4)."
          width="288"
          height="58">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Legend label</li>
      <li>Light scheme (selected)</li>
      <li>Dark scheme</li>
      <li>System default scheme</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

A scheme toggle is available in both light and dark color schemes.

### Light Scheme

<uxdot-example color-palette="lightest">
  <img src="../scheme-toggle-style-scheme-light.svg"
        alt="Two light scheme toggles, one with the label on the left and one with the label on top, each with the light scheme button active."
        width="523"
        height="64">  
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
  <img src="../scheme-toggle-style-scheme-dark.svg"
        alt="Two dark scheme toggles, one with the label on the left and one with the label on top, each with the light scheme button active."
        width="523"
        height="64">  
</uxdot-example>

## Space

<uxdot-example color-palette="lightest">
  <img src="../scheme-toggle-style-space.svg"
        alt="Scheme toggle has 16px of spacing between icons and button borders horizontally, and 8px vertically. The color scheme label has 16px of margin on the inline axis, and only 8px of margin bottom on the block axis."
        width="523"
        height="76">  
</uxdot-example>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

The selected color scheme button does not have a hover state.

<uxdot-example color-palette="lightest">
  <img src="../scheme-toggle-style-interaction-states-hover.svg"
        alt="A scheme toggle has a gray background on hover."
        width="642"
        height="38">  
</uxdot-example>

### Focus and active

As soon as focus is moved to another button, the color scheme changes immediately.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Focus and Active states are the same.</p>
</rh-alert>

<uxdot-example color-palette="lightest">
  <img src="../scheme-toggle-style-interaction-states-focus.svg"
        alt="Scheme toggles have a blue focus ring that outlines the currently selected scheme button."
        width="261"
        height="38">  
</uxdot-example>

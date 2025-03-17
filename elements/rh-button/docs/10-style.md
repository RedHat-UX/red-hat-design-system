## Style

A button is clickable text or an icon that triggers an action on the page or in 
the background. Depending on the action, content, and hierarchy, a button can be 
used on its own or grouped with other buttons.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="428px">
    <img alt="Anatomy image of buttons with numbered annotations"
         src="../button-anatomy.png"
         width="428"
         height="94">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Text</li>
      <li>Container</li>
      <li>Border</li>
      <li>Text only</li>
      <li>Icon</li>
      <li>Icon background</li>
      <li>Icon only</li>
    </ol>
  </figcaption>
</figure>

## Theme

Buttons are available in both light and dark themes.

### Light and dark themes

<uxdot-example color-palette="lightest" width-adjustment="494px">
  <img alt="Image of light theme Danger, Primary, Secondary, Tertiary, Link, Play, and Close buttons"
       src="../button-theme-light.png"
       width="494"
       height="124">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="494px">
  <img alt="Image of dark theme Danger, Primary, Secondary, Tertiary, Link, Play, and Close buttons"
       src="../button-theme-dark.png"
       width="494"
       height="124">
</uxdot-example>

<rh-table>

| Property                                 | Light theme | Dark theme |
|------------------------------------------|-------------|------------|
| Color - Danger button text               | `#FFFFFF`   | `#151515`  |
| Color - Danger button surface            | `#C9190B`   | `#FF542E`  |
| Color - Primary button text              | `#FFFFFF`   | `#FFFFFF`  |
| Color - Primary button surface           | `#0066CC`   | `#0066CC`  |
| Color - Secondary button text and border | `#0066CC`   | `#2B9AF3`  |
| Border width - Secondary button          | `1px`       | `1px`      |
| Color - Tertiary button text and border  | `#151515`   | `#FFFFFF`  |
| Border width - Tertiary button           | `1px`       | `1px`      |
| Color - Link button text                 | `#0066CC`   | `#2B9AF3`  |
| Color - Play button background           | `#151515`   | `#FFFFFF`  |
| Opacity - Play button background         | `50%`       | `25%`      |
| Color - Close button                     | `#4D4D4D`   | `#C7C7C7`  |

</rh-table>

## Configuration

All buttons with a container have the same height and border radius, but the 
width varies based on the amount of content. Buttons in a row are all 
horizontally centered. When a Play button is placed on an image, it is both 
horizontally and vertically centered and stays the same size no matter how big 
or small the image gets.

<uxdot-example color-palette="lightest" width-adjustment="818px">
  <img alt="Image of buttons and various specs like border radius, height, icon size, width, alignment, placement, and more"
       src="../button-configuration.png"
       width="818"
       height="386">
</uxdot-example>

## Space

Space values are the same on all breakpoints for the following buttons. To see 
space values when buttons are grouped, go to the [Guidelines](./guidelines) page.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Buttons include a custom <code>6px</code> spacer, do not use it anywhere else.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="721px">
  <img alt="Image of Danger, Primary, Secondary, Tertiary, Link, and Close buttons with spacing values in between"
       src="../button-space.png"
       width="721"
       height="68">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="sm, md, lg"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of 
an element or pattern.

### Hover

<uxdot-example color-palette="lightest" width-adjustment="495px">
  <img alt="Image of light theme button hover states"
       src="../button-interaction-state-hover-theme-light.png"
       width="495"
       height="124">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="495px">
  <img alt="Image of dark theme button hover states"
       src="../button-interaction-state-hover-theme-dark.png"
       width="495"
       height="124">
</uxdot-example>

<rh-table>

| Property                           | Light theme | Dark theme  |
|------------------------------------|-------------|-------------|
| Color - Danger button surface      | `#A30000`   | `#FF8266`   |
| Color - Primary button surface     | `#004080`   | `#004080`   |
| Border width - Secondary button    | `2px`       | `2px`       |
| Border width - Tertiary button     | `2px`       | `2px`       |
| Color - Link button text           | `#004080`   | `#73BCF7`   |
| Text decoration - Link button text | `Underline` | `Underline` |
| Opacity - Play button background   | `75%`       | `50%`       |
| Color - Close button               | `#151515`   | `#FFFFFF`   |

</rh-table>

### Focus

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="530px">
  <img alt="Image of light theme button focus states"
       src="../button-interaction-state-focus-theme-light.png"
       width="530"
       height="128">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="530px">
  <img alt="Image of dark theme button focus states"
       src="../button-interaction-state-focus-theme-dark.png"
       width="530"
       height="128">
</uxdot-example>


<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | `#0066CC`   | `#73BCF7`  |

</rh-table>

### Active

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="530px">
  <img alt="Image of light theme button active states"
       src="../button-interaction-state-active-theme-light.png"
       width="530"
       height="128">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="530px">
  <img alt="Image of dark theme button active states"
       src="../button-interaction-state-active-theme-dark.png"
       width="530"
       height="128">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | `#0066CC`   | `#73BCF7`  |

</rh-table>

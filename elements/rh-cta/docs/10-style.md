## Style

A call to action is text in a container or paired with an icon that directs users to new pages. Depending on the link, content, and hierarchy, a call to action can be used on its own or grouped with other calls to action.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="738px">
    <img src="../cta-anatomy.png"
        alt="Anatomy image showing calls to action with various annotation numbers"
        width="738"
        height="100">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Text label</li>
      <li>Container</li>
      <li>Border</li>
      <li>Icon</li>
    </ol>
  </figcaption>
</figure>

## Theme

Calls to action are available in both light and dark themes.

### Light and dark themes

<uxdot-example color-palette="lightest" width-adjustment="664px">
  <img src="../cta-theme-light.png"
        alt="Image of light theme Primary, Secondary, Brick, Default, and Default video variants"
        width="664"
        height="56">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="664px">
  <img src="../cta-theme-dark.png"
        alt="Image of dark theme Primary, Secondary, Brick, Default, and Default video variants"
        width="666"
        height="56">
</uxdot-example>

<rh-table>

| Property                          | Light theme       | Dark theme        |
| --------------------------------- | ----------------- | ----------------- |
| Color - Primary text              | \#FFFFFF          | \#FFFFFF          |
| Color - Primary surface           | \#EE0000          | \#EE0000          |
| Border radius - Primary           | 4px <br>0.25rem   | 4px <br>0.25rem   |
| Color - Secondary text and border | \#151515          | \#FFFFFF          |
| Border radius - Secondary         | 4px <br>0.25rem   | 4px <br>0.25rem   |
| Border width - Primary            | 1px <br>0.0625rem | 1px <br>0.0625rem |
| Color - Brick text                | \#0066CC          | \#73BCF7          |
| Color - Brick border              | \#C7C7C7          | \#707070          |
| Border radius - Brick             | 4px <br>0.25rem   | 4px <br>0.25rem   |
| Border width - Brick              | 1px <br>0.0625rem | 1px <br>0.0625rem |
| Color - Default text and icon     | \#0066CC          | \#73BCF7          |

</rh-table>

### Bricks

The Brick variant includes a slot for an icon as well as an extra orientation.

<uxdot-example color-palette="lightest" width-adjustment="396px">
  <img src="../cta-bricks-theme-light.png"
        alt="Image of light theme Brick variants; one with text and no icon, one with an icon on the left of text, and one with an icon on top of text"
        width="396"
        height="88">
</uxdot-example>
  
<uxdot-example color-palette="darkest" width-adjustment="396px">
  <img src="../cta-bricks-theme-dark.png"
        alt="Image of light theme Brick variants; one with text and no icon, one with an icon on the left of text, and one with an icon on top of text"
        width="396"
        height="88">
</uxdot-example>

<rh-table>

| Property     | Light theme | Dark theme |
|--------------|-------------|------------|
| Color - icon | \#707070    | \#A3A3A3   |

</rh-table>

### Video variants

Primary, Secondary, and Default variants include a slot for a video icon. The video icon is the same color as the text label.

<uxdot-example color-palette="lightest" width-adjustment="612px">
  <img src="../cta-video-variants.png"
        alt="Image of Primary, Secondary, and Default variants with video icons to the right of text"
        width="612"
        height="56">
</uxdot-example>

### White variants

Dark theme includes white variants if other variants are duplicative or if they violate accessibility guidelines.

<uxdot-example width-adjustment="523px">
  <img src="../cta-white-variants.png"
        alt="Image of Primary and Primary video variants with a white background and black text and Default and Default video variants with white text"
        width="523"
        height="56">
</uxdot-example>

<rh-table>

| Property                      | Current Value   |
| ----------------------------- | --------------- |
| Color - Primary text and icon | \#151515        |
| Color - Primary surface       | \#FFFFFF        |
| Border width - Primary        | 4px <br>0.25rem |
| Color - Default text and icon | \#FFFFFF        |

</rh-table>

## Configuration

All calls to action with a container have the same border radius, but the height and width vary based on the presence of icons and the amount of content. Calls to action in a row are horizontally centered.

<uxdot-example color-palette="lightest" width-adjustment="721px">
  <img src="../cta-configuration.png"
        alt="Image of all variants with various specs like border radius, height, width, alignment, and more"
        width="721"
        height="413">
</uxdot-example>

## Space

Space values are the same on all breakpoints for calls to action. To see space values when calls to action are grouped, go to the [Guidelines](/elements/call-to-action/guidelines/) page.

<uxdot-example color-palette="lightest" width-adjustment="828px">
  <img src="../cta-space.png"
        alt="Image of Primary, Secondary, two Brick variants, and two Default variants with spacing values in between"
        width="828"
        height="88">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, xl"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example color-palette="lightest" width-adjustment="664px">
  <img src="../cta-interaction-state-hover-theme-light.png"
        alt="Image of light theme hover states"
        width="666"
        height="56">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="664px">
  <img src="../cta-interaction-state-hover-theme-dark.png"
        alt="Image of dark theme hover states"
        width="666"
        height="56">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="543px">
  <img src="../cta-interaction-state-hover-white-variants.png"
        alt="Image of dark theme white variant hover states"
        width="540"
        height="56">
</uxdot-example>

<rh-table>

| Property                          | Light theme | Dark theme |
|-----------------------------------|-------------|------------|
| Color - Primary surface           | \#BE0000    | \#BE0000   |
| Color - Primary (white) surface   | N/A         | \#E0E0E0   |
| Color - Secondary text            | \#FFFFFF    | \#151515   |
| Color - Secondary surface         | \#151515    | \#FFFFFF   |
| Color - Brick text                | \#004080    | \#73BCF7   |
| Color - Secondary text and border | 151515      | \#FFFFFF   |
| Text decoration - Brick text      | Underline   | Underline  |
| Color - Brick surface             | \#F2F2F2    | \#292929   |
| Color - Default text              | \#004080    | \#73BCF7   |
| Color - Default (white) text      | N/A         | \#C7C7C7   |

</rh-table>

### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="668px">
  <img src="../cta-interaction-state-focus-theme-light.png"
        alt="Image of light theme focus states"
        width="690"
        height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="668px">
  <img src="../cta-interaction-state-focus-theme-dark.png"
        alt="Image of dark theme focus states"
        width="690"
        height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="543px">
  <img src="../cta-interaction-state-focus-white-variants.png"
        alt="Image of dark theme white variant focus states"
        width="560"
        height="64">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>

### Active

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="668px">
  <img src="../cta-interaction-state-active-theme-light.png"
       alt="Image of light theme active states"
       width="690"
       height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="668px">
  <img src="../cta-interaction-state-active-theme-dark.png"
       alt="Image of dark theme active states"
       width="690"
       height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="543px">
  <img src="../cta-interaction-state-active-white-variants.png"
       alt="Image of dark theme white variant active states"
       width="560"
       height="64">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>

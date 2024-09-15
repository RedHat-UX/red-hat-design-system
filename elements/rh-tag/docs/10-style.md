<style>
  .tag-grid {
    display: flex;
    flex-direction: row;
    gap: var(--rh-space-lg);
    &.wide {
      gap: var(--rh-space-3xl);
    }
  }
</style>

## Style

A tag is colored text on a pill background which may include an optional icon. A 
tag background can be colored, white, or transparent and it always includes a 
border.

### Anatomy

<figure>
  <uxdot-example width-adjustment="554px">
    <img src="../tag-anatomy.png"
         alt="Anatomy of a tag with annotations; number 1 is pointing to the container, number 2 is pointing to the text label, and number 3 is pointing to an optional icon">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Container and border</li>
      <li>Text label</li>
      <li>Optional icon</li>
    </ol>
  </figcaption>
</figure>

### Variants

There are three available variants, which affect the background and colors. Both 
variants include an optional slot for displaying a small icon to the left of the 
text label.

<uxdot-example width-adjustment="585px"
               aria-label="Tags with text describing each variant">
  <div class="tag-grid wide">
    <rh-tag color="teal">Filled</rh-tag>
    <rh-tag variant="outline">Outline</rh-tag>
    <rh-tag variant="desaturated">Desaturated</rh-tag>
    <rh-tag icon="information-fill" color="teal">Filled</rh-tag>
    <rh-tag icon="information-fill" variant="outline">Outline</rh-tag>
    <rh-tag icon="information-fill" variant="desaturated">Desaturated</rh-tag>
  </div>
</uxdot-example>

## Theming

Both variants are available on the light and dark [backgrounds](/theming/color-palettes/#backgrounds).

### Light Backgrounds

<uxdot-example width-adjustment="404px">
  <div class="tag-grid">
    <rh-tag color="red">Red</rh-tag>
    <rh-tag color="red-orange">Red Orange</rh-tag>
    <rh-tag color="orange">Orange</rh-tag>
    <rh-tag color="yellow">Yellow</rh-tag>
    <rh-tag color="green">Green</rh-tag>
    <rh-tag color="teal">Teal</rh-tag>
    <rh-tag color="blue">Blue</rh-tag>
    <rh-tag color="purple">Purple</rh-tag>
    <rh-tag color="gray">Gray</rh-tag>
  </div>
  <div class="tag-grid">
    <rh-tag variant="outline" color="red">Red</rh-tag>
    <rh-tag variant="outline" color="red-orange">Red Orange</rh-tag>
    <rh-tag variant="outline" color="orange">Orange</rh-tag>
    <rh-tag variant="outline" color="yellow">Yellow</rh-tag>
    <rh-tag variant="outline" color="green">Green</rh-tag>
    <rh-tag variant="outline" color="teal">Teal</rh-tag>
    <rh-tag variant="outline" color="blue">Blue</rh-tag>
    <rh-tag variant="outline" color="purple">Purple</rh-tag>
    <rh-tag variant="outline" color="gray">Gray</rh-tag>
  </div>
</uxdot-example>

### Dark Backgrounds

<uxdot-example width-adjustment="404px" color-palette="darkest">
  <div class="tag-grid">
    <rh-tag color="red">Red</rh-tag>
    <rh-tag color="red-orange">Red Orange</rh-tag>
    <rh-tag color="orange">Orange</rh-tag>
    <rh-tag color="yellow">Yellow</rh-tag>
    <rh-tag color="green">Green</rh-tag>
    <rh-tag color="teal">Teal</rh-tag>
    <rh-tag color="blue">Blue</rh-tag>
    <rh-tag color="purple">Purple</rh-tag>
    <rh-tag color="gray">Gray</rh-tag>
  </div>
  <div class="tag-grid">
    <rh-tag variant="outline" color="red">Red</rh-tag>
    <rh-tag variant="outline" color="red-orange">Red Orange</rh-tag>
    <rh-tag variant="outline" color="orange">Orange</rh-tag>
    <rh-tag variant="outline" color="yellow">Yellow</rh-tag>
    <rh-tag variant="outline" color="green">Green</rh-tag>
    <rh-tag variant="outline" color="teal">Teal</rh-tag>
    <rh-tag variant="outline" color="blue">Blue</rh-tag>
    <rh-tag variant="outline" color="purple">Purple</rh-tag>
    <rh-tag variant="outline" color="gray">Gray</rh-tag>
  </div>
</uxdot-example>


## Configuration

Both variants have the same height and border radius.

<uxdot-example width-adjustment="473px">
  <img src="../tag-configuration.png"
       alt="How a tag is constructed showing border radius, icon, and height details">
</uxdot-example>

## Space

<uxdot-example width-adjustment="404px">
  <img src="../tag-space-theme-light.png"
       alt="Light background tag spacing within the element and when grouped">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="72px">
  <img src="../tag-space-theme-dark.png"
       alt="Dark background tag spacing within the element">
</uxdot-example>

<rh-table>
  {% spacerTokensTable 
      headline='',
      caption='',
      tokens="--rh-space-xs, --rh-space-md" %}
  {% endspacerTokensTable %}
</rh-table>


## Interaction states

A tag includes only text and an optional icon and is not interactive right now.

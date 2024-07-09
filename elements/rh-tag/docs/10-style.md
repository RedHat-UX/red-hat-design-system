## Style

A tag is colored text on a pill background which may include an optional icon. A 
tag background can be colored, white, or transparent and it always includes a 
border.


### Anatomy

<figure>
  <uxdot-example width-adjustment="554px">
    <img src="{{ '../tag-anatomy.png' | url }}" alt="Anatomy of a tag with annotations; number 1 is pointing to the container, number 2 is pointing to the text label, and number 3 is pointing to an optional icon">
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

There are two available variants and the only difference is the background 
colors. Both variants include an optional slot for displaying a small icon to 
the left of the text label.

<uxdot-example width-adjustment="585px">
  <img src="{{ '../tag-variants.png' | url }}" alt="Tags with text describing each variant">
</uxdot-example>


## Theme

Both variants are available in the light theme. There is an unfilled white tag 
available in the dark theme if necessary.


### Light theme

<uxdot-example width-adjustment="404px">
  <img src="{{ '../tag-theme-light.png' | url }}" alt="Light theme tag examples">
</uxdot-example>


### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="53px">
  <img src="{{ '../tag-theme-dark.png' | url }}" alt="Dark theme tag examples">
</uxdot-example>


## Configuration

Both variants have the same height and border radius.

<uxdot-example width-adjustment="473px">
  <img src="{{ '../tag-configuration.png' | url }}" alt="How a tag is constructed showing border radius, icon, and height details">
</uxdot-example>


## Space

<uxdot-example width-adjustment="404px">
  <img src="{{ '../tag-space-theme-light.png' | url }}" alt="Light theme tag spacing within the element and when grouped">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="72px">
  <img src="{{ '../tag-space-theme-dark.png' | url }}" alt="Dark theme tag spacing within the element">
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

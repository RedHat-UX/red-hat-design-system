## Style

A tile is available as a <strong>Link tile</strong> or <strong>Selectable tile</strong>. A link tile has two sizes and heading color options; the blue arrow in the bottom right corner helps distinguish it from card. A selectable tile has a consistent style for both the checkbox and radio button variants.

### Anatomy


<figure>
  <uxdot-example width-adjustment="360px">
    <img src="../link-tile-anatomy.png" alt="Default link tile with numbers pointing to locations of an image, an icon, text, and a footer">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Image</li>
      <li>Icon</li>
      <li>Title</li>
      <li>Heading</li>
      <li>Body text</li>
      <li>Footer</li>
    </ol>
  </figcaption>
</figure>

<figure>
  <uxdot-example width-adjustment="755px">
    <img src="../selectable-tile-anatomy.png" alt="Selectable tiles with numbers pointing to locations of text, a checkbox or radio button, and a footer">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Heading</li>
      <li>Form input (checkbox or radio button)</li>
      <li>Body text</li>
      <li>Footer</li>
    </ol>
  </figcaption>
</figure>


### Sizes

A link tile is available in Default and Compact sizes. A selectable tile has only one size which is based on the size of a compact tile.

<uxdot-example width-adjustment="752px">
  <img src="../tile-sizes.png" alt="Examples of a link tile, compact tile, and selectable tile to show size differences">
</uxdot-example>


## Theme

Both the link tile and the selectable tile are available in dark and light themes.

<uxdot-example width-adjustment="752px">
  <img src="../tile-light-theme.png" alt="Light theme tiles use a white background, blue or black heading, black text, and a blue arrow icon">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-dark-theme.png" alt="Dark theme tiles use a dark gray background, blue or white heading, white text, and a light blue arrow icon">
</uxdot-example>


## Heading color

A link tile has a blue heading by default, but a desaturated variant exists for both light and dark themes. The desaturated heading uses either a black or white heading. A selectable tile has a desaturated heading only and does not have the option for a blue heading.

<uxdot-example width-adjustment="752px">
  <img src="../tile-heading-color-light-theme.png" alt="Examples of a light theme link tile with a blue heading, link tile with a black heading, and selectable tile with a black heading">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-heading-color-dark-theme.png" alt="Examples of a dark theme link tile with a light blue heading, link tile with a white heading, and selectable tile with a white heading">
</uxdot-example>


## Space

Space values remain the same at all breakpoints.


### Link tile without image

<uxdot-example width-adjustment="752px">
  <img src="../space-link-tile-no-image.png" alt="Default link tile and compact link tile with spacers showing padding and margins">
</uxdot-example>


### Link tile with an image

<uxdot-example width-adjustment="752px">
  <img src="../space-link-tile-with-image.png" alt="Link tiles that have full-width and default image sizes with spacers showing padding and margins">
</uxdot-example>


### Selectable tile

<uxdot-example width-adjustment="360px">
  <img src="../space-selectable-tile.png" alt="Selectable tile with spacers showing padding and margins">
</uxdot-example>


## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern. The interaction states of a default link tile are the same for a compact link tile as long as they use the same heading color. A selectable tile does not have an underlined heading to avoid users thinking it contains a link.

### Hover 

The hover state of a link tile also includes the arrow icon moving 3px to the right.

<uxdot-example width-adjustment="752px">
  <img src="../tile-states-hover-light-theme.png" alt="On hover, light theme tiles have a light gray background, an underlined (and sometimes darker blue) heading, a darker blue arrow icon">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-states-hover-dark-theme.png" alt="On hover, dark theme tiles have a lighter gray background, an underlined (and sometimes lighter blue) heading, a lighter blue arrow icon">
</uxdot-example>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Focus state has the same styles as the hover state, except for the arrow icon animation.</p>
</rh-alert>

<uxdot-example width-adjustment="752px">
  <img src="../tile-states-focus-light-theme.png" alt="Focused light theme tiles have a blue focus ring and use hover state styling">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-states-focus-dark-theme.png" alt="Focused dark theme tiles have a light blue focus ring and use hover state styling">
</uxdot-example>


### Active 

Only link tiles have an active state. Selectable tiles have a selected state instead.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="752px">
  <img src="../tile-states-active-light-theme.png" alt="Active light theme link tiles use the focus state styles">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-states-active-dark-theme.png" alt="Active dark theme link tiles use the focus state styles">
</uxdot-example>


### Selected 

Only a selectable tile has a selected state. A link tile has an active state instead.

<uxdot-example width-adjustment="752px">
  <img src="../tile-states-selected-light-theme.svg" alt="When selected, the form input of light theme selectable tiles appears blue and filled or checked">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-states-selected-dark-theme.png" alt="When selected, the form input of dark theme selectable tiles appears light blue and filled or checked">
</uxdot-example>


### Disabled

<uxdot-example width-adjustment="752px">
  <img src="../tile-states-disabled-light-theme.png" alt="Disabled light theme tiles have a light gray background and lighter gray text. Disabled link tiles have a ban icon">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../tile-states-disabled-dark-theme.png" alt="Disabled dark theme tiles have a lighter gray background and light gray text. Disabled link tiles have a ban icon">
</uxdot-example>

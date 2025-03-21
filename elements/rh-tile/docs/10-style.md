## Style

A tile is available as a <strong>Link tile</strong> or <strong>Selectable tile</strong>. A link tile has two sizes and heading color options; the blue arrow in the bottom right corner helps distinguish it from card. A selectable tile has a consistent style for both the checkbox and radio button variants.

### Anatomy


<figure>
  <uxdot-example width-adjustment="360px">
    <img alt="Default link tile with numbers pointing to locations of an image, an icon, text, and a footer"
         src="../link-tile-anatomy.png"
         width="360"
         height="606">
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
    <img src="../selectable-tile-anatomy.png"
        alt="Selectable tiles with numbers pointing to locations of text, a checkbox or radio button, and a footer"
        width="755"
        height="188">
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
  <img alt="Examples of a link tile, compact tile, and selectable tile to show size differences"
       src="../tile-sizes.png"
       width="752"
       height="408">
</uxdot-example>


## Color scheme
<a id="theme"></a>

Both the link tile and the selectable tile are available for dark and light schemes.

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="Light scheme tiles use a white background, blue or black heading, black text, and a blue arrow icon"
       src="../tile-light-theme.png"
       width="752"
       height="511">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="Dark scheme tiles use a dark gray background, blue or white heading, white text, and a light blue arrow icon"
       src="../tile-dark-theme.png"
       width="752"
       height="511">
</uxdot-example>


## Heading color

A link tile has a blue heading by default, but a desaturated variant exists for both light and dark themes. The desaturated heading uses either a black or white heading. A selectable tile has a desaturated heading only and does not have the option for a blue heading.

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="Examples of a light theme link tile with a blue heading, link tile with a black heading, and selectable tile with a black heading"
       src="../tile-heading-color-light-theme.png"
       width="752"
       height="511">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="Examples of a dark theme link tile with a light blue heading, link tile with a white heading, and selectable tile with a white heading"
       src="../tile-heading-color-dark-theme.png"
       width="752"
       height="511">
</uxdot-example>


## Space

Space values remain the same at all breakpoints.


### Link tile without image

<uxdot-example width-adjustment="752px">
  <img alt="Default link tile and compact link tile with spacers showing padding and margins"
       src="../space-link-tile-no-image.png"
       width="752"
       height="371">
</uxdot-example>


### Link tile with an image

<uxdot-example width-adjustment="752px">
  <img alt="Link tiles that have full-width and default image sizes with spacers showing padding and margins"
       src="../space-link-tile-with-image.png"
       width="752"
       height="925">
</uxdot-example>


### Selectable tile

<uxdot-example width-adjustment="360px">
  <img alt="Selectable tile with spacers showing padding and margins"
       src="../space-selectable-tile.png"
       width="360"
       height="188">
</uxdot-example>


## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern. The interaction states of a default link tile are the same for a compact link tile as long as they use the same heading color. A selectable tile does not have an underlined heading to avoid users thinking it contains a link.

### Hover 

The hover state of a link tile also includes the arrow icon moving 3px to the right.

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="On hover, light theme tiles have a light gray background, an underlined (and sometimes darker blue) heading, a darker blue arrow icon"
       src="../tile-states-hover-light-theme.png"
       width="752"
       height="511">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="On hover, dark theme tiles have a lighter gray background, an underlined (and sometimes lighter blue) heading, a lighter blue arrow icon"
       src="../tile-states-hover-dark-theme.png"
       width="752"
       height="511">
</uxdot-example>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Focus state has the same styles as the hover state, except for the arrow icon animation.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="Focused light theme tiles have a blue focus ring and use hover state styling"
       src="../tile-states-focus-light-theme.png"
       width="764"
       height="523">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="Focused dark theme tiles have a light blue focus ring and use hover state styling"
       src="../tile-states-focus-dark-theme.png"
       width="764"
       height="523">
</uxdot-example>


### Active 

Only link tiles have an active state. Selectable tiles have a selected state instead.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="Active light theme link tiles use the focus state styles"
       src="../tile-states-active-light-theme.png"
       width="764"
       height="299">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="Active dark theme link tiles use the focus state styles"
       src="../tile-states-active-dark-theme.png"
       width="764"
       height="299">
</uxdot-example>


### Selected 

Only a selectable tile has a selected state. A link tile has an active state instead.

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="When selected, the form input of light theme selectable tiles appears blue and filled or checked"
       src="../tile-states-selected-light-theme.svg"
       width="752"
       height="188">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="When selected, the form input of dark theme selectable tiles appears light blue and filled or checked"
       src="../tile-states-selected-dark-theme.png"
       width="752"
       height="188">
</uxdot-example>


### Disabled

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="Disabled light theme tiles have a light gray background and lighter gray text. Disabled link tiles have a ban icon"
       src="../tile-states-disabled-light-theme.png"
       width="752"
       height="511">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="Disabled dark theme tiles have a lighter gray background and light gray text. Disabled link tiles have a ban icon"
       src="../tile-states-disabled-dark-theme.png"
       width="752"
       height="511">
</uxdot-example>

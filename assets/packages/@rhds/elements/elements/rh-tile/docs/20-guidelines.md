
## Usage

A tile can be used when a clickable container is needed to provide one call to action or show one form input option. It can be grouped with similarly-structured and styled tiles in a tile group. There are two types, link tiles and selectable tiles. Both can be used in groups or individually, except for a selectable tile with a radio button, which always has to be grouped.


### Tile vs. card

The primary distinguishing factor between a tile and a card is that each tile can perform only one action because the whole surface is clickable. A tile also has the ability to be used as selectable items in a form. Tiles can be grouped together like card, however.


## Variants

### Link tiles

A link tile has many different use cases, but it is especially helpful to use in place of a card group that would have repetitive calls to action. They can also be used in place of Brick calls to action if adding icons or images is necessary.


#### Compact link tile

A link tile has a compact variant that can be used in sections that need a denser concentration of information. To further condense each tile, a compact link tile does not have a title slot and the icon appears to the left of content, rather than above it.


#### Desaturated heading

The desaturated heading variant is best used for pages with many link tiles. For example, it can help prevent a blue heading from appearing visually overwhelming on a search results page, especially if each tile includes a logo. Other than the heading color, the hover, focus, and active states look the same as a default link tile and the arrow will always be blue.


#### Image sizes

For a link tile, there are two image sizes available. The Default size has spacing around the entire image. The Full-width image size bleeds to the top, left, and right edges. The default image size is recommended for logos, while illustrations or photos would work well as a full-width image.

<uxdot-example width-adjustment="750px">
  <img src="../tile-variants-image-sizes.png"
        alt="Examples of a logo in a tile with the default image size and a photo in a tile with the full-width image size"
        width="750"
        height="431">
</uxdot-example>


### Selectable tiles

<rh-alert>
  <h4 slot="header">Helpful tip</h4>
  <p>A selectable tile with a radio button must be used in a group. If there is only one choice listed, use a checkbox.</p>
</rh-alert>

A selectable tile is a form element and can be used as either a radio button or a checkbox. The radio button should be used if only one option can be selected. A selectable tile with checkboxes should be used when a user can select more than one option.

## Writing content

The four content slots within a tile are <strong>title</strong>, <strong>heading</strong>, <strong>body</strong>, and <strong>footer</strong>.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Slot">Slot</th>
        <th scope="col" data-label="Content">Content</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Slot">Title</td>
        <td data-label="Content">A title provides secondary descriptive context. A selectable tile does not have title slots.</td>
      </tr>
      <tr>
        <td data-label="Slot">Heading</td>
        <td data-label="Content">In a link tile, the heading should indicate what clicking on the tile will do. In a selectable tile, the heading labels the radio button or checkbox.</td>
      </tr>
      <tr>
        <td data-label="Slot">Body</td>
        <td data-label="Content">The body text expands on heading content and gives the user more information.</td>
      </tr>
      <tr>
        <td data-label="Slot">Footer</td>
        <td data-label="Content">Footer text should be brief and be used for supplementary information only.</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Character count

The recommended character counts below include spaces. Line counts are based on a default link tile at minimum width.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
        <th scope="col" data-label="Line count">Line count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Title text</td>
        <td data-label="Character count">20</td>
        <td data-label="Line count">1</td>
      </tr>
      <tr>
        <td data-label="Element">Heading text</td>
        <td data-label="Character count">64</td>
        <td data-label="Line count">3</td>
      </tr>
      <tr>
        <td data-label="Element">Body text</td>
        <td data-label="Character count">160</td>
        <td data-label="Line count">7</td>
      </tr>
      <tr>
        <td data-label="Element">Footer text</td>
        <td data-label="Character count">25</td>
        <td data-label="Line count">1</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Layouts

Like a card, the default tile should have a minimum width of four grid columns, so there is a maximum of three default link tiles in one row.

<uxdot-example width-adjustment="870px">
  <img src="../tile-layouts-default-tile.png"
        alt="Three default link tiles in a row"
        width="870"
        height="345">
</uxdot-example>

The compact link tiles or selectable tiles can condense to a minimum width of three grid columns or a max of four compact tiles in a row.

<uxdot-example width-adjustment="870px">
  <img src="../tile-layouts-compact-tile.png"
        alt="Four compact link tiles in a row"
        width="870"
        height="269">
</uxdot-example>


## Behavior

### Vertical height

The vertical height of a tile will increase as more content is added. The vertical height of multiple tiles in one row matches the height of the tallest tile.

<uxdot-example width-adjustment="870px">
  <img src="../tile-behavior-vertical-height.png"
        alt="Three link tiles with different amounts of content have the same height"
        width="870"
        height="379">
</uxdot-example>


## Best practices

### Link tile actions

Do not use a link tile if it needs to link to more than one destination.

<uxdot-example width-adjustment="360px" danger>
  <img src="../best-practices-link-tile-actions-1.png"
        alt="Example of an incorrectly used link tile with a call to action in the body"
        width="360"
        height="316">
</uxdot-example> 


A link tile should not be used as a button. A link tile is akin to a call to action and should navigate a user somewhere else.

<uxdot-example width-adjustment="360px" danger>
  <img src="../best-practices-link-tile-actions-2.png"
        alt="Example of an incorrectly used link tile with “submit” as a heading and no other text"
        width="360"
        height="121">
</uxdot-example>


### Tile groups

Do not use different variants of a tile in one tile group.

<uxdot-example width-adjustment="750px" danger>
  <img src="../best-practices-tile-groups-1.png"
        alt="Example of an incorrectly styled tile group with a default link tile and a compact link tile"
        width="750"
        height="325">
</uxdot-example>

When grouped, use the same number of content slots to make them easy to scan.

<uxdot-example width-adjustment="750px" danger>
  <img src="../best-practices-tile-groups-2.png"
        alt="Example of an incorrectly styled tile group with one tile that has only text and a second tile that includes a logo and a title"
        width="750"
        height="392">
</uxdot-example>

If tiles have images, the images should have the same height. This will help the headings of each tile align vertically which also helps users scan more easily.

<uxdot-example width-adjustment="750px" danger>
  <img src="../best-practices-tile-groups-3.png"
        alt="Example of an incorrectly styled tile group with two tiles using different image heights"
        width="750"
        height="399">
</uxdot-example>


### Footer content

The footer of a link tile or selectable tile should not include calls to action, links, or buttons, but it can include non-interactive elements, like tags or badges. Ideally, footer content should be able to fit on one line, but it can wrap to two when necessary.

<uxdot-example width-adjustment="360px" danger>
  <img src="../best-practices-tile-footer-content.png"
        alt="Example of incorrectly adding a link in the footer of a link tile"
        width="360"
        height="250">
</uxdot-example>

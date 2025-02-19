## Usage

A tile can be used when a clickable container is needed to provide one call to action or show one form input option. It can be grouped with similarly-structured and styled tiles in a tile group. There
are two types, link tiles and selectable tiles. Both can be used in groups or individually, except for a selectable tile with a radio button, which always has to be grouped.

### Tile vs. card

The primary distinguishing factor between a tile and a card is that each tile can perform only one action because the whole surface is clickable. A tile also has the ability to be used as selectable
items in a form. Tiles can be grouped together like card, however.

## Variants

### Link tiles

A link tile has many different use cases, but it is especially helpful to use in place of a card group that would have repetitive calls to action. They can also be used in place of Brick calls to
action if adding icons or images is necessary.

#### Compact link tile

A link tile has a compact variant that can be used in sections that need a denser concentration of information. To further condense each tile, a compact link tile does not have a title slot and the
icon appears to the left of content, rather than above it.

#### Desaturated heading

The desaturated heading variant is best used for pages with many link tiles. For example, it can help prevent a blue heading from appearing visually overwhelming on a search results page, especially
if each tile includes a logo. Other than the heading color, the hover, focus, and active states look the same as a default link tile and the arrow will always be blue.

#### Image sizes

For a link tile, there are two image sizes available. The Default size has spacing around the entire image. The Full-width image size bleeds to the top, left, and right edges. The default image size
is recommended for logos, while illustrations or photos would work well as a full-width image.

<uxdot-example width-adjustment="750px">
  <img alt="Examples of a logo in a tile with the default image size and a photo in a tile with the full-width image size"
       src="../tile-variants-image-sizes.png"
       width="750"
       height="431">
</uxdot-example>

### Selectable tiles

<rh-alert>
  <h4 slot="header">Helpful tip</h4>
  <p>A selectable tile with a radio button must be used in a group. If there is only one choice listed, use a checkbox.</p>
</rh-alert>

A selectable tile is a form element and can be used as either a radio button or a checkbox. The radio button should be used if only one option can be selected. A selectable tile with checkboxes should
be used when a user can select more than one option.

## Writing content

The four content slots within a tile are **title**, **heading**, **body**, and **footer**.

<rh-table>

| Slot    | Content                                                                                                                                               |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Title   | A title provides secondary descriptive context. A selectable tile does not have title slots.                                                          |
| Heading | In a link tile, the heading should indicate what clicking on the tile will do. In a selectable tile, the heading labels the radio button or checkbox. |
| Body    | The body text expands on heading content and gives the user more information.                                                                         |
| Footer  | Footer text should be brief and be used for supplementary information only.                                                                           |

</rh-table>

### Character count

The recommended character counts below include spaces. Line counts are based on a default link tile at minimum width.

<rh-table>

| Element      | Character count | Line count |
|--------------|-----------------|------------|
| Title text   | 20              | 1          |
| Heading text | 64              | 3          |
| Body text    | 160             | 7          |
| Footer text  | 25              | 1          |

</rh-table>

## Layouts

Like a card, the default tile should have a minimum width of four grid columns, so there is a maximum of three default link tiles in one row.

<uxdot-example width-adjustment="870px">
  <img alt="Three default link tiles in a row"
       src="../tile-layouts-default-tile.png"
       width="870"
       height="345">
</uxdot-example>

The compact link tiles or selectable tiles can condense to a minimum width of three grid columns or a max of four compact tiles in a row.

<uxdot-example width-adjustment="870px">
  <img alt="Four compact link tiles in a row"
       src="../tile-layouts-compact-tile.png"
       width="870"
       height="269">
</uxdot-example>

## Behavior

### Vertical height

The vertical height of a tile will increase as more content is added. The vertical height of multiple tiles in one row matches the height of the tallest tile.

<uxdot-example width-adjustment="870px">
  <img alt="Three link tiles with different amounts of content have the same height"
       src="../tile-behavior-vertical-height.png"
       width="870"
       height="379">
</uxdot-example>

## Best practices

### One action per tile

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="360px" slot="image">
      <img alt="Link tile with one link and selectable tile with radio button"
           src="../tile-best-practices-actions-1-do.svg"
           width="360"
           height="520">
    </uxdot-example>
    <p>Each tile should go to only one destination or have one action.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="360px" slot="image">
      <img alt="Link tile with a CTA and a selectable tile with a 'Learn more' link"
           src="../tile-best-practices-actions-1-dont.svg"
           width="360"
           height="520">
    </uxdot-example>
    <p>Do not use a tile if you need to include more than one link or action.</p>
  </uxdot-best-practice>
</div>

### Link tile actions

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="360px" slot="image">
      <img alt="Link tile with a link to the 'Talk to a Red Hatter' form and description"
           src="../tile-best-practices-actions-2-do.svg"
           width="360"
           height="191">
    </uxdot-example>
    <p>Link tiles should navigate users to another page or section.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="360px" slot="image">
      <img alt="Link tile that uses 'Submit' as the heading text"
           src="../tile-best-practices-actions-2-dont.svg"
           width="360"
           height="191">
    </uxdot-example>
    <p>A link tile should not be used as a button.</p>
  </uxdot-best-practice>
</div>

### Tile variants in groups

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="752px">
    <img alt="Two selectable tiles in a group"
         src="../tile-best-practices-variants-in-groups-do.svg"
         width="752"
         height="218">
  </uxdot-example>

  <p>Use the same variants for a tile group.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="750px">
    <img alt="A default link tile and a compact link tile in a group"
         src="../tile-best-practices-variants-in-groups-dont.svg"
         width="750"
         height="325">
  </uxdot-example>

  <p>Avoid using different variants or sub-variants in one tile group.</p>
</uxdot-best-practice>

### Tile content

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="750px">
    <img alt="Two link tiles with headings and body copy"
         src="../tile-best-practices-tile-content-do.svg"
         width="750"
         height="278">
  </uxdot-example>

  <p>When grouped, use the same number of content slots to make them easy to scan.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="750px">
    <img alt="One link tile with a heading and body copy and one link tile with an image, title, heading, and body copy"
         src="../tile-best-practices-tile-content-dont.svg"
         width="750"
         height="392">
  </uxdot-example>

  <p>Do not use a different number of content slots in grouped tiles.</p>
</uxdot-best-practice>

### Image sizes

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="750px">
    <img alt="Two link tiles with images that have the same height"
         src="../tile-best-practices-image-sizes-do.png"
         width="750"
         height="320">
  </uxdot-example>

  <p>If grouped tiles have images, the images should have the same height. This will keep the headings of each tile aligned, which helps users scan more easily.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="750px">
    <img alt="Two link tiles, one with a large image and one with a small image"
         src="../tile-best-practices-image-sizes-dont.png"
         width="750"
         height="399">
  </uxdot-example>

  <p>Images for tiles in a group should not be different heights.</p>
</uxdot-best-practice>

### Footer content

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="360px" slot="image">
      <img alt="Link tile with a tag in the footer"
           src="../tile-best-practices-footer-content-do.svg"
           width="360"
           height="285">
    </uxdot-example>
    <p>The footer of a tile can include non-interactive elements, like unlinked tags or badges. Ideally, footer content should be able to fit on one line, but it can wrap to two when necessary.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="360px" slot="image">
      <img alt="Link tile with a link in the footer"
           src="../tile-best-practices-footer-content-dont.svg"
           width="360"
           height="285">
    </uxdot-example>
    <p>Do not use a tile if you need to include more than one link or action.</p>
  </uxdot-best-practice>
</div>

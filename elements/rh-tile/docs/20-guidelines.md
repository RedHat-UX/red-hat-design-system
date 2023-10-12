## Usage

A tile can be used when a clickable container is needed to execute one call to action or show one form option. It can be grouped with similarly structured and styled tiles in a tile group.

### Tile vs. card

The primary distinguishing factor between a tile and a card is that each tile can perform only one action because the whole surface is clickable. Tiles also have the ability to be used as selectable items in a form. Tiles can be grouped together like card, however.

## Variants

### Link tiles

Link tiles have many different use cases, but they’re especially helpful to use in place of a card group that would have repetitive calls to action. They can also be used in place of Brick calls to action if you’d like to add icons or images.

#### Compact link tile

Link tiles have a compact sub-variant that can be used in sections that need a denser concentration of information.

To further condense each tile, compact link tiles do not have a title slot, and the icon appears next to the other content, rather than above it.

#### Desaturated heading

The desaturated heading sub-variant is best used for pages with many link tiles. For example, it can help prevent a blue heading from appearing visually overwhelming on a search results page, especially if each tile includes a logo.

Other than the headline color, the hover, focus, and active states look the same as the default link tile’s. The arrow will always be blue.

#### Image sizes

There are two image sizes available for link tiles: a default image size, which has spacing around the entire image, and full-width image, which bleeds to the top, left, and right edges. The default image size is recommended for logos, while illustrations or photos would work well as a full-width image.

{% example palette="light",
        alt="",
        src="../tile-variants-image-sizes.png" %}

### Selectable tiles

Selectable tiles are form elements and can be used as either a radio button or a checkbox. The radio button should be used if only one option can be selected. Selectable tiles with checkboxes should be used when a user can select more than one option.

{% alert state="warning", title="Warning" %}
A selectable tile with a radio button must be used in a group. If there is only one choice listed, use a checkbox.{% endalert %}

## Writing content

Tile can have four content areas: title, heading, body text, and footer text.

### Title text

A title provides secondary descriptive context for a tile’s content. Selectable tiles do not have title slots.

### Heading text

In a link tile, the heading should indicate what clicking on the tile will do. In a selectable tile, the heading labels the radio button or checkbox.

### Body text

The body text expands on the heading’s content and gives the user more information.

### Footer text

Footer text should be brief and be used for supplementary information only.

### Character count

The recommended character counts below include spaces. Line counts are based on a default link tile at minimum width.

| Element                  | Character count  | Line count |
| -------------------------| ---------------- | ---------- |
| Title text               | 20               | 1          |
| Heading text             | 64               | 3          |
| Body text                | 160              | 7          |
| Footer text              | 25               | 1          |

{.full-width .col-111}

## Layouts

Like card, the default tile should have a minimum width of four grid columns, so there is a maximum of three default link tiles in one row.

{% example palette="light",
        alt="",
        src="../tile-layouts-default-tile.png" %}

The compact link tiles or selectable tiles can condense to a minimum width of three grid columns or a max of four compact tiles in a row.

{% example palette="light",
        alt="",
        src="../tile-layouts-compact-tile.png" %}

## Behavior

### Vertical height

The vertical height of a tile will increase as more content is added. The vertical height of multiple tiles in one row matches the height of the tallest tile.

{% example palette="light",
        alt="",
        src="../tile-behavior-vertical-height.png" %}

## Best practices

### Link tile actions

Do not use a link tile if it needs to link to more than one place.

{% example palette="wrong",
        alt="",
        src="../best-practices-link-tile-actions-1.png" %}

A link tile should not be used as a button. Link tiles are akin to calls to action and should navigate a user somewhere else.

{% example palette="wrong",
        alt="",
        src="../best-practices-link-tile-actions-2.png" %}

### Tile groups

Avoid using different variants or sub-variants of tile in one tile group.

{% example palette="wrong",
        alt="",
        src="../best-practices-tile-groups-1.png" %}

When grouped, use the same number of content slots to make them easy to scan.

{% example palette="wrong",
        alt="",
        src="../best-practices-tile-groups-2.png" %}

If the tiles have images, the images should have the same height. This  will help the headings of each tile line up, which also helps users scan more easily.

{% example palette="wrong",
        alt="",
        src="../best-practices-tile-groups-3.png" %}

### Footer content

The footer of a link tile or selectable tile should not include calls to action, links, or buttons, but it can include non-interactive elements, like tags or badges. Ideally, footer content should be able to fit on one line, but it can wrap to two when necessary.

{% example palette="wrong",
        alt="",
        src="../best-practices-tile-footer-content.png" %}
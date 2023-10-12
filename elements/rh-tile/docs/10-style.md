
## Style

Tile is available in both light and dark theme, and it comes as either a link tile or a selectable tile. Link tiles have two size and heading color options,  and the blue arrow in the bottom right corner helps distinguish it from card. Selectable tiles have a consistent style for both the checkbox and radio button variants.

### Anatomy
{% example palette="light",
           alt="",
           src="../link-tile-anatomy.png" %}
 
1) Image
2) Icon
3) Title
4) Heading
5) Body text
6) Footer
{.example-notes}

{% example palette="light",
           alt="",
           src="../selectable-tile-anatomy.png" %}

1) Heading
2) Form input (checkbox or radio button)
3) Body text
4) Footer
{.example-notes}

### Sizes

Link tiles come in default and compact size. Selectable tiles have only one size, which is based on the size of compact tiles.

{% example palette="light",
           alt="",
           src="../tile-sizes.png" %}

| Size                                 | Element                 | Value          |
| ------------------------------------ | ----------------------- | -------------- |
| Default (link)                       | Padding                 | 32px, 2rem     | 
| Compact (link), Default (selectable) | Padding                 | 24px, 1.5rem   | 
| Default (link)                       | Text size - heading     | 20px, 1.25rem  | 
| Compact (link), Default (selectable) | Text size - heading     | 18px, 1.125rem | 
| Default (link)                       | Line height - heading   | 26 (1.3)       | 
| Compact (link), Default (selectable) | Line height - heading   | 27 (1.5)       | 
| Default (link)                       | Text size - body text   | 18px, 1.125rem | 
| Compact (link), Default (selectable) | Text size - body text   | 14px, 0.875rem | 
| Default (link)                       | Line height - body text | 27 (1.5)       | 
| Compact (link), Default (selectable) | Line height - body text | 21 (1.5)       | 
| Default (link)                       | Text size - footer      | 14px, 0.875rem | 
| Compact (link), Default (selectable) | Text size - footer      | 12px, 0.75rem  | 
| Default (link)                       | Line height - footer    | 21 (1.5)       | 
| Compact (link), Default (selectable) | Line height - footer    | 18 (1.5)       | 
| Default (link)                       | Icon size               | 48px, 3rem     |
| Compact (link), Default (selectable) | Icon size               | 32px, 2rem     |

{.full-width .col-111}

## Heading color

By default, link tiles have a blue heading, but a desaturated heading sub-variant exists for both light and dark themes. The desaturated heading uses either a black or white heading. Selectable tiles have a desaturated heading only and do not have the option for a blue heading.

{% example palette="light",
           alt="",
           src="../tile-heading-color-light-theme.png" %}

{% example palette="darkest",
           alt="",
           src="../tile-heading-color-dark-theme.png" %}

## Theme

Both link and selectable tiles are available in dark and light themes.
    
{% example palette="light",
        alt="",
        src="../tile-light-theme.png" %}

{% example palette="darkest",
        alt="",
        src="../tile-dark-theme.png" %}

| Property                                        | Light theme    | Dark theme     | 
| ----------------------------------------------- | -------------- | -------------- |
| Color - Link tile surface                       | #FFFFFF        | #151515        | 
| Color - Selectable tile surface                 | #FFFFFF        | #151515        | 
| Color - Link tile border                        | #C7C7C7        | #707070        | 
| Color - Selectable tile border                  | #C7C7C7        | #707070        | 
| Border radius - Link tile                       | 3px, 0.1875rem | 3px, 0.1875rem | 
| Border radius - Selectable tile                 | 3px, 0.1875rem | 3px, 0.1875rem | 
| Border width - Link tile                        | 1px, 0.0625rem | 1px, 0.0625rem | 
| Border width - Selectable tile                  | 1px, 0.0625rem | 1px, 0.0625rem | 
| Color - Link tile title                         | #151515        | #FFFFFF        | 
| Color - Link tile heading (blue heading)        | #0066CC        | #73BCF7        | 
| Color - Link tile heading (destaurated heading) | #151515        | #FFFFFF        | 
| Color - Selectable tile heading                 | #151515        | #FFFFFF        | 
| Color - Link tile body text                     | #151515        | #FFFFFF        | 
| Color - Selectable tile body text               | #151515        | #FFFFFF        | 
| Color - Link tile footer text                   | #151515        | #FFFFFF        | 
| Color - Selectable tile footer text             | #151515        | #FFFFFF        | 
| Color - Link tile arrow                         | #0066CC        | #73BCF7        | 

{.full-width .col-111}

## Space

Space values remain the same at all breakpoints.

### Link tile without image

{% example palette="light",
        alt="",
        src="../space-link-tile-no-image.png" %}

### Link tile with an image

{% example palette="light",
        alt="",
        src="../space-link-tile-with-image.png" %}

### Selectable tile

{% example palette="light",
        alt="",
        src="../space-selectable-tile.png" %}

{% spacerTokensTable 
    headline='',
    caption='',
    tokens="--rh-space-lg, --rh-space-xl, --rh-space-2xl" %}
{% endspacerTokensTable %}

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern. The interaction states for a default link tile are the same for compact link tiles, as long as they use the same heading color.

### Hover 

{% example palette="light",
        alt="",
        src="../tile-states-hover-light-theme.png" %}

{% example palette="darkest",
        alt="",
        src="../tile-states-hover-dark-theme.png" %}

| Property                                        | Light theme | Dark theme | 
| ------------------------------------------------| ----------- | ---------- |
| Color - Link tile surface                       | #F2F2F2     | #1F1F1F    | 
| Color - Link tile (black heading) surface       | #F2F2F2     | #1F1F1F    | 
| Color - Selectable tile surface | #F2F2F2       | #1F1F1F     |            |
| Color - Link tile heading (blue heading)        | #004080     | #BEE1F4    | 
| Color - Link tile heading (desaturated heading) | #151515     | #FFFFFF    | 
| Color - Selectable tile heading                 | #151515     | #FFFFFF    | 
| Text decoration - Link tile heading             | Underline   | Underline  | 
| Text decoration - Selectable tile heading       | Underline   | Underline  | 
| Color - Link tile arrow                         | #004080     | #BEE1F4    |

{.full-width .col-111}

### Focus

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
        alt="",
        src="../tile-states-focus-light-theme.png" %}

{% example palette="darkest",
        alt="",
        src="../tile-states-focus-dark-theme.png" %}

| Property           | Light theme | Dark theme |
| -------------------| ----------- | ---------- | 
| Color - Focus ring | #0066CC     | #73BCF7    |

{.full-width .col-111}

### Active 

Only link tiles have an active state. Selectable tiles have a selected state instead.

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
        alt="",
        src="../tile-states-active-light-theme.png" %}

{% example palette="darkest",
        alt="",
        src="../tile-states-active-dark-theme.png" %}

| Property           | Light theme | Dark theme |
| -------------------| ----------- | ---------- | 
| Color - Focus ring | #0066CC     | #73BCF7    |

{.full-width .col-111}

### Selected 

Only selectable tiles have a selected state. Link tiles have an active state instead.

{% example palette="light",
        alt="",
        src="../tile-states-selected-light-theme.png" %}

{% example palette="darkest",
        alt="",
        src="../tile-states-selected-dark-theme.png" %}

| Property           | Light theme | Dark theme |
| -------------------| ----------- | ---------- | 
| Color - Form input | #0066CC     | #73BCF7    |

{.full-width .col-111}

### Disabled

{% example palette="light",
        alt="",
        src="../tile-states-disabled-light-theme.png" %}

{% example palette="darkest",
        alt="",
        src="../tile-states-disabled-dark-theme.png" %}

| Property                                  | Light theme  | Dark theme | 
| ----------------------------------------- | ------------ | ---------- | 
| Color - Link tile surface                 | #E0E0E0      | #4D4D4D    | 
| Color - Link tile (black heading) surface | #F2F2F2      | #1F1F1F    | 
| Color - Selectable tile surface           | #E0E0E0      | #4D4D4D    | 
| Color - Link tile heading (blue heading)  | #4D4D4D      | #A3A3A3    | 
| Color - Link tile heading (black heading) | #4D4D4D      | #A3A3A3    | 
| Color - Selectable tile heading           | #4D4D4D      | #A3A3A3    | 
| Color - Link tile disabled icon           | #4D4D4D      | #A3A3A3    | 
| Color - Link tile body text               | #4D4D4D      | #A3A3A3    | 
| Color - Selectable tile body text         | #4D4D4D      | #A3A3A3    |

{.full-width .col-111}
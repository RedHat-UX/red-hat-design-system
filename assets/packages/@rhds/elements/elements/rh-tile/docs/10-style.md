
## Style

A tile is available as a <strong>Link tile</strong> or <strong>Selectable tile</strong>. A link tile has two sizes and heading color options; the blue arrow in the bottom right corner helps distinguish it from card. A selectable tile has a consistent style for both the checkbox and radio button variants.

### Anatomy
{% example palette="light",
           alt="Default link tile with numbers pointing to locations of an image, an icon, text, and a footer",
           src="../link-tile-anatomy.png" %}
 
1) Image
2) Icon
3) Title
4) Heading
5) Body text
6) Footer
{.example-notes}

{% example palette="light",
           alt="Selectable tiles with numbers pointing to locations of text, a checkbox or radio button, and a footer",
           src="../selectable-tile-anatomy.png" %}

1) Heading
2) Form input (checkbox or radio button)
3) Body text
4) Footer
{.example-notes}

### Sizes

A link tile is available in Default and Compact sizes. A selectable tile has only one size which is based on the size of a compact tile.

{% example palette="light",
           alt="Examples of a link tile, compact tile, and selectable tile to show size differences",
           src="../tile-sizes.png" %}

## Theme

Both the link tile and the selectable tile are available in dark and light themes.
    
{% example palette="light",
        alt="Light theme tiles use a white background, blue or black heading, black text, and a blue arrow icon",
        src="../tile-light-theme.png" %}

{% example palette="darkest",
        alt="Dark theme tiles use a dark gray background, blue or white heading, white text, and a light blue arrow icon",
        src="../tile-dark-theme.png" %}

## Heading color

A link tile has a blue heading by default, but a desaturated variant exists for both light and dark themes. The desaturated heading uses either a black or white heading. A selectable tile has a desaturated heading only and does not have the option for a blue heading.

{% example palette="light",
           alt="Examples of a light theme link tile with a blue heading, link tile with a black heading, and selectable tile with a black heading",
           src="../tile-heading-color-light-theme.png" %}

{% example palette="darkest",
           alt="Examples of a dark theme link tile with a light blue heading, link tile with a white heading, and selectable tile with a white heading",
           src="../tile-heading-color-dark-theme.png" %}

## Space

Space values remain the same at all breakpoints.

### Link tile without image

{% example palette="light",
        alt="Default link tile and compact link tile with spacers showing padding and margins",
        src="../space-link-tile-no-image.png" %}

### Link tile with an image

{% example palette="light",
        alt="Link tiles that have full-width and default image sizes with spacers showing padding and margins",
        src="../space-link-tile-with-image.png" %}

### Selectable tile

{% example palette="light",
        alt="Selectable tile with spacers showing padding and margins",
        src="../space-selectable-tile.png" %}

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern. The interaction states of a default link tile are the same for a compact link tile as long as they use the same heading color. A selectable tile does not have an underlined heading to avoid users thinking it contains a link.

### Hover 

The hover state of a link tile also includes the arrow icon moving 3px to the right.

{% example palette="light",
        alt="On hover, light theme tiles have a light gray background, an underlined (and sometimes darker blue) heading, a darker blue arrow icon ",
        src="../tile-states-hover-light-theme.png" %}

{% example palette="darkest",
        alt="On hover, dark theme tiles have a lighter gray background, an underlined (and sometimes lighter blue) heading, a lighter blue arrow icon ",
        src="../tile-states-hover-dark-theme.png" %}

### Focus

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state, except for the arrow icon animation.
{% endalert %}

{% example palette="light",
        alt="Focused light theme tiles have a blue focus ring and use hover state styling",
        src="../tile-states-focus-light-theme.png" %}

{% example palette="darkest",
        alt="Focused dark theme tiles have a light blue focus ring and use hover state styling",
        src="../tile-states-focus-dark-theme.png" %}

### Active 

Only link tiles have an active state. Selectable tiles have a selected state instead.

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
        alt="Active light theme link tiles use the focus state styles",
        src="../tile-states-active-light-theme.png" %}

{% example palette="darkest",
        alt="Active dark theme link tiles use the focus state styles",
        src="../tile-states-active-dark-theme.png" %}

### Selected 

Only a selectable tile has a selected state. A link tile has an active state instead.

{% example palette="light",
        alt="When selected, the form input of light theme selectable tiles appears blue and filled or checked",
        src="../tile-states-selected-light-theme.png" %}

{% example palette="darkest",
        alt="When selected, the form input of dark theme selectable tiles appears light blue and filled or checked",
        src="../tile-states-selected-dark-theme.png" %}

### Disabled

{% example palette="light",
        alt="Disabled light theme tiles have a light gray background and lighter gray text. Disabled link tiles have a ban icon.",
        src="../tile-states-disabled-light-theme.png" %}

{% example palette="darkest",
        alt="Disabled dark theme tiles have a lighter gray background and light gray text. Disabled link tiles have a ban icon.",
        src="../tile-states-disabled-dark-theme.png" %}

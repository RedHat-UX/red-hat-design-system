
## Style
  Tabs are used to group related content allowing users to navigate a view without leaving the page) Each tab is a text label placed in a visible or invisible container. There are two variants in two orientations and some of the styles and padding shift slightly depending on which variant is used.

### Anatomy
  {% example palette="light", alt="Image of tabs anatomy showing horizontal and vertical open tabs and box tabs with lots of annotations", src="../tabs-anatomy.png" %}

  1) Active tab
  2) Active tab accent
  3) Inactive tab
  4) Divider line
  5) Content area
  6) Overflow button - left
  7) Overflow button - right
  8) Inactive tab surface
  {.example-notes}

### Variations
  There are two available variations. Open tabs has a more understated style whereas Box tabs has a more traditional style.

  {% example palette="light", alt="Image of open tabs on top and box tabs below", src="../tabs-variations.png" %}

### Orientations
  There are two available orientations and the only difference is padding.

  {% example palette="light", alt="Image of horizontal, vertical, and tabs with overflow buttons showing padding spacers", src="../tabs-orientation.png" %}

## Theme
  Both variations and orientations are available in both light and dark themes.
### Light theme

  {% example palette="light", alt="Image of light theme tabs", src="../tabs-theme-light.png" %}

  | Property {style="width: 50%;"} | Light theme   |
  | ------------------------------ | ------------- |
  | Color - active tab text        |#151515 |
  | Color - active tab accent      |#EE0000 |
  | Color - active tab surface (Box tabs only) |#FFFFFF |
  | Color - inactive tab text      |#4D4D4D |
  | Color - inactive tab surface (Box tabs only) |#F2F2F2 |
  | Color - disabled chevron icon  |#C7C7C7 |
  | Color - active chevron icon    |#151515 |
  | Color - chevron button surface |#FFFFFF |
  | Border width - active tab and chevron button accent | 4px |
  | Border width - divider line and borders | 1px |

### Dark theme

  {% example palette="darkest", alt="Image of dark theme tabs", src="../tabs-theme-dark.png" %}

  | Property {style="width: 50%;"} | Dark theme    |
  | ------------------------------ | ------------- |
  | Color - active tab text        |#FFFFFF |
  | Color - active tab accent      |#FF542E |
  | Color - active tab surface (Box tabs only) |#151515 |
  | Color - inactive tab text      |#C7C7C7 |
  | Color - inactive tab surface (Box tabs only) |#292929 |
  | Color - disabled chevron icon  |#707070 |
  | Color - active chevron icon    |#FFFFFF |
  | Color - chevron button surface |#151515 |
  | Border width - active tab and chevron button accent | 4px |
  | Border width - divider line and borders | 1px |

## Configuration
  The panel for both orientations of tabs does not have a maximum height and should not scroll.

  {% example palette="light", alt="Image of horizontal and vertical tabs construction; several examples showing details like alignment, height, width, and more", src="../tabs-configuration.png" %}

### Overflow buttons
  Overflow buttons are containers with chevron icons that are added to tabs on small breakpoints.

  {% example palette="light", alt="Image of horizontal and vertical tabs with overflow buttons showing padding spacers", src="../tabs-configuration-overflow-buttons.png" %}

## Space
  Box tabs are separated by a 1px divider.

  {% example palette="light", alt="Image of open tabs spacing for all sizes and orientations", src="../tabs-space-open.png" %}

  {% example palette="light", alt="Image of box tabs spacing for all sizes and orientations", src="../tabs-space-box.png" %}

  {% spacerTokensTable headline="", caption='', headingLevel="4", tokens="--rh-space-md, --rh-space-lg, --rh-space-2xl" %} {% endspacerTokensTable %}

## Interaction states
  Interactive elements include inactive tabs and overflow buttons.
### Hover - Open tabs
  Inactive tabs and overflow buttons have the same hover state.

  {% example palette="light", alt="Image of light theme open tabs hover states", src="../tabs-open-interaction-state-hover-theme-light.png" %}

  {% example palette="darkest", alt="Image of dark theme open tabs hover states", src="../tabs-open-interaction-state-hover-theme-dark.png" %}
  
### Hover - Box tabs

  {% example palette="light", alt="Image of light theme box tabs hover states", src="../tabs-box-interaction-state-hover-theme-light.png" %}

  {% example palette="darkest", alt="Image of dark theme box tabs hover states", src="../tabs-box-interaction-state-hover-theme-dark.png" %}

  | Property {style="width: 50%;"} | Light theme {style="width: 25%;"} | Dark theme |
  | ------------------------------ | --------------------------------- | ---------- |
  | Color - accent                 |#707070                           |#C7C7C7    |
  | Color - text and chevron icon  |#FFFFFF                           |#151515    |

### Focus - Open tabs

  {% alert state="info", title="Helpful Tip" %} The Focus state has the same styles as the Hover state. {% endalert %}

  {% example palette="light", alt="Image of light theme open tabs focus states", src="../tabs-open-interaction-state-focus-theme-light.png" %}

  {% example palette="darkest", alt="Image of dark theme open tabs focus states", src="../tabs-open-interaction-state-focus-theme-dark.png" %}

### Focus - Box tabs

  {% alert state="info", title="Helpful Tip" %} The Focus state has the same styles as the Hover state. {% endalert %}

  {% example palette="light", alt="Image of light theme box tabs focus states", src="../tabs-box-interaction-state-focus-theme-light.png" %}

  {% example palette="darkest", alt="Image of dark theme box tabs focus states", src="../tabs-box-interaction-state-focus-theme-dark.png" %}

  | Property {style="width: 50%;"} | Light theme {style="width: 25%;"} | Dark theme |
  | ------------------------------ | --------------------------------- | ---------- |
  | Color - focus ring             |#0066CC                           |#73BCF7    |

### Active - Open tabs
  {% alert state="info", title="Helpful Tip" %} The Active state has the same styles as the Hover state. {% endalert %}

  {% example palette="light", alt="Image of light theme open tabs active states", src="../tabs-open-interaction-state-active-theme-light.png" %}

  {% example palette="darkest", alt="Image of dark theme open tabs active states", src="../tabs-open-interaction-state-active-theme-dark.png" %}

### Active - Box tabs
  {% alert state="info", title="Helpful Tip" %} The Active state has the same styles as the Hover state. {% endalert %}

  {% example palette="light", alt="Image of light theme box tabs active states", src="../tabs-box-interaction-state-active-theme-light.png" %}

  {% example palette="darkest", alt="Image of dark theme box tabs active states", src="../tabs-box-interaction-state-active-theme-dark.png" %}

  | Property {style="width: 50%;"} | Light theme {style="width: 25%;"} | Dark theme |
  | ------------------------------ | --------------------------------- | ---------- |
  | Color - focus ring             |#0066CC                           |#73BCF7    |


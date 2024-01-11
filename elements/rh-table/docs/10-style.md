## Style

Use a table to organize and display data efficiently in a grid with columns and rows. When using a table, consider the structure of the data and how to make it easy for a user to scan, examine, and compare. Although a table can share space with other components and content, consider giving a table extra space on the page to help a user view dense data.

{% example palette="light",
           alt="Image of table with numbers next to various parts",
           src="../table-anatomy.png" %}

  1. Title
  2. Column
  3. Column title
  4. Row
  5. Row title
  6. Cell
  7. Divider
  8. Caption
  {.example-notes}

## Column and row titles

Column and row titles should be a few words that describe the data in that column or row.

{% example palette="light",
           alt="Image of various tables with no titles, column titles, row titles, and both",
           src="../table-column-row-titles.png" %}

## Table title and caption

The table title should make it clear to a user what the data is and what purpose it serves. A caption can be added under the table to provide more information about the data or its source.

{% example palette="light",
           alt="Image of table with a title on top and a caption underneath",
           src="../table-title-caption.png" %}

## Theme

A table is available in both light and dark themes.

### Light theme
{% example palette="light",
           alt="Light theme table with black text on white surface",
           src="../table-light-theme.png" %}

### Dark theme
{% example palette="darkest",
           alt="Dark theme table with white text on black surface",
           src="../table-dark-theme.png" %}


## Scrolling

A scrollbar is visible if content exceeds the width or height of a table. Content can scroll horizontally, vertically, or both.

{% example palette="light",
           alt="Image of various tables with a scrollbar on the right, on the bottom, and both",
           src="../table-scrolling.png" %}

## Space

A table has equal spacing within columns, rows, and in between divider lines. The same spacing is also maintained across large and small viewport sizes.

{% example palette="light",
           alt="Image of table with spacers in between elements",
           src="../table-space.png" %}

{% spacerTokensTable 
    caption='',
    headingLevel="3",
    tokens="--rh-space-lg" %}
{% endspacerTokensTable %}

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

On hover, cell rows and columns are highlighted with a semitransparent background color to make content easier to view. 

In light theme, a row is highlighted in light gray on white surface colors and white on light gray surface colors. The column highlight remains light blue.

{% example palette="light",
           alt="Light theme tables with hover effects on a white surface",
           src="../table-interaction-state-hover.png" %}

<!--change bg to light gray -->
{% example palette="lighter-gray",
           alt="Light theme tables with hover effects on a light gray surface",
           src="../table-interaction-state-hover-light-gray-surface.png" %}

On all dark theme surface colors, the row highlight is white, and the column highlight uses a dark blue.

{% example palette="darkest",
           alt="Dark theme tables with hover effects on a black surface",
           src="../table-interaction-state-hove-dark.png" %}

### Focus

{% alert state="warning", title="Warning" %} A cell with focus does not display row and column highlighting unless it is hovered. {% endalert %}

{% example palette="light",
           alt="Light theme table cell in focus state",
           src="../table-interaction-state-focus.png" %}

{% example palette="darkest",
           alt="Dark theme table cell in focus state",
           src="../table-interaction-state-focus-dark.png" %}
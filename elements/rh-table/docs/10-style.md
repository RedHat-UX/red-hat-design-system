## Style

Use a table to organize and display data efficiently in a grid with columns and rows. When using a table, consider the structure of the data and how to make it easy for a user to scan, examine, and compare. Although a table can share space with other components and content, consider giving a table extra space on the page to help a user view dense data.

<figure>
  <uxdot-example width-adjustment="872px">
    <img src="../table-anatomy.png"
        alt="Image of table with numbers next to various parts"
        width="872"
        height="319">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Title</li>
      <li>Column</li>
      <li>Column title</li>
      <li>Row</li>
      <li>Row title</li>
      <li>Cell</li>
      <li>Divider</li>
      <li>Caption</li>
    </ol>
  </figcaption>
</figure>

## Column and row titles

Column and row titles should be a few words that describe the data in that column or row.

<uxdot-example width-adjustment="872px">
  <img src="../table-column-row-titles.png"
        alt="Image of various tables with no titles, column titles, row titles, and both"
        width="872"
        height="976">
</uxdot-example>


## Table title and caption

The table title should make it clear to a user what the data is and what purpose it serves. A caption can be added under the table to provide more information about the data or its source.


<uxdot-example width-adjustment="872px">
  <img src="../table-title-caption.png"
        alt="Image of table with a title on top and a caption underneath"
        width="872"
        height="319">
</uxdot-example>


## Theme

A table is available in both light and dark themes.

### Light theme

<uxdot-example width-adjustment="872px">
  <img src="../table-light-theme.png"
        alt="Light theme table with black text on white surface"
        width="928"
        height="224">
</uxdot-example>


### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../table-dark-theme.png"
        alt="Dark theme table with white text on black surface"
        width="928"
        height="224">
</uxdot-example>


## Scrolling

A scrollbar is visible if content exceeds the width or height of a table. Content can scroll horizontally, vertically, or both.

<uxdot-example width-adjustment="872px">
  <img src="../table-scrolling.png"
        alt="Image of various tables with a scrollbar on the right, on the bottom, and both"
        width="872"
        height="1044">
</uxdot-example>


## Space

A table has equal spacing within columns, rows, and in between divider lines. The same spacing is also maintained across large and small viewport sizes.

<uxdot-example width-adjustment="872px">
  <img src="../table-space.png"
        alt="Image of table with spacers in between elements"
        width="872"
        height="624">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

On hover, cell rows and columns are highlighted with a semitransparent background color to make content easier to view. 

In light theme, a row is highlighted in light gray on white surface colors and white on light gray surface colors. The column highlight remains light blue.

<uxdot-example  width-adjustment="872px">
  <img src="../table-interaction-state-hover.png"
        alt="Light theme tables with hover effects on a white surface"
        width="872"
        height="512">
</uxdot-example>


<!--change bg to light gray -->
<uxdot-example color-palette="lighter" width-adjustment="872px">
  <img src="../table-interaction-state-hover-light-gray-surface.png"
        alt="Light theme tables with hover effects on a light gray surface"
        width="872"
        height="512">
</uxdot-example>

On all dark theme surface colors, the row highlight is white, and the column highlight uses a dark blue.

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../table-interaction-state-hover-dark.png"
        alt="Dark theme tables with hover effects on a black surface"
        width="872"
        height="512">
</uxdot-example>


### Focus

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>A cell with focus does not display row and column highlighting unless it is hovered.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../table-interaction-state-focus.png"
        alt="Light theme table cell in focus state"
        width="872"
        height="224">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../table-interaction-state-focus-dark.png"
        alt="Dark theme table cell in focus state"
        width="872"
        height="224">
</uxdot-example>

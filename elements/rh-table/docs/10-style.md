## Style

Use a table to organize and display data efficiently in a grid with columns and rows. When using a table, consider the structure of the data and how to make it easy for a user to scan, examine, and compare. Although a table can share space with other components and content, consider giving a table extra space on the page to help a user view dense data.

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="872px">
    <img alt="Image of table with numbers next to various parts"
         src="../table-anatomy.png"
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

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of various tables with no titles, column titles, row titles, and both"
       src="../table-column-row-titles.png"
       width="872"
       height="976">
</uxdot-example>


## Table title and caption

The table title should make it clear to a user what the data is and what purpose it serves. A caption can be added under the table to provide more information about the data or its source.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with a title on top and a caption underneath"
       src="../table-title-caption.png"
       width="872"
       height="319">
</uxdot-example>


## Color scheme
<a id="theme"></a>

A table is available in both light and dark color schemes.

### Light scheme

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light scheme table with black text on white surface"
       src="../table-light-theme.png"
       width="928"
       height="224">
</uxdot-example>


### Dark scheme

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Dark scheme table with white text on black surface"
       src="../table-dark-theme.png"
       width="928"
       height="224">
</uxdot-example>


## Scrolling

A scrollbar is visible if content exceeds the width or height of a table. Content can scroll horizontally, vertically, or both.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of various tables with a scrollbar on the right, on the bottom, and both"
       src="../table-scrolling.png"
       width="872"
       height="1044">
</uxdot-example>


## Space

A table has equal spacing within columns, rows, and in between divider lines. The same spacing is also maintained across large and small viewport sizes.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with spacers in between elements"
       src="../table-space.png"
       width="872"
       height="624">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

On hover, cell rows and columns are highlighted with a semitransparent background color to make content easier to view. 

In light scheme, a row is highlighted in light gray on white surface colors and white on light gray surface colors. The column highlight remains light blue.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light scheme tables with hover effects on a white surface"
       src="../table-interaction-state-hover.png"
       width="872"
       height="512">
</uxdot-example>


<!--change bg to light gray -->
<uxdot-example color-palette="lighter" width-adjustment="872px">
  <img alt="Light scheme tables with hover effects on a light gray surface"
       src="../table-interaction-state-hover-light-gray-surface.png"
       width="872"
       height="512">
</uxdot-example>

On all dark color palettes, the row highlight is white, and the column highlight uses a dark blue.

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Dark scheme tables with hover effects on a black surface"
       src="../table-interaction-state-hover-dark.png"
       width="872"
       height="512">
</uxdot-example>


### Focus

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>A cell with focus does not display row and column highlighting unless it is hovered.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light scheme table cell in focus state"
       src="../table-interaction-state-focus.png"
       width="872"
       height="224">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Dark scheme table cell in focus state"
       src="../table-interaction-state-focus-dark.png"
       width="872"
       height="224">
</uxdot-example>

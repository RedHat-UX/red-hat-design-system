## Usage

A table is a set of data that can be easily scanned and compared. Each row in a table represents an item and each cell of that row is an attribute of that item. This means that cells in a particular column will be the same data type such as dates, numerals, text, etc. Ideally, there should be one value per cell. If there is more than one piece of information within a cell, use another component.

### Number of columns or rows

There is no maximum number of columns or rows. To reduce cognitive load and a cluttered user interface, set a `max-width` or `max-height` after five or six of each.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with a section of columns and rows highlighted"
       src="../table-usage-columns-and-rows.png"
       width="872"
       height="488">
</uxdot-example>


### Padding

In some edge cases, table rows can have double padding if there are more element types than just text.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of two tables, one with default vertical padding and the other one with double vertical padding"
       src="../table-usage-padding.png"
       width="872"
       height="652">
</uxdot-example>


## Writing content

### Column and row titles

Titles should be concise, scannable, and descriptive of content in the column or row. Header labels should have two or three words maximum. If more words are included, the label might break to a second line.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of two tables with examples of short and long column and row titles"
       src="../table-content-column-row-titles.png"
       width="872"
       height="392">
</uxdot-example>


## Character count

In general, header labels should be as short as possible. However, if columns have more width, more words can be added.

<style data-helmet>.char-count-table col:first-child { width: 25%; }</style>
<rh-table class="char-count-table">

| Column count   | Character count (including spaces) |
|----------------|------------------------------------|
| Two            | 40 - 50                            |
| Four           | 20 - 30                            |
| More than four | 10 - 20                            |

</rh-table>


## Layout

### Placement

A table should be the same width as nearby blocks of content on the page.

<uxdot-example color-palette="lightest" width-adjustment="1000px">
  <img alt="Image of examples of placeholder content and a table having the same width, one is wide and one is narrow"
       src="../table-layout-placement.png"
       width="1000"
       height="768">
</uxdot-example>

### Scrolling

A table will scroll horizontally or vertically if content exceeds the max-width or max-height.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of two tables, one with no scrolling and the other with scrolling columns and rows"
       src="../table-layout-scrolling.png"
       width="872"
       height="706">
</uxdot-example>


### Logos

Logos can be used in cells along with text if necessary.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with logos and links among text"
       src="../table-layout-logos.png"
       width="872"
       height="774">
</uxdot-example>


## Behavior

### Column sorting

Columns can be sorted in ascending or descending order. Sorting controls are located in the column headers and the icon indicates the current sorted state. A sorted table has three states:

- Unsorted (both arrows visible)
- Sorted up (arrow pointing up)
- Sorted down (arrow pointing down)

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of tables with various sorting options"
       src="../table-behavior-sorting.png"
       width="872"
       height="800">
</uxdot-example>


## Responsive design 

### Large viewport sizes 

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of table on large viewport sizes"
       src="../table-viewport-sizes-large.png"
       width="1000"
       height="368">
</uxdot-example>


### Small viewport sizes 

<uxdot-example color-palette="lightest" width-adjustment="576px" variant="full" alignment="left" no-border>
  <img alt="Image of table on small viewport sizes"
       src="../table-viewport-sizes-small.png"
       width="576"
       height="928">
</uxdot-example>


## Best practices

### Number of columns

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Table with two columns"
         src="../table-best-practices-col-number-do.svg"
         width="1012"
         height="197">
  </uxdot-example>

  <p>A table should display at least two columns.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Table with one column"
         src="../table-best-practices-col-number-dont.svg"
         width="1012"
         height="197">
  </uxdot-example>

  <p>Avoid having a table with only one column.</p>
</uxdot-best-practice>

### Cell padding and height

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Table with four columns and three rows that use the default cell padding"
         src="../table-best-practices-cell-height-do.svg"
         width="1012"
         height="141">
  </uxdot-example>

  <p>Keep the table’s default padding to make it easy for users to view the table’s content. In some edge cases, a table can have large cell height if there are more element types than just text.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Table with four columns and three rows, with large cell padding"
         src="../table-best-practices-cell-height-dont.svg"
         width="1012"
         height="269">
  </uxdot-example>

  <p>Don’t add extra padding to increase the cell height if it’s not necessary for the content.</p>
</uxdot-best-practice>

### Table size

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="360px">
    <img alt="small viewport version of the table in a 360 pixel container"
         src="../table-best-practices-size-do.svg"
         width="360"
         height="384">
  </uxdot-example>

  <p>Use the right configuration for the table’s container or viewport size.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="small viewport version of the table in a 1012 pixel container"
         src="../table-best-practices-size-dont.svg"
         width="1012"
         height="384">
  </uxdot-example>
  <p>Do not use the small viewport size configuration in large containers or viewports.</p>
</uxdot-best-practice>

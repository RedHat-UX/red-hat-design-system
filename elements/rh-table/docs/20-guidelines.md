## Usage

A table is a set of data that can be easily scanned and compared. Each row in a table represents an item and each cell of that row is an attribute of that item. This means that cells in a particular column will be the same data type such as dates, numerals, text, etc. Ideally, there should be one value per cell. If there is more than one piece of information within a cell, use another component.

### Number of columns or rows

There is no maximum number of columns or rows. To reduce cognitive load and a cluttered user interface, set a `max-width` or `max-height` after five or six of each.

<uxdot-example width-adjustment="872px">
  <img src="../table-usage-columns-and-rows.png"
        alt="Image of table with a section of columns and rows highlighted"
        width="872"
        height="488">
</uxdot-example>


### Padding

In some edge cases, table rows can have double padding if there are more element types than just text.

<uxdot-example width-adjustment="872px">
  <img src="../table-usage-padding.png"
        alt="Image of two tables, one with default vertical padding and the other one with double vertical padding"
        width="872"
        height="652">
</uxdot-example>


## Writing content

### Column and row titles

Titles should be concise, scannable, and descriptive of content in the column or row. Header labels should have two or three words maximum. If more words are included, the label might break to a second line.

<uxdot-example width-adjustment="872px">
  <img src="../table-content-column-row-titles.png"
        alt="Image of two tables with examples of short and long column and row titles"
        width="872"
        height="392">
</uxdot-example>


## Character count

In general, header labels should be as short as possible. However, if columns have more width, more words can be added.

<rh-table>
  <table>
    <colgroup>
        <col style="width: 25%">
        <col>
    </colgroup>
    <thead>
      <tr>
        <th data-label="Column count" scope="col">Column count</th>
        <th data-label="Character count" scope="col">Character count (including spaces)</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Column count">Two</td>
            <td data-label="Character count">40 - 50</td>
        </tr>
        <tr>
            <td data-label="Column count">Four</td>
            <td data-label="Character count">20 - 30</td>
        </tr>
        <tr>
            <td data-label="Column count">More than four</td>
            <td data-label="Character count">10 - 20</td>
        </tr>
    </tbody>
  </table>
</rh-table>


## Layout

### Placement

A table should be the same width as nearby blocks of content on the page.

<uxdot-example width-adjustment="1000px">
  <img src="../table-layout-placement.png"
        alt="Image of examples of placeholder content and a table having the same width, one is wide and one is narrow"
        width="1000"
        height="768">
</uxdot-example>

### Scrolling

A table will scroll horizontally or vertically if content exceeds the max-width or max-height.

<uxdot-example width-adjustment="872px">
  <img src="../table-layout-scrolling.png"
        alt="Image of two tables, one with no scrolling and the other with scrolling columns and rows"
        width="872"
        height="706">
</uxdot-example>


### Logos

Logos can be used in cells along with text if necessary.

<uxdot-example width-adjustment="872px">
  <img src="../table-layout-logos.png"
        alt="Image of table with logos and links among text"
        width="872"
        height="774">
</uxdot-example>


## Behavior

### Column sorting

Columns can be sorted in ascending or descending order. Sorting controls are located in the column headers and the icon indicates the current sorted state. A sorted table has three states:

- Unsorted (both arrows visible)
- Sorted up (arrow pointing up)
- Sorted down (arrow pointing down)

<uxdot-example width-adjustment="872px">
  <img src="../table-behavior-sorting.png"
        alt="Image of tables with various sorting options"
        width="872"
        height="800">
</uxdot-example>


## Responsive design 

### Large viewport sizes 

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../table-viewport-sizes-large.png"
        alt="Image of table on large viewport sizes"
        width="1000"
        height="368">
</uxdot-example>


### Small viewport sizes 

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="../table-viewport-sizes-small.png"
        alt="Image of table on small viewport sizes"
        width="576"
        height="928">
</uxdot-example>


## Best practices

### One-column table

A table should display at least two columns.

<uxdot-example width-adjustment="872px" danger>
  <img src="../table-best-practices-1.png"
        alt="Image of table with one column which is incorrect usage"
        width="872"
        height="224">
</uxdot-example>


### Large cell height

In some edge cases, a table can have large cell height if there are more element types than just text.

<uxdot-example width-adjustment="872px" danger>
  <img src="../table-best-practices-2.png"
        alt="Image of table with lots of vertical padding which is incorrect usage"
        width="872"
        height="320">
</uxdot-example>


### Wrong size

Do not use the small viewport size table on large viewports.

<uxdot-example width-adjustment="872px" danger>
  <img src="../table-best-practices-3.png"
        alt="Image of small viewport table used on a large viewport which is incorrect usage"
        width="872"
        height="336">
</uxdot-example>

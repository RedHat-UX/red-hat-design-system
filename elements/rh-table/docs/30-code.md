### Title

Specify the title of the table using a `<caption>` element.

```html rh-code-block
<rh-table>
  <table>
    <caption>
      Concerts
    </caption>
    <!-- ...table data -->
  </table>
</rh-table>
```

### Responsive tables

`<rh-table>` will automatically reformat to a "stacked" presentation in narrow 
containers such as on small screens and mobile devices or in page sidebars. For 
simple table structures, each table cell heading will be auto-generated for its 
responsive layout.

For complex tables (i.e., including `colspan` or `rowspan` attributes), or to 
customize or override individual table cell headings on mobile devices, use a 
`data-label` attribute on the `<td>` elements to label them.

```html rh-code-block
<rh-table>
  <table>
    <caption>
      Concerts
    </caption>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th id="concerts-date" scope="col">Date</th>
        <th id="concerts-event" scope="col">Event<rh-sort-button></rh-sort-button></th>
        <th id="concerts-venue" scope="col">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="concerts-date">12 February</td>
        <td headers="concerts-event">Waltz with Strauss</td>
        <td headers="concerts-venue">Main Hall</td>
      </tr>
      <tr>
        <td headers="concerts-date">24 March</td>
        <td headers="concerts-event">The Obelisks</td>
        <td headers="concerts-venue">West Wing</td>
      </tr>
      <tr>
        <td headers="concerts-date" data-label="Custom heading 1">14 April</td>
        <td headers="concerts-event" data-label="Custom heading 2">The What</td>
        <td headers="concerts-venue" data-label="Custom heading 3">Main Hall</td>
      </tr>
    </tbody>
  </table>
  <small slot="summary">Dates and venues subject to change.</small>
</rh-table>
```

### Column highlighting

To enable column highlighting, the `<table>` element must also include a `<col>` 
element for each column in the table, typically wrapped with a `<colgroup>`.

```html rh-code-block
<rh-table>
  <table>
    <caption>
      Concerts
    </caption>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <!-- ...table with three columns -->
  </table>
</rh-table>
```

### Sorting

To enable sorting on a column, add an `<rh-sort-button>` as the last child of 
the `<th>` cell.

```html rh-code-block
<rh-table>
  <table>
    <caption>
      Concerts
    </caption>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th id="concerts-date" scope="col">Date</th>
        <th id="concerts-event" scope="col">Event<rh-sort-button></rh-sort-button></th>
        <th id="concerts-venue" scope="col">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <!-- ...table data sortable by Event and Venue -->
  </table>
</rh-table>
```

### Summary

Additional information about the data in the table should be slotted into the 
`summary` slot after the `table` element.

```html rh-code-block
<rh-table>
  <table>
    <caption>
      Concerts
    </caption>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th id="concerts-date" scope="col">Date</th>
        <th id="concerts-event" scope="col">Event<rh-sort-button></rh-sort-button></th>
        <th id="concerts-venue" scope="col">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="concerts-date">12 February</td>
        <td headers="concerts-event">Waltz with Strauss</td>
        <td headers="concerts-venue">Main Hall</td>
      </tr>
      <tr>
        <td headers="concerts-date">24 March</td>
        <td headers="concerts-event">The Obelisks</td>
        <td headers="concerts-venue">West Wing</td>
      </tr>
      <tr>
        <td headers="concerts-date">14 April</td>
        <td headers="concerts-event">The What</td>
        <td headers="concerts-venue">Main Hall</td>
      </tr>
    </tbody>
  </table>
  <small slot="summary">Dates and venues subject to change.</small>
</rh-table>
```


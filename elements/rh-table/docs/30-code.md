{% renderInstallation lightdomcss=true %}{% endrenderInstallation %}

## Usage

{% alert state="warning", title="Warning" %} Ensure that the table follows the recommendations on the [accessibility tab](../accessibility) so that the table works with assistive technology. {% endalert %}

### Title

Specify the title of the table using a `caption` element.

```html
<rh-table>
  <table>
    <caption>
      Concerts
    </caption>
    <!-- ...table data -->
  </table>
</rh-table>
```

### Column highlighting

To enable column highlighting, the `table` element must also include a `col` element for each column in the table, typically wrapped with a `colgroup`.

```html
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

To enable sorting on a column, add an `rh-sort-button` as the last child of the `th` cell.

```html
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
        <th id="concerts-date" scope="col" data-label="Date">Date</th>
        <th id="concerts-event" scope="col" data-label="Event">Event<rh-sort-button></rh-sort-button></th>
        <th id="concerts-venue" scope="col" data-label="Venue">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <!-- ...table data sortable by Event and Venue -->
  </table>
</rh-table>
```

### Summary

Additional information about the data in the table should be slotted into the `summary` slot after the `table` element.

```html
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
        <th id="concerts-date" scope="col" data-label="Date">Date</th>
        <th id="concerts-event" scope="col" data-label="Event">Event<rh-sort-button></rh-sort-button></th>
        <th id="concerts-venue" scope="col" data-label="Venue">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="concerts-date" data-label="Date">12 February</td>
        <td headers="concerts-event" data-label="Event">Waltz with Strauss</td>
        <td headers="concerts-venue" data-label="Venue">Main Hall</td>
      </tr>
      <tr>
        <td headers="concerts-date" data-label="Date">24 March</td>
        <td headers="concerts-event" data-label="Event">The Obelisks</td>
        <td headers="concerts-venue" data-label="Venue">West Wing</td>
      </tr>
      <tr>
        <td headers="concerts-date" data-label="Date">14 April</td>
        <td headers="concerts-event" data-label="Event">The What</td>
        <td headers="concerts-venue" data-label="Venue">Main Hall</td>
      </tr>
    </tbody>
  </table>
  <small slot="summary">Dates and venues subject to change.</small>
</rh-table>
```

## Example

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
        <th id="concerts-date" scope="col" data-label="Date">Date</th>
        <th id="concerts-event" scope="col" data-label="Event">Event<rh-sort-button></rh-sort-button></th>
        <th id="concerts-venue" scope="col" data-label="Venue">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="concerts-date" data-label="Date">12 February</td>
        <td headers="concerts-event" data-label="Event">Waltz with Strauss</td>
        <td headers="concerts-venue" data-label="Venue">Main Hall</td>
      </tr>
      <tr>
        <td headers="concerts-date" data-label="Date">24 March</td>
        <td headers="concerts-event" data-label="Event">The Obelisks</td>
        <td headers="concerts-venue" data-label="Venue">West Wing</td>
      </tr>
      <tr>
        <td headers="concerts-date" data-label="Date">14 April</td>
        <td headers="concerts-event" data-label="Event">The What</td>
        <td headers="concerts-venue" data-label="Venue">Main Hall</td>
      </tr>
    </tbody>
  </table>
  <small slot="summary">Dates and venues subject to change.</small>
</rh-table>


{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

# Table

A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.

## Usage

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
        <th scope="col" data-label="Date">Date</th>
        <th scope="col" data-label="Event">Event<rh-sort-button></rh-sort-button></th>
        <th scope="col" data-label="Venue">Venue<rh-sort-button></rh-sort-button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Date">12 February</td>
        <td data-label="Event">
          <a href="#">Waltz with Strauss</a>
        </td>
        <td data-label="Venue">Main Hall</td>
      </tr>
      <tr>
        <td data-label="Date">24 March</td>
        <td data-label="Event">The Obelisks</td>
        <td data-label="Venue">West Wing</td>
      </tr>
      <tr>
        <td data-label="Date">14 April</td>
        <td data-label="Event">The What</td>
        <td data-label="Venue">Main Hall</td>
      </tr>
    </tbody>
  </table>
  <small slot="summary">Dates and venues subject to change.</small>
</rh-table>
```

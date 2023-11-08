## Markup Guidance

{% alert state="warning", title="Warning" %} Tables are strictly intended for tabular data, and should never be used for layout purposes. {% endalert %}

Since tables are inherently complex HTML structures, they can create barriers for users and assistive technologies ([View WCAG guidelines](#web-content-accessibility-guidelines)) if their markup does not clearly define the relationships within the tabular data. Therefore, it is essential for tables to contain as much context as possible through the application of appropriate structural markup.

### Minimum requirements

- Column titles (or headers) must use `<th>` elements with `scope="col"` attributes
- Row titles (or headers) must use `<th>` elements with `scope="row"` attributes

### Further guidance

- Use `id` and `headers` attributes to associate data cells with their table headers
- Add a `<caption>` element for brief descriptive text
- Define sections with `thead` and `tbody` (and optionally `tfoot` for larger tables)

### Example markup

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
        <th id="concerts-event" scope="col" data-label="Event">Event</th>
        <th id="concerts-venue" scope="col" data-label="Venue">Venue</th>
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
</rh-table>
```

## Keyboard interactions

If a table is in a container that can receive keyboard focus (e.g., with a `tabindex="0"` attribute), then a user can place focus on the container and scroll the table horizontally or vertically using the arrow keys.

{% example palette="light",
           alt="Image of table with scrollbars and purple buttons showing keyboard navigation",
           src="../table-a11y-keyboard-navigation.png" %}

<rh-table>
  <table>
    <colgroup>
        <col style="width: 25%">
        <col />
    </colgroup>
    <thead>
      <tr>
        <th data-label="Key" scope="col">Key</th>
        <th data-label="Result" scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Key">Up Arrow</td>
            <td data-label="Result">Moves the table view up</td>
        </tr>
        <tr>
            <td data-label="Key">Left Arrow</td>
            <td data-label="Result">Moves the table view left</td>
        </tr>
        <tr>
            <td data-label="Key">Right Arrow</td>
            <td data-label="Result">Moves the table view right</td>
        </tr>
        <tr>
            <td data-label="Key">Down Arrow</td>
            <td data-label="Result">Moves the table view down</td>
        </tr>
        <tr>
            <td data-label="Key">Tab</td>
            <td data-label="Result">Moves focus to next interactive element within a cell or outside of the table</td>
        </tr>
        <tr>
            <td data-label="Key">Shift+Tab</td>
            <td data-label="Result">Moves focus to previous interactive element within a cell or outside of the table</td>
        </tr>
    </tbody>
  </table>
</rh-table>

<!-- | Key {style="width: 25%" } | Result                                                                            |
| ------------------------- | --------------------------------------------------------------------------------- |
| Up Arrow                  | Moves the table view up                                                           |
| Left Arrow                | Moves the table view left                                                         |
| Right Arrow               | Moves the table view right                                                        |
| Down Arrow                | Moves the table view down                                                         |
| Tab                       | Moves focus to next interactive element within a cell or outside of the table     |
| Shift+Tab                 | Moves focus to previous interactive element within a cell or outside of the table | -->

## Focus order

A logical focus order helps keyboard users operate our websites and apps. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. Focus within a table moves from top to bottom and left to right.

{% example palette="light",
           alt="Image of table with links, focus indicators, and numbers showing the focus order",
           src="../table-a11y-focus-order.png" %}

## Touch targets

Each cell includes enough spacing for selecting interactive elements.

{% example palette="light",
           alt="Image of table with links and focus indicators showing touch target size",
           src="../table-a11y-touch-targets.png" %}

## Additional guidelines

- No column title cells should be blank
- Each cell should only have one piece of data
- Do not place multiple inactive elements in a single cell

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/1.3.1-A.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}

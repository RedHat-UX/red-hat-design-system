## Markup Guidance

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Tables are strictly intended for tabular data, and should never be used for layout purposes.</p>
</rh-alert>


Since tables are inherently complex HTML structures, they can create barriers for users and assistive technologies ([View WCAG guidelines](#web-content-accessibility-guidelines)) if their markup does not clearly define the relationships within the tabular data. Therefore, it is essential for tables to contain as much context as possible through the application of appropriate structural markup.

### Minimum requirements

- Column titles (or headers) must use `<th>` elements with `scope="col"` attributes ([WCAG technique H63](https://www.w3.org/WAI/WCAG21/Techniques/html/H63))
- Row titles (or headers) must use `<th>` elements with `scope="row"` attributes ([WCAG technique H63](https://www.w3.org/WAI/WCAG21/Techniques/html/H63))
- Add a `<caption>` element to title a table and help users identify its purpose ([WCAG technique H39](https://www.w3.org/WAI/WCAG21/Techniques/html/H39))

### Further guidance

- Use `id` and `headers` attributes to associate data cells with their table headers in complex tables ([WCAG technique H43](https://www.w3.org/WAI/WCAG21/Techniques/html/H43))
- Define sections with `<thead>` and `<tbody>` (and optionally `<tfoot>` for larger tables)

### Example markup

```html rhcodeblock
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
        <th id="concerts-event" scope="col">Event</th>
        <th id="concerts-venue" scope="col">Venue</th>
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
</rh-table>
```

## Keyboard interactions

If a table is in a container that can receive keyboard focus (e.g., with a `tabindex="0"` attribute), then a user can place focus on the container and scroll the table horizontally or vertically using the arrow keys.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with scrollbars and purple buttons showing keyboard navigation"
       src="../table-a11y-keyboard-navigation.png"
       width="872"
       height="236">
</uxdot-example>

<style data-helmet>.keypress-table col:first-child { width: 25%; }</style>
<rh-table class="keypress-table">

| Key                             | Result                                                                            |
| ------------------------------- | --------------------------------------------------------------------------------- |
| <kbd>Up Arrow</kbd>             | Moves the table view up                                                           |
| <kbd>Left Arrow</kbd>           | Moves the table view left                                                         |
| <kbd>Right Arrow</kbd>          | Moves the table view right                                                        |
| <kbd>Down Arrow</kbd>           | Moves the table view down                                                         |
| <kbd>Tab</kbd>                  | Moves focus to next interactive element within a cell or outside of the table     |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | Moves focus to previous interactive element within a cell or outside of the table |

Table: Keyboard interactions

</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites and apps. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. Focus within a table moves from top to bottom and left to right.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with links, focus indicators, and numbers showing the focus order"
       src="../table-a11y-focus-order.avif"
       width="872"
       height="280">
</uxdot-example>


## Touch targets

Each cell includes enough spacing for selecting interactive elements.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of table with links and focus indicators showing touch target size"
       src="../table-a11y-touch-targets.avif"
       width="872"
       height="280">
</uxdot-example>


## Additional guidelines

- No column title (or header) cells should be blank
- Each cell should only have one piece of data
- Avoid merged cells. When possible consider breaking a complex table into a series of simpler tables
- Do not place multiple inactive elements in a single cell

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.3.1-A.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

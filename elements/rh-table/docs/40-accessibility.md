## Keyboard interactions

If a table is in a container that can receive keyboard focus (e.g., with a `tabindex="0"` attribute), then a user can place focus on the container and scroll the table horizontally or vertically using the arrow keys.

{% example palette="light",
           alt="Image of table with scrollbars and purple buttons showing keyboard navigation",
           src="../table-a11y-keyboard-navigation.png" %}

<rh-table>
  <table>
    <colgroup>
        <col style="width: 25%" />
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
- Column titles must use `<th>` elements with `scope="col"` attributes
- Each cell should only have one piece of data
- Do not place multiple inactive elements in a single cell

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
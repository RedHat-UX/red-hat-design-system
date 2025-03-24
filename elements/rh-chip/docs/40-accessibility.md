## Implementation

Ensure that any interactive elements can be navigated to and interacted with using a keyboard or other assistive technologies like a screen reader.

## Accessible label

You can provide an accessible label to a chip group by using the following code. If no accessible label is provided, the legend will be `Filter by:`.

```html rh-code-block
<rh-chip-group accessible-label="Filter comments">...</rh-chip-group>
```

## Keyboard Interaction

Chips in a chip group can be can be navigated with a keyboard.

<uxdot-example color-palette="lightest">
  <img src="../chip-a11y-keyboard-interactions.svg"
        alt="Four chips and a clear all button. All show the focus outline around the chip text. The legend exists on the left."
        width="720"
        height="42">
</uxdot-example>

<rh-table>
  <table>
    <caption class="visually-hidden">Announcement keyboard navigation behavior</caption>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus left to right to the next chip (unless it is disabled)</li>
            <li>Focus moves outside</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Shift + Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus right to left to the previous chip (unless it is disabled)</li>
            <li>Focus moves outside</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd></td>
        <td>
          <ul>
            <li>Selects or unselects a chip</li>
            <li>Unselects all chips if the focus is on the Clear all button</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

Focus moves from left to right and top to bottom when chips are stacked.

<uxdot-example color-palette="lightest">
  <img src="../chip-a11y-focus-order.svg"
        alt="Two rows of four chips showing numbers above each chip. The chips are numbered 1-4 in each row, showing the focus order from left to right."
        width="720"
        height="182">
</uxdot-example>

## Touch targets

Even with a few letters each, chips are adequately spaced for optimal touch targets.

<uxdot-example color-palette="lightest">
  <img src="../chip-a11y-touch-targets.svg"
        alt="Two rows of chips with five chips each. Overtop of each chip is a semitransparent circle showing the touch target."
        width="602"
        height="152">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

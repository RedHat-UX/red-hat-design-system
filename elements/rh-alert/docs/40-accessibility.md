
## Keyboard interactions

A user should have the ability to navigate to and interact with alerts using their keyboard.

<uxdot-example width-adjustment="456px">
  <img src="../alert-a11y-keyboard-interactions.svg" alt="Example of the keyboard navigation tab stops on both inline and toast variant alerts">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key">Key</th>
        <th scope="col" data-label="Result">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key">Tab</td>
        <td data-label="Result">Moves the focus to the Close button or to the next interactive element</td>
      </tr>
      <tr>
        <td data-label="Key">Shift + Tab</td>
        <td data-label="Result">Moves the focus outside of the component or to the previous interactive element</td>
      </tr>
      <tr>
        <td data-label="Key">Enter</td>
        <td data-label="Result">Selects the Close button or button link with focus</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps users understand and operate our websites and products. Elements need to receive focus in an order that preserves meaning. Therefore the focus order should make sense and not jump around randomly.

<uxdot-example width-adjustment="456px">
  <img src="../alert-a11y-focus-order.svg" alt="Focus goes to action buttons and to the close button last" width="490px">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

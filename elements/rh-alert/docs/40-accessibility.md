## Keyboard interactions

A user should have the ability to navigate to and interact with alerts using their keyboard.

<uxdot-example width-adjustment="456px">
  <img src="../alert-a11y-keyboard-interactions.svg" 
      alt="Example of the keyboard navigation tab stops on both inline and toast variant alerts"
      width="456"
      height="276">
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
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the next interactive element (e.g., from the close button to the first action button in the alert)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the previous interactive element (e.g., from the first action button in the alert back to the close button)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Selects the close button, an action button, or link/td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps users understand and operate our websites and products. Elements need to receive focus in an order that preserves meaning. Therefore the focus order should make sense and not jump around randomly.

<uxdot-example width-adjustment="456px">
  <img src="../alert-a11y-focus-order.svg" 
      alt="Focus goes to action buttons and to the close button last" 
      width="456"
      height="276">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

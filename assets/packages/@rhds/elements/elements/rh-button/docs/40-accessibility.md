## Implementation

 - Ensure a button can be navigated to and interacted with via keyboard and other 
assistive technologies
 - Provide unique and descriptive text content for a button or an aria-label if the 
button does not contain visible text
 - Provide context that a link will open in a new tab or window when using a button 
link
 - Do not place other interactive elements within a button

## Keyboard interactions

Users should have the ability to navigate to and interact with buttons using their keyboard.

<uxdot-example width-adjustment="302px">
  <img src="../button-a11y-keyboard-interactions.png"
        alt="Image of a button group showing focus indicators and tab key labels"
        width="302"
        height="99">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key" style="width: 50%">Key</th>
        <th scope="col" data-label="Result">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the next button or interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the previous button or interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Activates an action</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

{% include 'partials/accessibility/focusorder.md' %} For buttons in groups, the focus order is from left to right and top to bottom when stacked. Disabled buttons are not included in the focus order unless they include the `aria-disabled=“true”` attribute and display a [tooltip](/elements/tooltip) when focused.

<uxdot-example width-adjustment="509px">
  <img src="../button-a11y-focus-order.png"
        alt="Image of rows of button groups with numbers; one row has focus indicators only and the other has focus indicators and a tooltip"
        width="509"
        height="215">
</uxdot-example>

## Touch targets
Buttons in groups are adequately spaced for optimal touch targets.

<uxdot-example width-adjustment="298px">
  <img src="../button-a11y-touch-targets.png"
        alt="Image of button group with touch targets on top of each button"
        width="298"
        height="44">
</uxdot-example>

## Screen reader guidelines

Buttons should communicate the following to users:
 - Their intended purpose or function
 - The toggle state if it has two states
 - An instruction that a menu will open

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

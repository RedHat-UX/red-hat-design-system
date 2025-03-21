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

<uxdot-example color-palette="lightest" width-adjustment="302px">
  <img alt="Image of a button group showing focus indicators and tab key labels"
       src="../button-a11y-keyboard-interactions.png"
       width="302"
       height="99">
</uxdot-example>

<style data-helmet>.keyboard-table thead th:first-of-type { width: 50%; }</style>

<rh-table class="keyboard-table">

| Key                               | Result                                                    |
| --------------------------------- | --------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to the next button or interactive element     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous button or interactive element |
| <kbd>Enter</kbd>                  | Activates an action                                       |

</rh-table>

## Focus order

{% include 'partials/accessibility/focusorder.md' %} For buttons in groups, the focus order is from left to right and top to bottom when stacked. Disabled buttons are not included in the focus order unless they include the `aria-disabled=“true”` attribute and display a [tooltip](/elements/tooltip) when focused.

<uxdot-example color-palette="lightest" width-adjustment="509px">
  <img alt="Image of rows of button groups with numbers; one row has focus indicators only and the other has focus indicators and a tooltip"
       src="../button-a11y-focus-order.png"
       width="509"
       height="215">
</uxdot-example>

## Touch targets
Buttons in groups are adequately spaced for optimal touch targets.

<uxdot-example color-palette="lightest" width-adjustment="298px">
  <img alt="Image of button group with touch targets on top of each button"
       src="../button-a11y-touch-targets.png"
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

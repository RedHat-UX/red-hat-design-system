## Screen reader guidelines

A progress stepper should communicate the following to screen reader users:

  - That the step items compose a list
  - Labels for each step even when there is no visible text label
  - The state of each step
  - When a step is marked as the current step

## Keyboard interactions

Any linked titles in a progress stepper can be navigated with a keyboard.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-accessibility-keyboard-interactions.svg"
        alt="A progress stepper with two linked, completed steps, one linked current step, and an unlinked step that hasn't been completed yet. Each linked step shows a focus ring with an annotation that says, 'Tab.'"
        width="564"
        height="115">
</uxdot-example>

<rh-table>

  | Key                    | Result                                               |
  | ---------------------- | -----------------------------------------------------|
  | <kbd>Tab</kbd>         | Moves focus to a linked progress step title          |
  | <kbd>Shift + Tab</kbd> | Moves focus to a previous linked progress step title |
  | <kbd>Enter</kbd>       | Activates a linked title                             |

</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. In a progress stepper with linked titles, focus moves from left to right or top to bottom.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-accessibility-focus-order.svg"
        alt="A progress stepper with two linked, completed steps, one linked current step, and an unlinked step that hasn't been completed yet. The first link is numbered 1, the second completed link is numbered 2, and the current step is numbered 3."
        width="564"
        height="89">
</uxdot-example>


{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

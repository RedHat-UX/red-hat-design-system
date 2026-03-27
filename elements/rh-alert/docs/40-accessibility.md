## Keyboard interactions

A user should have the ability to navigate to and interact with alerts using their keyboard.

<uxdot-example color-palette="lightest" width-adjustment="456px">
  <img alt="Example of the keyboard navigation tab stops on both inline and toast variant alerts"
       src="../alert-a11y-keyboard-interactions.svg"
       width="456"
       height="276">
</uxdot-example>

<rh-table>

| Key                               | Result                                                                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to the next interactive element (e.g., from the close button to the first action button in the alert)          |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous interactive element (e.g., from the first action button in the alert back to the close button) |
| <kbd>Enter</kbd>                  | Selects the close button, an action button, or link                                                                        |

</rh-table>

## Focus order

A logical focus order helps users understand and operate our websites and products. Elements need to receive focus in an order that preserves meaning. Therefore the focus order should make sense and not jump around randomly.

<uxdot-example color-palette="lightest" width-adjustment="456px">
  <img alt="Focus goes to action buttons and to the close button last"
       src="../alert-a11y-focus-order.svg"
       width="456"
       height="276">
</uxdot-example>

## Toasts

<rh-alert state="caution">
  <h3 slot="header">Accessibility considerations</h3>
  <p>There are accessibility considerations to keep in mind when using toasts. See our <a href="/patterns/alert/accessibility/">toast pattern accessibility guidelines</a> for more information.</p>
</rh-alert>

Toasts created with `RhAlert.toast()` are not the same as inline alerts in how
assistive technology exposes them:

The toast container uses `role="status"` and `aria-live="polite"`, so updates
are announced as polite status messages, not as an interrupting `role="alert"`. 
Inline alerts use `role="alert"` on the alert surface. Do not assume a toast 
has the same urgency or immediacy as an inline alert.

Toasts render inside a single "toaster" region appended to `document.body`, not
next to the control that triggered them. That separation affects reading order
and discovery ([WCAG 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)).
Design mitigations (when to use a toast, persistence, redundant in-context feedback)
are covered on [toast Alert pattern — Accessibility](/patterns/alert/accessibility/).

`RhAlert.toast()` does not move keyboard focus into the toast when it appears.
Many screen reader users will still hear the announcement; sighted keyboard
users must <kbd>Tab</kbd> to the toast to reach the dismiss control and any
actions.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

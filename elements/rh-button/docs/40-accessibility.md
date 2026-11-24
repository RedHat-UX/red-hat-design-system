## Implementation

 - Ensure a button can be navigated to and interacted with via keyboard and other 
assistive technologies
 - Provide unique and descriptive text content for a button. Set `accessible-label` on an
icon-only `<rh-button>` to provide its accessible name.
 - Provide context that a link will open in a new tab or window when using a button 
link
 - Do not place other interactive elements within a button

The accessible control is the native button inside the shadow root. These attributes
may be set on `<rh-button>` and are forwarded to that button:

 - `accessible-label` or `aria-label` sets the accessible name. Prefer `accessible-label`.
 - `aria-expanded` sets whether the controlled region is expanded (`true` or `false`).
 - `aria-pressed` sets the toggle state (`true`, `false`, or `mixed`).
 - `aria-haspopup` tells assistive technology what the button opens, for example
`menu` or `dialog`.
 - `aria-controls` is the id of the element this button controls.
 - `aria-labelledby` and `aria-describedby` are the ids of elements that name or
describe the button.
 - `aria-description` sets the accessible description.

```html rh-code-block
<rh-button variant="primary"
           icon="robot"
           accessible-label="Ask AI"
           aria-expanded="false"
           aria-controls="drawer-panel"></rh-button>
<div id="drawer-panel">Panel content</div>
```

The host element has no role, so these attributes are removed from `<rh-button>` after
they are read: `aria-expanded`, `aria-pressed`, `aria-haspopup`, `aria-label`,
`aria-description`, `aria-controls`, `aria-labelledby`, and `aria-describedby`.
Read or update them through the properties (`ariaExpanded`, `ariaPressed`,
`ariaHasPopup`, `ariaLabel`, `ariaDescription`, `ariaControls`, `ariaLabelledBy`,
and `ariaDescribedBy`). Clear a value by setting the property to `null`.
`aria-expanded`, `aria-pressed`, `aria-haspopup`, `aria-label`, and
`aria-description` are copied onto the internal button.

`aria-controls` and `aria-describedby` are copied onto the internal button as the
author's ids. Element reflection would replace a cross-root id with an empty
attribute, so those two keep the id string. Referenced description text is also
applied as `aria-description`, because an id inside the shadow tree cannot point at
the host's document. An id that matches an internal slot, such as `text` or `icon`,
is not copied.

`aria-labelledby` uses element reflection where the browser supports
`ariaLabelledByElements`. Elsewhere the referenced text becomes `aria-label`.

Referenced labels win over `aria-label`, and referenced descriptions win over
`aria-description`. `accessible-label` is the supported name for an icon-only button
and wins over both. Hidden descendants are excluded, as they are from accessible name
computation. Those references are watched while the button is connected, including
targets in ancestor roots, targets that are inserted later, text that changes
afterward, and a button that is disconnected and connected again.

A button that does not set these references does not get an empty `aria-controls`,
`aria-labelledby`, or `aria-describedby` on the internal button.

Server rendering cannot resolve the ids. Slotted text is used as the name until
hydration. An icon-only button that is named only by `aria-labelledby` has no name in
server-rendered markup, so set `accessible-label` as well.

`disabled` still sets `aria-disabled` on the internal button. The `label` attribute
is not supported; use `accessible-label`.

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

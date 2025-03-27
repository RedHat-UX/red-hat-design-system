## Keyboard interactions

Users should have the ability to navigate to and interact with calls to action using their keyboard.

<uxdot-example color-palette="lightest" width-adjustment="586px">
  <img src="../cta-a11y-keyboard-interactions.png"
        alt="Image of three groups with different variants showing focus indicators and tab key labels"
        width="586"
        height="474">
</uxdot-example>

<rh-table>

| Key                  | Result                                                            |
| -------------------- | ----------------------------------------------------------------- |
| <kbd>Tab</kbd>       | Moves focus to the next call to action or interactive element     |
| <kbd>Shift+Tab</kbd> | Moves focus to the previous call to action or interactive element |
| <kbd>Enter</kbd>     | Activates a link                                                  |
| <kbd>Enter</kbd>     | Hides or reveals a panel below a Brick variant                    |

</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. For grouped calls to action, the focus order is from left to right and top to bottom.

<uxdot-example color-palette="lightest" width-adjustment="489px">
  <img src="../cta-a11y-focus-order.png"
        alt="Image of groups of three variants with numbers one through three moving from left to right and top to bottom"
        width="489"
        height="363">
</uxdot-example>

## Touch targets

Grouped calls to action are adequately spaced for optimal touch targets.

<uxdot-example color-palette="lightest" width-adjustment="474px">
  <img src="../cta-a11y-touch-targets.png"
        alt="Image of groups of variants with touch targets on top of each"
        width="474"
        height="323">
</uxdot-example>

## Screen reader guidelines

Calls to action should communicate the following to users:
- Their intended purpose or function
- The toggle state when a panel is hidden or visible
- An instruction that a panel will open

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

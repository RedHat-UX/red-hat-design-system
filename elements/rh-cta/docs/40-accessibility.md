## Keyboard interactions

Every call to action style and variant must be able to receive focus and be navigated with a keyboard.

<uxdot-example color-palette="lightest" width-adjustment="574px">
  <img src="../cta-a11y-keyboard-interactions.svg"
        alt="The four different CTAs, each showing a blue focus ring around it and the words 'Tab' underneath."
        width="574"
        height="103">
</uxdot-example>

<rh-table>

| Key                  | Result                                                            |
| -------------------- | ----------------------------------------------------------------- |
| <kbd>Tab</kbd>       | Moves focus to the next call to action or interactive element     |
| <kbd>Shift+Tab</kbd> | Moves focus to the previous call to action or interactive element |
| <kbd>Enter</kbd>/<kbd>Return</kbd>     | Activates a link                                |

</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. For grouped calls to action, the focus order is left to right and top to bottom.

<uxdot-example color-palette="lightest" width-adjustment="906px">
  <img src="../cta-a11y-focus-order.svg"
        alt="Two Groups of three variants with numbers one through three moving from left to right and top to bottom"
        width="906"
        height="238">
</uxdot-example>

## Touch targets

The large containers and large text size make calls to action easy to select.

<uxdot-example color-palette="lightest" width-adjustment="568px">
  <img src="../cta-a11y-touch-targets.svg"
        alt="Groups of variants with touch targets centered on top of each"
        width="568"
        height="56">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

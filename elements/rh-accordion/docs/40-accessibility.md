## Keyboard interactions
Each panel is a focus stop where `Enter` or `Space` expands or collapses each panel.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Accordion keyboard interactions; pressing Tab will focus the top panel, pressing Tab again will move focus to the next panel underneath, and pressing Enter or Space will expand the panel"
       src="../accordion-keyboard-interactions.png"
       width="872"
       height="357">
</uxdot-example>

<rh-table>

| Key                               | Result                            |
| --------------------------------- | --------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to the next panel     |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>   | Moves focus to the previous panel |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Expands or collapses a panel      |

</rh-table>

## Focus order

{% include 'partials/accessibility/focusorder.md' %}

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Accordion showing the order how focus moves through the element when pressing Tab continuously"
       src="../accordion-focus-order.png"
       width="872"
       height="316">
</uxdot-example>

## Touch targets
Each panel is selectable instead of only title text or the chevrons.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Accordion showing touch target size examples for large and small sizes"
       src="../accordion-touch-targets.png"
       width="872"
       height="536">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}

{% include 'partials/accessibility/2.1.3-AAA.md' %}

{% include 'partials/accessibility/2.4.3-A.md' %}

{% include 'partials/accessibility/2.5.5-AAA.md' %}

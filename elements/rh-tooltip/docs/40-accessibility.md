## Keyboard interactions

A tooltip will appear when the trigger receives focus and disappear when moving focus away from the trigger.

<uxdot-example color-palette="lightest" width-adjustment="315px">
  <img alt="Tooltip keyboard interactions; pressing tab to focus the trigger will show the tooltip, but pressing tab again will hide the tooltip"
       src="../tooltip-keyboard-interactions.png"
       width="315"
       height="153">
</uxdot-example>

<rh-table>

| Key            | Result                                                       |
| -------------- | ------------------------------------------------------------ |
| <kbd>Tab</kbd> | Moves focus to the trigger, tooltip appears                  |
| <kbd>Tab</kbd> | Moves focus away from the trigger, tooltip disappears        |
| <kbd>Esc</kbd> | Removes a tooltip without moving focus away from the trigger |

</rh-table>

## Additional guidelines
 - Do not use a tooltip on static elements
 - A tooltip should persist while hovering over the trigger and tooltip
 - A tooltip should persist as long as the trigger has focus
 - Users navigating via screen reader must have tooltip text announced to them when it is triggered
 - If a tooltip is added to a disabled trigger, that trigger must be able to receive focus

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

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

 ## Silent tooltips

 If you add the [`silent` attribute](/elements/tooltip/code/#rh-tooltip-attributes) to an `<rh-tooltip>`, the content inside the tooltip is no longer accessible. Implementors should take special care when adding this attribute to:

 1. Implement accessible tooltip content by some other means: 
     * `aria-labelledby`
     * `aria-label`
     * ARIA live region
     * visually hidden text
     * ...or other accessibility feature
 1. Test their custom implementation to make sure the tooltip content can be recognized by assistive technologies—especially screen readers.

 To see an example of the `silent` attribute and how to implement it with accessible content, view the [Silent demo](/elements/tooltip/demo/silent/). In that demo, the `accessible-label` attribute is added to `<rh-icon>` to make the tooltip content accessible to assistive technology.

 It's exceedingly rare that users would need to use this attribute. Exercise caution when implementing and test extensively.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

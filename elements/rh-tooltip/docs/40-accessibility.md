## Keyboard interactions 
A tooltip will appear when the trigger receives focus and disappear when moving focus away from the trigger.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="tooltip interaction",
          src="../tooltip-keyboard-interactions.png" %}

<hr>

| Key | Result |
| --- | ------ |
| Tab | Moves focus to the trigger, tooltip appears |
| Tab | Moves focus away from the trigger, tooltip disappears |
| Esc | Removes a tooltip without moving focus away from the trigger |


## Additional guidelines 
- Do not use a tooltip on static elements
- A tooltip should persist while hovering over the trigger and tooltip
- A tooltip should persist as long as the trigger has focus
- Users navigating via screen reader must have tooltip text announced to them when it is triggered
- If a tooltip is added to a disabled trigger, that trigger must be able to receive focus

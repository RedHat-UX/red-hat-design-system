## Keyboard interactions
Each panel is a focus stop where `Enter` or `Space` expands or collapses each panel.

{% example palette="light",
          alt="Accordion keyboard interactions; pressing Tab will focus the top panel, pressing Tab again will move focus to the next panel underneath, and pressing Enter or Space will expand the panel",
          src="../accordion-keyboard-interactions.png" %}

| Key                               | Result                            |
| --------------------------------- | --------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to the next panel     |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>   | Moves focus to the previous panel |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Expands or collapses a panel      |

## Focus order
{% include 'accessibility/focusorder.md' %}

{% example palette="light",
          alt="Accordion showing the order how focus moves through the element when pressing Tab continuously",
          src="../accordion-focus-order.png" %}


## Touch targets
Each panel is selectable instead of only title text or the chevrons.

{% example palette="light",
          alt="Accordion showing touch target size examples for large and small sizes",
          src="../accordion-touch-targets.png" %}

{% include 'accessibility/ariaguide.md' %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
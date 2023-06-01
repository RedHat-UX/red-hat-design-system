## Keyboard interactions
Each panel is a focus stop where `Enter` or `Space` expands or collapses each panel.

{% example palette="light",
          alt="",
          src="./accordion-keyboard-interactions.pngAccordion keyboard interactions; pressing Tab will focus the top panel, pressing Tab again will move focus to the next panel underneath, and pressing Enter or Space will expand the panel" %}

| Key         | Result                            |
| ----------- | --------------------------------- |
| Tab         | Moves focus to the next panel     |
| Shift+Tab   | Moves focus to the previous panel |
| Enter/Space | Expands or collapses a panel      |

## Focus order
{% include 'accessibility/focusorder.md' %}

{% example palette="light",
          alt="",
          src="./accordion-focus-order.pngAccordion showing the order how focus moves through the element when pressing Tab continuously" %}


## Touch targets
Each panel is selectable instead of only title text or the chevrons.

{% example palette="light",
          alt="",
          src="./accordion-touch-targets.pngAccordion showing touch target size examples for large and small sizes" %}

{% include 'accessibility/ariaguide.md' %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
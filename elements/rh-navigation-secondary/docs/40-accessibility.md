

## Keyboard interactions

  All elements within a secondary navigation are focus stops. Pressing <code>Enter</code> when a menu has focus will expand or collapse it. Otherwise, users will be directed to a new page. If the height of the menu is taller than the viewport height due to lots of content, focus is trapped within the panel until the menu is collapsed.

  {% example palette="light",
      alt="Image of secondary navigations with diagrams of what happens when Tab or Enter keys are pressed",
      src="../nav-secondary-a11y-keyboard-interactions.png" %}

### Keyboard events

  | Action          | Event {style="width: 66%;"}                                |
  | --------------- | ---------------------------------------------------------- |
  | Tab             | Moves focus to the next interactive element (including a menu) |
  | Shift + Tab     | Moves focus to the previous interactive element (including a menu) |
  | Enter (when a link has focus) | Directs user to another page                 |
  | Enter (when a menu has focus) | Expands or collapses a menu without moving focus |
  | Enter (when a menu has focus) | Collapses an expanded menu without moving focus |
  | Esc   (when a menu is expanded) | Collapses the expanded menu                   |


## Focus order
{% include 'accessibility/focusorder.md' %}

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}

{% include 'accessibility/2.1.1-A.md' %}

{% include 'accessibility/2.1.3-AAA.md' %}

{% include 'accessibility/2.4.3-A.md' %}

{% include 'accessibility/2.5.5-AAA.md' %}
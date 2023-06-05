## Keyboard interactions 
Most elements in a footer are links, so users can press `Tab` to navigate from region to region.

| Key {style="width: 33%" } | Result                                                         |
| ------------------------- | -------------------------------------------------------------- |
| <kbd>Tab</kbd>            | Moves the focus to the next interactive element or section     |
| <kbd>Shift</kdb>+<kbd>Tab</kbd>      | Moves the focus to the previous interactive element or section |
| <kbd>Enter</kbd>          | Opens or closes the language selector menu                     |
| <kbd>Esc</kbd>            | Closes the language selector menu if a language has focus      |

## Focus order 
A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. The focus moves across regions of a footer from left to right and top to bottom.

{% alert title="Helpful tip" %}
Users can skip opening the language selector menu, but the trigger still receives focus.
{% endalert %}

{% example palette="none",
          alt="Image of a footer showing groups of focus indicators in different regions with annotation numbers",
          src="../footer-a11y-focus-order.png" %}

### Language selector
Users can open the language selector menu by pressing `Enter` if the trigger has focus. If they do, they can press `Tab` to move focus to the first language. Each language can receive focus from left to right and top to bottom.

{% example palette="none",
          alt="Image of a footer with the language selector menu open showing the focus order of languages",
          src="../footer-a11y-language-selector-a.png" %}


When the focus is moved outside of the menu, the menu closes.

{% example palette="none",
          alt="Image of a footer with the language selector menu open showing the menu closing when focus is moved",
          src="../footer-a11y-language-selector-b.png" %}

## Additional guidelines
- Content outside of a dialog cannot be interacted with or navigated to while the dialog is open
- The `Escape` key should close the dialog
- There should be at least one clickable button that closes the dialog
- Long dialog content can still receive focus via keyboard if it overflows and a scrollbar appears
- When a dialog closes, focus should return to the last focused item before the dialog was opened


{% include 'accessibility/ariaguide.md' %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
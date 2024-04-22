## Keyboard navigation

Users should have the ability to navigate to and interact with the back to top button using their keyboard.

{% example palette="light",
           class="centered",
           alt="Example of a page with footer links and a back to top button that has keyboard interaction annotations",
           src="../back-to-top-keyboard-nav.png" %}

| Key {style="width: 33%" } | Result                                                                                         |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>            | Shifts focus to the back to top button                                              |
| <kbd>Shift + Tab</kbd>    | Shifts focus to a previous interactive element     |
| <kbd>Enter</kbd>          | Activates the back to top button and moves focus to the first interactive element on the page                                   |

## Focus order

As long as the back to top button is only at the bottom of the page, it should be the last interactive element on the page to receive focus.

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/1.2.1-A.md' %}
{% include 'accessibility/1.2.2-A.md' %}
{% include 'accessibility/1.4.1-A.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
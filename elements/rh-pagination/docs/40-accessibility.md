
## Keyboard interactions
The buttons, page input field, and last page link all have keyboard interactions when the `Enter` key is pressed.

{% example palette="light",
           alt="Image of paginations with diagrams of what happens when Tab or Enter keys are pressed",
           src="../pagination-a11y-keyboard-interactions.png" %} 

| Key                                     | Result                                                  |
| --------------------------------------- | ------------------------------------------------------- |
| Tab                                     | Moves focus to the right (not including truncation)     |
| Shift+Tab                               | Moves focus to the left (not including truncation)      |
| Enter (when a button has focus)         | Selects a control or changes an inactive page to active |
| Enter (when a new page number is typed) | Navigates users to the page number that is typed        |
| Enter (when last page link has focus)   | Navigates users to the last page                        |



## Focus order
{% include 'accessibility/focusorder.md' %}

{% example palette="light",
           alt="Image of paginations showing the focus order from left to right and top to bottom",
           src="../pagination-a11y-focus-order.png" %}  


## Touch targets
Buttons, page field input, and last page link are adequately spaced for optimal touch targets.

{% example palette="light",
           alt="Image of paginations with elements showing adequate touch target spacing",
           src="../pagination-a11y-touch-targets.png" %}  



## Additional guidelines

* The active page must be conveyed to assistive technologies
* Icon only buttons must have accessible names for assistive technologies

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}

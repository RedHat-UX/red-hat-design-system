{% section %}

## Keyboard interactions

The buttons, page input field, and last page link all have keyboard interactions when the `Enter` key is pressed.

{% example palette="light",
           width=833,
           alt="Image of paginations with diagrams of what happens when Tab or Enter keys are pressed",
           src="../pagination-a11y-keyboard-interactions.png" %} 

| Key                                     | Result                                                  |
| --------------------------------------- | ------------------------------------------------------- |
| Tab                                     | Moves focus to the right (not including truncation)     |
| Shift+Tab                               | Moves focus to the left (not including truncation)      |
| Enter (when a button has focus)         | Selects a control or changes an inactive page to active |
| Enter (when a new page number is typed) | Navigates users to the page number that is typed        |
| Enter (when last page link has focus)   | Navigates users to the last page                        |

{% endsection %}
{% section %}

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. For both sizes and orientations, the focus order is from left to right and top to bottom. Disabled buttons are not included in the focus order.

{% example palette="light",
           width=794,
           alt="Image of paginations showing the focus order from left to right and top to bottom",
           src="../pagination-a11y-focus-order.png" %}  

{% endsection %}
{% section %}

## Touch targets

Button, page field input, and last page link touch targets are adequately spaced.

{% example palette="light",
           width=806,
           alt="Image of paginations with elements showing adequate touch target spacing",
           src="../pagination-a11y-touch-targets.png" %}  

{% endsection %}
{% section %}

## Additional guidelines

* The active page must be conveyed to assistive technologies
* Icon only buttons must have accessible names for assistive technologies

{% endsection %}
{% section %}

## ARIA Authoring Practices Guide (APG) 

Learn to use the accessibility semantics defined by the [Accessible Rich Internet Application](https://www.w3.org/WAI/ARIA/) (ARIA) specification to create accessible web experiences.

{% endsection %}
{% section %}

## ARIA Authoring Practices Guide (APG) 

*Understanding documents* provide detailed explanations for [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/) (WCAG) guidelines and success criteria.

* [Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Level A, 2.1.1)
* [Keyboard (No Exception)](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception) (Level AAA, 2.1.3)
* [Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) (Level A, 2.4.3)
* [Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size) (Level AAA, 2.5.5)

{% endsection %}
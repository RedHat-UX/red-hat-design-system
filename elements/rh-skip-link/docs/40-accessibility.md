## Keyboard navigation

Users will interact with the skip link using a keyboard primarily.

{% example palette="light",
           class="centered",
           alt="Screenshots of navigation with and without skip link showing and keyboard navigation text",
           src="../skip-link-keyboard-navigation.png" %}

| Key {style="width: 33%" } | Result                                                                                         |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>            | Makes the skip link appear and shifts focus to it                                              |
| <kbd>Shift + Tab</kbd>    | Hides the skip link and moves focus to the previous control or interactive element, if any     |
| <kbd>Enter</kbd>          | Activates the skip link and shifts focus to the main content                                   |

## Focus order

The skip link should be the first item on a page to receive focus. After the skip link is activated, the first interactive element in the main content area will receive focus next.

{% example palette="light",
           class="centered",
           alt="Screenshot of navigation and hero of redhat.com with a skip link and arrows showing focus order",
           src="../skip-link-focus-order.png" %}

## Hiding a skip link

In order to hide the skip link until it’s called by the user, positioning it outside the viewport is recommended. Using `display: none` or the `hidden` attribute in CSS removes it from keyboard navigation and makes it unusable. Other methods, like making its size equal to 0px, can also prevent screen readers from accessing the element. 

Learn more about <a href="https://webaim.org/techniques/css/invisiblecontent/">making invisible content accessible</a> for screen readers.

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/1.2.1-A.md' %}
{% include 'accessibility/1.2.2-A.md' %}
{% include 'accessibility/1.4.1-A.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
## Keyboard interactions

All links within a subnavigation are focus stops. Pressing Enter when a link has 
focus will directed users to a new page.

{% alert title="Helpful tip" %}
Overflow buttons do not have focus so there are no keyboard interactions.
{% endalert %}

{% example palette="lightest",
           alt="",
           src="../subnav-a11y-keyboard-interactions.png" %}

| Key                             | Result                                                  |
| ------------------------------- | ------------------------------------------------------- |
| <kbd>Tab</kbd>                  | Moves focus to the next link or interactive element     |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | Moves focus to the previous link or interactive element |
| <kbd>Enter</kbd>                | Navigates user to another page                          |

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need 
to receive focus in an order that preserves meaning, therefore the focus order 
should make sense and not jump around randomly. When a link has focus, it can 
move horizontally within the list of links or be moved to another interactive 
element.

{% example palette="lightest",
           alt="",
           src="../subnav-a11y-focus-order.png" %}

## Touch targets

Links are adequately spaced for optimal touch targets.

{% example palette="lightest",
           alt="",
           src="../subnav-a11y-touch-targets.png" %}

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}


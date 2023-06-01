## Implementation

 - Ensure a button can be navigated to and interacted with via keyboard and other 
assistive technologies
 - Provide unique and descriptive text content for a button or an aria-label if the 
button does not contain visible text
 - Provide context that a link will open in a new tab or window when using a button 
link
 - Do not place other interactive elements within a button

## Keyboard interactions

Users should have the ability to navigate to and interact with buttons using their keyboard.

{% example palette="light",
          class="inline-flex centered",
          alt="Image of a button group showing focus indicators and tab key labels",
          src="../button-a11y-keyboard-interactions.png" %}

| Key                               | Result                                                    |
| --------------------------------- | --------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to the next button or interactive element     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous button or interactive element |
| <kbd>Enter</kbd>                  | Activates an action                                       |

## Focus order

{% include 'accessibility/focusorder.md' %} For buttons in groups, the focus order is from left to right and top to bottom when stacked. Disabled buttons are not included in the focus order unless they include the <code>aria-disabled=“true”</code> attribute and display a <a href="/elements/tooltip">tooltip</a> when focused.

{% example palette="light",
          class="inline-flex centered",
          alt="Image of rows of button groups with numbers; one row has focus indicators only and the other has focus indicators and a tooltip",
          src="../button-a11y-focus-order.png" %}

## Touch targets
Buttons in groups are adequately spaced for optimal touch targets.

{% example palette="light",
          class="inline-flex centered",
          alt="Image of button group with touch targets on top of each button",
          src="../button-a11y-touch-targets.png" %}

## Screen reader guidelines

Buttons should communicate the following to users:
 - Their intended purpose or function
 - The toggle state if it has two states
 - An instruction that a menu will open

{% include 'accessibility/ariaguide.md' %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}

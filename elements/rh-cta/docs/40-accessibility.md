## Keyboard interactions

Users should have the ability to navigate to and interact with calls to action using their keyboard.

{% example palette="light",
            alt="Image of three groups with different variants showing focus indicators and tab key labels",
            src="../cta-a11y-keyboard-interactions.png" %}

| Key         | Result                                                            |
| ------------| ------------------------------------------------------------------|
| Tab         | Moves focus to the next call to action or interactive element     |
| Shift+Tab   | Moves focus to the previous call to action or interactive element |
| Enter       | Activates a link                                                  |
| Enter       | Hides or reveals a panel below a Brick variant                    |

{.full-width .col-11}

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. For grouped calls to action, the focus order is from left to right and top to bottom.

{% example palette="light",
            alt="Image of groups of three variants with numbers one through three moving from left to right and top to bottom",
            src="../cta-a11y-focus-order.png" %}

## Touch targets

Grouped calls to action are adequately spaced for optimal touch targets.

{% example palette="light",
            alt="Image of groups of variants with touch targets on top of each",
            src="../cta-a11y-touch-targets.png" %}

## Screen reader guidelines

Calls to action should communicate the following to users:
- Their intended purpose or function
- The toggle state when a panel is hidden or visible
- An instruction that a panel will open

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
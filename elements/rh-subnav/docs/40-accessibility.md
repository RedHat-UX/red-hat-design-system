## Keyboard interactions

All links within a subnavigation are focus stops. Pressing Enter when a link has 
focus will directed users to a new page.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Overflow buttons do not have focus so there are no keyboard interactions.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of desktop and mobile subnavigations with diagrams of what happens when Tab keys are pressed"
       src="../subnav-a11y-keyboard-interactions.png"
       width="872"
       height="448">
</uxdot-example>

<rh-table>

| Key                             | Result                                                  |
| ------------------------------- | ------------------------------------------------------- |
| <kbd>Tab</kbd>                  | Moves focus to the next link or interactive element     |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | Moves focus to the previous link or interactive element |
| <kbd>Enter</kbd>                | Navigates user to another page                          |

</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need 
to receive focus in an order that preserves meaning, therefore the focus order 
should make sense and not jump around randomly. When a link has focus, it can 
move horizontally within the list of links or be moved to another interactive 
element.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of desktop and mobile subnavigations showing the focus order from left to right"
       src="../subnav-a11y-focus-order.png"
       width="872"
       height="322">
</uxdot-example>


## Touch targets

Links are adequately spaced for optimal touch targets.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of desktop and mobile subnavigations showing adequate touch target spacing"
       src="../subnav-a11y-touch-targets.png"
       width="872"
       height="176">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}


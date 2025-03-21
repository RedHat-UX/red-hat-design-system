
## Keyboard interactions
Each tab is a focus stop. Pressing the <code>Arrow</code> keys moves the focus and activates the next or previous tab. Pressing <code>Tab</code> when a tab has focus moves the focus out of the list and onto the next interactive element.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Overflow buttons do not have focus so there are no keyboard interactions.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of horizontal tabs with diagrams of what happens when Arrow or Tab keys are pressed"
       src="../tabs-a11y-keyboard-interactions.png"
       width="872"
       height="618">
</uxdot-example>

<rh-table>

| <kbd>Key</kbd>                  | Result                                                                        |
| ------------------------------- | ----------------------------------------------------------------------------- |
| <kbd>Left Arrow</kbd>           | Moves focus to the previous tab and activates it (horizontal tabs)            |
| <kbd>Right Arrow</kbd>          | Moves focus to the next tab and activates it (horizontal tabs)                |
| <kbd>Up Arrow</kbd>             | Moves focus to the previous tab and activates it (vertical tabs)              |
| <kbd>Down Arrow</kbd>           | Moves focus to the next tab and activates it (vertical tabs)                  |
| <kbd>Tab</kbd>                  | Moves focus to the next tab and activates it (vertical tabs)                  |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | Moves focus from the first interactive element in the panel to the active tab |

</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. For both sizes and orientations, the focus order is from left to right and top to bottom. Disabled buttons are not included in the focus order.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of horizontal, vertical, and tabs with overflow buttons showing the focus order from left to right and top to bottom"
       src="../tabs-a11y-focus-order.png"
       width="872"
       height="994">
</uxdot-example>


### Touch targets

Tabs are adequately spaced for optimal touch targets.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open, box, and tabs with overflow buttons showing adequate touch target spacing"
       src="../tabs-a11y-touch-targets.png"
       width="872"
       height="420">
</uxdot-example>


## Additional guidelines
- Tabs must communicate to users which tab in the list is currently selected and the total number of tabs available
- There should only be one active tab
- Inactive tabs can inherit hover, focus, and active states
- The active tab can only inherit a focus state
- Each tab must have a unique text label that clearly describes content in the panel
- This is helpful for users of assistive technologies so they have the necessary information to efficiently navigate
- Content authors need to ensure content added to the panel is accessible
- For example, if an image is added to the panel, alternative text needs to be provided to pass testing

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}

{% include 'partials/accessibility/2.1.3-AAA.md' %}

{% include 'partials/accessibility/2.4.3-A.md' %}

{% include 'partials/accessibility/2.5.5-AAA.md' %}

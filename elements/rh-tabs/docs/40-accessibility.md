
## Keyboard interactions
Each tab is a focus stop. Pressing the <code>Arrow</code> keys moves the focus and activates the next or previous tab. Pressing <code>Tab</code> when a tab has focus moves the focus out of the list and onto the next interactive element.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Overflow buttons do not have focus so there are no keyboard interactions.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../tabs-a11y-keyboard-interactions.png"
        alt="Image of horizontal tabs with diagrams of what happens when Arrow or Tab keys are pressed"
        width="872"
        height="618">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key"><kbd>Key</th>
        <th scope="col" data-label="Result">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Left Arrow</kbd></td>
        <td data-label="Result">Moves focus to the previous tab and activates it (horizontal tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Right Arrow</kbd></td>
        <td data-label="Result">Moves focus to the next tab and activates it (horizontal tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Up Arrow</kbd></td>
        <td data-label="Result">Moves focus to the previous tab and activates it (vertical tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Down Arrow</kbd></td>
        <td data-label="Result">Moves focus to the next tab and activates it (vertical tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the next tab and activates it (vertical tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift+Tab</kbd></td>
        <td data-label="Result">Moves focus from the first interactive element in the panel to the active tab</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. For both sizes and orientations, the focus order is from left to right and top to bottom. Disabled buttons are not included in the focus order.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-a11y-focus-order.png"
        alt="Image of horizontal, vertical, and tabs with overflow buttons showing the focus order from left to right and top to bottom"
        width="872"
        height="994">
</uxdot-example>


### Touch targets

Tabs are adequately spaced for optimal touch targets.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-a11y-touch-targets.png"
        alt="Image of open, box, and tabs with overflow buttons showing adequate touch target spacing"
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

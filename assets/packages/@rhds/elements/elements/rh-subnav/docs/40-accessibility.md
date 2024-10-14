## Keyboard interactions

All links within a subnavigation are focus stops. Pressing Enter when a link has 
focus will directed users to a new page.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Overflow buttons do not have focus so there are no keyboard interactions.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../subnav-a11y-keyboard-interactions.png"
        alt="Image of desktop and mobile subnavigations with diagrams of what happens when Tab keys are pressed"
        width="872"
        height="448">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key">Key</th>
        <th scope="col" data-label="Result">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the next link or interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift</kbd>+<kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the previous link or interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Navigates user to another page</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need 
to receive focus in an order that preserves meaning, therefore the focus order 
should make sense and not jump around randomly. When a link has focus, it can 
move horizontally within the list of links or be moved to another interactive 
element.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-a11y-focus-order.png"
        alt="Image of desktop and mobile subnavigations showing the focus order from left to right"
        width="872"
        height="322">
</uxdot-example>


## Touch targets

Links are adequately spaced for optimal touch targets.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-a11y-touch-targets.png"
        alt="Image of desktop and mobile subnavigations showing adequate touch target spacing"
        width="872"
        height="176">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}


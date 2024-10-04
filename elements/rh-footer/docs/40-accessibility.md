## Keyboard interactions

Most elements in a footer are links, so users can press `Tab` to navigate from region to region.

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
        <td data-label="Result">Moves the focus to the next interactive element or section</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift</kdb>+<kbd>Tab</kbd></td>
        <td data-label="Result">Moves the focus to the previous interactive element or section</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Opens or closes the language selector menu</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Esc</kbd></td>
        <td data-label="Result">Closes the language selector menu if a language has focus</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order 

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. The focus moves across regions of a footer from left to right and top to bottom.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Users can skip opening the language selector menu, but the trigger still receives focus.</p>
</rh-alert>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-a11y-focus-order.png"
        alt="Image of a footer showing groups of focus indicators in different regions with annotation numbers"
        width="968"
        height="796">
</uxdot-example>


### Language selector
Users can open the language selector menu by pressing `Enter` if the trigger has focus. If they do, they can press `Tab` to move focus to the first language. Each language can receive focus from left to right and top to bottom.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-a11y-language-selector-a.png"
        alt="Image of a footer with the language selector menu open showing the focus order of languages"
        width="968"
        height="796">
</uxdot-example>

When the focus is moved outside of the menu, the menu closes.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-a11y-language-selector-b.png"
        alt="Image of a footer with the language selector menu open showing the menu closing when focus is moved"
        width="968"
        height="796">
</uxdot-example>


## Additional guidelines
- Content outside of a dialog cannot be interacted with or navigated to while the dialog is open
- The `Escape` key should close the dialog
- There should be at least one clickable button that closes the dialog
- Long dialog content can still receive focus via keyboard if it overflows and a scrollbar appears
- When a dialog closes, focus should return to the last focused item before the dialog was opened

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
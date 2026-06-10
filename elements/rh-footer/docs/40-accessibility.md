## Landmark roles

`<rh-footer>` and `<rh-footer-universal>` (when used outside of `<rh-footer>`) already include a [`contentinfo`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role) landmark role and therefore do not need to be wrapped in a native `<footer>` element. This `contentinfo` role is applied automatically through the [ElementInternals API](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals).

If a `<rh-footer>` or `<rh-footer-universal>` is placed inside an existing `<footer>` element, the custom element will not receive the `contentinfo` role. In those cases, implementors should remove the surrounding `<footer>` element and rely on the role applied directly to the custom element via ElementInternals.

## Keyboard interactions

The footer includes many different interactive elements that can be navigated with a keyboard.

<uxdot-example width-adjustment="1140px" variant="full" alignment="left" no-border>
  <img src="../footer-a11y-keyboard-interactions.svg"
        alt="A footer showing light blue focus rings and dotted underlines on links in a dark color scheme footer"
        width="1140"
        height="743">
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
        <td data-label="Result">Moves the focus to the next interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift</kbd>+<kbd>Tab</kbd></td>
        <td data-label="Result">Moves the focus to the previous interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Space</kbd></td>
        <td data-label="Result">Opens the language selector menu</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Up arrow</kbd> / <kbd>Down arrow</kbd></td>
        <td data-label="Result">Moves the focus to each language</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Selects a language and refreshes the page</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Esc</kbd></td>
        <td data-label="Result">Closes the language selector menu</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order 

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. The focus moves across regions of a footer from left to right and top to bottom.

<uxdot-example width-adjustment="1140px" variant="full" alignment="left" no-border>
  <img src="../footer-a11y-focus-order.svg"
        alt="A footer showing groups of focus indicators in different regions with annotation numbers"
        width="1140"
        height="743">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

## Keyboard navigation

Users should have the ability to navigate to and interact with the back to top button using their keyboard.

<uxdot-example variant="full" no-border>
  <img src="../back-to-top-a11y-keyboard-nav.svg" 
      alt="Example of a page with footer links and a back to top button that has keyboard interaction annotations"
      width="1140"
      height="730">
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
        <td data-label="Result">Shifts focus to back to top</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Result">Shifts focus to the previous interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Activates back to top and moves focus to the very first interactive element on the page</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

Back to top should be the last interactive element to receive focus.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.2.1-A.md' %}
{% include 'partials/accessibility/1.2.2-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
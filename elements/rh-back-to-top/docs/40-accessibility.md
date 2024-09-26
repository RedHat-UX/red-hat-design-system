## Keyboard navigation

Users should have the ability to navigate to and interact with the back to top button using their keyboard.

<uxdot-example width-adjustment="872px">
  <img src="../back-to-top-keyboard-nav.png" alt="Example of a page with footer links and a back to top button that has keyboard interaction annotations">
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
        <td data-label="Result">Shifts focus to the back to top button </td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Result">Shifts focus to a previous interactive element</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Activates the back to top button and moves focus to the first interactive element on the pag</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

As long as the back to top button is only at the bottom of the page, it should be the last interactive element on the page to receive focus.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.2.1-A.md' %}
{% include 'partials/accessibility/1.2.2-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
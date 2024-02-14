## Keyboard interactions
The buttons, page input field, and last page link all have keyboard interactions when the `Enter` key is pressed.

<uxdot-example width-adjustment="883px">
  <img src="{{ '../pagination-a11y-keyboard-interactions.png' | url }}" alt="Image of paginations with diagrams of what happens when Tab or Enter keys are pressed">
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
        <td data-label="Result">Moves focus to the right (not including truncation)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift+Tab</kbd></td>
        <td data-label="Result">Moves focus to the left (not including truncation)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd> (when a button has focus)</td>
        <td data-label="Result">Selects a control or changes an inactive page to active</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd> (when a new page number is typed)</td>
        <td data-label="Result">Navigates users to the page number that is typed</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd> (when last page link has focus)</td>
        <td data-label="Result">Navigates users to the last page</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

{% include 'partials/accessibility/focusorder.md' %}

<uxdot-example width-adjustment="796px">
  <img src="{{ '../pagination-a11y-focus-order.png' | url }}" alt="Image of paginations showing the focus order from left to right and top to bottom">
</uxdot-example>


## Touch targets
Buttons, page field input, and last page link are adequately spaced for optimal touch targets.

<uxdot-example width-adjustment="806px">
  <img src="{{ '../pagination-a11y-touch-targets.png' | url }}" alt="Image of paginations with elements showing adequate touch target spacing">
</uxdot-example>


## Additional guidelines

* The active page must be conveyed to assistive technologies
* Icon only buttons must have accessible names for assistive technologies

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

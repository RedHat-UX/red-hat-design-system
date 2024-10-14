## Keyboard interactions

The buttons, page input field, and last page link all have keyboard interactions when the <kbd>Enter</kbd> key is pressed.

<uxdot-example width-adjustment="792px">
  <img src="../pagination-a11y-keyboard-interactions.svg"
        alt="Paginations with diagrams of what happens when Tab or Enter keys are pressed"
        width="792"
        height="447">
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

<uxdot-example width-adjustment="792px">
  <img src="../pagination-a11y-focus-order.svg"
        alt="Paginations showing the focus order from left to right and top to bottom"
        width="792"
        height="486">
</uxdot-example>


## Touch targets

Buttons, page field input, and the last page link are adequately spaced for optimal touch targets. The default size meets the WCAG [Level AAA success criteria for target size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) which requires at least a 44px by 44px touch target.

<uxdot-example width-adjustment="792px">
  <img src="../pagination-a11y-touch-targets-1.svg"
        alt="Paginations with elements showing WCAG AAA compliant touch target spacing"
        width="792"
        height="160">
</uxdot-example>

The small size exceeds the WCAG [Level AA success criteria for target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) which calls for touch targets to be at least 24px by 24px, but its buttons do not meet the Level AAA requirement.

<uxdot-example width-adjustment="561px">
  <img src="../pagination-a11y-touch-targets-2.svg"
        alt="Size SM Paginations with elements showing WCAG AA compliant touch target spacing"
        width="562"
        height="136">
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
{% include 'partials/accessibility/2.5.8-AA.md' %}


## Keyboard interactions

Buttons, page input field, and last page link all have keyboard interactions when the <kbd>Enter</kbd> key is pressed.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing the keyboard interactions for an expanded menu dropdown."
       src="../menu-dropdown-accessibility-keyboard-interactions.svg"
       width="256"
       height="333">
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
        <td><kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the menu dropdown</li>
            <li>Collapses an expanded menu dropdown when focus leaves the expanded menu dropdown</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Enter</kbd>/<kbd>Space</kbd></td>
        <td>
          <ul>
            <li>Expands menu dropdown</li>
            <li>Triggers an action or navigates the user somewhere else</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Down</kbd>/<kbd>Right</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the next interactive menu item</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Up</kbd>/<kbd>Left</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the previous interactive menu item</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing the focus order for an expanded menu dropdown."
       src="../menu-dropdown-accessibility-focus-order.svg"
       width="312"
       height="300">
</uxdot-example>

## Touch targets

All toggles and menu items exceed the WCAG [Level AA success criteria for target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum), which calls for touch targets to be at least 24px by 24px.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing the touch target size in relation to a menu toggle and menu items."
       src="../menu-dropdown-accessibility-touch-targets.svg"
       width="303"
       height="272">
</uxdot-example>

## Additional guidelines

- A compact toggle requires a descriptive `aria-label` to communicate its purpose to screen readers.

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.8-AA.md' %}
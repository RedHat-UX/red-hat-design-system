## Screen reader guidelines

<rh-table>
  <table>
    <caption style="text-align: start; font-weight: normal;">A scheme dropdown should communicate the following clearly to assistive technology:</caption>
    <thead>
      <tr>
        <th scope="col">Parameter</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">Semantic Structure</td>
        <td>
          <ul>
            <li>Uses the browser native custom <code>&lt;select&gt;</code></li>
            <li>Option elements provide standard form control semantics</li>
            <li>Each selected option has visually-hidden text to convey meaning</li>
            <li>Includes a visually-hidden <code>&lt;label&gt;</code> element that labels the <code>&lt;select&gt;</code></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row">Information conveyed</td>
        <td>
          <ul>
            <li>The purpose of the control (color scheme selection)</li>
            <li>Available options (light, dark, and system default)</li>
            <li>Current selection state</li>
            <li>Changes when selection is made</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row">Implementation details</td>
        <td>
          <ul>
            <li>Icons in the dropdown are hidden in lieu of visible text in the <code>&lt;option&gt;</code></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Keyboard navigation

Users should have the ability to move focus to each color scheme button using a keyboard.

<uxdot-example color-palette="lightest">
  <img alt="A diagram showing a blue focus ring when tabbing to the control, then the focus ring after hitting arrow keys, and what the control looks like after hitting Enter or Space. See table below for more information."
       src="../scheme-dropdown-a11y-keyboard-navigation.svg"
       width="783"
       height="231">
</uxdot-example>

<rh-table>

| Key                                     | Result                                                      |
| --------------------------------------- | ----------------------------------------------------------- |
| <kbd>Tab</kbd>                          | Moves focus to the menu dropdown                            |
| <kbd>Space</kbd>/<kbd>Down arrow</kbd>  | Expands the menu                                            |
| <kbd>Down arrow</kbd>                   | Selects the next color scheme, but does not switch          |
| <kbd>Up arrow</kbd>                     | Selects the previous color scheme, but does not switch      |
| <kbd>Enter</kbd>/<kbd>Space</kbd>       | Switches the color scheme                                   |
| <kbd>Esc</kbd>/<kbd>Tab</kbd>           | Closes the dropdown without changing the current selection  |

</rh-table>

## Focus order

The scheme dropdown receives focus first. When the menu is expanded, up and down arrow keys select between the other color schemes.

<uxdot-example color-palette="lightest">
  <img alt="A collapsed and expanded scheme dropdown. Users tab to focus the control, then use their arrow keys to focus individual options."
       src="../scheme-dropdown-a11y-focus-order.svg"
       width="332"
       height="192">
</uxdot-example>

## Touch targets

All interactive elements meet minimum touch target requirements.

<uxdot-example color-palette="lightest">
  <img alt="A collapsed and expanded scheme dropdown with touch targets over the center of the control and each item in the control."
       src="../scheme-dropdown-a11y-touch-targets.svg"
       width="299"
       height="192">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

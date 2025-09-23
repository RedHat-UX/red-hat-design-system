## Screen reader guidelines

<rh-table>
  <table>
    <caption style="text-align: start; font-weight: normal;">A scheme toggle communicates the following clearly to assistive technology:</caption>
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
            <li>Uses <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> for proper grouping</li>
            <li>Radio buttons provide standard form control semantics</li>
            <li>Each option has both visible tooltips and visually-hidden labels in addition to the icon labels</li>
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
            <li><code>legend-text</code> attribute provides the fieldset legend (Color scheme: is the default)</li>
            <li>Each radio button has a <code>title</code> attribute for tooltips</li>
            <li>Visually-hidden spans provide accessible labels for each option</li>
            <li>Screen readers announce both the group purpose and individual option labels</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Keyboard navigation

Users should have the ability to move focus to each color scheme button using a keyboard.

<uxdot-example color-palette="lightest">
  <img alt="Three scheme toggles with purple block labels below saying 'Tab' and 'Right arrow' twice as the selected state moves from left to right."
       src="../scheme-toggle-a11y-keyboard-navigation.svg"
       width="946"
       height="79">
</uxdot-example>

<rh-table>

| Key                    | Result                                             |
| ---------------------- | -------------------------------------------------- |
| <kbd>Tab</kbd>         | Moves focus inside or outside of the toggle group  |
| <kbd>Right arrow</kbd> | Selects the next color scheme                      |
| <kbd>Left arrow</kbd>  | Selects the previous color scheme                  |

</rh-table>

## Focus order

The scheme toggle receives focus as a single group. Once focused, left and right arrow keys select between the three schemes in logical order.

<uxdot-example color-palette="lightest">
  <img alt="Three scheme toggles left to right inidcating how focus changes when pressing the right arrow. Focus move from light to dark to system."
       src="../scheme-toggle-a11y-focus-order.svg"
       width="946"
       height="68">
</uxdot-example>

## Touch target

All interactive elements meet minimum touch target requirements.

<uxdot-example color-palette="lightest">
  <img alt="A scheme toggle with an orange circle overlaid on top of the dark button, slightly passing the button's borders."
       src="../scheme-toggle-a11y-touch-target.svg"
       width="261"
       height="44">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

## Keyboard interactions

The disclosure trigger button and content within the panel can be navigated with a keyboard.

<uxdot-example color-palette="lightest" variant="full" no-border>
  <img alt="An open disclosure with a CTA and a closed nested disclosure highlighting the three focusable areas."
       src="../disclosure-accessibility-keyboard-interactions.svg"
       width="996"
       height="332">
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
            <li>Moves focus to the next interactive element</li>
            <li>Focus can move outside an open disclosure without closing it</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Shift + Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the previous interactive element</li>
            <li>Focus can move to the trigger button from within an open disclosure</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Enter</kbd>/<kbd>Space</kbd></td>
        <td>
          <ul>
            <li>Expands or collapses a disclosure</li>
            <li>Expands or collapses a nested disclosure</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<uxdot-example color-palette="lightest" variant="full" no-border>
  <img alt="A diagram of an open disclosure (1) with a CTA (2) and a closed nested disclosure (3) highlighting the three focusable areas."
       src="../disclosure-accessibility-focus-order.svg"
       width="1140"
       height="1004">
</uxdot-example>

## Touch targets

The large disclosure trigger buttons make them easy to select.

<uxdot-example color-palette="lightest" variant="full" no-border>
  <img alt="A diagram of an open disclosure with a CTA and a closed nested disclosure highlighting the three available touch targets."
       src="../disclosure-accessibility-touch-targets.svg"
       width="1140"
       height="1004">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

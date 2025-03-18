## Keyboard interactions

The disclosure trigger and panel content can be navigated with a keyboard.

<uxdot-example>
  <img alt="An open disclosure with a CTA and a closed nested disclosure highlighting the three focusable areas."
       src="../disclosure-a11y-keyboard-interactions.svg"
       width="1012"
       height="285">
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
        <td data-label="Result">
          <ul>
            <li>Moves focus to any interactive elements</li>
            <li>Moves focus outside, but should not collapse the disclosure</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Result">
          <ul>
            <li>Moves focus to an interactive element</li>
            <li>Moves focus to the header panel</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd>/<kbd>Space</kbd></td>
        <td data-label="Result">
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

<uxdot-example>
  <img alt="A diagram of an open disclosure (1) with a CTA (2) and a closed nested disclosure (3) highlighting the three focusable areas."
       src="../disclosure-a11y-focus-order.svg"
       width="1012"
       height="285">
</uxdot-example>

## Touch targets

The large header panels make them easy to select.

<uxdot-example>
  <img alt="A diagram of an open disclosure with a CTA and a closed nested disclosure highlighting the three available touch targets."
       src="../disclosure-a11y-touch-targets.svg"
       width="1012"
       height="285">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

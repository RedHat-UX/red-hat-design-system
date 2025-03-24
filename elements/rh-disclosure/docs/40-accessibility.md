## Keyboard interactions

The disclosure trigger button and content within the panel can be navigated with a keyboard.

<uxdot-example>
  {% include './disclosure-a11y-keyboard-interactions.svg' %}
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
            <li>Moves focus to the next interactive element</li>
            <li>Focus can move outside an open disclosure without closing it</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Result">
          <ul>
            <li>Moves focus to the previous interactive element</li>
            <li>Focus can move to the trigger button from within an open disclosure</li>
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
  {% include './disclosure-a11y-focus-order.svg' %}
</uxdot-example>

## Touch targets

The large disclosure trigger buttons make them easy to select.

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

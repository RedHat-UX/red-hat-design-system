## Keyboard interactions

Users should have the ability to move focus to each button using a keyboard.

<uxdot-example color-palette="lightest">
  <img src="../code-block-a11y-keyboard-interactions.svg"
        alt="Two code blocks showing what happens when hitting tab. See tab order in the table below."
        width="1012"
        height="521">
</uxdot-example>

<rh-table>
  <table>
    <caption class="visually-hidden">Code block keyboard navigation behavior</caption>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>Moves focus to code numbers and text (if numbers are visible)</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>Moves focus to the copy to clipboard button and displays a tooltip</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd></td>
        <td>Copies code text to clipboard (when copy to clipboard button has focus)</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>Moves focus to the toggle overflow button or toggle word wrapping button and displays a tooltip</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd></td>
        <td>Toggles overflow or word wrapping (when either button has focus)</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>Moves focus to the Show more button</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd></td>
        <td>Expands or collapses code text (when focus is on expand/collapse button)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<uxdot-example color-palette="lightest">
  <img src="../code-block-a11y-focus-order.svg"
        alt="Two code blocks. The first tab stop focuses the code in the code block. The next two tab stops focuses the floating action buttons. The last tab stop focuses the show more expand/collapse button."
        width="1012"
        height="521">
</uxdot-example>

## Touch targets

All buttons exceed the [WCAG Level AA success criteria for target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), which calls for touch targets to be at least 24px by 24px.

<uxdot-example color-palette="lightest">
  <img src="../code-block-a11y-touch-targets.svg"
        alt="A code block with transparent circles overtop of the floating action buttons and the show more button."
        width="1012"
        height="200">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.8-AA.md' %}

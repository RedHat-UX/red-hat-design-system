## Implementation

- Provide a unique and descriptive accessible label to the jump links element, either by setting the `accessible-label` attribute, or by using `aria-labelledby` to refer to a heading element in the same root to refer to a heading element in the same root.
- Ensure each jump link has descriptive text that says what section a user will 
  jump to if they select it

## Keyboard interactions

Each individual jump link can be navigated with a keyboard. However, focus moving to a jump link does not mean it has been selected.

{#
<uxdot-example>
  insert interactions graphic here
</uxdot-example>
#}

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the top jump or the next jump link</li>
            <li>Focus can move to the disclosure trigger button</li>
            <li>FOcus can move outside to an interactive element</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Shift</kbd>+<kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the previous jump or the first jump link</li>
            <li>Focus can move to the disclosure trigger button</li>
            <li>FOcus can move outside to an interactive element</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Enter</kbd></td>
        <td>
          <ul>
            <li>Scrolls the user to their desired section</li>
            <li>Expands or collapses a parent nested jump link</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

Focus moves through jump links first and then other elements from top to bottom or left to right.

{#
<uxdot-example>
  insert focus order graphic here
</uxdot-example>
#}

## Touch targets

Each individual jump link and the disclosure trigger button are large enough to be selected easily.

{#
<uxdot-example>
  insert touch targets graphic here
</uxdot-example>
#}

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

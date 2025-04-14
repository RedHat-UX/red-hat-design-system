## Implementation

### Jump links

- Provide a unique and descriptive accessible name to the jump links element
  - This can be achieved using `aria-labelledby`, `aria-label`, or the [`accessible-label` API](/elements/jump-links/code/#rh-jump-links-apis)
- Ensure each jump link has descriptive text that says what section a user will jump to if they select it

### Responsive jump links

To make jump links responsive, they must be composed inside of a disclosure for mobile viewports.

- Provide a unique and descriptive accessible name to the disclosure if it is expandable
  - If the disclosure uses an icon as its trigger, be sure to provide an accessible name for the icon
- Ensure the disclosure has an `aria-expanded` attribute that matches its expanded state
  - If users implement `<rh-disclosure>` or a `<details>`/`<summary>` element, `aria-expanded` is not necessary

## Keyboard interactions

Each individual jump link can be navigated with a keyboard. However, focus moving to a jump link does not mean it has been selected.

<uxdot-example color-palette="lighter" no-border>
    <img src="../jump-links-a11y-keyboard-interactions.svg"
        alt="Four sets of jump links. Each jump link shows a blue focus ring around each link with arrows pointing in the appropriate focus order direction."
        width="1012"
        height="464">
</uxdot-example>

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
            <li>Focus can move outside to an interactive element</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><kbd>Shift</kbd>+<kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the previous jump or the first jump link</li>
            <li>Focus can move to the disclosure trigger button</li>
            <li>Focus can move outside to an interactive element</li>
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

<uxdot-example color-palette="lightest">
    <img src="../jump-links-a11y-focus-order.svg"
        alt="Five jump links with content on the right. Focus moves 1-5 through the five jump links then move into the content on the right."
        width="1012"
        height="633">
</uxdot-example>

## Touch targets

Each individual jump link and the disclosure trigger button are large enough to be selected easily.

<uxdot-example color-palette="lighter" no-border>
    <img src="../jump-links-a11y-touch-targets.svg"
        alt="Four sets of jump links with semitransparent red dots overtop of each jump link representing the centermost touch target of each link."
        width="1012"
        height="464">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

## Implementation

- If a primary navigation does not use the native `<details>`/`<summary>` elements, ensure `aria-expanded` is applied to the menu trigger element and respects its state
- If an item in the menu is an icon, ensure the icon has an accessible name

## Keyboard interactions

All elements of the primary navigation can be navigated with a keyboard.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with each individual focusable element highlighted by a blue focus ring and the words 'tab' next to each."
       src="../nav-primary-a11y-keyboard-interactions-a.svg"
       width="1012"
       height="228">
</uxdot-example>

Primary and utility menus can also be expanded or collapsed using the keyboard.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with a dropdown trigger focused with the words 'Enter / Return / Space' next to it."
       src="../nav-primary-a11y-keyboard-interactions-b.svg"
       width="1012"
       height="370">
</uxdot-example>

<rh-table>
  <table>
    <caption class="visually-hidden">Primary navigation keyboard navigation behavior</caption>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the next interactive element</li>
            <li>Moves focus inside of a menu</li>
            <li>Collapses an expanded menu when focus leaves the expanded menu</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Shift + Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the previous interactive element</li>
            <li>Moves focus outside of a menu</li>
            <li>Collapses an expanded menu when focus leaves the expanded menu</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd>/<kbd>Return</kbd>/<kbd>Space</kbd></td>
        <td>
          <ul>
            <li>Expands or collapses primary or utility menus (when primary or utility menus have focus)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd>/<kbd>Return</kbd></td>
        <td>
          <ul>
            <li>Directs users to another page (when a link has focus)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Escape</kbd></td>
        <td>
          <ul>
            <li>Collapses an expanded menu and returns focus to the menu trigger element</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A nav with numbers 1-12 showing focus moving from the top left to the bottom right in the correct sequence"
       src="../nav-primary-a11y-focus-order-a.svg"
       width="1012"
       height="228">
</uxdot-example>

Focus will move from the menu trigger element to the first interactive element inside of a menu when expanded.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A nav with the first menu expanded, showing the focus order going into the menu then back out in the correct sequence."
       src="../nav-primary-a11y-focus-order-b.svg"
       width="1012"
       height="370">
</uxdot-example>

## Touch targets

The large menu trigger element and spacing around links make them easy to select.

<uxdot-example color-palette="lighter" no-border>
  <img alt=""
       src="../nav-primary-a11y-touch-targets.svg"
       width="1012"
       height="228">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

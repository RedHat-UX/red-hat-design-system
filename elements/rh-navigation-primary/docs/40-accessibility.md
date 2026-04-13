<style>
  @container host (min-width: 768px) {
    #kbd-interactions td:first-child {
      width: 25%;
    }
  }
</style>

## Implementation

- If a primary navigation does not use the native `<details>`/`<summary>` elements, ensure `aria-expanded` is applied to the menu trigger element and respects its state
- If an item in the menu is an icon, ensure the icon has an accessible name

## Keyboard interactions

All elements of the primary navigation can be navigated with a keyboard.

<uxdot-example variant="full" color-palette="lighter" no-border>
  <img alt="A primary nav with each individual focusable element in each group (logo, menus, links) highlighted by a blue focus ring and the words 'tab' next to each."
       src="../nav-primary-a11y-keyboard-interactions-1.svg"
       width="1140"
       height="330">
</uxdot-example>

<p style="margin-block-start: var(--rh-space-3xl);">Primary and utility menus can also be expanded or collapsed using the keyboard.</p>

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with a dropdown trigger focused with the words 'Enter / Return / Space' next to it."
       src="../nav-primary-a11y-keyboard-interactions-2.svg"
       width="1012"
       height="370">
</uxdot-example>

<rh-table id="kbd-interactions">
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
            <li>Moves focus inside of a menu if expanded</li>
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
            <li>Moves focus to the next interactive element</li>
            <li>Moves focus inside of a menu</li>
            <li>Collapses an expanded menu when focus leaves the expanded menu</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<uxdot-example variant="full" color-palette="lighter" no-border>
  <img alt="A nav with numbers 1-12 showing focus moving from the top left to the bottom right in the correct sequence"
       src="../nav-primary-a11y-focus-order-1.svg"
       width="1140"
       height="337">
</uxdot-example>

When a menu is expanded, focus moves from the menu trigger to the first interactive element. When focus is moved away from the last interactive element in a menu, it will collapse. (6)

<uxdot-example color-palette="lighter" no-border>
  <img alt="A nav with the first menu expanded, showing the focus order going into the menu then back out in the correct sequence."
       src="../nav-primary-a11y-focus-order-2.svg"
       width="1012"
       height="562">
</uxdot-example>

## Touch targets

All menu triggers and cross-domain links exceed the WCAG [Level AA success criteria for target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), which calls for touch targets to be at least 24 by 24px.

<uxdot-example variant="full" color-palette="lighter" no-border>
  <img alt="Little red 24px semi-transparent circles overtop of each interactive element in a primary navigation showing that each interactive element in the nav is larger than 24px by 24px."
       src="../nav-primary-a11y-touch-targets.svg"
       width="1140"
       height="337">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.8-AA.md' %}

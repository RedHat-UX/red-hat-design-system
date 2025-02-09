## Keyboard navigation

A user should have the ability to interact with an announcement using their keyboard. Before focus is moved inside of an announcement, the [Skip link](/elements/skip-link/) element has focus first.

<uxdot-example variant="full" no-border>
  <img alt="Two announcements, the first showing focus on a skip link, and the second showing focus on the CTA and close button"
       src="../announcement-accessibility-keyboard-navigation.svg">
</uxdot-example>

<rh-table>
  <table>
    <caption class="visually-hidden">Announcement keyboard navigation behavior</caption>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>Moves focus <strong>left to right</strong>: skip link, call to action, and then close button (or right to left for RTL languages)</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Shift + Tab</kbd></td>
        <td>Moves focus <strong>right to left</strong>: close button, call to action, and then skip link (or left to right for RTL languages)</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd></td>
        <td>
          <ul>
            <li>Skip link: moves focus to a specified in-page location (typically the main content below the navigation)</li>
            <li>Call to action: directs a user to another page</li>
            <li>Close button: closes the announcement</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

If a user is qualified, they will see an announcement when the page loads. By default, pressing Tab always displays the [Skip link](/elements/skip-link/) element (1) first. As a user continues to press Tab, the Skip link disappears and then focus moves from left to right within the announcement (2 - 3). When focus exits the announcement, it moves down to the universal navigation links (4).

<uxdot-example variant="full" no-border>
  <img alt="Two announcements with numbers on skip link (1), CTA (2), close button (3), and the first item in the main navigation (4)."
       src="../announcement-accessibility-focus-order.svg">
</uxdot-example>

## Touch targets

Ensure interactive elements have adequate size and space for optimal touch targets.

<uxdot-example variant="full" no-border>
  <img alt="Three announcements showing small red circles over each interactive element."
       src="../announcement-accessibility-touch-targets.svg">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}

{% include 'partials/accessibility/2.1.3-AAA.md' %}

{% include 'partials/accessibility/2.4.3-A.md' %}

{% include 'partials/accessibility/2.5.5-AAA.md' %}



## Keyboard interactions

All elements within a secondary navigation are focus stops. Pressing <code>Enter</code> when a menu has focus will expand or collapse it. Otherwise, users will be directed to a new page. If the height of the menu is taller than the viewport height due to lots of content, focus is trapped within the panel until the menu is collapsed.

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-a11y-keyboard-interactions.png"
        alt="Image of secondary navigations with diagrams of what happens when Tab or Enter keys are pressed"
        width="872"
        height="574">
</uxdot-example>

### Keyboard events

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Action">Action</th>
        <th scope="col" data-label="Event">Event</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Action"><kbd>Tab</kbd></td>
        <td data-label="Event">Moves focus to the next interactive element (including a menu)</td>
      </tr>
      <tr>
        <td data-label="Action"><kbd>Shift + Tab</kbd></td>
        <td data-label="Event">Moves focus to the previous interactive element (including a menu)</td>
      </tr>
      <tr>
        <td data-label="Action"><kbd>Enter</kbd> (when a link has focus)</td>
        <td data-label="Event">Directs user to another page</td>
      </tr>
      <tr>
        <td data-label="Action"><kbd>Enter</kbd> (when a menu has focus)</td>
        <td data-label="Event">Expands or collapses a menu without moving focus</td>
      </tr>
      <tr>
        <td data-label="Action"><kbd>Enter</kbd> (when a menu has focus)</td>
        <td data-label="Event">Collapses an expanded menu without moving focus</td>
      </tr>
      <tr>
        <td data-label="Action"><kbd>Esc</kbd> (when a menu is expanded)</td>
        <td data-label="Event">Collapses the expanded menu</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

{% include 'partials/accessibility/focusorder.md' %}

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
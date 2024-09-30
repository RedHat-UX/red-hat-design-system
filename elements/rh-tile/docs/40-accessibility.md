## Keyboard interactions

A user should have the ability to use the Tab key to navigate to a tile or into a tile group. When tiles are in a group, a user will need to use arrow keys to navigate from one tile to another. Pressing the `Enter`/`Return` key will activate a link tile or select a selectable tile.


<uxdot-example width-adjustment="880px">
  <img src="../tile-keyboard-interactions.png" alt="Tile groups with labels showing which key to use for navigating">
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
        <td data-label="Result">Moves focus to a solo tile or the first tile in a group</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Result">Moves focus to a previous solo tile or the last tile in a previous tile group</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Left Arrow</kbd></td>
        <td data-label="Result">Moves focus to the previous tile and activates it (horizontal tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Right Arrow</kbd></td>
        <td data-label="Result">Moves focus to the next tile and activates it (horizontal tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Up Arrow</kbd></td>
        <td data-label="Result">Moves focus to the previous tile and activates it (vertical tabs)</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Arrow keys</kbd></td>
        <td data-label="Result">Moves focus from one tile to another in a tile group</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Activates a link tile or selects a selectable tile</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. In tile groups, focus moves from left to right and top to bottom.

<uxdot-example width-adjustment="880px">
  <img src="../tile-focus-order.png" alt="Tile groups with numbers showing the focus order">
</uxdot-example>


## Touch targets

The whole tile is selectable, and the required heading or image would make each tile a large enough touch target.


## Additional guidelines

- Include alt text for a slotted image especially if it is wrapped in a link

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
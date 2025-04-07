## Keyboard interactions

A user should have the ability to use the Tab key to navigate to a tile or into a tile group. When tiles are in a group, a user will need to use arrow keys to navigate from one tile to another. Pressing the `Enter`/`Return` key will activate a link tile or select a selectable tile.


<uxdot-example color-palette="lightest" width-adjustment="880px">
  <img alt="Tile groups with labels showing which key to use for navigating"
       src="../tile-keyboard-interactions.png"
       width="880"
       height="756">
</uxdot-example>


<rh-table>

| Key                               | Result                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to a solo tile or the first tile in a group                       |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to a previous solo tile or the last tile in a previous tile group |
| <kbd>Left Arrow</kbd>             | Moves focus to the previous tile and activates it (horizontal tabs)           |
| <kbd>Right Arrow</kbd>            | Moves focus to the next tile and activates it (horizontal tabs)               |
| <kbd>Up Arrow</kbd>               | Moves focus to the previous tile and activates it (vertical tabs)             |
| <kbd>Arrow keys</kbd>             | Moves focus from one tile to another in a tile group                          |
| <kbd>Enter</kbd>                  | Activates a link tile or selects a selectable tile                            |

</rh-table>


## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. In tile groups, focus moves from left to right and top to bottom.

<uxdot-example width-adjustment="880px" color-palette="lightest">
  <img alt="Tile groups with numbers showing the focus order"
       src="../tile-focus-order.png"
       width="879"
       height="597">
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

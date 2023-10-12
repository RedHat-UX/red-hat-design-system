
## Keyboard interactions

Users should have the ability to use the tab key to navigate to a tile or into a tile group. When tiles are in a group, users will need to use arrow keys to navigate from one tile to another. Pressing the enter key will activate a link tile or select a selectable tile.

{% example palette="light",
        alt="",
        src="../tile-keyboard-interactions.png" %}

| Key {style="width: 25%" } | Result                                                                          |
| ------------------------- | ------------------------------------------------------------------------------- |
| Tab                       | Moves focus to a solo tile or the first tile in a group                         |
| Shift + Tab               | Moves focus to a previous solo tile or the last tile in a previous tile group   |
| Left Arrow                | Moves focus to the previous tile and activates it (horizontal tabs)             |
| Right Arrow               | Moves focus to the next tile and activates it (horizontal tabs)                 |                 
| Up Arrow                  | Moves focus to the previous tile and activates it (vertical tabs)               |
| Arrow keys                | Moves focus from one tile to another in a tile group                            |
| Enter                     | Activates a link tile or selects a selectable tile                              |

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. In tile groups, focus moves from left to right and top to bottom.

{% example palette="light",
        alt="",
        src="../tile-focus-order.png" %}

## Touch targets

The whole tile is selectable, and the required heading or image would make each tile a large enough touch target.

## Additional guidelines

- Include alt text for a slotted image especially if it is wrapped in a link

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}

{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
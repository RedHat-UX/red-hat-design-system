
## Keyboard interactions
Every interactive element is a focus stop and controls are operated using different keyboard inputs. Users should be able to open and close menus while navigating other controls without losing focus. Audio playback and the volume level are expected to respond to keyboard inputs as well.

<uxdot-example color-palette="lightest" width-adjustment="800px">
  <img alt="Image of all players with labels of how to activate or adjust all controls and menus"
       src="../audio-player-a11y-keyboard-interactions.png"
       width="800px">
</uxdot-example>
 
<rh-table>

| Key                    | Result                                                                 |
| ---------------------- | ---------------------------------------------------------------------- |
| <kbd>Tab</kbd>         | Moves the focus to the Close button or to the next interactive element |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous control or interactive element             |
| <kbd>Enter/Space</kbd> | Triggers a button, toggles a button on or off, or opens a menu         |
| <kbd>Space/Esc</kbd>   | Closes a feature if the close button has focus                         |
| <kbd>Left Arrow</kbd>  | Rewinds audio by 15 seconds                                            |
| <kbd>Right Arrow</kbd> | Advances audio by 15 seconds                                           |
| <kbd>Up Arrow</kbd>    | Increases volume or moves focus up within a menu                       |
| <kbd>Down Arrow</kbd>  | Decreases volume or moves focus down within a menu                     |

</rh-table>

## Focus order
A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. The focus moves across the audio player from left to right and top to bottom. When the focus is moved outside of the contextual menu, the menu closes.

<uxdot-example color-palette="lightest" width-adjustment="800px">
  <img alt="Image of all players and the Compact player with a contextual menu open showing the focus order from left to right and top to bottom"
       src="../audio-player-a11y-focus-order.png"
       width="800"
       height="614">
</uxdot-example>

### Toggling a feature
When a user closes a feature by pressing <kbd>Space</kbd> or <kbd>Esc</kbd>, focus returns to the contextual menu button so users can easily open the menu again to return to that feature or select a new one.

<uxdot-example color-palette="lightest" width-adjustment="738px">
  <img alt="Image of the Compact player showing focus landing on the contextual menu or close buttons regardless if a feature is open or closed"
       src="../audio-player-a11y-toggling-feature.png"
       width="738"
       height="540">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.2.1-A.md' %}
{% include 'partials/accessibility/1.2.2-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

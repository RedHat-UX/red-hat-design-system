## Keyboard interactions

The drawer has different keyboard interactions depending on how it is displayed. When the drawer slides over page content, pressing <kbd>Esc</kbd> closes the panel and returns focus to the trigger element. The collapse toggle can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. Focus is constrained within the panel when it slides over content.

<rh-table>

| Key                               | Result                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Moves focus to the next interactive element inside the panel                      |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>   | Moves focus to the previous interactive element inside the panel                  |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Activates the close button, collapse toggle, or trigger element                   |
| <kbd>Esc</kbd>                    | Closes the panel when it slides over content                                      |

</rh-table>


## Focus order

When the drawer opens over page content, the close button receives focus. When a collapsible drawer opens, the collapse toggle receives focus. While the drawer is open over content, interactive elements outside of the drawer cannot be focused.

When the drawer closes, focus returns to the element that triggered the open action. If the drawer was opened via a trigger element referenced by `trigger-id`, that element receives focus on close.

{% include 'partials/accessibility/focusorder.md' %}


## Touch targets

The close button and collapse toggle are selectable. The collapse toggle spans the full height of the panel edge making it easy to select. Clicking or tapping outside of the panel closes it when the drawer is open over content.


## Accessible labels

Each drawer needs an accessible name. If a drawer has a heading (h1–h6) in its slotted content, it will automatically be used as the accessible name.

If there is no slotted heading, users should provide an `accessible-label` attribute, the value of which will be used as the accessible name:

```html
<rh-drawer accessible-label="Side Navigation">
  <nav>Navigation content</nav>
</rh-drawer>
```

If neither an `accessible-label` nor any headings exist, the accessible name falls back to "Panel".


## Additional guidelines

- Content outside of the drawer cannot be interacted with or navigated to while the drawer is open over page content.
- The <kbd>Esc</kbd> key should close the drawer when it is open over page content.
- There should be at least one visible mechanism to close the drawer when it slides over content.
- When the drawer closes, focus should return to the last focused item before the drawer was opened.
- The close button and collapse toggle labels can be customized for localization using the `close-label` and `collapse-label` attributes or their corresponding slots.
- When displayed inline, the drawer uses the `complementary` landmark role so screen readers can identify it as a distinct page region.


{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

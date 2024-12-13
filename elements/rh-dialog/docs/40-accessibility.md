## Keyboard interaction

A dialog can be opened by pressing `Enter` when the dialog trigger has focus. When a dialog is open, moving focus using a keyboard is constrained or trapped within the dialog container. Keyboard navigation by pressing `Tab` will cycle focus through the interactive elements until the dialog is closed.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-a11y-keyboard-interactions.png"
        alt="Flowchart of a dialog container outlining several keyboard interactions"
        width="1000"
        height="423">
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
        <td data-label="Result">Moves focus to the next interactive element in the cycle</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Result">Activates an interactive element or a button</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Esc</kbd></td>
        <td data-label="Result">Dismisses a dialog</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

When a dialog opens, the close dialog button recieves focus by default. Users have the ability to tab through each focusable element in the dialog. When the last focusable element in the dialog is reached, focus returns to the close dialog button—effectively trapping focus inside the dialog.

### Changing focus order depending on content

When a dialog opens, the element that should receive focus depends on the content and size of the modal. To help you decide where to place focus, follow these guidelines:

- If the dialog includes an irreversible action like deleting data, place focus on the least destructive action
- If the dialog includes actions that simply provide additional information like `OK` or `Continue` buttons, place focus on the action that is likely to be most frequently used
- If none of the above apply, focus is automatically placed on the close dialog button

To move focus away from the close dialog button, listen for the [`open` event](https://ux.redhat.com/elements/dialog/code/#rh-dialog-apis) and move focus to the appropriate element in the lightdom via the [`focus()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).

## Touch targets

Only the close button and any interactive elements are selectable.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-a11y-touch-targets.png"
        alt="A dialog container with three touch targets; one on the close button and one on each button"
        width="1000"
        height="322">
</uxdot-example>


### Backdrop

A dialog will close by users clicking or tapping the backdrop or outside of the container.


## Accessible labels

Each dialog needs an accessible name. If a dialog has a heading tag in the `header` or default slot, it will automatically be used as the accessible name of the dialog.

If there is no slotted heading, users should provide an `accessible-label` attribute, the value of which will be used as the accessible name:

```html
<rh-dialog accessible-label="Page Properties" trigger="first-modal-trigger">
  ...
</rh-dialog>
```

The `accessible-label` attribute assigns an `aria-label` to the `<dialog>` element.

If neither an `accessible-label` nor any headings exist, the `aria-label` on the `<dialog>` will default to the text of the dialog's trigger.


## Additional guidelines

- Content outside of a dialog cannot be interacted with or navigated to while the dialog is open
- The `Escape` key should close the dialog
- There should be at least one clickable button that closes the dialog
- Long dialog content can still receive focus via keyboard if it overflows and a scrollbar appears
- When a dialog closes, focus should return to the last focused item before the dialog was opened


{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}


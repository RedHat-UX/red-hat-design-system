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

When a dialog opens, the element that should receive focus depends on the content and size of the modal. To help you decide where to place focus, follow these guidelines:

- If the dialog contains semantic elements like lists or tables that are necessary to perceive in order to better understand dialog content, place focus on a static element at the start of the content
  - The element that receives focus in this way must have `tabindex=“-1”`
- If the dialog includes an irreversible action like deleting data, place focus on the least destructive action
- If the dialog includes actions that simply provide additional information like `OK` or `Continue` buttons, place focus on the action that is likely to be most frequently used
- If none of the above apply, place focus on the first focusable element
- If placing focus on an element causes the beginning of dialog content to scroll out of view, place focus on a static element at the top instead
  - The element that receives focus in this way must have `tabindex=“-1”`



## Touch targets

Only the close button and any interactive elements are selectable.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-a11y-touch-targets.png"
        alt="A dialog container with three touch targets; one on the close button and one on each button"
        width="1000"
        height="322">
</uxdot-example>


### Backdrop

A dialog will not close by users clicking or tapping the backdrop or outside of the container.



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


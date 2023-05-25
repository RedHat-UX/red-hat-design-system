{% section %}

## Keyboard interaction

A dialog can be opened by pressing `Enter` when the dialog trigger has focus. When a dialog is open, moving focus using a keyboard is constrained or trapped within the dialog container. Keyboard navigation by pressing `Tab` will cycle focus through the interactive elements until the dialog is closed.

![Flowchart of a dialog container outlining several keyboard interactions]({{ '../dialog-a11y-keyboard-interactions.png' | url }}){style="--inline-img-max-width:1000px;"}

| Key   | Result                                                   |
| ----- | -------------------------------------------------------- |
| Tab   | Moves focus to the next interactive element in the cycle |
| Enter | Activates an interactive element or a button             |
| Esc   | Dismisses a dialog                                       |

{% endsection %}
{% section %}

## Focus order

When a dialog opens, the element that should receive focus depends on the content and size of the modal. To help you decide where to place focus, follow these guidelines:

- If the dialog contains semantic elements like lists or tables that are necessary to perceive in order to better understand dialog content, place focus on a static element at the start of the content
  - The element that receives focus in this way must have `tabindex=“-1”`
- If the dialog includes an irreversible action like deleting data, place focus on the least destructive action
- If the dialog includes actions that simply provide additional information like `OK` or `Continue` buttons, place focus on the action that is likely to be most frequently used
- If none of the above apply, place focus on the first focusable element
- If placing focus on an element causes the beginning of dialog content to scroll out of view, place focus on a static element at the top instead
  - The element that receives focus in this way must have `tabindex=“-1”`

{% endsection %}
{% section %}

## Touch targets

Only the close button and any interactive elements are selectable.

![A dialog container with three touch targets; one on the close button and one on each button]({{ '../dialog-a11y-touch-targets.png' | url }}){style="--inline-img-max-width:1000px;"}

### Backdrop

A dialog will not close by users clicking or tapping the backdrop or outside of the container.

{% endsection %}

{% section %}

## Additional guidelines

- Content outside of a dialog cannot be interacted with or navigated to while the dialog is open
- The `Escape` key should close the dialog
- There should be at least one clickable button that closes the dialog
- Long dialog content can still receive focus via keyboard if it overflows and a scrollbar appears
- When a dialog closes, focus should return to the last focused item before the dialog was opened

{% endsection %}

{% include 'accessibility/ariaguide.md' %}

{% section %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
{% endsection %}

## Keyboard navigation

Users should have the ability to move focus to a Switch and toggle it on or off using their keyboard.

<uxdot-example color-palette="lightest" width-adjustment="240px">
  <img alt="Diagram of switch with text and arrows that show what can be controlled by keyboard"
       src="../switch-keyboard-nav.svg"
       width="240"
       height="156">
</uxdot-example>

<rh-table>

| Key              | Result                        |
| ---------------- | ----------------------------- |
| <kbd>Tab</kbd>   | Move focus to the Switch      |
| <kbd>Space</kbd> | Toggles the Switch on and off |

</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. If Switches are stacked, focus lands on each as it moves from top to bottom. Each Switch should have the ability to be toggled.

<uxdot-example color-palette="lightest" width-adjustment="193px">
  <img alt="Diagram with four switches and numbers 1 to 4 indicating focus order"
       src="../switch-focus-order.svg"
       width="193"
       height="176">
</uxdot-example>

## Touch targets

Grouped Switches are adequately spaced for optimal touch targets.

<uxdot-example color-palette="lightest" width-adjustment="192px">
  <img alt="group of four switches and red circles with low opacity over each switch"
       src="../switch-touch-targets.svg"
       width="193"
       height="192">
</uxdot-example>

## Using form labels

Like other form elements, switches require labels that are available to assistive tech. These labels may be visible or visually hidden. A label captions its associated switch, offering an indication of its purpose (e.g., “Dark mode”). It’s important to note that a label is not the same as a status message (e.g., “On” and “Off”), and though it's associated with the switch and can control it, the label is not part of the Switch web component.

### Visible labels

If you’re using a visible label, associate it with your switch:
1. Ensure your `<rh-switch>` element has an id value.
2. Add a `<label>` element before `<rh-switch>` with a `for` attribute pointing to the switch’s `id`.

```html rhcodeblock
<label for="my-switch">Switcheroo</label>
<rh-switch id="my-switch"></rh-switch>
```

### Visually-hidden labels

If your label will not be visible, caption your switch via the `accessible-label` attribute.

```html rhcodeblock
<rh-switch accessible-label="Switcheroo"></rh-switch>
```

## Screen reader guidelines

A Switch should communicate the following to users.

- If a Switch is on or off
- What the status messages say
- What happens when a Switch is toggled

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

## Keyboard navigation

Users should have the ability to move focus to a Switch and toggle it on or off using their keyboard.

<!-- add image -->
{% example palette="light",
            alt="",
            src="../" %}

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Key</th>
        <th scope="col" data-label="Character count">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="col" data-label="Key">Tab</td>
        <td scope="col" data-label="Result">Move focus to the Switch</td>
      </tr>
      <tr>
        <td scope="col" data-label="Key">Space</td>
        <td scope="col" data-label="Result">Toggles the Switch on and off</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. If Switches are stacked, focus lands on each as it moves from top to bottom. Each Switch should have the ability to be toggled.

<!-- add image -->
{% example palette="light",
            alt="",
            src="../" %}

## Touch targets

Grouped Switches are adequately spaced for optimal touch targets.

<!-- add image -->
{% example palette="light",
            alt="",
            src="../" %}

## Screen reader guidelines

A Switch should communicate the following to users.

- If a Switch is on or off
- What the text labels say
- What happens when a Switch is toggled

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
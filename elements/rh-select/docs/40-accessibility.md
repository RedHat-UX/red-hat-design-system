## Keyboard interactions

The select toggle and its options can be interacted with using the tab, arrow, space, and enter keys.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing the keyboard interactions for an expanded select"
       src="../select-accessibility-keyboard-interactions.svg"
       width="616"
       height="300">
</uxdot-example>

<rh-table>
  <table>
    <caption class="visually-hidden">Select keyboard navigation behavior</caption>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row"><kbd>Tab</kbd></td>
        <td>
          <ul>
            <li>Moves focus to the select</li>
            <li>Collapses an expanded select when focus leaves it</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Enter</kbd>/<kbd>Space</kbd></td>
        <td>
          <ul>
            <li>Expands select</li>
            <li>Selects an option and collapses the list</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td scope="row"><kbd>Down</kbd></td>
        <td>Moves focus to the next interactive option</td>
      </tr>
      <tr>
        <td scope="row"><kbd>Up</kbd></td>
        <td>Moves focus to the previous interactive option</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing the focus order for an expanded select starting at the top toggle and progressively moving downwards through each non-disabled option."
       src="../select-accessibility-focus-order.svg"
       width="351"
       height="242">
</uxdot-example>

## Touch targets

All toggles and menu items exceed the WCAG [Level AA success criteria for target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), which calls for touch targets to be at least 24px by 24px.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing the touch target size in relation to a select toggle and interactive options"
       src="../select-accessibility-touch-targets.svg"
       width="320"
       height="242">
</uxdot-example>

## Validation and error state

The component does **not** set `aria-invalid` when you set `state="danger"`. The `state` attribute (`danger`, `warning`, `success`) is for visual feedback only. To expose an invalid state to assistive technologies, implementors must set `aria-invalid` on the select themselves (and optionally use the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)).

This keeps a single source of truth for "invalid" in your code and avoids the component asserting "invalid" when you only meant visual emphasis. When you do have a validation error, set both the visual state and ARIA so screen reader users get the same information.

For how to combine `state`, `aria-invalid`, and the Constraint Validation API (including built-in required validation and custom validation), see [Validation and error state](/elements/select/code/#validation-and-error-state) on the Code page.

## Additional guidelines

- If a select does not have an associated <label> element, an accessible-label attribute is required.
- Each option requires a label attribute.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

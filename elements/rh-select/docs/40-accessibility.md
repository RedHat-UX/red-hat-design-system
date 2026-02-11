## Validation and error state

The component does **not** set `aria-invalid` when you set `state="danger"`. The `state` attribute (`danger`, `warning`, `success`) is for visual feedback only. To expose an invalid state to assistive technologies, implementors must set `aria-invalid` on the select themselves (and optionally use the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)).

This keeps a single source of truth for "invalid" in your code and avoids the component asserting "invalid" when you only meant visual emphasis. When you do have a validation error, set both the visual state and ARIA so screen reader users get the same information.

For how to combine `state`, `aria-invalid`, and the Constraint Validation API (including built-in required validation and custom validation), see [Validation and error state](/elements/select/code/#validation-and-error-state) on the Code page.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

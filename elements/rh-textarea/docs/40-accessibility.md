## Labeling

Every `<rh-textarea>` must have an accessible name. Use one of the following approaches:

1. External `<label>` element (recommended)
    * associate a `<label>` with the textarea using `for` and `id`. The component wires the label to the inner textarea via `ariaLabelledByElements`. See the [default demo](/elements/textarea/demo/) for an example.

2. `accessible-label` attribute: use when no visible label is present.

```html rh-codeblock
<rh-textarea accessible-label="Additional comments"></rh-textarea>
```

Users may also add an `aria-label` attribute on the host. This will override all other label sources.

## Disabled vs. readonly

Both `disabled` and `readonly` prevent editing, but they differ in important ways:

- Disabled uses `aria-disabled` (not native `disabled`) so the textarea remains focusable for assistive technology users. Disabled textareas are excluded from form submission. The element receives `pointer-events: none` and muted visual styling.
- Readonly prevents editing but keeps the value submittable. The textarea is fully focusable and interactive for text selection.

## ARIA attributes

Always set ARIA attributes (e.g. `aria-invalid`, `aria-label`) on the `<rh-textarea>` host element. The component is a form-associated custom element, so the browser forwards host ARIA attributes to assistive technologies via `ElementInternals`.

## Validation and error state

The `state` attribute (`danger`, `warning`, `success`) controls visual feedback only and does **not** set `aria-invalid`. When you have a validation error, set both so sighted and screen reader users get the same information:

- `state="danger"` + `help-text="..."` for the visual cue
- `aria-invalid="true"` on the host for assistive tech

This keeps a single source of truth for validity in your code. For implementation details, see [Validation and error state](/elements/textarea/code/#validation-and-error-state) on the Code page.

## Additional guidelines

- If a textarea does not have an associated `<label>` element, an `accessible-label` attribute is required.
- Help text content (via `help-text` attribute or `help-text` slot) is automatically linked to the control via [`ariaDescribedByElements`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaDescribedByElements) so screen readers announce it.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.3.1-A.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.4.7-AA.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

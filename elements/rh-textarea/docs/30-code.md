## Validation and error state

### Built-in validation

When users set the [`required` property](/elements/textarea/code/#rh-textarea-attributes-required) and the textarea is empty, the component participates in the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation). It sets internal validity states (`valueMissing`, `tooShort`, `tooLong`), so the browser can show validation messages when the user submits the form or when you call `reportValidity()`. Use `checkValidity()` or `reportValidity()` on the `<rh-textarea>` element to validate before submit.

The component validates:
- **`required`** — value must not be empty
- **`minlength`** — value must meet the minimum character count
- **`maxlength`** — value must not exceed the maximum character count

See the [Required demo](/elements/textarea/demos#demo-required) for an example of this functionality.

### Custom validation and error state

This component does not set `aria-invalid` when setting `state="danger"`. For custom errors, you should:

1. **Visual state**: Set `state="danger"` and `help-text="My error message"` with the error message.
2. **Semantic state for assistive tech**: Set `aria-invalid="true"` on the `<rh-textarea>` host element so screen readers announce the invalid state.
3. **Blocking form submit**: The component only sets validity for `required`, `minlength`, and `maxlength`. For custom rules, handle submit yourself:
   - In your submit handler, run your custom check.
   - If the check fails: call `preventDefault()` so the form does not submit then set `state="danger"`, `help-text`, and `aria-invalid="true"` so the user sees and hears the error.
   - If the check passes: clear the error state and allow the form to submit.

Example: validate on submit and show a custom error state when the textarea content fails a rule.

```html rhcodeblock
<form id="my-form">
  <label for="notes">Notes</label>
  <rh-textarea id="notes" name="notes" placeholder="Enter your notes"></rh-textarea>
  <button type="submit">Submit</button>
</form>

<script type="module">
  import '@rhds/elements/rh-textarea/rh-textarea.js';

  const form = document.getElementById('my-form');
  const textarea = document.getElementById('notes');

  form.addEventListener('submit', (e) => {
    if (textarea.value.includes('forbidden')) {
      e.preventDefault();
      textarea.setAttribute('state', 'danger');
      textarea.setAttribute('help-text', 'Text contains a forbidden word.');
      textarea.setAttribute('aria-invalid', 'true');
      textarea.focus();
    } else {
      textarea.removeAttribute('state');
      textarea.removeAttribute('help-text');
      textarea.removeAttribute('aria-invalid');
    }
  });
</script>
```

For accessibility implications and why the component does not set `aria-invalid` from `state`, see [Validation and error state](/elements/textarea/accessibility/#validation-and-error-state) in the Textarea accessibility documentation.

### ARIA attributes

Always set ARIA attributes on the host element, not on the inner textarea — the host is the form-associated custom element and the browser exposes its ARIA attributes via `ElementInternals`.

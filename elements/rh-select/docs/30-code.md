## Validation and error state

### Built-in validation

When users set the [`required` property](/elements/select/code/#rh-select-attributes-required) and the no option is selected, the component participates in the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation). It sets an internal validity state (`valueMissing`), so the browser can show "Please fill out this field" when the user submits the form or when you call `reportValidity()`. Use `checkValidity()` or `reportValidity()` on the `<rh-select>` element to validate before submit.

See the [Required demo](/elements/select/demos#demo-required) for an example of this functionality.

### Custom validation and error state

This component does not set `aria-invalid` when setting `state="danger"`. For custom errors, you should:

1. **Visual state**: Set `state="danger"` and `help-text="My error message"` with the error message.
2. **Semantic state for assistive tech**: Set `aria-invalid="true"` on the `<rh-select>` so screen readers announce the invalid state.
3. **Blocking form submit**: The component only sets validity for `required` with an empty value. For custom rules, handle submit yourself:
   - In your submit handler, run your custom check.
   - If the check fails: call `preventDefault()` so the form does not submit then set `state="danger"`, `help-text`, and `aria-invalid="true"` so the user sees and hears the error.
   - If the check passes: clear the error state and allow the form to submit.

Example: validate on submit and show a custom error state when the selected option fails a rule.

```html rhcodeblock
<form id="my-form">
  <label for="region">Region</label>
  <rh-select id="region" name="region" placeholder="Select a region">
    <rh-option value="us">United States</rh-option>
    <rh-option value="eu">European Union</rh-option>
    <rh-option value="deprecated">Legacy (deprecated)</rh-option>
  </rh-select>
  <button type="submit">Submit</button>
</form>

<script type="module">
  import '@rhds/elements/rh-select/rh-select.js';

  const form = document.getElementById('my-form');
  const select = document.getElementById('region');

  form.addEventListener('submit', (e) => {
    const value = select.value;
    if (value === 'deprecated') {
      e.preventDefault();
      select.setAttribute('state', 'danger');
      select.setAttribute('help-text', 'This option is no longer available.');
      select.setAttribute('aria-invalid', 'true');
      select.focus();
    } else {
      select.removeAttribute('state');
      select.setAttribute('help-text', '');
      select.removeAttribute('aria-invalid');
    }
  });
</script>
```

For accessibility implications and why the component does not set `aria-invalid` from `state`, see [Validation and error state](/elements/select/accessibility/#validation-and-error-state) in the Select accessibility documentation.

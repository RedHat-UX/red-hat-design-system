export function submit(form?: HTMLFormElement|null) {
  if (form?.reportValidity()) {
    const event = new Event('submit', { cancelable: true });
    form.dispatchEvent(event);
    if (!event.defaultPrevented) {
      form.submit();
    }
  }
}

# Disclosure

A disclosure is a widget that enables content to be either
collapsed (hidden) or expanded (visible).

## Usage

Place the following markup on your page:

```html
<rh-disclosure summary="Collapsed panel title">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Velit distinctio, nesciunt nobis sit.</p>
</rh-disclosure>
```

### Rich summaries

When summary content should be rich HTML, use the `summary` slot instead of the `summary` attribute

```html
<rh-disclosure>
  <span slot="summary">
    <strong>Rich</strong> summary <em>content</em>
  </span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Velit distinctio, nesciunt nobis sit.</p>
</rh-disclosure>
```

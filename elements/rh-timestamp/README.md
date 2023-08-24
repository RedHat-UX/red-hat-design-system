# Timestamp

A timestamp provides consistent formats for displaying date and time values.

## Usage

Use a timestamp to display date and time values.

### Basic

```html
<rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400"></rh-timestamp>
```

### Basic withh fallback

```html
<rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400">Tue Aug 09 2006 14:57:00 GMT-0400</rh-timestamp>
```

### Basic formats

```html
<rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400" date-format="medium" time-format="short" display-suffix="US Eastern"></section>
```

### Relative

```html
<rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400" relative></section>
```

### Tooltip

```html
<rh-tooltip>
  <rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400"></rh-timestamp>
  <rh-timestamp slot="content" date="Tue Aug 09 2006 14:57:00 GMT-0400" relative></rh-timestamp>
</rh-tooltip>
```

Please see the [design specs][spec] for this element.

[spec]: https://ux.redhat.com/elements/timestamp/

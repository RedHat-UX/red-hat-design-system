<script type="module">
  import '@rhds/elements/rh-timestamp/rh-timestamp.js';
  import '@rhds/elements/rh-tooltip/rh-tooltip.js';
</script>

## Usage
Use a timestamp to display date and time values.

### Default
By default, a timestamp will display the current date and time based on the 
current locale if the `date` attribute is not set.

{% sample columns=1, class='compact' %}
<rh-timestamp></rh-timestamp>
{% endsample %}

## Basic formats
The format of the displayed content can be customized by setting the 
`date-format` and/or `time-format` attributes. Setting only one of the 
attributes will display only the date or time, depending on which attribute is 
set. The possible options are **full**, **long**, **medium**, and **short**.

You can also set the `display-suffix` attribute to display a custom suffix at 
the end of the displayed content. This will not override a timezone that is 
already displayed from the applied time format.

{% sample columns=1, class='compact' %}
<rh-timestamp date-format="full"
              time-format="full"></rh-timestamp>
{% endsample %}


{% sample columns=1, class='compact' %}
<rh-timestamp date-format="full"></rh-timestamp>
{% endsample %}

{% sample columns=1, class='compact' %}
<rh-timestamp time-format="full"></rh-timestamp>
{% endsample %}

{% sample columns=1, class='compact' %}
<rh-timestamp date-format="medium"
              time-format="short"
              display-suffix="US Eastern"></rh-timestamp>
{% endsample %}

## Behavior
### Custom format
The format of the displayed content can be further customized by setting the 
custom-format attributes. Read [datetime format options][formatoptions] for a 
list of options that can be set.

{% sample columns=1, class='compact' %}
<rh-timestamp id="timestamp-custom-format"
              date="Sat Jan 01 2022 00:00:00 GMT-0500"></rh-timestamp>
<script>
  document
    .getElementById('timestamp-custom-format')
    .customFormat = {
      year: '2-digit',
      month: 'short',
      weekday: 'short',
      day: 'numeric',
      hour: 'numeric'
    };
</script>
{% endsample %}

### Adding a tooltip
To add a tooltip that displays the timestamp content as a UTC time, you can wrap 
`rh-timestamp` with `rh-tooltip` and set the `UTC` attribute on an additional 
`rh-timestamp`.

{% sample columns=1, class='compact' %}
<rh-tooltip>
  <rh-timestamp></rh-timestamp>
  <rh-timestamp slot="content"
                utc></rh-timestamp>
</rh-tooltip>
{% endsample %}

{% sample columns=1, class='compact' %}
<rh-tooltip>
  <rh-timestamp></rh-timestamp>
  <rh-timestamp slot="content"
                display-suffix="Coordinated Universal Time"
                utc></rh-timestamp>
</rh-tooltip>
{% endsample %}

### Relative time
To display relative time, set the `relative` attribute on `rh-timestamp`.

{% sample columns=1, class='compact' %}
<rh-timestamp date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)"
              relative></rh-timestamp>
{% endsample %}

{% sample columns=1, class='compact' %}
<rh-timestamp date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)"
              relative></rh-timestamp>
{% endsample %}

### Relative time with tooltip
To display relative time, set the `relative` attribute on `rh-timestamp`.

{% sample columns=1, class='compact' %}
<rh-tooltip>
  <rh-timestamp date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)"
                relative
  ></rh-timestamp>
  <rh-timestamp slot="content"
                date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)"
  ></rh-timestamp>
</rh-tooltip>
{% endsample %}

{% sample columns=1, class='compact' %}
<rh-tooltip>
  <rh-timestamp relative
                date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)"></rh-timestamp>
  <rh-timestamp slot="content"
                date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)"></rh-timestamp>
</rh-tooltip>
{% endsample %}

### Set a locale other than default
The default locale is inferred by the browser. To set the locale to something 
else, set the `locale` attribute.

{% sample columns=1, class='compact' %}
<rh-timestamp locale="en-GB"
              date-format="full"
              time-format="full"></rh-timestamp>
{% endsample %}

{% sample columns=1, class='compact' %}
<rh-timestamp locale="es"
              date-format="full"
              time-format="full"></rh-timestamp>
{% endsample %}


### UTC timestamp
Set the `UTC` attribute.

{% sample columns=1, class='compact' %}
<rh-timestamp utc></rh-timestamp>
{% endsample %}

## Responsive design
Just like text, a timestamp will break to two lines as breakpoints get smaller.

### Large breakpoints
{% example palette="none",
          alt="Timestamp text on desktop and tablet breakpoints",
          src="../timestamp-breakpoints-large.png" %}

### Small breakpoints
{% example palette="none",
          alt="Timestamp text on large and small mobile breakpoints with the smallest mobile example breaking to two lines",
          src="../timestamp-breakpoints-small.png" %}

## Best practices
### Headings
Do not apply a timestamp to headings.

```html
<h2><rh-timestamp></rh-timestamp></h2>
```

[formatoptions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options

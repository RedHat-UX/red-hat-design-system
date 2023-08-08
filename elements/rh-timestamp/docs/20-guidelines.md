## Usage 
Use a timestamp to display date and time values.

### Default
By default, a timestamp will display the current date and time based on the current locale if the `date` attribute is not set.

<!-- todo: light theme container -->
<rh-timestamp></rh-timestamp>

## Basic formats
The format of the displayed content can be customized by setting the `date-format` and/or `time-format` attributes. Setting only one of the attributes will display only the date or time, depending on which attribute is set. The possible options are **full**,**long**, **medium**, and **short**.

You can also set the `display-suffix` attribute to display a custom suffix at the end of the displayed content. This will not override a timezone that is already displayed from the applied time format.

<!-- todo: light theme container -->
<rh-timestamp date-format="full" time-format="full"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp date-format="full" time-format="full"></rh-timestamp>
  </script>
</rh-code-block>

<!-- todo: light theme container -->
<rh-timestamp date-format="full"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp date-format="full"></rh-timestamp>
  </script>
</rh-code-block>


<!-- todo: light theme container -->
<rh-timestamp time-format="full"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp time-format="full"></rh-timestamp>
  </script>
</rh-code-block>

<!-- todo: light theme container -->
<rh-timestamp date-format="medium" time-format="short" display-suffix="US Eastern"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp date-format="medium" time-format="short" display-suffix="US Eastern"></rh-timestamp>
  </script>
</rh-code-block>

## Behavior
### Custom format
The format of the displayed content can be further customized by setting the custom-format attributes. Read [datetime format options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options that can be set.

<!-- todo: light theme container -->
<rh-timestamp id="timestamp-custom-format"
              date="Sat Jan 01 2022 00:00:00 GMT-0500"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp id="timestamp-custom-format" date="Sat Jan 01 2022 00:00:00 GMT-0500"></rh-timestamp>
    <script>
      document.getElementById(‘timestamp-custom-format’).customFormat = {
        year: ‘2-digit’,
        month: ‘short’,
        weekday: ‘short’,
        day: ‘numeric’,
        hour: ‘numeric’
      };
    <</script><script type="text/html">/script>
  </script>
</rh-code-block>

### Adding a tooltip
{% example palette="light",
          alt="Timestamp with a tooltip on top showing the time with the UTC acronym at the end",
          src="../timestamp-tooltip-1.png" %}

<rh-code-block compact>
  <script type="text/html">
    <rh-tooltip>
      <rh-timestamp slot="content" utc></rh-timestamp>
    </rh-tooltip>
  </script>
</rh-code-block>

{% example palette="light",
          alt="Timestamp with a tooltip on top showing the time and the words Coordinated Universal Time at the end",
          src="../timestamp-tooltip-2.png" %}

<rh-code-block compact>
  <script type="text/html">
  <rh-tooltip>
    <rh-timestamp slot="content" utc display-suffix="Coordinated Universal Time"></rh-timestamp>
  </rh-tooltip>
  </script>
</rh-code-block>

### Relative time
To display relative time, set the `relative` attribute on `rh-timestamp`.

<!-- todo -->
<rh-timestamp date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>
  </script>
</rh-code-block>

<!-- todo -->
<rh-timestamp date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>
  </script>
</rh-code-block>

### Relative time with tooltip
To display relative time, set the `relative` attribute on `rh-timestamp`.

{% example palette="light",
          alt="Timestamp with a tooltip on top showing what the date and time would be 11 months previous",
          src="../timestamp-tooltip-3.png" %}

<rh-code-block compact>
  <script type="text/html">
    <rh-tooltip>
      <rh-timestamp slot="content" date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)"></rh-timestamp>
    </rh-tooltip>
  </script>
</rh-code-block>

{% example palette="light",
          alt="Timestamp with a tooltip on top showing what the date and time would be in one year",
          src="../timestamp-tooltip-4.png" %}

<rh-code-block compact>
  <script type="text/html">
    <rh-tooltip>
      <rh-timestamp slot="content" date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)"></rh-timestamp>
    </rh-tooltip>
  </script>
</rh-code-block>

### Set a locale other than default
<!-- todo -->
<rh-timestamp locale="en-GB" date-format="full" time-format="full"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp locale="en-GB" date-format="full" time-format="full"></rh-timestamp>
  </script>
</rh-code-block>

<!-- todo -->
<rh-timestamp locale="es" date-format="full" time-format="full"></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp locale="es" date-format="full" time-format="full"></rh-timestamp>
  </script>
</rh-code-block>

### UTC timestamp
Set the `UTC` attribute.

<!-- todo -->
<rh-timestamp utc></rh-timestamp>

<rh-code-block compact>
  <script type="text/html">
    <rh-timestamp utc></rh-timestamp>
  </script>
</rh-code-block>

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

<!-- todo: add container -->
<rh-timestamp></rh-timestamp>
<style>
  rh-code-block script {
    white-space: pre-wrap;
  }

  rh-code-block + uxdot-example {
    margin-block-start: var(--rh-space-3xl, 48px);
  }
  
  uxdot-example rh-code-block {
    margin-block-start: var(--rh-space-lg, 16px);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px);
    margin-block: var(--rh-space-2xl, 32px);
  }

  .grid uxdot-example {
    margin-block-end: 0;
  }

  @container container (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: var(--rh-space-4xl, 64px);
    }
  }
</style>

## Usage 

Use a timestamp to display date and time values.


### Default

By default, a timestamp will display the current date and time based on the current locale if the `date` attribute is not set.

<uxdot-example>
  <rh-timestamp></rh-timestamp>
</uxdot-example>


## Basic formats

The format of the displayed content can be customized by setting the `date-format` and/or `time-format` attributes. Setting only one of the attributes will display only the date or time, depending on which attribute is set. The possible options are **full**, **long**, **medium**, and **short**.

You can also set the `display-suffix` attribute to display a custom suffix at the end of the displayed content. This will not override a timezone that is already displayed from the applied time format.

<div class="grid">
  <uxdot-example>
    <rh-timestamp date-format="full" time-format="full"></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
<rh-timestamp date-format="full" time-format="full"></rh-timestamp>
      </script>
    </rh-code-block>
  </uxdot-example>
  <uxdot-example>
    <rh-timestamp date-format="full"></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
<rh-timestamp date-format="full"></rh-timestamp>
      </script>
    </rh-code-block>
  </uxdot-example>
  <uxdot-example>
    <rh-timestamp time-format="full"></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
<rh-timestamp time-format="full"></rh-timestamp>
      </script>
    </rh-code-block>
  </uxdot-example>
  <uxdot-example>
    <rh-timestamp date-format="medium" time-format="short" display-suffix="US Eastern"></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
<rh-timestamp date-format="medium" time-format="short" display-suffix="US Eastern"></rh-timestamp>
      </script>
    </rh-code-block>      
  </uxdot-example>
</div>


## Behavior

### Custom format

The format of the displayed content can be further customized by setting the custom-format attributes. Read [datetime format options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options that can be set.

<uxdot-example>
  <rh-timestamp id="timestamp-custom-format" date="Sat Jan 01 2022 00:00:00 GMT-0500"></rh-timestamp>
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
</uxdot-example>


### Adding a tooltip

To add a tooltip that displays the timestamp content as a UTC time, you can wrap `rh-timestamp` with `rh-tooltip` and set the `UTC` attribute on an additional `rh-timestamp`.

<uxdot-example width-adjustment="231px">
  <img src="../timestamp-tooltip-1.png" alt="Timestamp with a tooltip on top showing the time with the UTC acronym at the end">
</uxdot-example>

<rh-code-block compact>
  <script type="text/html">
<rh-tooltip>
  <rh-timestamp slot="content" utc></rh-timestamp>
</rh-tooltip>
  </script>
</rh-code-block>

<uxdot-example width-adjustment="225px">
  <img src="../timestamp-tooltip-2.png" alt="Timestamp with a tooltip on top showing the time and the words Coordinated Universal Time at the end">
</uxdot-example>

<rh-code-block compact>
  <script type="text/html">
<rh-tooltip>
  <rh-timestamp slot="content" utc display-suffix="Coordinated Universal Time"></rh-timestamp>
</rh-tooltip>
  </script>
</rh-code-block>


### Relative time

To display relative time, set the `relative` attribute on `rh-timestamp`.

<div class="grid">
  <uxdot-example>
    <rh-timestamp date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
<rh-timestamp date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>
      </script>
    </rh-code-block>
  </uxdot-example>
  <uxdot-example>
    <rh-timestamp date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
<rh-timestamp date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)" relative></rh-timestamp>
      </script>
    </rh-code-block>
  </uxdot-example>
</div>


### Relative time with tooltip

To display relative time, set the `relative` attribute on `rh-timestamp`.

<uxdot-example width-adjustment="192px">
  <img src="../timestamp-tooltip-3.png" alt="Timestamp with a tooltip on top showing what the date and time would be 11 months previous">
</uxdot-example>

<rh-code-block compact>
  <script type="text/html">
<rh-tooltip>
  <rh-timestamp slot="content" date="Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)"></rh-timestamp>
</rh-tooltip>
  </script>
</rh-code-block>

<uxdot-example width-adjustment="192px">
  <img src="../timestamp-tooltip-4.png" alt="Timestamp with a tooltip on top showing what the date and time would be in one year">
</uxdot-example>

<rh-code-block compact>
  <script type="text/html">
<rh-tooltip>
  <rh-timestamp slot="content" date="Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)"></rh-timestamp>
</rh-tooltip>
  </script>
</rh-code-block>


### Set a locale other than default

The default locale is inferred by the browser. To set the locale to something else, set the `locale` attribute.

<div class="grid">
  <uxdot-example>
    <rh-timestamp locale="en-GB" date-format="full" time-format="full"></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
  <rh-timestamp locale="en-GB" date-format="full" time-format="full"></rh-timestamp>
      </script>
    </rh-code-block>  
  </uxdot-example>

  <uxdot-example>
    <rh-timestamp locale="es" date-format="full" time-format="full"></rh-timestamp>
    <rh-code-block compact>
      <script type="text/html">
  <rh-timestamp locale="es" date-format="full" time-format="full"></rh-timestamp>
      </script>
    </rh-code-block>  
  </uxdot-example>
</div>


### UTC timestamp
Set the `UTC` attribute.

<uxdot-example>
  <rh-timestamp utc></rh-timestamp>
  <rh-code-block compact>
    <script type="text/html">
<rh-timestamp utc></rh-timestamp>
    </script>
  </rh-code-block>
</uxdot-example>


## Responsive design

Just like text, a timestamp will break to two lines as breakpoints get smaller.


### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../timestamp-breakpoints-large.png" alt="Timestamp text on desktop and tablet breakpoints">
</uxdot-example>


### Small breakpoints

<uxdot-example width-adjustment="568px" variant="full" alignment="left" no-border>
  <img src="../timestamp-breakpoints-small.png" alt="Timestamp text on large and small mobile breakpoints with the smallest mobile example breaking to two lines">
</uxdot-example>


## Best practices

### Headings

Do not apply a timestamp to headings.

<uxdot-example danger>
  <h2><rh-timestamp></rh-timestamp></h2>
</uxdot-example>
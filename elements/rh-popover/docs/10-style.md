{% section %}
  ## Style

  A popover should include text and interactive elements like a close button and 
  links.

  {% example palette="lightest",
             width=538,
             alt="Popover component blueprint",
             src="../popover-style.svg" %}

  ### Variants

  **Black and white** are the two popover variants available for use depending 
  on the content and color of the background.

  {% alert state="warning", title="Warning" %}
    A heading does not need to be included, but if links are not included 
    either, use a [Tooltip]({{ 
    '/elements/tooltip' | url }}){target="_blank"} component instead.
  {% endalert %}


  <div class="multi-column--min-400-wide">
    <figure>
      <figcaption><h4>Black (light backgrounds)</h4></figcaption>
      <img src="{{ '../popover-black.svg' | url }}" alt="Popover component, black variant" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>White (dark backgrounds)</h4></figcaption>
      <img src="{{ '../popover-white.svg' | url }}" alt="Popover component, white variant" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>With heading</h4></figcaption>
      <p>Use for messages that require a heading.</p>
      <img src="{{ '../popover-with-heading.svg' | url }}" alt="Popover component, with heading variant" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>Without heading</h4></figcaption>
      <p>Use for messages that do not require a heading.</p>
      <img src="{{ '../popover-without-heading.svg' | url }}" alt="Popover component, without heading variant" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>With drop shadow</h4></figcaption>
      <p>A drop shadow gives a popover subtle elevation above light backgrounds.</p>
      <img src="{{ '../popover-with-drop-shadow.svg' | url }}" alt="Popover component, with drop shadow variant" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>Without drop shadow</h4></figcaption>
      <p>A drop shadow cannot be seen on dark backgrounds, so it is not included.</p>
      <img src="{{ '../popover-without-drop-shadow.svg' | url }}" alt="Popover component, without drop shadow variant" style="--inline-img-max-width:392px;">
    </figure>
  </div>
{% endsection %}

{% section %}
  ## Theme

  For popovers and [tooltips]({{ '/elements/tooltip' | url }}){target="_blank"}, 
  the themes are inverted. For example, light theme popovers are **black* and 
  should be used on light backgrounds; dark theme popovers are **white** and 
  should be used on dark backgrounds.

  ### Black (light backgrounds)

  {% example palette="lightest",
             width=392,
             alt="Popover component, light theme",
             src="../popover-theme-light.svg" %}

  ### White (dark backgrounds)

  {% example palette="darkest",
             width=392,
             alt="Popover component, dark theme",
             src="../popover-theme-dark.svg" %}
{% endsection %}

{% section %}
  ## Responsive design

  A popover has the same proportions and spacing on both large and small 
  screens.

  ### Large screens

  ![Popover component responsive design, large screens]({{ 
  '../popover-responsive-design-lg.svg' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Small screens

  ![Popover component responsive design, small screens]({{ 
  '../popover-responsive-design-sm.svg' | url 
  }}){style="--inline-img-max-width:360px;"}
{% endsection %}

{% section %}
  ## Spacing

  A popover uses [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define 
  spacing values between elements. Each popover orientation contains the same 
  amount of spacing in between the component and icon.

  {% example palette="lightest",
             width=392,
             alt="Popover component spacing",
             src="../popover-spacing.svg" %}
{% endsection %}


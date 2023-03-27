{% section %}
  ## Style

  A tooltip can be placed on a light or dark background. It includes text wrapped 
  in a background container that can sometimes have a drop shadow. The background 
  container also includes an arrow that can point to different icons.

  {% example palette="light",
             width=324,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component style",
             src="../tooltip-blueprint.svg" %}

  ### Light theme

  {% example palette="light",
             width=272,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component, light theme",
             src="../tooltip-theme-light.svg" %}

  ### Dark theme

  {% example palette="dark",
             width=272,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component, dark theme",
             src="../tooltip-theme-dark.svg" %}
{% endsection %}

{% section %}
  ## Responsive design

  A tooltip can be used on both large and small screens depending on the amount 
  of content or available screen space.

  ### Breakpoints

  A tooltip mostly remains the same on large and small screens.

  ### Large screens
  ![Tooltip component responsive design, large screens]({{ 
  '../tooltip-responsive-large-screens.svg' | url }}) 
  {style="--inline-img-max-width: 1000px;margin-block:0 var(--rh-space-4xl);"}

  ### Small screens
  ![Tooltip component responsive design, small screens]({{ 
  '../tooltip-responsive-small-screens.svg' | url }}) 
  {style="--inline-img-max-width: 360px;"}

{% endsection %}

{% section %}
  ## Interaction states
  A tooltip appears next to an icon on hover, focus, or when tapped.

  {% example palette="light",
             width=608,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component interaction states, hovered or tapped",
             src="../tooltip-interaction-states.svg" %}
{% endsection %}

{% section %}
  ## Best practices

  ### Accessibility
  Do not use a dark theme (white) tooltip on a light environment because it will 
  blend into the background too much.

  {% example palette="wrong",
             width=264,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component best practice 1",
             src="../tooltip-best-practice-1.svg" %}

  ### Orientation
  Content within a tooltip should not be cut off by the browser window. Change 
  the tooltip orientation or break the text into multiple lines if it does.

  {% example palette="wrong",
             width=360,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component best practice 2",
             src="../tooltip-best-practice-2.svg" %}

  ### Pairing
  Do not add a tooltip to things that do not require further explanation, like 
  obvious links or components.

  {% example palette="wrong",
             width=186,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component best practice 3",
             src="../tooltip-best-practice-3.svg" %}
{% endsection %}

{% section %}
  ## Spacing

  A Tooltip uses [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
  values between elements. Every tooltip orientation contains the same amount 
  padding in between the arrow and icon.

  {% example palette="wrong",
             width=280,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component spacing, light theme",
             src="../tooltip-spacing-theme-light.svg" %}
{% endsection %}


Tabs can be used in light and dark themes and there are two variants to choose 
from. Open tabs feature a more understated or cleaner visual style whereas Box 
tabs feature a familiar box or container visual style.

{% section %}

{% example palette="light",
           width=872,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Examples of tabs style",
           src="../tabs-style.svg" %}

## Theme

{% example palette="light",
           width=872,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Light theme tabs",
           src="../tabs-theme-light.svg" %}

{% example palette="darkest",
           width=872,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Dark theme tabs",
           src="../tabs-theme-dark.svg" %}

{% example palette="light",
           width=872,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Light theme box tabs",
           src="../tabs-box-theme-dark.svg" %}

{% example palette="darkest",
           width=872,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Dark theme box tabs",
           src="../tabs-box-theme-dark.svg" %}

## Orientation

Both Tab variants have horizontal and vertical orientations. The styles are the 
same between orientations, only the arrangement of elements is different.

Open tabs feature section text labels that float above the anchor line in the 
horizontal orientation or to the right of the anchor line in the vertical 
orientation.

{% example palette="lightest",
           width=872,
           class="inline-stacked",
           style="margin-block:var(--rh-space-2xl);",
           alt="Open tabs orientation",
           src="../tabs-orientation-center.svg" %}
{% example palette="lightest",
           width=708,
           class="inline-stacked",
           style="margin-block:var(--rh-space-2xl);",
           alt="Open tabs orientation",
           src="../tabs-orientation-overflow.svg" %}
{% example palette="lightest",
           width=85,
           class="inline-stacked",
           style="margin-block:var(--rh-space-2xl);",
           alt="Open tabs orientation",
           src="../tabs-orientation-vertical.svg" %}

Box tabs feature section text labels that are contained in a background and are 
aligned to the bottom of the anchor line in the horizontal orientation or to the 
left of the anchor line in the vertical orientation.

{% example palette="lightest",
           width=872,
           class="inline-stacked",
           style="margin-block:var(--rh-space-2xl);",
           alt="Box tabs orientation",
           src="../tabs-orientation-box.svg" %}
{% example palette="lightest",
           width=702,
           class="inline-stacked",
           style="margin-block:var(--rh-space-2xl);",
           alt="Box tabs orientation",
           src="../tabs-orientation-box-overflow.svg" %}
{% example palette="lightest",
           width=102,
           class="inline-stacked",
           style="margin-block:var(--rh-space-2xl);",
           alt="Box tabs orientation",
           src="../tabs-orientation-box-vertical.svg" %}
{% endsection %}

{% section %}
  ## Breakpoints
  Tabs can be used on a variety of screen sizes, but be mindful of how the 
  group of section text labels will scale down on smaller screens.

  ### Desktop

  <div class="inline-stacked">

    ![Desktop width for tabs]({{ '../tabs-responsive-desktop.svg' | url }})
    ![Desktop width for tabs]({{ '../tabs-responsive-vertical-desktop.svg' | url }})

  </div>

  Large screens have lots of space where all of the section text labels can be 
  seen {.footnote}


  ### Tablet

  <div class="inline-stacked" style="--inline-img-max-width: 768px;">

    ![Tablet width for tabs]({{ '../tabs-responsive-tablet.svg' | url }})
    ![Tablet width for tabs]({{ '../tabs-responsive-vertical-tablet.svg' | url }})

  </div>

  Sometimes one or two section text labels will get cut off or break to two 
  lines, which is acceptable {.footnote}

  ### Mobile

  <div class="multi-column--min-300-wide" style="--inline-img-max-width: 360px;">

    ![Tabs on mobile]({{ '../tabs-responsive-mobile.svg' | url }})
    ![Tabs on mobile, vertical]({{ '../tabs-responsive-vertical-mobild.svg' | url }})

  </div>

Don’t use tabs on mobile because too many section text labels will get cut off 
or severely compressed {.footnote}

{% endsection %}

{% section %}
  ## Section
  Tabs use [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
  values between elements.

  ### Open tabs

  {% example palette="light",
             width=872,
             style="margin-block:var(--rh-space-2xl);",
             alt="Open tabs spacing",
             src="../tabs-open-spacing.svg" %}

  ### Box tabs

  {% example palette="light",
             width=872,
             style="margin-block:var(--rh-space-2xl);",
             alt="Box tabs spacing",
             src="../tabs-spacing-box.svg" %}

{% endsection %}


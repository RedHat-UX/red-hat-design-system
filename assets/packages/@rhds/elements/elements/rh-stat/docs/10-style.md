## Theme

<rh-context-provider color-palette="lightest"
                     class="centered"
                     style="border-radius:var(--rh-border-radius-default,3px);">
  <rh-stat>
    <span slot="statistic">80%</span> of Fortune Global 500 telecom 
    companies<sup>1</sup>
  </rh-stat>
</rh-context-provider>


<rh-context-provider color-palette="darkest"
                     class="centered"
                     style="border-radius:var(--rh-border-radius-default,3px);">
  <rh-stat>
    <span slot="statistic">80%</span> of Fortune Global 500 telecom 
    companies<sup>1</sup>
  </rh-stat>
</rh-context-provider>

## Color

{% example palette="light",
           width=590,
           class="centered",
           alt="Statistic component styling - color",
           src="../stat-colors.svg" %}

## Sizes
The default size uses 36pt for the number and 40px for an icon. A large stat 
uses 48pt for the number and 64px for an icon. Both size variations use 18pt for 
body text and 20pt for titles.

{% example palette="light",
           width=752,
           class="centered",
           alt="Examples of stat in the default and large sizes",
           src="../stat-sizes.svg" %}

## Configurations/variants
An icon can be added as the first element in a statistic.

{% cta href="/get-started/icon-library/" %}Learn more about using icons{% endcta %}

<div class="example centered">
  <rh-stat icon="rh-telecom-vertical">
    <span slot="statistic">80%</span>
    <span>of Fortune Global 500 telecom companies<sup>1</sup></span>
  </rh-stat>
</div>

A call to action can be added as the last element in a statistic.

<div class="example centered">
  <rh-stat>
    <span slot="statistic">80%</span>
    <span>of Fortune Global 500 telecom companies<sup>1</sup></span>
    <rh-cta slot="cta">
      <a href="#">Learn more</a>
    </rh-cta>
  </rh-stat>
</div>

A stat can be placed inside a card.

{% example palette="medium",
           width=406,
           class="centered",
           alt="Example of a stat centered in a card",
           src="../stat-config-in-card.svg" %}

## Alignment
All content in a stat should use the same alignment. Currently all stat content 
is centered.

<div class="example centered">
  <rh-stat>
    <span slot="title">More than</span>
    <span slot="statistic">90%</span>
    <span>of Fortune 500 companies rely on Red Hat<sup>1</sup></span>
  </rh-stat>
</div>

{% section %}
  ## Accessibility

  ### Color contrast

  A stat's colors may change based on the theme. This is done to ensure that the 
  color contrast meets WCAG AA standards.

  #### Light theme - primary background

  {% example palette="light",
             width=590,
             class="centered",
             alt="A stat against a white background has a red title and number, black body text, and a blue CTA.",
             src="../stat-accessibility-light-theme-primary-bg.svg" %}

  #### Dark theme - primary background

  {% example palette="darkest",
             width=590,
             class="centered",
             alt="A stat against a black background has a white title, white number, white body text, and a light blue CTA.",
             src="../stat-accessibility-dark-theme-primary-bg.svg" %}

  #### Light theme - secondary background
  <!-- TODO: bring `example` palettes in line with tokens -->
  <div class="example" style="background: var(--rh-color-surface-light, #f0f0f0); border-radius: var(--rh-border-radius-default, 3px);">
    <div class="centered">
      <img alt="A stat against a white background has a red title and number, black body text, and a blue CTA."
           src="{{ '../stat-accessibility-light-theme-secondary-bg.svg' | url }}"
           style="--inline-img-max-width: 590px;">
    </div>
  </div>

  #### Dark theme - secondary background
  <div class="example" style="background: var(--rh-color-surface-darker, #212427); border-radius: var(--rh-border-radius-default, 3px);">
    <div class="centered">
      <img alt="A stat against a dark grey background has a white title and number, very light grey body text, and a light blue CTA."
           src="{{ '../stat-accessibility-dark-theme-secondary-bg.svg' | url }}"
           style="--inline-img-max-width: 590px;">
    </div>
  </div>
{% endsection %}

{% section %}
  ## Responsive design

  ### Large screens

  A single stat will span a maximum of 6 columns.

  ![Example of a stat centered in a card]({{ '../stat-responsive-desktop.svg' | url }}) {style="--inline-img-max-width: 1000px;margin-block-end:var(--rh-space-3xl);"}

  ## Small screens

  Stats in a row on large screens will stack on smaller screens. Font sizes will 
  adjust based on the [mobile typography]({{ '/foundations/typography/' | url }}) 
  scale.

  ![Three stats stacked in a 328px container with 16px margins on either side]({{ '../stat-responsive-mobile.svg' | url }}) {style="--inline-img-max-width:360px;margin-block-end:var(--rh-space-3xl);"}
{% endsection %}

{% section %}
  ## Spacing

  ### Within the component

  The Statistic component uses [spacers]({{'/foundations/spacing' | url }}) to 
  define space values between elements. The default and large variations use the 
  same spacing.

  {% example palette="light",
             width=348,
             class="centered",
             alt="Stat uses 8px of space below icon, 8px of space below number, and 24px of space below body text.",
             src="../stat-spacing.svg" %}

  ### Within groups of stats

  Spacing between vertically stacked stats should be 48px.

  {% example palette="light",
             width=360,
             class="centered",
             alt="Example of two stats stacked with a 48px spacer in between.",
             src="../stat-vertical-spacing.svg" %}

{% endsection %}

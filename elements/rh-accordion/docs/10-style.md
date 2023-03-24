{% section %}
## Style

Accordions can be used in light and dark themes. They consist of 
vertically-stacked panels that are separated by a thin line when collapsed. 
Every panel contains a section text label and a caret icon that rotates to 
indicate if a panel is collapsed or expanded. When a panel is expanded, it 
includes different styling that consists of an active border on the left and a 
slight drop shadow, also used for a [Disclosure]({{ '/components/disclosure' | 
url }}).

{% example palette="light",
           style="--inline-img-max-width:872px;margin-block:var(--rh-space-2xl)",
           alt="Expanded accordion panel with labels",
           src="../accordion-style-1.svg" %}

## Theme

{% example palette="light",
           style="--inline-img-max-width:872px;margin-block:var(--rh-space-2xl)",
           alt="Expanded accordion panel with labels",
           src="../accordion-theme-1.svg" %}

{% example palette="darkest",
           style="--inline-img-max-width:872px;margin-block:var(--rh-space-2xl)",
           alt="Expanded accordion panel with labels",
           src="../accordion-theme-2.svg" %}

{% endsection %}

{% section %}
## Responsive design

Accordions work well when used on both large and small screens.

### Breakpoints

Accordions can be used on smaller screens, but the limited screen space makes 
content taller which might make users scroll more, so be careful about how much 
content is included.

### Desktop

![Expanded accordion on tablet]({{ '../accordion-responsive-1.svg' | url }}) {style="margin-block:var(--rh-space-md);"}

### Tablet

![Expanded accordion on tablet]({{ '../accordion-responsive-2.svg' | url }}) {style="margin-block:var(--rh-space-md);--inline-img-max-width: 768px;"}

### Mobile

![Expanded accordion on mobile]({{ '../accordion-responsive-3.svg' | url }}) {style="margin-block:var(--rh-space-md);--inline-img-max-width: 352px;"}

{% endsection %}

{% section %}
## Spacing

Accordions use [PatternFly 4 spacers][spacers] to define spacing values between 
elements.

![Accordion with spacers]({{ '../accordion-spacing-1.svg' | url }}) {style="margin-block-start:var(--rh-space-2xl);"}

![Nested accordion with spacers]({{ '../accordion-spacing-2.svg' | url }}) {style="margin-block:var(--rh-space-3xl);"}

[spacers]: https://www.patternfly.org/v4/guidelines/spacers
{% endsection %}

{% section %}
## Style

An avatar can be used in light and dark themes. They feature a circular 
silhouette icon and are always grouped with text, like attribution or some kind 
of descriptor.

{% example palette="light",
           width=239,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Anatomy of an avatar",
           src="../avatar-style-1.svg" %}

{% endsection %}

{% section %}
## Theme

{% example palette="light",
           width=239,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Example of an avatar used in a light theme",
           src="../avatar-theme-1.svg" %}

{% example palette="darkest",
           width=239,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Example of an avatar used in a dark theme",
           src="../avatar-theme-2.svg" %}

### Size

The size of an avatar depends on where they are used and how much information 
is included. For example, the size of an avatar used in the navigation needs to 
be smaller than an avatar used in a bigger layout with more space. The maximum 
size of an avatar is 64px, so be mindful of the amount of text that is included 
next to it.

### Text positioning

Text is positioned to the right or centered below an avatar.

<div class="multi-column--min-300-wide">
  <div>
    {% example palette="light",
               width=239,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="Example of text positioned to the right of an avatar",
               src="../avatar-theme-3.svg" %}
    <p class="footnote">Attribution or descriptor text is vertically-aligned</p>
  </div>

  <div>
    {% example palette="light",
               width=242,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="Example text positioned below an avatar",
               src="../avatar-theme-4.svg" %}
    <p class="footnote">Attribution or descriptor text is horizontally-aligned</p>
  </div>
</div>

{% endsection %}

{% section %}
## Spacing

An avatar uses [PatternFly 4 
spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
values between the avatar and text.

<div class="multi-column--min-300-wide">
  {% example palette="light",
             width=240,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="An avatar with short text, vertically aligned",
             src="../avatar-spacing-1.svg" %}
  {% example palette="light",
             width=160,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="An avatar with longer text aligned to the top",
             src="../avatar-spacing-2.svg" %}
</div>

{% endsection %}


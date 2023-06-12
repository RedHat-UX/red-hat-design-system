
## Style

{% example palette="lightest",
           width=758,
           alt="Call to action component blueprint",
           src="../cta-blueprint.svg" %}

### Variants

There are several call to action variants available for use depending on what 
you want a user to select.

<div class="multi-column--min-400-wide">
  <div>
    <h4>Primary</h4>
    <p>Use for the primary or most important link. This variant is the highest 
    in hierarchy and can also be used to play a video in a <a 
    href="/elements/modal/" target="_blank">Modal dialog</a> or large 
    container.</p>
    <img alt="Call to action component, Primary variant"
         src="{{ '../cta-variant-primary.svg' | url }}"
         style="--inline-img-max-width: 141px;">
  </div>
  <div>
    <h4>Primary (video)</h4>
    <p>Used only to play an important video in a <a href="/elements/modal/" 
    target="_blank">Modal dialog</a> or large container. Do not use without a 
    background underneath or use the <strong>Primary</strong> or 
    <strong>Default, video</strong> variants instead.</p>
    <img alt="Call to action component, Primary (video) variant"
         src="{{ '../cta-variant-primary-video.svg' | url }}"
         style="--inline-img-max-width: 153px;">
  </div>
  <div>
    <h4>Primary (white)</h4>
    <p>Use if the red variant conflicts with other elements or violates accessibility standards. Use on dark backgrounds, otherwise use the <strong>Secondary</strong> variant instead.</p>
    <img alt="Call to action component, Primary (white) variant"
         src="{{ '../cta-variant-primary-white.svg' | url }}"
         style="--inline-img-max-width: 157px;">
  </div>
  <div>
    <h4>Secondary</h4>
    <p>Use for secondary or general links. This variant is lower in hierarchy than the Primary variant and can be used multiple times in the same container or layout.</p>
    <img alt="Call to action component, Secondary variant"
         src="{{ '../cta-variant-secondary.svg' | url }}"
         style="--inline-img-max-width: 162px;">
  </div>
  <div>
    <h4>Brick</h4>
    <p>Use to group links together. Only the Brick variant can stretch to fit a container or grid, otherwise the text label padding in other variants stays the same.</p>
    <img alt="Call to action component, Brick variant"
         src="{{ '../cta-variant-brick.svg' | url }}"
         style="--inline-img-max-width: 116px;">
  </div>
  <div>
    <h4>Brick (icon)</h4>
    <p>Use to group links with icons together. Only the Brick variant can stretch to fit a container or grid, otherwise the text label padding in other variants stays the same.</p>
    <img alt="Call to action component, Brick (icon) variant"
         src="{{ '../cta-variant-brick-icon.svg' | url }}"
         style="--inline-img-max-width: 156px;">
  </div>
  <div>
    <h4>Default</h4>
    <p>Use for tertiary or the least important links. This variant is the lowest in hierarchy and can be used multiple times in the same container or layout.</p>
    <img alt="Call to action component, Default variant"
         src="{{ '../cta-variant-default.svg' | url }}"
         style="--inline-img-max-width: 102px;">
  </div>
  <div>
    <h4>Default (video)</h4>
    <p>Use to play less important videos in a <a 
    href="https://ux.redhat.com/elements/dialog/" target="_blank">Modal 
    dialog</a> only. This variant is the lowest in hierarchy and can be used 
    multiple times in the same container or layout.</p>
    <img alt="Call to action component, Default (video) variant"
         src="{{ '../cta-variant-default-video.svg' | url }}"
         style="--inline-img-max-width: 95px;">
  </div>
</div>



## Theme

### Light theme

{% example palette="light",
           width=670,
           alt="Call to action component, light theme",
           src="/element/cta/cta-theme-light.svg" %}

### Dark theme

{% example palette="darkest",
           width=808,
           alt="Call to action component, dark theme",
           src="/element/cta/cta-theme-dark.svg" %}



## Responsive design

### Ordering

When call to action links are grouped together, they are ordered by hierarchy 
from left to right. On small screens, the order changes to **left to right 
and top to bottom** if there are call to action links that fall into a second 
row.

{% example palette="lightest",
           width=750,
           alt="Call to action component responsive design, ordering",
           src="../cta-responsive-design-ordering.svg" %}

### Long text labels

Long text labels will wrap to two lines on small screens or when translated to 
certain languages. This can be avoided by writing less text or revising existing 
text to be shorter.

{% alert state="warning", title="Warning" %}
The Default call to action link arrow should not appear by itself, it should 
always be connected to at least one word on the same line.
{% endalert %}

{% example palette="lightest",
           width=360,
           alt="Call to action component responsive design, long text labels",
           src="../cta-responsive-design-long-text-labels.svg" %}

#### Brick

The Brick variants will move around the grid to accommodate different container 
sizes.

{% alert state="warning", title="Warning" %}
Long text labels might break to two lines which adds height and disrupts the 
grid, therefore write **no more than two or three words** per link.
{% endalert %}

![Call to action component responsive design, ordering]({{ '../cta-responsive-design-brick.svg' | url }}") {style="--inline-img-max-width:1000px;margin-block:var(--rh-space-2xl) 0"}



## Spacing

Call to action links use [PatternFly 4 spacers][spacers]{target="_blank"} to 
define spacing values between elements.

{% alert title="Helpful tip" %}
  The same variants across **both themes** share the same spacing values, for 
  example Primary, Secondary, and Default variants.
{% endalert %}

{% example palette="light",
           width=664,
           alt="Call to action component spacing",
           src="../cta-spacing.svg" %}

[spacers]: https://www.patternfly.org/v4/guidelines/spacers



Buttons can be used in light and dark themes. There are a variety of styles to 
choose from depending on what users need to accomplish.

<!-- Anatomy image with sketch -->

{% example palette="light",
           width=370,
           class="inline-flex centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Naming button parts",
           src="../button-style.svg" %}

{% section %}
## Theme

{% example palette="light",
           width=680,
           class="inline-flex centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Themes of buttons",
           src="../button-theme-light.svg" %}

{% example palette="darkest",
           width=680,
           class="inline-flex centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Themes of buttons",
           src="../button-theme-dark.svg" %}

<div style="display:grid;gap:var(--rh-space-2xl) var(--rh-space-4xl);grid-template-columns:repeat(auto-fit,minmax(400px,1fr));">

<div>

### Danger
Use for actions that are difficult or impossible to undo, like Delete. This 
style has the same hierarchy as the Primary style due to its destructive 
nature. Don’t use this style multiple times in the same area.

</div>
<div>

### Danger, secondary
Use for less destructive actions, like Cancel. This style is lower in hierarchy 
than the Danger style and it should be placed on its right side. Don’t use this 
style multiple times in the same area unless necessary.

</div>
<div>

### Danger, link
Use for secondary or general links. This style is lower in hierarchy than 
the Primary style and it can be used multiple times in the same area.

</div>

<hr style="grid-column:-1/1;">

<div>

### Primary
Use to group a list of links together in a grid. Only Brick styles can 
stretch to fit a container or a grid, otherwise the label padding stays the 
same in all other styles.

</div>
<div>

### Secondary
Use to group a list of links with icons together in a grid. Only Brick 
styles can stretch to fit a container or a grid, otherwise the label padding 
stays the same in all other styles.

</div>
<div>

### Tertiary
Use for tertiary or the least important links. This style is the lowest 
in hierarchy and it can be used multiple times in the same area.

</div>
<div>

### Search
Use to trigger a less important video that will play in a modal. This 
style is the lowest in hierarchy and it can be used multiple times in the 
same area.

</div>
<div>

### Disabled
Most styles will appear disabled if a task needs to be completed first. 
Don’t use multiple times in the same area unless necessary.

</div>
<div>

### Link
Use for less important actions or group it to the right of other styles. 
This style has an invisible background and no border. It can be used 
multiple times in the same area.

</div>
<div>

### Play
Use to trigger a video that will play in a Modal. Don’t use this style 
without a thumbnail image underneath or use a Default, video call to action 
instead.

</div>
<div>

### Close
Use to close something, like an Alert. Don’t use this style multiple 
times in the same area.

</div>

</div>

{% endsection %}

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
  ## Spacing
  Buttons use [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
  values between elements.

  {% example palette="light",
             width=560,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="button spacing",
             src="../button-spacing.svg" %}
{% endsection %}


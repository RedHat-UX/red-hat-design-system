## Usage
Use a blockquote to highlight quotation and citation text so users can identify them easier. A blockquote has a flexible layout and it includes a variety of optional elements, so use it strategically because there is a balance between using some and too many blockquotes. A blockquote should have adequate padding around it to avoid competing with other content or elements.

## Sizes
Use the Default size for larger amounts of text and the Large size for smaller amounts of text.

{% example palette="light",
           width=872,
           class="centered",
           alt="Image of two blockquotes, default size on the left and large size on the right with green check icons below",
           src="../blockquote-usage-sizes.png" %}

## Alignment



<div class="centered margin-top--4 margin-bottom--6">
  <img alt="Blockquote layout" class="margin-bottom--2" src="{{ '../blockquote-layout-2.svg' | url }}">
</div>

A center-aligned blockquote is eight grid columns wide and can't be used with 
other components {.footnote}

<div class="centered margin-top--4 margin-bottom--6">
  <img alt="blockquote layout" src="{{ '../blockquote-layout-3.svg' | url }}">
</div>

When used with a [Card]({{ '/elements/card' | url }}), a left-aligned blockquote 
is seven grid columns wide (7-1-4 layout) {.footnote}

<div class="centered margin-top--4 margin-bottom--6">
  <img alt="Blockquote layout" src="{{ '../blockquote-layout-4.svg' | url }}">
</div>

When used with a [Video thumbnail]({{ "/patterns/video-thumbnail" | url }}), a 
left-aligned blockquote is five grid columns (5-1-6 layout) {.footnote}

<hr style="margin-block:var(--rh-space-lg) var(--rh-space-5xl);">

{% section %}
## Best practices
Don't omit attribution from a blockquote.

{% example palette="wrong",
           width=652,
           class="centered",
           style="margin-block-end:var(--rh-space-lg);",
           alt="blockquote without attribution",
           src="../blockquote-bestpractice-1.svg" %}

Don't add a thin vertical bar to a left-aligned blockquote that's used by 
itself.

{% example palette="wrong",
           width=632,
           class="inline-flex centered",
           style="margin-block-end:var(--rh-space-lg);",
           alt="Bar blockquote wrong usage",
           src="../blockquote-bestpractice-2.svg" %}

Don't place components next to a center-aligned blockquote.

{% example palette="wrong",
           width=870,
           class="inline-flex centered",
           style="margin-block-end:var(--rh-space-lg);",
           alt="Centered blockquote next to video",
           src="../blockquote-bestpractice-3.svg" %}

{% endsection %}

{% section %}
## Interaction states
A blockquote should be text only and shouldn't include any links that might 
distract a user from reading.
<!-- For more information about link interaction states, see future link.-->
{% endsection %}

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
## Spacing
A blockquote uses [PatternFly 4 spacers][spacers] to define the spacing values 
between elements.

{% example palette="light",
           width=652,
           class="centered",
           alt="Spacing used in blockquote component",
           src="../blockquote-spacing.svg" %}

[spacers]: https://www.patternfly.org/v4/guidelines/spacers/
{% endsection %}

{% section %}

## Responsive design

A blockquote can be used on large and small screens, but content will get 
longer as space reduces.

### Breakpoints
When breakpoints get smaller, a left-aligned blockquote will stay left-aligned, 
same with a center-aligned blockquote. If a left-aligned blockquote is used with 
components, they drop underneath the quote and all elements are then organized 
in one column.

### Desktop

<div style="display:flex;flex-direction:column;gap:var(--rh-space-2xl);margin-block:var(--rh-space-2xl);">
  <img alt="blockquote on desktop" src="{{ '../blockquote-breakpoint-1.svg' | url }}">
  <img alt="Centered blockquote on desktop" src="{{ '../blockquote-breakpoint-2.svg' | url }}">
  <img alt="blockquote on tablet" src="{{ '../blockquote-breakpoint-3.svg' | url }}">
  <img alt="blockquote on tablet centered" src="{{ '../blockquote-breakpoint-4.svg' | url }}">
</div>

### Tablet

<div style="--inline-img-max-width:768px;display:flex;flex-direction:column;gap:var(--rh-space-2xl);margin-block:var(--rh-space-2xl);">
  <img alt="blockquote on tablet with titles" src="{{ '../blockquote-breakpoint-5.svg' | url }}">
  <img alt="blockquote on tablet with titles" src="{{ '../blockquote-breakpoint-6.svg' | url }}">
  <img alt="blockquote on tablet with titles" src="{{ '../blockquote-breakpoint-7.svg' | url }}">
</div>

<div style="--inline-img-max-width:768px;display:flex;flex-direction:column;gap:var(--rh-space-2xl);margin-block:var(--rh-space-2xl);">
  <img alt="blockquote on tablet with titles" src="{{ '../blockquote-breakpoint-5.svg' | url }}">
  <img alt="blockquote on tablet with titles" src="{{ '../blockquote-breakpoint-8.svg' | url }}">
</div>

### Mobile

<div class="multi-column--400-wide" style="--inline-img-max-width:360px;row-gap:var(--rh-space-3xl);margin-block:var(--rh-space-md);">
  <img alt="blockquote on mobile" src="{{ '../blockquote-breakpoint-mobile-1.svg' | url }}">
  <img alt="blockquote on mobile" src="{{ '../blockquote-breakpoint-mobile-2.svg' | url }}">
  <img alt="blockquote on mobile" src="{{ '../blockquote-breakpoint-mobile-3.svg' | url }}">
  <img alt="blockquote on mobile" src="{{ '../blockquote-breakpoint-mobile-4.svg' | url }}">
</div>

{% endsection %}


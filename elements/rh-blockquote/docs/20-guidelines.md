## Layout
The width of a blockquote on large screens is determined by alignment and if 
they're used with a component. <!--For more information about layout 
configurations, see Layout (future link)-->

<div class="centered margin-top--4 margin-bottom--6">
  <img alt="Blockquote layout" src="{{ '../blockquote-layout-1.svg' | url }}">
</div>

When used on its own or with large text styles or a logo on top, a left-aligned 
blockquote is seven grid columns wide {.footnote}

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


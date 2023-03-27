A default blockquote consists of three required elements, a quote icon, text, 
and attribution. It can be left- or center-aligned on large and small screens. A 
left-aligned blockquote can also feature additional elements, like large text 
styles and components on top or to the right whereas a center-aligned blockquote 
can't include anything else.

{% example palette="light",
           width=623,
           class="centered",
           alt="blockquote breakdown",
           src="../blockquote-style-1.svg" %}

Only the left-aligned blockquote can include these additional elements {.footnote.footnote-alignment}

## Theme

{% example palette="light",
           width=652,
           class="centered",
           alt="Example of a left-aligned blockquote",
           src="../blockquote-theme-1.svg" %}

{% example palette="darkest",
           width=623,
           class="centered",
           alt="Example of a left-aligned blockquote",
           src="../blockquote-theme-2.svg" %}

## Quote icon
A red quote icon is always placed above the blockquote text in both themes.

## Attribution
A blockquote always has attribution text underneath that gives credit to whoever 
the quote is from.

## Additional elements
A left-aligned blockquote can feature additional elements on top, like large 
text styles or a logo. If these optional elements are used, a thin vertical bar 
is added to the left of a blockquote to maintain focus with readers. These 
additional elements can be used without including a component to the right.

{% example palette="light",
           width=632,
           class="centered",
           alt="Example of a left-aligned blockquote",
           src="../blockquote-additional-elements-1.svg" %}

{% example palette="light",
           width=632,
           class="centered",
           alt="Example of a left-aligned blockquote",
           src="../blockquote-additional-elements-2.svg" %}

<hr style="margin-block:var(--rh-space-5xl);">

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


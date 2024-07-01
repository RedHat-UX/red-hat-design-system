---
title: Color Palettes
bodyClasses: element-docs
order: 2
---
<link rel="stylesheet" href="/assets/packages/@rhds/elements/rh-pagination/rh-pagination-lightdom.css">

<script type="module">
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
</script>

## What are color palettes
There are various color palettes within our design system. The palettes you will use the 
most for the majority of your projects are the lightest and darkest themes.

<uxdot-example>
  <img src="/assets/theming/light-theme.png"
       alt="examples of several elements against a white surface">
</uxdot-example>


### How color palettes work

Color palettes allow for the creation of different experiences using the same design 
system. When a color palette is changed, elements change including color, space, text, 
and more. Layouts, content, and imagery usually stay the same.

## Choosing a color palette

How you choose a color palette is based on content, user experience, and accessibility 
needs.

### Lightest color palette

The lightest color palette is the default and has lots of use cases.

### Darkest color palette

The darkest color palette can be used for highlighting content with dark colors or if a 
brighter interface would otherwise disrupt the user experience. Most light 
elements and patterns have dark counterparts.

<rh-alert state="warning">
  <h4 slot="header">Brand red and accessibility</h4>
  <p>Do not apply the Red Hat red color to text in dark environments
  unless it meets <a href="https://www.w3.org/WAI/WCAG21/Understanding/">WCAG 2.1 AA</a>
  requirements.</p>
</rh-alert>

<rh-context-demo id="elements" color-palette="lightest"></rh-context-demo>

<div hidden>

### Desaturated color-palette <rh-tag color="purple">Beta</rh-tag>

The desaturated theme can be used when elements or patterns need to be placed on 
large areas of color or some of the surface gray values.

<rh-alert>
  <h4 slot="header">Update from the team</h4>
  <p>The design system team is working on creating desaturated theme best
  practices in the near future. <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Contact
  us</a> if you would like to contribute.</p>
</rh-alert>

<uxdot-example>
  <img alt="examples of white call to action variants against dark blue and dark gray surfaces",
       src="/assets/theming/desaturated-theme.png">
</uxdot-example>

</div>

### Illustrations and imagery

Illustrations and imagery should align to the theme. The light theme should 
feature imagery with light colors and vice versa. Imagery with high contrast is 
only acceptable if it has a transparent background. If you cannot find 
theme-specific imagery, contact the Brand team.

<rh-alert>
  <h4 slot="header">More information</h4>
  <p>High contrast is using bright elements, patterns, or images in dark
environments and vice versa. This is useful to focus attention or create
visual tension.</p>
</rh-alert>

<uxdot-example>
  <img alt="correct uses of an illustration with a transparent background and one illustration incorrectly using a white background in a dark theme area",
       src="/assets/theming/illustrations-and-imagery.png">
</uxdot-example>

<!-- ATTN: content below this line should be revised to emphasize "palettes" over "context" and integrated into the above -->

<style>
  .card-snippet-grid {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: var(--rh-space-4xl)  var(--rh-space-lg);
    padding: var(--rh-space-4xl);
    border-radius: var(--rh-border-radius-default);
    border: solid var(--rh-border-width-sm) var(--rh-color-border-subtle-on-light);
    & pre[class^="language-"] {
      margin: 0;
    }
  }
</style>

Red Hat Design System comes with a contextual color-theming feature called 
"Color Context", designed to make page developers' and content authors' jobs
easier and to improve customers' digital experiences. Authors and developers who
adopt the color context system will produce accessible, branded experiences with 
less effort and greater cross-property consistency.

<rh-blockquote>
  HTML design systems help teams ship better digital experiences, faster.
</rh-blockquote>

## How Color Context works
<abbr title="red hat design system">RHDS</abbr>' color context system is an 
*HTML* and *CSS* system with some supporting JavaScript[1].
The color context system has two main parts: **providers** and **consumers**. 
Providers actively define a color theme, while consumers passively accept their 
theme from the nearest provider ancestor.

### Color context providers
Context **providers** define a **color palette** for themselves and their child 
elements. There are currently six main color palettes:
1. lightest
1. lighter
1. light
1. dark
1. darker
1. darkest

Context providers typically use the `lightest` color palette as the default. 
Authors may define the color palette of a container using the `color-palette` HTML
attribute. So for example, to create a card with the darkest color palette, use 
this HTML:

<div class="card-snippet-grid">

```html
<rh-card>
  <p>
    This card uses the default
    color palette.
  </p>
</rh-card>
```

<rh-card>
  <p>
    This card uses the default
    color palette.
  </p>
</rh-card>

```html
<rh-card color-palette="darkest">
  <p>
    This card uses the author-set
    "darkest" color palette.
  </p>
</rh-card>
```

<rh-card color-palette="darkest">
  <p>
    This card uses the author-set
    "darkest" color palette.
  </p>
</rh-card>

</div>


### Color context consumers
Context **consumers**, which adopt a **color theme**. There are two main 
color themes, corresponding to the above palettes:
1. light
1. dark

Child elements which are providers will automatically adapt, applying their own 
**color theme** as needed. Page authors *do not need to and should not customize*
colors of consumer elements.

Color context containers can be nested, such that child elements will always 
adopt the color theme corresponding to the nearest container's palette.

Extending our card example from above, if our page author then adds an `<rh-cta>` to the card, it will *automatically* adopt the dark color theme. The page author need not and should not customize the CTA.

<div class="card-snippet-grid">

```html
<rh-card>
  <p>
    The card <em>and</em> 
    CTA use the default colors.
  </p>
  <rh-cta slot="footer">Fine!</rh-cta>
</rh-card>
```

<rh-card>
  <p>
    The card <em>and</em> 
    CTA use the default colors.
  </p>
  <rh-cta slot="footer">Fine!</rh-cta>
</rh-card>

```html
<rh-card color-palette="darkest">
  <p>
    The card uses the "darkest" palette.
    The CTA is automatically themed
    with the "dark" theme.
  </p>
  <rh-cta slot="footer">Nice!</rh-cta>
</rh-card>
```

<rh-card color-palette="darkest">
  <p>
    The card uses the "darkest" palette.
    The CTA is automatically themed
    with the "dark" theme.
  </p>
  <rh-cta slot="footer">Nice!</rh-cta>
</rh-card>

</div>

<rh-blockquote>
  Color context lets authors write more HTML, and less CSS and JavaScript
</rh-blockquote>

### Combination elements
Some elements are both providers and consumers. Card, for example is both a 
provider and a consumer. It can accept the color theme of its context and it 
can also set its own color palette.

<rh-context-demo id="cards-demo">
  <rh-card>
    <h2 slot="header">Consumer</h2>
    <rh-tag slot="header"
            icon="info"
            color="purple">passive</rh-tag>
    <p>
      This card acts as a consumer.
      It will always receive its parent's <code>ColorTheme</code>.
    </p>
    <rh-cta slot="footer">
      <a href="/elements/card/">Read card docs</a>
    </rh-cta>
  </rh-card>
  <rh-card id="provider-card"
           color-palette="lightest">
    <h2 slot="header">Provider</h2>
    <rh-tag slot="header"
            icon="info"
            color="green">active</rh-tag>
    <p>
      This card acts as a provider.
      Try changing this card's 
      <code>color-palette</code>
      and see how it affects this card's children.
    </p>
    <label>
      Set this card's color palette.
      <rh-context-picker target="provider-card" value="lightest"></rh-context-picker>
    </label>
    <rh-cta slot="footer">
      <a href="/elements/call-to-action/">Read CTA docs</a>
    </rh-cta>
  </rh-card>
</rh-context-demo>

<style>
  #cards-demo::part(demo) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--rh-space-lg);
  }
  #cards-demo rh-card::part(header) {
    flex-direction: row;
  }
  #cards-demo h2 {
    margin-inline-end: auto;
  }
</style>


<!-- This is a footer -->
<uxdot-feedback>

## Foundations
To learn how to use our other foundations in your designs, visit the
[foundations](/foundations) section.

</uxdot-feedback>

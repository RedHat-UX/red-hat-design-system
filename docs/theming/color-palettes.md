---
title: Color Palettes
bodyClasses: element-docs
hasToc: true
order: 2
---
<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-pagination/rh-pagination-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="../color-palettes.css">

<script type="module" data-helmet>
  import '/assets/javascript/elements/uxdot-pattern.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

Red Hat Design System comes with a contextual color-theming feature called 
"Color palettes", designed to make page developers' and content authors' jobs
easier and to improve customers' digital experiences. Authors and developers who
adopt the color palette system will produce accessible, branded experiences with 
less effort and greater cross-property consistency.

## What are color palettes

There are various color palettes within our design system. The palettes you will 
use the most for the majority of your projects are the lightest and darkest 
themes.

<uxdot-example>
  <img src="/assets/theming/light-theme.png"
       alt="examples of several elements against a white surface">
</uxdot-example>

{% uxdotPattern id="elements-grid", stacked=true %}
{% include './patterns/collage.html' %}
{% enduxdotPattern %}

### How color palettes work

<abbr title="red hat design system">RHDS</abbr>' color palette system is an 
*HTML* and *CSS* system with some supporting JavaScript[^1].
The color palette system has two main parts: **providers** and **consumers**. 
Providers actively define a color palette, while consumers passively accept 
their theme from the nearest provider ancestor.

<rh-card class="pullquote-card right">
  <rh-blockquote>HTML design systems help teams ship better digital experiences, faster.</rh-blockquote>
</rh-card>

Color palettes allow for the creation of different experiences using the same 
design system. When a color palette is changed, elements change including color, 
space, text, and more. Layouts, content, and imagery usually stay the same.

## Choosing a color palette

How you choose a color palette is based on content, user experience, and accessibility 
needs.

### Lightest color palette

The lightest color palette is the default and has lots of use cases.

### Darkest color palette

The darkest color palette can be used for highlighting content with dark colors 
or if a brighter interface would otherwise disrupt the user experience. Most 
light elements and patterns have dark counterparts.

<rh-alert state="warning">
  <h4 slot="header">Brand red and accessibility</h4>
  <p>Do not apply the Red Hat red color to text in dark environments
  unless it meets <a href="https://www.w3.org/WAI/WCAG21/Understanding/">WCAG 2.1 AA</a>
  requirements.</p>
</rh-alert>

## Illustrations and imagery

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

## Color theme consumers and theme tokens

### Color palette providers
**Providers** define the **color palette** for themselves and their child 
elements. There are six main color palettes:

<ol class="tile-grid">
  <li><rh-tile color-palette="lightest">Lightest</rh-tile></li>
  <li><rh-tile color-palette="lighter">Lighter</rh-tile></li>
  <li><rh-tile color-palette="light">Light</rh-tile></li>
  <li><rh-tile color-palette="dark">Dark</rh-tile></li>
  <li><rh-tile color-palette="darker">Darker</rh-tile></li>
  <li><rh-tile color-palette="darkest">Darkest</rh-tile></li>
</ol>

Context providers typically use the `lightest` color palette as the default. 
Authors may define the color palette of a container using the `color-palette` HTML
attribute. So for example, to create a card with the darkest color palette, use 
this HTML:

{% uxdotPattern class="card-snippet-grid", fullHeight=true %}
{% include './patterns/card-default-vs-set-palette.html' %}
{% enduxdotPattern %}

### Color theme consumers
**Consumers**, which adopt a **color theme**. Color themes correspond to the  
active color palette, and represent the quality of the background colour:

1. light
1. dark

Child elements which are providers will automatically adapt, applying their own 
**color theme** as needed. Page authors *do not need to and should not customize*
colors of consumer elements.

Color palette containers can be nested, such that child elements will always 
adopt the color theme corresponding to the nearest container's palette.

Extending our card example from above, if our page author then adds an 
`<rh-cta>` to the card, it will *automatically* adopt the dark color theme. The 
page author need not and should not customize the CTA.

{% uxdotPattern class="card-snippet-grid", fullHeight=true %}
{% include './patterns/card-child-consumers.html' %}
{% enduxdotPattern %}

<rh-card class="pullquote-card right">
  <rh-blockquote>
    Color palettes lets authors write more HTML, simpler CSS, and less JavaScript
  </rh-blockquote>
</rh-card>

To summarize: color providers can have one of up to six palettes, three dark and 
three light, and they provide a `dark` or `light` theme to their children.

## Combination elements
Some elements are both providers and consumers. Card, for example is both a 
provider and a consumer. It can accept the color theme of its parent context and it 
can also set its own color palette.

{% uxdotPattern class="card-snippet-grid", fullHeight=true %}
{% include './patterns/card-consumer-provider.html' %}
{% enduxdotPattern %}

{% include 'partials/component/feedback.html' %}

[^1]: As the web platform [improves](https://results.web-platform-tests.org/results/css/css-values/attr-container-style-query.html?label=experimental&label=master&aligned), the <abbr>RHDS</abbr> authors expect that eventually no JavaScript will be required for this feature.

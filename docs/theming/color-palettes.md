---
title: Color Palettes
bodyClasses: element-docs
layout: layouts/pages/has-toc.njk
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

<abbr title="red hat design system">RHDS</abbr> defines six color palettes They range from lightest to darkest, and those
are the two palettes you will use the most for the majority of your projects.

<uxdot-pattern id="elements-grid" src="./patterns/collage.html">
</uxdot-pattern>

### How color palettes work

<abbr title="red hat design system">RHDS</abbr>' color palette system is an
*HTML* and *CSS* system with some supporting JavaScript[^1].
The color palette system has two main parts: **providers** and **consumers**.
Providers actively define a color palette, while consumers passively accept
their background color from the nearest provider ancestor.

<rh-card class="pullquote-card right">
  <rh-blockquote>HTML design systems help teams ship better digital experiences,
    faster.</rh-blockquote>
</rh-card>

Color palettes allow for the creation of different experiences using the same
design system. When a color palette is changed, elements change including color,
space, text, and more. Layouts, content, and imagery usually stay the same.

## Choosing a color palette

How you choose a color palette is based on content, user experience, and
accessibility needs.

### Lightest color palette

The lightest color palette is the default and has lots of use cases.

### Darkest color palette

The darkest color palette can be used for highlighting content with dark colors
or if a brighter interface would otherwise disrupt the user experience. Most
light elements and patterns have dark counterparts.

<rh-alert state="warning">
  <h4 slot="header">Brand red and accessibility</h4>

  Do not apply the Red Hat red color to text in dark environments unless it
  meets [WCAG 2.1 AA][wcag21aa] requirements.

</rh-alert>

## Illustrations and imagery

Illustrations and imagery should align to the color palette. The light color
palette should feature imagery with light colors and vice versa. Imagery with
high contrast is only acceptable if it has a transparent background. If you
cannot find color-palette-specific imagery, contact the Brand team. Developers
have a number of [art-direction][artdirection] techniques at their disposal for
creating themeable, responsive graphics.

<uxdot-example>
  <img alt="correct uses of an illustration with a transparent background and one illustration incorrectly using a white background on a surface with a dark color palette area"
       src="/assets/theming/illustrations-and-imagery.png">
</uxdot-example>

## Backgrounds and theme tokens

### Color palettes

**Providers** define the **color palette** for themselves and their child
elements. There are six color palettes in RHDS:

<ol class="tile-grid">
  <li><rh-tile color-palette="lightest">Lightest</rh-tile></li>
  <li><rh-tile color-palette="lighter">Lighter</rh-tile></li>
  <li><rh-tile color-palette="light">Light</rh-tile></li>
  <li><rh-tile color-palette="dark">Dark</rh-tile></li>
  <li><rh-tile color-palette="darker">Darker</rh-tile></li>
  <li><rh-tile color-palette="darkest">Darkest</rh-tile></li>
</ol>

Context providers typically use the `lightest` color palette as the default.
Authors may define the color palette of a container using the `color-palette`
HTML attribute. So for example, to create a card with the darkest color palette,
use this HTML:

<uxdot-pattern class="card-snippet-grid"
               src="./patterns/card-default-vs-set-palette.html"
               full-height="">
</uxdot-pattern>

A color palette provider is a **surface** on which a particular color palette is
active, as well as a **container** for themeable consumer elements.

### Backgrounds

Consumers are elements which automatically adapt to their background surface.
Color **Consumers** adopt a **background** color based on the palette of the
surface they are on. In other words, the background of a consumer corresponds to
the color palette of it's containing surface. There are two backgrounds in RHDS:

<ul class="surface-grid">
  <li>
    <rh-card class="icon-card" color-palette="lightest">
      <rh-icon slot="header" icon="sun"></rh-icon>
      <span slot="header">Light</span>
    </rh-card>
  </li>

  <li>
    <rh-card class="icon-card" color-palette="darkest">
      <rh-icon slot="header" icon="umbrella"></rh-icon>
      <span slot="header">Dark</span>
    </rh-card></li>
</ul>

These backgrounds don't represent a specific colour, but rather they indicate
whether the background is light or dark. This is so things like icons, text,
and border colours can be chosen which will contrast enough with the background
to remain legible. In other words, the background is the *color context* in
which a consumer finds itself.

<rh-alert>Page authors *do not need to and should not customize* colors of
  consumer elements, but instead should set custom values for [theme
  tokens][theming]. Color palette containers can be nested, such that child
  elements will always adopt the color theme corresponding to the nearest
  container's palette.</rh-alert>

Extending our card example from above, if our page author then adds an
`<rh-cta>` to the card, it will *automatically* adopt the dark color theme. The
page author need not and should not customize the CTA.

<uxdot-pattern class="card-snippet-grid"
               src="./patterns/card-child-consumers.html"
               full-height="">
</uxdot-pattern>

<rh-card class="pullquote-card right">
  <rh-blockquote>Color palettes lets authors write more HTML, simpler CSS, and
    less JavaScript</rh-blockquote>
</rh-card>

To summarize: color providers can adopt one six palettes, three dark and
three light, and they provide a `dark` or `light` background to their children.

## Combination elements

Some elements are both providers and consumers. Card, for example is both a
provider and a consumer. It can accept the color theme of its parent context and
it can also set its own color palette.

<uxdot-pattern class="card-snippet-grid"
               src="./patterns/card-consumer-provider.html"
               full-height="">
</uxdot-pattern>

## Inline color palettes  <rh-tag color="purple">Beta</rh-tag>

Inlining a color palette is when a section switches palette and looks different
than the rest of the page or interface. Some use cases include highlighting an
important section on a page or adding a sidebar to an interface. Use inline
palettes only for major shifts in color. For minor shifts, use a related color
palette, e.g. from `lightest` to `light`.

<rh-alert>
  <h4 slot="header">Update from the team</h4>

  The design system team is working on creating inline color palette best
  practices in the near future. [Contact us][contact] if you would like to
  contribute.

</rh-alert>

<uxdot-example color-palette="lighter">
  <img alt="wireframe of a dark palette section sandwiched by two light palette sections"
       src="/assets/theming/inline-theming-1.png">
</uxdot-example>

<uxdot-example color-palette="lighter">
  <img alt="wireframe of cards in a dark palette section extending into a light palette section"
       src="/assets/theming/inline-theming-2.png">
</uxdot-example>

<uxdot-example color-palette="lighter">
  <img alt="wireframe of dark palette navigation framing the top and left sides of a light palette content area"
       src="/assets/theming/inline-theming-3.png">
</uxdot-example>

<rh-alert>
  <h4 slot="header">More information</h4>
  <p>High contrast is using bright elements, patterns, or images in dark
     environments and vice versa. This is useful to focus attention or create
     visual tension.</p>
</rh-alert>

{% renderFile './docs/_includes/partials/component/feedback.11ty.cjs' %}

[^1]: As the web platform [improves][wpt], the <abbr>RHDS</abbr> authors expect that eventually no JavaScript will be required for this feature.

[wpt]: https://results.web-platform-tests.org/results/css/css-values/attr-container-style-query.html?label=experimental&label=master&aligned
[contact]: https://github.com/RedHat-UX/red-hat-design-system/discussions
[artdirection]: /theming/developers/#art-direction
[theming]: /theming/customizing/
[wcag21aa]: https://www.w3.org/WAI/WCAG21/Understanding/

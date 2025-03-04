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
  import '@uxdot/elements/uxdot-pattern.js';
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

## Color palettes
<a id="what-are-color-palettes"></a>
<a id="how-color-palettes-work"></a>

<abbr title="red hat design system">RHDS</abbr> defines six color palettes They 
range from lightest to darkest, and those are the two palettes you will use the 
most for the majority of your projects.

<uxdot-pattern id="elements-grid" src="./patterns/collage.html"></uxdot-pattern>

Understanding color palettes, color schemes, and theming work together is
important not only in terms of design guidelines but also for accessibility
compliance, and to enable positive experiences for all our users. We've
developed our theming system with web standards in mind, and aiming to use CSS
over JavaScript as much as possible. The following explains how the theming
system works.

<abbr title="red hat design system">RHDS</abbr>' color palette system is an
*HTML* and *CSS* system with some supporting JavaScript[^1].

<rh-card class="pullquote-card right">
  <rh-blockquote>HTML design systems help teams ship better digital experiences,
    faster.</rh-blockquote>
</rh-card>

Some design system elements may define their own color palettes. Elements that
have this ability also pass on a specific color scheme to their children, based
on their current color palette. For example `<rh-surface>`, `<rh-card>`, and
`<rh-accordion>` can define their own color palette, while `<rh-cta>` and
`<rh-badge>` cannot.

Elements which have this ability are called **color scheme providers**. They
usually implement a default color palette (e.g. `lightest`). Color scheme
providers must also possess an optional `color-palette` attribute. When it is
set to one of the six color palette values, any child elements which consume a
background type will respond to the change. Setting the `color-palette`
attribute will override any parent's color scheme.

There are six color palettes in RHDS:

<ol class="color-palette-grid">
  <li><rh-surface color-palette="lightest">Lightest</rh-surface></li>
  <li><rh-surface color-palette="lighter">Lighter</rh-surface></li>
  <li><rh-surface color-palette="light">Light</rh-surface></li>
  <li><rh-surface color-palette="dark">Dark</rh-surface></li>
  <li><rh-surface color-palette="darker">Darker</rh-surface></li>
  <li><rh-surface color-palette="darkest">Darkest</rh-surface></li>
</ol>

Context providers typically use the `lightest` color palette as the default.
Authors may define the color palette of a container using the `color-palette`
HTML attribute. So for example, to create a card with the darkest color palette,
use this HTML:

<uxdot-pattern class="card-snippet-grid"
               src="./patterns/card-default-vs-set-palette.html"
               full-height="">
</uxdot-pattern>

Color palettes allow for the creation of different experiences using the same 
design system. Changing an element's color palette can affect its colors and 
backgrounds, but usually spacing, typography, layouts, content, and imagery 
remain the same.

## Color schemes
<a id="backgrounds-and-theme-tokens"></a>
<a id="backgrounds"></a>

Color schemes are rendering modes for elements that change their foreground and 
background colors. There are two color schemes: `light` and `dark`, each 
corresponding to three of the six color palettes. Elements which respond to 
their color scheme by changing their colors are called **color scheme 
consumers**.

<div class="surface-grid">
  <rh-card class="icon-card" color-palette="lightest">
    <rh-icon slot="header" icon="light-mode"></rh-icon>
    <h3 slot="header">Light</h3>
    <p>Corresponding color palettes: <code>light</code>, <code>lighter</code>, <code>lightest</code>.</p>
  </rh-card>
  <rh-card class="icon-card" color-palette="darkest">
    <rh-icon slot="header" icon="dark-mode"></rh-icon>
    <h3 slot="header">Dark</h3>
    <p>Corresponding color palettes: <code>dark</code>, <code>darker</code>, <code>darkest</code>.</p>
  </rh-card>
</div>

Being aware of which elements are rendering in which color scheme is important 
to ensure that things like icons, text, and border colours remain legible.

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

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}

[^1]: As the web platform [improves][wpt], the <abbr>RHDS</abbr> authors expect that eventually no JavaScript will be required for this feature.

[wpt]: https://results.web-platform-tests.org/results/css/css-values/attr-container-style-query.html?label=experimental&label=master&aligned
[contact]: https://github.com/RedHat-UX/red-hat-design-system/discussions
[artdirection]: /theming/developers/#art-direction
[theming]: /theming/customizing/
[wcag21aa]: https://www.w3.org/WAI/WCAG21/Understanding/

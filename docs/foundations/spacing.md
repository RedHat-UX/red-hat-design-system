---
title: Spacing
layout: layouts/pages/has-toc.njk
order: 40
tags:
  - foundations
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>
<link rel="stylesheet"
      href="/styles/samp.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<style data-helmet>
  .page-spacing .container rh-table {
    margin-block-end: var(--rh-space-3xl);
  }
</style>

<section aria-labelledby="overview">

  ## Overview

  Spacers are visual cues used to define fixed amounts of space between
  elements. They make it easy for designers to maintain consistent spacing
  across components and patterns as well as simplify the handoff process between
  designers and developers. Consistent spacing helps maintain balance and rhythm
  across the system.

</section>

<section aria-labelledby="style">

  ## Style

  ### Base increment

  The base increment of spacers starts at 4px. The Form field pattern
  features a 6px spacer for very specific use cases. **It should not be
  used anywhere else**.

  ### Scale

  There are a variety of spacers available which can be used for different 
  spacing needs, which are all divisible by 4. To keep the system simple, 
  there’s only one scale for spacers that applies to components, patterns, and 
  layouts. The smallest spacer is 4px and the largest is 80px. New spacers are 
  added based on design needs, so do not create any new spacers, combine 
  different spacers instead.

  <uxdot-spacer-tokens-table tokens="xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl">
  </uxdot-spacer-tokens-table>

  ### Applying spacers

  The size of an element dictates its spatial relationship with other elements 
  in a layout, i.e. small elements need less space and large elements need more 
  space. For example, use small spacers to define the spacing between text 
  styles or buttons and use large spacers to define the vertical rhythm in a 
  layout or spacing between sections.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-application-1.svg"
         alt="How to apply spacing"
         width="1000"
         height="566">
  </uxdot-example>

</section>

<section aria-labelledby="typography">

  ## Typography

  When placing text in a layout, using the right spacers will ensure a smooth 
  vertical rhythm and readability.

  <uxdot-example>
    <img src="/assets/spacing/spacing-typography-1.png"
         alt="How to apply spacing to typography"
         width="1000"
         height="421">
  </uxdot-example>

  ### Spacing between text styles

  Use spacers between text styles to establish hierarchy and maintain 
  relationships. For example, if text styles are spaced too closely, the content 
  in the group will be hard to process. If they’re spaced too far apart, it 
  won’t appear as if the styles are related to each other.

  <uxdot-example>
    <img src="/assets/spacing/spacing-typography-2.svg"
         alt="Spacing between text styles"
         width="1000"
         height="720">
  </uxdot-example>

  ### Titles and headlines

  The spacing between *Layout titles and headlines* as well as *Card
  titles and body copy* is **always** the same at 16px on desktop, tablet,
  and mobile. It's enough space so that the title can introduce the
  content underneath.

  #### Spacing guidelines

  - The spacing between a *Layout title* and a headline is 16px on
    desktop, tablet, and mobile
  - The spacing between a *Card title* and body copy is 16px on desktop,
    tablet, and mobile

  <uxdot-example width-adjustment="1000px">
    <img src="/assets/spacing/spacing-typography-3.svg"
         alt="Headlines and body copy spacing guidelines"
         width="1000"
         height="523">
  </uxdot-example>

  ### Desktop scale

  The columns indicate which spacer to use between headlines and body copy
  on desktop and tablet devices. To see the exact size values of each text
  style, visit the [Typography page](../typography).

  <rh-table>

 | Headline style | Text style    | Spacer              |
 | -------------- | ------------- | ------------------- |
 | Headline, 2xl  | Body copy, lg | ![24px spacer][s24] |
 | Headline, xl   | Body copy, lg | ![24px spacer][s24] |
 | Headline, lg   | Body copy, lg | ![16px spacer][s16] |
 | Headline, md   | Body copy, lg | ![16px spacer][s16] |
 | Headline, sm   | Body copy, lg | ![16px spacer][s16] |
 | Headline, xs   | Body copy, lg | ![16px spacer][s16] |

  </rh-table>

  ### Mobile scale

  The columns indicate which spacer to use between headlines and body copy
  on mobile devices. To see the exact size values of each text style,
  visit the [Typography page](../typography).

  <rh-table>

 | Headline style | Text style    | Spacer              |
 | -------------- | ------------- | ------------------- |
 | Headline, xxl  | Body copy, md | ![24px spacer][s24] |
 | Headline, xl   | Body copy, md | ![24px spacer][s24] |
 | Headline, lg   | Body copy, md | ![16px spacer][s16] |
 | Headline, md   | Body copy, md | ![16px spacer][s16] |
 | Headline, sm   | Body copy, md | ![16px spacer][s16] |
 | Headline, xs   | Body copy, md | ![16px spacer][s16] |

  </rh-table>

  ### Headlines and Calls to action

  The spacing between *headlines* and *Calls to action* depends on the point
  size of the headline

  #### Spacing guidelines

  - The spacing between *large headlines* and Calls to action is 32px on
    desktop and tablet, and 24px on mobile
  - The spacing between *small headlines* and Calls to action is 24px on
    desktop and tablet, and 16px on mobile
  - The spacing between *body copy* and Calls to action is 32px on
    desktop and tablet, and 24px on mobile

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-headlines-ctas.png"
         alt="How to apply spacing to headlines and calls to action"
         width="1000"
         height="814">
  </uxdot-example>

  ### Scale

  The columns indicate which spacer to use between headlines and Calls to
  action, depending on the breakpoint. To see the exact size values of
  each text style, visit the [Typography](../typography/) page.

  <rh-table>

 | Text style    | Spacer (desktop and tablet) | Spacer (mobile)     |
 | ------------- | --------------------------- | ------------------- |
 | Headline, 2xl | ![32px spacer][s32]         | ![24px spacer][s24] |
 | Headline, xl  | ![32px spacer][s32]         | ![24px spacer][s24] |
 | Headline, lg  | ![24px spacer][s24]         | ![16px spacer][s16] |
 | Headline, md  | ![24px spacer][s24]         | ![16px spacer][s16] |
 | Headline, sm  | ![24px spacer][s24]         | ![16px spacer][s16] |
 | Headline, xs  | ![24px spacer][s24]         | ![16px spacer][s16] |
 | Body copy, lg | ![24px spacer][s24]         | ![16px spacer][s16] |
 | Body copy, md | ![24px spacer][s24]         | ![16px spacer][s16] |

  </rh-table>

  ### Headlines and Buttons

  The spacing between *headlines* and *Buttons* depends on the point size
  of the headline.

  #### Spacing guidelines

  - The spacing between *large headlines* and Buttons is 32px on desktop
    and tablet, and 24px on mobile
  - The spacing between *small headlines* and Buttons is 24px on desktop
    and tablet, and 16px on mobile
  - The spacing between *body copy* and Buttons is **always** 24px on
    desktop, tablet, and mobile

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-headlines-buttons.svg"
         alt="How to apply spacing to headlines and buttons"
         width="1000"
         height="740">
  </uxdot-example>

  #### Scale

  The columns indicate which spacer to use between headlines and Buttons,
  depending on the breakpoint. To see the exact size values of each text
  style, visit the [Typography](../typography/) page.

  <rh-table>

 | Headline style | Spacer (desktop and tablet) | Spacer (mobile)     |
 | -------------- | --------------------------- | ------------------- |
 | Headline, 2xl  | Do not use                  | Do not use          |
 | Headline, xl   | Do not use                  | Do not use          |
 | Headline, lg   | ![32px spacer][s32]         | ![24px spacer][s24] |
 | Headline, md   | ![32px spacer][s32]         | ![24px spacer][s24] |
 | Headline, sm   | ![24px spacer][s24]         |                     |
 | Headline, xs   | ![24px spacer][s24]         | ![16px spacer][s16] |

  </rh-table>

  ### Other examples

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-other-examples-1.svg"
         alt="Spacing on lists"
         width="1000"
         height="741">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers with typography, please
  [contact us][getstarted] or [create an issue in our GitHub repo][newissue].

</section>


<section aria-labelledby="components-and-patterns">

  ## Components and patterns

  When working in Figma, content is already spaced correctly, so there is no need 
  to guess. Remember to take into account how spacers might change when modifying 
  content inside of a component or pattern.

  ### Responsive design

  Figma maintains the space inside of components and patterns even when used on 
  different screen sizes. Spacers used in complex layouts may change values from 
  large to small breakpoints and vice versa, depending on the screen real 
  estate.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-components-1.svg"
         alt="Spacing in search layout"
         width="1000"
         height="388">
  </uxdot-example>

  ### Calls to action

  Some styles have a 2:1 spacing ratio. That ratio never changes, so do not add 
  more spacing to those styles.

  Primary and Secondary styles have a 2:1 spacing ratio, meaning the left and 
  right spacing is fixed at 32px and the top and bottom spacing is fixed at 
  16px.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-calls-to-action.svg"
         alt="Spacing within calls to action"
         width="1000"
         height="218">
  </uxdot-example>

  The Brick style has a fixed top and bottom spacing of 16px, but the left and 
  right spacing can stretch to fit a certain amount of grid columns.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-brick.svg"
         alt="Spacing within brick CTAs"
         width="1000"
         height="340">
  </uxdot-example>

  The Default style needs 8px of spacing between the text and the arrow or icon.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-cta-default.svg"
         alt="Spacing within default CTAs"
         width="1000"
         height="185">
  </uxdot-example>

  ### Accordion

  An Accordion is a good example of how a component uses spacers to maintain a 
  comfortable balance between text, horizontal rules, icons, and backgrounds.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-accordion.svg"
         alt="Spacing within accordions"
         width="1000"
         height="755">
  </uxdot-example>

  ### Tabs

  Tabs is another good example of how a component uses spacers to maintain
  a comfortable balance between lots of elements that are in close
  proximity to each other. The area below (or to the right) of the
  component is a large content area layout and therefore should use a
  large spacer.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-tabs.svg"
         alt="Spacing within tabs"
         width="1000"
         height="470">
  </uxdot-example>

  ### Cards

  Cards are small layouts that use different spacers depending on their size. As 
  Cards increase or decrease in size, they require more or less spacing on the 
  inside or outside.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-cards.svg"
         alt="Spacing within cards"
         width="1000"
         height="442">
  </uxdot-example>

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-cards-4-col.svg"
         alt="Spacing within 4 column cards"
         width="1000"
         height="442">
  </uxdot-example>

  ### Scale

  <rh-table>

 | Breakpoint | Columns   | Spacer              |
 | ---------- | --------- | ------------------- |
 | Desktop    | 8 or more | ![48px spacer][s48] |
 | Desktop    | 3 – 7     | ![32px spacer][s32] |
 | Tablet     | 8 or more | ![32px spacer][s32] |
 | Tablet     | 3 – 7     | ![24px spacer][s24] |
 | Mobile     | 1 or 2    | ![16px spacer][s16] |

  </rh-table>

  ### Other components or patterns

  Here’s how spacing is used in other components and patterns.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-components-other.svg"
         alt="Spacing within other components"
         width="1000"
         height="923">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers with components, please
  [contact us][getstarted] or [create an issue in our GitHub repo][newissue].

</section>

<section aria-labelledby="layout">

  ## Layout

  Layouts require large spacers to create white space and disassociate sections 
  from each other.

  ### Applying spacers

  Every layout or section on a page needs enough vertical spacing so that 
  content doesn’t feel too close or crushed. The top and bottom spacing of a 
  layout is 64px by default, but some layouts feature different spacing 
  depending on hierarchy or importance.

  Some components like [Tabs](/elements/tabs/) contain a large spacer
  because there's a content area layout inside.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-layouts.svg"
         alt="Spacing within layouts"
         width="1000"
         height="598">
  </uxdot-example>

  ### Responsive design

  When layouts reduce in size, the spacers will also reduce in size to
  compensate for the loss in screen real estate.

  In the *desktop* breakpoint, the gutters in the grid are spaced 30px
  apart from each other.

  <uxdot-example variant="full" alignment="left">
    <img src="/assets/spacing/spacing-layout-responsive.svg"
         alt="Spacing within the grid"
         width="1000"
         height="368">
  </uxdot-example>

  In the *tablet, landscape* breakpoint, the gutters in the grid are
  spaced 24px apart from each other.

  <uxdot-example variant="full" width-adjustment="992px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-tablet-landscape.svg"
         alt="Spacing within a landscape tablet layout"
         width="992"
         height="392">
  </uxdot-example>

  In the *tablet, portrait* breakpoint, the gutters in the grid are spaced
  18px apart from each other.

  <uxdot-example  variant="full" width-adjustment="768px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-tablet-portrait.svg"
         alt="Spacing within a portrait tablet layout"
         width="768"
         height="392">
  </uxdot-example>

  In the *mobile* breakpoint, the gutters in the grid are spaced 16px
  apart from each other.

  <uxdot-example variant="full" width-adjustment="576px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-mobile.svg"
         alt="Spacing within a mobile landscape layout"
         width="576"
         height="392">
  </uxdot-example>

  <uxdot-example variant="full" width-adjustment="360px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-mobile-portrait.svg"
         alt="Spacing within a mobile portrait layout"
         width="360"
         height="640">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers in a layout, please
  [contact us][getstarted] or [create an issue in our GitHub repo][newissue].

</section>

<section aria-labelledby="best-practices">

  ## Best practices

  Use existing spacers for horizontal and vertical spacing. If a current spacer 
  doesn't meet your needs, [submit a request][getstarted] for us to establish 
  new spacers.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-best-practice-1.svg"
         alt="Use existing spacers"
         width="1000"
         height="441">
  </uxdot-example>

</section>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[getstarted]: ../../get-started/
[newissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new/
[s48]: /assets/spacing/48px.svg
[s32]: /assets/spacing/32px.svg
[s24]: /assets/spacing/24px.svg
[s16]: /assets/spacing/16px.svg

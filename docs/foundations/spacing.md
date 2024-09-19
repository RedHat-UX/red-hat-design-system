---
layout: layouts/pages/basic.njk
title: Spacing
order: 40
hasToc: true
tags:
  - foundations
importElements:
  - rh-table
---
<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link data-helmet rel="stylesheet" href="/styles/samp.css">

<style data-helmet>
  .page-spacing .container rh-table {
    margin-block-end: var(--rh-space-3xl);
  }
</style

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

  <rh-table>
    {% spacerTokensTable 
      headline="", 
      caption="", 
      headingLevel="4",
      tokens="--rh-space-xs,--rh-space-sm,--rh-space-md,--rh-space-lg,--rh-space-xl,--rh-space-2xl,--rh-space-3xl,--rh-space-4xl,--rh-space-5xl,--rh-space-6xl,--rh-space-7xl"%}
    {% endspacerTokensTable %}
  </rh-table>

  ### Applying spacers

  The size of an element dictates its spatial relationship with other elements 
  in a layout, i.e. small elements need less space and large elements need more 
  space. For example, use small spacers to define the spacing between text 
  styles or buttons and use large spacers to define the vertical rhythm in a 
  layout or spacing between sections.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-application-1.svg" alt="How to apply spacing">
  </uxdot-example>

</section>

<section aria-labelledby="typography">

  ## Typography

  When placing text in a layout, using the right spacers will ensure a smooth 
  vertical rhythm and readability.

  <uxdot-example>
    <img src="/assets/spacing/spacing-typography-1.png" alt="How to apply spacing to typography">
  </uxdot-example>

  ### Spacing between text styles

  Use spacers between text styles to establish hierarchy and maintain 
  relationships. For example, if text styles are spaced too closely, the content 
  in the group will be hard to process. If they’re spaced too far apart, it 
  won’t appear as if the styles are related to each other.

  <uxdot-example>
    <img src="/assets/spacing/spacing-typography-2.svg" alt="Spacing between text styles">
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

  <uxdot-example>
    <img src="/assets/spacing/spacing-typography-3.svg" alt="Headlines and body copy spacing guidelines">
  </uxdot-example>

  ### Desktop scale

  The columns indicate which spacer to use between headlines and body copy
  on desktop and tablet devices. To see the exact size values of each text
  style, visit the [Typography page](../typography).

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Headline style">Headline style</th>
          <th scope="col" data-label="Text style">Text style</th>
          <th scope="col" data-label="Spacer">Spacer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Headline style">Headline, 2xl</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xl</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, lg</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, md</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, sm</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xs</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Mobile scale

  The columns indicate which spacer to use between headlines and body copy
  on mobile devices. To see the exact size values of each text style,
  visit the [Typography page](../typography).

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Headline style">Headline style</th>
          <th scope="col" data-label="Text style">Text style</th>
          <th scope="col" data-label="Spacer">Spacer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Headline style">Headline, xxl</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xl</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, lg</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, md</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, sm</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xs</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
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
    <img src="/assets/spacing/spacing-headlines-ctas.png" alt="How to apply spacing to headlines and calls to action">
  </uxdot-example>

  ### Scale

  The columns indicate which spacer to use between headlines and Calls to
  action, depending on the breakpoint. To see the exact size values of
  each text style, visit the [Typography](../typography/) page.

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Text style">Text style</th>
          <th scope="col" data-label="Spacer (desktop and tablet)">Spacer (desktop and tablet)</th>
          <th scope="col" data-label="Spacer (mobile)">Spacer (mobile)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Text style">Headline, 2xl</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/32px.svg" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, xl</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/32px.svg" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, lg</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, md</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, sm</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, xs</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
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
    <img src="/assets/spacing/spacing-headlines-buttons.svg" alt="How to apply spacing to headlines and buttons">
  </uxdot-example>

  #### Scale

  The columns indicate which spacer to use between headlines and Buttons,
  depending on the breakpoint. To see the exact size values of each text
  style, visit the [Typography](../typography) page.

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Headline style">Headline style</th>
          <th scope="col" data-label="Spacer (desktop and tablet)">Spacer (desktop and tablet)</th>
          <th scope="col" data-label="Spacer (mobile)">Spacer (mobile)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Headline style">Headline, 2xl</td>
          <td data-label="Spacer (desktop and tablet)">Do not use</td>
          <td data-label="Spacer (mobile)">Do not use</td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xl</td>
          <td data-label="Spacer (desktop and tablet)">Do not use</td>
          <td data-label="Spacer (mobile)">Do not use</td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, lg</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/32px.svg" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, md</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/32px.svg" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, sm</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"<img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xs</td>
          <td data-label="Spacer (desktop and tablet)"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Other examples

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-other-examples-1.svg" alt="Spacing on lists">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers with typography,
  please [contact us](../../get-started) or [create an issue in our GitHub
  repo][newissue].

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
    <img src="/assets/spacing/spacing-components-1.svg" alt="Spacing in search layout">
  </uxdot-example>

  ### Calls to action

  Some styles have a 2:1 spacing ratio. That ratio never changes, so do not add 
  more spacing to those styles.

  Primary and Secondary styles have a 2:1 spacing ratio, meaning the left and 
  right spacing is fixed at 32px and the top and bottom spacing is fixed at 
  16px.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-calls-to-action.svg" alt="Spacing within calls to action">
  </uxdot-example>

  The Brick style has a fixed top and bottom spacing of 16px, but the left and 
  right spacing can stretch to fit a certain amount of grid columns.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-brick.svg" alt="Spacing within brick CTAs">
  </uxdot-example>

  The Default style needs 8px of spacing between the text and the arrow or icon.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-cta-default.svg" alt="Spacing within default CTAs">
  </uxdot-example>

  ### Accordion

  An Accordion is a good example of how a component uses spacers to maintain a 
  comfortable balance between text, horizontal rules, icons, and backgrounds.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-accordion.svg" alt="Spacing within accordions">
  </uxdot-example>

  ### Tabs

  Tabs is another good example of how a component uses spacers to maintain
  a comfortable balance between lots of elements that are in close
  proximity to each other. The area below (or to the right) of the
  component is a large content area layout and therefore should use a
  large spacer.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-tabs.svg" alt="Spacing within tabs">
  </uxdot-example>

  ### Cards

  Cards are small layouts that use different spacers depending on their size. As 
  Cards increase or decrease in size, they require more or less spacing on the 
  inside or outside.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-cards.svg" alt="Spacing within cards">
  </uxdot-example>

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-cards-4-col.svg" alt="Spacing within 4 column cards">
  </uxdot-example>

  ### Scale

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Breakpoint">Breakpoint</th>
          <th scope="col" data-label="Columns">Columns</th>
          <th scope="col" data-label="Spacer">Spacer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Breakpoint">Desktop</td>
          <td data-label="Columns">8 or more</td>
          <td data-label="Spacer"><img src="/assets/spacing/48px.svg" alt="48px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Desktop</td>
          <td data-label="Columns">3 &ndash; 7</td>
          <td data-label="Spacer"><img src="/assets/spacing/32px.svg" alt="32px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Tablet</td>
          <td data-label="Columns">8 or more</td>
          <td data-label="Spacer"><img src="/assets/spacing/32px.svg" alt="32px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Tablet</td>
          <td data-label="Columns">3 &ndash; 7</td>
          <td data-label="Spacer"><img src="/assets/spacing/24px.svg" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Mobile</td>
          <td data-label="Columns">1 or 2</td>
          <td data-label="Spacer"><img src="/assets/spacing/16px.svg" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Other components or patterns

  Here’s how spacing is used in other components and patterns.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-components-other.svg" alt="Spacing within other components">
  </uxdot-example>


  ### Other use cases

  If you still have questions about how to use spacers with components,
  please [contact us](../../get-started) or [create an issue in our GitHub
  repo][newissue].

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
    <img src="/assets/spacing/spacing-layouts.svg" alt="Spacing within layouts">
  </uxdot-example>

  ### Responsive design

  When layouts reduce in size, the spacers will also reduce in size to
  compensate for the loss in screen real estate.

  In the *desktop* breakpoint, the gutters in the grid are spaced 30px
  apart from each other.

  <uxdot-example variant="full" alignment="left">
    <img src="/assets/spacing/spacing-layout-responsive.svg" alt="Spacing within the grid">
  </uxdot-example>

  In the *tablet, landscape* breakpoint, the gutters in the grid are
  spaced 24px apart from each other.

  <uxdot-example variant="full" width-adjustment="992px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-tablet-landscape.svg" alt="Spacing within a landscape tablet layout">
  </uxdot-example>

  In the *tablet, portrait* breakpoint, the gutters in the grid are spaced
  18px apart from each other.

  <uxdot-example  variant="full" width-adjustment="768px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-tablet-portrait.svg" alt="Spacing within a portrait tablet layout">
  </uxdot-example>

  In the *mobile* breakpoint, the gutters in the grid are spaced 16px
  apart from each other.

  <uxdot-example variant="full" width-adjustment="576px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-mobile.svg" alt="Spacing within a mobile landscape layout">
  </uxdot-example>

  <uxdot-example variant="full" width-adjustment="360px" alignment="left" no-border>
    <img src="/assets/spacing/spacing-layout-mobile-portrait.svg" alt="Spacing within a mobile portrait layout">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers in a layout, please
  [contact us](../../get-started/) or [create an issue in our GitHub repo][newissue].

</section>

<section aria-labelledby="best-practices">

  ## Best practices

  Use existing spacers for horizontal and vertical spacing. If a current
  spacer doesn't meet your needs, [submit a request](../../get-started/)
  for us to establish new spacers.

  <uxdot-example variant="full">
    <img src="/assets/spacing/spacing-best-practice-1.svg" alt="Use existing spacers">
  </uxdot-example>

</section>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[newissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new

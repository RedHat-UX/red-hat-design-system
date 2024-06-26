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
<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<style>
  .page-spacing .container rh-table {
    margin-block-end: var(--rh-space-3xl, 48px);
  }
</style>  

<section aria-labelledby="overview">

  ## Overview

  Spacers are visual cues used to define fixed amounts of space between elements. They make it easy for designers to maintain consistent spacing across components and patterns as well as simplify the handoff process between designers and developers. Consistent spacing helps maintain balance and rhythm across the system.

</section>

<section aria-labelledby="style">

  ## Style

  ### Base increment

  The base increment of spacers starts at 4px. The Form field pattern features a 6px spacer for very specific use cases. <strong>It should not be used anywhere else</strong>.

  ### Scale

  There are a variety of spacers available which can be used for different spacing needs, which are all divisible by 4. To keep the system simple, there’s only one scale for spacers that applies to components, patterns, and layouts. The smallest spacer is 4px and the largest is 80px. New spacers are added based on design needs, so do not create any new spacers, combine different spacers instead.

  <rh-table>
    {% spacerTokensTable 
      headline="", 
      caption="", 
      headingLevel="4",
      tokens="--rh-space-xs,--rh-space-sm,--rh-space-md,--rh-space-lg,--rh-space-xl,--rh-space-2xl,--rh-space-3xl,--rh-space-4xl,--rh-space-5xl,--rh-space-6xl,--rh-space-7xl"%}
    {% endspacerTokensTable %}
  </rh-table>

  ### Applying spacers

  The size of an element dictates its spatial relationship with other elements in a layout, i.e. small elements need less space and large elements need more space. For example, use small spacers to define the spacing between text styles or buttons and use large spacers to define the vertical rhythm in a layout or spacing between sections.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-application-1.svg' | url }}" alt="How to apply spacing">
  </uxdot-example>

</section>

<section aria-labelledby="typography">

  ## Typography
  
  When placing text in a layout, using the right spacers will ensure a smooth vertical rhythm and readability.

  <uxdot-example>
    <img src="{{ '/assets/spacing/spacing-typography-1.png' | url }}" alt="How to apply spacing to typography">
  </uxdot-example>

  ### Spacing between text styles

  Use spacers between text styles to establish hierarchy and maintain relationships. For example, if text styles are spaced too closely, the content in the group will be hard to process. If they’re spaced too far apart, it won’t appear as if the styles are related to each other.

  <uxdot-example>
    <img src="{{ '/assets/spacing/spacing-typography-2.svg' | url }}" alt="Spacing between text styles">
  </uxdot-example>

  ### Titles and headlines

  The spacing between <em>Layout titles and headlines</em> as well as <em>Card titles and body copy</em> is <strong>always</strong> the same at 16px on desktop, tablet, and mobile. It’s enough space so that the title can introduce the content underneath. For visual examples, <a href="https://xd.adobe.com/view/6fdecb88-71b6-447f-8069-9838b6d3668a-3a8d/">see this XD document</a>.

  #### Spacing guidelines

  <ul>
    <li>The spacing between a <em>Layout title</em> and a headline is 16px on desktop, tablet, and mobile</li>
    <li>The spacing between a <em>Card title</em> and body copy is 16px on desktop, tablet, and mobile</li>
  </ul>

  <uxdot-example>
    <img src="{{ '/assets/spacing/spacing-typography-3.svg' | url }}" alt="Headlines and body copy spacing guidelines">
  </uxdot-example>

  ### Desktop scale

  The columns indicate which spacer to use between headlines and body copy on desktop and tablet devices. To see the exact size values of each text style, visit the <a href="../typography">Typography page</a>.

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
          <td data-label="Spacer"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xl</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, lg</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, md</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, sm</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xs</td>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Mobile scale

  The columns indicate which spacer to use between headlines and body copy on mobile devices. To see the exact size values of each text style, visit the <a href="../typography">Typography page</a>.

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
          <td data-label="Spacer"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xl</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, lg</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, md</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, sm</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xs</td>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Headlines and Calls to action

  The spacing between <em>headlines</em> and <em>Calls to action</em> depends on the point size of the headline. For visual examples, <a href="https://xd.adobe.com/view/6fdecb88-71b6-447f-8069-9838b6d3668a-3a8d/screen/96dcf3dc-cd14-41cb-8b6f-87c16eac281c/">see this XD document</a>.


  #### Spacing guidelines

  <ul>
    <li>The spacing between <em>large headlines</em> and Calls to action is 32px on desktop and tablet, and 24px on mobile</li>
    <li>The spacing between <em>small headlines</em> and Calls to action is 24px on desktop and tablet, and 16px on mobile</li>
    <li>The spacing between <em>body copy</em> and Calls to action is 32px on desktop and tablet, and 24px on mobile</li>
  </ul>

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-headlines-ctas.png' | url }}" alt="How to apply spacing to headlines and calls to action">
  </uxdot-example>

  ### Scale
  
  The columns indicate which spacer to use between headlines and Calls to action, depending on the breakpoint. To see the exact size values of each text style, visit the <a href="../typography">Typography</a> page.

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
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/32px.svg' | url }}" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, xl</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/32px.svg' | url }}" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, lg</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, md</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, sm</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Headline, xs</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Body copy, lg</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Text style">Body copy, md</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Headlines and Buttons

  The spacing between <em>headlines</em> and <em>Buttons</em> depends on the point size of the headline. For visual examples, see <a href="https://xd.adobe.com/view/6fdecb88-71b6-447f-8069-9838b6d3668a-3a8d/screen/72fde750-3808-4319-913b-0cdec8dc7be1/">this XD document</a>.

  #### Spacing guidelines

  <ul>
    <li>The spacing between <em>large headlines</em> and Buttons is 32px on desktop and tablet, and 24px on mobile</li>
    <li>The spacing between <em>small headlines</em> and Buttons is 24px on desktop and tablet, and 16px on mobile</li>
    <li>The spacing between <em>body copy</em> and Buttons is <strong>always</strong> 24px on desktop, tablet, and mobile</li>
  </ul>

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-headlines-buttons.svg' | url }}" alt="How to apply spacing to headlines and buttons">
  </uxdot-example>

  #### Scale

  The columns indicate which spacer to use between headlines and Buttons, depending on the breakpoint. To see the exact size values of each text style, visit the <a href="../typography">Typography</a> page.

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
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/32px.svg' | url }}" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, md</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/32px.svg' | url }}" alt="32px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, sm</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"<img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
        <tr>
          <td data-label="Headline style">Headline, xs</td>
          <td data-label="Spacer (desktop and tablet)"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
          <td data-label="Spacer (mobile)"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Other examples

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-other-examples-1.svg' | url }}" alt="Spacing on lists">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers with typography, please <a href="../../get-started">contact us</a> or <a href="https://github.com/patternfly/patternfly-elements/projects/2">create an issue in our GitHub repo</a>.

</section>


<section aria-labelledby="components-and-patterns">

  ## Components and patterns

  When working in Adobe XD, components and patterns have built-in spacers, so there’s no need to guess. Remember to take into account how spacers might change when modifying content inside of a component or pattern.

  ### Responsive design

  XD maintains the spacers inside of components and patterns even when used on different screen sizes. Spacers used in complex layouts may change values from large to small breakpoints and vice versa, depending on the screen real estate.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-components-1.svg' | url }}" alt="Spacing in search layout">
  </uxdot-example>

  ### Calls to action

  Some styles have a 2:1 spacing ratio. That ratio never changes, so do not add more spacing to those styles.

  Primary and Secondary styles have a 2:1 spacing ratio, meaning the left and right spacing is fixed at 32px and the top and bottom spacing is fixed at 16px.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-calls-to-action.svg' | url }}" alt="Spacing within calls to action">
  </uxdot-example>

  The Brick style has a fixed top and bottom spacing of 16px, but the left and right spacing can stretch to fit a certain amount of grid columns.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-brick.svg' | url }}" alt="Spacing within brick CTAs">
  </uxdot-example>

  The Default style needs 8px of spacing between the text and the arrow or icon.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-cta-default.svg' | url }}" alt="Spacing within default CTAs">
  </uxdot-example>

  ### Accordion

  An Accordion is a good example of how a component uses spacers to maintain a comfortable balance between text, horizontal rules, icons, and backgrounds.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-accordion.svg' | url }}" alt="Spacing within accordions">
  </uxdot-example>

  ### Tabs

  Tabs is another good example of how a component uses spacers to maintain a comfortable balance between lots of elements that are in close proximity to each other. The area below (or to the right) of the component is a large content area layout and therefore should use a large spacer. For more information about using spacers in Tabs, <a href="https://xd.adobe.com/view/9a2871b8-54f2-4016-b983-b7a00e3ddd2b-cf7b/">see this XD document</a>.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-tabs.svg' | url }}" alt="Spacing within tabs">
  </uxdot-example>

  ### Cards
  
  Cards are small layouts that use different spacers depending on their size. As Cards increase or decrease in size, they require more or less spacing on the inside or outside.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-cards.svg' | url }}" alt="Spacing within cards">
  </uxdot-example>

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-cards-4-col.svg' | url }}" alt="Spacing within 4 column cards">
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
          <td data-label="Spacer"><img src="{{ '/assets/spacing/48px.svg' | url }}" alt="48px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Desktop</td>
          <td data-label="Columns">3 &ndash; 7</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/32px.svg' | url }}" alt="32px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Tablet</td>
          <td data-label="Columns">8 or more</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/32px.svg' | url }}" alt="32px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Tablet</td>
          <td data-label="Columns">3 &ndash; 7</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/24px.svg' | url }}" alt="24px spacer"></td>
        </tr>
        <tr>
          <td data-label="Breakpoint">Mobile</td>
          <td data-label="Columns">1 or 2</td>
          <td data-label="Spacer"><img src="{{ '/assets/spacing/16px.svg' | url }}" alt="16px spacer"></td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Other components or patterns

  Here’s how spacing is used in other components and patterns.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-components-other.svg' | url }}" alt="Spacing within other components">
  </uxdot-example>


  ### Other use cases

  If you still have questions about how to use spacers with components, please <a href="../../get-started">contact us</a> or <a href="https://github.com/patternfly/patternfly-elements/projects/2">create an issue in our GitHub repo</a>.

</section>


<section aria-labelledby="layout">

  ## Layout

  Layouts require large spacers to create white space and disassociate sections from each other.

  ### Applying spacers

  Every layout or section on a page needs enough vertical spacing so that content doesn’t feel too close or crushed.
  The top and bottom spacing of a layout is 64px by default, but some layouts feature different spacing depending on hierarchy or importance.

  Some components like <a href="{{ '/elements/tabs/' | url }}">Tabs</a> contain a large spacer because there’s a content area layout inside.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-layouts.svg' | url }}" alt="Spacing within layouts">
  </uxdot-example>

  ### Responsive design

  When layouts reduce in size, the spacers will also reduce in size to compensate for the loss in screen real estate.

  In the <em>desktop</em> breakpoint, the gutters in the grid are spaced 30px apart from each other.

  <uxdot-example variant="full" alignment="left">
    <img src="{{ '/assets/spacing/spacing-layout-responsive.svg' | url }}" alt="Spacing within the grid">
  </uxdot-example>

  In the <em>tablet, landscape</em> breakpoint, the gutters in the grid are spaced 24px apart from each other.

  <uxdot-example variant="full" width-adjustment="992px" alignment="left" no-border>
    <img src="{{ '/assets/spacing/spacing-layout-tablet-landscape.svg' | url }}" alt="Spacing within a landscape tablet layout">
  </uxdot-example>

  In the <em>tablet, portrait</em> breakpoint, the gutters in the grid are spaced 18px apart from each other.

  <uxdot-example  variant="full" width-adjustment="768px" alignment="left" no-border>
    <img src="{{ '/assets/spacing/spacing-layout-tablet-portrait.svg' | url }}" alt="Spacing within a portrait tablet layout">
  </uxdot-example>

  In the <em>mobile</em> breakpoint, the gutters in the grid are spaced 16px apart from each other.

  <uxdot-example variant="full" width-adjustment="576px" alignment="left" no-border>
    <img src="{{ '/assets/spacing/spacing-layout-mobile.svg' | url }}" alt="Spacing within a mobile landscape layout">
  </uxdot-example>

  <uxdot-example variant="full" width-adjustment="360px" alignment="left" no-border>
    <img src="{{ '/assets/spacing/spacing-layout-mobile-portrait.svg' | url }}" alt="Spacing within a mobile portrait layout">
  </uxdot-example>

  ### Other use cases

  If you still have questions about how to use spacers in a layout, please <a href="../../get-started">contact us</a> or <a href="https://github.com/patternfly/patternfly-elements/projects/2">create an issue in our GitHub repo</a>.

</section>


<section aria-labelledby="best-practices">

  ## Best practices
  
  Use existing spacers for horizontal and vertical spacing. If a current spacer doesn’t meet your needs, <a href="../../get-started/">submit a request</a> for us to establish new spacers.

  <uxdot-example variant="full">
   <img src="{{ '/assets/spacing/spacing-best-practice-1.svg' | url }}" alt="Use existing spacers">
  </uxdot-example>

  To be as clear as possible, include spacers in your design specs to make it easy for developers to see what spacers you want to use between elements. Note that Adobe XD sometimes won’t produce exact pixel amounts between elements when viewed in Developer specs.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-best-practice-2.svg' | url }}" alt="Include spacers in design specs">
  </uxdot-example>

</section>

<section aria-labelledby="spacers-in-xd">

  ## Spacers in XD

  All of the components and patterns in the design kit include spacers. Turn on the group named <strong>Spacing</strong> and you can see how they’re used.

  <uxdot-example variant="full">
    <img src="{{ '/assets/spacing/spacing-adobexd.svg' | url }}" alt="Spacing in Adobe XD">
  </uxdot-example>

</section>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

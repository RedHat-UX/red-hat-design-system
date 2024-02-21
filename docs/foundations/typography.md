---
layout: layouts/pages/basic.njk
title: Typography
order: 50
hasToc: true
tags:
  - foundations
importElements:
  - rh-blockquote
  - rh-table
---
{# see XD for reference: https://xd.adobe.com/view/c3387de7-c738-43be-aed2-d631e283dde4-966b #}

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">

<style>
  .page-typography .container rh-table {
    margin-block-end: var(--rh-space-3xl, 48px);
  }

  .page-typography .container .mock-h2 {
    font-size: var(--rh-font-size-heading-xl, 2.5rem);
  }

  .page-typography .container .mock-h3 {
    font-size: var(--rh-font-size-heading-lg, 2.25rem);
  }

  .page-typography .container .mock-h4 {
    font-size: var(--rh-font-size-heading-md, 1.75rem);
  }

  .page-typography .container .mock-h5 {
    font-size: var(--rh-font-size-heading-sm, 1.5rem);
  }

  .page-typography .container .mock-title {
    text-transform: uppercase;
    color: var(--rh-color-brand-red-on-light, #ee0000);
    font-weight: var(--rh-font-weight-heading-bold, 700);
  }

  .page-typography .container .mock-h2 + .mock-h5,
  .page-typography .container .mock-title + .mock-h2 {
    margin-block-start: 0;
  }

  .page-typography .container .mock-body-text {
    font-family: var(--rh-font-family-body-text, RedHatText, 'Red Hat Text', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif) !important;
  }

  .page-typography .container .mock-header-text {
    font-family: var(--rh-font-family-heading, RedHatDisplay, 'Red Hat Display', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif) !important;
  }

  .page-typography .container .mock-no-margin {
    margin: 0 !important;
  }

  .page-typography .container :is(.mock-h2, .mock-h5) {
    font-family: var(--rh-font-family-heading, RedHatDisplay, 'Red Hat Display', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif);
    margin-block: 1em;
  }

  .page-typography .container .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px);
    margin-block-end: var(--rh-space-2xl, 32px);
  }

  @container container (min-width: 567px) {
    .page-typography .container .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @container container (min-width: 992px) {
    .page-typography .container .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

</style>


<section>
  
  ## Overview

  Typography organizes content and creates hierarchies. It brings consistency to experiences and extends the brand presence across web properties.

</section>

<section>

  ## Get started

  To get started using our fonts, visit our <a href="https://github.com/RedHatOfficial/RedHatFont" target="_blank">GitHub repo</a>.

</section>

<section>

  ## Style
  
  The Red&nbsp;Hat typeface is a fresh take on the geometric sans genre, taking inspiration from a range of American sans serifs including <em>Tempo</em> and <em>Highway Gothic</em>. These two font families can be used together seamlessly and are available to download <a href="https://github.com/RedHatOfficial/RedHatFont">here</a>.

  <uxdot-example width-adjustment="75%" no-border>
    <img src="https://www.redhat.com/cms/managed-files/BrandStandards-Visual_System-Typography-ASSETS_Hero.svg?itok=QnUDviH1"/>
  </uxdot-example>

  <div class="grid">
    <div>
      <h4 id="red-hat-display">Red&nbsp;Hat Display</h4>
      <p>The Display typeface is low contrast and spaced tightly with a large x-height and open counters.</p>
    </div>
    <div>
      <h4 id="red-hat-text">Red&nbsp;Hat Text</h4>
      <p>The Text typeface has a slightly smaller x-height, a narrower width for better legibility, and thinned joins for a better performance at small sizes.</p>
    </div>
    <div>
      <h4 id="red-hat-mono">Red&nbsp;Hat Mono</h4>
      <p>The Mono typeface is our monospaced font that distinguishes code from natural-language text. It should only be used for code snippets or as a stylistic approach for a more technical audience.</p>
    </div>    
  </div>
</section>

<section>

  ## Text options

  ### Headline

  Headlines create various levels of content hierarchies.

  <uxdot-example>
    <p class="mock-h2">Red&nbsp;Hat Enterprise Linux</p>
    <p class="mock-h5">Conquer complexity with Red&nbsp;Hat Enterprise Linux 8</p>
  </uxdot-example>

  ### Blockquote

  Blockquotes are emphasized blocks of text that include a quote icon and attribution.

  <uxdot-example>
    <rh-blockquote>
      <p>The moment we have an idea, we can start building the product</p>
      <span slot="author">John Smith</span>
      <span slot="title">Senior Director, Dev Ops, Acme Corporation</span>
    </rh-blockquote>
  </uxdot-example>  

  ### Title

  Titles disclose extra information above headlines or other content.

  <uxdot-example>
    <div>
      <p class="mock-title">Linux platforms</p>
      <p class="mock-h2">Red&nbsp;Hat Enterprise Linux</p>
    </div>
  </uxdot-example>

  ### Body copy

  Body copy is a block of text that can include links or lists.

  <uxdot-example>
    <div>
      <p>We support Red&nbsp;Hat Enterprise Linux on multiple architectures—from <a href="#">IBM Power servers</a> and IBM Z mainframes to Arm microchips that power cloud workloads—so you can choose the right hardware for the right workload. All while using a single OS with a standardized experience.</p>
    </div>
  </uxdot-example>

  ### Code

  Code is text that features a monospace font that can be used for coding purposes.

  <uxdot-example>
    <pre>
      <code>
for (i = (numElementsReturned - 1); i >= 0; i--) {
  console.log('Hello World');
}
     </code>
    </pre>
  </uxdot-example>

  ### Line length
  
  Headline and body copy line lengths aren’t measured by the number of characters. Instead, all text styles have a <strong>minimum width of three grid columns</strong> and a <strong>maximum width of eight grid columns</strong> on all screen sizes.

</section>

<section>

  ## Scale
  
  The type scale features a range of text sizes and weights created to support the needs of various kinds of content. There’s a type scale for desktop and mobile breakpoints.

  ### Desktop scale

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Style">Style</th>
          <th scope="col" data-label="Font / weight">Font / weight</th>
          <th scope="col" data-label="Size / Line height">Size / Line height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Style">Headline, 2xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, lg</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, md</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, sm</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, xs</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Blockquote, lg</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Blockquote, sm</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Layout title</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Card title</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, 2xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, lg</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, md</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, sm</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, xs</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
      </tbody>
    </table>
  </rh-table>

  ### Mobile scale

  When larger text styles are used on smaller screens, they <strong>automatically decrease in size to fit smaller layouts</strong> better. The mobile type scale is applied when the Tablet, portrait breakpoint is reached or when a screen becomes less than 768px wide.

  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Style">Style</th>
          <th scope="col" data-label="Font / weight">Font / weight</th>
          <th scope="col" data-label="Size / Line height">Size / Line height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Style">Headline, 2xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, lg</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, md</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, sm</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Headline, xs</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Blockquote, lg</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Blockquote, sm</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Layout title</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Card title</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, 2xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, xl</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, lg</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, md</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, sm</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>
        <tr>
          <td data-label="Style">Body copy, xs</td>
          <td data-label="Font / weight"> --- {# TODO: get correct value for RHDS #}</td>
          <td data-label="Size / Line height"> --- {# TODO: get correct value for RHDS #}</td>
        </tr>      
      </tbody>
    </table>  
  </rh-table>
</section>


<section>

  ## Usage

  Each text style has its own unique hierarchy and application. Text styles can be used in layouts and in components to communicate messages or entice users to take an action.

  <div class="grid">
    <div>
      <h3>Headline, 2xl</h3>
      <p>The largest headline available. Use in big hero layouts, like Summit or campaign pages. <strong>Reserved for marketing use cases only.</strong></p>
    </div>
    <div>
      <h3>Headline, xl</h3>
      <p>The second largest headline available. Use in hero layouts, like the home page or a product page. <strong>Reserved for marketing use cases only.</strong></p>
    </div>
    <div>
      <h3>Headline, lg</h3>
      <p>The primary headline for important layouts that aren’t the hero. Try and use only once per page, otherwise use the Headline 2 style.</p>
    </div>
    <div>
      <h3>Headline, md</h3>
      <p>The secondary headline for important layouts that are lower in hierarchy. Use this style multiple times per page.</p>
    </div>
    <div>
      <h3>Headline, sm</h3>
      <p>The tertiary headline for other layouts lower in hierarchy. Use this style in components like a Card or in multiple layouts per page.</p>
    </div>
    <div>
      <h3>Headline, xs</h3>
      <p>The smallest headline available. Use this style under larger headlines or in select components, like an Accordion.</p>
    </div>
    <div>
      <h3>Blockquote, lg</h3>
      <p>The larger style for adding more emphasis to blockquotes. Try not to use this style around other content, otherwise use the <em>Blockquote, sm</em> style.</p>
    </div>
    <div>
      <h3>Blockquote, sm</h3>
      <p>The smaller style for all blockquotes. Use this style around other content or in smaller layouts and components, like a Card.</p>
    </div>
    <div>
      <h3>Layout title</h3>
      <p>The larger style for an important title. Use this style above larger headlines or above important content in any layout.</p>
    </div>
    <div>
      <h3>Card title</h3>
      <p>The smaller style for less important titles. Use this style above headlines in smaller layouts only, like a Card.</p>
    </div>
    <div>
      <h3>Body copy, 2xl</h3>
      <p>The largest body copy style. Use this style for long-form content only, like Topic and Article pages. Text should not exceed 8 columns in width for optimal readability.</p>
    </div>
    <div>
      <h3>Body copy, xl</h3>
      <p>The largest body copy style. Use this style for long-form content only, like Topic and Article pages. Text should not exceed 8 columns in width for optimal readability.</p>
    </div>
    <div>
      <h3>Body copy, lg</h3>
      <p>The base body copy style for marketing use cases only, unless an app interface calls for a larger text size. Text should not exceed 8 columns in width for optimal readability.</p>
    </div>
    <div>
      <h3>Body copy, md</h3>
      <p>The base body copy style for app interfaces or some smaller components, unless a marketing use case calls for a smaller text size. Text should not exceed 7 columns in width for optimal readability.</p>
    </div>
    <div>
      <h3>Body copy, sm</h3>
      <p>The supporting body copy style for all use cases, like under Form fields or for attribution purposes. Text should not exceed 7 columns in width for optimal readability.</p>
    </div>
    <div>
      <h3>Body copy, xs</h3>
      <p>The smallest body copy style for legal or footnote use cases only. Text should not exceed 7 columns in width for optimal readability.</p>
    </div>
  </div>

</section>

<section>

  ## Best practices
  
  Don't use Red&nbsp;Hat Text for headlines.

  <uxdot-example danger>
    <p class="mock-h2 mock-body-text">Red&nbsp;Hat and open source</p>
  </uxdot-example>

  Don't use Red&nbsp;Hat Display for body copy.

  <uxdot-example danger>
    <div>
      <p class="mock-header-text">We believe in collaboration. We believe in choice, control, and freedom. Open source values like meritocracy, community building, and transparency are changing the way we approach business and life.</p>  
    </div>
  </uxdot-example>

  Don't space text styles too closely together.

  <uxdot-example danger alignment="left">
    <p class="mock-title mock-no-margin">Linux platforms</p>
    <p class="mock-h2 mock-no-margin">Red&nbsp;Hat Enterprise Linux</p>
  </uxdot-example>

  Don't stack lots of text styles too closely together.

  <uxdot-example danger alignment="left">
    <p class="mock-h2 mock-no-margin">Headline, xl</p>
    <p class="mock-h3 mock-no-margin">Headline, lg</p>
    <p class="mock-h4 mock-no-margin">Headline, min-width</p>
    <p class="mock-body-text mock-no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit aliquet mauris, in consequat lorem ullamcorper a. Curabitur tempor ante vitae ultrices dignissim.</p>
  </uxdot-example>

</section>

<section>

  ## Behavior
  
  ### Responsive design
  
  Text styles decrease in size when screens become smaller. This shift helps users consume content better without additional scrolling.

  ### Desktop

  <uxdot-example width-adjustment="540px">
    <img src="/assets/typography/typography-card-desktop.svg" alt="Card typography scale on desktop"> 
  </uxdot-example>

  ### Mobile

  <uxdot-example width-adjustment="363px">
    <img src="/assets/typography/typography-card-mobile.svg" alt="Card typography scale on mobile">  
  </uxdot-example>
</section>

<section>
  
  ## Interaction states

  Since typography can be used in a variety of components, refer to the specific interaction states that are assigned to each <a href="/elements">component</a> for more information
  
</section>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

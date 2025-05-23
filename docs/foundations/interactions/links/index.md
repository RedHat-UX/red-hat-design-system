---
title: Links
heading: Interactions
sidenavTitle: Interactions
layout: layouts/pages/has-toc.njk
permalink: /foundations/interactions/links/index.html
tags:
  - interactions
subnav:
  collection: sortedInteractions
  order: 2
---

<link rel="stylesheet" 
      href="/path/to/rh-code-block/rh-code-block-lightdom.css"
      data-helmet>

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-table/rh-table.js';
  import "@uxdot/elements/uxdot-pattern.js";
</script>

<style>
.underline-exception {
    display: block;
    margin-block: var(--rh-space-2xl);
    & span {
        font-family: var(--rh-font-family-heading);
        font-size: var(--rh-font-size-heading-xs);
        font-weight: var(--rh-font-weight-heading-medium);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--rh-space-md);
        color: var(--rh-color-status-danger);
        margin-block: var(--rh-space-2xl) var(--rh-space-lg);
    }
}
</style>

## Types of links

Links are interactive elements that connect users to another page or page section. Outside of navigation elements, most links will appear as one of the following types:

- **Inline links** - appear within a sentence or paragraph of text
- **Links in a list** - may be [accompanied by an icon][linkwithicon]
- **[Calls to action][ctas]** - styled links that call attention to important actions

## Inline links

<uxdot-pattern src="./inline-link-demo.html" no-code-tabs="">
</uxdot-pattern>

## Interaction states

To improve link affordance in alignment with our brand standards, the styles in this section should apply to all inline links, visited and unvisited, in both light and dark schemes, unless noted as an exception.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The <a href="/get-started/designers/figma-library#use-libraries">Red Hat Design System Figma library</a> contains link styles for easy formatting. However, Figma’s type settings do not currently include dashed underlines, so the style outlined below is being approximated by a dotted underline.</p>
</rh-alert>

### Default

Inline text links that may appear alongside non-link text (e.g., within body paragraphs and list items) should be styled like the following:

<rh-table>
  <table>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Property</th>
        <th scope="col">Light scheme<rh-sort-button></rh-sort-button>
        </th>
        <th scope="col">Dark scheme<rh-sort-button></rh-sort-button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Color - text</td>
        <td><code>--rh-color-interactive-primary-default</code></td>
        <td><code>--rh-color-interactive-primary-default</code></td>
      </tr>
      <tr>
        <td>Underline - style</td>
        <td><code>text-decoration-style: dashed;</code></td>
        <td><code>text-decoration-style: dashed;</code></td>
      </tr>
      <tr>
        <td>Underline - thickness</td>
        <td>1px</td>
        <td>1px</td>
      </tr>
      <tr>
        <td>Underline - color</td>
        <td><code>gray-50</code></td>
        <td><code>gray-40</code></td>
      </tr>
      <tr>
        <td>Underline - offset</td>
        <td>5px</td>
        <td>5px</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Hover

When these links receive a mouse cursor hover, link colors and underline styles are updated to the following:

<rh-table>
  <table>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Property</th>
        <th scope="col">Light scheme</th>
        <th scope="col">Dark scheme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Color - text</td>
        <td><code>--rh-color-interactive-primary-hover</code></td>
        <td><code>--rh-color-interactive-primary-hover</code></td>
      </tr>
      <tr>
        <td>Underline - color</td>
        <td><code>--rh-color-interactive-primary-hover</code></td>
        <td><code>--rh-color-interactive-primary-hover</code></td>
      </tr>
      <tr>
        <td>Underline - offset</td>
        <td>6px</td>
        <td>6px</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Visited state

Visited links will change colors to one of our [interactive visited tokens][interactivevisitedtokens].

## Underlining

The following elements are exempt from underlining requirements and should not have the aforementioned underline styles applied to them by default.

### Exceptions

<div class="grid sm-two-columns">

  <figure class="underline-exception">
    <uxdot-example color-palette="lighter" width-adjustment="482px" slot="image">
      <img src="./underlining-exceptions-1.svg"
            alt="Recommendations menu with list of links that aren't underlined"
            width="482"
            height="342">
    </uxdot-example>
    <figcaption>
        <span><rh-icon set="ui" size="md" icon="close-circle-fill" defer-hydration=""></rh-icon>Don't underline</span>
        <p>Do not underline links within visually distinct navigation groupings like menus and breadcrumbs.</p>
    </figcaption>
  </figure>

  <figure class="underline-exception">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./underlining-exceptions-2.svg"
            alt="Heading, body copy, and call to action with an arrow but without an underline"
            width="482"
            height="342">
    </uxdot-example>
    <figcaption>
        <span><rh-icon set="ui" size="md" icon="close-circle-fill" defer-hydration=""></rh-icon>Don't underline</span>
      <p>Do not underline links accompanied by visual cues (e.g., call to action arrows) that indicate their interactivity.</p>
    </figcaption>
  </figure>

  <figure class="underline-exception">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./underlining-exceptions-3.svg"
            alt="List of links "
            width="482"
            height="268">
    </uxdot-example>
    <figcaption>
        <span><rh-icon set="ui" size="md" icon="close-circle-fill" defer-hydration=""></rh-icon>Don't underline</span>
      <p>Do not underline links that will not appear alongside non-link text like a list of links within a card.</p>
    </figcpation>
  </figure>
</div>

### Example CSS

Developers can use the following CSS as a starting point for link underlining:

- In practice, you will probably want to use a more specific selector than `:is(p, ul, ol, dl) a`, because this example selector applies to all links in paragraphs or lists on a page.
- This example adds a `max()` function to the `text-underline-offset` property, allowing this value to grow proportionally at large font sizes.
- As of this writing, Safari has some issues with the `text-decoration` shorthand property, so we separated it out into its component options `(-color, -line, -style, and -thickness)`.

<rh-code-block>
  <script type="text/css">
    :is(p, ul, ol, dl) a {
      text-decoration-color: var(--rh-color-gray-50, #707070);
      text-decoration-line: underline;
      text-decoration-style: dashed;
      text-decoration-thickness: 1px;
      text-underline-offset: max(5px, 0.28em);
      transition: ease all 0.3s;
      &:hover {
        text-decoration-color: inherit;
        text-underline-offset: max(6px, 0.33em);
      }
    }
  </script>
</rh-code-block>

## Behavior

### Opening links in new windows

At Red Hat, we prefer to [keep the user in control](/accessibility/design/#user-control) of their own experience. Therefore, avoid forcing links to open in new windows or tabs, except under [very specific circumstances](/accessibility/design/#opening-links-in-new-windows).

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Pointing an external link to another domain is <a href="/accessibility/design/#opening-links-in-new-windows">not reason alone</a> to open it in a new window or tab.</p>
</rh-alert>

## Accessibility

### Keyboard interactions

A user should have the ability to navigate to and interact with links using their keyboard.

<rh-table>
  <table>
    <colgroup>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><kbd>Tab</kbd></td>
        <td>Moves focus to the next interactive element (for example, from link to link)</td>
      </tr>
      <tr>
        <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
        <td>Moves focus to the previous interactive element (for example, from a call to action to an inline link like in the example below)</td>
      </tr>
      <tr>
        <td><kbd>Enter</kbd></td>
        <td>Selects a link</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Tab order

When the Tab key is pressed repeatedly, the focus highlights links in order, from left to right and top to bottom.

<uxdot-example color-palette="lightest" width-adjustment="606px" slot="image">
  <img src="./a11y-tab-order-A.svg"
        alt="Three inline links and a call to action in a row with focus rings around each"
        width="606"
       height="27">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="93px" slot="image">
  <img src="./a11y-tab-order-B.svg"
        alt="Four links in a vertical list with focus rings around each"
        width="93"
       height="156">
</uxdot-example>

## Best practices

### Link text clarity

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./links-best-practice-1-do.svg"
            alt="'Open hybrid cloud' linked within a paragraph"
            width="482"
            height="81">
    </uxdot-example>
    <p>Use descriptive language to give users a clear idea of where a link will take them.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./links-best-practice-1-dont.svg"
            alt="'Click here' linked within a paragraph"
            width="482"
            height="81">
    </uxdot-example>
    <p>Do not use ambiguous phrases or a full website URL in body text.</p>
  </uxdot-best-practice>
</div>

<rh-cta href="/accessibility/content/#link-text">Writing accessible link text</rh-cta>

### Long links

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./links-best-practice-2-do.svg"
            alt="A paragraph of text with the last few words hyperlinked"
            width="482"
            height="135">
    </uxdot-example>
    <p>Try to keep link text as brief as possible.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./links-best-practice-2-dont.svg"
            alt="A paragraph of text with the final sentence hyperlinked"
            width="482"
            height="135">
    </uxdot-example>
    <p><a href="/accessibility/content/#avoid-the-following-when-creating-links">Do not link</a> very long strings of text (including long URLs).</p>
  </uxdot-best-practice>
</div>

### Buttons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./links-best-practice-3-do.svg"
            alt="Blue primary button that says 'Submit'"
            width="482"
            height="100">
    </uxdot-example>
    <p><a href="/elements/button/">Buttons</a> have different use cases and should only be used for actions.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="./links-best-practice-3-dont.svg"
            alt="Blue primary button that says 'Learn more' text with a right arrow"
            width="482"
            height="100">
    </uxdot-example>
    <p>Do not use buttons as links.</p>
  </uxdot-best-practice>
</div>

[linkwithicon]: /patterns/link-with-icon/
[ctas]: /elements/call-to-action/
[interactivevisitedtokens]: /tokens/color/#color-interactive-primary-visited
[redhat]: https://www.redhat.com

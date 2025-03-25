## Guidelines

Use a disclosure to reveal more information or details about an element or content on a page.

### Disclosure vs. Accordion

Use a disclosure to organize information that is either not critical for users to read or no longer fits on the page due to small screens. A disclosure displays a single section of content whereas an [Accordion](/elements/accordion/) displays multiple sections that can be expanded simultaneously.

<uxdot-example color-palette="lightest">
  <img alt="One open disclosure, one accordion. Text describing the disclosure: 'A disclosure on a product page displaying secondary information about trials.' Text describing the accordion: 'An accordion with multiple sections displaying important information about subscriptions.'"
       src="../disclosure-guidelines-disclosure-vs-accordion.svg"
       width="1012"
       height="690">
</uxdot-example>

## Writing content

### Title text

Title text should be simple so users know what to expect when they expand a disclosure. Beware that long character counts will break to two lines as screen sizes get smaller.

### Character count

<rh-table>

| Element      | Character Count |
|--------------|-----------------|
| Title Text   | 50              |

</rh-table>

### Panel content

When a disclosure is expanded, content appears below the title text and caret icon. Try and limit panel content to text and simple components only like calls to action.

## Behavior

### Collapsing and expanding

When a disclosure is collapsed, the caret icon points down. When a disclosure is expanded, the caret icon animates to point up.

### Nested disclosure

If there is a nested disclosure, it is always collapsed by default until a user expands it.

<uxdot-example color-palette="lightest">
  <img alt="An open outer disclosure and a collapsed inner disclosure."
       src="../disclosure-guidelines-behavior-nested-disclosure.svg"
       width="1012"
       height="283">
</uxdot-example>

### Jump links

A disclosure can be used to organize interactive elements that do not fit on small screens like jump links.

<uxdot-example>
  {% include "./disclosure-guidelines-behavior-jump-links.svg" %}
</uxdot-example>

## Responsive design

A disclosure does not change much as screens get smaller.

<uxdot-example color-palette="lightest" variant="full" no-border>
  <img alt="Four disclosures at various viewports, mobile to desktop."
       src="../disclosure-guidelines-responsive-design.svg"
       width="1140"
       height="1004">
</uxdot-example>

## Best practices

### One panel only

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="A single collapsed disclosure"
           src="../disclosure-guidelines-best-practice-1-do.svg"
           width="418"
           height="232">
    </uxdot-example>
    <p>Use one disclosure for one section at a time.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Multiple disclosures on top of one another."
           src="../disclosure-guidelines-best-practice-1-dont.svg"
           width="418"
           height="232">
    </uxdot-example>
    <p>Do not stack disclosures, use an [Accordion](/elements/accordion/) instead if more than one section is needed.</p>
  </uxdot-best-practice>
</div>

### Line length

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image">
    <img alt="An open disclosure with a line length of 789px."
         src="../disclosure-guidelines-best-practice-2-do.svg"
         width="1012"
         height="203">
  </uxdot-example>
  <p>Keep the max width of body text at 789px.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image">
    <img alt="An open disclosure with a line length greater than 798px."
         src="../disclosure-guidelines-best-practice-2-dont.svg"
         width="1012"
         height="203">
  </uxdot-example>
  <p>Do not allow the max width of body text to exceed 789px otherwise it is hard to read.</p>
</uxdot-best-practice>

### Nesting components

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image">
    <img alt="An open disclosure with a paragraph, CTA, and a closed nested disclosure."
         src="../disclosure-guidelines-best-practice-3-do.svg"
         width="1012"
         height="203">
  </uxdot-example>
  <p>Only a disclosure and other simple components like calls to action can be nested within a disclosure.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image">
    <img alt="An open disclosure with an accordion with three closed panels within."
         src="../disclosure-guidelines-best-practice-3-dont.svg"
         width="1012"
         height="203">
  </uxdot-example>
  <p>Do not embed other complex components in a disclosure.</p>
</uxdot-best-practice>

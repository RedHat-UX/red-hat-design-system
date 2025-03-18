## Style

A disclosure is a container that includes a caret icon and a text label, similar to an [Accordion](/elements/accordion) panel. When expanded, some styles are added for emphasis.

### Anatomy

<figure>
  <uxdot-example>
    <img alt="Anatomy of a disclosure component with numbered annotations."
         src="../disclosure-style-anatomy.svg"
         width="1012"
         height="341">
  </uxdot-example>
  <figcaption>
    <ol style="font-size: var(--rh-font-size-body-text-sm, 0.875rem);">
      <li>Caret icon</li>
      <li>Title text</li>
      <li>Container</li>
      <li>Thick border</li>
      <li>Box shadow</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

### Light scheme

<uxdot-example>
  <img alt="Two disclosures. One closed, one open on a light color scheme."
       src="../disclosure-style-scheme-light.svg"
       width="1012"
       height="299">
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
  <img alt="Two disclosures. One closed, one open on a dark color scheme."
       src="../disclosure-style-scheme-dark.svg"
       width="1012"
       height="283">
</uxdot-example>

## Configuration

A disclosure includes two parts, a trigger that the user selects and the container that opens and discloses the content.

<uxdot-example>
  <img alt="Two disclosures, one open and one closed showing the alignment of the chevron with the trigger text. Below the disclosures is an accordion with the text, 'Accordion panels have the caret icon on the right to differentiate.'"
       src="../disclosure-style-configuration.svg"
       width="1012"
       height="552">
</uxdot-example>

### Nested disclosure

Only one additional disclosure can be nested to help organize content better. If you need to use more disclosures, use an [Accordion](/elements/accordion) instead.

<uxdot-example>
  <img alt="Two open disclosures, each with a nested disclosure. The top nested disclosure is closed while the bottom is open."
       src="../disclosure-style-configuration-nested-disclosure.svg"
       width="1012"
       height="769">
</uxdot-example>

## Space

<uxdot-example>
  <img alt="Three disclosures. The top one is closed, the middle one is open, and the bottom one is open with a nested disclosure. There's 16px on the top and bottom of the trigger, 24px on the left and right. There's 24px padding on the open disclosure content."
       src="../disclosure-style-space.svg"
       width="1012"
       height="809">
</uxdot-example>

## Interaction states

### Hover

The entire header panel surface changes color on hover.

<uxdot-example>
  <img alt="Two open disclosures, one open, one closed. Each showing the gray hover state of the disclosure's trigger."
       src="../disclosure-style-interaction-states-hover-scheme-light.svg"
       width="1012"
       height="323">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="Two open disclosures on a dark color scheme, one open, one closed. Each showing the gray hover state of the disclosure's trigger."
       src="../disclosure-style-interaction-states-hover-scheme-dark.svg"
       width="1012"
       height="315">
</uxdot-example>

### Focus and Active

A focus ring wraps around the entire header panel in both focus and active states.

<uxdot-example>
  <img alt="Two open disclosures, one open, one closed. Each showing the gray focus state of the disclosure's trigger plus the blue focus outline."
       src="../disclosure-style-interaction-states-focus-active-scheme-light.svg"
       width="1012"
       height="323">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="Two open disclosures on a dark color scheme, one open, one closed. Each showing the gray focus state of the disclosure's trigger plus the blue focus outline."
       src="../disclosure-style-interaction-states-focus-active-scheme-dark.svg"
       width="1012"
       height="315">
</uxdot-example>

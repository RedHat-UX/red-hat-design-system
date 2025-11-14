## Style

A disclosure is a container that includes a caret icon and a text label, similar to an [Accordion](/elements/accordion) panel. When expanded, some styles are added for emphasis.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="Anatomy of a disclosure component with numbered annotations."
         src="../disclosure-style-anatomy.svg"
         width="1012"
         height="341">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Caret icon</li>
      <li>Title text</li>
      <li>Container</li>
      <li>Thick border</li>
      <li>Box shadow</li>
    </ol>
  </figcaption>
</figure>

## Variants

### Box

The box variant, which is the default style, shows a border around the entire disclosure in all states. A thicker accent border appears on the left when it’s expanded.

<uxdot-example color-palette="lightest">
  <img alt="Two box variant disclosures. One closed, one open on a light color scheme."
       src="../disclosure-style-variants-box.svg"
       width="1012"
       height="299">
</uxdot-example>

### Borderless

The borderless disclosure omits the border and uses `--rh-color-interactive-primary-default` for the title text for improved interactive affordance.

<uxdot-example color-palette="lightest">
  <img alt="Two borderless variant disclosures. One closed, one open on a light color scheme."
       src="../disclosure-style-variants-borderless.svg"
       width="1012"
       height="299">
</uxdot-example>

## Sizes

The style variants come in both sizes.

### Default

<uxdot-example color-palette="lightest">
  <img alt="Two default-sized disclosures. The first is the box variant and the second is the borderless variant on a light color scheme."
       src="../disclosure-style-sizes-default.svg"
       width="1012"
       height="299">
</uxdot-example>

### Compact

The compact size reduces the font size of the title text and amount of padding around it.

<uxdot-example color-palette="lightest">
  <img alt="Two compact disclosures. The first is the box variant and the second is the borderless variant on a light color scheme."
       src="../disclosure-style-sizes-compact.svg"
       width="1012"
       height="299">
</uxdot-example>

## Color scheme

### Light scheme

<uxdot-example color-palette="lightest">
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

<uxdot-example color-palette="lightest">
  <img alt="Two disclosures, one open and one closed showing the alignment of the chevron with the trigger text. Below the disclosures is an accordion with the text, 'Accordion panels have the caret icon on the right to differentiate.'"
       src="../disclosure-style-configuration.svg"
       width="1012"
       height="552">
</uxdot-example>

### Nested disclosure

Only one additional disclosure can be nested to help organize content better. If you need to use more disclosures, use an [Accordion](/elements/accordion) instead.

<uxdot-example color-palette="lightest">
  <img alt="Two open disclosures, each with a nested disclosure. The top nested disclosure is closed while the bottom is open."
       src="../disclosure-style-configuration-nested.svg"
       width="1012"
       height="769">
</uxdot-example>

## Space

A disclosure’s spacing is affected by whether they are the default or compact size. A box and a borderless disclosure used at the same size have the same spacing.

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="A closed default-sized and a closed compact disclosure, each showing the spacing tokens within the disclosure element. The default-sized has 24px spacing on the left and right side and 16px on the top and bottom. The compact version has 16px and 8px respectively."
         src="../disclosure-style-space-collapsed.svg"
         width="1012"
         height="341">
  </uxdot-example>
  <figcaption>
    <p>Spacing when disclosures are collapsed</p>
  </figcaption>
</figure>

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="An open default-sized and an open compact disclosure, each showing the spacing tokens inside the disclosure panel. The default-sized has 24px spacing on the left, right and bottom with 16px between the summary and the panel. The compact version has 16px on the left, right and top, but keeps the 24px on the bottom."
         src="../disclosure-style-space-expanded.svg"
         width="1012"
         height="341">
  </uxdot-example>
  <figcaption>
    <p>Spacing when disclosures are expanded</p>
  </figcaption>
</figure>

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="An open default-sized and an open compact disclosure, each showing the spacing tokens around the nested disclosure inside the panel. The default-sized has 24px on the left, right and bottom. The compact has 16px on the left and right with 24px on the bottom."
         src="../disclosure-style-space-expanded.svg"
         width="1012"
         height="341">
  </uxdot-example>
  <figcaption>
    <p>Spacing when disclosures are nested</p>
  </figcaption>
</figure>

## Interaction states

### Hover

The entire trigger button surface changes color on hover.

<uxdot-example color-palette="lightest">
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

A focus ring wraps around the entire trigger button in both focus and active states.

<uxdot-example color-palette="lightest">
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

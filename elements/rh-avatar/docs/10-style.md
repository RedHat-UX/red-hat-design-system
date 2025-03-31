## Style

An avatar is a placeholder graphic, custom photo, or generated image. It can 
be used by itself, but it is often paired with detailed text about the user 
including their full name, job title, and company.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="239px">
    <img alt="Anatomy of an avatar group with numbered annotations"
         src="../avatar-anatomy.png"
         width="239"
         height="100">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Thumbnail</li>
      <li>Job details text</li>
    </ol>
  </figcaption>
 </figure>

## Variants

The Default variant is visible when a user has not uploaded a **custom image** 
(like a photo). Once they do, what they provided replaces the gray thumbnail. 
If they choose not to, a colored pattern will be generated instead based on 
their name. A specific name is linked to the same pattern, so thumbnails can 
stay static without storing lots of generated images.

<uxdot-example color-palette="lightest" width-adjustment="651px">
  <img alt="Image of all avatar groups including default, photo, green squares, purple squares, and blue triangles"
       src="../avatar-variations.png"
       width="651"
       height="487">
</uxdot-example>

### Plain

The avatar thumbnail can be used on its own in places like 
[accordions](https://ux.redhat.com/elements/accordion/), 
[cards](https://ux.redhat.com/elements/card/), navigations, tables, and more.

<uxdot-example color-palette="lightest" width-adjustment="576px">
  <img alt="Image of a row of only avatar thumbnails"
       src="../avatar-plain.png"
       width="576"
       height="64">
</uxdot-example>

### Link

Links can be applied to full name or job details text.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not apply links to full name <strong>and</strong> job details text at the same time.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="706px">
  <img alt="Image of two avatar groups; one has the full name linked and the other has the company name linked"
       src="../avatar-links.png"
       width="706"
       height="64">
</uxdot-example>

## Color scheme
<a id="theme"></a>

All avatar variants are available for both light and dark color schemes.

### Light and dark themes

<uxdot-example color-palette="lightest" width-adjustment="239px">
  <img src="../avatar-theme-light.png"
       width="239"
       alt="Image of a light theme avatar group"
       height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="239px">
  <img alt="Image of a dark theme avatar group"
       src="../avatar-theme-dark.png"
       width="239"
       height="64">
</uxdot-example>

<rh-table>

| Element                  | Light theme | Dark theme |
|--------------------------|-------------|------------|
| Color - job details text | \#4D4D4D    | \#C7C7C7   |

</rh-table>

## Configuration

The default size of the avatar thumbnail is `64px x 64px` and the avatar 
thumbnail and job details text are horizontally centered. To see alignment 
examples, go to the 
[Guidelines](https://ux.redhat.com/elements/avatar/guidelines/) page.

<uxdot-example color-palette="lightest" width-adjustment="463px">
  <img alt="Image of two avatar groups showing specs like height, width, and centering/alignment"
       src="../avatar-configuration.png"
       width="463"
       height="89">
</uxdot-example>

### Job details text

Job details text has specific styles applied to it.

<uxdot-example color-palette="lightest" width-adjustment="546px">
  <img alt="Image of two avatar groups showing only job details text left justified and center justified"
       src="../avatar-job-details-text.png"
       width="546"
       height="39">
</uxdot-example>

<rh-table>

| Property                                 | Current Value |
|------------------------------------------|---------------|
| Font weight - full name                  | Medium        |
| Font weight - job title and company name | Regular       |
| Font style - company name                | Italic        |

</rh-table>

## Space
 
Space values are the same for all variants and on all breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="570px">
  <img alt="Image of all avatar groups with spacing values in between"
       src="../avatar-space.png"
       width="570"
       height="440">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example color-palette="lightest" width-adjustment="293px">
  <img alt="Image of light theme avatar group hover states"
       src="../avatar-interaction-state-hover-theme-light.png"
       width="293"
       height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="293px">
  <img alt="Image of dark theme avatar group hover states"
       src="../avatar-interaction-state-hover-theme-dark.png"
       width="293"
       height="64">
</uxdot-example>

<rh-table>

| Property                         | Light theme | Dark theme |
|----------------------------------|-------------|------------|
| Color - full name text           | \#004080    | \#BEE1FA   |
| Text decoration - full name text | Underline   | Underline  |

</rh-table>

### Focus

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>


<uxdot-example color-palette="lightest" width-adjustment="293px">
  <img alt="Image of light theme avatar group focus states"
       src="../avatar-interaction-state-focus-theme-light.png"
       width="293"
       height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="293px">
  <img alt="Image of dark theme avatar group focus states"
       src="../avatar-interaction-state-focus-theme-dark.png"
       width="293"
       height="64">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>


### Active

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="293px">
  <img alt="Image of light theme avatar group active states"
       src="../avatar-interaction-state-active-theme-light.png"
       width="293"
       height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="293px">
  <img alt="Image of dark theme avatar group active states"
       src="../avatar-interaction-state-active-theme-dark.png"
       width="293"
       height="64">
</uxdot-example>

<rh-table>

| Property                         | Light theme | Dark theme |
|----------------------------------|-------------|------------|
| Color - full name text           | \#004080    | \#BEE1FA   |
| Text decoration - full name text | Underline   | Underline  |

</rh-table>



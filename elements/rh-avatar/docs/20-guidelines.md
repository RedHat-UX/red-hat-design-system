## Usage

The avatar thumbnail is commonly used to represent a user in a masthead or 
navigation. However, depending on other use cases and needs, there is more 
room for customization.


## Sizes

The avatar thumbnail can be used at different sizes based on our design tokens. The default size is <code>64px</code>.

<uxdot-example color-palette="lightest" width-adjustment="823px">
  <img alt="Image of all avatar thumbnail sizes and their pixel values underneath"
       src="../avatar-usage-sizes.png"
       width="823"
       height="152">
</uxdot-example>

<rh-table>

| Variation and range  | Use case                                                  |
|----------------------|-----------------------------------------------------------|
| Small (16px - 32px)  | Use these sizes in accordions, data lists, or tables      |
| Medium (40px - 80px) | Use these sizes in layouts, bands, or cards               |
| Large (96px - 128px) | Use these sizes in profile displays or account interfaces |

</rh-table>

## Writing content
  
Separate each part of the job title and company name with a comma.

<uxdot-example color-palette="lightest" width-adjustment="611px">
  <img alt="Image of three job details text, ranging from short to long"
       src="../avatar-writing-content.png"
       width="611"
       height="181"> 
</uxdot-example>

## Layout

### Alignment

The avatar thumbnail and job details text can be horizontally or vertically 
centered.

<uxdot-example color-palette="lightest" width-adjustment="625px">
  <img alt="Image of two avatar groups; one is horizontally centered and the other is vertically centered"
       src="../avatar-usage-alignment.png"
       width="625"
       height="119">
</uxdot-example>


### Stacking

There should be a spacing of `--rh-space-3xl` between avatar groups that are stacked vertically.

<uxdot-example color-palette="lightest" width-adjustment="385px">
  <img alt="Image of three avatar groups stacked vertically"
       src="../avatar-usage-stacking.png"
       width="385"
       height="288">
</uxdot-example>

## Responsive design

### Large breakpoints

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left" width-adjustment="1000px">
  <img alt="Image of two avatar groups used on large breakpoints; one is aligned left and the other is aligned in the center"
       src="../avatar-breakpoints-large.png"
       width="1000"
       height="215">
</uxdot-example>

### Small breakpoints

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left" width-adjustment="576px">
  <img alt="Image of four avatar groups used on small breakpoints; two are aligned left and the other two are aligned in the center"
       src="../avatar-breakpoints-small.png"
       width="576"
       height="492">
</uxdot-example>

### Line breaks

As breakpoints or containers get smaller, regardless if job details text will 
break to more lines, it is still anchored at the top.

<uxdot-example color-palette="lightest" width-adjustment="498px">
  <img alt="Image of two avatar groups with specs on top; one has two lines and the other has five lines"
       src="../avatar-line-breaks.png"
       width="498"
       height="96">
</uxdot-example>

## Best practices

### Thumbnail shape

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="226px" slot="image">
      <img alt="Default avatar thumbnail in a circle next to 'Ada Lovelace, Computer programmer' text"
           src="../avatar-best-practices-shape-do.svg"
           width="226"
           height="64">
    </uxdot-example>
    <p>Keep the thumbnail in a circle.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="226px" slot="image">
      <img alt="Default avatar thumbnail in a square next to 'Ada Lovelace, Computer programmer' text"
           src="../avatar-best-practices-shape-dont.svg"
           width="226"
           height="64">
    </uxdot-example>
    <p>Do not change the shape of the avatar thumbnail.</p>
  </uxdot-best-practice>
</div>

### Thumbnail theme

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img alt="Light theme avatar against light theme background and dark theme avatar against dark theme background"
           src="../avatar-best-practices-theme-do.svg"
           width="482"
           height="192">
    </uxdot-example>
    <p>Use the right avatar thumbnail for the theme.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img alt="Dark theme avatar against light theme background and light theme avatar against dark theme background"
           src="../avatar-best-practices-theme-dont.svg"
           width="482"
           height="192">
    </uxdot-example>
    <p>Do not use a light theme avatar thumbnail in the dark theme and vice versa.</p>
  </uxdot-best-practice>
</div>

### Icon vs. avatar thumbnail

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" width-adjustment="215px" slot="image">
      <img alt="Avatar thumbnail above the text 'You are logged in as Ada Lovelace'"
           src="../avatar-best-practices-icon-vs-avatar-do.svg"
           width="215"
           height="101">
    </uxdot-example>
    <p>Use an avatar thumbnail to represent an authenticated user.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="64px" slot="image">
      <img alt="Avatar thumbnail above the text 'Login'"
           src="../avatar-best-practices-icon-vs-avatar-dont.svg"
           width="64"
           height="101">
    </uxdot-example>
    <p>Do not use an avatar thumbnail when an icon is more suitable.</p>
  </uxdot-best-practice>
</div>

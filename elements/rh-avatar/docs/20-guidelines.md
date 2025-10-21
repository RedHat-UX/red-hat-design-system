## Usage

The avatar thumbnail is commonly used to represent a user in a masthead or 
navigation. However, depending on other use cases and needs, there is more 
room for customization.


## Sizes

The avatar thumbnail can be used at different sizes based on our design tokens. The default size is <code>64px</code>.

<uxdot-example color-palette="lightest">
  <img alt="Nine different avatar thumbnail sizes ranging from very small to large."
       src="../avatar-guidelines-sizes.svg"
       width="784"
       height="128">
</uxdot-example>

## Writing content
  
Separate each part of the job title and company name with a comma.

<uxdot-example color-palette="lightest">
  <img alt="Three avatars with profile images and description text ranging from short to long."
       src="../avatar-guidelines-writing-content.svg"
       width="678"
       height="256"> 
</uxdot-example>

## Layout

### Alignment

The avatar thumbnail and job details text can be horizontally or vertically 
centered.

<uxdot-example color-palette="lightest">
  <img alt="Two avatar groups; one is horizontally centered and the other is vertically centered"
       src="../avatar-guidelines-layout-alignment.svg"
       width="504"
       height="122">
</uxdot-example>

## Responsive design

### Large screens

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left">
  <img alt="Two avatar groups used on large breakpoints; one is aligned left and the other is aligned in the center"
       src="../avatar-guidelines-responsive-design-large.svg"
       width="1000"
       height="215">
</uxdot-example>

### Small breakpoints

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left">
  <img alt="Two avatars on small breakpoints; One is left aligned and one is center aligned (image and description)."
       src="../avatar-guidelines-responsive-design-small.svg"
       width="360"
       height="239">
</uxdot-example>

### Line breaks

As screens or containers get smaller, text is still anchored to the top.

<uxdot-example color-palette="lightest">
  <img alt="Two avatar groups with design specs overlayed; one has two lines and the other has five lines"
       src="../avatar-guidelines-line-breaks.svg"
       width="710"
       height="244">
</uxdot-example>

## Best practices

### Thumbnail shape

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="226" slot="image">
      <img alt="Default avatar thumbnail in a circle next to 'Ada Lovelace, Computer programmer' text"
           src="../avatar-best-practices-shape-do.svg"
           width="226"
           height="64">
    </uxdot-example>
    <p>Keep the thumbnail in a circle.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="226" slot="image">
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

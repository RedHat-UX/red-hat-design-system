## Usage

The avatar thumbnail is commonly used to represent a user in a masthead or 
navigation. However, depending on other use cases and needs, there is more 
room for customization.


## Sizes

The avatar thumbnail can be used at different sizes based on our design tokens. The default size is <code>64px</code>.

<uxdot-example width-adjustment="823px">
  <img src="../avatar-usage-sizes.png" 
      alt="Image of all avatar thumbnail sizes and their pixel values underneath"
      width="823"
      height="152">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Variation and range">Variation and range</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variation and range">Small (16px - 32px)</td>
        <td data-label="Use case">Use these sizes in accordions, data lists, or tables</td>
      </tr>
      <tr>
        <td data-label="Variation and range">Medium (40px - 80px)</td>
        <td data-label="Use case">Use these sizes in layouts, bands, or cards</td>
      </tr>
      <tr>
        <td data-label="Variation and range">Large (96px - 128px)</td>
        <td data-label="Use case">Use these sizes in profile displays or account interfaces</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Writing content
  
Separate each part of the job title and company name with a comma.

<uxdot-example width-adjustment="611px">
  <img src="../avatar-writing-content.png" 
      alt="Image of three job details text, ranging from short to long"
      width="611"
      height="181"> 
</uxdot-example>

## Layout

### Alignment

The avatar thumbnail and job details text can be horizontally or vertically 
centered.

<uxdot-example width-adjustment="625px">
  <img src="../avatar-usage-alignment.png" 
      alt="Image of two avatar groups; one is horizontally centered and the other is vertically centered"
      width="625"
      height="119">
</uxdot-example>


### Stacking

There is `48px` of space when avatar groups are stacked vertically.

<uxdot-example width-adjustment="385px">
  <img src="../avatar-usage-stacking.png" 
      alt="Image of three avatar groups stacked vertically with 48 pixel of space in between"
      width="385"
      height="288">
</uxdot-example>

## Responsive design

### Large breakpoints

<uxdot-example variant="full" no-border alignment="left" width-adjustment="1000px">
  <img src="../avatar-breakpoints-large.png" 
      alt="Image of two avatar groups used on large breakpoints; one is aligned left and the other is aligned in the center"
      width="1000"
      height="215">
</uxdot-example>

### Small breakpoints

<uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
  <img src="../avatar-breakpoints-small.png" 
      alt="Image of four avatar groups used on small breakpoints; two are aligned left and the other two are aligned in the center"
      width="576"
      height="492">
</uxdot-example>

### Line breaks

As breakpoints or containers get smaller, regardless if job details text will 
break to more lines, it is still anchored at the top.

<uxdot-example width-adjustment="498px">
  <img src="../avatar-line-breaks.png" 
      alt="Image of two avatar groups with specs on top; one has two lines and the other has five lines"
      width="498"
      height="96">
</uxdot-example>

## Best practices

### Thumbnail shape

Do not change the shape of the avatar thumbnail.

<uxdot-example danger width-adjustment="293px">
  <img src="../avatar-best-practice-1.png" 
      alt="Image of a square avatar thumbnail which is incorrect usage"
      width="293"
      height="64">
</uxdot-example>

### Light theme thumbnail

Do not use a light theme avatar thumbnail in the dark theme.

<uxdot-example danger width-adjustment="270px">
  <img src="../avatar-best-practice-2.png" 
      alt="Image of a light theme avatar thumbnail placed on a black background which is incorrect usage"
      width="270"
      height="64">
</uxdot-example>

### Icon vs. avatar thumbnail

Do not use an avatar thumbnail when an icon is more suitable.

<uxdot-example danger width-adjustment="136px">
  <img src="../avatar-best-practice-3.png" 
      alt="Image of an icon and avatar thumbnail right next to each other which is incorrect usage"
      width="136"
      height="48">
</uxdot-example>


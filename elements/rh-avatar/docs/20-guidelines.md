{% section %}
## Usage

The avatar thumbnail is commonly used to represent a user in a masthead or navigation. However, depending on other use cases and needs, there is more room for customization.

{% endsection %}

{% section %}
## Sizes
The avatar thumbnail can be used at different sizes based on our design tokens. The default size is <code>64px</code>.

{% example palette="light",
            alt="Image of all avatar thumbnail sizes and their pixel values underneath",
            src="../avatar-usage-sizes.png" %}

<table style="width:100%">
    <tr>
        <th style="width:25%">Variation and range</th>
        <th style="width:75%">Use case</th>
    </tr>
    <tr>
        <td>Small (16px - 32px)</td>
        <td>Use these sizes in accordions, data lists, or tables</td>
    </tr>
    <tr>
        <td>Medium (40px - 80px)</td>
        <td>Use these sizes in layouts, bands, or cards</td>
    </tr>
    <tr>
        <td>Large (96px - 128px)</td>
        <td>Use these sizes in profile displays or account interfaces</td>
    </tr>
</table>

{% endsection %}

{% section %}
## Writing content
Separate each part of the job title and company name with a comma.

{% example palette="light",
            alt="Image of three job details text, ranging from short to long",
            src="../avatar-writing-content.png" %}

{% endsection %}

{% section %}
## Layout
### Alignment
The avatar thumbnail and job details text can be horizontally or vertically centered.

{% example palette="light",
            alt="Image of two avatar groups; one is horizontally centered and the other is vertically centered",
            src="../avatar-usage-alignment.png" %}

### Stacking
There is <code>48px</code> of space when avatar groups are stacked vertically.

{% example palette="light",
            alt="Image of three avatar groups stacked vertically with 48 pixel of space in between",
            src="../avatar-usage-stacking.png" %}
          
{% endsection %}

{% section %}
## Responsive design
### Large breakpoints
{% example palette="none",
            alt="Image of two avatar groups used on large breakpoints; one is aligned left and the other is aligned in the center",
            src="../avatar-breakpoints-large.png" %}

### Small breakpoints
{% example palette="none",
            alt="Image of four avatar groups used on small breakpoints; two are aligned left and the other two are aligned in the center",
            src="../avatar-breakpoints-small.png" %}

### Line breaks
As breakpoints or containers get smaller, regardless if job details text will break to more lines, it is still anchored at the top.

{% example palette="light",
            alt="Image of two avatar groups with specs on top; one has two lines and the other has five lines",
            src="../avatar-line-breaks.png" %}

{% endsection %}

{% section %}
## Best practices
### Thumbnail shape
Do not change the shape of the avatar thumbnail.

{% example palette="wrong",
            alt="Image of a square avatar thumbnail which is incorrect usage",
            src="../avatar-best-practice-1.png" %}

### Light theme thumbnail
Do not use a light theme avatar thumbnail in the dark theme.

{% example palette="wrong",
            alt="Image of a light theme avatar thumbnail placed on a black background which is incorrect usage",
            src="../avatar-best-practice-2.png" %}

### Icon vs. avatar thumbnail
Do not use an avatar thumbnail when an icon is more suitable.

{% example palette="wrong",
            alt="Image of an icon and avatar thumbnail right next to each other",
            src="../avatar-best-practice-3.png" %}

{% endsection %}
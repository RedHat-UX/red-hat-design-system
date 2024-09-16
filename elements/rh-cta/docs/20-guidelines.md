## Usage

Use a call to action to entice users into making a selection like clicking on a 
link. For example, use a Primary call to action to bring attention to something 
important or a Brick call to action if you need to arrange links together in a 
grid.

### When to use a call to action

Using a call to action is a way to highlight a link that is used on its own 
instead of an inline link in a text block. It is commonly used as the last 
element in a group so users can read about something first and then proceed 
further if they are interested. Each page should have only one Primary call to 
action and any remaining calls to action should be represented as lower in 
hierarchy.

### Call to action vs. button

Even though they look similar, a call to action is a link which takes users from 
one page to a **different page** whereas a button communicates and triggers 
actions on the **same page**. Use a button when the desired action is submitting 
a form, canceling a process, or creating a new object.

## Variants

Each call to action has a specific function and the design of each variant 
signals that function to users. Therefore, it is important that each variant is 
implemented consistently so they communicate the correct actions.

<uxdot-example width-adjustment="788px">
  <img src="{{ '../cta-variants.png' | url }}" alt="Image of the Primary, 
    Secondary, Brick, and Default variants with descriptive text labels below">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variant">Primary</td>
        <td data-label="Use case">Use only once per page for the primary or most 
          important link</td>
      </tr>
      <tr>
        <td data-label="Variant">Secondary</td>
        <td data-label="Use case">Use several times on the same page for 
          secondary or general links</td>
      </tr>
      <tr>
        <td data-label="Variant">Brick</td>
        <td data-label="Use case">Use several times on the same page to group 
          links together in a grid</td>
      </tr>
      <tr>
        <td data-label="Variant">Default</td>
        <td data-label="Use case">Use several times on the same page for 
          tertiary or less important links</td>
      </tr>
      <tr>
        <td data-label="Variant">Video</td>
        <td data-label="Use case">Triggers a video in a <a href="{{ 
          '/elements/dialog/' | url }}">dialog</a> (applies to Primary, 
          Secondary, and Default variants only)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Disabled

To indicate that a link is currently unavailable, calls to action can become 
disabled.

<uxdot-example width-adjustment="529px">
  <img src="{{ '../cta-disabled.png' | url }}" alt="Image of disabled Primary, 
    Secondary, Brick, and Default variants">
</uxdot-example>


### Brick icons

When grouping Brick variants, icons can be paired with text labels to 
communicate various topics, but the icons must be the same color, height, style, 
etc.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../cta-brick-icons.png' | url }}" alt="Image of Brick variants 
    with an icon on the left of text and on top of text">
</uxdot-example>

## Writing content

### Call to action text labels

Call to action text labels should be more action-oriented than button text 
labels. When writing text labels, be specific and clearly communicate the task 
or destination by doing the following:

- Make sure the text is unique and easily understood for when screen readers 
announce text to users
- Always start the text label with a verb
- Use simple words and phrases
- Do not use multiple verbs
- Try to write short text labels or rearrange words when possible
- Do not use punctuation
- Do not use any other icons except for the ones that are included

<uxdot-example width-adjustment="411px">
  <img src="{{ '../cta-text-labels.png' | url }}" alt="Image of Default variants 
    showing how to incorrectly and correctly write text labels">
</uxdot-example>

### Clarity of language
  
Text labels can be inviting as well as to the point, vague messaging does not 
help our users make informed decisions.

<uxdot-example width-adjustment="458px">
  <img src="{{ '../cta-clarity-of-language.png' | url }}" alt="Image of how to 
    incorrectly and correctly use clear and straightforward language">
</uxdot-example>

### Long text labels

Users do not want to spend more time reading than necessary, so write text 
labels with as few words as possible.

<uxdot-example width-adjustment="675px">
  <img src="{{ '../cta-long-text-labels-1.png' | url }}" alt="Image of comparing 
    very long and shortened text labels">
</uxdot-example>

Long text labels will break to two lines on small breakpoints or when translated 
to certain languages. This can be avoided by writing less text.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>The arrow icon in the Default variant should always be connected to at 
    least one word on the same line.</p>
</rh-alert>

<uxdot-example width-adjustment="360px">
  <img src="{{ '../cta-long-text-labels-2.png' | url }}" alt="Image of Primary, 
    Default, and Brick variants within a small breakpoint showing each text 
    label breaking to two lines">
</uxdot-example>


### Call to action vs. button text labels

Call to action text labels are written to entice users to select a link whereas 
button text labels are written to be short and communicate an action.

<uxdot-example width-adjustment="689px">
  <img src="{{ '../cta-call-to-action-vs-button-text-labels.png' | url }}" 
    alt="Image of comparing text labels in calls to action versus text labels in 
    buttons">
</uxdot-example>


### Character count
The recommended maximum character count for the variants of a call to action are 
listed below and include spaces.

<rh-table>
  <table>
  <thead>
      <tr>
        <th scope="col" data-label="Variants" style="width: 50%">Variants</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variants">Primary</td>
        <td data-label="Character count">30</td>
      </tr>
      <tr>
        <td data-label="Variants">Secondary</td>
        <td data-label="Character count">40</td>
      </tr>
      <tr>
        <td data-label="Variants">Brick</td>
        <td data-label="Character count">25</td>
      </tr>
      <tr>
        <td data-label="Variants">Default</td>
        <td data-label="Character count">55</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Layout

### Heirarchy

Calls to action are ordered by hierarchy with the Primary variant being the most 
important. Variants that are lower in hierarchy can be used more than one time 
per page.

<uxdot-example width-adjustment="720px">
  <img src="{{ '../cta-layout-hierarchy.png' | url }}" alt="Image of calls to 
    action hierarchy and usage guidance">
</uxdot-example>


### Placement

Calls to action can be placed in a variety of layouts including cards, grids, 
lists, and more. It is commonly used as the last element in a group so users can 
read about something first and then proceed further if they are interested.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../cta-placement-examples-1.png' | url }}" alt="Image of calls 
    to action used in context including under a text block and within a card">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../cta-placement-examples-2.png' | url }}" alt="Image of calls 
    to action used in context including within a grid and in a list">
</uxdot-example>

### Grouping

Call to action variants are ordered by hierarchy with Primary being the highest. 
Variants that are lower in hierarchy can be grouped with Primary as well as used 
more than once per page.

<uxdot-example width-adjustment="650px">
  <img src="{{ '../cta-layout-grouping.png' | url }}" alt="Image of call to 
    action groups and their hierarchy from left to right">
</uxdot-example>

### Bricks

Brick variants are flexible and can stretch to fit different column widths.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Long text labels will break to two lines, therefore write no more than two 
    or three words per Brick variant.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../cta-layout-bricks.png' | url }}" alt="Image of Brick variants 
    stretched to fit a variety of grid formations">
</uxdot-example>

### Space in groups
  
Horizontal and vertical spacing between Primary and Secondary variants is 
`24px`.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Spacing guidance between calls to action and text or other elements are on 
    the Spacing page.</p>
</rh-alert>

<uxdot-example width-adjustment="473px">
  <img src="{{ '../cta-layout-space-in-groups-1.png' | url }}" alt="Image of 
    24px spacers in between Primary and Secondary variants">
</uxdot-example>

Horizontal and vertical spacing between the Default variant is `24px`.

<uxdot-example width-adjustment="705px">
  <img src="{{ '../cta-layout-space-in-groups-2.png' | url }}" alt="Image of 
    24px spacers in between Default variants">
</uxdot-example>

Horizontal and vertical spacing between Brick variants should be the same as 
grid gutters.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../cta-layout-space-in-groups-3.png' | url }}" alt="Image of a 
    variety of space values in between Brick variants">
</uxdot-example>

## Behavior

### Hiding or revealing content

A Brick variant can hide and reveal a panel of content when selected like an 
[accordion](/elements/accordion/). However, only one Brick variant can be 
selected at a time like [tabs](/elements/tabs/).

<uxdot-example width-adjustment="1000px">
  <img src="{{ '../cta-bricks-hide-and-reveal.png' | url }}" alt="Image of Brick 
    variants with a panel open showing a variety of styles and content 
    formations">
</uxdot-example>


## Responsive design

On large breakpoints, calls to action are ordered by hierarchy from left to 
right in one row. On small breakpoints, if calls to action have long text 
labels, a second row appears.

<uxdot-example width-adjustment="1000px" variant="full" no-border 
alignment="left">
<img src="{{ '../cta-breakpoints-large.png' | url }}" alt="Image of calls to 
  action in a layout on a large breakpoint showing them all in one row">
</uxdot-example>

<uxdot-example width-adjustment="576px" variant="full" no-border 
alignment="left">
<img src="{{ '../cta-breakpoints-small.png' | url }}" alt="Image of calls to 
  action in a layout on a small breakpoint showing two variants in one row and 
  one variant in a second row">
</uxdot-example>


## Best practices

### Changing styles

Do not change the styles of any variant.

<uxdot-example width-adjustment="407px" danger>
  <img src="{{ '../cta-best-practice-1.png' | url }}" alt="Image of several 
    variants with brand new styles which is incorrect usage">
</uxdot-example>

### Primary variants

Do not use more than one Primary variant on any page.

<uxdot-example width-adjustment="407px" danger>
  <img src="{{ '../cta-best-practice-2.png' | url }}" alt="Image of two Primary 
    variants in one row which is incorrect usage">
</uxdot-example>

### Brick variants

Do not group different Brick variants together, use one variant per grid.

<uxdot-example width-adjustment="407px" danger>
  <img src="{{ '../cta-best-practice-3.png' | url }}" alt="Image of Brick 
    variants in one row with and without icons which is incorrect usage">
</uxdot-example>


### Grouping

Do not group more than two different variants together.	

<uxdot-example width-adjustment="483px" danger>
  <img src="{{ '../cta-best-practice-4.png' | url }}" alt="Image of Primary, 
    Secondary, and Default variants in one row which is incorrect usage">
</uxdot-example>


### Changing heirarchy

Do not change the hierarchy, variants that are higher in hierarchy should start 
first on the left.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Hierarchy should be reversed when using right-to-left languages.</p>
  </rh-alert>

<uxdot-example width-adjustment="533px" danger>
  <img src="{{ '../cta-best-practice-5.png' | url }}" alt="Image of the Primary 
    variant last in a row which is incorrect usage">
</uxdot-example>

### Too many options

Do not group more than three variants together otherwise the risk of [choice 
paralysis][paralysis]{target="_blank"} greatly increases.

<uxdot-example width-adjustment="659px" danger>
  <img src="{{ '../cta-best-practice-6.png' | url }}" alt="Image of two rows of 
    calls to action with four variants in each row which is incorrect usage">
</uxdot-example>

### Stretching

Do not add extra spacing or stretch the width of any variant except for Bricks.

<uxdot-example width-adjustment="672px" danger>
  <img src="{{ '../cta-best-practice-7.png' | url }}" alt="Image of Primary and 
    Secondary variants stretched which is incorrect usage">
</uxdot-example>

[paralysis]: https://www.shopify.com/partners/blog/choice-paralysis

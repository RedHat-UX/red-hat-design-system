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
  <img src="../cta-variants.png"
        alt="Image of the Primary, 
    Secondary, Brick, and Default variants with descriptive text labels below"
        width="788"
        height="90">
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
  <img src="../cta-disabled.png"
        alt="Image of disabled Primary, 
    Secondary, Brick, and Default variants"
        width="529"
        height="56">
</uxdot-example>


### Brick icons

When grouping Brick variants, icons can be paired with text labels to 
communicate various topics, but the icons must be the same color, height, style, 
etc.

<uxdot-example width-adjustment="872px">
  <img src="../cta-brick-icons.png"
        alt="Image of Brick variants 
    with an icon on the left of text and on top of text"
        width="872"
        height="273">
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
  <img src="../cta-text-labels.png"
        alt="Image of Default variants 
    showing how to incorrectly and correctly write text labels"
        width="411"
        height="186">
</uxdot-example>

### Clarity of language
  
Text labels can be inviting as well as to the point, vague messaging does not 
help our users make informed decisions.

<uxdot-example width-adjustment="458px">
  <img src="../cta-clarity-of-language.png"
        alt="Image of how to 
    incorrectly and correctly use clear and straightforward language"
        width="458"
        height="67">
</uxdot-example>

### Long text labels

Users do not want to spend more time reading than necessary, so write text 
labels with as few words as possible.

<uxdot-example width-adjustment="675px">
  <img src="../cta-long-text-labels-1.png"
        alt="Image of comparing 
    very long and shortened text labels"
        width="675"
        height="221">
</uxdot-example>

Long text labels will break to two lines on small breakpoints or when translated 
to certain languages. This can be avoided by writing less text.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>The arrow icon in the Default variant should always be connected to at 
    least one word on the same line.</p>
</rh-alert>

<uxdot-example width-adjustment="360px">
  <img src="../cta-long-text-labels-2.png"
        alt="Image of Primary, 
    Default, and Brick variants within a small breakpoint showing each text 
    label breaking to two lines"
        width="360"
        height="342">
</uxdot-example>


### Call to action vs. button text labels

Call to action text labels are written to entice users to select a link whereas 
button text labels are written to be short and communicate an action.

<uxdot-example width-adjustment="689px">
  <img src="../cta-call-to-action-vs-button-text-labels.png"
        alt="Image of comparing text labels in calls to action versus text labels in 
    buttons"
        width="689"
        height="56">
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
  <img src="../cta-layout-hierarchy.png"
        alt="Image of calls to 
    action hierarchy and usage guidance"
        width="720"
        height="236">
</uxdot-example>


### Placement

Calls to action can be placed in a variety of layouts including cards, grids, 
lists, and more. It is commonly used as the last element in a group so users can 
read about something first and then proceed further if they are interested.

<uxdot-example width-adjustment="872px">
  <img src="../cta-placement-examples-1.png"
        alt="Image of calls 
    to action used in context including under a text block and within a card"
        width="872"
        height="377">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="../cta-placement-examples-2.png"
        alt="Image of calls 
    to action used in context including within a grid and in a list"
        width="872"
        height="430">
</uxdot-example>

### Grouping

Call to action variants are ordered by hierarchy with Primary being the highest. 
Variants that are lower in hierarchy can be grouped with Primary as well as used 
more than once per page.

<uxdot-example width-adjustment="650px">
  <img src="../cta-layout-grouping.png"
        alt="Image of call to 
    action groups and their hierarchy from left to right"
        width="650"
        height="202">
</uxdot-example>

### Bricks

Brick variants are flexible and can stretch to fit different column widths.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Long text labels will break to two lines, therefore write no more than two 
    or three words per Brick variant.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../cta-layout-bricks.png"
        alt="Image of Brick variants 
    stretched to fit a variety of grid formations"
        width="872"
        height="528">
</uxdot-example>

### Space in groups
  
Horizontal and vertical spacing between Primary and Secondary variants should use the `--rh-space-xl` token.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Spacing guidance between calls to action and text or other elements are on 
    the Spacing page.</p>
</rh-alert>

<uxdot-example width-adjustment="473px">
  <img src="../cta-layout-space-in-groups-1.png"
        alt="Image of 
    24px spacers in between Primary and Secondary variants"
        width="473"
        height="256">
</uxdot-example>

Horizontal and vertical spacing between Default variants should use the `--rh-space-xl` token.

<uxdot-example width-adjustment="705px">
  <img src="../cta-layout-space-in-groups-2.png"
        alt="Image of 
    24px spacers in between Default variants"
        width="705"
        height="78">
</uxdot-example>

Horizontal and vertical spacing between Brick variants should be the same as 
grid gutters.

<uxdot-example width-adjustment="872px">
  <img src="../cta-layout-space-in-groups-3.png"
        alt="Image of a 
    variety of space values in between Brick variants"
        width="872"
        height="508">
</uxdot-example>

## Behavior

### Hiding or revealing content

A Brick variant can hide and reveal a panel of content when selected like an 
[accordion](/elements/accordion/). However, only one Brick variant can be 
selected at a time like [tabs](/elements/tabs/).

<uxdot-example width-adjustment="1000px">
  <img src="../cta-bricks-hide-and-reveal.png"
        alt="Image of Brick 
    variants with a panel open showing a variety of styles and content 
    formations"
        width="1000"
        height="1016">
</uxdot-example>


## Responsive design

On large breakpoints, calls to action are ordered by hierarchy from left to 
right in one row. On small breakpoints, if calls to action have long text 
labels, a second row appears.

<uxdot-example width-adjustment="1000px" variant="full" no-border 
alignment="left">
<img src="../cta-breakpoints-large.png"
        alt="Image of calls to 
  action in a layout on a large breakpoint showing them all in one row"
        width="1000"
        height="401">
</uxdot-example>

<uxdot-example width-adjustment="576px" variant="full" no-border 
alignment="left">
<img src="../cta-breakpoints-small.png"
        alt="Image of calls to 
  action in a layout on a small breakpoint showing two variants in one row and 
  one variant in a second row"
        width="576"
        height="390">
</uxdot-example>


## Best practices

### Variant styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="401px" slot="image">
      <img src="../cta-best-practices-variant-styles-do.svg"
            alt="Three call to action variants using the built-in options"
            width="401"
            height="56">
    </uxdot-example>
    <p>Retain the default styles for each variant.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="401px" slot="image">
      <img src="../cta-best-practices-variant-styles-dont.svg"
            alt="Primary CTA with arrow icon, brick CTA with icon on right, default CTA without arrow icon"
            width="401"
            height="56">
    </uxdot-example>
    <p>Do not change the styles of any variant.</p>
  </uxdot-best-practice>
</div>

### Primary variants

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="325px" slot="image">
      <img src="../cta-best-practices-primary-do.svg"
            alt="Primary CTA and secondary CTA in a group"
            width="325"
            height="56">
    </uxdot-example>
    <p>Use only one primary call to action on each page.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="325px" slot="image">
      <img src="../cta-best-practices-primary-dont.svg"
            alt="Two primary CTAs in a group"
            width="325"
            height="56">
    </uxdot-example>
    <p>Do not use more than one primary variant on any page.</p>
  </uxdot-best-practice>
</div>

### Brick variants

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="816px" slot="image">
    <img src="../cta-best-practices-brick-do.svg"
          alt="Four brick CTAs with icons on the left"
          width="816"
          height="56">
  </uxdot-example>
  <p>Use one configuration per grid of brick calls to action.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="816px" slot="image">
    <img src="../cta-best-practices-brick-dont.svg"
          alt="Four brick CTAs with no icon, an icon on the left, or an icon above the text"
          width="816"
          height="88">
  </uxdot-example>
  <p>Do not group different brick variants together.</p>
</uxdot-best-practice>

### Grouping

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="449px" slot="image">
      <img src="../cta-best-practices-grouping-do.svg"
            alt="One primary CTA grouped with two secondary CTAs"
            width="449"
            height="56">
    </uxdot-example>
    <p>Use up to two different variants in a call to action group.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="433px" slot="image">
      <img src="../cta-best-practices-grouping-dont.svg"
            alt="One primary CTA, one secondary CTA, and a default CTA in a group"
            width="433"
            height="56">
    </uxdot-example>
    <p>Do not group more than two different variants together.</p>
  </uxdot-best-practice>
</div>

### Hierarchy

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="630px" slot="image">
    <img src="../cta-best-practices-hierarchy-do.svg"
          alt="Primary CTA before two secondary CTAs"
          width="630"
          height="56">
  </uxdot-example>
  <p>Variants that are higher in hierarchy should start from the left. (Hierarchy should be reversed when using right-to-left languages.)</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="630px" slot="image">
    <img src="../cta-best-practices-hierarchy-dont.svg"
          alt="Two secondary CTAs before a primary CTA"
          width="630"
          height="88">
  </uxdot-example>
  <p>Do not change the hierarchy.</p>
</uxdot-best-practice>

### Number of choices

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="576px" slot="image">
    <img src="../cta-best-practices-choices-do.svg"
          alt="Three CTAs in a group"
          width="576"
          height="56">
  </uxdot-example>
  <p>Use a maximum of three calls to action in one group. This helps mitigate <a href="https://www.shopify.com/partners/blog/choice-paralysis">choice 
paralysis</a>.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="985px" slot="image">
    <img src="../cta-best-practices-choices-dont.svg"
          alt="Five CTAs in a group"
          width="985"
          height="88">
  </uxdot-example>
  <p>Do not group more than three calls to action together.</p>
</uxdot-best-practice>

### Stretching

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="296px" slot="image">
      <img src="../cta-best-practices-stretching-do.svg"
            alt="Primary and secondary CTAs using the default width"
            width="296"
            height="56">
    </uxdot-example>
    <p>The width of calls to action should automatically adjust based on the text inside.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../cta-best-practices-stretching-dont.svg"
            alt="Primary and secondary CTAs that have been stretched to fill the container"
            width="482"
            height="56">
    </uxdot-example>
    <p>Do not add extra spacing or stretch the width of any variant, except for bricks.</p>
  </uxdot-best-practice>
</div>

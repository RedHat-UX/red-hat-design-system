## Usage

Use a call to action to entice users into making a selection like clicking on a link. For example, use a Primary call to action to bring attention to something important or a Brick call to action if you need to arrange links together in a grid.

### When to use a call to action

Using a call to action is a way to highlight a link that is used on its own instead of an inline link in a text block. It is commonly used as the last element in a group so users can read about something first and then proceed further if they are interested. Each page should have only one Primary call to action and any remaining calls to action should be represented as lower in hierarchy.

### Call to action vs. button

Even though they look similar, a call to action is a link which takes users from one page to a **different page** whereas a button communicates and triggers actions on the **same page**. Use a button when the desired action is submitting a form, canceling a process, or creating a new object.

## Variants

Each call to action has a specific function and the design of each variant signals that function to users. Therefore, it is important that each variant is implemented consistently so they communicate the correct actions.

{% example palette="light",
            alt="Image of the Primary, Secondary, Brick, and Default variants with descriptive text labels below",
            src="../cta-variants.png" %}

| Variant     | Use case                                                                                                     |
| ------------| -------------------------------------------------------------------------------------------------------------|
| Primary     | Use only once per page for the primary or most important link                                                |
| Secondary   | Use several times on the same page for secondary or general links                                            |
| Brick       | Use several times on the same page to group links together in a grid                                         |
| Default     | Use several times on the same page for tertiary or less important links                                      |
| Video       | Triggers a video in a [dialog](/elements/dialog/) (applies to Primary, Secondary, and Default variants only) |

{.full-width .col-13}

### Disabled

To indicate that a link is currently unavailable, calls to action can become disabled.

{% example palette="light",
            alt="Image of disabled Primary, Secondary, Brick, and Default variants",
            src="../cta-disabled.png" %}

### Brick icons

When grouping Brick variants, icons can be paired with text labels to communicate various topics, but the icons must be the same color, height, style, etc.

{% example palette="light",
            alt="Image of Brick variants with an icon on the left of text and on top of text",
            src="../cta-brick-icons.png" %}

## Writing content

### Call to action text labels

Call to action text labels should be more action-oriented than button text labels. When writing text labels, be specific and clearly communicate the task or destination by doing the following:
- Make sure the text is unique and easily understood for when screen readers announce text to users
- Always start the text label with a verb
- Use simple words and phrases
- Do not use multiple verbs
- Try to write short text labels or rearrange words when possible
- Do not use punctuation
- Do not use any other icons except for the ones that are included

{.labels-guidelines}

{% example palette="light",
           alt="Image of Default variants showing how to incorrectly and correctly write text labels",
           src="../cta-text-labels.png" %}

### Clarity of language
  
Text labels can be inviting as well as to the point, vague messaging does not 
help our users make informed decisions.

{% example palette="light",
           alt="Image of how to incorrectly and correctly use clear and straightforward language",
           src="../cta-clarity-of-language.png" %}

### Long text labels

Users do not want to spend more time reading than necessary, so write text labels with as few words as possible.

{% example palette="light",
        alt="Image of comparing very long and shortened text labels",
        src="../cta-long-text-labels-1.png" %}

Long text labels will break to two lines on small breakpoints or when translated to certain languages. This can be avoided by writing less text.

{% alert title="Warning", state="warning" %}
The arrow icon in the Default variant should always be connected to at least one word on the same line.
{% endalert %}

{% example palette="light",
        alt="Image of Primary, Default, and Brick variants within a small breakpoint showing each text label breaking to two lines",
        src="../cta-long-text-labels-2.png" %}

### Call to action vs. button text labels

Call to action text labels are written to entice users to select a link whereas button text labels are written to be short and communicate an action.

{% example palette="light",
        alt="Image of comparing text labels in calls to action versus text labels in buttons",
        src="../cta-call-to-action-vs-button-text-labels.png" %}

### Character count

| Variant     | Character count |
| ------------| ----------------|
| Primary     | 30              |
| Secondary   | 40              |
| Brick       | 25              |
| Default     | 55              |

{.full-width .col-11}

## Layout

### Heirarchy

Calls to action are ordered by hierarchy with the Primary variant being the most important. Variants that are lower in hierarchy can be used more than one time per page.

{% example palette="light",
            alt="Image of calls to action hierarchy and usage guidance",
            src="../cta-layout-hierarchy.png" %}

### Placement

Calls to action can be placed in a variety of layouts including cards, grids, lists, and more. It is commonly used as the last element in a group so users can read about something first and then proceed further if they are interested.

{% example palette="light",
            alt="Image of calls to action used in context including under a text block and within a card",
            src="../cta-placement-examples-1.png" %}

{% example palette="light",
            alt="Image of calls to action used in context including within a grid and in a list",
            src="../cta-placement-examples-2.png" %}

### Grouping

Call to action variants are ordered by hierarchy with Primary being the highest. Variants that are lower in hierarchy can be grouped with Primary as well as used more than once per page.

{% example palette="light",
            alt="Image of call to action groups and their hierarchy from left to right",
            src="../cta-layout-grouping.png" %}

### Bricks

Brick variants are flexible and can stretch to fit different column widths.

{% alert title="Warning", state="warning" %}
Long text labels will break to two lines, therefore write no more than **two or three words** per Brick variant.
{% endalert %}

{% example palette="light",
            alt="Image of Brick variants stretched to fit a variety of grid formations",
            src="../cta-layout-bricks.png" %}

### Space in groups
  
Horizontal and vertical spacing between Primary and Secondary variants is `24px`.

{% alert title="Helpful tip", state="info" %}
Spacing guidance between calls to action and text or other elements are on the Spacing page.
{% endalert %}

{% example palette="light",
            alt="Image of 24px spacers in between Primary and Secondary variants",
            src="../cta-layout-space-in-groups-1.png" %}

Horizontal and vertical spacing between the Default variant is `24px`.

{% example palette="light",
            alt="Image of 24px spacers in between Default variants",
            src="../cta-layout-space-in-groups-2.png" %}

Horizontal and vertical spacing between Brick variants should be the same as grid gutters.

{% example palette="light",
            alt="Image of a variety of space values in between Brick variants",
            src="../cta-layout-space-in-groups-3.png" %}

## Behavior

### Hiding or revealing content

A Brick variant can hide and reveal a panel of content when selected like an [accordion](/elements/accordion/). However, only one Brick variant can be selected at a time like [tabs](/elements/tabs/).

{% example palette="none",
            alt="Image of Brick variants with a panel open showing a variety of styles and content formations",
            src="../cta-bricks-hide-and-reveal.png" %}

## Responsive design

On large breakpoints, calls to action are ordered by hierarchy from left to right in one row. On small breakpoints, if calls to action have long text labels, a second row appears.

{% example palette="none",
            alt="Image of calls to action in a layout on a large breakpoint showing them all in one row",
            src="../cta-breakpoints-large.png" %}

{% example palette="none",
            alt="Image of calls to action in a layout on a small breakpoint showing two variants in one row and one variant in a second row",
            src="../cta-breakpoints-small.png" %}

## Best practices

### Changing styles

Do not change the styles of any variant.

{% example palette="wrong",
            alt="Image of several variants with brand new styles which is incorrect usage",
            src="../cta-best-practice-1.png" %}

### Primary variants

Do not use more than one Primary variant on any page.

{% example palette="wrong",
            alt="Image of two Primary variants in one row which is incorrect usage",
            src="../cta-best-practice-2.png" %}

### Brick variants

Do not group different Brick variants together, use one variant per grid.

{% example palette="wrong",
            alt="Image of Brick variants in one row with and without icons which is incorrect usage",
            src="../cta-best-practice-3.png" %}


### Grouping

Do not group more than two different variants together.	

{% example palette="wrong",
            alt="Image of Primary, Secondary, and Default variants in one row which is incorrect usage",
            src="../cta-best-practice-4.png" %}

### Changing heirarchy

Do not change the hierarchy, variants that are higher in hierarchy should start first on the left.

{% alert title="Helpful tip", state="info" %}
Hierarchy should be reversed when using right-to-left languages.
{% endalert %}

{% example palette="wrong",
            alt="Image of the Primary variant last in a row which is incorrect usage",
            src="../cta-best-practice-5.png" %}

### Too many options

Do not group more than three variants together otherwise the risk of [choice paralysis][paralysis]{target="_blank"} greatly increases.

{% example palette="wrong",
            alt="Image of two rows of calls to action with four variants in each row which is incorrect usage",
            src="../cta-best-practice-6.png" %}

### Stretching

Do not add extra spacing or stretch the width of any variant except for Bricks.

{% example palette="wrong",
            alt="Image of Primary and Secondary variants stretched which is incorrect usage",
            src="../cta-best-practice-7.png" %}

[paralysis]: https://www.shopify.com/partners/blog/choice-paralysis

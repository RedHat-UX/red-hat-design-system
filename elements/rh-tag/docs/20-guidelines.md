<style data-helmet>
  rh-table td ul {
    margin: 0;
  }
</style>

## General guidelines

In general, use a tag to draw attention to an element on the page or make it more searchable.

### Tag vs. badge

Although these elements look very similar, the following guidance should help clarify when to use each.

<rh-table>

| Element | Use cases                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tag     | <ul><li>Can be used on its own</li><li>Highlight an element on a page in order to draw attention to it</li><li>Make it more searchable</li></ul>                                                       |
| Badge   | <ul><li>Reflect counts like number of objects, events, or unread items</li></ul>                                                                                                                       |
| Chip    | <ul><li>Almost the same as a checkbox</li><li>Required to use more than once in a Chip group</li><li>Filter information on a page, categorize content, or indicate that a selection was made</li></ul> |

</rh-table>

### Desaturated style

Use a desaturated tag to reduce visual prominence or to better fit a specific 
theme or visual style.

<uxdot-example color-palette="darkest">
  <img alt="A desaturated tag in the upper right of an rh-card component on a dark color scheme."
       src="../tag-guidelines-desaturated-style.svg"
       width="440"
       height="448">
</uxdot-example>

### Default vs. Compact sizes

When you need to use a tag, use the Default size first. If there are space 
limitations and using a tag is required, use the Compact size instead.

### Tag groups

Tags can be grouped next to an element or in the same space. Tag groups can be used almost anywhere and are oriented either horizontally or vertically. **Tags that are grouped should use the same style**, but show different colors. Text-only tags and link tags may be used in the same group.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>There is no set order of color, but try putting the most important information first. Using a decorative icon in every tag in a group is optional.</p>
</rh-alert>

<uxdot-example>
  <img alt="Two rows of four tags each. The first row has filled tags and the second outlined. From left to right, the tags are: text only, link, and disabled."
       src="../tag-guidelines-tag-groups.svg"
       width="586"
       height="175">
</uxdot-example>

## Status

### Color

Certain colors may indicate a status. Be careful about how tags are used to communicate something. For example, in general, green is considered positive and red is considered negative. **This is not the rule in every single situation.**

To learn more about color as a status, go to the Color section.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>

  Relying on color alone to communicate information causes barriers to access for 
  many users. Learn more in the [accessibility](/accessibility) section.

</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="652px">
  <img alt="Two rows of tags each representing representing a state:, Failure, Error, Caution, Warning, Success, General, Informative, Helpful, Neutral.  The tags in the first row are filled and in the second outline variants."
       src="../tag-guidelines-status-color.svg"
       width="652"
       height="90">
</uxdot-example>

### Text 

If text is descriptive or generic enough, most colors can be used. However, do not use red or red orange, those colors are always reserved for failure or error states.

<uxdot-example color-palette="lightest" width-adjustment="738px">
  <img alt="A row of tags each with the following text, Important, Documentation, Job template, Managed Service, Red Hat OpenShift, Security, Certified.  Each tag is aligned with proper state colors."
       src="../tag-guidelines-status-text-1.svg"
       width="738"
       height="29">
</uxdot-example>

If text communicates a status, choose a color that corresponds with that status.

<uxdot-example color-palette="lightest" width-adjustment="476px">
  <img alt="A row of tags each with the following text, Trial has expired in red, Deprecated in orange-red, Trial expiring soon in yellow, Trial has started in green."
       src="../tag-guidelines-status-text-2.svg"
       width="476"
       height="29">
</uxdot-example>

### Icons

Include an icon where additional visual information is helpful and ensure that it makes sense when paired with text. Use filled icons for Filled style tags and line icons for Outlined and Desaturated style tags. If a filled icon does not exist in the library, it is acceptable to use the line version.

<uxdot-example color-palette="lightest" width-adjustment="952px">
  <img alt="A row of three sets of tags. The first set has background colors and icons. The second set is outlined with icons. The third set are three desaturated tags with icons."
       src="../tag-guidelines-status-icon.svg"
       width="952"
       height="29">
</uxdot-example>

## Writing content

Text in tags should add clarity or context **using as few words as possible.** 
If text needs to be longer, add text somewhere else or use another element 
instead.

<uxdot-example color-palette="lightest" width-adjustment="724px">
  <img alt="An image of two rows of tags, representing short usage of words, The first row is incorrect examples which include trial started successfully, this process is secure, 147 critical tickets, your course is in progress. The second row includes correct examples include: success, secure, critical, In progress"
       src="../tag-guidelines-writing-content.svg"
       width="724"
       height="202">
</uxdot-example>

### Character count

<rh-table>

| Element | Character count |
|---------|-----------------|
| Text    | 25              |

</rh-table>

## Interactivity

You can use a tag as a link. To use a tag in a button for actions like triggering a [Popover](/elements/popover/), read about our [tag pattern](/patterns/tag).

To see tag interaction states, go to the [Style](/elements/tag/style/) page.

<uxdot-example color-palette="lightest" width-adjustment="242px">
  <img alt="The linked tag example shows the underline disappearing on hover."
       src="../tag-guidelines-interactivity.svg"
       width="242"
       height="32">
</uxdot-example>

## Responsive design

Tags in one row will break to two or more rows as viewport sizes get smaller.

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left">
  <img alt="An image displaying the correct collapsing of a collection of tags on different width viewports."
       src="../tag-guidelines-responsive-design.svg"
       width="1140"
       height="616">
</uxdot-example>


## Best practices

### Mixing variants

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="3 filled tags, red, green, and gray."
           src="../tag-guidelines-best-practice-do-1.svg"
           width="418"
           height="93">
    </uxdot-example>
    <p>Use any tag style, but use them consistently.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="Three tags with different styles (outlined, filled, and desaturated)."
           src="../tag-guidelines-best-practice-dont-1.svg"
           width="418"
           height="93">
    </uxdot-example>
    <p>Do not mix tag styles in the same area.</p>
  </uxdot-best-practice>
</div>

### Mixing sizes

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="Two rows of tags. The first row is normal size, the second row is compact size."
           src="../tag-guidelines-best-practice-do-2.svg"
           width="418"
           height="143">
    </uxdot-example>
    <p>Use any tag size, but use them consistently.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="A row of tags, the first tag is compact, the second is normal size and the third is compact."
           src="../tag-guidelines-best-practice-dont-2.svg"
           width="418"
           height="143">
    </uxdot-example>
    <p>Do not mix tag sizes in the same area.</p>
  </uxdot-best-practice>
</div>

### Using icons

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="A row of 4 tags with the text: error, warning, success, and action. Error has a red exclamation circle icon. Warning has a triangular icon with an exclamation point. Sucess has a green checkmark in a circle. Action has a diamond with a plus inside."
           src="../tag-guidelines-best-practice-do-3.svg"
           width="418"
           height="93">
    </uxdot-example>
    <p>Use decorative icons, but ensure that each makes sense when paired with text.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="A row of four tags: error, warning, success, and action. The error tag has a checkmark icon. The warning tag has a phone icon. The success tag has a home icon. The action tag has a question mark icon."
           src="../tag-guidelines-best-practice-dont-3.svg"
           width="418"
           height="93">
    </uxdot-example>
    <p>Do not use decorative icons that cause confusion or take away from the meaning of text.</p>
  </uxdot-best-practice>
</div>

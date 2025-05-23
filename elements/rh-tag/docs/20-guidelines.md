<style data-helmet>
  rh-table td ul {
    margin: 0;
  }
</style>

## General guidelines

In general, use a tag when you want to draw attention to an element on the page 
or make it more searchable.

### Tag vs. badge

These elements look very similar. The following guidance should help clarify 
when to use each.

<rh-table>

| Element | Use case                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Tag     | <ul><li>Highlight an element on a page in order to draw attention to it</li><li> Make it more searchable</li></ul>                   |
| Badge   | <ul><li>Reflect counts like number of objects, events, or unread items</li></ul>                                                     |
| Chip    | <ul><li>Similar to a checkbox</li><li>Filter items by attribute, categorize content, or indicate that a selection was made</li></ul> |

</rh-table>

### Filled vs. Outlined styles

Use a filled tag to add more visual prominence. If you require a mix of 
clickable and non-clickable tags, consider using one type for clickable and 
another for non-clickable. Whatever convention you choose, be sure to maintain 
consistency throughout your UI.

### Desaturated style

Use a desaturated tag to reduce visual prominence or to better fit a specific 
theme or visual style.

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left">
  <img alt="Image of a representation of a desaturated tag on a black background with two columns.  The first column contains a card pattern with the title of Red Hat enterprise Linux UI and above it is a tag that says start.  In the second column is another card parttern with the title Red Hat OpenShift AI and a tag above it that says scale."
       src="../tag-guidelines-usage-desaturated-tag.svg"
       width="1140"
       height="422">
</uxdot-example>

### Default vs. Compact sizes

When you need to use a tag, use the Default size first. If there are space 
limitations and using a tag is required, use the Compact size instead.

### Clickable tags

Use a clickable tag for actions like directing a user to a new page.

### Tag groups

Tag groups should be used when there are multiple tags assigned to an element. 
They can be used almost anywhere in a UI, but are commonly used in table views 
and description lists. Tag groups can be oriented either horizontally or 
vertically. Optionally, add icons to help distinguish them if they are all the 
same color.

## Status

### Color

Certain colors may indicate a status. For example, in general, green is 
considered positive and red is considered negative. **This is not the rule in 
every single situation.** Be careful about how tags are used to communicate 
something.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>

  Relying on color alone to communicate information causes barriers to access for 
  many users. Learn more in the [accessibility](/accessibility) section.

</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="652px">
  <img alt="An image of two rows of tags each representing representing a state:, Failure, Error, Caution, Warning, Success, General, Informative, Helpful, Neutral.  The tags in the first row are filled and in the second outline variants."
       src="../tag-guidelines-status-color.svg"
       width="652"
       height="90">
</uxdot-example>

<rh-cta><a href="/foundations/color/usage/#status">More on status color usage</a></rh-cta>

### Text 

If text is descriptive or generic, most colors can be used. Do not use red or 
red orange, those colors are reserved for failure or error states.

<uxdot-example color-palette="lightest" width-adjustment="738px">
  <img alt="An image a row of tags each with the following text, Important, Documentation, Job template, Managed Service, Red Hat OpenShift, Security, Certified.  Each tag is aligned with proper state colors."
       src="../tag-guidelines-status-text-1.svg"
       width="738"
       height="29">
</uxdot-example>

If text communicates a status, choose a color that corresponds with that status.

<uxdot-example color-palette="lightest" width-adjustment="476px">
  <img alt="An image a row of tags each with the following text, Trial has expired in red, Deprecated in orange-red, Trial expiring soon in yellow, Trial has started in green."
       src="../tag-guidelines-status-text-2.svg"
       width="476"
       height="29">
</uxdot-example>

### Icon

Include an icon where additional visual information is helpful. You can also use 
them to distinguish tags of the same color if needed. Ensure the icon makes 
sense when paired with text and color.

<uxdot-example color-palette="lightest" width-adjustment="377px">
  <img alt="An image a row of tags, The first has the text Success paired with a checkmark icon, the second has the text secure with a padlock icon, the third with the text critical and a exclamation point icon, and the fourth with the text In progress with a timer icon."
       src="../tag-guidelines-status-icon.svg"
       width="377"
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
      <img alt="An image showing 3 rows of tags. Each row has a different variant, first row is filled, second row is outlined, and 3rd row is desaturated."
           src="../tag-guidelines-best-practice-do-1.svg"
           width="418"
           height="151">
    </uxdot-example>
    <p>Use any variant, but in different parts of the UI</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="An image showing a row of tags.  First tag is a filled, second is a outlined, and third is a desaturated."
           src="../tag-guidelines-best-practice-dont-1.svg"
           width="418"
           height="151">
    </uxdot-example>
    <p>Do not mix variants in the same element or area</p>
  </uxdot-best-practice>
</div>

### Mixing sizes

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="An image of two rows of tags the first row is normal size, the second row is compact size."
           src="../tag-guidelines-best-practice-do-2.svg"
           width="418"
           height="79">
    </uxdot-example>
    <p>Use any size, but in different parts of the UI</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="An image of a row of tags, the first tag is compact, the second is normal size and the third is compact."
           src="../tag-guidelines-best-practice-dont-2.svg"
           width="418"
           height="79">
    </uxdot-example>
    <p>Do not mix sizes in the same element or area</p>
  </uxdot-best-practice>
</div>

### Using icons

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="An image with a row of 3 tags, the first tag has the text trial expired with a circle with a slash icon. The second has the text deprecated and has an exclamation icon. The third has the text trial expiring soon with a triangle shaped icon with an exclamation point."
           src="../tag-guidelines-best-practice-do-3.svg"
           width="418"
           height="29">
    </uxdot-example>
    <p>Use icons and their colors consistently</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img alt="An image of a row of 3 tags, the first tag has the text trial expired on a red background. The second tag has an icon that has been colored teal, the icon is a circle with an exclamation and the text of the tag reads deprecated, on a red backgroudn.  The third tag has the text trial expired on a yellow background."
           src="../tag-guidelines-best-practice-dont-3.svg"
           width="418"
           height="29">
    </uxdot-example>
    <p>Do not hide icons or change their color</p>
  </uxdot-best-practice>
</div>

## General usage

In general, use a blockquote to highlight quote and attribution text so users can identify them easier. A blockquote should have lots of space around it to avoid competing with other elements.

### Sizes

Use the Default size for large amounts of text and the Large size for small amounts of text.

<uxdot-example color-palette="lightest" width-adjustment="996px">
  <img src="../guidelines-usage-sizes.svg" 
      alt="Two blockquotes, default size on the left and large size on the right" 
      width="996" 
      height="264">
</uxdot-example>

## Layout

### Alignment
A blockquote should be aligned left by default, but sometimes they can be centered.

<rh-alert state="warning">
 <h3 slot="header">Warning</h3>
  <p>In general, centered text is hard to read, so do not center align long quote text.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="996px">
  <img src="../guidelines-layout-alignment.svg" 
      alt="Two blockquotes, the first aligned left and the second aligned center, with small green checks below each" 
      width="996" 
      height="296">  
</uxdot-example>

### Minimum width

An acceptable minimum blockquote width is 4 desktop grid columns. If a blockquote is placed in a card, the width might be less. Be careful about making a blockquote too thin otherwise there will be lots of lines of text.

<uxdot-example color-palette="lightest" width-adjustment="1132px" variant="full" no-border alignment="left">
  <img src="../guidelines-layout-min-width.svg" 
      alt="Two blockquotes, the first a default size blockquote that's left aligned and the second blockquote that's center-aligned. Both have a minimum width of 356px" 
      width="1132" 
      height="560">
</uxdot-example>


### Maximum width

The blockquote maximum width is 7 desktop grid columns or `789px`.

<uxdot-example color-palette="lightest" width-adjustment="1132px" variant="full" no-border alignment="left">
  <img src="../guidelines-layout-max-width.svg" 
      alt="Two blockquotes, the first a default size blockquote that's left aligned with a width of 647px, and the second blockquote is center-aligned with a maximum width of 789px" 
      width="1132" 
      height="410">
</uxdot-example>

## Responsive design

Blockquote text size reduces as screens get smaller. However, quote icon and attribution text sizes do not change.

To learn more about how text sizes change, go to the [Typography](/foundations/typography/) section.

### Default size

<uxdot-example color-palette="lightest" width-adjustment="1136px" variant="full" no-border alignment="left">
  <img src="../guidelines-responsive-design-size-default.svg" 
      alt="Default sizes for desktop, tablets, and smaller devices, showing 7 columns for desktop and tablets and 2 wider columns for smaller devices." 
      width="1136" 
      height="1149">
</uxdot-example>

### Large size

<uxdot-example color-palette="lightest" width-adjustment="1136px" variant="full" no-border alignment="left">
  <img src="../guidelines-responsive-design-size-large.svg" 
      alt="Large sizes for desktop, tablets, and smaller devices, showing 7 columns for desktop and tablets and 2 wider columns for smaller devices." 
      width="1136" 
      height="942">
</uxdot-example>

## Best practices

### Missing quote icon

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../best-practice-1-do.svg" 
           alt="A proper blockquote including a quote icon, quote text, and attribution text" 
           width="482" 
           height="238">
    </uxdot-example>
    <p>Always include a quote icon, quote text, and attribution text.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../best-practice-1-dont.svg" 
           alt="An improper blockquote that is missing a quote icon" 
           width="482" 
           height="238">
    </uxdot-example>
    <p>Do not omit the quote icon otherwise it does not read like a quote.</p>
  </uxdot-best-practice>
</div>

### Missing attribution text

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../best-practice-2-do.svg" 
           alt="A proper blockquote including a quote icon, quote text, and attribution text" 
           width="482" 
           height="238">
    </uxdot-example>
    <p>Always include a quote icon, quote text, and attribution text.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../best-practice-2-dont.svg" 
           alt="An improper blockquote that is missing attribution text" 
           width="482" 
           height="238">
    </uxdot-example>
    <p>Do not omit the attribution text because all quotes need sources.</p>
  </uxdot-best-practice>
</div>

### Readability at small screen sizes

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../best-practice-3-do.svg" 
           alt="A blockquote with the right amount of text" 
           width="482" 
           height="508">
    </uxdot-example>
    <p>Try and limit the amount of text in a blockquote.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="caution">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../best-practice-3-dont.svg" 
           alt="A blockquote on a narrow screen showing how too much text can look bad" 
           width="482" 
           height="508">
    </uxdot-example>
    <p>Be aware that lots of text will cause lots of lines on small screens.</p>
  </uxdot-best-practice>
</div>

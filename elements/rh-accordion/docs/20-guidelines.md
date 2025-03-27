## Usage
Use an accordion to organize a large amount of content into sections. This 
allows users to scan through critical information first and then access 
additional information when needed. Users can also compare information by 
expanding multiple panels simultaneously.

### When to use an accordion
Using an accordion provides an easy way to organize content while reducing page 
scrolling, but at the expense of hiding information or burdening users with more 
clicks. There is a chance that important information will be missed or not 
immediately noticed by users. Therefore, if reading important information is 
critical to the user experience or if important information requires more focus 
and less clicking, it is advised to not use an accordion.

### Accordion vs. disclosure
An accordion is used to organize important information whereas a 
[Disclosure](/patterns/disclosure/) can be used to organize secondary 
information that might not be critical to read or impact the experience. An 
accordion can also accommodate multiple sections of content, whereas a 
disclosure can only accommodate one.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img src="../accordion-vs-disclosure.png"  
      alt="Comparison of how to use accordion vs. disclosure elements showing an accordion on top and a disclosure on the bottom"
      width="872"
      height="603">
</uxdot-example>

### Sizes
It is acceptable to use the Small size on large breakpoints, but do not use the 
Large size on small breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img src="../accordion-sizes-best-practices.png"  
      alt="Size comparison of accordions; a wide small size accordion is on top, which is acceptable to use, and a thin large size accordion below it which is not acceptable to use"
      width="872"
      height="485">
</uxdot-example>

## Writing content

### Title text
Title text should be written concisely so users know what to expect when they 
expand a panel. Beware of long character counts especially on small breakpoints 
or when translated. If title text is too long, create another section. Do not 
write title text to sound like a call to action, make it as easy as possible for 
users to understand the content within.

<figure>
<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img src="../accordion-title-text.png"  
      alt="Title text examples of various lengths; it should not be too long, too short, or too vague"
      width="872"
      height="181">
</uxdot-example>
<figcaption>

1. Title text is too long and should be broken into two sections
2. Title text is short and might not help users understand the content within
3. Title text should not be written like a call to action

</figcaption>
</figure>

### Character count

Title text should have fewer characters to help users make sense of what the 
content will be when they expand a panel.

<rh-table>

| Title text | Character count |
|------------|-----------------|
| Title text | 65              |

</rh-table>

### Panel content

When a panel is expanded, some content must appear below the title text and 
chevron icon. Content can include text, cards, images, etc. Text blocks should 
not exceed `750px` to maintain optimal readability.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img src="../accordion-panel-content.png" 
      alt="Accordion showing different elements you may include in the expanded panel like headings, body text, links, cards, and more" 
      width="872"
      height="705">
</uxdot-example>

### Long title text

Title text can be two lines on small breakpoints, but no more.

<uxdot-example color-palette="lightest" width-adjustment="544px">
  <img src="../accordion-long-title-text.png" 
      alt="Two accordions; one wide accordion with the text title on one line and one thin accordion with the text title on two lines"
      width="544"
      height="310">
</uxdot-example>

## Layout

The width of an accordion can be adjusted on large breakpoints to fit fewer 
columns if necessary.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img src="../accordion-layout.png" 
      alt="A wider accordion placed on a 12-column grid and occupying four grid columns"
      width="872"
      height="439">
</uxdot-example>

## Behavior

### Expanding and collapsing panels
Users can expand and collapse panels one at a time by default. More than one or 
all panels cannot be expanded at once unless that functionality is added along 
with an **Expand all** button. When a panel is collapsed, the caret points down. 
When a panel is expanded, the caret animates to point up.

### Expanding multiple panels
Users can expand multiple panels simultaneously either stacked on top of each 
other or not. Expanding one panel does not collapse another.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img src="../accordion-expanding-multiple-panels.png" 
      alt="Two accordions; one is showing two expanded panels stacked on top of each other and the other is showing two expanded panels and one collapsed panel in between"
      width="872"
      height="714">
</uxdot-example>

## Responsive design

An accordion changes from the Large size to the Small size as breakpoints get
smaller.

<uxdot-example no-border color-palette="lightest" width-adjustment="1000px" alignment="left" variant="full" >
  <img src="../accordion-breakpoints-large.png"  
      alt="Accordions on large breakpoints"
      width="1000"
      height="274">
</uxdot-example>

<uxdot-example no-border color-palette="lightest" width-adjustment="576px" alignment="left" variant="full">
  <img src="../accordion-breakpoints-small.png"  
       alt="Accordions on small breakpoints"
       width="576"
       height="262">
</uxdot-example>

### Breakpoints

<rh-table>

| Breakpoint      | Range           | Size            |
|-----------------|-----------------|-----------------|
| Desktop, large  | &gt; 1680px     | Small and Large |
| Desktop, medium | 1440px - 1679px | Small and Large |
| Desktop, small  | 1200px - 1439px | Small and Large |
| Tablet, large   | 992px - 1199px  | Small and Large |
| Tablet, small   | 768px - 991px   | Small and Large |
| Mobile, large   | 576px - 767px   | Small only      |
| Mobile, small   | &lt; 575px      | Small only      |

</rh-table>

## Best practices

### One panel

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../accordion-best-practices-one-panel-do.svg"
            alt="Two accordion panels"
            width="482"
            height="117">
    </uxdot-example>
    <p>Use accordion in groups of two or more.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="482px" slot="image">
      <img src="../accordion-best-practices-one-panel-dont.svg"
            alt="One accordion panel"
            width="482"
            height="117">
    </uxdot-example>
    <p>Do not display one panel only.</p>
  </uxdot-best-practice>
</div>

### Text readability

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" color-palette="lightest" width-adjustment="1012px">
    <img src="../accordion-best-practices-text-readability-do.svg" 
        alt="Text in an expanded accordion has a limited width and does not fill wide accordion"
        width="1012"
        height="280">
  </uxdot-example>

  <p>The text in a panel should be limited to a maximum width of 750px, which maintains optimal readability.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" color-palette="lightest" width-adjustment="1012px">
    <img  src="../accordion-best-practices-text-readability-dont.svg" 
        alt="Text in an expanded accordion fills wide accordion"
        width="1012"
        height="280">
  </uxdot-example>

  <p>Do not allow text within panels to fill the entire width of a panel, if the text would exceed a width of 750px.</p>
</uxdot-best-practice>

### Mixing color palettes

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="darkest" 
      width-adjustment="482px">
      <img alt="Dark accordion against a dark background"
           src="../accordion-best-practices-mixing-themes-do.svg"
           width="482"
           height="256">
    </uxdot-example>
    <p>An accordion group should match the color palette of the container it’s 
      in. This ensures that all of the text is visible and has adequate color 
      contrast.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image"
                   color-palette="darkest"
                   width-adjustment="482px">
      <img alt="Light against a light background"
           src="../accordion-best-practices-mixing-themes-dont.svg"
           width="482"
           height="256">
    </uxdot-example>
    <p>Do not use a light accordion in a dark environment and vice versa because it may cause accessibility and usability issues.</p>
  </uxdot-best-practice>
</div>


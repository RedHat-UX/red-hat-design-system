## Usage 
Use an accordion to organize a large amount of content into sections. This allows users to scan through critical information first and then access additional information when needed. Users can also compare information by expanding multiple panels simultaneously.
### When to use an accordion 
Using an accordion provides an easy way to organize content while reducing page scrolling, but at the expense of hiding information or burdening users with more clicks. There is a chance that important information will be missed or not immediately noticed by users. Therefore, if reading important information is critical to the user experience or if important information requires more focus and less clicking, it is advised to not use an accordion.
### Accordion vs. disclosure 
An accordion is used to organize important information whereas a [Disclosure](/patterns/dislosure) can be used to organize secondary information that might not be critical to read or impact the experience. An accordion can also accommodate multiple sections of content, whereas a disclosure can only accommodate one.

{% example palette="light",
          alt="Comparison of how to use accordion vs. disclosure elements showing an accordion on top and a disclosure on the bottom",
          src="../accordion-vs-disclosure.png" %}

### Sizes 
It is acceptable to use the Small size on large breakpoints, but do not use the Large size on small breakpoints.

{% example palette="light",
          alt="Size comparison of accordions; a wide small size accordion is on top, which is acceptable to use, and a thin large size accordion below it which is not acceptable to use",
          src="../accordion-sizes-best-practices.png" %}

## Writing content 
### Title text 
Title text should be written concisely so users know what to expect when they expand a panel. Beware of long character counts especially on small breakpoints or when translated. If title text is too long, create another section. Do not write title text to sound like a call to action, make it as easy as possible for users to understand the content within.

{% example palette="light",
          alt="Title text examples of various lengths; it should not be too long, too short, or too vague",
          src="../accordion-title-text.png" %}

1) Title text is too long and should be broken into two sections
2) Title text is short and might not help users understand the content within
3) Title text should not be written like a call to action
   {.example-notes}

### Character count 
Title text should have fewer characters to help users make sense of what the content will be when they expand a panel.

| Element    | Character count |
| ---------- | --------------- |
| Title text | 45              |

### Panel content 
When a panel is expanded, some content must appear below the title text and chevron icon. Content can include text, cards, images, etc. Text blocks should not exceed `750px` to maintain optimal readability.

{% example palette="light",
          alt="Accordion showing different elements you may include in the expanded panel like headings, body text, links, cards, and more",
          src="../accordion-panel-content.png" %}

### Long title text 
Title text can be two lines on small breakpoints, but no more.

{% example palette="light",
          alt="Two accordions; one wide accordion with the text title on one line and one thin accordion with the text title on two lines",
          src="../accordion-long-title-text.png" %}

## Layout 
The width of an accordion can be adjusted on large breakpoints to fit less columns if necessary.

{% example palette="light",
          alt="A thinner accordion placed on a 12-column grid and occupying eight grid columns",
          src="../accordion-layout.png" %}

## Behavior

### Expanding and collapsing panels 
Users can expand and collapse panels one at a time by default. More than one or all panels cannot be expanded at once unless that functionality is added along with an **Expand all** button. When a panel is collapsed, the caret points down. When a panel is expanded, the caret animates to point up.

### Expanding multiple panels 
Users can expand multiple panels simultaneously either stacked on top of each other or not. Expanding one panel does not collapse another.

{% example palette="light",
          alt="Two accordions; one is showing two expanded panels stacked on top of each other and the other is showing two expanded panels and one collapsed panel in between",
          src="../accordion-expanding-multiple-panels.png" %}

## Responsive design 
An accordion changes from the Large size to the Small size as breakpoints get smaller.

{% example palette="none",
          alt="Accordions on large breakpoints",
          src="../accordion-breakpoints-large.png" %}

{% example palette="none",
          alt="Accordions on small breakpoints",
          src="../accordion-breakpoints-small.png" %}

### Breakpoints

| Breakpoint      | Range           | Size            |
| --------------- | --------------- | --------------- |
| Desktop, large  | > 1680px        | Small and Large |
| Desktop, medium | 1440px - 1679px | Small and Large |
| Desktop, small  | 1200px - 1439px | Small and Large |
| Tablet, large   | 992px - 1199px  | Small and Large |
| Tablet, small   | 768px - 991px   | Small and Large |
| Mobile, large   | 576px - 767px   | Small only      |
| Mobile, small   | < 575px         | Small only      |

## Best practices 
### One panel 
Do not display one panel only, use an expandable section instead.

{% example palette="wrong",
          alt="Accordion having only one panel is incorrect usage",
          src="../accordion-best-practice-1.png" %}


### Text readability 
Text within panels should not exceed `750px` to maintain optimal readability.

{% example palette="wrong",
          alt="Accordion with body text exceeding 750px wide which is incorrect usage",
          src="../accordion-best-practice-2.png" %}


### Mixing themes 
Do not use a dark theme accordion in a light theme environment and vice versa.

{% example palette="wrong",
          alt="Do not use a dark theme accordion in a light theme environment and vice versa.",
          src="../accordion-best-practice-3.png" %}
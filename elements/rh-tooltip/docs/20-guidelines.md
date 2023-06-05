## Usage 
Use a tooltip as a way for users to see more information before they select an element, go to a new page, or trigger an action on the page.
## Tooltip vs. popover 
A tooltip and [Popover](/elements/popover) provide more information in context for users. However, they are different in the following ways.

- A tooltip is used for simple communication purposes while a popover is more descriptive
- Content in a tooltip is generally shorter while content in a popover can be longer and include a heading, images, or links
- A tooltip is triggered on hover (or a tap on mobile devices) while a popover is triggered by a click
## Content 
Content in a tooltip is limited to text only. Consider the following when writing tooltip content.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Various text examples; from left to right, the text length starts very short, but gets longer and longer",
          src="../tooltip-content.png" %}


## Orientation 
The correct orientation of a tooltip depends on the amount of content and browser window. If a tooltip covers up important information or gets cut off, choose a different orientation.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Various orientation examples; from left to right and top to bottom, top, right, bottom, and left",
          src="../tooltip-orientation.png" %}


## Behavior 
When a cursor or focus is moved, the tooltip disappears. On mobile devices, users must tap to trigger a tooltip and then tap again to make it disappear.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Various behavior examples; from top to bottom, how a tooltip behaves when the trigger is hovered, focused, and tapped",
          src="../tooltip-behavior.png" %}


## Responsive design 
A tooltip can generally be used on both large and small breakpoints if the content is not too long.

![Examples of a tooltip used on large and small breakpoints]({{ '../tooltip-responsive-design.png' | url }})

## Best practices 
### White on white 
Do not use a dark theme tooltip in light theme environments.

{% example palette="wrong",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="A dark theme or white tooltip used on a white background is incorrect usage",
          src="../tooltip-best-practice-1.png" %}


### Cut off by browser window 
A tooltip should not be cut off by the browser window. Change the orientation if it does.

{% example palette="wrong",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="If using the top orientation will cause the tooltip to get cut off, that is incorrect usage",
          src="../tooltip-best-practice-2.png" %}


### Unnecessary pairing 
Do not add a tooltip to interface elements or actions that do not require further explanation.

{% example palette="wrong",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Pairing a tooltip with an element that already has adequate descriptive text is incorrect usage",
          src="../tooltip-best-practice-3.png" %}

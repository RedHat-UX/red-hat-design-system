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
          alt="tooltip content",
          src="../tooltip-content.png" %}


## Orientation 
The correct orientation of a tooltip depends on the amount of content and browser window. If a tooltip covers up important information or gets cut off, choose a different orientation.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="tooltip orientation",
          src="../tooltip-orientation.png" %}


## Behavior 
When a cursor or focus is moved, the tooltip disappears. On mobile devices, users must tap to trigger a tooltip and then tap again to make it disappear.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="tooltip behavior",
          src="../tooltip-behavior.png" %}


## Responsive design 
A tooltip can generally be used on both large and small breakpoints if the content is not too long.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="tooltip responsive design",
          src="../tooltip-responsive-design.png" %}
## Best practices 
### White on white 
Do not use a dark theme tooltip in light theme environments.

{% example palette="wrong",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Avoid white on white",
          src="../tooltip-best-practice-1.png" %}


### Cut off by browser window 
A tooltip should not be cut off by the browser window. Change the orientation if it does.

{% example palette="wrong",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Avoid browser window cutoff",
          src="../tooltip-best-practice-2.png" %}


### Unnecessary pairing 
Do not add a tooltip to interface elements or actions that do not require further explanation.

{% example palette="wrong",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Avoid unnescassary pairing",
          src="../tooltip-best-practice-3.png" %}


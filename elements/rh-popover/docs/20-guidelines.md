
## Usage

  Use a popover to answer a question, explain something, or provide a user with 
  guidance to help them complete a task.

### Popover vs. tooltip

  Both popovers and [tooltips]({{ 
  '/elements/tooltip' | url }}){target="_blank"} provide more information in 
  context for a user. However, they are different in a few ways:

  - Popovers are used for added description or information in context whereas 
    tooltips are used for identification purposes.
  - Popovers contain longer descriptions and optional links whereas tooltips 
    only contain short descriptions or labels.
  - On large screens, popovers appear on click whereas tooltips appear on hover.

### Content

  Content in a popover should include text and interactive elements like a close 
  button and links. If more explanation is needed, a heading can be included as 
  well.

  {% alert state="warning", title="Warning" %}
    If content is very short and does not include links, use a [Tooltip]({{ 
    '/elements/tooltip/' | url }}) component instead.
  {% endalert %}

  {% example palette="lightest",
             width=832,
             alt="Popover component usage, content",
             src="../popover-usage-content.svg" %}

### Character count

  A popover heading and body text can have more characters if the overall 
  message creates a more helpful user experience.

  {% alert state="warning", title="Warning" %}
    Do not write short body text because a user might get stuck or not 
    understand what to do next if the content is too brief.
  {% endalert %}

  | Element     | Maximum characters |
  |-------------|--------------------|
  | Heading     | 25                 |
  | Body text   | 100                |
  | Single link | 35                 |
  | Two links   | 15 (each)          |

### Orientation

  A popover has four orientations depending on where it needs to be located, 
  **top**, **right**, **bottom**, or **left**. If a popover overlaps critical 
  content or is cut off by the edge of the screen when triggered, change the 
  orientation.

  {% example palette="lightest",
             width=844,
             alt="Popover component usage, orientation",
             src="../popover-usage-orientation.svg" %}

### Black on black

  Avoid using a black popover on dark backgrounds, it will completely disappear 
  into the background.

  {% example palette="darkest",
             width=392,
             alt="Popover component usage, black on black",
             src="../popover-usage-black.svg" %}

### White on white

  Avoid using a white popover on light backgrounds, there is not enough contrast 
  even with the subtle drop shadow.

  {% example palette="lightest",
             width=392,
             alt="Popover component usage, white on white",
             src="../popover-usage-white.svg" %}



## Behavior

### Trigger

  A popover requires a **trigger** to be displayed. A trigger can be an icon, 
  text, or another element that encourages a user to interact with it. To close 
  a popover, a user must select the close button, make a selection outside of 
  the popover, or press the **Escape (esc)** key.

  {% example palette="lightest",
             width=832,
             alt="Popover component behavior, trigger",
             src="../popover-behavior-trigger.svg" %}

### Form

  If you need to place a popover above a form field, you may use an icon as a 
  trigger. However, an icon is not the only visual element that can trigger a 
  popover.

  {% example palette="lightest",
             width=832,
             alt=" Popover component behavior, form",
             src="../popover-behavior-form.svg" %}

### Mobile

  A popover and tooltip are triggered the same way on mobile, by a tap, but 
  still have different use cases (see **Usage**).

  {% example palette="lightest",
             width=772,
             alt=" Popover component behavior, mobile",
             src="../popover-behavior-mobile.svg" %}


## Interaction states

  Both popover variants have interaction states.

  <div class="multi-column--min-400-wide">
    <figure>
      <figcaption><h4>Default/Focus (black)</h4></figcaption>
      <img src="{{ '../popover-interaction-state-default-focus-black.svg' | url }}" alt="Popover component interaction state, default and focus" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>Default/Focus (white)</h4></figcaption>
      <img src="{{ '../popover-interaction-state-default-focus-white.svg' | url }}" alt="Popover component interaction state, default and focus" style="--inline-img-max-width:392px;">
    </figure>
  </div>

  | Variant | Interaction state | Element      | Specs   |
  |---------|-------------------|--------------|---------|
  | Black   | Default/Focus     | Close button |#D2D2D2 |
  | Black   | Default/Focus     | Link         |#73BCF7 |
  | White   | Default/Focus     | Close button |#6A6E73 |
  | White   | Default/Focus     | Link         |#06C    |

  <div class="multi-column--min-400-wide">
    <figure>
      <figcaption><h4>Hover/Active (black)</h4></figcaption>
      <img src="{{ '../popover-interaction-state-hover-active-black.svg' | url }}" alt="Popover component interaction state, hover and active" style="--inline-img-max-width:392px;">
    </figure>
    <figure>
      <figcaption><h4>Hover/Active (white)</h4></figcaption>
      <img src="{{ '../popover-interaction-state-hover-active-white.svg' | url }}" alt="Popover component interaction state, hover and active" style="--inline-img-max-width:392px;">
    </figure>
  </div>

  | Variant | Interaction state | Element      | Specs   |
  |---------|-------------------|--------------|---------|
  | Black   | Hover/Active      | Close button |#FFF    |
  | Black   | Hover/Active      | Link         |#BEE1F4 |
  | White   | Hover/Active      | Close button |#151515 |
  | White   | Hover/Active      | Link         |#004080 |


## Accessibility

  When a popover is triggered by a user pressing the **Enter** key, 
  the close button must have focus in order for a user to have control over the 
  popover and be able to interact with the links or close it.

  {% example palette="lightest",
             width=392,
             alt=" Popover component accesssibility",
             src="../popover-accessibility.svg" %}

  | Key          | Action                                                       |
  |--------------|--------------------------------------------------------------|
  | Tab          | Moves the focus away from the close button.                  |
  | Shift + Tab  | Moves the focus to the previous link or to the close button. |
  | Enter        | Closes a popover or selects a link within a popover.         |
  | Escape (esc) | Closes a popover.                                            |


## Best practices

### Embedding

  Do not embed a popover or tooltip within another popover.

  {% example palette="wrong",
             width=479,
             alt="Popover component best practice 1",
             src="../popover-best-practice-1.svg" %}

### Too much content

  Do not overload a popover with too much content.

  {% example palette="wrong",
             width=432,
             alt="Popover component best practice 2",
             src="../popover-best-practice-2.svg" %}

### No close button

  Do not remove the close button from a popover.

  {% example palette="wrong",
             width=392,
             alt="Popover component best practice 3",
             src="../popover-best-practice-3.svg" %}


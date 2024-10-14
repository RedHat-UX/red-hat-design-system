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

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>If content is very short and does not include links, use a [Tooltip]({{ 
  '/elements/tooltip/' | url }}) component instead.</p>
</rh-alert>

<uxdot-example width-adjustment="832px">
  <img src="../popover-usage-content.svg"
        alt="Popover component usage, content"
        width="845"
        height="242">
</uxdot-example>


### Character count

A popover heading and body text can have more characters if the overall 
message creates a more helpful user experience.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not write short body text because a user might get stuck or not understand what to do 
  next if the content is too brief.</p>
</rh-alert>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Heading</td>
        <td data-label="Character count">25</td>
      </tr>
      <tr>
        <td data-label="Element">Body text</td>
        <td data-label="Character count">100</td>
      </tr>
      <tr>
        <td data-label="Element">Single link</td>
        <td data-label="Character count">35</td>
      </tr>
      <tr>
        <td data-label="Element">Two links</td>
        <td data-label="Character count">15 (each)</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Orientation

A popover has four orientations depending on where it needs to be located, 
**top**, **right**, **bottom**, or **left**. If a popover overlaps critical 
content or is cut off by the edge of the screen when triggered, change the 
orientation.

<uxdot-example width-adjustment="844px">
  <img src="../popover-usage-orientation.svg"
        alt="Popover component usage, orientation"
        width="851"
        height="519">
</uxdot-example>


### Black on black

Avoid using a black popover on dark backgrounds, it will completely disappear 
into the background.

<uxdot-example color-palette="darkest" width-adjustment="392px" danger>
  <img src="../popover-usage-black.svg"
        alt="Popover component usage, black on black"
        width="392"
        height="258">
</uxdot-example>


### White on white

Avoid using a white popover on light backgrounds, there is not enough contrast 
even with the subtle drop shadow.

<uxdot-example width-adjustment="392px" danger>
  <img src="../popover-usage-white.svg"
        alt="Popover component usage, white on white"
        width="405"
        height="258">
</uxdot-example>


## Behavior

### Trigger

A popover requires a **trigger** to be displayed. A trigger can be an icon, 
text, or another element that encourages a user to interact with it. To close 
a popover, a user must select the close button, make a selection outside of 
the popover, or press the **Escape (esc)** key.

<uxdot-example width-adjustment="832px">
  <img src="../popover-behavior-trigger.svg"
        alt="Popover component behavior, trigger"
        width="845"
        height="251">
</uxdot-example>


### Form

If you need to place a popover above a form field, you may use an icon as a 
trigger. However, an icon is not the only visual element that can trigger a 
popover.

<uxdot-example width-adjustment="406px">
  <img src="../popover-behavior-form.svg"
        alt="Popover component behavior, form"
        width="406"
        height="282">
</uxdot-example>


### Mobile

A popover and tooltip are triggered the same way on mobile, by a tap, but 
still have different use cases (see **Usage**).

<uxdot-example width-adjustment="772px">
  <img src="../popover-behavior-mobile.svg"
        alt="Popover component behavior, mobile"
        width="779"
        height="253">
</uxdot-example>


## Interaction states

Both popover variants have interaction states.

<div class="grid sm-two-columns">
  <figure>
    <figcaption><h3>Default/Focus (black)</h3></figcaption>
    <uxdot-example width-adjustment="392px">
      <img src="../popover-interaction-state-default-focus-black.svg"
        alt="Popover component interaction state, default and focus"
        width="405"
        height="214">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption><h3>Default/Focus (white)</h3></figcaption>
    <uxdot-example width-adjustment="392px" color-palette="darkest">
      <img src="../popover-interaction-state-default-focus-white.svg"
        alt="Popover component interaction state, default and focus"
        width="392"
        height="214">
    </uxdot-example>
  </figure>
</div>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Interaction state">Interaction state</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Specs">Specs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variant">Black</td>
        <td data-label="Interaction state">Default/Focus</td>
        <td data-label="Element">Close button</td>
        <td data-label="Specs">#D2D2D2</td>
      </tr>
      <tr>
        <td data-label="Variant">Black</td>
        <td data-label="Interaction state">Default/Focus</td>
        <td data-label="Element">Link</td>
        <td data-label="Specs">#73BCF7</td>
      </tr>
      <tr>
        <td data-label="Variant">White</td>
        <td data-label="Interaction state">Default/Focus</td>
        <td data-label="Element">Close button</td>
        <td data-label="Specs">#6A6E73</td>
      </tr>
      <tr>
        <td data-label="Variant">White</td>
        <td data-label="Interaction state">Default/Focus</td>
        <td data-label="Element">Link</td>
        <td data-label="Specs">#0066CC</td>
      </tr>
    </tbody>
  </table>
</rh-table>


<div class="grid">
  <figure>
    <figcaption><h4>Hover/Active (black)</h4></figcaption>
    <uxdot-example width-adjustment="392px">
      <img src="../popover-interaction-state-hover-active-black.svg"
        alt="Popover component interaction state, hover and active"
        width="405"
        height="214"> 
    </uxdot-example>
  </figure>
  <figure>
    <figcaption><h4>Hover/Active (white)</h4></figcaption>
    <uxdot-example width-adjustment="392px" color-palette="darkest">
      <img src="../popover-interaction-state-hover-active-white.svg"
        alt="Popover component interaction state, hover and active"
        width="392"
        height="214">
    </uxdot-example>
  </figure>
</div>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Interaction state">Interaction state</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Specs">Specs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variant">Black</td>
        <td data-label="Interaction state">Hover/Active</td>
        <td data-label="Element">Close button</td>
        <td data-label="Specs">#FFF</td>
      </tr>
      <tr>
        <td data-label="Variant">Black</td>
        <td data-label="Interaction state">Hover/Active</td>
        <td data-label="Element">Link</td>
        <td data-label="Specs">#BEE1F4</td>
      </tr>
      <tr>
        <td data-label="Variant">White</td>
        <td data-label="Interaction state">Hover/Active</td>
        <td data-label="Element">Close button</td>
        <td data-label="Specs">#151515</td>
      </tr>
      <tr>
        <td data-label="Variant">White</td>
        <td data-label="Interaction state">Hover/Active</td>
        <td data-label="Element">Link</td>
        <td data-label="Specs">#004080</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Accessibility

When a popover is triggered by a user pressing the **Enter** key, 
the close button must have focus in order for a user to have control over the 
popover and be able to interact with the links or close it.

<uxdot-example width-adjustment="392px">
  <img src="../popover-accessibility.svg"
        alt="Popover component accessibility"
        width="405"
        height="236">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key">Key</th>
        <th scope="col" data-label="Action">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Action">Moves the focus away from the close button.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Action">Moves the focus to the previous link or to the close button.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Action">Closes a popover or selects a link within a popover.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Escape</kbd> (esc)</td>
        <td data-label="Action">Closes a popover.</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Best practices

### Embedding

Do not embed a popover or tooltip within another popover.

<uxdot-example width-adjustment="479px" danger>
  <img src="../popover-best-practice-1.svg"
        alt="Popover component best practice 1"
        width="486"
        height="246">
</uxdot-example>


### Too much content

Do not overload a popover with too much content.

<uxdot-example width-adjustment="432px" danger>
  <img src="../popover-best-practice-2.svg"
        alt="Popover component best practice 2"
        width="445"
        height="370">
</uxdot-example>


### No close button

Do not remove the close button from a popover.

<uxdot-example width-adjustment="392px" danger>
  <img src="../popover-best-practice-3.svg"
        alt="Popover component best practice 3"
        width="405"
        height="246">
</uxdot-example>

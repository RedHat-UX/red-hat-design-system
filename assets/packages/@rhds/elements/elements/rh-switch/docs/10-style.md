## Style

A Switch resembles a slider and includes a status message. When activated, the track background changes color and the handle changes position. If a user needs to toggle multiple Switches, they can be stacked on top of each other.


### Anatomy

<figure>
  <uxdot-example width-adjustment="222px">
    <img src="../switch-anatomy.svg"
        alt="with numbers labeling the track, handle, and status message"
        width="222"
        height="43">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Track</li>
      <li>Handle</li>
      <li>Status message</li>
    </ol>
  </figcaption>
</figure>


## Theme

A Switch is available in both light and dark themes.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="170px">
    <img src="../switch-theme-light.svg"
        alt="Light theme switch with blue track, white handle, and black text"
        width="170"
        height="24">
  </uxdot-example>

  <uxdot-example width-adjustment="170px" color-palette="darkest">
    <img src="../switch-theme-dark.svg"
        alt="Dark theme switch with light blue track, black handle, and white text"
        width="170"
        height="24">
  </uxdot-example>
</div>

## Configuration

A Switch is the same height as the status message and both are horizontally aligned as well.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="250px">
    <img src="../switch-configuration-height.svg"
        alt="Switch and status message are 24px tall. Switch is 40px wide."
        width="250"
        height="86">
  </uxdot-example>

  <uxdot-example width-adjustment="466px">
    <img src="../switch-configuration-alignment.svg"
        alt="Horizontally aligned switch and status message"
        width="466"
        height="24">
  </uxdot-example>
</div>


### Status messages

A status message can be positioned to the right or left of a Switch.

<uxdot-example width-adjustment="500px">
  <img src="../switch-status-message.svg"
        alt="One switch with status message on the left and another with status message on the right"
        width="500"
        height="24">
</uxdot-example>


## Space

Space values remain the same at all viewport sizes.

<uxdot-example width-adjustment="170px">
  <img src="../switch-space-individual.svg"
        alt="16px spacer between the switch and status message"
        width="170"
        height="24">
</uxdot-example>

<uxdot-example width-adjustment="170px">
  <img src="../switch-space-stack.svg"
        alt="24px spacer between stacked switches with status messages"
        width="170"
        height="168">
</uxdot-example>


## States

A Switch and the status message cx count as the same selectable object.

<rh-alert state="info">
 <p>The visual appearance of a Switch does not change unless toggled.</p>
</rh-alert>


<figure>
  <uxdot-example width-adjustment="872px">
    <img src="../switch-states.svg"
        alt="Switches that are on, off, disabled, hovered, active, and in focus"
        width="872"
        height="206">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>On</li>
      <li>On with check</li>
      <li>Off</li>
      <li>Disabled</li>
      <li>Hover</li>
      <li>Focus</li>
      <li>Active</li>
    </ol>
  </figcaption>
</figure>

## Style

A Switch resembles a slider and includes a status message. When activated, the track background changes color and the handle changes position. If a user needs to toggle multiple Switches, they can be stacked on top of each other.


### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="222px">
    <img alt="with numbers labeling the track, handle, and status message"
         src="../switch-anatomy.svg"
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


## Color scheme
<a id="theme"></a>

A Switch is available for both light and dark color schemes.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="170px">
    <img alt="Light theme switch with blue track, white handle, and black text"
         src="../switch-theme-light.svg"
         width="170"
         height="24">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="170px">
    <img alt="Dark theme switch with light blue track, black handle, and white text"
         src="../switch-theme-dark.svg"
         width="170"
         height="24">
  </uxdot-example>
</div>

## Configuration

A Switch is the same height as the status message and both are horizontally aligned as well.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="250px">
    <img alt="Switch and status message are 24px tall. Switch is 40px wide."
         src="../switch-configuration-height.svg"
         width="250"
         height="86">
  </uxdot-example>

  <uxdot-example color-palette="lightest" width-adjustment="466px">
    <img alt="Horizontally aligned switch and status message"
         src="../switch-configuration-alignment.svg"
         width="466"
         height="24">
  </uxdot-example>
</div>


### Status messages

A status message can be positioned to the right or left of a Switch.

<uxdot-example color-palette="lightest" width-adjustment="500px">
  <img alt="One switch with status message on the left and another with status message on the right"
       src="../switch-status-message.svg"
       width="500"
       height="24">
</uxdot-example>


## Space

Space values remain the same at all viewport sizes.

<uxdot-example color-palette="lightest" width-adjustment="170px">
  <img alt="16px spacer between the switch and status message"
       src="../switch-space-individual.svg"
       width="170"
       height="24">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="170px">
  <img alt="24px spacer between stacked switches with status messages"
       src="../switch-space-stack.svg"
       width="170"
       height="168">
</uxdot-example>


## States

A Switch and the status message cx count as the same selectable object.

<rh-alert state="info">
 <p>The visual appearance of a Switch does not change unless toggled.</p>
</rh-alert>


<figure>
  <uxdot-example color-palette="lightest" width-adjustment="872px">
    <img alt="Switches that are on, off, disabled, hovered, active, and in focus"
         src="../switch-states.svg"
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

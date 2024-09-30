## Style 

A tooltip is a container with text that includes an arrow and sometimes a drop shadow. It can be anchored to various elements like buttons, icons, etc.


### Anatomy 
<figure>
  <uxdot-example width-adjustment="274px">
    <img src="../tooltip-anatomy.png" alt="Anatomy of a tooltip with annotations; number 1 is pointing to the container, number 2 is pointing to the text, number 3 is pointing to the arrow, and number 4 is pointing to the trigger">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Container</li>
      <li>Text</li>
      <li>Arrow</li>
      <li>Trigger</li>
    </ol>
  </figcaption>
</figure>


## Theme 

A tooltip is available in both light and dark themes. The dark theme tooltip container does not include a drop shadow.


### Light theme 

<uxdot-example width-adjustment="230px">
  <img src="../tooltip-theme-light.png" alt="Light theme tooltip which is black">
</uxdot-example>


### Dark theme 

<uxdot-example color-palette="darkest" width-adjustment="230px">
  <img src="../tooltip-theme-dark.png" alt="Dark theme tooltip which is white">
</uxdot-example>


## Configuration 

All badges have the same height and border radius.

<uxdot-example width-adjustment="230px">
  <img src="../tooltip-configuration.png" alt="How a tooltip is constructed showing alignment, border radius, and arrow details">
</uxdot-example>


## Space 

<uxdot-example width-adjustment="230px">
  <img src="../tooltip-space.png" alt="Tooltip spacing both within the element and in between the element and trigger">
</uxdot-example>

<rh-table>
  {% spacerTokensTable 
    headline="",
    caption='',
    headingLevel="4",
    tokens="--rh-space-md, --rh-space-lg" %}
  {% endspacerTokensTable %}
</rh-table>


## Animation 

A tooltip has a `300ms` entry delay on hover by default, but this can be customized. For example, if you would like it to appear immediately, set the delay to `0ms`.


## Interaction states 

A tooltip appears near an icon or element on hover, focus, or when tapped. A tooltip contains only text and is not interactive.

<uxdot-example width-adjustment="805px">
  <img src="../tooltip-interaction-states.png" alt="Tooltip trigger interaction states">
</uxdot-example>

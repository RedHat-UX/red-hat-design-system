## Style 

A tooltip is a container with text that includes an arrow and sometimes a drop shadow. It can be anchored to various elements like buttons, icons, etc.


### Anatomy 
<figure>
  <uxdot-example color-palette="lightest" width-adjustment="274px">
    <img alt="Anatomy of a tooltip with annotations; number 1 is pointing to the container, number 2 is pointing to the text, number 3 is pointing to the arrow, and number 4 is pointing to the trigger"
         src="../tooltip-anatomy.png"
         width="274"
         height="94">
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


## Color scheme 
<a id="theme"></a>
<a id="light-theme"></a>
<a id="dark-theme"></a>

A tooltip is available for both light and dark schemes. The dark scheme tooltip container does not include a drop shadow.


<uxdot-example color-palette="lightest" width-adjustment="230px">
  <img alt="Light theme tooltip which is black"
       src="../tooltip-theme-light.png"
       width="230"
       height="131">
</uxdot-example>


<uxdot-example color-palette="darkest" width-adjustment="230px">
  <img alt="Dark theme tooltip which is white"
       src="../tooltip-theme-dark.png"
       width="230"
       height="131">
</uxdot-example>


## Configuration 

All badges have the same height and border radius.

<uxdot-example color-palette="lightest" width-adjustment="230px">
  <img alt="How a tooltip is constructed showing alignment, border radius, and arrow details"
       src="../tooltip-configuration.png"
       width="422"
       height="128">
</uxdot-example>


## Space 

<uxdot-example color-palette="lightest" width-adjustment="230px">
  <img alt="Tooltip spacing both within the element and in between the element and trigger"
       src="../tooltip-space.png"
       width="230"
       height="131">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg"></uxdot-spacer-tokens-table>

## Animation 

A tooltip has a `300ms` entry delay on hover by default, but this can be customized. For example, if you would like it to appear immediately, set the delay to `0ms`.


## Interaction states 

A tooltip appears near an icon or element on hover, focus, or when tapped. A tooltip contains only text and is not interactive.

<uxdot-example color-palette="lightest" width-adjustment="805px">
  <img alt="Tooltip trigger interaction states"
       src="../tooltip-interaction-states.png"
       width="805"
       height="105">
</uxdot-example>

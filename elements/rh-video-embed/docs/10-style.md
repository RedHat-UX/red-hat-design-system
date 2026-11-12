## Style 

The video embed element consists of a semitransparent play button with a video thumbnail that overlays the embedded video when it is not playing. There is also an optional slot for a caption that describes the video.

## Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="555px">
    <img alt="Anatomy of a video component with numbered annotations."
         src="../video-anatomy.svg"
         width="556"
         height="349">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Thumbnail</li>
      <li>Play button</li>
      <li>Caption</li>
    </ol>
  </figcaption>
</figure>

## Color scheme
<a id="theme"></a>

The video embed element is available for both light and dark color schemes. It can include either a light or a dark play button, depending on the thumbnail image underneath.

The user is currently responsible for setting the play button color and preventing color contrast issues between the button and the video thumbnail. If an image is on a light color palette or if its video thumbnail image uses mostly light colors, use a light theme play button for accessibility and vice versa.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="420px">
    <img alt="Light theme video with the Red Hat logo and a play button on a light gray background"
         src="../video-theme-light.svg"
         width="420"
         height="273">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="420px">
    <img alt="Dark theme video with the Red Hat logo and a play button on a black background"
         src="../video-theme-dark.svg"
         width="420"
         height="274">
  </uxdot-example>
</div>

## Configuration

### Caption

The caption can be left-, right-, or center-aligned, depending on how the video is oriented. By default, it is left-aligned.

<div class="grid sm-three-columns">
  <uxdot-example color-palette="lightest" width-adjustment="248px">
    <img alt="Video with caption, below, left aligned"
         src="../video-caption-align-left.svg"
         width="248"
         height="198">
  </uxdot-example>

  <uxdot-example color-palette="lightest" width-adjustment="248px">
    <img alt="Video with caption, below, center aligned"
         src="../video-caption-align-center.svg"
         width="248"
         height="198">
  </uxdot-example>

  <uxdot-example color-palette="lightest" width-adjustment="248px">
    <img alt="Video with caption, below, right aligned"
         src="../video-caption-align-right.svg"
         width="248"
         height="198">
  </uxdot-example>
</div>


## Space

Space values remain the same at all viewport sizes.

<uxdot-example color-palette="lightest" width-adjustment="555px">
 <img alt="Diagram of spacing for video"
      src="../video-space.svg"
      width="556"
      height="350">
</uxdot-example>


## States

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

The play button’s opacity increases upon hover.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="420px">
    <img alt="Light theme video on a gray background with a darker play button on hover"
         src="../video-hover-light.svg"
         width="420"
         height="273">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="420px">
    <img alt="Dark theme video on a black background with a lighter play button on hover"
         src="../video-hover-dark.svg"
         width="420"
         height="274">
  </uxdot-example>
</div>

### Focus

Keyboard focus outlines the video with a 3px ring, offset 3px. The play button uses the same opacity as hover.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="420px">
    <img alt="Light theme video with a 3px focus ring offset from the video and a darker play button"
         src="../video-focus-light.svg"
         width="428"
         height="275">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="420px">
    <img alt="Dark theme video with a 3px focus ring offset from the video and a lighter play button"
         src="../video-focus-dark.svg"
         width="428"
         height="276">
  </uxdot-example>
</div>

### Active

Press uses the same 3px ring and play button opacity as keyboard focus.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="420px">
    <img alt="Light theme video pressed, with a 3px ring offset from the video and a darker play button"
         src="../video-active-light.svg"
         width="428"
         height="275">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="420px">
    <img alt="Dark theme video pressed, with a 3px ring offset from the video and a lighter play button"
         src="../video-active-dark.svg"
         width="428"
         height="276">
  </uxdot-example>
</div>

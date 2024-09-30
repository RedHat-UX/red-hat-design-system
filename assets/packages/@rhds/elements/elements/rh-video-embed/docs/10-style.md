## Style 

The video embed element consists of a semitransparent play button with a video thumbnail that overlays the embedded video when it is not playing. There is also an optional slot for a caption that describes the video.

## Anatomy

<figure>
  <uxdot-example width-adjustment="555px">
    <img src="../video-anatomy.svg" alt="Anatomy of a video component with numbered annotations.">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Thumbnail</li>
      <li>Play button</li>
      <li>Caption</li>
    </ol>
  </figcaption>
</figure>

## Theme

The video embed element is available in both light and dark themes. It can include either a light or a dark play button, depending on the thumbnail image underneath. If an image is lighter, use a dark play button for accessibility and vice versa.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="420px">
    <img src="../video-theme-light.svg" alt="Light theme video with the Red Hat logo and a play button on a light gray background">
  </uxdot-example>

  <uxdot-example width-adjustment="420px" color-palette="darkest">
    <img src="../video-theme-dark.svg" alt="Dark theme video with the Red Hat logo and a play button on a black background">
  </uxdot-example>
</div>

## Configuration

### Caption

The caption can be left-, right-, or center-aligned, depending on how the video is oriented. By default, it is left-aligned.

<div class="grid sm-three-columns">
  <uxdot-example width-adjustment="248px">
    <img src="../video-caption-align-left.svg" alt="Video with caption, below, left aligned">
  </uxdot-example>

  <uxdot-example width-adjustment="248px">
    <img src="../video-caption-align-center.svg" alt="Video with caption, below, center aligned">
  </uxdot-example>

  <uxdot-example width-adjustment="248px">
    <img src="../video-caption-align-right.svg" alt="Video with caption, below, right aligned">
  </uxdot-example>
</div>


## Space

Space values remain the same at all viewport sizes.

<uxdot-example width-adjustment="555px">
 <img  src="../video-space.svg" alt="Diagram of spacing for video"  />
</uxdot-example>


## States

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

The play button’s opacity increases upon hover.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="420px">
    <img src="../video-hover-light.svg" alt="Light theme video on a gray background with a darker play button on hover">
  </uxdot-example>

  <uxdot-example width-adjustment="420px" color-palette="darkest">
    <img src="../video-hover-dark.svg" alt="Dark theme video on a black background with a lighter play button on hover">
  </uxdot-example>
</div>

### Focus

On focus, the entire video embed element is outlined by a focus ring, and the play button uses the same opacity as the hover state.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="420px">
    <img src="../video-focus-light.svg" alt="Light theme video with a focus ring outlining the video and a darker play button">
  </uxdot-example>

  <uxdot-example width-adjustment="420px" color-palette="darkest">
    <img src="../video-focus-dark.svg" alt="Dark theme video with a focus ring outlining the video and a lighter play button">
  </uxdot-example>
</div>

### Active

The active state is the same as the focus state.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="420px">
    <img src="../video-active-light.svg" alt="Light theme video with a focus ring outlining the video and a darker play button">
  </uxdot-example>

  <uxdot-example width-adjustment="420px" color-palette="darkest">
    <img src="../video-active-dark.svg" alt="Dark theme video with a focus ring outlining the video and a lighter play button">
  </uxdot-example>
</div>

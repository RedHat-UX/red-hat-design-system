## Usage 

The video embed element shows a static preview of the video, and this allows the user to control what image is seen before the video is played. It also ensures that the video does not start playing automatically.

### Thumbnails

For users that do not have advertising cookies enabled, the video embed element should display a standard cookie consent thumbnail. This thumbnail includes instructions to enable advertising cookies and a button that will trigger a cookie consent dialog window.

Check the [Code subpage](/elements/video-embed/code/) for information about [attributes](/elements/video-embed/code/#rh-video-embed) and [events](/elements/video-embed/code/#rh-video-embed) that will help you implement the cookie consent thumbnail and integrate it with the preferred cookie consent manager. View the [Require Consent demo](/elements/video-embed/demo/require-consent/) to see a standalone implementation of this functionality.

<uxdot-example width-adjustment="555px">
  <img alt="Video displaying the cookie consent which says, 'View this video by opting into Advertising Cookies.' It also has an 'Update Preferences button'."
       src="../video-require-consent.svg"
       width="556"
       height="312">
</uxdot-example>

## Writing Content

### Character Count

An optional descriptor caption can be placed underneath the video embed element. The recommended maximum character count is listed below and includes spaces.

<rh-table>

| Element | Character count |
|---------|-----------------|
| Caption | 150             |

</rh-table>

## Responsive Design

The video’s width will dynamically adjust with its parent container. The video embed element dimensions should retain the same aspect ratio as the original video. The caption font size will also remain the same across all screen or container sizes.

### Large Viewport Sizes

<uxdot-example>
  {% include './video-grid-lg-viewports.svg' %}
</uxdot-example>

### Small Viewport sizes

<uxdot-example>
  {% include './video-grid-sm-viewports.svg' %}
</uxdot-example>

## Best Practices

### Play button position

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img alt="Video with vertically and horizontally centered play button"
           src="../video-player-best-practices-btn-position-do.png"
           width="420"
           height="236">
    </uxdot-example>
    <p>Keep the play button centered horizontally and vertically.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img alt="Video with play button in the bottom right"
           src="../video-player-best-practices-btn-position-dont.png"
           width="420"
           height="236">
    </uxdot-example>
    <p>Do not move the play button to another area of the video element.</p>
  </uxdot-best-practice>
</div>

### Play button theme

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img alt="Light theme play button layered on a light-colored thumbnail image"
           src="../video-player-best-practices-btn-theme-do.png"
           width="420"
           height="236">
    </uxdot-example>
    <p>A light theme play button should be used if the thumbnail image has a light color palette, and a dark theme play button should be used against dark thumbnails.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img alt="Dark theme play button layered on a light-colored thumbnail image"
           src="../video-player-best-practices-btn-theme-dont.png"
           width="420"
           height="236">
    </uxdot-example>
    <p>Do not use a dark theme play button over a thumbnail with mostly light colors, and vice versa.</p>
  </uxdot-best-practice>
</div>

### Aspect Ratio

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img alt="Video embed with a correctly resized thumbnail image"
           src="../video-player-best-practices-aspect-ratio-do.png"
           width="420"
           height="237">
    </uxdot-example>
    <p>The video embed element should display a video using its original aspect ratio.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img alt="Video embed with a narrow aspect ratio, causing the thumbnail to look distorted"
           src="../video-player-best-practices-aspect-ratio-dont.png"
           width="420"
           height="184">
    </uxdot-example>
    <p>Do not change the aspect ratio of the video within the video embed element.</p>
  </uxdot-best-practice>
</div>

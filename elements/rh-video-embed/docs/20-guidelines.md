## Usage 

The video embed element shows a static preview of the video, and this allows the user to control what image is seen before the video is played. It also ensures that the video does not start playing automatically.

### Thumbnails

For users that do not have advertising cookies enabled, the video embed element should display a standard cookie consent thumbnail. This thumbnail includes instructions to enable advertising cookies and a button that will trigger a cookie consent dialog window.

Check the [Code subpage](/elements/video-embed/code/) for information about [attributes](/elements/video-embed/code/#rh-video-embed) and [events](/elements/video-embed/code/#rh-video-embed) that will help you implement the cookie consent thumbnail and integrate it with the preferred cookie consent manager. View the [Require Consent demo](/elements/video-embed/demo/require-consent/) to see a standalone implementation of this functionality.

<uxdot-example width-adjustment="555px">
  <img src="../video-require-consent.svg"
        alt="Video displaying the cookie consent which says, 'View this video by opting into Advertising Cookies.' It also has an 'Update Preferences button'."
        width="556"
        height="312">
</uxdot-example>

## Writing Content

### Character Count

An optional descriptor caption can be placed underneath the video embed element. The recommended maximum character count is listed below and includes spaces.

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
          <td data-label="Element">Caption</td>
          <td data-label="Character count">150</td>
        </tr>
    </tbody>
  </table>
</rh-table>

## Responsive Design

The video’s width will dynamically adjust with its parent container. The video embed element dimensions should retain the same aspect ratio as the original video. The caption font size will also remain the same across all screen or container sizes.

### Large Viewport Sizes

<img src="../video-grid-lg-viewports.svg"
        alt="Video embed with a semitransparent grid in the background. The video embed only spans half the columns."
        width="1000"
        height="351">

### Small Viewport sizes

<img src="../video-grid-sm-viewports.svg"
        alt="Video embed with a semitransparent grid background on mobile. The video embed spans all columns on small viewports."
        width="360"
        height="242">

## Best Practices

### Play button

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="../guidelines-best-practice-1-do.svg"
        alt="Video with vertically and horizontally centered play button"
        width="420"
        height="236">
    </uxdot-example>
    <p>Keep the play button centered horizontally and vertically.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="../guidelines-best-practice-1-dont.svg"
        alt="Video with play button in the bottom right"
        width="420"
        height="236">
    </uxdot-example>
    <p>Do not move the play button to another area of the video element.</p>
  </uxdot-best-practice>
</div>


### Aspect Ratio

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="../guidelines-best-practice-2-do.svg"
        alt="Video embed with a correct, 16:9 aspect ratio"
        width="420"
        height="237">
    </uxdot-example>
    <p>The video embed element should display a video using its original aspect ratio.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="../guidelines-best-practice-2-dont.svg"
        alt="Video embed with a very narrow aspect ratio"
        width="420"
        height="184">
    </uxdot-example>
    <p>Do not change the aspect ratio of the video within the video embed element.</p>
  </uxdot-best-practice>
</div>

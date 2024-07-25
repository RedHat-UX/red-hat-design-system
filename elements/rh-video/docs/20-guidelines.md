## Usage 

The video element shows a static preview of the video, and this allows the user to control what image is seen before the video is played. It also ensures that the video does not start playing automatically.

### Thumbnails

For users that do not have advertising cookies enabled, the video element should display a standard cookie consent thumbnail. This thumbnail includes instructions to enable advertising cookies and a button that will trigger a cookie consent dialog window.

Check the [Code subpage](/elements/video/code/) for information about [attributes](/elements/video/code/#rh-video) and [events](/elements/video/code/#rh-video) that will help you implement the cookie consent thumbnail and integrate it with the preferred cookie consent manager. View the [Require Consent demo](/elements/video/demo/require-consent/) to see a standalone implementation of this functionality.

<uxdot-example width-adjustment="555px">
  <img src="{{ '../video-require-consent.svg' | url }}" alt="Video displaying the cookie consent which says, 'View this video by opting into Advertising Cookies.' It also has an 'Update Preferences button'.">
</uxdot-example>

## Writing Content

### Character Count

An optional descriptor caption can be placed underneath the video element. The recommended maximum character count is listed below and includes spaces.

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

The video’s width will dynamically adjust with its parent container. The video element dimensions should retain the same aspect ratio as the original video. The caption font size will also remain the same across all screen or container sizes.

### Large Viewport Sizes

<img src="#" alt="">

### Small Viewport sizes

<img src="#" alt="">

## Best Practices

### Play button

Display the play button in a consistent, predictable spot for all videos.

<div class="grid xs-two-columns">
  <uxdot-best-practice do>
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="{{ '../guidelines-best-practice-1-do.svg' | url }}" alt="Video with vertically and horizontally centered play button">
    </uxdot-example>
    <p>Keep the play button centered horizontally and vertically.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="{{ '../guidelines-best-practice-1-dont.svg' | url }}" alt="Video with play button in the bottom right">
    </uxdot-example>
    <p>Do not move the play button to another area of the video element.</p>
  </uxdot-best-practice>
</div>


### Aspect Ratio

A video element and should have the same aspect ratio as the video it’s displaying.

<div class="grid xs-two-columns">
  <uxdot-best-practice do>
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="{{ '../guidelines-best-practice-2-do.svg' | url }}" alt="Video with a correct, 16:9 aspect ratio">
    </uxdot-example>
    <p>The video element should display a video using its original aspect ratio.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="{{ '../guidelines-best-practice-2-dont.svg' | url }}" alt="Video with a very narrow aspect ratio">
    </uxdot-example>
    <p>Do not change the aspect ratio of the video within the video element.</p>
  </uxdot-best-practice>
</div>

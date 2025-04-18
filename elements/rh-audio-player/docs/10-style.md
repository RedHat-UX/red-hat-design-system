## Style

The audio player is a collection of elements used to play audio clips and browse [features](../features). There are also optional slots for an image and description text. The audio player must include the following elements **at a minimum**:
- Audio clip title
- Seek bar and clip times
- Unmute/mute button and volume control
- Playback controls (speed, rewind, play/pause, forward)
- Contextual menu

### Anatomy

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of audio player anatomy showing all players with lots of annotations"
       src="../audio-player-anatomy.png"
       width="712"
       height="504">
</uxdot-example>

1. Image
2. Description
3. Title
   1. Elapsed time
   2. Total time
5. Current time/seek bar
6. Unmute/mute button
7. Volume level
8. Playback speed
9. Rewind
10. Play/pause
11. Forward
12. Contextual menu
{.example-notes}

## Sizes
There are three available sizes and the only difference is the amount of interface elements. The Compact and Mini players can be used on large breakpoints, but the Full player cannot be used on small breakpoints due to space constraints.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of all audio player sizes with text labels"
       src="../audio-player-style-sizes.png"
       width="712"
       height="606">
</uxdot-example>

## Color scheme
<a id="theme"></a>

The audio player is available for both light and dark color schemes.

### Light theme

<uxdot-example color-palette="lightest" width-adjustment="800px">
  <img alt="Image of light theme audio players"
       src="../audio-player-theme-light.png"
       width="800"
       height="640">
</uxdot-example>

### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="800px">
  <img alt="Image of dark theme audio players"
       src="../audio-player-theme-dark.png"
       width="800px"
       height="640">
</uxdot-example>

### Custom theme

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>If your audio player requires a custom theme, <a href="https://github.com/orgs/RedHat-UX/discussions">contact</a> the design system team.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="800px">
  <img alt="Image of custom theme audio players"
       src="../audio-player-theme-custom.png"
       width="800"
       height="640">
</uxdot-example>

## Configuration
The size of audio players change if an image is included or not.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of all audio players showing various specs like alignment, border radius, height, width, and more"
       src="../audio-player-configuration.png"
       width="872"
       height="731">
</uxdot-example>

## Space
The amount of space in all audio players remains the same on all breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of audio player spacing for all sizes"
       src="../audio-player-space.png"
       width="712"
       height="504">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, xl, 2xl"></uxdot-spacer-tokens-table>

## Interaction states
Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Every interactive element includes a tooltip as part of the Hover state. To learn more, go to the <a href="../accessibility">Accessibility</a> page.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="715px">
  <img alt="Image of light theme audio player hover states"
       src="../audio-player-interaction-state-hover-theme-light.png"
       width="715"
       height="504">
</uxdot-example>

<uxdot-example width-adjustment="712px" color-palette="darkest">
  <img alt="Image of dark theme audio player hover states"
       src="../audio-player-interaction-state-hover-theme-dark.png"
       width="712"
       height="504">
</uxdot-example>


### Focus

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="715px">
  <img alt="Image of light theme audio player focus states"
       src="../audio-player-interaction-state-focus-theme-light.png"
       width="715"
       height="504">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="712px">
  <img alt="Image of dark theme audio player focus states"
       src="../audio-player-interaction-state-focus-theme-dark.png"
       width="712"
       height="504">
</uxdot-example>

### Active

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="715px">
  <img alt="Image of light theme audio player active states"
       src="../audio-player-interaction-state-active-theme-light.png"
       width="715"
       height="504">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="712px">
  <img alt="Image of dark theme audio player active states"
       src="../audio-player-interaction-state-active-theme-dark.png"
       width="712"
       height="504">
</uxdot-example>

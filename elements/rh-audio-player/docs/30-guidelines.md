## Usage 
Use an audio player to allow users to play short-form audio clips or long-form audio files like podcasts.

### Features 
Playing and controlling audio are not the only functions of the audio player. There are [features](../features) included where users can read the audio summary, view subscription options, and follow along with or even download the embedded transcript. These features help users listen to audio while staying within the same experience on the same page.

## Sizes 
When choosing one size over the other, consider where it is being used and what controls should be visible to users. Some audio player sizes have limited controls due to space constraints and some sizes occupy more space in a layout than others. Also take into account how an audio player changes size when users expand certain features.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-guidelines-sizes.png" 
      alt="Image of all audio player sizes with text labels"
      width="712px">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Size">Size</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Size">Full</td>
        <td data-label="Use case">Use when the audio player is the primary focus and if users need access to all controls</td>
      </tr>
      <tr>
        <td data-label="Size">Compact</td>
        <td data-label="Use case">Use when there are other elements nearby and if users need access to some controls</td>
      </tr>
      <tr>
        <td data-label="Size">Mini</td>
        <td data-label="Use case">Use on small breakpoints or stretch to fit large breakpoints and if limited controls is acceptable</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Removing elements 
It is acceptable to remove optional elements, but doing so will change the height or width of the audio player.

<uxdot-example width-adjustment="504px">
  <img src="../audio-player-removing-elements.png" 
      alt="Image of two Full players; one is without an image and the other is without an image and description text"
      width="504px">
</uxdot-example>

### Mini player 
In certain edge cases, the Mini player can hide the volume and contextual menu buttons.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-mini-player.png" 
      alt="Image of three Mini players; one is the default state, one is missing the menu button, and one is missing both the volume and menu buttons"
      width="712px">
</uxdot-example>

## Writing content 

### Description and title 
The description and title help add context to an audio clip. The description is optional, but the title is mandatory.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>The description and title are not included in the Mini size players.</p>
</rh-alert>

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-description-and-title.png" 
      alt="Image of the Full player and two Compact players; one Compact player has both description and title text and the other Compact player has only title text"
      width="712px">
</uxdot-example>


### Character count 
Using too many characters will cause the description and title to scroll outside of the visible area. The recommended maximum character count for the elements of an audio player are listed below and include spaces.

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
        <td data-label="Element">Description</td>
        <td data-label="Character count">80</td>
      </tr>
      <tr>
        <td data-label="Element">Title</td>
        <td data-label="Character count">40</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Layout 

### Inline 
Compact and Mini players can be used inline with titles, headings, and a call to action.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-layout-inline.png" 
      alt="Image of Compact and Mini players used with titles, headings, and calls to action"
      width="712px">
</uxdot-example>

### Stacking 
Compact players can be stacked with headings, text, and horizontal rules.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-layout-stacking.png" 
      alt="Image of the Compact player in a stacked layout with headers, text, and horizontal rules"
      width="712px">
</uxdot-example>

### Full-width 
The Compact size can span the width of a browser window and be anchored to the top or bottom of a page.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>When a Compact size is used full-width, the contextual menu button is replaced by a close button and there is no access to features.</p>
</rh-alert>

<uxdot-example alignment="left" variant="full" no-border width-adjustment="1000px">
  <img src="../audio-player-layout-full-width-1.png"
      alt="Image of a full-width Compact player in a light theme context" 
      width="1000px">
</uxdot-example>

<uxdot-example alignment="left" variant="full" no-border width-adjustment="1000px">
  <img src="../audio-player-layout-full-width-2.png" 
      alt="Image of a full-width Compact player in a dark theme context" 
      width="1000px">
</uxdot-example>

## Behavior 

### Autoplay 
When a page loads, audio should **never** start playing automatically without receiving input from a user first.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-behavior-autoplay.png" 
      alt="Image of the Full player showing audio stopped"
      width="712px">
</uxdot-example>

### Scrolling text 
If the description or title is long, it scrolls from left to right while audio is playing.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-behavior-scrolling-text.png" 
      alt="Image of the Full player with description and title text cut off and scrolling from left to right as audio plays"
      width="712px">
</uxdot-example>

## Playback 
To see a list of all keystroke controls, go to the [Accessibility](../accessibility) page.

### Seek 
Dragging the current time indicator will jump to a specific time. Arrow keys will rewind or advance audio by 15 seconds.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-playback-seek.png" 
      alt="Image of the Full player showing how to seek with a cursor or keyboard"
      width="712px">
</uxdot-example>

### Unmute/mute 
Audio can be toggled on or off by pressing the unmute/mute button.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-playback-unmute-mute.png" 
      alt="Image of the Full player showing how to toggle the unmute/mute button with a cursor or keyboard"
      width="712px">
</uxdot-example>

### Volume 
Dragging the slider will adjust the volume. Arrow keys will increase or decrease the volume by 25% intervals.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-playback-volume.png" 
      alt="Image of the Full player showing how to adjust the volume with a cursor or keyboard"
      width="712px">
</uxdot-example>

### Speed 
The rate of speed can be adjusted by clicking the carets or selecting the speed button and choosing a speed in the menu.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-playback-speed.png" 
      alt="Image of the Full player showing how to open the speed menu and selecting another speed with a cursor or keyboard"
      width="712px">
</uxdot-example>

### Rewind/forward 
Audio rewinds or advances by 15 seconds if either button is pressed.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-playback-rewind-forward.png" 
      alt="Image of the Full player showing how to toggle the rewind or forward buttons with a cursor or keyboard"
      width="712px">
</uxdot-example>

### Play/pause 
Audio playback can be resumed/stopped by pressing the play/pause button.

<uxdot-example width-adjustment="712px">
  <img src="../audio-player-playback-play-pause.png" 
    alt="Image of the Full player showing how to toggle the play/pause button with a cursor or keyboard"
    width="712px">
</uxdot-example>

## Responsive design 

### Large breakpoints 
All audio players can be used on large breakpoints. The Mini player can be stretched to fit any grid or container size.

<uxdot-example variant="full" no-border alignment="left" width-adjustment="1000px">
  <img src="../audio-player-responsive-breakpoints-desktop.png" 
      alt="Image of the Full, Full without image, and Compact players as well as a stretched Mini player on large breakpoints"
      width="1000px">
</uxdot-example

The Full player will change to the Compact player and the Compact player will change to the Mini player as breakpoints get smaller.

<uxdot-example variant="full" no-border alignment="left" width-adjustment="768px">
  <img src="../audio-player-responsive-breakpoints-tablet.png" 
      alt="Image of the Full player and a stretched Compact player on large breakpoints"
      width="768px">
</uxdot-example>

### Small breakpoints 

<uxdot-example variant="full" no-border alignment="left" width-adjustment="576px">
  <img src="../audio-player-responsive-breakpoints-mobile.png" 
      alt="Image of the Full, Full without image, and Compact players as well as a stretched Mini player on small breakpoints"
      width="576px">
</uxdot-example>

## Best practices 

### Full player 
Be careful when using the Full player near too many other elements.

<uxdot-example width-adjustment="712px" danger>
  <img src="../audio-player-best-practice-1.png" 
      alt="Image of the Full player used near lots of other elements"
      width="712px">
</uxdot-example>

### Contextual menu 
Do not alter contextual menu theming.

<uxdot-example width-adjustment="712px" danger>
  <img src="../audio-player-best-practice-2.png"
      alt="Image of Compact players with contextual menus that are a different theme than the audio player which is incorrect usage"
      width="712px">
</uxdot-example>

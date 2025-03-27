## Usage 
Use an audio player to allow users to play short-form audio clips or long-form audio files like podcasts.

### Features 
Playing and controlling audio are not the only functions of the audio player. There are [features](../features) included where users can read the audio summary, view subscription options, and follow along with or even download the embedded transcript. These features help users listen to audio while staying within the same experience on the same page.

## Sizes 
When choosing one size over the other, consider where it is being used and what controls should be visible to users. Some audio player sizes have limited controls due to space constraints and some sizes occupy more space in a layout than others. Also take into account how an audio player changes size when users expand certain features.

<uxdot-example width-adjustment="712px">
  <img alt="Image of all audio player sizes with text labels"
       src="../audio-player-guidelines-sizes.png"
       width="712"
       height="606">
</uxdot-example>

<rh-table>

| Size    | Use case                                                                                           |
|---------|----------------------------------------------------------------------------------------------------|
| Full    | Use when the audio player is the primary focus and if users need access to all controls            |
| Compact | Use when there are other elements nearby and if users need access to some controls                 |
| Mini    | Use on small breakpoints or stretch to fit large breakpoints and if limited controls is acceptable |

</rh-table>

### Removing elements 
It is acceptable to remove optional elements, but doing so will change the height or width of the audio player.

<uxdot-example color-palette="lightest" width-adjustment="504px">
  <img alt="Image of two Full players; one is without an image and the other is without an image and description text"
       src="../audio-player-removing-elements.png"
       width="504"
       height="570">
</uxdot-example>

### Mini player 
In certain edge cases, the Mini player can hide the volume and contextual menu buttons.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of three Mini players; one is the default state, one is missing the menu button, and one is missing both the volume and menu buttons"
       src="../audio-player-mini-player.png"
       width="712"
       height="276">
</uxdot-example>

## Writing content 

### Description and title 
The description and title help add context to an audio clip. The description is optional, but the title is mandatory.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>The description and title are not included in the Mini size players.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player and two Compact players; one Compact player has both description and title text and the other Compact player has only title text"
       src="../audio-player-description-and-title.png"
       width="712"
       height="504">
</uxdot-example>


### Character count 
Using too many characters will cause the description and title to scroll outside of the visible area. The recommended maximum character count for the elements of an audio player are listed below and include spaces.

<rh-table>

| Element     | Character count |
|-------------|-----------------|
| Description | 80              |
| Title       | 40              |

</rh-table>

## Layout 

### Inline 
Compact and Mini players can be used inline with titles, headings, and a call to action.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of Compact and Mini players used with titles, headings, and calls to action"
       src="../audio-player-layout-inline.png"
       width="712"
       height="508">
</uxdot-example>

### Stacking 
Compact players can be stacked with headings, text, and horizontal rules.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Compact player in a stacked layout with headers, text, and horizontal rules"
       src="../audio-player-layout-stacking.png"
       width="712"
       height="670">
</uxdot-example>

### Full-width 
The Compact size can span the width of a browser window and be anchored to the top or bottom of a page.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>When a Compact size is used full-width, the contextual menu button is replaced by a close button and there is no access to features.</p>
</rh-alert>

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border width-adjustment="1000px">
  <img alt="Image of a full-width Compact player in a light theme context"
       src="../audio-player-layout-full-width-1.png"
       width="1000"
       height="670">
</uxdot-example>

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border width-adjustment="1000px">
  <img alt="Image of a full-width Compact player in a dark theme context"
       src="../audio-player-layout-full-width-2.png"
       width="1000"
       height="670">
</uxdot-example>

## Behavior 

### Autoplay 
When a page loads, audio should **never** start playing automatically without receiving input from a user first.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing audio stopped"
       src="../audio-player-behavior-autoplay.png"
       width="712"
       height="266">
</uxdot-example>

### Scrolling text 
If the description or title is long, it scrolls from left to right while audio is playing.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player with description and title text cut off and scrolling from left to right as audio plays"
       src="../audio-player-behavior-scrolling-text.png"
       width="712"
       height="926">
</uxdot-example>

## Playback 
To see a list of all keystroke controls, go to the [Accessibility](../accessibility) page.

### Seek 
Dragging the current time indicator will jump to a specific time. Arrow keys will rewind or advance audio by 15 seconds.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing how to seek with a cursor or keyboard"
       src="../audio-player-playback-seek.png"
       width="712"
       height="528">
</uxdot-example>

### Unmute/mute 
Audio can be toggled on or off by pressing the unmute/mute button.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing how to toggle the unmute/mute button with a cursor or keyboard"
       src="../audio-player-playback-unmute-mute.png"
       width="712"
       height="528">
</uxdot-example>

### Volume 
Dragging the slider will adjust the volume. Arrow keys will increase or decrease the volume by 25% intervals.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing how to adjust the volume with a cursor or keyboard"
       src="../audio-player-playback-volume.png"
       width="712"
       height="528">
</uxdot-example>

### Speed 
The rate of speed can be adjusted by clicking the carets or selecting the speed button and choosing a speed in the menu.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing how to open the speed menu and selecting another speed with a cursor or keyboard"
       src="../audio-player-playback-speed.png"
       width="712"
       height="613">
</uxdot-example>

### Rewind/forward 
Audio rewinds or advances by 15 seconds if either button is pressed.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing how to toggle the rewind or forward buttons with a cursor or keyboard"
       src="../audio-player-playback-rewind-forward.png"
       width="712"
       height="532">
</uxdot-example>

### Play/pause 
Audio playback can be resumed/stopped by pressing the play/pause button.

<uxdot-example color-palette="lightest" width-adjustment="712px">
  <img alt="Image of the Full player showing how to toggle the play/pause button with a cursor or keyboard"
       src="../audio-player-playback-play-pause.png"
       width="712"
       height="544">
</uxdot-example>

## Responsive design 

### Large breakpoints 
All audio players can be used on large breakpoints. The Mini player can be stretched to fit any grid or container size.

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left" width-adjustment="1000px">
  <img alt="Image of the Full, Full without image, and Compact players as well as a stretched Mini player on large breakpoints"
       src="../audio-player-responsive-breakpoints-desktop.png"
       width="1000"
       height="704">
</uxdot-example>

The Full player will change to the Compact player and the Compact player will change to the Mini player as breakpoints get smaller.

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left" width-adjustment="768px">
  <img alt="Image of the Full player and a stretched Compact player on large breakpoints"
       src="../audio-player-responsive-breakpoints-tablet.png"
       width="768px">
</uxdot-example>

### Small breakpoints 

<uxdot-example color-palette="lightest" variant="full" no-border alignment="left" width-adjustment="576px">
  <img alt="Image of the Full, Full without image, and Compact players as well as a stretched Mini player on small breakpoints"
       src="../audio-player-responsive-breakpoints-mobile.png"
       width="576"
       height="176">
</uxdot-example>

## Best practices 

### Full player

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="716px">
    <img alt="Heading, compact audio player, and a default call to action"
         width="716"
         src="../audio-player-best-practices-full-player-do.png"
         height="187">
  </uxdot-example>

  <p>Use the compact or mini size if a player needs to appear near other elements.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Heading, full player, and a call to action in a group next to a card"
         src="../audio-player-best-practices-full-player-dont.png"
         width="1012"
         height="352">
  </uxdot-example>

  <p>Avoid using the full player near too many other elements.</p>
</uxdot-best-practice>

### Contextual menu

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="794px">
    <img alt="Light theme contextual menu paired with light theme player and dark theme contextual menu paired with dark theme player"
         src="../audio-player-best-practices-contextual-menu-do.png"
         width="794"
         height="480">
  </uxdot-example>

  <p>Retain the theming of the contextual menu that’s built into the audio player.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="794px">
    <img alt="Dark theme contextual menu paired with light theme player and purple theme contextual menu paired with dark theme player"
         src="../audio-player-best-practices-contextual-menu-dont.png"
         width="794"
         height="480">
  </uxdot-example>

  <p>Do not alter contextual menu theming.</p>
</uxdot-best-practice>

## Usage 
Use an audio player to allow users to play short-form audio clips or long-form audio files like podcasts.

### Features 
Playing and controlling audio are not the only functions of the audio player. There are [features](../features) included where users can read the audio summary, view subscription options, and follow along with or even download the embedded transcript. These features help users listen to audio while staying within the same experience on the same page.

## Sizes 
When choosing one size over the other, consider where it is being used and what controls should be visible to users. Some audio player sizes have limited controls due to space constraints and some sizes occupy more space in a layout than others. Also take into account how an audio player changes size when users expand certain features.

{% example palette="light",
          alt="Image of all audio player sizes with text labels",
          src="../audio-player-guidelines-sizes.png" %}{% endexample %}


| Size {style="width: 25%" } | Use case                                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| Full                       | Use when the audio player is the primary focus and if users need access to all controls            |
| Compact                    | Use when there are other elements nearby and if users need access to some controls                 |
| Mini                       | Use on small breakpoints or stretch to fit large breakpoints and if limited controls is acceptable |


### Removing elements 
It is acceptable to remove optional elements, but doing so will change the height or width of the audio player.

{% example palette="light",
          alt="Image of two Full players; one is without an image and the other is without an image and description text",
          src="../audio-player-removing-elements.png" %}{% endexample %}




### Mini player 
In certain edge cases, the Mini player can hide the volume and contextual menu buttons.

{% example palette="light",
          alt="Image of three Mini players; one is the default state, one is missing the menu button, and one is missing both the volume and menu buttons",
          src="../audio-player-mini-player.png" %}{% endexample %}


## Writing content 

### Description and title 
The description and title help add context to an audio clip. The description is optional, but the title is mandatory.

{% alert title="Warning",
          state="warning" %}

The description and title are not included in the Mini size players.
{% endalert %}

{% example palette="light",
          alt="Image of the Full player and two Compact players; one Compact player has both description and title text and the other Compact player has only title text",
          src="../audio-player-description-and-title.png" %}{% endexample %}


### Character count 
There is no hardened character count, but writing too many characters will cause the description and title to get cut off. Use the following character count values to avoid text scrolling.

| Tab count {style="width: 25%" } | Character count |
| ------------------------------- | --------------- |
| Description                     | 80              | 
| Title                           | 40              |


## Layout 

### Inline 
Compact and Mini players can be used inline with titles, headings, and a call to action.

{% example palette="light",
          alt="Image of Compact and Mini players used with titles, headings, and calls to action",
          src="../audio-player-layout-inline.png" %}{% endexample %}


### Stacking 
Compact players can be stacked with headings, text, and horizontal rules.

{% example palette="light",
          alt="Image of the Compact player in a stacked layout with headers, text, and horizontal rules ",
          src="../audio-player-layout-stacking.png" %}{% endexample %}


### Full-width 
The Compact size can span the width of a browser window and be anchored to the top or bottom of a page.

{% alert title="Warning",
          state="warning" %}
          
When a Compact size is used full-width, the contextual menu button is replaced by a close button and there is no access to features.
{% endalert %}

{% example palette="none",
          alt="Image of a full-width Compact player in a light theme context",
          src="../audio-player-layout-full-width-1.png" %}{% endexample %}


{% example palette="none",
          alt="Image of a full-width Compact player in a dark theme context",
          src="../audio-player-layout-full-width-2.png" %}{% endexample %}


## Behavior 

### Autoplay 
When a page loads, audio should **never** start playing automatically without receiving input from a user first.

{% example palette="light",
          alt="Image of the Full player showing audio stopped",
          src="../audio-player-behavior-autoplay.png" %}{% endexample %}


### Scrolling text 
If the description or title is long, it scrolls from left to right while audio is playing.

{% example palette="light",
          alt="Image of the Full player with description and title text cut off and scrolling from left to right as audio plays",
          src="../audio-player-behavior-scrolling-text.png" %}{% endexample %}


## Playback 
To see a list of all keystroke controls, go to the [Accessibility](../accessibility) page.

### Seek 
Dragging the current time indicator will jump to a specific time. Arrow keys will rewind or advance audio by 15 seconds.

{% example palette="light",
          alt="Image of the Full player showing how to seek with a cursor or keyboard",
          src="../audio-player-playback-seek.png" %}{% endexample %}


### Unmute/mute 
Audio can be toggled on or off by pressing the unmute/mute button.

{% example palette="light",
          alt="Image of the Full player showing how to toggle the unmute/mute button with a cursor or keyboard",
          src="../audio-player-playback-unmute-mute.png" %}{% endexample %}


### Volume 
Dragging the slider will adjust the volume. Arrow keys will increase or decrease the volume by 25% intervals.

{% example palette="light",
          alt="Image of the Full player showing how to adjust the volume with a cursor or keyboard",
          src="../audio-player-playback-volume.png" %}{% endexample %}


### Speed 
The rate of speed can be adjusted by clicking the carets or selecting the speed button and choosing a speed in the menu.

{% example palette="light",
          alt="Image of the Full player showing how to open the speed menu and selecting another speed with a cursor or keyboard",
          src="../audio-player-playback-speed.png" %}{% endexample %}


### Rewind/forward 
Audio rewinds or advances by 15 seconds if either button is pressed.

{% example palette="light",
          alt="Image of the Full player showing how to toggle the rewind or forward buttons with a cursor or keyboard",
          src="../audio-player-playback-rewind-forward.png" %}{% endexample %}


### Play/pause 
Audio playback can be resumed/stopped by pressing the play/pause button.

{% example palette="light",
          alt="Image of the Full player showing how to toggle the play/pause button with a cursor or keyboard",
          src="../audio-player-playback-play-pause.png" %}{% endexample %}


## Responsive design 

### Large breakpoints 
All audio players can be used on large breakpoints. The Mini player can be stretched to fit any grid or container size.

{% example palette="none",
          alt="Image of the Full, Full without image, and Compact players as well as a stretched Mini player on desktop breakpoints",
          src="../audio-player-responsive-breakpoints-desktop.png" %}{% endexample %}


The Full player will change to the Compact player and the Compact player will change to the Mini player as breakpoints get smaller.

{% example palette="none",
          alt="Image of the Compact player and a stretched Mini player on tablet breakpoints",
          src="../audio-player-responsive-breakpoints-tablet.png" %}{% endexample %}


### Small breakpoints 
{% example palette="none",
          alt="Image of Mini players on mobile breakpoints",
          src="../audio-player-responsive-breakpoints-mobile.png" %}{% endexample %}


## Best practices 

### Full player 
Be careful when using the Full player near too many other elements.

{% example palette="wrong",
          alt="Image of the Full player used near lots of other elements",
          src="../audio-player-best-practice-1.png" %}{% endexample %}


### Contextual menu 
Do not alter contextual menu theming.

{% example palette="wrong",
          alt="Image of Compact players with contextual menus that are a different theme than the audio player which is incorrect usage",
          src="../audio-player-best-practice-2.png" %}{% endexample %}
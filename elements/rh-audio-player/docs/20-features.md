<style>
.audio-player-features {
  & .full { grid-column: 1/-1; }
  & figure {
    padding: 0;
    margin: 0;
    display: block;
    height: max-content;
    & figcaption {
      font-size: var(--rh-font-size-body-text-sm);
      color: var(--rh-color-text-secondary-on-light);
    }
  }
  /*
   Warning:
   The following are demonstrations of using CSS variables to customize player color.
   They do not use our design token values for color.
  */
  &.custom {
    rh-audio-player {
      --rh-audio-player-background-color: #633ec5;
      --rh-audio-player-range-thumb-color: #f56d6d;
      --rh-audio-player-range-progress-color: #f56d6d;
    }
  }
}
</style>

## Features
Three features are included and are accessible within the contextual menu.

## Contextual menu
Pressing the `More options` button opens the contextual menu. The description and title are visible in the Full player but not in the Compact player, so there is an extra option in the contextual menu so users can access that information.

{% example palette="none",
          alt="Image of all audio player sizes showing the open contextual menu",
          src="../audio-player-contextual-menu.png" %}

## Content panel
When a feature is selected, the audio player expands and reveals the content panel. In the Full player, some interface elements get smaller, rearrange, or become hidden. In the Compact and Mini players, the content panel is below the controls. The `More options` button changes to a `Close` button as well which allows users to close the panel and return to the audio player at any time.

{% sample class="audio-player-features",
          code="hidden" -%}
<figure>
  <rh-audio-player expanded
                 lang="en-US"
                 layout="full"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
    <rh-audio-player-about slot="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" height="220">
        <rect x="0" y="0" width="320" height="120" fill="#e0e0e0"/>
        <line x1="0" y1="0" x2="320" y2="120" stroke="#d0d0d0"/>
        <line x1="320" y1="0" x2="0" y2="120" stroke="#d0d0d0"/>
      </svg>
    </rh-audio-player-about>
  </rh-audio-player>
  <figcaption>Full player with content panel visible</figcaption>
</figure>
<figure>
  <rh-audio-player expanded
                   lang="en-US"
                   layout="compact"
                   mediaseries="Code Comments"
                   mediatitle="Challenges in solutions engineering"
                   poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
    <rh-audio-player-about slot="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" height="220">
        <rect x="0" y="0" width="320" height="120" fill="#e0e0e0"/>
        <line x1="0" y1="0" x2="320" y2="120" stroke="#d0d0d0"/>
        <line x1="320" y1="0" x2="0" y2="120" stroke="#d0d0d0"/>
      </svg>
    </rh-audio-player-about>
  </rh-audio-player>
  <figcaption>Compact player with content panel visible</figcaption>
</figure>
<figure>
  <rh-audio-player expanded
                   lang="en-US"
                   layout="mini"
                   mediaseries="Code Comments"
                   mediatitle="Challenges in solutions engineering"
                   poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
    <rh-audio-player-about slot="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" height="220">
        <rect x="0" y="0" width="320" height="120" fill="#e0e0e0"/>
        <line x1="0" y1="0" x2="320" y2="120" stroke="#d0d0d0"/>
        <line x1="320" y1="0" x2="0" y2="120" stroke="#d0d0d0"/>
      </svg>
    </rh-audio-player-about>
  </rh-audio-player>
  <figcaption>Mini player with content panel visible</figcaption>
</figure>
{%- endsample %}


## Audio info
Displays the description and title in the Compact player only.

{% example palette="light",
          alt="Image of two Compact players; one is showing the description and title and the other is showing only the title",
          src="../audio-player-audio-info.png" %}



## Audio summary 
Provides users with a short summary of the audio clip. Optional attribution may be included if available.

{% alert title="Helpful tip" %}
When renaming this feature, the maximum character count is 20.
{% endalert %}


{% example palette="light",
          alt="Image of the Full and Compact players showing the Audio summary feature in the content panel",
          src="../audio-player-audio-summary.png" %}

## Subscribe 
Provides users with links to various audio websites so they can subscribe.

{% example palette="light",
          alt="Image of the Full and Compact audio players showing the Subscribe feature in the content panel",
          src="../audio-player-subscribe.png" %}

## Transcript 
A transcript is an accessible alternative for users who are hard of hearing, deaf, or just want to read along.

{% example palette="light",
          alt="Image of the Full and Compact players showing the Transcript feature in the content panel",
          src="../audio-player-subscribe.png" %}

### Highlighting 
When audio is playing, the transcript scrolls automatically and words are highlighted as they are spoken. Users also have the option to scroll on their own or download the entire transcript.

{% example palette="light",
          alt="Image of the Full and Compact players showing a phrase being highlighting as it is spoken in the Transcript feature",
          src="../audio-player-transcript-highlighting.png" %}

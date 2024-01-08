<style>
.audio-player-layouts {
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

<script type="module">
  import '/assets/elements/uxdot-anatomy-sample.js';
</script>

## Style
The audio player is a collection of elements used to play audio clips and browse [features](../features). There are also optional slots for an image and description text. The audio player must include the following elements **at a minimum**:
- Audio clip title
- Seek bar and clip times
- Unmute/mute button and volume control
- Playback controls (speed, rewind, play/pause, forward)
- Contextual menu

### Anatomy
{% example palette="light",
          alt="Image of audio player anatomy showing all players with lots of annotations",
          src="../audio-player-anatomy.png" %}

<uxdot-anatomy-sample>
  <rh-audio-player slot="element"
                   lang="en-US"
                   layout="full"
                   mediaseries="Code Comments"
                   mediatitle="Challenges in solutions engineering"
                   poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <rh-audio-player-about slot="about"></rh-audio-player-about>
    <audio crossorigin="anonymous"
           slot="media"
           controls>
      <source type="audio/mp3"
              srclang="en"
              src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3">
    </audio>
    <rh-audio-player-subscribe slot="subscribe"></rh-audio-player-subscribe>
    <rh-transcript slot="transcript"></rh-transcript>
  </rh-audio-player>
  <rh-badge number="1" data-shadow-selector="#poster img"></rh-badge>
</uxdot-anatomy-sample>

1) Image
2) Description
3) Title
  a. Elapsed time
  b. Total time
5) Current time/seek bar
6) Unmute/mute button
7) Volume level
8) Playback speed
9) Rewind
10) Play/pause
11) Forward
12) Contextual menu
{.example-notes}

## Sizes
There are three available sizes and the only difference is the amount of interface elements. The Compact and Mini players can be used on large breakpoints, but the Full player cannot be used on small breakpoints due to space constraints.

{% sample class="audio-player-layouts",
          code="hidden",
          columns=2 -%}
<figure class="full">
  <rh-audio-player lang="en-US"
                   layout="full"
                   mediaseries="Code Comments"
                   mediatitle="Challenges in solutions engineering"
                   poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
  </rh-audio-player>
  <figcaption>Full size</figcaption>
</figure>

<figure class="full">
  <rh-audio-player lang="en-US"
                   layout="compact"
                   mediaseries="Code Comments"
                   mediatitle="Challenges in solutions engineering"
                   poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
  </rh-audio-player>
  <figcaption>Compact size</figcaption>
</figure>

<figure>
  <rh-audio-player lang="en-US"
                   layout="mini"
                   mediaseries="Code Comments"
                   mediatitle="Challenges in solutions engineering"
                   poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
  </rh-audio-player>
  <figcaption>Mini size - with contextual menu</figcaption>
</figure>

<figure>
  <rh-audio-player lang="en-US" layout="mini">
    <audio crossorigin="anonymous"
           slot="media"
           src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
  </rh-audio-player>
  <figcaption>Mini size - no contextual menu</figcaption>
</figure>
{%- endsample %}

## Theme
The audio player is available in both light and dark themes.

{% sample class="audio-player-layouts",
          code="hidden",
          columns=2 -%}
<rh-audio-player class="full"
                 lang="en-US"
                 layout="full"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player class="full"
                 lang="en-US"
                 layout="compact"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player lang="en-US"
                 layout="mini"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player lang="en-US" layout="mini">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
{%- endsample %}


### Dark theme
{% sample class="audio-player-layouts",
          code="hidden",
          columns=2,
          colorPalette="darkest" -%}
<rh-audio-player class="full"
                 lang="en-US"
                 layout="full"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player class="full"
                 lang="en-US"
                 layout="compact"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player lang="en-US"
                 layout="mini"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player lang="en-US" layout="mini">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
{%- endsample %}

### Custom theme
{% alert title="Helpful tip" %}
If your audio player requires a custom theme, [contact](https://github.com/orgs/RedHat-UX/discussions) the design system team.
{% endalert %}

{% sample class="audio-player-layouts custom",
          code="hidden",
          columns=2,
          colorPalette="darkest" -%}
<rh-audio-player class="full"
                 lang="en-US"
                 layout="full"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player class="full"
                 lang="en-US"
                 layout="compact"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player lang="en-US"
                 layout="mini"
                 mediaseries="Code Comments"
                 mediatitle="Challenges in solutions engineering"
                 poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
<rh-audio-player lang="en-US" layout="mini">
  <audio crossorigin="anonymous"
         slot="media"
         src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3"></audio>
</rh-audio-player>
{%- endsample %}

## Configuration
The size of audio players change if an image is included or not.

{% example palette="light",
          alt="Image of all audio players showing various specs like alignment, border radius, height, width, and more",
          src="../audio-player-configuration.png" %}

## Space
The amount of space in all audio players remains the same on all breakpoints.

{% example palette="light",
          alt="Image of audio player spacing for all sizes",
          src="../audio-player-space.png" %}

{% spacerTokensTable 
    caption='',
    headingLevel="3",
    tokens="--rh-space-md, --rh-space-lg, --rh-space-xl, --rh-space-2xl" %}
{% endspacerTokensTable %}


## Interaction states
Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover
{% alert title="Helpful tip" %}
Every interactive element includes a tooltip as part of the Hover state. To learn more, go to the [Accessibility](../accessibility) page.
{% endalert %}

{% example palette="light",
          alt="Image of light theme audio player hover states",
          src="../audio-player-interaction-state-hover-theme-light.png" %}


{% example palette="darkest",
          alt="Image of dark theme audio player hover states",
          src="../audio-player-interaction-state-hover-theme-dark.png" %}

### Focus
{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}


{% example palette="light",
          alt="Image of light theme audio player focus states",
          src="../audio-player-interaction-state-focus-theme-light.png" %}

{% example palette="darkest",
          alt="Image of dark theme audio player focus states",
          src="../audio-player-interaction-state-focus-theme-dark.png" %}


### Active
{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}


{% example palette="light",
          alt="Image of light theme audio player active states",
          src="../audio-player-interaction-state-active-theme-light.png" %}


{% example palette="darkest",
          alt="Image of dark theme audio player active states",
          src="../audio-player-interaction-state-active-theme-dark.png" %}


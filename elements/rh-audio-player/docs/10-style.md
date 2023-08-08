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

{% example palette="light",
          alt="Image of all audio player sizes with text labels",
          src="../audio-player-style-sizes.png" %}

## Theme
The audio player is available in both light and dark themes.

### Light theme
{% example palette="light",
          alt="Image of light theme audio players",
          src="../audio-player-theme-light.png" %}

### Dark theme
{% example palette="darkest",
          alt="Image of dark theme audio players",
          src="../audio-player-theme-dark.png" %}

### Custom theme
{% alert title="Helpful tip" %}
If your audio player requires a custom theme, [contact](https://github.com/orgs/RedHat-UX/discussions) the design system team.
{% endalert %}


{% example palette="darkest",
          alt="Image of custom theme audio players",
          src="../audio-player-theme-custom.png" %}

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


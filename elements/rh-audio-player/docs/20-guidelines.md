{% section %}
  ## Usage

  An audio player gives users an easy way to listen to audio clips in the browser.

  ### Layout

  An audio player can be used in any layout. For example, it can be grouped 
  with text or other elements. It can span the same amount of grid columns as 
  the text around it for a more cohesive grouping.

  {% example palette="light",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-2xl);",
             alt="Example of audio player in a layout",
             src="../audioplayer-usage-1.svg" %}

  {% example palette="light",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Example of audio player in a layout",
             src="../audioplayer-usage-2.svg" %}
{% endsection %}

{% section %}
  ## Best practices

  Don’t place a dark theme audio player in a light environment.

  {% example palette="wrong",
             class="inline-flex centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Dark themed audio player in a light environment",
             src="../audioplayer-bestpractice-1.svg" %}
{% endsection %}

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
  ## Behavior

  ### Accessibility

  For better accessibility, a user can control an audio player with their keyboard.

  - When the play or pause button is focused, pressing *Space* or *Enter* will 
    play or pause the audio.
  - When the progress bar is focused, pressing the left or right arrows will 
    rewind or advance the audio by 10 seconds after each press.
  - When the volume icon is focused, pressing the up or down keys will 
    increase or lower the volume by 10% after each press.
      - When the volume icon is focused, pressing Space or Enter will mute the 
        volume.
  - When the gear icon is focused, pressing Space or Enter makes the playback 
    speed tooltip appear.
      - Pressing *Tab* and the arrow keys after that scrolls through playback 
        speed options.
      - Pressing Enter or Space after that confirms a new playback speed.

  ### Autoplay

  When a page loads, an audio player should never play audio automatically, it 
  should always wait for user input before playing anything.

  ### Volume

  When a page loads, an audio player can display a full volume and not be muted, 
  but the audio should never play automatically.

  ### Controls

  The playback controls change states as a user interacts with them. For 
  example, when a user mutes the volume, the icon will change to display a muted 
  icon instead.

  ### Timecode

  A timecode indicates how much time has elapsed since the audio started 
  playing. There’s a timecode in the form of text next to the progress bar that 
  updates as audio plays. If a user wants to find a specific timecode, they can 
  hover over the progress bar as audio plays. A small tooltip appears above the 
  progress bar displaying the precise timecode, depending on where a user’s 
  cursor is.

  {% example palette="light",
             class="inline-flex centered",
             width=555,
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip showing timecode on an audio player",
             src="../audioplayer-behavior-1.svg" %}
{% endsection %}

{% section %}
  ## Interaction states

  Only the playback controls have interaction states.

  ### Default

  {% example palette="light",
             class="inline-flex centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing default interaction state in a light theme",
             src="../audioplayer-interaction-1.svg" %}

  {% example palette="darkest",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing default interaction state in a dark theme",
             src="../audioplayer-interaction-2.svg" %}

  ### Focus

  {% example palette="light",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing focus states in a light theme",
             src="../audioplayer-interaction-3.svg" %}

  {% example palette="darkest",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing focus states in a dark theme",
             src="../audioplayer-interaction-4.svg" %}

  ### Hover

  {% example palette="light",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing hover states in a light theme",
             src="../audioplayer-interaction-5.svg" %}

  {% example palette="darkest",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing hover states in a dark theme",
             src="../audioplayer-interaction-6.svg" %}

  ### Active

  {% example palette="light",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing active states in a light theme",
             src="../audioplayer-interaction-7.svg" %}

  {% example palette="darkest",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player showing hover states in a dark theme",
             src="../audioplayer-interaction-8.svg" %}

{% endsection %}


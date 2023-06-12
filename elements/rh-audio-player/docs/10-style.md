
## Style
  An audio player can be used in light and dark themes. It consists of controls 
  used to customize a user’s listening experience. A [Tooltip]({{ '.../tooltip' | 
  url }}) is also included if a user wants to identify a specific timecode on 
  the progress bar.

  {% example palette="light",
             class="centered",
             width=590,
             style="margin-block:var(--rh-space-2xl);",
             alt="Anatomy of an audio player",
             src="../audioplayer-style-1.svg" %}


## Theme

  {% example palette="light",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-2xl);",
             alt="Example of audio player in a light theme",
             src="../audioplayer-theme-1.svg" %}

  {% example palette="darkest",
             class="centered",
             width=555,
             style="margin-block:var(--rh-space-md);",
             alt="{{ '../audioplayer-theme-2.svg' | url }}",
             src="../audioplayer-theme-2.svg" %}


## Responsive design
  An audio player works well on both large and small screens.

### Breakpoints
  An audio player can be used on smaller screens. The progress bar shrinks as 
  space reduces, but the rest of the controls stay in the same position and 
  maintain the same spacing.

### Desktop
  ![Audio player on desktop]({{ '../audioplayer-responsive-1.svg' | url 
  }}){style="margin-block:var(--rh-space-md);"}

### Tablet
  ![Audio player on tablet]({{ '../audioplayer-responsive-2.svg' | url 
  }}){style="--inline-img-max-width:768px;margin-block:var(--rh-space-md);"}

### Mobile
  ![Audio player on mobile]({{ '../audioplayer-responsive-3.svg' | url 
  }}){style="--inline-img-max-width:360px;margin-block:var(--rh-space-md);"}


## Spacing
  An audio player uses [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
  values between elements.

  {% example palette="light",
             class="inline-flex centered",
             width=490,
             style="margin-block:var(--rh-space-md);",
             alt="Audio player with spacers",
             src="../audioplayer-spacing-1.svg" %}


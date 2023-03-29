{% section %}
  ## Style

  Progress steps contain **at least three** step indicators. They are positioned 
  on a thin horizontal or vertical line and organized sequentially from left to 
  right or top to bottom.

  {% example palette="lightest",
             width=699,
             alt="Progress steps component blueprint",
             src="../progress-steps-blueprint.svg" %}

  ### Visual elements

  Progress steps display circles or icons that indicate where a user is in the 
  completion process. The appearance of these states change as a user moves 
  through each step of the task.

  - **Finished step** - A green circle with a check mark indicates a user has 
    completed a previous step.
  - **Current step** - A bright red circle with a pink border indicates a user 
    is viewing or completing the current step.
  - **Error step** - A dark red circle with an exclamation mark indicates there 
    is an issue a user should be aware of.
  - **Next or Final step** - A white circle with a light gray border indicates 
    the next or final step has not been visited yet.
  - **Progress bar** - A dark gray bar in between Finished and Current steps 
    indicates how much progress a user has made.

  {% example palette="lightest",
             width=385,
             alt="Progress steps component visual elements",
             src="../progress-steps-visual-elements.svg" %}

  ### Text labels

  Every step must have a text label indicating what a user has and will 
  accomplish. Each text label should be written clearly and use ideally 
  **one word** to avoid crowding. If two words need to be used, set 
  them in **Sentence case** only.

  {% alert title="Helpful tip" %}
    Always try to write text labels as short as possible. If there are more than 
    three steps, reduce the amount of characters.
  {% endalert %}

  {% example palette="lightest",
             width=687,
             alt="Progress steps component text labels",
             src="../progress-steps-text-labels.svg" %}
{% endsection %}

{% section %}
  ## Orientation

  ### Horizontal

  The Horizontal orientation can be stretched or squeezed to fit different 
  desktop or tablet layouts, it can also be used on mobile if there are fewer 
  steps with short text labels.

  {% alert state="warning", title="Warning" %}
    Do not write text labels with **more than two words** as space 
    can become crowded when breakpoints get smaller or when text is translated.
  {% endalert %}

  {% example palette="lightest",
             width=687,
             alt="Progress steps component horizontal orientation",
             src="../progress-steps-horizontal-orientation.svg" %}

  ### Vertical

  The Vertical orientation can be used on desktop or tablet if the content 
  within needs to be positioned on the right instead of underneath. It can also 
  be used on mobile if the horizontal orientation has more steps or text labels 
  with more words.

  {% alert state="warning", title="Warning" %}
    Do not write text labels with **more than two words** as space can become 
    crowded when breakpoints get smaller or when text is translated.
  {% endalert %}

  {% example palette="lightest",
             width=872,
             alt="Progress steps component vertical orientation",
             src="../progress-steps-vertical-orientation.svg" %}
{% endsection %}

{% section %}
  ## Responsive design

  Progress steps mostly remain the same on large and small screens. When the 
  horizontal orientation becomes crowded, it will switch to the vertical 
  orientation.

  ### Desktop

  ![Progress steps component responsive design, desktop]({{ 
  '../progress-steps-responsive-desktop.svg' | url }}){}

  ### Tablet

  ![Progress steps component responsive design, tablet]({{ 
  '../progress-steps-responsive-tablet.svg' | url 
  }}){style="--inline-img-max-width:768px;"}

  ### Mobile

  ![Progress steps component responsive design, mobile]({{ 
  '../progress-steps-responsive-mobile.svg' | url }}){style=}
{% endsection %}

{% section %}
  ## Spacing

  Progress steps use [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers){target="_blank"} 
  to define spacing values between elements.

  {% example palette="lightest",
             width=687,
             alt="Progress steps component spacing",
             src="../progress-steps-spacing.svg" %}
{% endsection %}


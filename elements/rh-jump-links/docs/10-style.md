{% section %}
  ## Style

  Jump links are fixed on the page and follow a user as they scroll. It moves 
  them to a section of content when the corresponding link is selected. It looks 
  visually similar to <a href=".../tabs">Open tabs</a>, the only difference is 
  the uppercase label on top.

  {% example palette="light",
             width=537,
             class="inline-flex centered",
             alt="Jump links specs",
             src="../jump-links-style.svg" %}

  ### Theme

  {% example palette="light",
             width=385,
             class="inline-flex centered",
             alt="Jump links theme light",
             src="../jump-links-theme-light.svg" %}

  {% example palette="darkest",
             width=385,
             class="inline-flex centered",
             alt="Jump links theme dark",
             src="../jump-links-theme-dark.svg" %}

  ### Label
  Jump links display a label at the top indicating there are section links that 
  a user can select. This label isn’t interactive.

  ### Section links
  Jump links feature links that float to the right of an anchor line, they 
  represent the different sections that are available to select.

  ### Nested section links
  Sections that contain lots of content can be broken into nested sections for 
  better organization and hierarchy. Nested section links are positioned under 
  their parent section link and indented slightly. There are guidelines about 
  how many section links can be included, but no guidelines about how many 
  nested section links can be included.

  {% example palette="light",
             width=129,
             class="inline-flex centered",
             alt="Jump links nested section",
             src="../jump-links-nested.svg" %}

  ### Active indicator bar
  A red indicator bar highlights what the active section is. It’s positioned on 
  top of the anchor line, not adjacent.

  {% example palette="light",
             width=206,
             class="inline-flex centered",
             alt="Jump links active indicator bar",
             src="../jump-links-indicator.svg" %}
{% endsection %}

{% section %}
  ## Responsive design
  Jump links can be used on all screen sizes.

  ### Breakpoints
  Jump links are displayed in layout on large screens, but on small screens it’s 
  wrapped in a disclosure which is collapsed until a user expands the panel.

  ### Desktop

  <figure>
    <img src="{{ '../jump-links-responsive-desktop.svg' | url }}" alt="Jump links on desktop" style="">
    <figcaption class="footnote">
      On large screens, jump links are displayed in the layout
    </figcaption>
  </figure>

  ### Tablet

  <figure>
    <img src="{{ '../jump-links-responsive-tablet.svg' | url }}" alt="Jump links on tablet" style="--inline-img-max-width:768px;">
    <figcaption class="footnote">
      Section links reduce in width as breakpoints get smaller
    </figcaption>
  </figure>

  ### Mobile
  <figure>
    <img src="{{ '../jump-links-responsive-mobile.svg' | url }}" alt="Jump links on mobile" style="--inline-img-max-width:360px;">
    <figcaption class="footnote">
      On small screens, jump links are wrapped in a collapsed disclosure
    </figcaption>
  </figure>
{% endsection %}

{% section %}
  ## Spacing

  Jump links use [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define 
  spacing values between elements.

  {% example palette="light",
             width=385,
             class="inline-flex centered",
             alt="Jump links spacing on desktop",
             src="../jump-links-spacing.svg" %}

  {% example palette="light",
             width=872,
             class="inline-flex centered",
             alt="Jump links spacing on mobile",
             src="../jump-links-spacing-2.svg" %}
{% endsection %}


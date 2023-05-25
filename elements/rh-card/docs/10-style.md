{% section %}
  ## Style
  Cards can be used in light and dark themes. They act as a blank canvas where 
  elements and styles can be placed inside.

  {% example palette="light",
             class="inline-flex centered",
             width=599,
             style="margin-block:var(--rh-space-2xl);",
             alt="A breakdown of the parts of a card",
             src="../card-style.svg" %}
{% endsection %}

{% section %}
  ## Theme

  {% example palette="light",
             class="inline-flex centered",
             width=784,
             alt="Card in light theme",
             src="../card-theme-light.svg" %}

  {% example palette="darkest",
             class="inline-flex centered",
             width=784,
             alt="Card in dark theme",
             src="../card-theme-dark.svg" %}

  ### Color
  Cards are secondary layouts that shouldn’t command too much attention and 
  blend in with whatever background they’re placed on. The card container is the 
  only required element and it consists of a background color and rounded 
  corners. A thin border is required if the card background is the same color as 
  the background it's placed on.

  <div class="multi-column--min-400-wide margin-top--4">
    <figure>
      {% example palette="light",
                 class="centered",
                 width=242,
                 alt="White card colors",
                 src="../card-color-light-white.svg" %}
      <figcaption class="footnote">
        A white card with a light gray border is the most common use case in the 
        light theme
      </figcaption>
    </figure>
    <figure>
      {% example palette="light",
                 class="centered",
                 width=242,
                 alt="Gray card colors",
                 src="../card-color-light-gray.svg" %}
      <figcaption class="footnote">
        A light gray card without a border can also be used as an alternate 
        option
      </figcaption>
    </figure>
    <figure>
      {% example palette="darkest",
                 class="centered",
                 width=242,
                 alt="Black card colors",
                 src="../card-color-dark-black.svg" %}
      <figcaption class="footnote">
        A black card with a dark gray border is the most common use case in the 
        dark theme
      </figcaption>
    </figure>
    <figure>
      {% example palette="darkest",
                 class="centered",
                 width=242,
                 alt="Dark theme gray card colors",
                 src="../card-color-dark-gray.svg" %}
     <figcaption class="footnote">
       A dark gray card without a border can also be used as an alternate option
     </figcaption>
    </figure>
  </div>

  ### Layout
  A card features header, body, and footer sections. Those sections should 
  include a limited amount of content to ensure that the card doesn’t become too 
  tall.

  <div class="multi-column--min-400-wide">
    {% example palette="light",
               class="centered",
               width=360,
               alt="Example of a card layout",
               src="../card-layout-1.svg" %}
    {% example palette="light",
               class="centered",
               width=360,
               alt="Anatomy of a card layout",
               src="../card-layout-2.svg" %}
  </div>

  ### Header
  The header section is required, it introduces what the content is and 
  shouldn’t be hidden.

  ### Body
  The body section can include a headline, text, an icon, or sometimes an image. 
  The body section describes the content in more detail and shouldn’t be hidden.

  ### Footer
  The footer section can include normal links or a call to action. It can be 
  hidden if necessary if there’s content included where a user can take an 
  action.
{% endsection %}

{% section %}
  ## Responsive design

  ### Breakpoints
  Cards will get thinner or move below each other on smaller screens.

  ### Large screens
  {% example 
      palette="light",
      width=784,
      alt="Card layout on desktop",
      src="../card-layout-desktop.svg"
  %}

  ### Small screens
  {% example 
      palette="light",
      width=360,
      alt="Card layout on mobile",
      src="../card-layout-mobile.svg"
  %}
{% endsection %}

{% section %}
  ## Spacing

  Cards use [PatternFly 4 
  spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
  values between elements.

  ### Container padding
  Container padding defines how far away content is from the edges of the 
  component. When cards become wider, the container padding increases. When they 
  become thinner, the container padding decreases. See more examples <a 
  href="https://xd.adobe.com/view/a337ad48-4c5a-4e75-aec1-cc0cfe52098d-f664/">here</a>.

  ### Desktop
  {% example palette="light",
             class="centered",
             width=360,
             alt="Card spacing on desktop",
             src="../card-spacing-desktop.svg" %}

  ### Mobile
  {% example palette="light",
             class="inline-flex centered",
             width=360,
             alt="Card spacing on mobile",
             src="../card-spacing-mobile.svg" %}
{% endsection %}


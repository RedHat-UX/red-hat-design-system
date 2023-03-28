Tabs are used for navigating between sections of content in a contained view 
while staying on the same page. Tabs aren't an optimal component for comparing 
content simultaneously, use an Accordion instead.

## Navigation

Navigating through each section should display different blocks of content, 
but not direct users to another page, unless they select a link in the content 
area.

## Label formatting

Section text labels should be written concisely and be representative of the 
content within. Be mindful of lengthy character counts and how they can impact 
the appearance of both variants, especially on smaller screens or if they're 
translated.

## Content area

A content panel is located below or to the right of the component, depending 
on horizontal or vertical orientation. It may contain the same elements that can 
also be used in other sections of the page, like text, cards, images, etc. Text 
shouldn’t exceed eight grid columns to maintain optimal readability.

<div class="margin-top--4 inline-stacked margin-bottom--4">
  <img src="{{ '../tabs-usage-content-desktop.svg' | url }}" alt="Aligning content in tabs">
  <img src="{{ '../tabs-usage-content-overflow.svg' | url }}" alt="Aligning content in tabs" style="--inline-img-max-width: 708px;">
  <img src="{{ '../tabs-usage-content-vertical.svg' | url }}" alt="Aligning content in tabs">
</div>

<hr style="margin-block:var(--rh-space-lg) var(--rh-space-5xl);">

{% section %}
  ## Best practices
  Tabs require at least two sections be available for users to navigate 
  through.

  {% example palette="wrong",
             width=872,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tab issue, not enough labels",
             src="../tabs-best-practices-1.svg" %}

  Don’t use more than five section text labels in the horizontal 
  orientation.

  {% example palette="wrong",
             width=872,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tab issue, too many labels",
             src="../tabs-best-practices-2.svg" %}

  Don’t add extra spacing in between section text labels.

  {% example palette="wrong",
             width=872,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tab issue, extra spacing",
             src="../tabs-best-practices-3.svg" %}

  Don’t change the alignment of section text label groups.

  {% example palette="wrong",
             width=872,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tab issue, wrong alignment",
             src="../tabs-best-practices-4.svg" %}
{% endsection %}


{% section %}
  ## Behavior
  ### Section text labels
  When a different section is clicked on or tapped, the active indicator bar 
  highlights the chosen section and the content below or to the right of the 
  component changes at the same time.

  ### Overflow scroll buttons
  Overflow scroll buttons can only be used in the horizontal orientation. They 
  help users view any section text labels that are cut off. Don’t use lengthy or 
  too many section text labels and be mindful of how they can impact the 
  appearance of tabs, especially on smaller screens or if they’re translated.

  <div class="multi-column--min-400-wide">
    {% example palette="lightest",
               width=708,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="Overflow scroll buttons",
               src="../tabs-behavior-overflow.svg" %}

    Overflow scroll buttons will appear if the number of section text labels 
    exceeds the width of either horizontal variant {.footnote}

  </div>

  ### Responsive design
  Default avatars with text can be used on desktop and mobile. If text that's 
  positioned on the right becomes too compressed, it will flow under and its 
  alignment will change to centered. On mobile, Default avatars with text always 
  stack vertically.

  ### Mobile
  Tabs can’t be used on screens that are less than 576px wide because the 
  limited space will cause too many section text labels to get cut off. In this 
  environment, tabs will convert to an accordion.

  <div class="multi-column--min-300-wide">
    {% example palette="light",
               width=340,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="Overflow scroll buttons wrong",
               src="../tabs-behavior-overflow-mobile-wrong.svg" %}
    {% example palette="light",
               width=340,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="Overflow scroll buttons accordion",
               src="../tabs-behavior-overflow-mobile-right.svg" %}
  </div>

{% endsection %}

{% section %}
  ## Interaction states
  The interaction states in the horizontal orientation are the same as the 
  vertical orientation of the same variant. View the live components below to 
  experience their various interaction states.

  ## Open tabs
  <rh-tabs variant="wind">
    <rh-tab slot="tab">Consequat nisi</rh-tab>
    <rh-tab-panel slot="panel">
      <h4>Tab heading 1</h4>
      <p>Mi ut adipiscing nec porttitor a dis tempor mauris maecenas 
      ullamcorper nisi vulputate mus massa augue et parturient felis luctus 
      adipiscing.Vivamus suspendisse fringilla a dictum justo diam vestibulum 
      et mollis magna mus natoque a potenti nam.</p>
      <rh-cta>
        <a href="#">Learn more</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Minim elit</rh-tab>
    <rh-tab-panel slot="panel">
      <h4>Tab heading 2</h4>
      <p>Fugiat ullamco qui occaecat Lorem qui pariatur quis cillum. Duis 
      commodo dolor ad anim cillum. Incididunt elit ullamco in laborum in. 
      Dolor ipsum laborum nisi exercitation do aute velit. Elit veniam velit 
      qui ex ullamco.</p>
      <rh-cta>
        <a href="#">Get started</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Officia duis</rh-tab>
    <rh-tab-panel slot="panel">
      <h4>Tab heading 3</h4>
      <p>Erat malesuada a nisl ornare nam per urna in nam conubia vulputate 
      ullamcorper felis vestibulum leo massa massa tincidunt adipiscing 
      porttitor cubilia mattis semper ultrices felis habitasse a semper 
      a.Condimentum ridiculus nisl ullamcorper adipiscing natoque adipiscing 
      quam litora a suspendisse a torquent tincidunt diam ornare at.</p>
      <rh-cta>
        <a href="#">View the info</a>
      </rh-cta>
    </rh-tab-panel>
  </rh-tabs>

  ## Box tabs
  <rh-tabs variant="earth">
    <rh-tab slot="tab">Consequat nisi</rh-tab>
    <rh-tab-panel slot="panel">
      <h4>Tab heading 1</h4>
      <p>Mi ut adipiscing nec porttitor a dis tempor mauris maecenas ullamcorper 
      nisi vulputate mus massa augue et parturient felis luctus 
      adipiscing.Vivamus suspendisse fringilla a dictum justo diam vestibulum et 
      mollis magna mus natoque a potenti nam.</p>
      <rh-cta>
        <a href="#">Learn more</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Minim elit</rh-tab>
    <rh-tab-panel slot="panel">
      <h4>Tab heading 2</h4>
      <p>Fugiat ullamco qui occaecat Lorem qui pariatur quis cillum. Duis 
      commodo dolor ad anim cillum. Incididunt elit ullamco in laborum in. Dolor 
      ipsum laborum nisi exercitation do aute velit. Elit veniam velit qui ex 
      ullamco.</p>
      <rh-cta>
        <a href="#">Get started</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Officia duis</rh-tab>
    <rh-tab-panel slot="panel">
      <h4>Tab heading 3</h4>
      <p>Erat malesuada a nisl ornare nam per urna in nam conubia vulputate 
      ullamcorper felis vestibulum leo massa massa tincidunt adipiscing 
      porttitor cubilia mattis semper ultrices felis habitasse a semper 
      a.Condimentum ridiculus nisl ullamcorper adipiscing natoque adipiscing 
      quam litora a suspendisse a torquent tincidunt diam ornare at.</p>
      <rh-cta>
        <a href="#">View the info</a>
      </rh-cta>
    </rh-tab-panel>
  </rh-tabs>

  ## Tab order
  When the Tab key is pressed repeatedly, the focus indicator highlights each 
  section text label from left to right in the horizontal component or from top 
  to bottom in the vertical component.

  {% example palette="light",
             width=872,
             class="centered",
             style="margin-block:var(--rh-space-md);",
             alt="Tabs tab order",
             src="../tabs-interaction-states.svg" %}
{% endsection %}


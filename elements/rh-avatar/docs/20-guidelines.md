{% section %}
## Usage

An avatar is a subtle placeholder graphic used in the absence of a photo or 
image. When a user does not provide their own photo or image, an avatar is used 
instead.

### Text options

Text options can be placed to the right or under an avatar. For example, a 
name can be placed on one line and their job information on the second line. 
Always group an avatar with text, attribution, or some other kind of descriptor 
text. Never use it by itself, unless absolutely necessary in the right context, 
like in the navigation.

<div class="multi-column--min-300-wide">
  {% example palette="light",
             width=239,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="An avatar in a light theme with text placed to the right",
             src="../avatar-usage-1.svg" %}
  {% example palette="darkest",
             width=160,
             class="centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="An avatar in a dark theme with text placed below the image",
             src="../avatar-usage-2.svg" %}
</div>


### Layout {style="margin-block-start:var(--rh-space-2xl);"}
An avatar can be used in containers or layouts. They can be stacked 
vertically (or horizontally) depending on the amount of people and the container 
size.

{% example palette="light",
           width=543,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Example of two avatars aligned horizontally",
           src="../avatar-usage-3.svg" %}

{% endsection %}

{% section %}
## Best practices

An avatar should not be used without text unless absolutely necessary in the 
right context, like in the navigation.

{% example palette="wrong",
           width=192,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Two avatars placed side-by-side",
           src="../avatar-bestpractice-1.svg" %}

Do not use a dark theme avatar in the light theme.

{% example palette="wrong",
           width=239,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="A light theme avatar placed in dark theme",
           src="../avatar-bestpractice-2.svg" %}


Do not include job information on the same line as a name, break it to the 
second line.

{% example palette="wrong",
           width=286,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Example of an avatar with job information and name on the same line",
           src="../avatar-bestpractice-3.svg" %}

Do not allow vertically-aligned attribution or a descriptor become too 
compressed, otherwise change to horizontal alignment.

{% example palette="wrong",
           width=180,
           class="centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="An avatar with a descriptor and attribution that wraps to four lines",
           src="../avatar-bestpractice-4.svg" %}

{% endsection %}

{% section %}
## Behavior

### Vertical vs. top alignment

If the height of text exceeds the height of an avatar, it becomes aligned to the 
top edge instead.

<div class="multi-column--min-300-wide">
  <div>
    {% example palette="light",
               width=281,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="An avatar with short text, vertically aligned",
               src="../avatar-behavior-1.svg" %}
    <p class="footnote">Attribution or descriptor text vertically-aligned</p>
  </div>
  <div>
    {% example palette="light",
               width=281,
               class="centered",
               style="margin-block:var(--rh-space-2xl);",
               alt="An avatar with longer text aligned to the top",
               src="../avatar-behavior-2.svg" %}
    <p class="footnote">Attribution or descriptor text aligned to the top 
    edge</p>
  </div>
</div>

### Responsive design

An avatar can be used with text on desktop and mobile. If text that is 
positioned on the right becomes too compressed, it will flow under and its 
alignment will change to centered. On mobile, an avatar with text always stack 
vertically.

{% endsection %}

{% section %}

## Interaction states
Sometimes a company name in attribution text can link out to their website. 
Refer to the specific interaction states that are assigned to Link for more 
information. Otherwise, there are no other interaction states.

{% endsection %}

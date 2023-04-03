A button is used to perform an action, like Submit or Delete, depending on the 
style. For example, use the Primary style to submit a form or the Danger style 
to delete something.

## Action vs. navigation
Use a button only to perform an action and use a Call to action as a 
navigational element, like a link.

## Text labels
Button text labels are written differently than call to action text labels. 
Button text labels should be short and clearly describe what the action is 
when triggered, like Download if a user wants to download something.

{% example palette="light",
           width=462,
           class="inline-flex centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Button text labels",
           src="../button-text-labels.svg" %}

## Disabled state
Most styles will appear disabled if an action is unavailable or if a task 
needs to be completed first.

{% example palette="light",
           width=417,
           class="inline-flex centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Button disabled",
           src="../button-disabled.svg" %}

## Hierarchy
Buttons are ordered by hierarchy from left to right or sometimes top to 
bottom. Some styles can be used multiple times in the same area except for the 
Danger, Primary, Search, Play, and Close styles.

{% example palette="light",
           width=814,
           class="inline-flex centered",
           style="margin-block:var(--rh-space-2xl);",
           alt="Button hierarchy",
           src="../button-hierarchy.svg" %}

## Grouping
Buttons can be grouped together by hierarchy from left to right or from top to 
bottom.Buttons can be used in modals. The Link style can be used to the right of 
the Primary style to create greater visual hierarchy in between the two 
buttons.

<div style="margin-block:var(--rh-space-md);" class="multi-column--min-400-wide">
  {% example palette="light",
             width=239,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Button grouping",
             src="../button-grouping-1.svg" %}
  {% example palette="light",
             width=126,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Button grouping primary",
             src="../button-grouping-2.svg" %}
</div>

## Modal
Buttons can be used in modals. The Link style can be used to the right of the 
Primary style to create greater visual hierarchy in between the two buttons.

![Button in modal]({{ '../button-modal.svg' | url }})

{% section %}
  ## Best practices
  Don't write button text labels that are too expressive or ambiguous.

  {% example palette="wrong",
             width=363,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Button label problems",
             src="../button-bestpractice-1.svg" %}

  Don't use multiple Primary styles in the same area, that style is reserved to 
  represent the one most important action.

  {% example palette="wrong",
             width=274,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Multiple primary buttons issue",
             src="../button-bestpractice-2.svg" %}

  Don’t use buttons to represent links. Use calls to action instead.

  {% example palette="wrong",
             width=553,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Buttons vs calls to action",
             src="../button-bestpractice-3.svg" %}
{% endsection %}

{% section %}
  ## Behavior

  ### Button vs. call to action
  A button performs an action whereas a call to action directs users to another 
  page or sometimes displays hidden content. For example, a call to action 
  shouldn’t be used to submit a form and a button shouldn’t be used as a link.

  A button can sometimes direct users to other pages, like being directed to a 
  confirmation page after a form is submitted, but that's the result of a 
  triggered action happening in the background. Buttons and calls to action can be 
  used in the same area as long as the styles are used properly and perform the 
  right functions.

  ### Responsive design
  Buttons maintain the same scale on desktop and mobile. If they stack, the 
  alignment changes to centered and the order of hierarchy changes to top to 
  bottom. If a button contains a background or a border, the text label stays 
  centered if it’s really long and if it breaks to two lines, which is rare.
{% endsection %}

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
  ## Interaction states
  All styles have interaction states except if some styles are disabled.
{% endsection %}


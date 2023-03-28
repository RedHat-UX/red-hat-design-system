{% section %}
  ## Usage

  ### Content

  Content in a tooltip is limited to text only and should be brief and helpful 
  to a user.

  {% alert state="warning", title="Warning" %}
    If content needs to be more thorough or interactive elements need to be 
    included, use a [Popover][popover]{target="_blank"} or 
    [Modal][modal]{target="_blank"} component instead.
  {% endalert %}

  ### Icon pairing

  A tooltip should always be paired with an icon, link, or other small element.

  {% example palette="light",
             width=574,
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component icon pairing",
             src="../tooltip-icon-pairing.svg" %}

  ### Orientations

  A tooltip is available in several orientations depending on the amount of 
  content or available screen space. When choosing an orientation, be mindful of 
  how a tooltip can potentially cover up important content or get cut off by the 
  browser window.

  {% example palette="light",
             width=692,
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component orientations",
             src="../tooltip-orientations.svg" %}
{% endsection %}

{% section %}
  ## Behavior

  How a user interacts with a tooltip depends on what size the screen is.

  - On large screens, a tooltip disappears after a user moves their cursor away 
    from the icon.
  - On large screens, a tooltip disappears after the focus indicator is moved 
    away from the icon.
  - On small screens, a tooltip disappears after a user taps the icon again.

  {% example palette="light",
             width=516,
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component behavior",
             src="../tooltip-behavior.svg" %}

{% endsection %}

{% section %}
  ## Interaction states

  A tooltip appears next to an icon on hover, focus, or when tapped.

  {% example palette="light",
             width=608,
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component interaction states, hovered or tapped",
             src="../tooltip-interaction-states.svg" %}
{% endsection %}

{% section %}
  ## Best practices

  ### Accessibility

  Do not use a dark theme (white) tooltip on a light environment because it will 
  blend into the background too much.

  {% example palette="wrong",
             width=264,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component best practice 1",
             src="../tooltip-best-practice-1.svg" %}

  ### Orientation

  Content within a tooltip should not be cut off by the browser window. Change 
  the tooltip orientation or break the text into multiple lines if it does.

  {% example palette="wrong",
             width=360,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component best practice 2",
             src="../tooltip-best-practice-2.svg" %}

  ### Pairing

  Do not add a tooltip to things that do not require further explanation, like 
  obvious links or components.

  {% example palette="wrong",
             width=186,
             class="inline-flex centered",
             style="margin-block:var(--rh-space-2xl);",
             alt="Tooltip component best practice 3",
             src="../tooltip-best-practice-3.svg" %}
{% endsection %}

[popover]: {{ '/components/popover' | url }}
[modal]: {{ '/components/modal' | url }}


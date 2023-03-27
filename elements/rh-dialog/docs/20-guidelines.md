Dialogs can be used when critical information requires immediate user attention 
or for hiding extra content that cannot be displayed due to layout constraints. 
Dialogs interrupt user workflows or hide secondary content by design, but should 
be used sparingly to limit user disruption.

## Size

Container heights and widths will shift responsively depending on the screen 
size and the amount of content that is included.

{% example palette="light",
           class="margin-bottom--4",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog size",
           src="/assets/dialog/dialog-style-video-player.svg" %}

{% example palette="light",
           class="inline-flex multi-column--500-wide",
           style="--inline-img-max-width:360p;margin-inline:auto;",
           alt="Dialog size mobile",
           src="/assets/dialog/dialog-style-size-mobile.svg" %}

## Content vs. video {style="margin-block-start:var(--rh-space-2xl);"}

Dialogs can either organize content that a user can interact with or they can 
display a large video that a user can watch. A content dialog can include 
smaller videos if they are placed inline with other elements whereas a video 
player dialog features one large video only.

<hr style="margin-block:var(--rh-space-lg) var(--rh-space-5xl);">

{% section %}
## Best Practices

Do not use other components inside of a content dialog container unless 
absolutely necessary.

{% example palette="wrong",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog content issue",
           src="/assets/dialog/dialog-best-practices-1.svg" %}

Do not display a video alone in a content dialog, use a video player dialog 
instead.

{% example palette="wrong",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog information issue",
           src="/assets/dialog/dialog-best-practices-2.svg" %}

Do not omit the close button from either dialog variant, it is needed for 
accessibility.

{% example palette="wrong",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog close missing issue",
           src="/assets/dialog/dialog-best-practices-3.svg" %}

{% endsection %}

{% section %}
## Behavior

### Accessibility

When shown, modal dialogs cover the entire page and browser window, so the 
ability to dismiss them quickly and easily with any input is required.

| Key            | State              | Interaction                                                                                                                              |
| -------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Space or Enter | Trigger is focused | Shows the modal dialog.                                                                                                                  |
| Space or Enter | Dialog is shown    | Triggers the focused interactive element or dismisses the dialog if the close button is focused.                                         |
| Tab            | Dialog is shown    | Focuses the next interactive element in the tab order until the close button is focused again. Focus may not leave the dialog container. |
| Esc            | Dialog is shown    | Dismisses a dialog without any further actions taking place.                                                                             |

### Close button

Both dialog variants require a close button which is the most direct way to 
dismiss a dialog. A user needs to actively dismiss a dialog, it should not close 
on its own.

### Overlay

A user can click on or tap anywhere in the background overlay to dismiss a 
dialog.

### Tab order

The close button is focused when a dialog appears and is therefore always the 
first interactive element in the tab order. When the Tab key is pressed 
repeatedly, the focus indicator moves off of the close button and any 
interactive elements below it are added to the tab order.

{% example palette="lightest",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog tab order",
           src="/assets/dialog/dialog-behavior-tab-order.svg" %}

{% endsection %}

{% section %}
## Interaction states

The interaction states in the content dialog and the video player dialog are 
slightly different.

{% endsection %}


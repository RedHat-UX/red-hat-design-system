## Guidelines

An alert is best used to notify a user of a change or attract their attention about other messages.

### Using an inline alert

An Inline alert is used to present a local message or return feedback as the result of a user action, like if a form is submitted with errors.

### Using a toast alert

A Toast alert is used to present a global message about an event, update, or confirmation, like the result of a user action that cannot be presented within a specific layout or component.

### Severity

Severity communicates the **urgency** of a message and is denoted by various styling configurations.

- **Default** - Indicates generic information or a message with no severity.
- **Info** - Indicates helpful information or a message with very little to no 
  severity.
- **Success** - Indicates a success state, like if a process was completed 
  without errors.
- **Warning** - Indicates a caution state, like a non-blocking error that might 
  need to be fixed.
- **Danger** - Indicates a danger state, like an error that is blocking a user 
  from completing a task.

{% alert title="Learn More" %}
Visit the [Color](/foundations/color.njk) foundation page to learn more about how to use colors 
for status and severity.
{% endalert %}

{% example palette="light",
           style="--example-img-max-width:728px",
           alt="Alert component severity",
           src="../alert-severity.svg" %}

### Dismissal

Alert variants have different rules regarding their ability to be dismissed by a user.

- Default, Info, and Success Inline alerts can be dismissed by a user selecting 
  the close button.
- Warning and Danger Inline alerts can be dismissed by a user resolving the 
  issues caused by the alert.
- All Toast alerts can be dismissed by a user selecting the close button or 
  waiting for them to time out.

{% alert state="warning" title="Warning" %}
If an issue cannot be resolved on the current page or if a user needs to correct a situation outside of the experience, use a [Dialog](../elements/rh-dialog/docs) instead.
{% endalert %}

{% example palette="light",
           class="medium",
           width=538,
           alt="Alert component dismissal examples",
           src="../alert-dismissal-examples.svg" %}

## Positioning

### Inline

An Inline alert can be placed toward the **top of a layout** if the 
message applies globally or **inline near specific content** if the 
message applies locally. Depending on where they are used, an Inline alert can 
span the width of a grid or container, so there is no set width.

{% example palette="light",
           class="medium",
           width=538,
           alt="Alert component positioning, inline (global)",
           src="../alert-positioning-inline-global.svg" %}

{% example palette="light",
           class="medium",
           width=538,
           alt="Alert component positioning, inline (local)",
           src="../alert-positioning-inline-local.svg" %}


### Toast

A Toast alert slides in from the top right edge of the screen and overlaps any 
content underneath. They can be set as **persistent** or **temporary** depending 
on the message that needs to be communicated to a user.

- **Persistent** - Set if the content will be relevant after a task is complete.
- **Temporary** - Set if the content will be be acknowledged and no 
  longer relevant.

If a Toast alert is set to persistent, a close button needs to be included so a 
user can dismiss the alert if desired.

![Toast alert component positioning, persistent][img-persistent] {.margin-top--4.margin-bottom--7}

If a Toast alert is set to be temporary or time out, the alert will disappear 
after **eight seconds**. A user might want to dismiss the alert before then, in 
which case a close button needs be included.

![Toast alert component positioning, temporary][img-temporary] {.margin-top--4.margin-bottom--4}

## Behavior

### Stacking

When multiple Toast alerts are triggered around the same time, they will stack 
on top of each other. The most recent alert is placed at the top of the stack 
and pushes the other alerts down. When stacked Toast alerts are dismissed by a 
user or time out, the remaining alerts will slide up and fill the empty space.

{% example palette="light",
           class="margin-top--4 margin-bottom--4",
           width=1000,
           alt="Alert component behavior, stack",
           src="../alert-behavior-stack-1.svg" %}

{% example palette="light",
           class="margin-top--4 margin-bottom--4",
           width=1000,
           alt="Alert component behavior, persistent",
           src="../alert-behavior-stack-2.svg" %}


## Responsive design

{% alert title="Helpful tip" %}
The maximum width of a Toast alert on large screens is **six grid columns**.
{% endalert %}

### Large screens

![Alert component responsive design, large screens][img-large-screens] {.margin-top--0.margin-bottom--7}

### Small screens

On small screens, both alert variants will span the full column of the layout. 
Toast alerts will continue to stack on top of each other, so be mindful of how 
much vertical space the group will occupy if multiple Toast alerts need to be 
displayed.

![Alert component sample][img-small-screens]{style="--inline-img-max-width:360px;"}


## Best practices

### Inline as Toast

Do not use an Inline alert to communicate messages about important events, updates, or confirmations.

{% example palette="wrong",
           width=872,
           alt="Alert component best practice 1",
           src="./alert-bestpractice-1.svg" %}

### Toast as Inline

Do not use a Toast alert to present simple information or inline messages.

{% example palette="wrong",
           width=872,
           alt="Alert component best practice 2",
           src="./alert-bestpractice-2.svg" %}

### Different variants

Do not use both variants when stacking.

{% example palette="wrong",
           width=872,
           alt="Alert component best practice 3",
           src="./alert-bestpractice-3.svg" %}

{% include 'feedback.html' %}

[img-sample]: {{ './alert-sample.svg' | url }}


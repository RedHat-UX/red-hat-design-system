{% section %}

## Usage

Use a dialog to communicate critical information that requires input or action. A dialog can be used to validate user decisions, confirm non-destructive or destructive actions, report errors, share task results and statuses, and prompt required user input. A dialog is also interruptive by design. When active, users are blocked from viewing page content and cannot return to their workflow until the dialog task is complete or the dialog is dismissed. A dialog can be effective when used correctly, but it should be used sparingly to limit disruption.

{% endsection %}
{% section %}

### When to use a dialog

A dialog is commonly used for short tasks. If users need to perform a task several times on the same page, consider moving it to the main page instead. Do not use a dialog unless the information or task within is vital to user success and worth disrupting their workflow.

{% endsection %}
{% section %}

## Sizes

There are two dialog container sizes. Choose a size that works best for the amount of available content.

### Fixed-width

The fixed-width dialog container works well for environments with a fixed grid, like marketing pages.

![A dialog container spanning a 12-column grid that is fixed in the center of the page]({{ '../dialog-width-fixed.png' | url }}){style="--inline-img-max-width:1000px;"}

### Full-width

The full-width dialog container works well for environments with a more fluid grid like apps or dashboards.

![A dialog container spanning a 6-column fluid grid that takes up the whole screen]({{ '../dialog-width-full.png' | url }}){style="--inline-img-max-width:1000px;"}

{% endsection %}
{% section %}

## Variations

There are three available dialog variations depending on the intended function.

### Confirmation

Use a confirmation dialog to validate user decisions and communicate their consequences. Confirmation dialogs can confirm non-destructive and destructive actions. When confirming a non-destructive action, do the following:

- Use a [primary button](https://ux.redhat.com/elements/button/) to confirm a non-destructive action
- Be specific about what will happen when an action is confirmed

![Non-destructive confirmation dialog example with a blue primary button]({{ '../dialog-confirmation-non-destructive.png' | url }}){style="--inline-img-max-width:1000px;"}

When confirming a destructive action, do the following.

- Use a primary button again or if the action carries serious consequences, use a [danger button](https://ux.redhat.com/elements/button/) instead

![Destructive confirmation dialog example with a red primary button]({{ '../dialog-confirmation-destructive.png' | url }}){style="--inline-img-max-width:1000px;"}

### Error

Use an error dialog to inform users of problems that interrupt normal or expected behavior. Briefly contextualize the problem, explain why it happened, and then provide actionable steps toward a solution.

![Error dialog example with a blue primary button]({{ '../dialog-error.png' | url }}){style="--inline-img-max-width:1000px;"}

### Passive

Use a passive dialog to communicate critical and immediately relevant information like the status of an application or the result of an action. When using a passive dialog, consider the following:

- Passive dialog content should require or lead to user action
- A passive dialog can also notify users about the status or duration of a critical process
- Never use a passive dialog for non-critical information, use an [inline alert](https://ux.redhat.com/elements/alert/) or [toast alert](https://ux.redhat.com/elements/alert/) instead

![Passive dialog example with a blue primary button]({{ '../dialog-passive.png' | url }}){style="--inline-img-max-width:1000px;"}

### Video player dialog

A video can replace a fixed-width dialog container, it should have the same width and include a close button.

![A dialog video player spanning a 12-column grid with a white close button]({{ '../dialog-video-player.png' | url }}){style="--inline-img-max-width:1000px;"}

{% endsection %}
{% section %}

## Writing content

Dialog content should be descriptive and specific so users can scan, understand the context of an action, and make a quick decision. A dialog includes three main content sections.

### Headline

A headline introduces the purpose of a dialog, sometimes as a question. Use important key words like <strong>permanently</strong> to describe an action and its consequences.

### Body text

Body text provides additional information about the consequence of an action in three lines or less, typically concerning changes to a workflow or access to information. Be mindful of adding interactive elements that would navigate users away from a dialog unless they are crucial yet helpful resources like documentation.

### Buttons

Buttons allow users to answer the headline prompt. Write button text labels as verbs to communicate their function and consequence. Button verbs can be pulled from the headline for better scannability.

### Character and line counts

| Element     | Character count | Line count |
| ----------- | --------------- | ---------- |
| Title text  |       40        |     1      |
| Body text   |       175       |     2      |
| Button text |       20        |     1      |

### Overflow content

When dialog content is taller than the dialog container height, the body section should scroll vertically with the header and footer remaining fixed in place. The content should visibly fade at the end of the dialog body section to indicate there is additional content out of view. Dialog content should never scroll horizontally.

![Dialog with a long amount of content showing visible gradient at the bottom of the body text section]({{ '../dialog-overflow.png' | url }}){style="--inline-img-max-width:1000px;"}

{% endsection %}
{% section %}

## Layout

### Placement

By default, a dialog container is horizontally and vertically centered on top of the backdrop and viewport.

![Dialog with container horizontally and vertically centered]({{ '../dialog-placement-center.png' | url }}){style="--inline-img-max-width:1000px;"}

By default, a dialog container is horizontally and vertically centered on top of the backdrop and viewport.

![Dialog with container horizontally centered, but positioned at the top of the page]({{ '../dialog-placement-top.png' | url }}){style="--inline-img-max-width:1000px;"}

{% endsection %}
{% section %}

## Responsive design

### Large breakpoints

Both the fixed-width and full-width dialog containers can be used on large breakpoints.

![A dialog container on a large breakpoint]({{ '../dialog-breakpoint-large.png' | url }}){style="--inline-img-max-width:1000px;"}

### Small breakpoints

As breakpoints get smaller, the fixed-width dialog container will change to full-width and become taller.

![Two dialog containers on small breakpoints, one tablet size and one mobile size]({{ '../dialog-breakpoint-small.png' | url }}){style="--inline-img-max-width:968px;"}

{% endsection %}
{% section %}

## Best practices

### Adding to read time

Do not add elements that will make users spend more time reading a dialog, move them to the main page instead. A dialog is disruptive, so it is important to bring users back to their original workflow as quickly as possible.

{% example palette="wrong",
           alt="A dialog container with a three-panel accordion which is incorrect usage",
           src="../dialog-best-practice-1.png" %}

### Unclear context

Make sure to write clearly about what will happen when users confirm a specific action.

{% example palette="wrong",
           alt="A dialog container with vague text which is incorrect usage",
           src="../dialog-best-practice-2.png" %}

### Two many buttons

Do not use more than two buttons in a dialog and do not add or change button variations.

{% example palette="wrong",
           alt="A dialog container with three buttons which is incorrect usage",
           src="../dialog-best-practice-3.png" %}

{% endsection %}

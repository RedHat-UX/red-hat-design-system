## Usage

Use buttons to communicate and trigger actions like submitting a form, canceling 
a process, or creating a new object.

### When to use a button

Use buttons to communicate actions users can take. Each page should have only 
one Primary button and any remaining buttons should be represented as lower 
emphasis.

### Button vs. call to action

Do not use buttons as navigational elements. Instead, use a 
[link](/patterns/link/) or [call to action](/elements/call-to-action/) when the 
desired action is to take users to a new page. Consider using a checkbox, 
switch, or control when you need to capture two togglable states.

## Variations

Each button has a specific function and the design of each variation signals 
that function to users. Therefore, it is important that each variation is 
implemented consistently so they communicate the correct actions.

{% example palette="light",
          alt="Image of the seven available button variations",
          src="../button-variations.png" %}

| Variation {style="width: 25%" } | Use case                                                                                                                                                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Danger                          | The most prominent of all the button options. Use them for actions that are potentially destructive like deleting or removing data. These are mostly found in dialogs to emphasize a destructive action. |
| Primary                         | The most prominent button, use them for the most important action on a page. Try to limit their usage to one per page.                                                                                   |
| Secondary                       | Buttons with less visual prominence than Primary buttons. Use them for general actions that do not require as much emphasis as Primary button actions.                                                   |
| Tertiary                        | Buttons with the least visual prominence. Use them to be less striking while still retaining a classic button format. Tertiary buttons are flexible and can be used as needed.                           |
| Link                            | Labeled buttons with no background or border. Use them with an icon on the left or right of text to further emphasize an action or to create greater visual hierarchy between two buttons.               |
| Play                            | Use on top of images or near text to play audio or video.                                                                                                                                                |
| Close                           | Use to close a window.                                                                                                                                                                                   |

### Play button

Use a Play button to indicate that audio or video will play when selected.

{% alert title="Helpful tip" %}
The Play button is both horizontally and vertically centered when placed on an 
image or photo.
{% endalert %}

{% example palette="light",
          alt="Image of play button examples; a video thumbnail on the left and a text layout on the right",
          src="../button-usage-play.png" %}

### Close button

Use a Close button to indicate that a window will close when selected.
Close buttons are mostly found in [dialogs](/elements/dialog/).

{% example palette="light",
          alt="Image of a dialog with a close button in the top right corner",
          src="../button-usage-close.png" %}

### Disabled

To indicate that an action is currently unavailable or if a task needs to be 
completed first, most buttons can become disabled. However, the Play and Close 
buttons do not include a disabled state.

{% example palette="light",
          alt="Image of five disabled buttons not including play and close buttons, underneath is a dropdown with a disabled button",
          src="../button-usage-disabled.png" %}

## Writing content

### Button text labels

Button text labels express what action will occur when users interact with it. 
When writing button labels, be specific and clearly communicate the action by 
doing the following:
- Make sure button text is unique and easily understood for when screen readers 
announce button text to users
- Use simple verbs or verb phrases
- Aim for short labels when possible
- Try not to use articles (for example, write *Add source* instead of 
*Add a source*)
- Do not use punctuation
- Use an icon within a button to add attention or clarify the action
- Do not create icons within buttons by using typed symbols (for example, a 
plus)

### Link button text labels

When writing link button text labels, use specific and action-focused language 
that matches what users will see when they arrive at their location.

{% example palette="light",
          alt="Image of link button text labels",
          src="../button-link-text-labels.png" %}

### Button vs. call to action text labels

Button text labels are written to be short and communicate an action whereas 
call to action text labels are written to entice users to select a link.

{% example palette="light",
          alt="Image of two buttons on the left and two calls to action on the right",
          src="../button-vs-cta-text-labels.png" %}

### Character and word count

| Element {style="width: 33%" } | Character count {style="width: 33%" } | Word count |
| ----------------------------- | ------------------------------------- | ---------- |
| Button text labels            | 30                                    | 3          |
| Link text labels              | 45                                    | 10         |

## Layout

### Placement

Buttons in dialogs, forms, etc. should always be left aligned in the container. 
This solves for the following:
- **Modularity and flexibility** - a standard alignment creates consistency in 
how objects appear
- **Accessibility** - buttons in a form are on the same scan line as the fields 
which benefits low vision users
Users who are blind can easily navigate form submit buttons because the order is 
consistent across all contexts
- **Responsiveness** - the most important actions are encountered first when 
elements are stacked vertically

{% example palette="light",
          alt="Image of buttons used in a dialog and a form",
          src="../button-layout-placement.png" %}

### Hierarchy

Buttons are ordered by hierarchy from left to right. Do not use multiple Danger, 
Primary, or Close buttons in the same area.

{% example palette="light",
          alt="Image of buttons grouped by hierarchy from left to right",
          src="../button-layout-hierarchy.png" %}

### Grouping

Grouping buttons is a useful way of aligning buttons that have a relationship. 
Group buttons logically into sets based on hierarchy and usage.

{% example palette="light",
          alt="Image of button groups and their hierarchy from left to right",
          src="../button-layout-grouping.png" %}

### Space in groups

The standard spacing between each button is `16px`, even for Danger 
buttons. If buttons are stacked, the spacing between each button should be 
`8px`.

{% example palette="light",
          alt="Image of button groups and their horizontal and vertical spacing in between each button",
          src="../button-layout-spacing.png" %}

## Best practices

### More than one line of text

Buttons should never have more than one line of text.

{% example palette="wrong",
          alt="Image of a button with two lines of text which is incorrect usage",
          src="../button-best-practice-1.png" %}

### Multiple buttons

Do not use multiple Danger or Primary buttons in the same area.

{% example palette="wrong",
          alt="Image of two danger and two primary button groups which is incorrect usage",
          src="../button-best-practice-2.png" %}

### Text labels

Do not write button text labels that are expressive or ambiguous.

{% example palette="wrong",
          alt="Image of two buttons; one has expressive language and the other has ambiguous language which is incorrect usage ",
          src="../button-best-practice-3.png" %}

### Danger button

Do not use a Danger button for non-destructive purposes.

{% example palette="wrong",
          alt="Image of a search bar using a danger button which is incorrect usage",
          src="../button-best-practice-4.png" %}

### Button as a call to action

Do not use buttons as links or change the Primary button styling, use a link or 
call to action instead.

{% example palette="wrong",
          alt="Image of text styles with a button underneath that resembles a call to action",
          src="../button-best-practice-5.png" %}


---
title: Form
tags:
  - pattern
---

## Overview
  
A Form is a group of elements used to collect information from a user. It can include a combination of text, fields, select lists, data inputs, buttons, and more.

## Sample pattern
  {% example palette="none",
           alt="Form component samples",
           src="./form-samples.svg" %}

{% repoStatus %}

## Style

{% example palette="lightest",
           alt="Form component blueprint",
           src="./form-blueprint.svg" %}

### Visual elements

There are a variety of form elements available for use depending on what information needs to be collected from or displayed to a user.
 - **Title and body text** - Title and body text styles explaining why a user should fill out a form.
 - **Text label** - Small text describing what a user needs to input into a form element.
 - **Popover** - Small card with helpful content that appears near a popover icon when triggered.
 - **Form field or Select list** - Text box or dropdown allowing a user to input text or make a selection.
 - **Data inputs** - Alternate components allowing a user to input other kinds of information.
 - **Buttons** - Actions used to submit or clear a form.
 - **Privacy link** - Text linking to privacy documentation (included when a form is used on marketing websites).

{% alert title="Learn more" %}
Visit the [Popover](https://ux.redhat.com/elements/popover/) component page to learn more about how to use a popover.
{% endalert %}

{% example palette="lightest",
           alt="Form component visual elements",
           src="./form-visual-elements.svg" %}

### Variants

There are two form variants available for use.
 - **Container** - Form elements are contained in a card and the title and body text sizes are slightly smaller.
 - **Floating** - Form elements float in a group and the title and body text sizes are slightly larger.

{% example palette="lightest",
           alt="Form component variants",
           src="./form-variants.svg" %}

## Theme

### Light theme

{% example palette="lightest",
           alt="Form component, light theme",
           src="./form-theme-light.svg" %}

### Dark theme

{% alert title="Coming soon" %}
More details and specs surrounding dark theme are coming soon.
{% endalert %}

{% example palette="darkest",
           alt="Form component, dark theme",
           src="./form-theme-dark.svg" %}

## Orientation

### Default

In the Default orientation, form elements are organized vertically and the text labels are positioned **on top**. All form elements and groups are aligned to the left edge and some elements span the width of the form, like a field.

{% alert title="Warning", state="warning" %}
Do not write text labels with **more than a few words** as they might break to two lines or make the form hard to scan.
{% endalert %}

{% example palette="none",
        alt="Form components (Container and Floating), default orientaton",
        src="./form-container-floating-orientation-default.svg" %}

### Horizontal
  
In the Horizontal orientation, form elements are still organized vertically, but the text labels are positioned **to the left**. Form elements without a text label, like the button group or privacy link, should be aligned to the left edge of other form elements with text labels.

{% alert title="Helpful tip" %}
Form variants in the Horizontal orientaton span more grid columns, so only use them if there is ample space or enough padding near content.
{% endalert %}

{% alert title="Warning", state="warning" %}
Do not write text labels with **more than a few words** as they might break to two lines or make the form hard to scan.
{% endalert %}

{% example palette="none",
        alt="Form component (Container), horizontal orientaton",
        src="./form-container-orientation-horizontal.svg" %}
        
{% example palette="none",
        alt="Form component (Floating), horizontal orientaton",
        src="./form-floating-orientation-horizontal.svg" %}
           

### Text label alignment
  
In the Horizontal orientation, text labels should be **left justified** making it easy for a user to scan.

{% example palette="lightest",
           alt="Form component text label alignment",
           src="./form-text-label-alignment.svg" %}

## Usage
  
A form is best used to guide a user through a task while gathering information from them.

### Container variant

When the Container variant is positioned on the grid, it may span between four and eight columns, and be oriented on the left, center, or right side of the page.

{% alert title="Helpful tip" %}
When the Container variant is positioned near content, there should be **at least one** grid column of padding in between.
{% endalert %}

{% example palette="none",
        alt="Form (Container), default orientaton",
        src="./form-in-use-container-default-orientation.svg" %}
        
{% example palette="none",
        alt="Form (Container), horizontal orientaton",
        src="./form-in-use-container-horizontal-orientation.svg" %}
           
### Floating variant

When the Floating variant is positioned on the grid, it may span between four and eight columns, and be oriented on the left, center, or right side of the page.

{% alert title="Helpful tip" %}
When the Floating variant is positioned near content, there should be **at least one** grid column of padding in between.
{% endalert %}

{% example palette="none",
        alt="Form (Floating), default orientaton",
        src="./form-in-use-floating-default-orientation.svg" %}
        
{% example palette="none",
        alt="Form (Floating), horizontal orientaton",
        src="./form-in-use-floating-horizontal-orientation.svg" %}   

### Form content

A user will have a better experience with submitting a form if the elements are easy for them to identify and move between.
 - **Text label** - Use to identify form elements that are required or recommended.
 - **Popover** - Use to display helpful information near form elements that may need more explanation beyond text labels.
 - **Form field or Select list** - Use to write text or make a selection from a list.
 - **Placeholder text** - Use within a form field or select list as an example of how to correctly provide an input.
 - **Helper text** - Use underneath a form element as an example of how to correctly provide an input.

{% example palette="lightest",
           alt="Form component content",
           src="./form-content.svg" %}

### Required fields
  
If a user is required to input information when submitting a form, indicate exactly where by adding a required asterisk (<span style="color: #c9190b;">*</span>) to the right of a text label. If all inputs are required, **do not** add an asterisk next to every text label. Instead, add text below the title stating **All fields are required**. If all inputs are optional, the text should state **All fields are optional** instead.

{% example palette="none",
           alt="Form component required fields",
           src="./form-required-fields.svg" %}

### Data inputs

Data inputs provide additional ways for a user to submit information. Each data input has a specific use case and different data input groups can be used in the same form.

{% example palette="lightest",
           alt="Form component data inputs",
           src="./form-data-inputs.svg" %}

### Using data inputs

A variety of data inputs can be used in the same form to allow a user to submit more information.

| Data input name | Usage                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------- |
| Radio button    | Use when only one option can be chosen from a list of no more than five options.              |
| Checkbox        | Use when either several or no options can be chosen from a list of no more than five options. |
| Select list     | Use to select one or more options from a list of more than five options.                      |
| Switch          | Use to toggle between two different states.                                                   |

### Arranging data inputs

Radio buttons and checkboxes can be stacked horizontally or vertically depending on the amount of characters and space.
 - If there are fewer than three options, arrange data inputs horizontally.
 - If there are more than three options, arrange data inputs vertically.

{% example palette="lightest",
           alt="Form component arranging data inputs",
           src="./form-arranging-data-inputs.svg" %}

### Popover

If a form element requires more explanation beyond text labels, use a popover to help a user better understand what they need to input. The content in a popover can include text or links to help documents or other websites. When adding a popover to a form, a small icon should be added next to a text label which acts as a trigger to display the popover.

{% alert title="Learn more" %}
Visit the [Popover](https://ux.redhat.com/elements/button/) component page to learn more about how to use a popover.
{% endalert %}

{% alert title="Warning", state="warning" %}
Avoid using a popover for critical information, a user will have a hard time finding what they need if they have to trigger something first.
{% endalert %}

{% example palette="lightest",
           alt="Form component popover",
           src="./form-popover.svg" %}

### Placement

A form can span various grid columns when used on a page. To preserve readability, it should span at least four grid columns but not exceed eight grid columns (or 750px).

{% example palette="none",
        alt="Form component placement, default orientaton",
        src="./form-placement-default-orientation.svg" %}
        
{% example palette="none",
        alt="Form component placement, horizontal orientaton",
        src="./form-placement-horizontal-orientation.svg" %}
           
## Behavior

### Disabled state
  
In some cases, a form element can be disabled if a user needs to make an input somewhere else first. In this example, a user is **required** to select their department first and then optionally select their job role afterwards. A user can still submit a form successfully if they skip an optional form element.

{% alert title="Warning", state="warning" %}
Do not disable form elements that **require** input as a user might skip over them leading to errors when the form is submitted.
{% endalert %}

{% example palette="lightest",
           alt="Form component disabled state",
           src="./form-disabled-state.svg" %}

### Error states

When a user submits a form that results in errors, it is important to explain what the errors are and how to resolve them. There are **two error states** that can be displayed depending on how a user moves through the form.

### Error validation on loss of focus
  
An error will be displayed after a user moves the focus away from a required form element. This can also happen when a user inputs something with an invalid format or leaves a required form element blank or incomplete. The error text and icons will disappear when the errors are resolved and the focus is moved away once again.

{% example palette="none",
        alt="Form component, error validation on loss of focus",
        src="./form-error-loss-of-focus.svg" %}

### Error validation on submission
  
Errors will be displayed if a user tries to submit a completed form with invalid information or not filled out completely. When this happens, a [Danger severity alert](https://ux.redhat.com/elements/alert/) is displayed stating there are errors that need to be resolved. The alert is positioned below the title and body text, and has the same width as the widest form element. The alert will disappear when the errors are resolved and the form is submitted again.

{% example palette="none",
        alt="Form component, error validation on submission",
        src="./form-error-submission.svg" %}

## Interaction states

{% alert title="See more" %}
Visit the [Button](https://ux.redhat.com/elements/button/) and [Link](https://ux.redhat.com/elements/link/) component pages to see available interaction states.
{% endalert %}

### Link

{% example palette="lightest",
           alt="Form component interaction state, link",
           src="./form-interaction-states-link.svg" %}

### Hover
  
Form fields and select lists share the same hover state.

{% example palette="lightest",
           alt="Form component interaction state, hover",
           src="./form-interaction-states-hover.svg" %}

### Focus
  
When the focus is moved to a form field with placeholder text, the text will disappear and a blinking cursor will be visible.

{% example palette="lightest",
           alt="Form component interaction state, focus",
           src="./form-interaction-states-focus.svg" %}

### Active

Form fields and select lists share the same active state.

{% example palette="lightest",
           alt="Form component interaction state, active",
           src="./form-interaction-states-active.svg" %}

### Tab order

When the Tab key is pressed repeatedly, the focus highlights each form element in order, from top to bottom or left to right.

{% example palette="none",
        alt="Form component tab order",
        src="./form-tab-order.svg" %}

## Accessibility

| Key                    | Action                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------ |
| <kbd>Tab</kbd>         | Moves the focus to the next form element.                                            |
| <kbd>Shift + Tab</kbd> | Moves the focus to the previous form element.                                        |
| <kbd>Space</kbd>       | Opens/closes a popover, opens/closes a select list, or selects/toggles a data input. |
| <kbd>Enter</kbd>       | Opens/closes a popover or submits/clears the form.                                   |

## Responsive design
  
The Default variant mostly remains the same on large and small screens, but the Horizontal variant will switch to the Default variant as screens get smaller.

### Desktop

{% example palette="none",
        alt="Form component (Default) responsive design, desktop",
        src="./form-responsive-default-desktop.svg" %}
        
{% example palette="none",
        alt="Form component (Horizontal) responsive design, desktop",
        src="./form-responsive-horizontal-desktop.svg" %}
           

### Tablet
  
As screens get smaller, the Horizontal variant will switch to the Default variant to reduce crowding.

{% example palette="none",
        alt="Form component responsive design, tablet",
        src="./form-responsive-tablet.svg" %}

### Mobile

{% example palette="none",
        alt="Form component responsive design, mobile",
        src="./form-responsive-mobile.svg" %}

## Best practices

### Form elements aligned to the right

Do not align the button group and privacy link to the **right edge** of other form elements.

{% example palette="wrong",
           alt="Form component, best practice 1",
           src="./form-best-practice-1.svg" %}

### Two Primary buttons

Do not include two Primary buttons, use a combination of Primary and Link buttons instead in that order.

{% alert title="Learn more" %}
Visit the [Button](https://ux.redhat.com/elements/button/) component page to learn more about how to use buttons.
{% endalert %}

{% example palette="wrong",
           alt="Form component, best practice 2",
           src="./form-best-practice-2.svg" %}

### Too many required fields

If all inputs are required, **do not** add an asterisk next to every text label. Instead, add text below the title stating **All fields are required**. If all inputs are optional, the text should state **All fields are optional** instead.

{% example palette="wrong",
           alt="Form component, best practice 3",
           src="./form-best-practice-3.svg" %}

### 12 columns

The Container and Floating variants in both orientations should only span a maxium of 8 grid columns.

{% alert title="Learn more" %}
Visit the [Grid](https://ux.redhat.com/foundations/grid/) foundation page to learn more about how to use the grid.
{% endalert %}

{% example palette="wrong",
           alt="Form component, best practice 4",
           src="./form-best-practice-4.svg" %}

### Rearranging data inputs and button groups

Do not change the stacking order of data inputs and button groups, except in rare cases.

{% example palette="wrong",
           alt="Form component, best practice 5",
           src="./form-best-practice-5.svg" %}

## Spacing

A form banner uses [space tokens](/tokens/space/) to define spacing 
values between elements.

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-xs, --rh-space-sm, --rh-space-md, --rh-space-lg, --rh-space-xl, --rh-space-2xl" %}
{% endspacerTokensTable %}

### Default

{% example palette="lightest",
           alt="Form component spacing, default",
           src="./form-spacing-default.svg" %}

### Horizontal

{% example palette="lightest",
           alt="Form component spacing, horizontal",
           src="./form-spacing-horizontal.svg" %}

{% include 'partials/component/feedback.html' %}
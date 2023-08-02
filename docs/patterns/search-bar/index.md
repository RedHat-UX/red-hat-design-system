---
title: Search bar
layout: layout-basic.njk
tags:
    - pattern
---

## Overview

A Search bar is a horizontal grouping of a form field with placeholder text and 
a button. It allows a user to input text and then perform a search.

## Sample pattern

{% example palette="none",
    alt="Search bar component sample",
    src="./search-bar-sample.svg" %}{% endexample %}

{% repoStatus %}

## Style

A search bar includes a narrow but wide form field with placeholder text and a 
red button that is placed on the right.

{% example palette="lightest",
    alt="Search bar component blueprint",
    src="./search-bar-blueprint.svg" %}{% endexample %}

#### Button

A search bar includes a button so a user can perform a search. A call to action 
link would only direct a user to a results page without actually performing a 
search, so a button must be used instead.

{% alert title="Learn more" %}
Visit the [Button](/elements/button/) or [Call to 
action](/elements/call-to-action/) element pages to learn more about how to use 
buttons and calls to action.
{% endalert %}

{% example palette="lightest",
    alt="Search bar component button vs. CTA",
    src="./search-bar-button-vs-cta.svg" %}{% endexample %}

## Theme

#### Light theme

The light theme search bar includes a light theme form field and red button.

{% example palette="lightest",
    alt="Search bar component, light theme",
    src="./search-bar-light-theme.svg" %}{% endexample %}
  

#### Dark theme

For now, the light theme search bar can also be used in the dark theme.

{% example palette="darkest",
    alt="Search bar component, dark theme",
    src="./search-bar-dark-theme.svg" %}{% endexample %}

## Usage

A search bar is best used to give a user the ability to search for something and 
then display any relevant search results.

#### Layout

A search bar can be used in most layouts. It has no set width other than the 
boundaries of whatever container or grid it is placed in.

{% example palette="medium",
    alt="Search bar component usage",
    src="./search-bar-layout.svg" %}{% endexample %}

#### Content

The text within a search bar indicates how wide or narrow a search will be. If 
the text is <em>*generic*</em> (Enter your search term), a user might expect to 
search through an entire website. If the text is *specific* (Search all 
resources), a user might expect to search through an individual page.

{% example palette="lightest",
    alt="Search bar component placeholder text options",
    src="./search-bar-placeholder-text.svg" %}{% endexample %}

## Behavior

#### Form field

When a user selects the form field to input text via cursor or keyboard, the 
placeholder text will disappear, the form field will have focus, and a blinking 
cursor will take its place. When a user starts typing, the text styling will 
change.

{% alert title="Learn more" %}
Visit the [Form](/patterns/form/) pattern page to learn more about form fields.
{% endalert %}

{% example palette="lightest",
    alt="Search bar component styling changes",
    src="./search-bar-form-field.svg" %}{% endexample %}

#### Typeahead

Typeahead allows a user to narrow down a displayed list of options when they 
input text within a form field, it is recommended for lists with more than 10 
options.

{% example palette="lightest",
    alt="Search bar component typeahead",
    src="./search-bar-typeahead.svg" %}{% endexample %}
  
#### Errors

If focus is moved from the form field to the button, an error will not be 
displayed. However, if a user tries to perform a search without any text in the 
form field, an error will be displayed.

{% alert title="Learn more" %}
Visit the [Form](/patterns/form/) pattern page to learn more about form field 
errors.
{% endalert %}

{% example palette="lightest",
    alt="Search bar component form field errors",
    src="./search-bar-errors.svg" %}{% endexample %}

## Interaction states

{% alert title="Learn more" %}
Visit the [Form](/patterns/form/) or [Button](/elements/button/) pages to learn 
more about interaction states.
{% endalert %}

#### Link

{% example palette="lightest",
    alt="Search bar component interaction state, link",
    src="./search-bar-interaction-states-link.svg" %}{% endexample %}

#### Hover

A blue line appears at the bottom of the form field indicating it is selectable.

{% example palette="lightest",
    alt="Search bar component interaction state, hover",
    src="./search-bar-interaction-states-hover.svg" %}{% endexample %}

#### Focus

When the focus is moved to the form field via keyboard, the placeholder text 
will disappear and a blinking cursor will take its place. When the focus is 
moved away, the placeholder text will be visible again.

{% example palette="lightest",
    alt="Search bar component interaction state, focus",
    src="./search-bar-interaction-states-focus.svg" %}{% endexample %}

#### Active

When the focus is moved to the form field via cursor, the placeholder text will 
disappear and a blinking cursor will take its place. When the focus is moved 
away, the placeholder text will be visible again.

{% example palette="lightest",
    alt="Search bar component interaction state, active",
    src="./search-bar-interaction-states-active.svg" %}{% endexample %}

#### Tab order

When the Tab key is pressed repeatedly, the focus will highlight the form field 
first and then the button. A user can move the focus from the form field to the 
button without an error being displayed.

{% example palette="lightest",
    alt="Search bar component tab order",
    src="./search-bar-tab-order.svg" %}{% endexample %}
  
## Accessibility

| Key                               | Action                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | Moves the focus to the button.                                                    |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus to the form field.                                                |
| <kbd>Enter</kbd> (if text)        | Triggers a search.                                                                |
| <kbd>Enter</kbd> (if no text)     | Displays an error icon and text requiring a user to input text in the form field. |

{.full-width}

## Responsive design

A search bar mostly remains the same on large and small screens. While it can 
stretch horizontally to fit any container or grid, only the form field stretches 
whereas the button always stays the same size.

#### Desktop

{% example palette="none",
    alt="Search bar component responsive design, desktop",
    src="./search-bar-responsive-desktop.svg" %}{% endexample %}

#### Tablet

{% example palette="none",
    alt="Search bar component responsive design, tablet",
    src="./search-bar-responsive-tablet.svg" %}{% endexample %}

#### Mobile

{% example palette="none",
    alt="Search bar component responsive design, mobile",
    src="./search-bar-responsive-mobile.svg" %}{% endexample %}

## Best practices

#### Long placeholder text

Do not write placeholder text too long, it should be short and to the point 
(maximum 30 characters).

{% example palette="wrong",
    alt="Search component best practice 1",
    src="./search-bar-best-practice-1.svg" %}{% endexample %}

#### Call to action as button

Do not replace the button with a call to action.

{% example palette="wrong",
    alt="Search component best practice 2",
    src="./search-bar-best-practice-2.svg" %}{% endexample %}

#### Different style or color

Do not use a different button color or style when using a search bar on Red Hat 
*marketing* websites.

{% example palette="wrong",
    alt="Search component best practice 3",
    src="./search-bar-best-practice-3.svg" %}{% endexample %}

#### Disabled

Do not disable the button until a user inputs text in the form field. The button 
should always be active and if a user tries to perform a search without any text 
in the form field, an error should be displayed instead.

{% example palette="wrong",
    alt="Search component best practice 4",
    src="./search-bar-best-practice-4.svg" %}{% endexample %}


#### Solo button

Avoid using the search button on its own without a form field.

{% alert title="Learn more" %}
Visit the [Button](/elements/button/) component page to learn more about how to 
use buttons.
{% endalert %}

{% example palette="wrong",
    alt="Search component best practice 5",
    src="./search-bar-best-practice-5.svg" %}{% endexample %}

#### Rearranging the component

Do not rearrange a search bar by placing the button below the form field or 
changing its width.

{% example palette="wrong",
    alt="Search component best practice 6",
    src="./search-bar-best-practice-6.svg" %}{% endexample %}

## Spacing

A search bar uses [space tokens](/tokens/space/) to define spacing values 
between elements.

{% spacerTokensTable headingLevel="3", tokens=[
  '--rh-space-sm',
  '--rh-space-md',
  '--rh-space-lg',
'' ] %}{% endspacerTokensTable %}

{% example palette="light",
        alt="Search bar spacing",
        src="./search-bar-spacing.svg" %}{% endexample %}

{% include 'feedback.html' %}

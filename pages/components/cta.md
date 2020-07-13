---
layout: _templates/layout-basic.njk
title: Pages and 11ty documentation
---
<!-- see XD for reference: https://xd.adobe.com/view/1a420050-5b22-4161-9a6f-515ec03e2b2f-4f11/ -->

# Call to action

## Overview

A Call to action is a link that directs users to other pages or displays extra content when selected. Call to action styles feature a text label, a background or a border, and icons.

## Live components
<!-- Add Primary, Disabled, Secondary, Brick and Default button components -->


## Code status

<!-- Add a tab component to show code status for Primary, Secondary, Brick and Default components -->

[In Primary tab]
#### Primary
Studio repo, PFE repo, Drupal/FTS repo <!-- these use PF  filled label component https://www.patternfly.org/v4/documentation/react/components/label based on this spreadsheet https://docs.google.com/spreadsheets/d/1rwRjj45ul1W7jDIfbv4HXVgO6xU4OGY9bGjdKwb-ZjM/edit#gid=0-->

#### Primary, video
Studio repo

#### Primary, disabled
PFE repo


-----
[In Secondary tab]
#### Secondary
PFE repo, Drupal/FTS repo

#### Secondary, blue
Not coded yet

-----
[In Brick tab]
#### Brick
Studio repo, Drupal/FTS repo

#### Brick with icon
Not coded yet

-----
[In Default tab]
#### Default
PFE repo, Drupal/FTS repo

#### Default video
Studio repo


## Demo
[https://patternfly.github.io/patternfly-elements/demo/?path=/story/call-to-action--pfe-cta](https://patternfly.github.io/patternfly-elements/demo/?path=/story/call-to-action--pfe-cta)

## Theme

Calls to action are available in light and dark theme contexts. Use the dropdowns to view the available styles in each theme.
<!-- Wes, we're still working on how to display the Theme image, skip for now. -->

## Usage

A Call to action is used to entice users to select a link or to display extra content. For example, use the Primary style to bring attention to an important link or the Brick style to organize a list of links that can also expand to display extra content.

### Navigation

Use Calls to action only as navigational elements and use [Buttons] <!-- this should link to the Buttons component page once built --> to perform actions.

### Label formatting

Call to action text labels are written differently than Button text labels. Call to action text labels can be more creative or expressive to better entice users to make a selection, like *Register for free* or *Watch on demand*.

### Disabled

Only the Primary style can appear disabled if a task needs to be completed first before the Call to action can be clicked on or tapped, like making a selection.

[Make a selection before proceeding v]

[Disabled]

### Hierarchy

Calls to action are ordered by hierarchy from left to right on desktop and mobile. Similar styles can be used multiple times in the same area except for Primary and Disabled.
<!-- Wes, this was auto-converted into a table but feel free to use any layout method you want -->
<table>
  <tr>
    <td>[Primary]</td>
    <td>[Secondary]</td>
    <td>[Brick]</td>
    <td>[Default]</td>
  </tr>
  <tr>
    <td>Primary
High emphasis</td>
    <td>Secondary
Medium emphasis</td>
    <td>Brick
Low emphasis</td>
    <td>Default
Lowest emphasis</td>
  </tr>
</table>

<!-- I stopped here bc I have some design & layout questions but the above is ready to start on. -->

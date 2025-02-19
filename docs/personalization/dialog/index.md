---
title: Dialog
heading: Dialog
sidenavTitle: Dialog
layout: layouts/pages/pattern.njk
order: 40
pattern-info:
    thumbnail: /elements/dialog/screenshot.png
    thumbnail-alt: Dialog pattern
    status: ready  
tags:
  - personalization
  - personalization-pattern
---


## Overview

A Dialog displays content in a container which sits on top of the page and
darkens any content underneath. This is a <strong>priority 1</strong>
implementation as it prevents a user from completing a task or interacting
with the rest of the page until they close the dialog.

## Design

A dialog can be used both on desktop and mobile.

<uxdot-example variant="full">
<img alt="Dialog"
        src="/assets/optimization/modal.svg"
        width="1000"
        height="322">
</uxdot-example>

## How to use

-   Use sparingly as it interrupts the workflow of a user, requires
    immediate attention from a user, and distracts a user from
    completing their current task.
-   A best practice is to trigger a dialog only when a user interacts
    with the appropriate element, never on its own. For instance, show a
    dialog if a user selects something and then needs to complete a more
    important task. If that is not ideal or possible, show it once a
    user has completed their task.
-   Refrain from presenting a dialog while a user is likely to be in the
    middle of an important task.
-   Per our design system, every dialog should include a close button.
    It should also close when a user clicks outside of the dialog and
    when the <kbd>Escape</kbd> key is pressed.
-   Messaging within a dialog should be simple, do not include multiple
    steps or long forms.
-   A dialog can be used on mobile, but a user might have a hard time
    closing it on a small screen.

## The audience

A dialog can be used for the following types of content (among others).

-   Product announcements
-   Notifications related to any previous user actions
-   An experience that ideally does not direct a user away from their
    task or the page


{% renderFile './docs/personalization/_feedback.md' %}
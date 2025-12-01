---
title: Fundamentals
tags:
  - accessibility
order: 1
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
</script>

<style>
  rh-blockquote {
    display: block;
    margin-block: 2rem;
    margin-inline-start: 2.5rem;
  }
</style>

## Overview

### The Red Hat Design System and Accessibility

At Red Hat®, we believe that an [open source approach to accessibility](https://www.redhat.com/en/accessibility) leads to better, more inclusive experiences for all people, including users with disabilities.

The user experience across Red Hat properties, including our products, services, applications, and digital communications, are all held to a high standard of inclusivity. We strive to make them accessible for as many users and devices as possible.

The Red Hat Design System is built with accessibility in mind. This section provides more technical details on how to implement design components for more accessible and inclusive outcomes.

### Personas and user stories

Personas are fictionalized distillations of the varying types of users who may engage with your web properties. Using them is a common UX design technique that can be helpful for developing empathy and building inclusive experiences.

When writing, designing, or developing, you can put yourself in the mind of these personas to imagine what outcomes the users they represent might want from your experience and how successfully they can accomplish these goals. Using personas shifts accessibility left in your processes, helping you avoid and catch issues before they ever get to handoffs, QA, or even launch.

The W3C Web Accessibility Initiative (WAI) has designed a collection of [web user stories](https://www.w3.org/WAI/people-use-web/user-stories/) that you may find helpful to adapt as personas for your own web projects.

## Guidelines

### WCAG

If you’ve spent any time incorporating or reading about web accessibility, you’ve likely heard mention of the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines—or WCAG. (You may also have heard this acronym pronounced several different ways, any of them acceptable: W-C-A-G, Wuh-cag, W-cag, etc.)

At Red Hat, we currently target [WCAG 2.2 AA](https://www.w3.org/WAI/WCAG22/Understanding/), as it aligns with many laws and regulations and provides a good experience for most users.

### POUR

It’s important to remember that the goal of web accessibility is not conformance for its own sake. Accessibility is for real people. To reflect this, W3C has organized its WCAG criteria by these four guiding principles: perceivable, operable, understandable and robust (aka POUR):

<rh-blockquote>
  <ol>
    <li><strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive.</li>
    <li><strong>Operable</strong> - User interface components and navigation must be operable.</li>
    <li><strong>Understandable</strong> - Information and the operation of the user interface must be understandable.</li>
    <li><strong>Robust</strong> - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
  </ol>
  <span slot="author">Source: <a href="https://www.w3.org/WAI/WCAG22/Understanding/intro">Introduction to Understanding WCAG</a>.</span>
  <span slot="title">Accessibility Guidelines Working Group (AG WG) Participants. Copyright © 2023 W3C® (MIT, ERCIM, Keio). Status: Draft Updated 20 June 2023.</span>
</rh-blockquote>

While the WCAG criteria inform the “what” of accessibility conformance, POUR reminds us of the “why.”

Keeping your users and these four principles in mind from the start will go a long way towards conformance.

The [WAI Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/) page provides more information on applying POUR.

## ATAG

As a companion to WCAG, WAI has also developed a set of Authoring Tool Accessibility Guidelines (ATAG). ATAG covers both the accessibility of authoring tool interfaces (e.g., for content management systems) and supporting the production of accessible content using these tools. In other words, where WCAG is for end users, ATAG is for content creators.

WAI also provides an [ATAG Report Tool](https://www.w3.org/WAI/atag/report-tool) to help walk you through the process of authoring tool evaluation to gauge conformance.

---
title: Screen readers
sidenavTitle: Screen readers
permalink: /accessibility/screen-readers/index.html
tags:
  - accessibility
order: 100
importElements:
  - rh-tile
---

<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">

<style>
  rh-tile [slot="headline"] {
    font-weight: var(--rh-font-weight-heading-bold, 700);
  }
</style>

Here, we provide some quick guidance for starting, stopping, and changing the settings of various readers. Each how-to section offers screen-reader-specific bonus tips and links to third-party resources like keyboard/gesture shortcut guides.

## Why test with screen readers?

When testing with screen readers, our goal is to verify that an assistive tech user will have an experience equivalent to that of any other user. Tests may include the following:

1. Can you use and understand the purpose of all interactive elements on the page?
2. Can you accomplish all the same tasks with and without assistive tech (e.g. navigating the site, submitting forms, adding items to a cart, etc.)?
3. When page contents are read, are you presented with all the meaningful info you would expect as a visual user? (This includes status updates on dynamic pages.)

## Computer screen readers

On computers, screen reader testing often lets you perform two tests simultaneously:

1. It ensures that all meaningful web content and interactions are available to assistive tech.
2. It helps you verify that your experiences are keyboard operable (which is a [WCAG requirement](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible.html)).

After turning on your computer’s screen reader and opening your browser, use your keyboard to access the entire experience, top to bottom. Use the <kbd>Tab</kbd>, <kbd>Shift-Tab</kbd>, and <kbd>↑ → ↓ ←</kbd> keys to move among (and within) focusable elements like links, form controls, and interactive components. And you can then use other keys like <kbd>Space</kbd>, <kbd>Enter</kbd>, and <kbd>Escape</kbd> to interact with those elements.

Each screen reader also has its own set of keyboard shortcuts to navigate and read non-interactive content within an experience. Different keypresses can start (or stop) reading the page, jump to the next heading element, move vertically and horizontally among table cells, and so on. Links to keyboard shortcut resources are included in each screen reader’s section.

### How to use computer screen readers

<nav class="grid xs-two-columns sm-three-columns">
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-computer/#voiceover-(macos)">VoiceOver (macOS)</a></h3>
    VoiceOver is the built-in screen reader for macOS.
  </rh-tile>
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-computer/#nvda-(windows)">NVDA (Windows)</a></h3>
    NVDA is a free, downloadable screen reader for Windows. 
  </rh-tile>
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-computer/#jaws-(windows)">JAWS (Windows)</a></h3>
    JAWS is a paid, downloadable screen reader for Windows.
  </rh-tile>
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-computer/#narrator-(windows)">Narrator (Windows)</a></h3>
    Narrator is the built-in screen reader for Windows 10 and 11.
  </rh-tile>
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-computer/#orca-(linux)">Orca (Linux)</a></h3>
    Orca comes packaged with GNOME and other desktop environments.
  </rh-tile>
</nav>

## Mobile screen readers

On mobile devices, you will use touchscreen gestures and taps instead of a keyboard to navigate the page and activate interactive elements.
For basic navigation, you can swipe right, left, up, and down with one finger to move forward and backward through the page, and then double-tap to activate form controls and links. Each platform has many other gestures for more advanced navigation. View the linked gesture shortcuts pages within each section for more guidance.

### How to use mobile screen readers

<nav class="grid xs-two-columns sm-three-columns">
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-mobile/#voiceover-(ios)">VoiceOver (iOS)</a></h3>
    VoiceOver is the built-in screen reader for iOS and iPadOS devices.
  </rh-tile>
  <rh-tile compact="">
    <h3 slot="headline"><a href="/accessibility/screen-readers-mobile/#talkback-(android)">Talkback (Android)</a></h3>
    TalkBack is the built-in screen reader for most Android devices.
  </rh-tile>
</nav>

## Browser and screen reader pairings

If you can only test on one platform, it never hurts to try your screen reader with as many browsers as possible. For example, if you only have a Mac, go ahead and pair VoiceOver with Safari, Chrome, and Firefox.

But if you’re either pressed for time or have access to multiple operating systems, these are the most common browser and screen reader pairings, and thus the ones to prioritize when testing:

- macOS: Safari and VoiceOver
- Windows: Firefox and NVDA
- Windows: Chrome and JAWS or NVDA
- Windows: Edge and Narrator
- Linux: Firefox and Orca
- iOS: Safari and VoiceOver
- Android: Chrome and TalkBack

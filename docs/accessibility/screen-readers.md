---
title: Screen reader basics
sidenavTitle: Screen reader basics
permalink: /accessibility/screen-readers/index.html
tags:
  - accessibility
order: 55
---

## General info

This page provides some quick guidance for starting, stopping, and changing the settings of various screen readers. It also offers screen-reader-specific bonus tips and links to third-party resources like keyboard/gesture shortcut guides.

### Why test with screen readers?

When testing with screen readers, our goal is to verify that an assistive tech user will have an experience equivalent to that of any other user. Tests may include the following:

1. Can you use and understand the purpose of all interactive elements on the page?
2. Can you accomplish all the same tasks with and without assistive tech (e.g., successfully submitting a form, adding items to a cart, etc.)?
3. When page contents are read, are you presented with all the meaningful info you would expect as a visual user? (This includes status updates on dynamic pages.)

### Which browser should I use with my screen reader?

If you can only test on one platform, it never hurts to try your screen reader with as many browsers as possible. For example, if you only have a Mac, go ahead and use VoiceOver with Safari, Chrome, and Firefox.

But if you’re either pressed for time or have access to multiple operating systems, these are the most common browser and screen reader pairings, and thus the ones to prioritize when testing:

- macOS: Safari and VoiceOver
- Windows: Firefox and NVDA
- Windows: Chrome and JAWS or NVDA
- Windows: Edge and Narrator
- Linux: Firefox and Orca
- iOS: Safari and VoiceOver
- Android: Chrome and TalkBack

## Computer screen readers

On computers, screen reader testing often lets you perform two tests simultaneously. First, it ensures that all meaningful web content and interactions are available to assistive tech. And second, it helps you verify that your experiences are keyboard operable (which is a [WCAG requirement](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible.html)).

After turning on your computer’s screen reader and opening your browser, use your keyboard to access the entire experience, top to bottom. Use the <kbd>tab</kbd>, <kbd>shift-tab</kbd>, and <kbd>↑ → ↓ ←</kbd> keys to move among (and within) focusable elements like links, form controls, and interactive components. And you can then use other keys like <kbd>space</kbd>, <kbd>enter</kbd>, and <kbd>escape</kbd> to interact with those elements.

Each screen reader also has its own set of keyboard shortcuts to navigate and read non-interactive content within an experience. Different keypresses can start (or stop) reading the page, jump to the next heading element. move vertically and horizontally among table cells, and so on. Links to keyboard shortcut resources are included in each screen reader’s section, below.

### VoiceOver (macOS)

- VoiceOver is included with MacOS.
- Commonly paired with: Safari
- [Keyboard shortcuts (from Deque)](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

#### Getting started

##### Setting up your Mac and Safari

Before testing with VoiceOver, you may first need to enable keyboard navigation—for both your Mac and for Safari.

To turn on keyboard navigation for your Mac, first go to the Keyboard section in System Settings (or System Preferences in MacOS versions before MacOS 13 Ventura).
For Ventura and later Macs, turn on the “Keyboard navigation” switch within the Keyboard section. For pre-Ventura Macs, enter the Shortcuts tab panel in the Keyboard section and check the “Use keyboard navigation to move focus between controls” checkbox.

You may now also need the additional step of turning on tab navigation in Safari’s application settings. To do so, open Safari’s Preferences/Settings window, enter the Advanced tab, and check the “Press Tab to highlight each item on a webpage” checkbox.

##### Starting VoiceOver

To toggle VoiceOver on and off, press <kbd>command-F5</kbd>. Or, if you have a Touch ID keyboard, hold down <kbd>command</kbd> and quickly press the <kbd>Touch ID</kbd> button three times.

To customize VoiceOver settings (e.g., the voice), open the VoiceOver Utility on your computer (<kbd>command-space</kbd>, and then type “voiceover utility”).

#### Bonus tips

##### Using the transcript window and muting VoiceOver

To reinforce what you’re hearing with visual feedback, VoiceOver’s transcript window reflects the content currently being read. If you find listening to VoiceOver too distracting, you can even mute its audio via the “Mute speech” checkbox in the VoiceOver Utility’s Speech tab. The transcript window will continue to appear and display content as if it were being read aloud.

When speech is muted, the shortcut for continually reading page content (<kbd>ctrl-opt-a</kbd>) will be disabled, though you can still use the <kbd>↑ → ↓ ←</kbd> keys to move through and test non-interactive content.

All that said, while transcript windows can be helpful, there are cases where the audio may not match a transcript exactly. So, when testing, you should confirm any issues with the audio on.

Muting audio may be most useful when demonstrating issues in video meetings, so you can still hear the other participants as you present.

### NVDA (Windows)

- [Download and install](https://www.nvaccess.org/download/) NVDA to use it. It’s free.
- Commonly paired with: Firefox (and Chrome, if you don’t have access to JAWS)
- [Keyboard shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts) (from Deque)

#### Getting started

Start NVDA by opening it in the Start menu, clicking on its icon, or pressing the <kbd>Windows</kbd> key and typing “NVDA” and then Enter.
When NVDA starts, a welcome dialog will appear. Here, you can specify what kind of keyboard you’re using. If your keyboard has an <kbd>insert</kbd> key (most full Windows keyboards do), then you can leave “Use CapsLock as an NVDA modifier key” unchecked. The <kbd>insert</kbd> key will be your NVDA modifier key (just referred to as <kbd>NVDA</kbd> from here on in keyboard shortcuts).

If your keyboard does not have an <kbd>insert</kbd> key (many laptop keyboards do not), you should check the “Use CapsLock…” checkbox. <kbd>capslock</kbd> will now be your <kbd>NVDA</kbd> key.

To customize NVDA’s settings, press <kbd>NVDA-n</kbd>. This will bring up an options menu, which you can then navigate with arrows and the <kbd>enter</kbd> key.

To quit NVDA, press <kbd>NVDA-q</kbd>. You can also quit NVDA and access settings via its system tray icon.

#### Bonus tips

##### Displaying the speech viewer

Like MacOS VoiceOver, NVDA offers an option for using the screen reader visually. This speech viewer actually keeps a running log of all content read during a session, for quick reference.

To open the speech viewer, press NVDA-N to open the app’s settings. Press <kbd>t</kbd> to open the tools menu. Arrow down to the “Speech Viewer” option and press <kbd>enter</kbd>. The speech viewer window will appear on your screen. The viewer window has a “Show Speech Viewer on Startup” checkbox, which you can check to make sure it always appears when you run NVDA.

As with VoiceOver’s transcript window, there are cases where audio may not match the speech viewer’s log exactly. So, when testing, confirm any issues with audio on.

##### Creating a portable copy

One handy thing about NVDA is that you can create a portable copy to place on a flash drive and use on any Windows computer. This can be useful if you need to demonstrate something on someone else’s machine, or if you yourself switch computers.

To make a portable copy, start NVDA and open its settings (<kbd>NVDA-n</kbd>). Press <kbd>t</kbd> to open the tools menu. Arrow down to the “Create portable copy” option and press <kbd>enter</kbd>. You can then choose a destination for this copy of NVDA.

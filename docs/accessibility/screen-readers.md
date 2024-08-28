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

To toggle VoiceOver on and off, press <kbd>Command-F5</kbd>. Or, if you have a Touch ID keyboard, hold down <kbd>Command</kbd> and quickly press the <kbd>Touch ID</kbd> key three times.

To customize VoiceOver settings (e.g., the voice), open the VoiceOver Utility on your computer (<kbd>Command-Space</kbd>, and then type “voiceover utility”).

#### Bonus tips

##### Using the transcript window and muting VoiceOver

To reinforce what you’re hearing with visual feedback, VoiceOver’s transcript window reflects the content currently being read. If you find listening to VoiceOver too distracting, you can even mute its audio via the “Mute speech” checkbox in the VoiceOver Utility’s Speech tab. The transcript window will continue to appear and display content as if it were being read aloud.

When speech is muted, the shortcut for continually reading page content (<kbd>Ctrl-Opt-A</kbd>) will be disabled, though you can still use the <kbd>↑ → ↓ ←</kbd> keys to move through and test non-interactive content.

All that said, while transcript windows can be helpful, there are cases where the audio may not match a transcript exactly. So, when testing, you should confirm any issues with the audio on.

Muting audio may be most useful when demonstrating issues in video meetings, so you can still hear the other participants as you present.

### NVDA (Windows)

- [Download and install](https://www.nvaccess.org/download/) NVDA to use it. It’s free.
- Commonly paired with: Firefox (and Chrome, if you don’t have access to JAWS)
- [Keyboard shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts) (from Deque)

#### Getting started

Start NVDA by opening it in the Start menu, clicking on its icon, or pressing the <kbd>Windows</kbd> key and typing “NVDA” and then Enter.
When NVDA starts, a welcome dialog will appear. Here, you can specify what kind of keyboard you’re using. If your keyboard has an <kbd>Insert</kbd> key (most full Windows keyboards do), then you can leave “Use CapsLock as an NVDA modifier key” unchecked. The <kbd>Insert</kbd> key will be assigned as your <kbd>NVDA</kbd> modifier key for keyboard shortcuts).

If your keyboard does not have an <kbd>Insert</kbd> key (many laptop keyboards do not), you should check the “Use CapsLock…” checkbox. <kbd>CapsLock</kbd> will now be your <kbd>NVDA</kbd> key.

To customize NVDA’s settings, press <kbd>NVDA-N</kbd>. This will bring up an options menu, which you can then navigate with arrows and the <kbd>Enter</kbd> key.

To quit NVDA, press <kbd>NVDA-Q</kbd>. You can also quit NVDA and access settings via its system tray icon.

#### Bonus tips

##### Displaying the speech viewer

Like MacOS VoiceOver, NVDA offers an option for using the screen reader visually. This speech viewer actually keeps a running log of all content read during a session, for quick reference.

To open the speech viewer, press <kbd>NVDA-N</kbd> to open the app’s settings. Press <kbd>T</kbd> to open the tools menu. Arrow down to the “Speech Viewer” option and press <kbd>Enter</kbd>. The speech viewer window will appear on your screen. The viewer window has a “Show Speech Viewer on Startup” checkbox, which you can check to make sure it always appears when you run NVDA.

As with VoiceOver’s transcript window, there are cases where audio may not match the speech viewer’s log exactly. So, when testing, confirm any issues with audio on.

##### Creating a portable copy

One handy thing about NVDA is that you can create a portable copy to place on a flash drive and use on any Windows computer. This can be useful if you need to demonstrate something on someone else’s machine, or if you yourself switch computers.

To make a portable copy, start NVDA and open its settings (<kbd>NVDA-N</kbd>). Press <kbd>T</kbd> to open the tools menu. Arrow down to the “Create portable copy” option and press <kbd>Enter</kbd>. You can then choose a destination for this copy of NVDA.

### JAWS (Windows)

- [Download and install JAWS](https://support.freedomscientific.com/Downloads/JAWS) to use it. It’s commercial software with a trial mode.
- Commonly paired with: Chrome
- [Keyboard shortcuts (from the official Freedom Scientific site)](https://www.freedomscientific.com/training/jaws/hotkeys/)
- [Keyboard shortcuts (from Deque)](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts)

#### Getting started

Start JAWS by opening it in the Start menu, clicking on its icon, or pressing the <kbd>Windows</kbd> key and typing “JAWS” and then Enter.

On keyboards with an <kbd>Insert</kbd> key, that key will be assigned as your <kbd>JAWS</kbd> modifier key for keyboard shortcuts. On keyboards without an <kbd>Insert</kbd> key, the <kbd>CapsLock</kbd> key will be your <kbd>JAWS</kbd> key. You can test this out by pressing <kbd>JAWS-F12</kbd> to read out the system time.

To customize your JAWS settings, use its system tray menu. You can press <kbd>Insert-J</kbd> (on a full keyboard) or <kbd>CapsLock-Shift-Ctrl-J</kbd> (on a laptop keyboard) to open this menu. Then press <kbd>O</kbd> for options. Pressing <kbd>B</kbd> for basic settings will then let you switch between keyboard types and adjust other options.

Note: If you have a web browser running when you start JAWS, you may need to restart it before the screen reader will work properly with it.

To quit JAWS, press <kbd>JAWS-F4</kbd>. If this keypress combination is unavailable (e.g., you don’t have function keys), you can quit JAWS and access settings via its system tray icon.

#### Bonus tips

##### JAWS text viewer

JAWS has a text viewer that appears at the top of the screen and reflects much (though not all) of what is spoken. If it is not running by default on your machine, you can enable it via the JAWS system tray menu.

First open the system tray menu with your mouse or via keyboard shortcuts (<kbd>Insert-J</kbd> or <kbd>CapsLock-Shift-Ctrl-J</kbd>). Then press <kbd>U</kbd> to open the utilities submenu and <kbd>V</kbd> to open the text viewer options. Select “Show Text Viewer” and press <kbd>Enter</kbd> to toggle it. Settings for the text viewer can also be opened via this same submenu.

### Narrator (Windows)

- Narrator is included with Windows.
- Commonly paired with: Edge
- [Keyboard shortcuts](https://dequeuniversity.com/screenreaders/narrator-keyboard-shortcuts) (from Deque)

#### Getting started

To start and stop Narrator, press <kbd>Windows-Ctrl-Enter</kbd> on your keyboard. Starting Narrator via this shortcut also opens the Narrator dashboard, which includes usage guides and settings.

<kbd>Insert</kbd> and <kbd>CapsLock</kbd> can both be used as Narrator modifier keys. To enable CapsLock as a modifier, press that key twice in quick succession.
To open Narrator settings when the dashboard is closed, press <kbd>Windows-Ctrl-N</kbd>.

### Orca (Linux)

- Orca is included with many Linux distros.
- Commonly paired with: Firefox
- Keyboard shortcuts (from Accessibility Support)

#### Getting started

To start Orca for the first time and open its settings dialog, type `orca -s` in your terminal program.

Within the settings app, you can indicate whether you are using a full or laptop keyboard, change voice options, etc. As with Windows screen readers, <kbd>Insert</kbd> is the default <kbd>Orca</kbd> modifier key used in keyboard shortcuts, but switching to laptop mode assigns <kbd>CapsLock</kbd> to <kbd>Orca</kbd>.

Once you have the settings how you like them, you can just type `orca` in a terminal to start the screen reader in subsequent sessions. To stop Orca, press <kbd>Ctrl-C</kbd> in the same terminal window in which you started it. Or you can use the keyboard shortcut <kbd>Windows-Alt-S</kbd> (or the equivalent keys on your keyboard, like <kbd>Command-Opt-S</kbd> on a Mac) to toggle Orca on and off.

**Note:** If you have a web browser running when you start Orca, you must restart it before the screen reader will work properly with it.

## Mobile screen readers

On mobile devices, you will use touchscreen gestures and taps instead of a keyboard to navigate the page and activate interactive elements.
For basic navigation, you can swipe right, left, up, and down with one finger to move forward and backward through the page, and then double-tap to activate form controls and links. Each platform has many other gestures for more advanced navigation. View the linked gesture shortcuts pages within each section for more guidance.

### VoiceOver (iOS)

- VoiceOver is included with iOS.
- Commonly paired with: Safari
- [Gesture shortcuts](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts) (from Deque)

#### Getting started

There are several ways to start and stop VoiceOver in iOS:

- If you’ve added VoiceOver as an Accessibility Shortcut (by going to Settings → Accessibility → Accessibility Shortcut and checking “VoiceOver”), you can toggle it by pressing your side button three times in rapid succession. (On non-Face-ID devices, click the Home button three times, instead.)
- If you’ve added it to Control Center (by going to Settings → Control Center and pressing the add symbol for “Accessibility Shortcuts”), you can toggle VoiceOver there.
- If you have Siri enabled, you can say, “Turn VoiceOver on/off.”
- You can toggle it in your device’s Settings → Accessibility → VoiceOver section. (This is also where you can customize VoiceOver to your preferences.)

#### Bonus tips

##### Using the Rotor

One of VoiceOver’s most powerful tools is the Rotor. The Rotor is a virtual dial you can turn to let you navigate by categories like lines, words, links, form elements, headings, and so on.

Turn the rotor on by placing two fingers on your screen (e.g., thumb and forefinger) and twisting them clockwise or counterclockwise (like turning a dial). VoiceOver will announce the currently-selected category as you twist. For example, twist until you hear “Headings.” If you now swipe up and down on the page, VoiceOver will move from heading to heading, and you can then swipe right and left to have the content around that heading read to you.

The Rotor also includes an option for setting VoiceOver’s speaking rate, if you’d like to adjust that setting.

### TalkBack (Android)

- TalkBack is included with Android.
- Commonly paired with: Chrome
- [Gesture shortcuts](https://dequeuniversity.com/screenreaders/talkback-shortcuts) (from Deque)

#### Getting started

There are several ways to start and stop TalkBack for Android:

- Toggle Talkback by pressing and holding both the volume up and volume down buttons simultaneously for a few seconds.
- If you have Google Assistant enabled, you can say, “Turn TalkBack on/off.”
- Go to Settings → Accessibility → TalkBack and select or deselect the “Use TalkBack” option. (This is also where you can adjust your screen reader preferences.)

#### Bonus tips

##### Using reading controls

Similar to iOS’s Rotor, Talkback’s reading controls let you navigate by categories like headings, links, or words. To change the current reading controls selection, quickly swipe up and then down (or vice versa) until TalkBack announces the category you want to use.

Once you’re selected a category, swipe up or down to navigate the page by that category, and then right or left to navigate content adjacent to the current heading, link, or whatever else you’ve navigated to.

TalkBack’s speaking rate can also be adjusted within reading controls.

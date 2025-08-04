## Usage

### Basic implementation

```html
<rh-scheme-toggle></rh-scheme-toggle>
```

### With custom labels

```html
<rh-scheme-toggle
  legend-text="Theme selection"
  light-text="Light theme"
  dark-text="Dark theme"
  system-text="Auto theme">
</rh-scheme-toggle>
```

### Setting initial scheme

```html
<rh-scheme-toggle scheme="dark"></rh-scheme-toggle>
```

## Behavior

### Persistence
The scheme toggle automatically:
- Saves the selected scheme to `localStorage` so it persists across browser 
sessions
- Restores the saved preference on page load

### System preference
When "System" is selected, the toggle:
- Sets `color-scheme: light dark` to respect user's OS preference
- Allows the browser/OS to determine the appropriate scheme
- Updates automatically when system preferences change

## Best practices

### Supporting `color-scheme` in your page CSS

### Placement

- Consider mobile placement, scheme toggles can be moved to drawers in mobile navs.
- Group with other appearance/preference controls when appropriate

### Integration

- Setting the color scheme via the toggle applies the selected scheme to the
entire document, by setting the `color-scheme` property on the body.
- Write your page CSS using `light-dark()` to take advantage of this.
- RHDS elements already use `light-dark()` internally, so if you follow our
[theming guidelines](/theming/), you'll get this for free.

### User experience

- Provides immediate visual feedback when scheme changes
- Respects user's initial system preference as the default, avoid setting the `scheme` attribute
- Don't override user selections without explicit consent

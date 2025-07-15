# Scheme Toggle
A switch that toggles the state of the color scheme (between light, dark and system default).

## Usage
Use Scheme Toggle when you want to give users the ability to toggle light and dark schemes. Additionally there is a third option to default to the system default setting for the users browser. 

### Basic Scheme Toggle
```html
<rh-scheme-toggle></rh-scheme-toggle>
```

## Accessibility

By default, `rh-scheme-toggle` comes with accessible English labels for its internal components. When 
using the component on internationalized pages, use one of four attributes to ensure that users of
assistive technology receive an accessible experience.

- `legend-text`
    - The legend element represents a caption for the rest of the contents
    - Eg: `<rh-scheme-toggle legend-text="[localized text]"></rh-scheme-toggle>`
- `light-text`
    - Represents the Label text and Input value, for the Light option
    - Eg: `<rh-scheme-toggle light-text="[localized text]"></rh-scheme-toggle>`
- `dark-text`
    - Represents the Label text and Input value, for the Dark option
    - Eg: `<rh-scheme-toggle dark-text="[localized text]"></rh-scheme-toggle>`
- `system-text`
    - Represents the Label text and Input value, for the System option
    - Eg: `<rh-scheme-toggle system-text="[localized text]"></rh-scheme-toggle>`

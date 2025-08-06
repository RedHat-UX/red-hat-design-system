## Styles

The scheme toggle consists of three radio button options presented as an icon button group:

- **Light mode**: Sun icon for light color scheme
- **Dark mode**: Moon icon for dark color scheme
- **System**: Auto icon for system preference

### Visual design

- Uses icon-only buttons with tooltips for compact presentation
- Icons clearly communicate each mode (sun, moon, auto)
- Icon buttons are visually grouped into a single control

### States

- **Default**: Shows current selection with visual emphasis
- **Hover**: Provides hover feedback on interactive elements
- **Focus**: Clear focus indicators for keyboard navigation
- **Selected**: Active state clearly indicates current scheme selection

### Customization

The toggle supports customizable label text through attributes:
- `legend-text`: Text for the fieldset legend (default: "Color scheme")
- `light-text`: Label for light mode option (default: "Light")
- `dark-text`: Label for dark mode option (default: "Dark")
- `system-text`: Label for system option (default: "System")

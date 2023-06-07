{% section %}
## Style
A call to action is text in a container or paired with an icon that directs users to new pages. Depending on the link, content, and hierarchy, a call to action can be used on its own or grouped with other calls to action.

### Anatomy

{% example palette="light",
            alt="Anatomy image showing calls to action with various annotation numbers",
            src="../cta-anatomy.png" %}

1. Text label
2. Container
3. Border
4. Icon
{.example-notes}

{% endsection %}

{% section %}
## Theme
Calls to action are available in both light and dark themes.

### Light and dark themes

{% example palette="light",
            alt="Image of light theme Primary, Secondary, Brick, Default, and Default video variants",
            src="../cta-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme Primary, Secondary, Brick, Default, and Default video variants",
            src="../cta-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:25%">Light theme</th>
        <th style="width:25%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - Primary text</td>
        <td>#FFFFFF</td>
        <td>#FFFFFF</td>
    </tr>
    <tr>
        <td>Color - Primary surface</td>
        <td>#EE0000</td>
        <td>#EE0000</td>
    </tr>
    <tr>
        <td>Border radius - Primary</td>
        <td>4px<br />0.25rem</td>
        <td>4px<br />0.25rem</td>
    </tr>
    <tr>
        <td>Color - Secondary text and border</td>
        <td>151515</td>
        <td>#FFFFFF</td>
    </tr>
    <tr>
        <td>Border radius - Secondary</td>
        <td>4px<br />0.25rem</td>
        <td>4px<br />0.25rem</td>
    </tr>
    <tr>
        <td>Border width - Primary</td>
        <td>1px<br />0.0625rem</td>
        <td>1px<br />0.0625rem</td>
    </tr>
    <tr>
        <td>Color - Brick text</td>
        <td>#0066CC</td>
        <td>#73BCF7</td>
    </tr>
    <tr>
        <td>Color - Brick border</td>
        <td>#C7C7C7</td>
        <td>#707070</td>
    </tr>
    <tr>
        <td>Border radius - Brick</td>
        <td>4px<br />0.25rem</td>
        <td>4px<br />0.25rem</td>
    </tr>
    <tr>
        <td>Border width - Brick</td>
        <td>1px<br />0.0625rem</td>
        <td>1px<br />0.0625rem</td>
    </tr>
    <tr>
        <td>Color - Default text and icon</td>
        <td>#0066CC</td>
        <td>#73BCF7</td>
    </tr>
</table>

### Bricks
The Brick variant includes a slot for an icon as well as an extra orientation.

{% example palette="light",
            alt="Image of light theme Brick variants; one with text and no icon, one with an icon on the left of text, and one with an icon on top of text",
            src="../cta-bricks-theme-light.png" %}

{% example palette="darkest",
            alt="Image of light theme Brick variants; one with text and no icon, one with an icon on the left of text, and one with an icon on top of text",
            src="../cta-bricks-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th style="width:33%">Property</th>
        <th style="width:33%">Light theme</th>
        <th style="width:33%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - icon</td>
        <td>#707070</td>
        <td>#A3A3A3</td>
    </tr>
</table>

### Video variants
Primary, Secondary, and Default variants include a slot for a video icon. The video icon is the same color as the text label.

{% example palette="light",
            alt="Image of Primary, Secondary, and Default variants with video icons to the right of text",
            src="../cta-video-variants.png" %}

### White variants
Dark theme includes white variants if other variants are duplicative or if they violate accessibility guidelines.

{% example palette="light",
            alt="Image of Primary and Primary video variants with a white background and black text and Default and Default video variants with white text",
            src="../cta-white-variants.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:50%">Current Value</th>
    </tr>
    <tr>
        <td>Color - Primary text and icon</td>
        <td>#151515</td>
    </tr>
    <tr>
        <td>Color - Primary surface</td>
        <td>#FFFFFF</td>
    </tr>
    <tr>
        <td>Border width - Primary</td>
        <td>4px<br />0.25rem</td>
    </tr>
    <tr>
        <td>Color - Default text and icon</td>
        <td>#FFFFFF</td>
    </tr>
</table>

{% endsection %}

{% section %}
## Configuration
All calls to action with a container have the same border radius, but the height and width vary based on the presence of icons and the amount of content. Calls to action in a row are horizontally centered.

{% example palette="light",
            alt="Image of all variants with various specs like border radius, height, width, alignment, and more",
            src="../cta-configuration.png" %}

{% endsection %}

{% section %}
## Space
Space values are the same on all breakpoints for calls to action. To see space values when calls to action are grouped, go to the [Guidelines](https://ux.redhat.com/elements/call-to-action/guidelines/) page.

{% example palette="light",
            alt="Image of Primary, Secondary, two Brick variants, and two Default variants with spacing values in between",
            src="../cta-space.png" %}

{% spacerTokensTable 
    headline='',
    caption='',
    tokens="--rh-space-md, --rh-space-lg, --rh-space-xl" %}
{% endspacerTokensTable %}

{% endsection %}

{% section %}
## Interaction states
Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

{% example palette="light",
            alt="Image of light theme hover states",
            src="../cta-interaction-state-hover-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme hover states",
            src="../cta-interaction-state-hover-theme-dark.png" %}

{% example palette="darkest",
            alt="Image of dark theme white variant hover states",
            src="../cta-interaction-state-hover-white-variants.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:25%">Light theme</th>
        <th style="width:25%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - Primary surface</td>
        <td>#BE0000</td>
        <td>#BE0000</td>
    </tr>
    <tr>
        <td>Color - Primary (white) surface</td>
        <td>N/A</td>
        <td>#E0E0E0</td>
    </tr>
    <tr>
        <td>Color - Secondary text</td>
        <td>#FFFFFF</td>
        <td>#151515</td>
    </tr>
    <tr>
        <td>Color - Secondary surface</td>
        <td>#151515</td>
        <td>#FFFFFF</td>
    </tr>
    <tr>
        <td>Color - Brick text</td>
        <td>#004080</td>
        <td>#73BCF7</td>
    </tr>
    <tr>
        <td>Border radius - Primary</td>
        <td>4px<br />0.25rem</td>
        <td>4px<br />0.25rem</td>
    </tr>
    <tr>
        <td>Color - Secondary text and border</td>
        <td>151515</td>
        <td>#FFFFFF</td>
    </tr>
    <tr>
        <td>Text decoration - Brick text</td>
        <td>Underline</td>
        <td>Underline</td>
    </tr>
    <tr>
        <td>Color - Brick surface</td>
        <td>#F2F2F2</td>
        <td>#292929</td>
    </tr>
    <tr>
        <td>Color - Default text</td>
        <td>#004080</td>
        <td>#73BCF7</td>
    </tr>
    <tr>
        <td>Color - Default (white) text</td>
        <td>N/A</td>
        <td>#C7C7C7</td>
    </tr>
</table>

### Focus

{% alert title="Helpful tip", state="info" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
            alt="Image of light theme focus states",
            src="../cta-interaction-state-focus-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme focus states",
            src="../cta-interaction-state-focus-theme-dark.png" %}

{% example palette="darkest",
            alt="Image of dark theme white variant focus states",
            src="../cta-interaction-state-focus-white-variants.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:25%">Light theme</th>
        <th style="width:25%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - focus ring</td>
        <td>#0066CC</td>
        <td>#73BCF7</td>
    </tr>
</table>

### Active

{% alert title="Helpful tip", state="info" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
            alt="Image of light theme active states",
            src="../cta-interaction-state-active-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme active states",
            src="../cta-interaction-state-active-theme-dark.png" %}

{% example palette="darkest",
            alt="Image of dark theme white variant active states",
            src="../cta-interaction-state-active-white-variants.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:25%">Light theme</th>
        <th style="width:25%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - focus ring</td>
        <td>#0066CC</td>
        <td>#73BCF7</td>
    </tr>
</table>

{% endsection %}
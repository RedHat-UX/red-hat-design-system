{% section %}
## Style

An avatar is a placeholder graphic, custom photo, or generated image. It can be used by itself, but it is often paired with detailed text about the user including their full name, job title, and company.

### Anatomy

{% example palette="light",
            alt="Anatomy of an avatar group with numbered annotations",
            src="../avatar-anatomy.png" %}

1. Thumbnail
2. Job details text
{.example-notes}

{% endsection %}

{% section %}
## Variations

The Default variation is visible when a user has not uploaded a <strong>custom image</strong> (like a photo). Once they do, what they provided replaces the gray thumbnail. If they choose not to, a colored pattern will be generated instead based on their name. A specific name is linked to the same pattern, so thumbnails can stay static without storing lots of generated images.

{% example palette="light",
            alt="Image of all avatar groups including default, photo, green squares, purple squares, and blue triangles",
            src="../avatar-variations.png" %}

### Plain
The avatar thumbnail can be used on its own in places like [accordions](https://ux.redhat.com/elements/accordion/), [cards](https://ux.redhat.com/elements/card/), navigations, tables, and more.

{% example palette="light",
            alt="Image of a row of only avatar thumbnails",
            src="../avatar-plain.png" %}

### Link
Links can be applied to full name or job details text.

{% alert title="Warning", state="warning" %}
Do not apply links to full name <strong>and</strong> job details text at the same time.
{% endalert %}

{% example palette="light",
            alt="Image of two avatar groups; one has the full name linked and the other has the company name linked",
            src="../avatar-links.png" %}

{% endsection %}

{% section %}
## Theme
All avatar variations are available in both light and dark themes.
### Light and dark themes

{% example palette="light",
            alt="Image of a light theme avatar group",
            src="../avatar-theme-light.png" %}

{% example palette="darkest",
            alt="Image of a dark theme avatar group",
            src="../avatar-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th style="width:33%">Element</th>
        <th style="width:33%">Light theme</th>
        <th style="width:33%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - job details text</td>
        <td>#4D4D4D</td>
        <td>#C7C7C7</td>
    </tr>
</table>

{% endsection %}

{% section %}
## Configuration
The default size of the avatar thumbnail is <code>64px x 64px</code> and the avatar thumbnail and job details text are horizontally centered. To see alignment examples, go to the [Guidelines](https://ux.redhat.com/elements/avatar/guidelines/) page.

{% example palette="light",
            alt="Image of two avatar groups showing specs like height, width, and centering/alignment",
            src="../avatar-configuration.png" %}

### Job details text
Job details text has specific styles applied to it.

{% example palette="light",
            alt="Image of two avatar groups showing only job details text left justified and center justified",
            src="../avatar-job-details-text.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:50%">Current Value</th>
    </tr>
    <tr>
        <td>Font weight - full name</td>
        <td>Medium</td>
    </tr>
    <tr>
        <td>Font weight - job title and company name</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>Font style - company name</td>
        <td>Italic</td>
    </tr>
</table>

{% endsection %}

{% section %}
## Space
Space values are the same for all variations and on all breakpoints.

{% example palette="light",
            alt="Image of all avatar groups with spacing values in between",
            src="../avatar-space.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:50%">Current Value</th>
    </tr>
    <tr>
        <td>
          <img src="../avatar-16px-spacer.png" alt="16px spacer">
        </td>
        <td>16px <br/> 1.0rem
        </td>
    </tr>
</table>

{% endsection %}

{% section %}
## Interaction States
Interaction states are visual representations used to communicate the status of an element or pattern.
### Hover

{% example palette="light",
           alt="Image of light theme avatar group hover states",
           src="../avatar-interaction-state-hover-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme avatar group hover states",
            src="../avatar-interaction-state-hover-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th style="width:50%">Property</th>
        <th style="width:25%">Light theme</th>
        <th style="width:25%">Dark theme</th>
    </tr>
    <tr>
        <td>Color - full name text</td>
        <td>#004080</td>
        <td>#BEE1FA</td>
    </tr>
    <tr>
        <td>Text decoration - full name text</td>
        <td>Underline</td>
        <td>Underline</td>
    </tr>
</table>

### Focus

{% alert title="Helpful tip", state="info" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
            alt="Image of light theme avatar group focus states",
            src="../avatar-interaction-state-focus-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme avatar group focus states",
            src="../avatar-interaction-state-focus-theme-dark.png" %}

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
           class="centered",
           alt="Image of light theme avatar group active states",
           src="../avatar-interaction-state-active-theme-light.png" %}

{% example palette="darkest",
            alt="Image of dark theme avatar group active states",
            src="../avatar-interaction-state-active-theme-dark.png" %}

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
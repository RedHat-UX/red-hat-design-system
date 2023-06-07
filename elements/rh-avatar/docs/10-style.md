<style>
.col-211 th { width: 25%; }
.col-211 th:first-of-type { width: 50%; }
.col-111 th { width: 33%; }
.col-11 th { width: 50%; }
</style>

{% section %}
  ## Style

  An avatar is a placeholder graphic, custom photo, or generated image. It can 
  be used by itself, but it is often paired with detailed text about the user 
  including their full name, job title, and company.

  ### Anatomy

  {% example palette="light",
              alt="Anatomy of an avatar group with numbered annotations",
              src="../avatar-anatomy.png" %}

  1. Thumbnail
  2. Job details text
  {.example-notes}
{% endsection %}

{% section %}
  ## Variants

  The Default variant is visible when a user has not uploaded a **custom image** 
  (like a photo). Once they do, what they provided replaces the gray thumbnail. 
  If they choose not to, a colored pattern will be generated instead based on 
  their name. A specific name is linked to the same pattern, so thumbnails can 
  stay static without storing lots of generated images.

  {% example palette="light",
              alt="Image of all avatar groups including default, photo, green squares, purple squares, and blue triangles",
              src="../avatar-variations.png" %}

  ### Plain
  The avatar thumbnail can be used on its own in places like 
  [accordions](https://ux.redhat.com/elements/accordion/), 
  [cards](https://ux.redhat.com/elements/card/), navigations, tables, and more.

  {% example palette="light",
              alt="Image of a row of only avatar thumbnails",
              src="../avatar-plain.png" %}

  ### Link
  Links can be applied to full name or job details text.

  {% alert title="Warning", state="warning" %}
  Do not apply links to full name **and** job details text at the same time.
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

  | Element                  | Light theme | Dark theme |
  | ------------------------ | ----------- | ---------- |
  | Color - job details text | #4D4D4D     | #C7C7C7    |

  {.full-width .col-111}
{% endsection %}

{% section %}
  ## Configuration

  The default size of the avatar thumbnail is `64px x 64px` and the avatar 
  thumbnail and job details text are horizontally centered. To see alignment 
  examples, go to the 
  [Guidelines](https://ux.redhat.com/elements/avatar/guidelines/) page.

  {% example palette="light",
              alt="Image of two avatar groups showing specs like height, width, and centering/alignment",
              src="../avatar-configuration.png" %}

  ### Job details text
  Job details text has specific styles applied to it.

  {% example palette="light",
              alt="Image of two avatar groups showing only job details text left justified and center justified",
              src="../avatar-job-details-text.png" %}

  | Property                                 | Current Value |
  | ---------------------------------------- | ------------- |
  | Font weight - full name                  | Medium        |
  | Font weight - job title and company name | Regular       |
  | Font style - company name                | Italic        |

  {.full-width .col-11}
{% endsection %}

{% section %}
  ## Space
  Space values are the same for all variations and on all breakpoints.

  {% example palette="light",
              alt="Image of all avatar groups with spacing values in between",
              src="../avatar-space.png" %}

  {% spacerTokensTable 
      headline='',
      caption='',
      tokens="--rh-space-lg" %}
  {% endspacerTokensTable %}
{% endsection %}

{% section %}
  ## Interaction states

  Interaction states are visual representations used to communicate the status 
  of an element or pattern.

  ### Hover

  {% example palette="light",
             alt="Image of light theme avatar group hover states",
             src="../avatar-interaction-state-hover-theme-light.png" %}

  {% example palette="darkest",
              alt="Image of dark theme avatar group hover states",
              src="../avatar-interaction-state-hover-theme-dark.png" %}

  | Property                         | Light theme | Dark theme |
  | -------------------------------- | ----------- | ---------- |
  | Color - full name text           | #004080     | #BEE1FA    |
  | Text decoration - full name text | Underline   | Underline  |

  {.full-width .col-211}

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

  | Property           | Light theme | Dark theme |
  | ------------------ | ----------- | ---------- |
  | Color - focus ring | #0066CC     | #73BCF7    |

  {.full-width .col-211}

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

  | Property           | Light theme | Dark theme |
  | ------------------ | ----------- | ---------- |
  | Color - focus ring | #0066CC     | #73BCF7    |

  {.full-width .col-211}
{% endsection %}

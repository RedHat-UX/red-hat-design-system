## Usage

Use a footer to provide users with additional supporting content and show them 
they are using an official Red Hat website. The footer is the last or lowest 
element in a layout or user interface and is persistently displayed across all 
screens of the user experience.

## Variants

A footer is divided into two parts, the **Website-specific** footer and the 
**Universal** footer.

### Website-specific footer 
Most of the content in the website-specific footer can be customized.

{% example palette="none",
          alt="Image of the website-specific footer showing regions that can and cannot be customized",
          src="../footer-variant-website-specific.png" %}

| Region {style="width: 25%" } | Customizable {style="width: 25%" } | Use case                                                    |
| ---------------------------- | ---------------------------------- | ----------------------------------------------------------- |
| Website logo                 | Yes                                | Custom logo of the website where the footer is used         |
| Social media links           | Yes                                | Links to specific social media pages                        |
| Navigation links             | Yes                                | Navigation links based on specific information architecture |
| Custom message               | Yes                                | Custom message to introduce or describe the website         |
| Red Hat message              | No                                 | Message about Red Hat that is the same across all websites  |
| Extra content                | Yes                                | Extra content, top task, or call to action (optional)       |
| Language switcher            | No                                 | Menu that allows users to switch the language               |

### Universal footer 
Content in the universal footer is always the same across all websites.

{% example palette="none",
          alt=" Image of the universal footer showing only one region that cannot be customized",
          src="../footer-variant-universal.png" %}

| Region {style="width: 25%" } | Customizable {style="width: 25%" } | Use case                                              |
| ---------------------------- | ---------------------------------- | ----------------------------------------------------- |
| Navigation links             | No                                 | Links for global pages, Summit, and legal information |

## Layout
### Browser window
A footer spans the entire width of the browser window at all breakpoints.

{% example palette="none",
          alt=" Image of a footer in a layout spanning the width of the browser window",
          src="../footer-layout-browser-window.png" %}

### Universal footer

The universal footer can be used by itself on orphan pages or pages that do not 
fit a specific information architecture like landing pages, minisites, etc. The 
Red Hat fedora always links to redhat.com.

{% alert state="warning", title="Warning" %}
Using the universal footer by itself is acceptable, but never use the 
website-specific footer by itself.
{% endalert %}

{% example palette="none",
          alt=" Image of the universal footer by itself",
          src="../footer-layout-universal-footer.png" %}

### Other web properties

The footer was designed to be applied to all Red Hat web properties. The layout 
is flexible enough to accommodate grids, elements, text, and more.

{% example palette="none",
          alt=" Image of a footer on a Customer Portal website",
          src="../footer-layout-customer-portal.png" %}

{% example palette="none",
          alt=" Image of a footer on a Developer website",
          src="../footer-layout-developer.png" %}

{% example palette="none",
          alt=" Image of a footer on a Partner Connect website",
          src="../footer-layout-partner-connect.png" %}

## Behavior

### Columns

If the website-specific footer includes a lot of content, columns can be added 
below the first row of columns.

{% example palette="none",
          alt=" Image of a footer with four columns of links in one row and two columns in the second row",
          src="../footer-behavior-columns-two-rows.png" %}

If the website-specific footer includes less content, columns will stretch to 
fill the empty space.

{% example palette="none",
          alt=" Image of a footer with only two columns of links in one row",
          src="../footer-behavior-columns-less-content.png" %}

If the number of columns changes, social media links will shift position to 
remain aligned to the left edge of the last column.

{% example palette="none",
          alt=" Image of a footer with three columns of links showing an example of social media icons shifting",
          src="../footer-behavior-columns-social-media-icons.png" %}

## Responsive design

### Large breakpoints

{% example palette="none",
          alt=" Image of a large breakpoint footer",
          src="../footer-responsive-large-breakpoints.png" %}

### Small breakpoints

Columns will collapse to an accordion as breakpoints get smaller and other 
content will also get rearranged.

{% alert title="Helpful tip" %}
At small breakpoints, the horizontal rule between the logo, icons, and columns 
is no longer visible.
{% endalert %}

{% example palette="none",
          alt=" Image of a tablet breakpoint footer",
          src="../footer-responsive-small-breakpoints-a.png" %}

{% example palette="none",
          alt=" Image of a mobile breakpoint footer",
          src="../footer-responsive-small-breakpoints-b.png" %}

| Breakpoint {style="width: 33%" } | Range {style="width: 33%" } | Content layout |
| -------------------------------- | --------------------------- | -------------- |
| Desktop, large                   | > 1680px                    | Columns        |
| Desktop, medium                  | 1440px - 1679px             | Columns        |
| Desktop, small                   | 1200px - 1439px             | Columns        |
| Tablet, large                    | 992px - 1199px              | Columns        |
| Tablet, small                    | 768px - 991px               | Accordion      |
| Mobile, large                    | 576px - 767px               | Accordion      |
| Mobile, small                    | < 575px                     | Accordion      |

## Best practices
### Reversing the order

Do not reverse the order of footers, the website-specific footer should always 
be on top.

{% example palette="none",
          alt=" Image of the global footer on top of the website-specific footer which is incorrect usage",
          src="../footer-best-practice-1.png" %}

### Replacing columns

Do not replace columns with an accordion if there is still adequate space.

{% example palette="none",
          alt=" Image of a desktop footer with an accordion replacing four columns of links which is incorrect usage",
          src="../footer-best-practice-2.png" %}

### Website-specific footer

Do not use the website-specific footer without the universal footer.

{% example palette="none",
          alt=" Image of a footer missing the universal footer which is incorrect usage",
          src="../footer-best-practice-3.png" %}

### Custom universal footer

Do not create your own custom universal footer by changing, deleting, or 
rearranging any elements.

{% example palette="none",
          alt=" Image of a universal footer with a new design which is incorrect usage",
          src="../footer-best-practice-4.png" %}

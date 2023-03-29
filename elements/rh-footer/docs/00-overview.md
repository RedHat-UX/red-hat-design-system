The footer is a container that displays links and content to visitors who reach 
the bottom of a page, it also shows them they are using an official Red Hat 
website.

## Usage

The footer should be used to provide a visitor with additional links and content 
if they did not find what they were looking for, it can also include copyright 
and legal information.

### Layout

The modular and universal have specific regions for inserting various content 
types. Do not insert content at random, use the correct regions.

- **section header** - Region for inserting a website logo (home page, Customer 
  Portal, etc.) and social media links.
- **section main** - Region for inserting modular navigation links, website 
  messaging, top tasks, or other unique content.
- **section footer** - Region for inserting universal navigation links, legal 
  content, and a link to the Summit website.

![Footer component usage - layout]({{ './footer-usage-layout.png' | url }})

### Universal footer

The universal footer can be used by itself on pages that do not fit a specific 
IA. Examples include landing pages, minisites, etc.

![Footer component usage - global region]({{ './footer-usage-universal.png' | url }})

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-footer>` demo in a new tab
  {% endcta %}
{% endsection %}

{% componentStatus %}{% endcomponentStatus %}

## Examples on other websites

The footer was designed to be applied to all Red Hat websites. The layout is 
flexible enough to accommodate various content types and arrangements.

### Red Hat Customer Portal

{% alert title="Status indicator", level=4 %}
  The Status indicator (All systems operational) is a feature that will be added 
  to all footers at a later date.
{% endalert %}

![Footer component example - Red Hat Customer Portal]({{ './footer-example-cp.png' | url }})

### Red Hat Developer

![Footer component example - Red Hat Developer]({{ './footer-example-developer.png' | url }})

### Red Hat Partner Connect

![Footer component example - Red Hat Partner Connect]({{ './footer-example-pc.png' | url }})

## Behavior

### Columns

If the modular footer includes a lot of content, a second row of columns will 
be added underneath the first row.

![Footer component behavior - columns]({{ './footer-behavior-columns.png' | url }})

If the modular footer includes less content, columns should stretch to fill 
the negative space.

![Footer component behavior - less columns]({{ './footer-behavior-less-columns.png' | url }})

The social media links should remain aligned to the left edge of the last 
column if the number of columns change.

![Footer component behavior - social media links]({{ './footer-behavior-links.png' | url }})

### Left-to-right languages

When content is translated to other left-to-right languages, the footer 
maintains the same layout and text size.

![Footer component behavior - Japanese translation]({{ './footer-behavior-japanese.png' | url }}) 

### Right-to-left languages

When content is translated to a right-to-left language like Hebrew, the text 
size increases to 16px so visual subtleties of unique characters are easier to 
notice.

![Footer component behavior - Hebrew translation]({{ './footer-behavior-hebrew.png' | url }})

## Related Elements

- [Secondary Navigation]({{ '/elements/navigation-secondary' | url }})

{% include 'feedback.html' %}


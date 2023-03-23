The footer is a container that displays links and content to visitors who reach 
the bottom of a page, it also shows them they are using an official Red Hat 
website.

## Usage

The footer should be used to provide a visitor with additional links and content 
if they did not find what they were looking for, it can also include copyright 
and legal information.

#### Layout

The modular and universal have specific regions for inserting various content 
types. Do not insert content at random, use the correct regions.

- **section header** - Region for inserting a website logo (home page, Customer 
  Portal, etc.) and social media links.
- **section main** - Region for inserting modular navigation links, website 
  messaging, top tasks, or other unique content.
- **section footer** - Region for inserting universal navigation links, legal 
  content, and a link to the Summit website.

![Footer component usage - layout]({{ '/assets/footer/footer-usage-layout.png' | url }})

#### Universal footer

The universal footer can be used by itself on pages that do not fit a specific 
IA. Examples include landing pages, minisites, etc.

![Footer component usage - global region]({{ '/assets/footer/footer-usage-universal.png' | url }})

## Demos

{% playground tagName=tagName %}{% endplayground %}

{% componentStatus %}{% endcomponentStatus %}

## Examples on other websites

The footer was designed to be applied to all Red Hat websites. The layout is 
flexible enough to accommodate various content types and arrangements.

#### Red Hat Customer Portal

<rh-alert state="info">

<h5 slot="header">Status indicator</h5>

The Status indicator (All systems operational) is a feature that will be added to all footers at a later date.

</rh-alert>

![Footer component example - Red Hat Customer Portal]({{ '/assets/footer/footer-example-cp.png' | url }})

#### Red Hat Developer

![Footer component example - Red Hat Developer]({{ '/assets/footer/footer-example-developer.png' | url }})

#### Red Hat Partner Connect

![Footer component example - Red Hat Partner Connect]({{ '/assets/footer/footer-example-pc.png' | url }})

## Behavior

#### Columns

If the modular footer includes a lot of content, a second row of columns will 
be added underneath the first row.

![Footer component behavior - columns]({{ '/assets/footer/footer-behavior-columns.png' | url }})

If the modular footer includes less content, columns should stretch to fill 
the negative space.

![Footer component behavior - less columns]({{ '/assets/footer/footer-behavior-less-columns.png' | url }})

The social media links should remain aligned to the left edge of the last 
column if the number of columns change.

![Footer component behavior - social media links]({{ '/assets/footer/footer-behavior-links.png' | url }})

#### Left-to-right languages

When content is translated to other left-to-right languages, the footer 
maintains the same layout and text size.

![Footer component behavior - Japanese translation]({{ '/assets/footer/footer-behavior-japanese.png' | url }}) 

#### Right-to-left languages

When content is translated to a right-to-left language like Hebrew, the text 
size increases to 16px so visual subtleties of unique characters are easier to 
notice.

![Footer component behavior - Hebrew translation]({{ 
'/assets/footer/footer-behavior-hebrew.png' | url }})

<section class="component-footer">

<div>

## Related Components

- [Secondary Navigation](../secondary-nav)

</div>

<div>

{% include 'feedback.html' %}

</div>

</section>


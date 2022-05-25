---
layout: layout-basic.njk
title: Footer
tags:
  - component
includeComponent:
  - rh-footer
---

<style>
dl, dt, dd {
  margin: 0;
  padding: 0;
}

dl, #component-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

dt {
  font-size: 20px;
  font-family: 'Red Hat Display', sans-serif;
  color: #151515;
}

small {
  font-size: 14px;
  color: #6a6e73;
}
</style>

{% section headline="Overview" %}
The footer is a container that displays links and content to visitors who reach the bottom of a page, it also shows them they are using an official Red Hat website.
{% endsection %}

{% section headline="Sample component" %}
<rh-footer>
  <a slot="logo" href="/en">
    <img src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
         alt="Red Hat logo"
         loading="lazy" />
  </a>
  <rh-footer-social-link slot="social-links-end" icon="web-icon-github">
    <a href="#github">Github</a>
  </rh-footer-social-link>
  <h3 slot="links">Products</h3>
  <ul slot="links">
    <li><a href="#">Red Hat Ansible Automation Platform</a></li>
    <li><a href="#">Red Hat Enterprise Linux</a></li>
    <li><a href="#">Red Hat OpenShift</a></li>
    <li><a href="#">Red Hat OpenShift Container Storage</a></li>
    <li><a href="#">Red Hat OpenStack Platform</a></li>
    <li><a href="#">See all products</a></li>
  </ul>
  <h3 slot="links">Tools</h3>
  <ul slot="links">
    <li><a href="#">My account</a></li>
    <li><a href="#">Customer support</a></li>
    <li><a href="#">Red Hat OpenShift</a></li>
    <li><a href="#">Contact training</a></li>
    <li><a href="#">Red Hat OpenStack Platform</a></li>
    <li><a href="#">See all products</a></li>
  </ul>
  <h3 slot="links">Try, buy, sell</h3>
  <ul slot="links">
    <li><a href="#">Red Hat Store</a></li>
    <li><a href="#">Red Hat Enterprise Linux</a></li>
    <li><a href="#">Red Hat OpenShift</a></li>
    <li><a href="#">Contact training</a></li>
    <li><a href="#">Red Hat OpenStack Platform</a></li>
    <li><a href="#">See all products</a></li>
  </ul>
  <h3 id="communicate" slot="links">Communicate</h3>
  <ul slot="links">
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Feedback</a></li>
    <li><a href="#">Social</a></li>
    <li><a href="#">Red Hat newsletter</a></li>
    <li><a href="#">Email preferences</a></li>
  </ul>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">About Red Hat</h3>
    <p>We’re the world’s leading provider of enterprise open source solutions―including Linux, cloud, container,
      and
      Kubernetes. We deliver hardened solutions that make it easier for enterprises to work across platforms and
      environments, from the core datacenter to the network edge.
    </p>
    <p>Duis nulla esse ad id anim ipsum et magna amet laborum ex consectetur nulla. Est non ex ea ut ex laborum
      id
      aute eiusmod eu quis qui. <a href="#">Consequat consequat tempor elit nostrud non</a>.</p>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
    <pfe-cta><a href="#blocks">Sign up now</a></pfe-cta>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Select a language</h3>
    <p>insert language switcher here...</p>
  </rh-footer-block>
  <h3 slot="footer-links-primary" hidden>Red Hat legal and privacy links</h3>
  <ul slot="footer-links-primary">
    <li><a href="#">About Red Hat</a></li>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Locations</a></li>
    <li><a href="#">Contact Red Hat</a></li>
    <li><a href="#">Red Hat Blog</a></li>
    <li><a href="#">Cool Stuff Store</a></li>
    <li><a href="#">Diversity, equity, and inclusion</a></li>
  </ul>
  <rh-footer-copyright slot="footer-links-secondary"></rh-footer-copyright>
  <h3 slot="footer-links-secondary" hidden>Red Hat legal and privacy links</h3>
  <ul slot="footer-links-secondary">
    <li><a href="#">Privacy statement</a></li>
    <li><a href="#">Terms of use</a></li>
    <li><a href="#">All policies and guidelines</a></li>
    <li><a href="#">Digital accessibility</a></li>
    <li><a href="#">Cookie preferences</a></li>
  </ul>
  <div slot="footer-secondary-end">
    <a href="#">*We’ve updated our privacy statement effective December 30, 202X.</a>
  </div>
  <a href="https://www.redhat.com/en/summit" slot="footer-tertiary">
    <img src="https://access.redhat.com/chrome_themes/nimbus/img/rh-summit-red-a.svg"
         alt="Red Hat Summit"
         loading="lazy"
         width="73px" />
  </a>
</rh-footer>
{% endsection %}

{% section headline="Component status"%}
  <rhds-component-status component="Footer"></rhds-component-status>
{% endsection %}

{% section headline="Demo"%}
View a live version of this component to see how it can be customized.
<pfe-cta>
  <a href="./demo/">See this component in action</a>
</pfe-cta>
{% endsection %}

{% section headline="Anatomy"%}
The footer is divided into two parts, the **Modular** footer and **Global** footer. Most of the content in the Modular footer can be customized whereas the content in the Global footer is the same across all websites.

<svg id="anatomy-diagram"></svg>

<dl>
  <div>
    <dt>Website logo</dt>
    <dd>A unique logo that corresponds to the website the footer is used on.</dd>
  </div>
  <div>
    <dt>Social media links</dt>
    <dd>Social media links that direct a visitor to unique social media websites.</dd>
  </div>
  <div>
    <dt>Modular navigation</dt>
    <dd>A collection of links unique to the website IA (information architecture).</dd>
  </div>
  <div>
    <dt>Unique message</dt>
    <dd>A unique description that corresponds to the website the footer is used on.</dd>
  </div>
  <div>
    <dt>Shared message</dt>
    <dd>A message about Red Hat that is the same across all footers and websites.</dd>
  </div>
  <div>
    <dt>Unique content or top task</dt>
    <dd>Extra content or a top task that is unique and requires its own slot (optional).</dd>
  </div>
  <div>
    <dt>Global navigation</dt>
    <dd>A collection of important links that are the same across all footers and websites.</dd>
  </div>
</dl>
{% endsection %}

{% section headline="Style" %}
Elements in the Modular and Global footers are high in contrast so they stand out to a visitor and meet accessibility guidelines. The footer looks similar in style to the [Primary navigation](/components/primary-navigation/) for a consistent user experience across websites.

<svg id="style-diag"></svg>

### Color
The Modular footer background color is slightly lighter than the Global footer background color. This separation helps to distinguish the footers from each other.
<svg id="color-diag"></svg>

### Layout
The footer spans the entire width of the browser window at all screen sizes.
<svg id="layout-diag"></svg>

{% endsection %}

{% section headline="Usage" %}
The footer should be used to provide a visitor with additional links and content if they did not find what they were looking for, it can also include copyright and legal information.

### Layout
The Modular and Global footers have specific regions for inserting various content types. Do not insert content at random, use the correct regions.
- **section header** - Region for inserting a website logo (home page, Customer Portal, etc.) and social media links.
- **section main** - Region for inserting modular navigation links, website messaging, top tasks, or other unique content.
- **section footer** - Region for inserting global navigation links, legal content, and a link to the Summit website.

<svg id="usage-layout-diag"></svg>

### Global footer
The Global footer can be used by itself on pages that do not fit a specific IA (information architecture). Examples include landing pages, minisites, etc.

<svg id="usage-global-footer-diag"></svg>

{% endsection %}

{% section headline="Examples on other websites" %}
The footer was designed to be applied to all Red Hat websites. The layout is flexible enough to accommodate various content types and arrangements.

### Red Hat Customer Portal

<svg id="cp-diag"></svg>
<small>The <em>All systems operational</em> status indicator is a feature that will be added to all footers at a later date.</small>

### Red Hat Developer
<svg id="rh-developer-diag"></svg>

### Red Hat Partner Connect
<svg id="partner-connect-diag"></svg>

{% endsection %}

{% section headline="Behavior" %}

### Columns
If the Modular footer includes a lot of content, a second row of columns will be added underneath the first row.

<svg id="columns-diag-1"></svg>

If the Modular footer includes less content, columns should stretch to fill the negative space.

<svg id="columns-diag-2"></svg>

The social media links should remain aligned to the left edge of the last column if the number of columns change.

<svg id="columns-diag-3"></svg>

### Translations
When content is translated to other left-to-right languages, the footer maintains the same layout and text size.
<svg id="i18n-jp-diag"></svg>

#### Right-to-left languages
When content is translated to a right-to-left language like Hebrew, the text size increases to 16px so visual subtleties of unique characters are easier to notice.
<svg id="i18n-rtl-diag"></svg>

{% endsection %}

{% section headline="Interaction States" %}

### Default

<svg id="ui-default-diag"></svg>

| Interaction state | Element                    | Text Styling |
| ----------------- | -------------------------- | ------------ |
| Default           | Social media link          | #8a8d90      |
| Default           | Modular nav link           | #fff         |
| Default           | Call to action             | #73bcf7      |
| Default           | Red hat fedora             | #8a8d90      |
| Default           | Global nav and legal links | #fff         |

### Hover

<svg id="ui-hover-diag"></svg>

| Interaction state        | Element                    | Text Styling             |
| ------------------------ | -------------------------- | ------------------------ |
| Hover, Focus, and Active | Social media link          | #b8bbbe                  |
| Hover, Focus, and Active | Modular nav link           | #fff / Underline         |
| Hover, Focus, and Active | Call to action             | #bee1f4                  |
| Hover, Focus, and Active | Red hat fedora             | #b8bbbe                  |
| Hover, Focus, and Active | Global nav and legal links | #fff / Underline         |

### Focus

<svg id="ui-focus-diag"></svg>

Focus styles are the same as hover styles and also include a focus indicator.

### Active

<svg id="ui-active-diag"></svg>

{% endsection %}

{% section headline="Accessibility" %}
### Focus order
A logical focus order helps visitors understand and operate our websites. Elements or components need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

<svg id="a11y-tabindex-diag"></svg>
{% endsection %}

{% section headline="Responsive design" %}
### Large screens
Footers on large screen sizes include columns and rows of links.
<svg id="responsive-large-diag"></svg>
### Small screens
The Modular footer on small screen sizes includes an accordion instead of columns and rows of links. All accordion panels are collapsed by default when the page loads.
<svg id="responsive-small-diag"></svg>
{% endsection %}

{% section headline="Best practices" %}
### Changing the stacking order
Do not stack the Global footer on top of the Modular footer.

<svg id="stack-order-diag"></svg>

### Using an accordion
Do not use an accordion inside of a large Modular footer, only Modular footers for small screen sizes include an accordion.
<svg id="accordion-mod-diag"></svg>

### Removing information
Do not remove the copyright text or Summit link from the Global footer.
<svg id="removing-infor-diag"></svg>

### Isolating the Modular footer
Do not use the Modular footer on its own without the Global footer.
<svg id="isolating-diag"></svg>
{% endsection %}

{% section headline="Spacing" %}
The Modular and Global footers use [spacers](#) to define space values between elements.
<svg id="spacers-diag"></svg>
<svg id="spacers-mobile-diag"></svg>
{% endsection %}

<footer id="component-footer">

<section>

## Feedback
To give feedback about anything on this page, [contact us](#).

</section>
<section>

## Components
To learn how to use our other components in your designs, visit the [Components](/components/) section.

</section>
</footer>


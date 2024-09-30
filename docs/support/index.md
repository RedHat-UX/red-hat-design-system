---
layout: layouts/pages/basic.njk
title: Get support
hasToc: false
tags:
  - support
importElements:
  - rh-tile
  - rh-tag
---

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<style data-helmet>
  #contact-grid h3 {
    display: flex;
    gap: var(--rh-space-lg, 16px);
  }
  #support-footer-grid {
    margin-block-start: var(--rh-space-6xl, 96px);
  }
</style>

## Need help?

Find the best method for getting your question to the team.


## Connect on GitHub

The best way to get help or feedback is through GitHub. This allows us to pull your GitHub issue or discussion into our workflow more easily.


### Design system help

<div id="rhds-help-grid" class="grid sm-three-columns">
  <rh-tile>
    <h4 slot="headline"><a href="https://github.com/RedHat-UX/red-hat-design-system/issues/new?assignees=&labels=bug&projects=&template=1-bug-report.yml&title=%5Bbug%5D+%60%3Crh-component-name%3E%60+...">File a bug report</a></h4>
    If something is broken in an existing web component, submit a bug report and describe the error as thoroughly as possible.
  </rh-tile>
  <rh-tile>
    <h4 slot="headline"><a href="https://github.com/RedHat-UX/red-hat-design-system/issues/new?assignees=&labels=feature%2Cdiscovery+needed&projects=&template=3-feature-request.yml&title=%5Bfeat%5D+%60%3Crh-component-name%3E%60+...">Request a feature or component</a></h4>
    Help shape the design system’s roadmap by requesting new features or components.
  </rh-tile>
  <rh-tile>
    <h4 slot="headline"><a href="https://github.com/orgs/RedHat-UX/discussions/new/choose">Start a discussion</a></h4>
    Ask the community of Red Hat Design System users and contributors a question.
  </rh-tile>
</div>


### Documentation and Figma help

<div id="docs-help-grid" class="grid sm-three-columns">
  <rh-tile>
    <h4 slot="headline"><a href="https://github.com/RedHat-UX/red-hat-design-system/issues/new?assignees=&labels=docs%2Cbug&projects=&template=5-docs-problem.yml&title=%5Bdocs%5D%5Bbug%5D+...">Report a bug on ux.redhat.com</a></h4>
    Submit an issue to fix bugs, like 404s, on ux.redhat.com.
  </rh-tile>
  <rh-tile>
    <h4 slot="headline"><a href="https://github.com/orgs/RedHat-UX/discussions/new?category=documentation-feedback">Send documentation feedback</a></h4>
    If you have general feedback about content on ux.redhat.com, start a discussion.
  </rh-tile>
  <rh-tile>
    <h4 slot="headline"><a href="https://github.com/orgs/RedHat-UX/discussions/new?category=design-library-feedback">Submit design library feedback</a></h4>
    Create a discussion to request new features or fixes for the Red Hat Design System’s Figma library.
  </rh-tile>
</div>


## Contact us

<div id="contact-grid" class="grid sm-two-columns">
  <div>
    <h3>Find us on Slack <rh-tag color="red" variant="outline">Internal Red Hat users only</rh-tag></h3> 
    <p>We’re available at <strong>#red-hat-design-system</strong> for design, development, or accessibility questions.</p>
    <p>Discussions about web components in general can be found in <strong>#list-web-components</strong>.</p>
  </div>
  <div>
    <h3>Join office hours <rh-tag color="red" variant="outline">Internal Red Hat users only</rh-tag></h3>
    <p>The Red Hat Design System team holds office hours weekly. The meeting time and link are in our <strong>#red-hat-design-system</strong> Slack channel bookmarks.</p>
  </div>
  <div>
    <h3>Email us</h3>
    <p>Send a message to <a href="mailto:design-system@redhat.com">design-system@redhat.com</a>.</p>
  </div>
</div>

<div id="support-footer-grid" class="grid sm-two-columns">
  <div>
    <h2>Release notes</h2> 
    <p>To see what foundations, tokens, elements, or patterns have been released recently, check out our <a href="/release-notes/">release notes</a>.</p>
  </div>
  <div>
    <h2>Roadmap</h2>
    <p>To discover what we’re working on, take a look at our <a href="/about/roadmap/">roadmap</a>.</p>
  </div>
</div>

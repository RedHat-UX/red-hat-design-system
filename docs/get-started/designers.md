---
layout: layout-basic.njk
title: Designers
order: 2
tags:
  - getstarted
bodyClasses: element-docs
---

## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you need to design something using our design system, you have come to the right place.

Follow these steps to get started and [send us an e-mail](mailto:design-system@redhat.com) or connect with us on Slack if you have any questions along the way.


## Explore brand standards

Our [Brand standards](https://www.redhat.com/en/about/brand/standards) are the source code of the Red Hat brand. Using brand standards as the starting point for every project ensures that every interaction with Red Hat reflects our brand personality, brand strategy, and consistent visual language. Consistency is how we create authentic relationships and credibility with our customers, partners, and contributors.

{% example palette="none",
          alt="ADD TEXT",
          src="/assets/get-started/designers/brand-standards.png" %}

## Learn about our design system

Our design system libraries and the documentation website offer assets and guidance needed to create digital experiences. Please read through each section to have a better understanding of how to use our design system.

<div class="multi-column--min-400-wide">
    <div>
        <h3>Foundations</h3> 
        <p><a href="foundations">Foundations</a> are how we express our brand through color, space, typography, etc.</p>
    </div>
    <div>
        <h3>Design tokens</h3>
        <p><a href="tokens">Design tokens</a> are how we translate our design language decisions into code.</p>
    </div>
    <div>
        <h3>Elements and patterns</h3>
        <p>Our libraries include <a href="elements">elements</a> and <a href="patterns">patterns</a> you can use to create digital experiences.</p>
    </div>
</div>

## Access Figma

You need a Figma license to access our libraries. When you are granted a license, use your Red Hat e-mail address to log in to Figma via SSO authentication. When you are logged in, you should be able to access our libraries and add them to all of your [drafts]("https://help.figma.com/hc/en-us/articles/360038743434-Manage-libraries-for-your-drafts) or [individual files](https://help.figma.com/hc/en-us/articles/1500008731201-Manage-libraries-in-design-files).

{% example palette="light-compact",
          alt="ADD TEXT",
          src="/assets/get-started/designers/access-figma-libraries.png" %}

### Agency access

If you work with an agency and do not have a Red Hat e-mail address, [send us an e-mail](mailto:design-system@redhat.com) and we will invite you to view our libraries.

## Use libraries

Our libraries are built and maintained in Figma, our primary design tool. By using our libraries, you will automatically receive notifications as we make updates to our foundational styles, elements, and patterns (as long as you do not detach them). This ensures that your designs are current and representative of the latest design system release.

{% alert title="Warning",
          state="warning" %}
We no longer support Adobe XD. You need to migrate to Figma in order to access and use our most up-to-date libraries. Do not continue to use Adobe XD for any kind of design work. If you need assistance migrating XD files to Figma, [send us an e-mail](mailto:design-system@redhat.com").
{% endalert %}

### Core and subsystem libraries

The RHDS library is our core library that includes our foundational styles, elements, and patterns needed to create digital experiences. We also offer access to subsystem libraries that include project- or team- specific patterns that pull from the RHDS library.

| Library name | Use case |
| ------------ | -------- |
| RHDS         | Our core library for creating Red Hat digital experiences. |
| <a href="https://www.patternfly.org/">PatternFly</a> | A library for creating application interfaces. |


## Work in Figma

### Brand assets

If your project requires brand assets, the [Brand standards](https://www.redhat.com/en/about/brand/standards) website has links to assets including icons, fonts, photography, etc. Icons will be accessible via a subsystem Figma library very soon.

### Inserting elements and patterns

To use an element or pattern in your design, select the **Assets** tab. Find your desired asset and drag it onto the canvas or frame. You can also preview an asset by selecting it. When you are satisfied with the preview, select the **Insert instance** button and the asset will appear on the canvas or frame. If you have questions about how to use an element or pattern correctly, review the documentation or connect with us on Slack.

{% example palette="light-compact",
          alt="ADD TEXT",
          src="/assets/get-started/designers/figma-inserting-elements-patterns.png" %}

### Properties

Properties are changeable aspects of an element or pattern and you can see them in the right sidebar when the asset is selected. Properties change the appearance of an element or pattern so they can be used for different use cases. Some examples of properties include state, theme, variant, etc.

{% example palette="light",
          alt="ADD TEXT",
          src="/assets/get-started/designers/figma-properties.png" %}

### Responsive resize

Most elements and patterns can be resized to fit different viewport sizes. You can change the height or width of an asset by dragging an edge or corner.

{% example palette="light",
          alt="ADD TEXT",
          src="/assets/get-started/designers/figma-responsive-resize-drag.png" %}

You can also use [Constraints](https://help.figma.com/hc/en-us/articles/360039957734-Apply-constraints-to-define-how-layers-resize) to tell Figma how layers should respond when their frames are resized.

{% example palette="light",
          alt="ADD TEXT",
          src="/assets/get-started/designers/figma-responsive-resize-constraints.png" %}

### Instance swap

To speed up your design process, you can swap elements or patterns instead of dragging and dropping over and over again. Use the **Instance** menu to swap one element for another from any enabled library. Changing a property will not replace an element, but instance swapping will.

{% example palette="light",
          alt="ADD TEXT",
          src="/assets/get-started/designers/figma-instance-swap.png" %}

## Get familiar with GitHub

GitHub is how we maintain the design system. We also use it to track changes, update the documentation website, store design tokens, and more in our [GitHub repo](https://github.com/RedHat-UX). To contribute to the design system, you will need to familiarize yourself with creating an [issue](https://github.com/RedHat-UX/red-hat-design-system/issues) using one of our templates, creating a [discussion](https://github.com/RedHat-UX/red-hat-design-system/discussions), and reviewing work in [pull requests](https://github.com/RedHat-UX/red-hat-design-system/pulls).

The [GitHub Wiki](https://github.com/RedHat-UX/red-hat-design-system/wiki) can help you get started, and you can always chat with us for additional help.

{% example palette="none",
          alt="ADD TEXT",
          src="/assets/get-started/designers/get-familiar-with-github.png" %}

## Best practices

### Detaching an instance

Currently, you **cannot** add new items to an element or pattern instance that you pull from a library. You need to detach it if you want to add new assets, more slots, etc. If you believe that an element or pattern in any library needs more slots for new items, [create an issue](https://github.com/RedHat-UX/red-hat-design-system/issues) and we will try and prioritize building them in.

{% alert title="Warning",
          state="warning" %}
Detached instances will not receive style or other updates from any of the libraries if that element or pattern is updated.
{% endalert %}

{% example palette="light",
          alt="ADD TEXT",
          src="/assets/get-started/designers/best-practices-detach-instance.png" %}

### Alignment resources

Use these resources to help you stay aligned to our brand and design system while working.

<ul>
    <li><a href="https://www.redhat.com/en/about/brand/standards">Brand standards</a></li>
    <li><a href="foundations">Foundations</a>, <a href="elements">elements</a>, and <a href="patterns">patterns</a></li>
    <li>Reference existing pages so you can see how brand and design system assets are being used</li>
        <ul>
            <li><a href="https://redhat.com/">redhat.com home page</a></li>
            <li><a href="https://www.redhat.com/en/technologies/cloud-computing/openshift">Product page</a></li>
            <li><a href="https://www.redhat.com/en/topics/cloud-computing/what-are-cloud-services">Resource article page</a></li>
            <li><a href="https://catalog.redhat.com/software/search?functionalCategories=AI%20%26%20machine%20learning">SERP</a></li>
            <li><a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/server/trial">Product trial page</a></li>
        </ul>
</ul>


## Frequently asked questions

<p>
    <strong>How can I get better at Figma?</strong>
    <br />
    Check out these resources if you want to improve your Figma skills.
</p>

<ul>
    <li>YouTube channels like <a href="https://www.youtube.com/channel/UCQsVmhSa4X-G3lHlUtejzLA">Figma</a> and <a href="https://www.youtube.com/@UICollectiveDesign">UI Collective</a> have lots of free videos</li>
    <li>The <a href="https://www.figma.com/resource-library/">Figma Resource Library</a> has helpful content</li>
    <li>If all else fails, find answers in the <a href="https://help.figma.com/hc/en-us">Figma Help Center</a></li>
</ul>

<hr class="margin-top--4 margin-bottom--4">

<p>
    <strong>How do foundational styles, elements, and patterns get updated?</strong>
    <br>
    The design system team meets regularly to discuss work in progress and new issues. Updates are assigned a priority in our GitHub backlog. Once a priority is set and a schedule is agreed upon, design or development work begins. When the work is completed, the Figma libraries, documentation website, and repos are all updated. All updates are tracked in our <a href="https://github.com/RedHat-UX/red-hat-design-system/releases">changelog</a> and listed on the <a href="https://ux.redhat.com/release-notes/">Release notes</a> page. Larger updates are sometimes communicated via a quarterly newsletter e-mail.
</p>

<hr class="margin-top--4 margin-bottom--4">

<p>
    <strong>What if an element or pattern I need is missing?</strong>
    <br>
    If you think something is missing or you cannot find something, connect with us on Slack or <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">create a discussion</a>.
</p>

<hr class="margin-top--4 margin-bottom--4">

<p>
    <strong>How can I contribute an idea?</strong>
    <br>
    If you have feedback or you would like to contribute an idea, <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">create a discussion</a>.
</p>

<hr class="margin-top--4 margin-bottom--4">

<p>
    <strong>How can I report a bug?</strong>
    <br>
    If you find a bug, <a href="https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose">create an issue</a> and describe it as thoroughly as possible. If something is broken, [send us an e-mail](mailto:design-system@redhat.com) or connect with us on Slack and we will investigate.
</p>

## Roadmap

You can learn about our current release or future plans by going to the [Roadmap](https://ux.redhat.com/about/roadmap/) page. If you need something created sooner rather than later, [create an issue](https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose), or [send us an e-mail](mailto:design-system@redhat.com), and we will discuss the priority and timeline.

## Connect with us

For questions, additional support, or training, [send us an e-mail](mailto:design-system@redhat.com) or connect with us on Slack.

## Additional resources
- [Brand standards](https://www.redhat.com/en/about/brand/standards)
- [Fonts](https://github.com/RedHatOfficial/RedHatFont)
- [GitHub repo](https://github.com/RedHat-UX/red-hat-design-system)
- [RHa11y Resource Hub](https://github.com/hellogreg/rha11y-tools)


{% feedback %}
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
{% endfeedback %}


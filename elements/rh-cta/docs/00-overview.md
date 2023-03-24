{% section %}
## Overview

A Call to action is a styled link that directs a user to other pages or 
sometimes displays hidden content.

{% endsection %}

{% section %}
## Sample Components
![Call to action component sample]({{ './cta-sample.svg' | url }}){style="--inline-img-max-width:529px;"}
{% endsection %}

{% componentStatus -%}{% endcomponentStatus %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-cta>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
## Usage

Call to action links are best used to entice a user to make a selection. For 
example, use the Primary variant to **bring attention to an important link** or 
use the Brick variant to **group links together in a grid**.

### Hierarchy

Call to action links are ordered by hierarchy from left to right (large screens) 
or left to right and top to bottom (small screens). They can be used multiple 
times in the same container except for the Primary variants.

{% example palette="lightest",
           style="--inline-img-max-width: 552px;",
           alt="Call to action component usage, hierarchy",
           src="./cta-usage-hierarchy.svg" %}

#### Navigation vs. action

Even though they look similar, call to action links and buttons have important 
differences. Call to action links are navigational elements whereas buttons 
perform actions.

{% alert title="Learn more" %}
  Visit the [Button](https://ux.redhat.com/components/button/){target="_blank"} 
  component page to learn more about how to use buttons.
{% endalert %}


- Call to action links are used in layouts (like the home page) whereas buttons 
  are used in components (like a 
  [Form](https://ux.redhat.com/components/form/){target="_blank"}).
- Call to action link text labels are larger and thicker than button text 
  labels.
- Call to action links with containers include more padding than buttons with 
  containers.
- Call to action link colors have different meanings than button colors.


## Content {style="margin-block:var(--rh-space-3xl) 0"}

Call to action links are navigational elements, so any text needs to 
**accurately communicate the destination**. Inconsistent experiences might lead 
to distrust, lessening the satisfaction of a user during their journey. Call to 
action link text labels should be **action-oriented yet straightforward** so a 
user will feel comfortable making a selection.

{% alert state="warning", title="Warning" %}
  Call to action link text labels need to be written clearly in order to be 
  understood, therefore write **no more than four or five words** per link.
{% endalert %}

{% example palette="lightest",
           style="--inline-img-max-width: 706px;",
           alt="Call to action component usage, content",
           src="./cta-usage-content.svg" %}

### Character count

Call to action link text labels should have fewer characters in order for their 
message to remain impactful for a user.

{% alert state="warning", title="Warning" %}
  Do not write long text labels because they might break to two lines on small 
  screens or weaken an impactful message.
{% endalert %}

{% section %}
| Style     | Maximum characters |
| --------- | ------------------ |
| Primary   | 30                 |
| Secondary | 35                 |
| Brick     | 25                 |
| Default   | 45                 |
{% endsection %}

### Variant grouping

Variants can be grouped together if there are different kinds of links that need 
to be displayed in the same container.

{% alert title="Helpful tip" %}
  If there are more than three links that can be grouped together **in a grid 
  instead**, use the Brick variants.
{% endalert %}

{% alert state="warning",
          title="Warning",
          style="margin-block:var(--rh-space-2xl);" %}
  Do not group **more than three** Primary, Secondary, or Default variants 
  together otherwise a user might have trouble making a selection.
{% endalert %}

{% example palette="lightest",
           style="--inline-img-max-width: 650px;",
           alt="Call to action component usage, variant groups",
           src="./cta-usage-variant-grouping.svg" %}

### Buttons

Do not use a call to action link to trigger an action, like submitting a form or changing a state.

{% alert title="Learn More" %}
  Visit the [Button](https://ux.redhat.com/components/button/){target="_blank"}
  or [Form](https://ux.redhat.com/components/form/){target="_blank"} pages to 
  learn more about how to use buttons and forms.
{% endalert %}

{% example palette="lightest",
           style="--inline-img-max-width: 800px;",
           alt="Call to action component usage, buttons",
           src="./cta-usage-buttons.svg" %}

### Brick (icon)

When grouping Brick (icon) variants, different icons can be used to communicate 
different topics, but they all must be the same style, color, and height.

{% example palette="lightest",
           style="--inline-img-max-width: 684px;",
           alt="Call to action component usage, Brick (icon) variant",
           src="./cta-usage-brick-icon.svg" %}

### Primary (white) {style="margin-block:var(--rh-space-3xl) 0"}

The Primary (white) variant can be used if the red variant conflicts with other 
elements or violates accessibility standards.

{% endsection %}


{% section %}
## Best practices

### Changing styles

Do not modify the styles of any variant for any reason.

{% example palette="wrong",
           style="--inline-img-max-width:598px;",
           alt="Call to action component, best practice 1",
           src="./cta-bestpractice-1.svg" %}

### Too many links

Do not group more than three variants together otherwise a user might have trouble making a selection if there are too many link choices.

{% example palette="wrong",
           style="--inline-img-max-width:635px;",
           alt="Call to action component, best practice 2",
           src="./cta-bestpractice-2.svg" %}

### Using multiple Primary variants

Do not use multiple Primary variants in the same group, use of that variant is reserved to represent the most important link.

{% example palette="wrong",
           style="--inline-img-max-width:305px;",
           alt="Call to action component, best practice 3",
           src="./cta-bestpractice-3.svg" %}

### Mixing variant groups

Do not group more than two variants together anywhere.

{% example palette="wrong",
           style="--inline-img-max-width:405px;",
           alt="Call to action component, best practice 4",
           src="./cta-bestpractice-4.svg" %}

### Mixing Bricks

Do not group different Brick variants together anywhere, use one only.

{% example palette="wrong",
           style="--inline-img-max-width:552px;",
           alt="Call to action component, best practice 5",
           src="./cta-bestpractice-5.svg" %}

### Changing hierarchy

Do not change the hierarchy when grouping, variants that are higher in hierarchy should go first.

{% alert state="warning", title="Warning" %}
  Do not change the hierarchy when grouping unless the change is to accommodate 
  right-to-left languages.
{% endalert %}

{% example palette="wrong",
           style="--inline-img-max-width:690px;",
           alt="Call to action component, best practice 6",
           src="./cta-bestpractice-6.svg" %}

### Stretching

Do not stretch any other variants to fit a container or grid, only the Brick variants can stretch.

{% example palette="wrong",
           style="--inline-img-max-width:664px;",
           alt="Call to action component, best practice 7",
           src="./cta-bestpractice-7.svg" %}

{% endsection %}

{% include 'feedback.html' %}

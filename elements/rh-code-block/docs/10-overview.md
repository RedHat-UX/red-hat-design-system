## Overview
  {{ tagName | getElementDescription }}

## Sample component
  {% example palette="light",
             width=360,
             alt="Image of a code block with black code text within a light gray container",
             src="./code-block-sample.png" %}

## Sample element

<rh-code-block>
  <script type="text/text">Error: Error creating network Load Balancer: AccessDenied: User:
arn:aws:sts::970xxxxxxxxx:assumed-role/ManagedOpenShift-Installer-Role/163xxxxxxxxxxxxxxxx is
not authorized to perform: iam:CreateServiceLinkedRole on resource:
arn:aws:iam::970xxxxxxxxx:role/aws-service-role/elasticloadbalancing.amazonaws.com/
AWSServiceRoleForElasticLoadBalancing</script>
</rh-code-block>

## Demos
  View a live version of this element to see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-code-block>` demo in a new tab
  {% endcta %}


## When to use
When you need to highlight a block of code while maintaining the formatting

## Repo status
{% repoStatus type="Element" %}

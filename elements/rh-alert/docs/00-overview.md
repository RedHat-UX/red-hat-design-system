An Alert is a banner used to notify a user about a change in status or 
communicate other information. It can be generated with or without a user 
triggering an action first.

{% section headline="Sample component" %}

![Alert component sample][img-sample]

{% endsection %}

{% componentStatus -%}{% endcomponentStatus %}

## Best practices

### Inline as Toast

Do not use an Inline alert to communicate messages about important events, updates, or confirmations.

{% example palette="wrong",
           alt="Alert component best practice 1",
           src="/elements/alert/alert-bestpractice-1.svg" %}

### Toast as Inline

Do not use a Toast alert to present simple information or inline messages.

{% example palette="wrong",
           alt="Alert component best practice 2",
           src="/elements/alert/alert-bestpractice-2.svg" %}

### Different variants

Do not use both variants when stacking.

{% example palette="wrong",
           alt="Alert component best practice 3",
           src="/elements/alert/alert-bestpractice-3.svg" %}

<div class="multi-column--min-300-wide">

{% section headline="Feedback" %}
To give feedback about anything on this page, [contact us][contact].
{% endsection %}

{% section headline="Foundations" %}
To learn how to use our other components in your designs, visit the 
[Components][components] section.
{% endsection %}

</div>

<style>
.section { --inline-img-max-width: 538px; }
.example--palette-wrong { --inline-img-max-width: 872px; }
</style>

[contact]: mailto:digital-design-system@redhat.com
[components]: {{ '/components' | url }}
[img-sample]: {{ '/elements/alert/alert-sample.svg' | url }}


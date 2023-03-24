An Alert is a banner used to notify a user about a change in status or 
communicate other information. It can be generated with or without a user 
triggering an action first.

{% section %}
## Sample component

![Alert component sample][img-sample]{style="--inline-img-max-width:538px;"}
{% endsection %}

{% componentStatus -%}{% endcomponentStatus %}

## Best practices

### Inline as Toast

Do not use an Inline alert to communicate messages about important events, updates, or confirmations.

{% example palette="wrong",
           style="--inline-img-max-width:872px;",
           alt="Alert component best practice 1",
           src="/elements/alert/alert-bestpractice-1.svg" %}

### Toast as Inline

Do not use a Toast alert to present simple information or inline messages.

{% example palette="wrong",
           style="--inline-img-max-width:872px;",
           alt="Alert component best practice 2",
           src="/elements/alert/alert-bestpractice-2.svg" %}

### Different variants

Do not use both variants when stacking.

{% example palette="wrong",
           style="--inline-img-max-width:872px;",
           alt="Alert component best practice 3",
           src="/elements/alert/alert-bestpractice-3.svg" %}

{% include 'feedback.html' %}

[img-sample]: {{ '/elements/alert/alert-sample.svg' | url }}


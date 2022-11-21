# Code
## TODO:
- [`<rh-tab for="id">`](https://github.com/RedHat-UX/red-hat-design-system/discussions/635)
- get render* working under these circumstances. This is likely to require 
  refactoring in pfe-tools/11ty/custom-elements-manifest, but also try 
  `eleventyComputed`.

{% renderOverview for="rh-footer" %}{% endrenderOverview %}

{% band header="Usage" %}{% endband %}

{% renderSlots %}{% endrenderSlots %}

{% renderAttributes %}{% endrenderAttributes %}

{% renderMethods %}{% endrenderMethods %}

{% renderEvents %}{% endrenderEvents %}

{% renderCssCustomProperties %}{% endrenderCssCustomProperties %}

{% renderCssParts %}{% endrenderCssParts %}

{% section %}
  ## Accessibility

  ### Tab order

  A logical focus order helps visitors understand and operate Red Hat web properties. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly.

  ![Secondary navigation - accessibility tab order]({{ '../accessibility-tab-order.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  ### Keyboard events

  | Action          | Event                                                      |
  | --------------- | ---------------------------------------------------------- |
  | Tab             | Moves the focus forward or to the right                    |
  | Shift + Tab     | Moves the focus backwards or to the left                   |
  | Enter or Return | Expands or collapses the expandable tray or selects a link |
  | Esc             | Collapses the expandable tray                              |

  ### Click or tap events

  | Action          | Location                                 | Event                                                      |
  | --------------- | ---------------------------------------- | ---------------------------------------------------------- |
  | Click or tap    | Anywhere outside of expandable tray      | Collapses expandable tray                                  |

{% endsection %}

## Focus order
{% include 'accessibility/focusorder.md' %}

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}

{% include 'accessibility/2.1.1-A.md' %}

{% include 'accessibility/2.1.3-AAA.md' %}

{% include 'accessibility/2.4.3-A.md' %}

{% include 'accessibility/2.5.5-AAA.md' %}
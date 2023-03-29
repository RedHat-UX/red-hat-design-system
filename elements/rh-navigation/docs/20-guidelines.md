{% section %}
  ## Usage

  ### Primary navigation

  The primary navigation is used for wayfinding on all Red Hat web properties. 
  It should include the most important content a visitor needs or might be 
  looking for.

  ![Primary navigation - usage]({{ '../primary-nav-usage-intro.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Full-width expandable tray

  Menus will trigger an expandable tray when selected and include content or 
  tasks that are specific to the website in which it is used. Use the expandable 
  tray to organize a large amount of content in two, three, or four columns.

  {% alert state="warning", title="Warning" %}
    Do not use more than 4 columns in a full-width expandable tray, consider 
    using a component like [Tabs]({{ '/elements/tabs/' | url }}) instead for 
    more organization options.
  {% endalert %}

  ![Primary navigation - full-width expandable tray (four columns)]({{ 
  '../full-width-tray-4-columns.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  If content is organized in less than four columns, containers will stretch to fill the columns.

  ![Primary navigation - full-width expandable tray (three columns)]({{ 
  '../full-width-tray-3-columns.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ![Primary navigation - full-width expandable tray (two columns)]({{ 
  '../full-width-tray-2-columns.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Fixed-width expandable tray

  Sometimes a small amount of content can be placed in a fixed-width expandable 
  tray and the size of this expandable tray depends on the amount of content. 
  Utilities are not able to leverage fixed-width expandable trays at this time.

  {% alert state="warning", title="Warning" %}
    Do not use more than 2 columns to organize content in a fixed-width 
    expandable tray, consider using a full-width expandable tray instead.
  {% endalert %}

  ![Primary navigation - fixed-width expandable tray]({{ 
  '../fixed-width-tray.png' | url }}){style="--inline-img-max-width:1000px;"}

  ### Menu slots

  There is no maximum number of menu slots, but be conscious of space when 
  adding menus especially when the text is translated to other languages.

  ![Primary navigation - menu slots]({{ '../menu-slots.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Components in an expandable tray

  Use a component like [Tabs]({{ '/elements/tabs' | url }}) to 
  organize a very large amount of content that would exceed four columns. If the 
  Tabs component is used, it will change to a nested [Accordion]({{ 
  '/elements/accordion' | url }}) on small breakpoints.

  {% alert title="Helpful tip" %}
    Red Hat data analysis has shown that displaying 3 tabs performs better than 
    displaying 5 tabs.
  {% endalert %}

  ![Primary navigation - components in an expandable tray (desktop)]({{ 
  '../components-in-tray-desktop.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ![Primary navigation - components in an expandable tray (mobile)]({{ 
  '../components-in-tray-mobile.png' | url 
  }}){style="--inline-img-max-width:360px;"}

  ### Utilities

  The primary navigation includes utilities which are slots for actions or tools 
  for global navigation (search for something, change the language, log in to 
  your account, etc.). They may trigger an expandable tray when selected, but 
  not all do. They are also customizable depending on specific audience needs or 
  goals.

  {% alert title="Helpful tip" %}
    The maximum number of utilities is 4 with the option of adding a fifth when 
    included as part of a personalized experience.
  {% endalert %}

  ![Primary navigation - utilities]({{ '../primary-nav-utilities.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Utility ordering

  The order of some utilities can be customized or even removed, but not all.

  - The Account utility should always be visible on both large and small 
    breakpoints
  - The Search and Account utilities should always be visible on large 
    breakpoints
  - If a new utility is included as a part of a personalized experience, it 
    should be first
  - If no personalized experiences are active, the Search utility should be 
    first and the Account utility should be last
  - If a new utility requires a custom-designed icon, contact the [Brand 
    team](mailto:brand@redhat.com)

  ![Primary navigation - utility ordering]({{ '../utility-ordering.png' | url 
  }}){style="--inline-img-max-width:1000px;"}


  ### Menus and utilities on small breakpoints

  When breakpoints become smaller, menus and most utilities will become hidden 
  to reduce visual crowding. The Account utility should always be visible on any 
  breakpoint.

  ![Primary navigation - menus and utilities on small breakpoints]({{ 
  '../menus-utilities-small-breakpoints.png' | url 
  }}){style="--inline-img-max-width:1000px;"}
{% endsection %}

{% section %}
  ## Website examples

  ### redhat.com

  ![Primary navigation - redhat.com example]({{ '../example-rhdc.png' | url 
  }}){style="--inline-img-max-width:1000px;"}


  ### Developer

  ![Primary navigation - Developer example]({{ '../example-developer.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Hybrid Cloud

  ![Primary navigation - Hybrid Cloud example]({{ '../example-hybrid-cloud.png' | 
  url }}){style="--inline-img-max-width:1000px;"}

  ## Behavior

  ### Scrolling

  The primary navigation is always sticky when scrolling on all devices and 
  breakpoints.

  ### Menus

  On hover, menu text will display a red bar and gray arrow indicating an 
  expandable tray will be triggered if selected.

  ![Primary navigation - menus]({{ '../primary-nav-menus.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Utility menus vs. links

  Some utilities leverage the expandable tray pattern or function as links.

  ![Primary navigation - utility menus vs. links]({{ 
  '../utility-menus-vs-links.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Stacking

  When an [Announcement]({{ '/patterns/announcement' | 
  url }}) component is used, the primary navigation is positioned below it.

  ![Primary navigation - stacking]({{ '../primary-nav-stacking.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Scrolling with expandable tray

  If the height of the expandable tray is shorter than the viewport, content 
  will scroll underneath.

  ![Primary navigation - scrolling with expandable tray]({{ 
  '../scrolling-with-tray-1.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  If the height of the expandable tray is taller than the viewport, the tray 
  will scroll instead.

  {% alert state="warning", title="Warning" %}
    Be careful with featuring too much content because visitors may not see key 
    information if they have to scroll.
  {% endalert %}

  ![Primary navigation - scrolling with expandable tray]({{ 
  '../scrolling-with-tray-2.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Navigating between expandable trays

  Only one expandable tray can be visible at a time and there is no animation 
  when navigating from one tray to the next.

  ![Primary navigation - navigating between expandable trays]({{ 
  '../navigating-between-trays.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Collapsing the expandable tray

  Clicking or tapping anywhere outside of the expandable tray should collapse 
  it. Pressing the **esc** key should collapse the expandable tray 
  as well.

  ![Primary navigation - collapsing the expandable tray]({{ 
  '../collapsing-expandable-tray.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  ### Additional behaviors

  Keep in mind the following additional behaviors:

  - The expandable tray should not collapse or expand without user input by 
    mouse or keyboard
  - Scrolling while the expandable tray is visible should not close the tray

{% endsection %}

{% section %}
  ## Interaction states

  ### Default

  ![Primary navigation - default interaction state]({{ 
  '../interaction-state-default.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  | State   | Element      | Styling                                 |
  |---------|--------------|-----------------------------------------|
  | Default | Menu text    | RH Text Regular, 16pt / 24 (1.5) / #fff |
  | Default | Utility icon | #fff                                    |
  | Default | Utility text | RH Text Regular, 12pt / 18 (1.5) / #fff |

  ### Hover

  ![Primary navigation - hover interaction state]({{ 
  '../interaction-state-hover.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  | State | Element                  | Styling             |
  |-------|--------------------------|---------------------|
  | Hover | Menu and utility top bar | #e00, 3px thickness |
  | Hover | Arrow below menu text    | #6a6e73             |

  ### Focus

  ![Primary navigation - focus interaction state]({{ 
  '../interaction-state-focus.png' | url }}){style="--inline-img-max-width:
  1000px;"}

  {% alert title="Helpful tip" %}
    The focus state carries over styles from the hover state and also adds a 
    focus indicator.
  {% endalert %}

  | State | Element                                 | Styling                        |
  |-------|-----------------------------------------|--------------------------------|
  | Focus | Logo, menu, and utility focus indicator | #fff, dashed, 1px border width |
  | Focus | Menu and utility top bar                | #e00, 3px thickness            |

  ### Active

  ![Primary navigation - active interaction state]({{ 
  '../interaction-state-active.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  | State  | Element               | Styling                                    |
  |--------|-----------------------|--------------------------------------------|
  | Active | Tab top bar           | #e00, 3px thickness                        |
  | Active | Tab background        | #fff                                       |
  | Active | Menu text             | RH Text Regular, 16pt / 24 (1.5) / #151515 |
  | Active | Arrow below menu text | #6a6e73                                    |

{% endsection %}

{% section %}
  ## Accessibility

  ### Focus order

  A logical focus order helps visitors **understand and operate** Red Hat web 
  properties. Elements need to receive focus in an order that preserves meaning, 
  therefore the focus order should make sense and not jump around randomly.

  ![Primary navigation - focus order]({{ '../focus-order.png' | url 
  }}){style="--inline-img-max-width:1000px;"}
{% endsection %}


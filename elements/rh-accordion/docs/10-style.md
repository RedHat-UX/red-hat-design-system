## Style 
Accordion panels include title text, a chevron icon, body text, and other content. When a panel is collapsed, only the top and bottom borders are visible. When a panel is expanded, all borders are visible including a thicker left border for emphasis.

### Anatomy 
{% example palette="light",
          alt="Anatomy of an accordion with lots of annotations pointing to various parts",
          src="../accordion-anatomy.png" %}

1) Collapsed panel
2) Expanded panel
3) Title
4) Panel header region
5) Caret
6) Emphasis
7) Content
8) Panel body region
   {.example-notes}

### Sizes 
There are two available sizes and the only difference is the title text size. You can use the Small size on large breakpoints, but not the Large size on small breakpoints due to the potential of long title text wrapping to more than two lines.

{% sample code="hidden" %}

<rh-accordion large>
  <rh-accordion-header><h2>Exterior panel</h2></rh-accordion-header>
  <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
</rh-accordion>
<small class="example-notes">Large size</small>
<rh-accordion>
  <rh-accordion-header><h2>Exterior panel</h2></rh-accordion-header>
  <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
</rh-accordion>
<small class="example-notes">Small size</small>

{% endsample %}

## Theme 
An accordion is available in both light and dark themes. The light theme expanded panel includes a box shadow, but the dark theme does not.

{% sample picker=true,
          target="rh-accordion",
          colorPalette="darkest",
          code="hidden" %}

<rh-accordion>
  <rh-accordion-header><h2>Exterior panel</h2></rh-accordion-header>
  <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
</rh-accordion>

{% endsample %}

## Configuration 
An expanded panel does not have a maximum height, but it may scroll if constrained by vertical space. The width of an accordion varies based on content and page layout. Title text and icons are horizontally aligned.

{% example palette="light",
          alt="How an accordion is constructed showing alignment, space, scrolling, and width details",
          src="../accordion-configuration.png" %}

### Nested panels 
Panels can be nested to help organize complex or granular sections of content.

{% sample code="hidden" %}

<rh-accordion>
  <rh-accordion-header><h2>Exterior panel</h2></rh-accordion-header>
  <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel>
    <p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p>
    <rh-accordion>
      <rh-accordion-header expanded><h2>Interior panel expanded</h2></rh-accordion-header>
      <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
      <rh-accordion-header><h2>Interior panel</h2></rh-accordion-header>
      <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
    </rh-accordion>
  </rh-accordion-panel>
</rh-accordion>

{% endsample %}

### Stacked panels 
Multiple panels can be expanded simultaneously even when nested.

{% sample code="hidden" %}

<rh-accordion>
  <rh-accordion-header><h2>Exterior panel</h2></rh-accordion-header>
  <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
</rh-accordion>
<small class="example-notes">Multiple expanded exterior panels</small>
<rh-accordion>
  <rh-accordion-header><h2>Exterior panel</h2></rh-accordion-header>
  <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
  <rh-accordion-header expanded><h2>Exterior panel expanded</h2></rh-accordion-header>
  <rh-accordion-panel>
    <p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p>
    <rh-accordion>
      <rh-accordion-header><h2>Interior panel</h2></rh-accordion-header>
      <rh-accordion-panel><p>Lorem ipsum dolor sit amet.</p></rh-accordion-panel>
      <rh-accordion-header expanded><h2>Interior panel expanded</h2></rh-accordion-header>
      <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
      <rh-accordion-header expanded><h2>Interior panel expanded</h2></rh-accordion-header>
      <rh-accordion-panel><p>Amet eget nulla porttitor dictumst nullam euismod imperdiet nunc sapien magnis ut aliquam proin et tristique sem platea vestibulum sagittis.</p></rh-accordion-panel>
    </rh-accordion>
  </rh-accordion-panel>
</rh-accordion>
<small class="example-notes">Multiple expanded nested panels</small>

{% endsample %}

## Space 
{% example palette="light",
          alt="Accordion spacing within panels and in between elements like titles, body text, rules, and icons",
          src="../accordion-space.png" %}

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-lg, --rh-space-xl, --rh-space-3xl" %}
{% endspacerTokensTable %}
  
## Interaction states 
Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover 
{% example palette="light",
          alt="Light theme accordion hover state examples",
          src="../accordion-hover-theme-light.png" %}

{% example palette="darkest",
          alt="Dark theme accordion hover state example",
          src="../accordion-hover-theme-dark.png" %}

{% tokensTable %}

| Property {style="width: 33%" } | Light theme {style="width: 33%" } | Dark theme |
| ------------------------------ | --------------------------------- | ---------- |
| Color - panel header           | `#F2F2F2`                         | `#292929`  |

{% endtokensTable %}

### Focus 
{% example palette="light",
          alt="Light theme accordion focus state examples",
          src="../accordion-focus-theme-light.png" %}

{% example palette="darkest",
          alt="Dark theme accordion focus state example",
          src="../accordion-focus-theme-dark.png" %}

{% tokensTable %}

| Property {style="width: 33%" } | Light theme {style="width: 33%" } | Dark theme |
| ------------------------------ | --------------------------------- | ---------- |
| Color - panel header           | `#F2F2F2`                         | `#292929`  |
| Color - focus ring             | `#0066CC`                         | `#73BCF7`  |

{% endtokensTable %}

### Active 
{% example palette="light",
          alt="Light theme accordion active state examples",
          src="../accordion-active-theme-light.png" %}

{% example palette="darkest",
          alt="Dark theme accordion active state example",
          src="../accordion-active-theme-dark.png" %}

{% tokensTable %}

| Property {style="width: 33%" } | Light theme {style="width: 33%" } | Dark theme |
| ------------------------------ | --------------------------------- | ---------- |
| Color - panel header           | `#F2F2F2`                         | `#292929`  |
| Color - focus ring             | `#0066CC`                         | `#73BCF7`  |

{% endtokensTable %}

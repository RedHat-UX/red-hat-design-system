---
layout: layout-foundations.njk
title: Palette
heading: Color
tags:
  - color
permalink: /foundations/color/palette/index.html
order: 30
bodyClasses: element-docs
---

<!-- TO DO: Once tokens are updated,
     hex codes in swatches should be replaced with tokens,
     OR this page should be removed/replaced in favor of the Global Colors token page. -->

## Core palette

Our primitives are named and organized logically from light to dark,
starting with `10`. **Always prioritize use of semantic design tokens
over primitive ones.** Hex codes can be referenced in situations where
design tokens cannot be used.

### Red

{% alert title="Brand red and accessibility",
         state="warning" %}
The `red-50` token is designated as Red Hat red. Its application
should adhere to [usage guidelines][red-guidelines].
{% endalert %}

<section class="section">

| Preview                      | Token name | Hex code  |
| ---------------------------- | ---------- | --------- |
| {% swatch color="#FCE3E3" %} | `red-10`   | `#FCE3E3` |
| {% swatch color="#FBC5C5" %} | `red-20`   | `#FBC5C5` |
| {% swatch color="#F9A8A8" %} | `red-30`   | `#F9A8A8` |
| {% swatch color="#F56E6E" %} | `red-40`   | `#F56E6E` |
| {% swatch color="#EE0000" %} | `red-50`   | `#EE0000` |
| {% swatch color="#A60000" %} | `red-60`   | `#A60000` |
| {% swatch color="#5F0000" %} | `red-70`   | `#5F0000` |

</section>


### Red-orange

{% alert title="Brand red and accessibility",
         state="warning" %}
The red-orange color is reserved for danger or error states, do not use it anywhere else.
{% endalert %}

<section class="section">

| Preview                      | Token name      | Hex code  |
| ---------------------------- | --------------- | --------- |
| {% swatch color="#FFE3D9" %} | `red-orange-10` | `#FFE3D9` |
| {% swatch color="#FBBEA8" %} | `red-orange-20` | `#FBBEA8` |
| {% swatch color="#F89B78" %} | `red-orange-30` | `#F89B78` |
| {% swatch color="#F4784A" %} | `red-orange-40` | `#F4784A` |
| {% swatch color="#F0561D" %} | `red-orange-50` | `#F0561D` |
| {% swatch color="#B1380B" %} | `red-orange-60` | `#B1380B` |
| {% swatch color="#731F00" %} | `red-orange-70` | `#731F00` |

</section>


### Orange

<section class="section">

| Preview                      | Token name  | Hex code  |
| ---------------------------- | ----------- | --------- |
| {% swatch color="#FFE8CC" %} | `orange-10` | `#FFE8CC` |
| {% swatch color="#FCCB8F" %} | `orange-20` | `#FCCB8F` |
| {% swatch color="#F8AE54" %} | `orange-30` | `#F8AE54` |
| {% swatch color="#F5921B" %} | `orange-40` | `#F5921B` |
| {% swatch color="#CA6C0F" %} | `orange-50` | `#CA6C0F` |
| {% swatch color="#9E4A06" %} | `orange-60` | `#9E4A06` |
| {% swatch color="#732E00" %} | `orange-70` | `#732E00` |

</section>


### Yellow

<section class="section">

| Preview                      | Token name  | Hex code  |
|------------------------------|-------------|-----------|
| {% swatch color="#FFF4CC" %} | `yellow-10` | `#FFF4CC` |
| {% swatch color="#FFE072" %} | `yellow-20` | `#FFE072` |
| {% swatch color="#FFCC17" %} | `yellow-30` | `#FFCC17` |
| {% swatch color="#DCA614" %} | `yellow-40` | `#DCA614` |
| {% swatch color="#B98412" %} | `yellow-50` | `#B98412` |
| {% swatch color="#96640F" %} | `yellow-60` | `#96640F` |
| {% swatch color="#73480B" %} | `yellow-70` | `#73480B` |

</section>


### Green

{% alert title="Other ways to use" %}
The green color is primarily used to indicate a success state, but it can also be used in limited circumstances where green is necessary, like for DEI communities or sustainability-related designs.
{% endalert %}

<section class="section">

| Preview                      | Token name | Hex code  |
|------------------------------|------------|-----------|
| {% swatch color="#E9F7DF" %} | `green-10` | `#E9F7DF` |
| {% swatch color="#D1F1BB" %} | `green-20` | `#D1F1BB` |
| {% swatch color="#AFDC8F" %} | `green-30` | `#AFDC8F` |
| {% swatch color="#87BB62" %} | `green-40` | `#87BB62` |
| {% swatch color="#63993D" %} | `green-50` | `#63993D` |
| {% swatch color="#3D7317" %} | `green-60` | `#3D7317` |
| {% swatch color="#204D00" %} | `green-70` | `#204D00` |

</section>


### Teal

<section class="section">

| Preview                      | Token name | Hex code  |
|------------------------------|------------|-----------|
| {% swatch color="#DAF2F2" %} | `teal-10`  | `#DAF2F2` |
| {% swatch color="#B9E5E5" %} | `teal-20`  | `#B9E5E5` |
| {% swatch color="#9AD8D8" %} | `teal-30`  | `#9AD8D8` |
| {% swatch color="#63BDBD" %} | `teal-40`  | `#63BDBD` |
| {% swatch color="#37A3A3" %} | `teal-50`  | `#37A3A3` |
| {% swatch color="#147878" %} | `teal-60`  | `#147878` |
| {% swatch color="#004D4D" %} | `teal-70`  | `#004D4D` |

</section>


### Blue

<section class="section">

| Preview                      | Token name | Hex code  |
|------------------------------|------------|-----------|
| {% swatch color="#E0F0F" %}  | `blue-10`  | `#E0F0FF` |
| {% swatch color="#B9DAFC" %} | `blue-20`  | `#B9DAFC` |
| {% swatch color="#92C5F9" %} | `blue-30`  | `#92C5F9` |
| {% swatch color="#4394E5" %} | `blue-40`  | `#4394E5` |
| {% swatch color="#0066CC" %} | `blue-50`  | `#0066CC` |
| {% swatch color="#004D99" %} | `blue-60`  | `#004D99` |
| {% swatch color="#003366" %} | `blue-70`  | `#003366` |

</section>


### Purple

<section class="section">

| Preview                      | Token name  | Hex code  |
|------------------------------|-------------|-----------|
| {% swatch color="#ECE6FF" %} | `purple-10` | `#ECE6FF` |
| {% swatch color="#D0C5F4" %} | `purple-20` | `#D0C5F4` |
| {% swatch color="#B6A6E9" %} | `purple-30` | `#B6A6E9` |
| {% swatch color="#876FD4" %} | `purple-40` | `#876FD4` |
| {% swatch color="#5E40BE" %} | `purple-50` | `#5E40BE` |
| {% swatch color="#3D2785" %} | `purple-60` | `#3D2785` |
| {% swatch color="#21134D" %} | `purple-70` | `#21134D` |

</section>


### Gray
{% alert title="Usage warning",
            state="warning" %}
The black color is primarily used for brand purposes, use `gray-95` and above as an alternative.
{% endalert %}

<section class="section">

| Preview                                  | Token name | Hex code  |
| ---------------------------------------- | ---------- | --------- |
| {% swatch color="#FFFFFF", light=true %} | `white`    | `#FFFFFF` |
| {% swatch color="#F2F2F2" %}             | `gray-10`  | `#F2F2F2` |
| {% swatch color="#E0E0E0" %}             | `gray-20`  | `#E0E0E0` |
| {% swatch color="#C7C7C7" %}             | `gray-30`  | `#C7C7C7` |
| {% swatch color="#A3A3A3" %}             | `gray-40`  | `#A3A3A3` |
| {% swatch color="#707070" %}             | `gray-50`  | `#707070` |
| {% swatch color="#4D4D4D" %}             | `gray-60`  | `#4D4D4D` |
| {% swatch color="#383838" %}             | `gray-70`  | `#383838` |
| {% swatch color="#292929" %}             | `gray-80`  | `#292929` |
| {% swatch color="#1F1F1F" %}             | `gray-90`  | `#1F1F1F` |
| {% swatch color="#151515" %}             | `gray-95`  | `#151515` |
| {% swatch color="#000000" %}             | `black`    | `#000000` |

</section>


### Skin tones

To learn more about using skin tone colors, go to the [Brand standards][brand] website.

{% feedback %}
## Foundations

To learn how to use our other foundations in your designs, visit the
[foundations](/foundations) section.
{% endfeedback %}

[red-guidelines]: /foundations/color/usage/index.html/#brand-red
[brand]: https://brand.redhat.com/

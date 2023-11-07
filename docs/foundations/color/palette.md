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

<!-- TO DO: Once tokens are updated, hex codes in swatches should be replaced with tokens, OR this page should be removed/replaced in favor of the Global Colors token page. -->

## Core palette

Our primitives are named and organized logically from light to dark, starting with `10`. <strong>Always prioritize use of semantic design tokens over primitive ones.</strong> Hex codes can be referenced in situations where design tokens cannot be used.

### Red

{% alert title="Brand red and accessibility",
            state="warning" %}
The `red-50` token is designated as Red Hat red. Its application should adhere to <a href="/foundations/color/usage/index.html/#brand-red">usage guidelines</a>.
{% endalert %}

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FCE3E3;"></div></td>
                <td><code>red-10</code></td>
                <td><code>#FCE3E3</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FBC5C5;"></div></td>
                <td><code>red-20</code></td>
                <td><code>#FBC5C5</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F9A8A8;"></div></td>
                <td><code>red-30</code></td>
                <td><code>#F9A8A8</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F56E6E;"></div></td>
                <td><code>red-40</code></td>
                <td><code>#F56E6E</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #EE0000;"></div></td>
                <td><code>red-50</code></td>
                <td><code>#EE0000</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #A60000;"></div></td>
                <td><code>red-60</code></td>
                <td><code>#A60000</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #5F0000;"></div></td>
                <td><code>red-70</code></td>
                <td><code>#5F0000</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Red-orange

{% alert title="Brand red and accessibility",
            state="warning" %}
The red-orange color is reserved for danger or error states, do not use it anywhere else.
{% endalert %}

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FFE3D9;"></div></td>
                <td><code>red-orange-10</code></td>
                <td><code>#FFE3D9</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FBBEA8;"></div></td>
                <td><code>red-orange-20</code></td>
                <td><code>#FBBEA8</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F89B78;"></div></td>
                <td><code>red-orange-30</code></td>
                <td><code>#F89B78</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F4784A;"></div></td>
                <td><code>red-orange-40</code></td>
                <td><code>#F4784A</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F0561D;"></div></td>
                <td><code>red-orange-50</code></td>
                <td><code>#F0561D</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #B1380B;"></div></td>
                <td><code>red-orange-60</code></td>
                <td><code>#B1380B</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #731F00;"></div></td>
                <td><code>red-orange-70</code></td>
                <td><code>#731F00</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Orange

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FFE8CC;"></div></td>
                <td><code>orange-10</code></td>
                <td><code>#FFE8CC</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FCCB8F;"></div></td>
                <td><code>orange-20</code></td>
                <td><code>#FCCB8F</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F8AE54;"></div></td>
                <td><code>orange-30</code></td>
                <td><code>#F8AE54</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F5921B;"></div></td>
                <td><code>orange-40</code></td>
                <td><code>#F5921B</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #CA6C0F;"></div></td>
                <td><code>orange-50</code></td>
                <td><code>#CA6C0F</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #9E4A06;"></div></td>
                <td><code>orange-60</code></td>
                <td><code>#9E4A06</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #732E00;"></div></td>
                <td><code>orange-70</code></td>
                <td><code>#732E00</code></td>
            </tr>
        </tbody>
</table>
</section>


### Yellow

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FFF4CC;"></div></td>
                <td><code>yellow-10</code></td>
                <td><code>#FFF4CC</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FFE072;"></div></td>
                <td><code>yellow-20</code></td>
                <td><code>#FFE072</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FFCC17;"></div></td>
                <td><code>yellow-30</code></td>
                <td><code>#FFCC17</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #DCA614;"></div></td>
                <td><code>yellow-40</code></td>
                <td><code>#DCA614</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #B98412;"></div></td>
                <td><code>yellow-50</code></td>
                <td><code>#B98412</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #96640F;"></div></td>
                <td><code>yellow-60</code></td>
                <td><code>#96640F</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #73480B;"></div></td>
                <td><code>yellow-70</code></td>
                <td><code>#73480B</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Green

{% alert title="Other ways to use" %}
The green color is primarily used to indicate a success state, but it can also be used in limited circumstances where green is necessary, like for DEI communities or sustainability-related designs.
{% endalert %}

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #E9F7DF;"></div></td>
                <td><code>green-10</code></td>
                <td><code>#E9F7DF</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #D1F1BB;"></div></td>
                <td><code>green-20</code></td>
                <td><code>#D1F1BB</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #AFDC8F;"></div></td>
                <td><code>green-30</code></td>
                <td><code>#AFDC8F</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #87BB62;"></div></td>
                <td><code>green-40</code></td>
                <td><code>#87BB62</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #63993D;"></div></td>
                <td><code>green-50</code></td>
                <td><code>#63993D</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #3D7317;"></div></td>
                <td><code>green-60</code></td>
                <td><code>#3D7317</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #204D00;"></div></td>
                <td><code>green-70</code></td>
                <td><code>#204D00</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Teal

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #DAF2F2;"></div></td>
                <td><code>teal-10</code></td>
                <td><code>#DAF2F2</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #B9E5E5;"></div></td>
                <td><code>teal-20</code></td>
                <td><code>#B9E5E5</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #9AD8D8;"></div></td>
                <td><code>teal-30</code></td>
                <td><code>#9AD8D8</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #63BDBD;"></div></td>
                <td><code>teal-40</code></td>
                <td><code>#63BDBD</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #37A3A3;"></div></td>
                <td><code>teal-50</code></td>
                <td><code>#37A3A3</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #147878;"></div></td>
                <td><code>teal-60</code></td>
                <td><code>#147878</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #004D4D;"></div></td>
                <td><code>teal-70</code></td>
                <td><code>#004D4D</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Blue

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #E0F0F;"></div></td>
                <td><code>blue-10</code></td>
                <td><code>#E0F0FF</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #B9DAFC;"></div></td>
                <td><code>blue-20</code></td>
                <td><code>#B9DAFC</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #92C5F9;"></div></td>
                <td><code>blue-30</code></td>
                <td><code>#92C5F9</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #4394E5;"></div></td>
                <td><code>blue-40</code></td>
                <td><code>#4394E5</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #0066CC;"></div></td>
                <td><code>blue-50</code></td>
                <td><code>#0066CC</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #004D99;"></div></td>
                <td><code>blue-60</code></td>
                <td><code>#004D99</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #003366;"></div></td>
                <td><code>blue-70</code></td>
                <td><code>#003366</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Purple

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #ECE6FF;"></div></td>
                <td><code>purple-10</code></td>
                <td><code>#ECE6FF</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #D0C5F4;"></div></td>
                <td><code>purple-20</code></td>
                <td><code>#D0C5F4</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #B6A6E9;"></div></td>
                <td><code>purple-30</code></td>
                <td><code>#B6A6E9</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #876FD4;"></div></td>
                <td><code>purple-40</code></td>
                <td><code>#876FD4</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #5E40BE;"></div></td>
                <td><code>purple-50</code></td>
                <td><code>#5E40BE</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #3D2785;"></div></td>
                <td><code>purple-60</code></td>
                <td><code>#3D2785</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #21134D;"></div></td>
                <td><code>purple-70</code></td>
                <td><code>#21134D</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Gray
{% alert title="Usage warning",
            state="warning" %}
The black color is primarily used for brand purposes, use `gray-95` and above as an alternative.
{% endalert %}

<section class="section">
    <table>
        <thead>
            <tr>
                <th>Preview</th>
                <th>Token name</th>
                <th>Hex code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #FFFFFF; border: 1px #c7c7c7 solid;"></div></td>
                <td><code>white</code></td>
                <td><code>#FFFFFF</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #F2F2F2;"></div></td>
                <td><code>gray-10</code></td>
                <td><code>#F2F2F2</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #E0E0E0;"></div></td>
                <td><code>gray-20</code></td>
                <td><code>#E0E0E0</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #C7C7C7;"></div></td>
                <td><code>gray-30</code></td>
                <td><code>#C7C7C7</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #A3A3A3;"></div></td>
                <td><code>gray-40</code></td>
                <td><code>#A3A3A3</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #707070;"></div></td>
                <td><code>gray-50</code></td>
                <td><code>#707070</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #4D4D4D;"></div></td>
                <td><code>gray-60</code></td>
                <td><code>#4D4D4D</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #383838;"></div></td>
                <td><code>gray-70</code></td>
                <td><code>#383838</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #292929;"></div></td>
                <td><code>gray-80</code></td>
                <td><code>#292929</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #1F1F1F;"></div></td>
                <td><code>gray-90</code></td>
                <td><code>#1F1F1F</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #151515;"></div></td>
                <td><code>gray-95</code></td>
                <td><code>#151515</code></td>
            </tr>
            <tr>
                <td><div class="color-palette--swatch" style="--color-palette-background: #000000;"></div></td>
                <td><code>black</code></td>
                <td><code>#000000</code></td>
            </tr>
        </tbody>
    </table>
</section>


### Skin tones

To learn more about using skin tone colors, go to the <a href="https://brand.redhat.com/">Brand standards</a> website.

{% feedback %}
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
{% endfeedback %}
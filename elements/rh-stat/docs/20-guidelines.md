{% section %}
## Usage 
Use a statistic to represent a data point that users can consume quickly. Statistics help users trust our page content, so use them strategically because there is a balance between using some and too many. If a layout has lots of content in different arrangements, using a statistic should offer users a visual break or respite.


## Footnote 
Include a footnote on every page especially if a statistic comes from an external source. Doing this increases the credibility of the statistic and better integrates the data with the rest of the page content.

  {% example 
      palette="light",
      alt="A statistic with a small text footnote underneath",
      src="../stat-footnote.png" %}


## Icons 
Use an icon to add visual context and emphasis while helping to explain a statistic further.

{% example 
    palette="light",
    alt="Two statistics with icons; the left statistic has a fighter jet icon on top whereas the right has a wrench",
    src="../stat-icon-regular.png" %}


### Large icon 
There are situations where a large icon is used in place of data text and the data point is written into the body text. This is an edge case, so work with a content strategist to write short data text and body text or use another element instead.

{% example 
    palette="light",
    alt="Three statistics with large icons and body text",
    src="../stat-icon-large.png" %}


## Writing content 
Statistic text is meant to be short so it can have impact especially when statistics are grouped together. It is recommended to write as few words as possible for text styles.
<ul>
<li><strong>Title text</strong> - do not allow title text to break to two lines in any environment</li>
<li><strong>Data text</strong> - if a percent or number includes a decimal, round up to decrease the character count</li>
<li><strong>Body text</strong> - be mindful of using too many words considering how statistics look when grouped</li>
<li><strong>Call to action text</strong> - use fewer words to avoid taking away impact and focus when reading</li>
</ul>


### Character and line counts 

<table style="width:100%">
  <thead>
    <tr>
      <th>Element</th>
      <th>Character count</th>
      <th>Line count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title text</td>
      <td>20</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Data text</td>
      <td>7</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Body text</td>
      <td>100</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Call to action text</td>
      <td>30</td>
      <td>1</td>
    </tr>
  </tbody>
</table>



### Title text 
Title text is used to add quantitative emphasis or help explain data text. Include title text if using data text alone does not make sense. In the example below, if the data text <strong>40</strong> was by itself, then text title would be needed to describe what 40 pertains to or else the statistic would not make sense.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Title text can be positioned above or below data text even if statistics are grouped.</p>
</rh-alert>

{% example 
    palette="light",
    alt="Two statistics, one with title text above the data text and the other with title text below data text",
    src="../stat-text-slot-title.png" %}



### Data text 
Data text is the number or percent that represents data.

{% example 
    palette="light",
    alt="Two statistics with different data text percents",
    src="../stat-text-slot-data.png" %}


### Body text 
Body text explains data text. A percent or number means nothing without something that explains the rest of the statistic.

{% example 
    palette="light",
    alt="Two statistics with different body text examples",
    src="../stat-text-slot-body.png" 
%}

### Call to action text 
Use a call to action to entice users to learn more after they read a statistic. If statistics are grouped, it is not mandatory for each statistic to include a call to action.

{% example 
    palette="light",
    alt="Statistic with a call to action",
    src="../stat-text-slot-cta.png" 
%}



### Internationalization 
Translated text can increase or decrease character counts, line length, and the number of lines. Be mindful when writing body text that might get translated. This is important for statistics used in groups as more words will cause them to be arranged closer to each other therefore reducing any comfortable spacing around them.


{% example 
    palette="light",
    alt="Two statistics with English on top and German on the bottom; the English statistic has two lines of body text whereas the German has three",
    src="../stat-i18n-a.png"
%}

{% example 
    palette="light",
    alt="Two statistics with English on top and Chinese on the bottom; the English statistic body text is wider whereas the Chinese is thinner",
    src="../stat-i18n-b.png"
%}


## Layout 

### Grouping 
The minimum number of statistics per row is one and the maximum is four regardless if they are in a container or not.

{% example 
    palette="light",
    alt="Four statistics arranged evenly-spaced on a 12-column grid",
    src="../stat-layout-grouping.png"
%}

### Card 
A statistic can be placed in a card if the body text or other text styles are short enough. Otherwise, keep them on the page to avoid readability issues.

{% example 
    palette="light",
    alt="Four statistics placed in cards and arranged evenly-spaced on a 12-column grid",
    src="../stat-layout-card.png"
%}

### Alignment 
By default, a statistic is always center aligned. However, a statistic may be left aligned if grouped and if the surrounding content is also left aligned.

{% example
    palette="light",
    alt="Three statistics left aligned with vertical dashed lines on the left side of each",
    src="../stat-layout-alignment.png"
%}

### Padding 
The page grid usually determines the space between blocks or containers of content, but in most situations, it is 32px on large breakpoints. On small breakpoints, the padding is 48px for better vertical rhythm.

{% example 
    palette="light",
    alt="Two groups of statistics; one group has 32px of padding with text underneath that says ‘Large breakpoints’, the other group has 48px of padding with text underneath that says ‘Small breakpoints’",
    src="../stat-layout-padding.png"
%}


## Responsive design 

### Large breakpoints 
If only one statistic is used, it can span a maximum of six columns.

{% example 
    palette="light",
    alt="Statistic spanning less than six columns with a box around the body copy spanning six columns",
    src="../stat-breakpoint-large.png"
%}

### Small breakpoints 
Statistics arranged in a row on large breakpoints will stack on small breakpoints. Text sizes will also be reduced based on the <a href="https://ux.redhat.com/foundations/typography/">mobile typography scale</a>.

{% example 
    palette="light",
    alt="Three statistics spanning the width of one column on mobile",
    src="../stat-breakpoint-small.png"
%}

## Best practices 

### Custom statistic 
Do not duplicate or rearrange any element to create a custom statistic.

{% example
    palette="wrong",
    alt="Statistic with some elements arranged horizontally and some vertically which is incorrect usage",
    src="../stat-best-practice-1.png"
%}


### Unrelated icon 
Do not use an icon that is unrelated to the rest of the statistic content.

{% example
    palette="wrong",
    alt="Statistic with a crab icon on top of text which is incorrect usage",
    src="../stat-best-practice-2.png"
%}

### Inconsistent elements 
Keep statistics consistent when grouping. Either use the same number of elements for all statistics or do not use them at all. For example, if a statistic has an icon and the others do not, either remove the icon or ensure they all have an icon.

{% example
    palette="wrong",
    alt="Three statistics with different element combinations with is incorrect usage",
    src="../stat-best-practice-3.png"
%}


### Too much text 
Do not include too much body text, a statistic should clarify a single data point quickly and with impact, not tell a long story.

{% example
    palette="wrong",
    alt="Statistic with data text and long lines of body text which is incorrect usage",
    src="../stat-best-practice-4.png"
%}
{% endsection %}

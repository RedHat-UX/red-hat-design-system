## Usage

Use a statistic to represent a data point that users can consume quickly. 
Statistics help users trust our page content, so use them strategically because 
there is a balance between using some and too many. If a layout has lots of 
content in different arrangements, using a statistic should offer users a visual 
break or respite.


## Footnote

Include a footnote on every page especially if a statistic comes from an 
external source. Doing this increases the credibility of the statistic and 
better integrates the data with the rest of the page content.

<uxdot-example width-adjustment="870x" color-palette="lightest">
  <img src="../stat-guidelines-footnote.svg"
        alt="A statistic with a small text footnote underneath"
        width="870"
        height="195">
</uxdot-example>


## Icons

Use an icon to add visual context and emphasis while helping to explain a 
statistic further.

<uxdot-example color-palette="lightest" width-adjustment="638px">
  <img alt="Two statistics with icons; the left statistic has a plane icon on top whereas the right has a car"
       src="../stat-guidelines-icons.svg"
       width="638"
       height="151">
</uxdot-example>


### Large icon

There are situations where a large icon is used in place of data text and the 
data point is written into the body text. This is an edge case, so work with a 
content strategist to write short data text and body text or use another element 
instead.

<uxdot-example color-palette="lightest" width-adjustment="870px">
  <img alt="Three statistics with large icons and body text"
       src="../stat-guidelines-large-icons.svg"
       width="870"
       height="180">
</uxdot-example>


## Writing content

Statistic text is meant to be short so it can have impact especially when 
statistics are grouped together. It is recommended to write as few words as 
possible for text styles.

- **Title text** - do not allow title text to break to two lines in any environment
- **Data text** - if a percent or number includes a decimal, round up to decrease the character count
- **Body text** - be mindful of using too many words considering how statistics look when grouped
- **Call to action text** - use fewer words to avoid taking away impact and focus when reading


### Character and line counts

<style data-helmet>.char-count-table thead th:first-of-type {width: 50%;}</style>
<rh-table class="char-count-table">

| Element             | Character count | Line count |
|---------------------|-----------------|------------|
| Title text          | 20              | 1          |
| Data text           | 7               | 1          |
| Body text           | 100             | 2          |
| Call to action text | 30              | 1          |

</rh-table>


### Title text

Title text is used to add quantitative emphasis or help explain data text. 
Include title text if using data text alone does not make sense. In the example 
below, if the data text **40** was by itself, then text title would 
be needed to describe what 40 pertains to or else the statistic would not make 
sense.

<rh-alert state="info">
  <h4 slot="title">Helpful tip</h4>
  <p>Title text can be positioned above or below data text even if statistics are grouped.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="624px">
  <img alt="Two statistics, one with title text above the data text and the other with title text below data text"
       src="../stat-guidelines-title-text.svg"
       width="624"
       height="133">
</uxdot-example>


### Data text

Data text is the number or percent that represents data.

<uxdot-example color-palette="lightest" width-adjustment="626px">
  <img alt="Two statistics with different data text percents"
       src="../stat-guidelines-data-text.svg"
       width="626"
       height="98">
</uxdot-example>


### Body text

Body text explains data text. A percent or number means nothing without 
something that explains the rest of the statistic.

<uxdot-example color-palette="lightest" width-adjustment="748px">
  <img alt="Two statistics with different body text examples"
       src="../stat-guidelines-body-text.svg"
       width="748"
       height="98">
</uxdot-example>


### Call to action text

Use a call to action to entice users to learn more after they read a statistic. 
If statistics are grouped, it is not mandatory for each statistic to include a 
call to action.

<uxdot-example color-palette="lightest" width-adjustment="288px">
  <img alt="Statistic with a call to action"
       src="../stat-guidelines-cta-text.svg"
       width="288"
       height="160">
</uxdot-example>


### Internationalization

Translated text can increase or decrease character counts, line length, and the 
number of lines. Be mindful when writing body text that might get translated. 
This is important for statistics used in groups as more words will cause them to 
be arranged closer to each other therefore reducing any comfortable spacing 
around them.

<uxdot-example color-palette="lightest" width-adjustment="288px">
  <img alt="Two statistics with English on top and German on the bottom; the English statistic has two lines of body text whereas the German has three"
       src="../stat-guidelines-internationalization.svg"
       width="288"
       height="318">
</uxdot-example>


## Layout

### Grouping

The minimum number of statistics per row is one and the maximum is four 
regardless if they are in a container or not.

<uxdot-example color-palette="lightest" width-adjustment="870px">
  <img alt="Four statistics arranged evenly-spaced on a 12-column grid"
       src="../stat-guidelines-layout-grouping.svg"
       width="870"
       height="135">
</uxdot-example>


### Card

A statistic can be placed in a card if the body text or other text styles are 
short enough. Otherwise, keep them on the page to avoid readability issues.

<uxdot-example color-palette="lightest" width-adjustment="870px">
  <img alt="Three statistics placed in cards and arranged evenly-spaced on a 12-column grid"
       src="../stat-guidelines-layout-card.svg"
       width="870"
       height="191">
</uxdot-example>


### Alignment

By default, a statistic is always center aligned. However, a statistic may be 
left aligned if grouped and if the surrounding content is also left aligned.

<uxdot-example color-palette="lightest" width-adjustment="870px">
  <img alt="Three statistics left aligned with vertical dashed lines on the left side of each"
       src="../stat-guidelines-layout-alignment.svg"
       width="870"
       height="151">
</uxdot-example>


### Padding

The page grid usually determines the space between blocks or containers of 
content, but in most situations, it is 32px on large breakpoints. On small 
breakpoints, the padding is 48px for better vertical rhythm.

<uxdot-example color-palette="lightest" width-adjustment="870px">
  <img alt="Two groups of statistics; one group has 32px of padding with text underneath that says ‘Large breakpoints’, the other group has 48px of padding with text underneath that says ‘Small breakpoints’"
       src="../stat-guidelines-layout-padding.svg"
       width="870"
       height="304">
</uxdot-example>


## Responsive design

### Large breakpoints

If only one statistic is used, it can span a maximum of six columns.

<uxdot-example color-palette="lightest" width-adjustment="1140px" variant="full" alignment="left" no-border>
  <img alt="Statistic spanning fewer than six columns with a box around the body copy spanning six columns"
       src="../stat-guidelines-responsive-large.svg"
       width="1140"
       height="208">
</uxdot-example>


### Small breakpoints

Statistics arranged in a row on large breakpoints will stack on small
breakpoints. Text sizes will also be reduced based on the [mobile
typography scale](https://ux.redhat.com/foundations/typography/).

<uxdot-example color-palette="lightest" width-adjustment="360px" variant="full" alignment="left" no-border>
  <img alt="Three statistics spanning the width of one column on mobile"
       src="../stat-guidelines-responsive-small.svg"
       width="360"
       height="357">
</uxdot-example>


## Best practices

### Customizing statistics

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="288px" slot="image">
      <img alt="Statistic with an icon, title text, data text, body text, and a cta in the right order"
           src="../stat-guidelines-best-practice-customizing-do.svg"
           width="288"
           height="208">
    </uxdot-example>
    <p>Do use the layout options and the order of parts that are already available in a statistic.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="288px" slot="image">
      <img alt="Statistic with title text and data text on the same line and in the same type style, an icon, body text, and a cta"
           src="../stat-guidelines-best-practice-customizing-dont.svg"
           width="288"
           height="208">
    </uxdot-example>
    <p>Do not rearrange the prescribed layout to create a custom statistic.</p>
  </uxdot-best-practice>
</div>

### Layout consistency

  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment=870px" slot="image">
      <img alt="Three stats, all with icon, data text, and body text"
           src="../stat-guidelines-best-practice-layout-consistency-do.svg"
           width="870"
           height="151">
    </uxdot-example>
    <p>Keep the layouts of each statistic consistent when grouping.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="870px" slot="image">
      <img alt="Stat with icon, data text, and body text; stat with only data and body text; and a stat with icon, data text, body text, and cta"
           src="../stat-guidelines-best-practice-layout-consistency-dont.svg"
           width="870"
           height="186">
    </uxdot-example>
    <p>Do not use an inconsistent number of parts for statistics in a group.</p>
  </uxdot-best-practice>

### Body copy

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment=288px" slot="image">
      <img alt="Statistic with body text shorter than 40 characters"
           src="../stat-guidelines-best-practice-body-copy-length-do.svg"
           width="288"
           height="181">
    </uxdot-example>
    <p>Use the body copy to clarify briefly a single data point.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="288px" slot="image">
      <img alt="Statistic with data text and long lines of body text"
           src="../stat-guidelines-best-practice-body-copy-length-dont.svg"
           width="288"
           height="181">
    </uxdot-example>
    <p>Do not include too much body text, which could reduce the data’s impact.</p>
  </uxdot-best-practice>
</div>
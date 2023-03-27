{% section %}
  ## Usage

  ### Layout

  The minimum width of a stat is three columns and the maximum number of cards 
  that can be used in a row is four.

  ![Example of four stats in one row]({{ '../stat-usage-layout.svg' | url }}) {.centered style="--inline-img-max-width: 1000px;"}

  ### Pairing statistics with footnotes

  Include a footnote on the same page if you're making a claim, especially if the 
  statistic comes from an external source. This can increase the credibility of 
  the statistic and can better integrate the data with the page content.

  {% example palette="light",
             width=555,
             class="centered",
             alt="Example of a stat paired with a footnote that explains where the stat came from",
             src="../stat-usage-with-footnote.svg" %}
{% endsection %}

{% section %}
  ## Behavior

  ### Vertical height
  If there are multiple stats in a row, the height of the row will be determined 
  by the tallest stat.

  {% example palette="light",
             width=789,
             class="centered",
             alt="A group of five stats arranged in two rows",
             src="../stat-behavior-vertical-height.svg" %}
{% endsection %}

{% section %}
  ## Best practices

  ### Including additional elements

  Don't use inconsistent amounts of content in stats that are grouped together.

  {% alert title="Helpful tip" %}
    A call to action does not have to appear under every stat in a group. Since it 
    appears at the end, omitting it does not disrupt the visual flow of elements 
    in the other stats.
  {% endalert %}

  {% example palette="wrong",
             width=789,
             class="centered",
             alt="Group containing a stat with icon only, stat without icon or title, and stat with title only",
             src="../stat-best-practice-inconsistent-content.svg" %}

  ### Choosing icons

  Don't use an icon that is unrelated to the body text.

  {% example palette="wrong",
             width=360,
             class="centered",
             alt="Stat about telecom companies paired with a crab icon",
             src="../stat-best-practice-unrelated-icon.svg" %}

  ### Title

  Avoid character counts that cause the title to break into two lines at any 
  screen size.

  {% example palette="wrong",
             width=381,
             class="centered",
             alt="Stat with a title that wraps to two lines",
             src="../stat-best-practice-long-title.svg" %}

  If a title is used for one stat in a group, write a title for each stat. 
  Ensure the title appears in the same slot for each grouped stat to keep 
  formatting consistent.

  {% example palette="wrong",
             width=789,
             class="centered",
             alt="One row containing a stat with a title above the number, stat with no title, and stat with a title below number",
             src="../stat-best-practice-title-placement.svg" %}

  ### Number
  Avoid character counts that cause the number to break into two lines at any 
  screen size. If the number is a percentage, round up to avoid using decimals 
  that would increase the character count.

  {% example palette="wrong",
             width=320,
             class="centered",
             alt="Stat with a number that wraps to two lines",
             src="../stat-best-practice-long-number.svg" %}

  Avoid using 100% for more than one statistic in a group or on a page, unless 
  you are able to cite a source and include footnotes.

  {% example palette="wrong",
             width=789,
             class="centered",
             alt="Three stats with 100% and no footnote",
             src="../stat-best-practice-100-percent-no-footnote.svg" %}

  ### Body text

  Keep the body text as short and consumable as possible. Be mindful of lengthy 
  character counts, especially when stats are grouped. In general, it is not 
  recommended to have the stat's body text span more than 5 lines on small 
  screens.

  {% example palette="wrong",
             width=328,
             class="centered",
             alt="Stat with body text that is six lines long at mobile screen 
             sizes",
             src="../stat-best-practice-long-body-text.svg" %}

{% endsection %}


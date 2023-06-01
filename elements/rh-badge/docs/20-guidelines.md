## Usage 
Use a badge to reflect counts like number of objects, events, or unread items.
## Badge vs. tag 
If you need to add specific text captions to elements, consider using a [Tag](/elements/tag) instead.
## Counter number 
The width of a badge varies based on the counter number. Using a number larger than the threshold will display a + at the end. For example, if `999` is the threshold, using `1,000` or larger will display `999+`.

{% example palette="light",
  alt="Badges with various counter numbers; from left to right, a badge with 1, a badge with 50, a badge with 500, and a badge with 999+",
  src="../badge-counter-number.png" %}


## Filtering 
A badge is often found in filter toggles to indicate the number of selections that are made in a toolbar filter or select list.

{% example palette="light",
          alt="A badge used in a filter dropdown and counting three selected checkboxes within a menu",
          src="../badge-filtering.png" %}


## Best practices 
### Large number 
Do not allow a badge to display a count over 999.

{% example palette="wrong",
          alt="A badge counting to 1,00,000 which is incorrect usage",
          src="../badge-best-practice-1.png" %}


### Two badges 
Be careful using two badges. Using color only and the lack of other visual cues might make it difficult to differentiate unread or actionable items associated with the badges.

{% example palette="wrong",
          alt="Two badges with the same counter number, but with different background colors and no other unique visual cues which is incorrect usage",
          src="../badge-best-practice-2.png" %}
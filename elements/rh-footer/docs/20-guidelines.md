The footer is divided into two parts, the **modular** footer and **universal** 
footer. Most of the content in the modular footer can be customized whereas the 
content in the universal footer is the same across all websites.

![Footer component anatomy]({{ '/assets/footer/footer-anatomy.png' | url }}) 

#### Website logo

A unique logo that corresponds to the website the footer is used on.

#### Social media links

Social media links that direct a visitor to unique social media websites.

#### Modular navigation

A collection of links unique to the website IA (information architecture).

#### Unique message

A unique description that corresponds to the website the footer is used on.

#### Shared message

A message about Red Hat that is the same across all footers and websites.

#### Unique content or top task

Extra content or a top task that is unique and requires its own slot (optional).

#### Universal navigation

A collection of important links that are the same across all footers and 
websites.

## Interaction states

#### Default

![Footer component interaction state - default]({{ '/assets/footer/footer-interaction-state-default.png' | url }})

| Interaction State | Element                    | Text Styling                                         |
| ----------------- | -------------------------- | ---------------------------------------------------- |
| Default           | Social media link          | `--rh-color-black-500`                               |
| Default           | Modular nav link           | `--rh-color-white`                                   |
| Default           | Call to action             | `--rh-color-interactive-blue-lighter`                |
| Default           | Red Hat fedora icon        | `--rh-color-black-500`                               |
| Default           | Universal & and legal link | `--rh-color-white`                                   |

#### Hover

![Footer component interaction state - hover]({{ '/assets/footer/footer-interaction-state-hover.png' | url }}) 

| Interaction State        | Element                    | Text Styling                         |
| -----------------        | -------------------------  | ------------------------------------ |
| Hover, Focus, and Active | Social media link          | `--rh-color-black-400`               |
| Hover, Focus, and Active | Modular nav link           | `--rh-color-white` / Underline       |
| Hover, Focus, and Active | Call to action             | `--rh-context-dark-text-link-hover`  |
| Hover, Focus, and Active | Red Hat fedora icon        | `--rh-color-black-400`               |
| Hover, Focus, and Active | Universal nav & legal link | `--rh-color-white`  / Underline      |

#### Focus

Focus styles are the same as hover styles and also include a focus indicator.

![Footer component interaction state - focus]({{ '/assets/footer/footer-interaction-state-focus.png' | url }})

#### Active

![Footer component interaction state - active]({{ '/assets/footer/footer-interaction-state-active.png' | url }})

## Responsive design

#### Large screens

Footers on large screen sizes include columns and rows of links.

![Footer component for large screens]({{ '/assets/footer/footer-sample.png' | url }})

#### Small screens

The modular footer on small screen sizes includes an accordion instead of 
columns and rows of links. All accordion panels are collapsed by default when 
the page loads.

<rh-alert state="info">

<h5 slot="header">Horizontal rule</h5>

At small screen sizes, the horizontal rule below the logo and social media icons 
disappears.

</rh-alert>

![Footer component for small screens]({{ '/assets/footer/footer-small-screens-1.png' | url }})
![Footer component for small screens]({{ '/assets/footer/footer-small-screens-2.png' | url }})

## Best practices

#### Changing the stacking order

Do not stack the universal footer on top of the modular footer.

![Footer component best practice - changing the stacking order]({{ '/assets/footer/footer-best-practice-1.png' | url }})

#### Using an accordion

Do not use an accordion inside of a large modular footer, only modular footers 
for small screen sizes include an accordion.

![Footer component best practice - using an accordion]({{ '/assets/footer/footer-best-practice-2.png' | url }})

#### Removing information

Do not remove the copyright text or Summit link from the universal footer.

![Footer component best practice - removing information]({{ '/assets/footer/footer-best-practice-3.png' | url }})

#### Isolating the Modular footer

Do not use the modular footer on its own without the universal footer.

![Footer component best practice - isolating the modular footer]({{ '/assets/footer/footer-best-practice-4.png' | url }}) 

## Spacing

The modular and universal footers use [spacers](../../foundations/spacing) to 
define space values between elements.

![Footer component spacing on large screens]({{ '/assets/footer/footer-spacing-1.png' | url }})
![Footer component spacing on small screens]({{ '/assets/footer/footer-spacing-2.png' | url }})
![Footer component spacing on small screens]({{ '/assets/footer/footer-spacing-3.png' | url }})

## Feedback

To give feedback about anything on this page, [contact 
us](mailto:digital-design-system@redhat.com).

## Components

To learn how to use our other components in your designs, visit the 
[Components]({{ '/components/' | url }}) section.



{% section %}

## Behavior

### Brick

Similar to an [Accordion](https://ux.redhat.com/components/accordion/){target="_blank"}, Brick 
variants have the ability to hide or reveal content when selected. Otherwise, 
the Brick variants function like regular links if no content needs to be hidden.

![Call to action component usage, Brick variant]({{ '../cta-brick-variant.svg' | url }}) {style="--inline-img-max-width:1000px;margin-block:var(--rh-space-2xl) var(--rh-space-3xl)"}

{% endsection %}

{% section -%}
## Interaction states

All call to action link variants have interaction states.

<!-- Primary variant -->
### Primary and Primary (video)

{% example palette="lightest",
           width=872,
           alt="Call to action component interaction states, Primary variant",
           src="../cta-interaction-states-primary.svg" %}


| Variant         | Interaction state | Element | Specs                                      |
| --------------- | ----------------- | ------- | ------------------------------------------ |
| Primary         | All states        | Text    | Red Hat Display, Bold, 16pt/24 (1.5), #FFF |
| Primary (video) | All states        | Icon    | #FFF                                       |
| Both            | Link, Focus       | Fill    | 3px rounded corners, #E00                  |
| Both            | Hover, Active     | Fill    | 3px rounded corners, #D40000               |
| Both            | Focus, Active     | Border  | 2px rounded corners, 1px thickness, #FFF   |

<!-- Primary (white) variant -->
### Primary (white)

{% example palette="darkest",
           width=872,
           alt="Call to action component interaction states, Primary (white) variant",
           src="../cta-interaction-states-primary-white.svg" %}

| Interaction state | Element | Specs                                         |
|-------------------|---------|-----------------------------------------------|
| All states        | Text    | Red Hat Display, Bold, 16pt/24 (1.5), #151515 |
| Link, Focus       | Fill    | 3px rounded corners, #FFF                     |
| Hover, Active     | Fill    | 3px rounded corners, #D2D2D2                  |
| Focus, Active     | Border  | 2px rounded corners, 1px thickness, #151515   |

<!-- Secondary variant, light theme -->
### Secondary, light theme

{% example palette="lightest",
           width=872,
           alt="Call to action component interaction states, Secondary variant (light theme)",
           src="../cta-interaction-states-secondary-light-theme.svg" %}

| Interaction state | Element      | Specs                                         |
|-------------------|--------------|-----------------------------------------------|
| Link, Focus       | Text         | Red Hat Display, Bold, 16pt/24 (1.5), #151515 |
| Hover, Active     | Text         | Red Hat Display, Bold, 16pt/24 (1.5), #FFF    |
| Link              | Border       | 3px rounded corners, 1px thickness, #151515   |
| Focus             | Outer border | 3px rounded corners, 1px thickness, #151515   |
| Focus             | Fill         | 3px rounded corners, #F0F0F0                  |
| Focus             | Inner border | 2px rounded corners, 1px thickness, #151515   |
| Hover, Active     | Fill         | 3px rounded corners, #151515                  |
| Active            | Border       | 2px rounded corners, 1px thickness, #FFF      |

<!-- Secondary variant, dark theme -->
### Secondary, dark theme

{% example palette="darkest",
           width=872,
           alt="Call to action component interaction states, Secondary variant (dark theme)",
           src="../cta-interaction-states-secondary-dark-theme.svg" %}

| Interaction state | Element      | Specs                                         |
|-------------------|--------------|-----------------------------------------------|
| Link, Focus       | Text         | Red Hat Display, Bold, 16pt/24 (1.5), #FFF    |
| Hover, Active     | Text         | Red Hat Display, Bold, 16pt/24 (1.5), #151515 |
| Link              | Border       | 3px rounded corners, 1px thickness, #FFF      |
| Focus             | Outer border | 3px rounded corners, 1px thickness, #FFF      |
| Focus             | Fill         | 3px rounded corners, #3C3F42                  |
| Focus             | Inner border | 2px rounded corners, 1px thickness, #FFF      |
| Hover, Active     | Fill         | 3px rounded corners, #FFF                     |
| Active            | Border       | 2px rounded corners, 1px thickness, #151515   |

<!-- Brick variant -->
### Brick

{% example palette="lightest",
           width=872,
           alt="Call to action component interaction states, Brick variant",
           src="../cta-interaction-states-brick.svg" %}

| Interaction state | Element      | Specs                                                    |
|-------------------|--------------|----------------------------------------------------------|
| Link, Focus       | Text         | Red Hat Text, Regular, 16pt/24 (1.5), #06C               |
| Hover, Active     | Text         | Red Hat Text, Regular, 16pt/24 (1.5), Underline, #004080 |
| Link, Hover       | Border       | 3px rounded corners, 1px thickness, #D2D2D2              |
| Focus             | Outer border | 3px rounded corners, 1px thickness, #D2D2D2              |
| Focus             | Inner border | 2px rounded corners, 1px thickness, #D2D2D2              |
| Hover, Active     | Fill         | 3px rounded corners, #F5F5F5                             |
| Active            | Outer border | 3px rounded corners, 1px thickness, #D2D2D2              |
| Active            | Inner border | 2px rounded corners, 1px thickness, #D2D2D2              |

<!-- Brick (icon) variant -->
### Brick (icon)

{% example palette="lightest",
           width=872,
           alt="Call to action component interaction states, Brick (icon) variant",
           src="../cta-interaction-states-brick-icon.svg" %}

| Interaction state | Element      | Specs                                                    |
|-------------------|--------------|----------------------------------------------------------|
| All states        | Icon         | #D2D2D2                                                  |
| Link, Focus       | Text         | Red Hat Text, Regular, 16pt/24 (1.5), #06C               |
| Hover, Active     | Text         | Red Hat Text, Regular, 16pt/24 (1.5), Underline, #004080 |
| Link, Hover       | Border       | 3px rounded corners, 1px thickness, #D2D2D2              |
| Focus             | Outer border | 3px rounded corners, 1px thickness, #D2D2D2              |
| Focus             | Inner border | 2px rounded corners, 1px thickness, #D2D2D2              |
| Hover, Active     | Fill         | 3px rounded corners, #F5F5F5                             |
| Active            | Outer border | 3px rounded corners, 1px thickness, #D2D2D2              |
| Active            | Inner border | 2px rounded corners, 1px thickness, #D2D2D2              |

<!-- Default and Default (video) variant, light theme -->
### Default and Default (video), light theme

{% example palette="lightest",
           width=872,
           alt="Call to action component interaction states, Default and Default (video) variant (light theme)",
           src="../cta-interaction-states-default-light-theme.svg" %}

| Interaction state | Element    | Specs                                         |
|-------------------|------------|-----------------------------------------------|
| Link, Focus       | Text       | Red Hat Display, Bold, 18pt/27 (1.5), #06C    |
| Hover, Active     | Text       | Red Hat Display, Bold, 18pt/27 (1.5), #004080 |
| Link, Focus       | Icon       | #06C                                          |
| Hover, Active     | Icon       | #004080                                       |
| Focus             | Background | 3px rounded corners, #06C, 10% opacity        |
| Active            | Background | 3px rounded corners, #004080, 10% opacity     |

<!-- Default and Default (video) variant, dark theme -->
### Default and Default (video), dark theme

{% example palette="darkest",
           width=872,
           alt="Call to action component interaction states, Default and Default (video) variant (dark theme)",
           src="../cta-interaction-states-default-dark-theme.svg" %}

| Interaction state | Element    | Specs                                         |
|-------------------|------------|-----------------------------------------------|
| Link, Focus       | Text       | Red Hat Display, Bold, 18pt/27 (1.5), #73BCF7 |
| Hover, Active     | Text       | Red Hat Display, Bold, 18pt/27 (1.5), #BEE1F4 |
| Link, Focus       | Icon       | #73BCF7                                       |
| Hover, Active     | Icon       | #BEE1F4                                       |
| Focus             | Background | 3px rounded corners, #73BCF7, 25% opacity     |
| Active            | Background | 3px rounded corners, #BEE1F4, 25% opacity     |

{% endsection %}

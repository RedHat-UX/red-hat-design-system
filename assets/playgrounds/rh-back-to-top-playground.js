export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-back-to-top-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/rh-back-to-top-index-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<div id=\"overflow\">\n  <a id=\"top\" href=\"#bottom\">Go to bottom</a>\n  <p>Scroll down or press tab to see the back to top button</p>\n  <a id=\"bottom\" href=\"#top\">Go to top</a>\n  <rh-back-to-top href=\"#top\">Back to top</rh-back-to-top>\n</div>\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  main {\n    display: block;\n    scroll-behavior: smooth;\n    max-height: calc(100dvh - var(--pf-demo-header-height)) !important;\n  }\n\n  #nav {\n    height: calc(100dvh - var(--pf-demo-header-height, 4.375rem)) !important;\n  }\n\n  #overflow {\n    min-height: calc(100dvh + 401px);\n    position: relative;\n  }\n\n  #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    main {\n      scroll-behavior: auto;\n    }\n  }\n</style>\n\n<script type=\"module\">\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-back-to-top-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./rh-back-to-top-index-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Back To Top"
    },
    "demo/rh-back-to-top-always-visible-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/always-visible/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-back-to-top visible=\"always\" href=\"#top\">Back to top</rh-back-to-top>\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  main {\n    display: block;\n    scroll-behavior: smooth;\n    max-height: calc(100dvh - var(--pf-demo-header-height)) !important;\n  }\n  #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n  #nav {\n    height: calc(100dvh - var(--pf-demo-header-height, 4.375rem)); !important;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-always-visible-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Always Visible"
    },
    "demo/rh-back-to-top-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/rh-back-to-top-color-context-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <div id=\"overflow\">\n    <a id=\"top\" href=\"#bottom\">Go to bottom</a>\n    <p>Scroll down or press tab to see the back to top button</p>\n    <a id=\"bottom\" href=\"#top\">Go to top</a>\n  <div>\n\n\n<rh-back-to-top href=\"#top\">Back to top</rh-back-to-top>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<style>\n  a {\n    color: var(--rh-color-interactive-blue-darker, #0066cc);\n  }\n\n  a:is(:hover,:focus) {\n    color: var(--rh-color-interactive-blue-darkest, #003366);\n  }\n\n  [color-palette^=\"dark\"] a {\n    color: var(--rh-color-accent-base-on-dark, #92c5f9);\n  }\n\n  [color-palette^=\"dark\"] a:is(:hover,:focus) {\n    color: var(--rh-color-interactive-blue-lightest, #b9dafc);\n  }\n\n  main {\n    display: block;\n    scroll-behavior: smooth;\n    max-height: calc(100dvh - var(--pf-demo-header-height)) !important;\n  }\n\n  #nav {\n    height: calc(100dvh - var(--pf-demo-header-height, 4.375rem)) !important;\n  }\n\n  #overflow {\n    min-height: calc(100dvh + 401px);\n    position: relative;\n  }\n\n  #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n\n  rh-context-demo {\n    height: auto;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    main {\n      scroll-behavior: auto;\n    }\n  }\n</style>\n\n\n<script type=\"module\">\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n</script>\n</div></div></rh-context-demo><!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-color-context-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-back-to-top-no-slotted-text-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/rh-back-to-top-no-slotted-text-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n",
      "hidden": true
    },
    "demo/no-slotted-text/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<div id=\"overflow\">\n  <a id=\"top\" href=\"#bottom\">Go to bottom</a>\n  <p>Scroll down or press tab to see the back to top button</p>\n  <a id=\"bottom\" href=\"#top\">Go to top</a>\n  <rh-back-to-top href=\"#top\" label=\"Return to top\"></rh-back-to-top>\n</div>\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  main {\n    display: block;\n    scroll-behavior: smooth;\n    max-height: calc(100dvh - var(--pf-demo-header-height)) !important;\n  }\n\n  #nav {\n    height: calc(100dvh - var(--pf-demo-header-height, 4.375rem)) !important;\n  }\n\n  #overflow {\n    min-height: calc(100dvh + 401px);\n    position: relative;\n  }\n\n  #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    main {\n      scroll-behavior: auto;\n    }\n  }\n</style>\n<script type=\"module\">\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-no-slotted-text-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-no-slotted-text-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "No Slotted Text"
    },
    "demo/rh-back-to-top-position-sticky-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/position-sticky/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<div id=\"mock\" class=\"viewport\">\n  <div class=\"nav\" id=\"top\"></div>\n  <div class=\"page-body\">\n    <div class=\"hero\">\n      <div>\n        <h2>Back to Top Demo</h2>\n        <p><pf-icon icon=\"arrow-down\"></pf-icon> Scroll down or press tab to show back to top link.</p>\n        <p>Back to top link will stay above the footer</p>\n      </div>\n    </div>\n    <div class=\"main\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tellus nec erat sodales ultrices. Morbi fringilla, purus ut cursus volutpat, dui ipsum varius massa, a lobortis mauris mi et justo. Integer lobortis sed magna in aliquet. Pellentesque suscipit elit enim, in consectetur metus tincidunt eu. In quam dolor, bibendum ac lorem et, blandit lacinia lorem. Praesent bibendum magna vel finibus facilisis. Cras eleifend est sed nisi malesuada, vitae varius sem venenatis. Nam maximus ligula bibendum quam porttitor tempor. Cras in lacus in lacus consectetur placerat lobortis ac velit. Pellentesque venenatis leo sit amet neque commodo pulvinar. Integer quis nulla ac eros luctus scelerisque. Pellentesque interdum sapien eros. Integer id velit sed eros fringilla porttitor.</p>\n      <p>Integer sit amet ultricies felis. Pellentesque consectetur metus lacus, vitae ultricies augue imperdiet non. Phasellus consectetur sapien elit, at blandit sapien scelerisque at. Sed congue venenatis sem nec ultrices. Aenean vel nunc semper, auctor lacus id, imperdiet ipsum. Aliquam gravida ultricies auctor. Suspendisse potenti.</p>\n      <p>Maecenas volutpat nisi lacus, sed facilisis sapien porta eget. Fusce interdum euismod faucibus. Curabitur sit amet lorem eu massa rutrum tempor vitae vitae urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ultricies lacinia nisl, sed pharetra tortor porttitor vitae. Donec tincidunt lectus vitae quam volutpat malesuada. Nunc felis orci, commodo vitae euismod non, vestibulum vel mauris. Quisque vel ipsum non dolor faucibus porttitor. Aenean porttitor sollicitudin elit, sit amet dictum ante dapibus vitae.</p>\n      <p>Nam imperdiet id ipsum sit amet congue. Sed nisl felis, pharetra in convallis varius, pretium a sem. Duis tincidunt luctus ipsum, a vestibulum nulla pharetra eget. In varius pellentesque lorem sed viverra. Phasellus ut leo pellentesque, finibus urna quis, elementum sapien. Nunc lacinia risus tortor, sit amet hendrerit dui vehicula ornare. Phasellus porttitor hendrerit mauris, vel euismod elit posuere ut.</p>\n      <p>Nullam tristique egestas ligula vitae interdum. Aliquam erat volutpat. Morbi gravida, enim eget convallis efficitur, risus ante sagittis magna, a viverra dolor felis a velit. Sed blandit semper nulla eu congue. Etiam gravida iaculis diam, ut vehicula tortor consectetur et. Mauris vitae tincidunt est. Phasellus sit amet nulla leo. Phasellus luctus et libero non mollis. Pellentesque efficitur, massa non vehicula auctor, risus dui vehicula sem, at aliquet elit justo et nibh. Ut sodales lectus vitae lacus aliquam, quis pharetra ante viverra. Aliquam tristique, mi non egestas viverra, nunc turpis malesuada lectus, vitae malesuada enim ante et arcu. Nullam interdum nulla et purus molestie interdum. Nulla et eros porttitor, dignissim sapien nec, ornare augue.</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tellus nec erat sodales ultrices. Morbi fringilla, purus ut cursus volutpat, dui ipsum varius massa, a lobortis mauris mi et justo. Integer lobortis sed magna in aliquet. Pellentesque suscipit elit enim, in consectetur metus tincidunt eu. In quam dolor, bibendum ac lorem et, blandit lacinia lorem. Praesent bibendum magna vel finibus facilisis. Cras eleifend est sed nisi malesuada, vitae varius sem venenatis. Nam maximus ligula bibendum quam porttitor tempor. Cras in lacus in lacus consectetur placerat lobortis ac velit. Pellentesque venenatis leo sit amet neque commodo pulvinar. Integer quis nulla ac eros luctus scelerisque. Pellentesque interdum sapien eros. Integer id velit sed eros fringilla porttitor.</p>\n      <a id=\"bottom\" href=\"#focusable-element-bottom\">Focusable element</a>\n    </div>\n    <rh-back-to-top scrollable-selector=\"#mock\" href=\"#top\">Back to top</rh-back-to-top>\n    <div class=\"footer\"></div>\n  </div>\n\n</div>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  /* override to place rh-back-to-top in context of page elements */\n  rh-back-to-top {\n    position: sticky;\n    float: right;\n  }\n\n  /* Addtional styles for demo page layout */\n  #mock {\n    --_nav-height: 70px;\n    --_footer-height: 400px;\n    --_hero-height: 300px;\n    --_content-width: 60rem;\n\n    scroll-behavior: smooth;\n    height: calc(100vh - calc(24px * 2) - var(--pf-demo-header-height));\n    overflow-y: scroll;\n    border: var(--rh-border-width-md, 2px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);\n  }\n  #mock .page-body {\n    position: relative;\n  }\n  #mock .nav {\n    background-color: #151515;\n    height: var(--_nav-height);\n    color: #ffffff;\n  }\n  #mock .main {\n    position: relative;\n    margin: 0 auto;\n    max-width: var(--_content-width);\n    margin-block: var(--rh-spacer-2xl, 32px);\n    padding: var(--rh-spacer-2xl, 32px);\n    min-height: calc(100dvh - var(--_nav-height) - var(--_hero-height));\n\n  }\n  #mock .hero {\n    display: flex;\n    justify-content: space-evenly;\n    height: var(--_hero-height);\n    background-color: var(--rh-color-surface-lighter, #f2f2f2);\n    padding-inline: var(--rh-spacer-2xl, 32px);\n    flex-direction: column;\n  }\n  #mock .hero div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-inline: var(--rh-spacer-2xl, 32px);\n    margin: 0 auto;\n    max-width: var(--_content-width);\n  }\n  #mock .footer {\n    position: static;\n    background-color: #151515;\n    height: var(--_footer-height);\n    margin-block-start: var(--rh-space-6xl, 96px);\n    color: #ffffff;\n  }\n  #mock #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    #mock .viewport {\n      scroll-behavior: auto;\n    }\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-position-sticky-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Position Sticky"
    },
    "demo/rh-back-to-top-scroll-distance-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/rh-back-to-top-scroll-distance-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n",
      "hidden": true
    },
    "demo/scroll-distance/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<div id=\"overflow\">\n  <a id=\"top\" href=\"#bottom\">Go to bottom</a>\n  <p>Scroll down (50px) or press tab to see the back to top button</p>\n  <a id=\"bottom\" href=\"#top\">Go to top</a>\n  <rh-back-to-top scroll-distance=\"50\" href=\"#top\">Back to top</rh-back-to-top>\n</div>\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  main {\n    display: block;\n    scroll-behavior: smooth;\n    max-height: calc(100dvh - var(--pf-demo-header-height)) !important;\n  }\n\n  #nav {\n    height: calc(100dvh - var(--pf-demo-header-height, 4.375rem)) !important;\n  }\n\n  #overflow {\n    /* scroll distance set to 50px */\n    min-height: calc(100dvh + 51px);\n    position: relative;\n  }\n\n  #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    main {\n      scroll-behavior: auto;\n    }\n  }\n</style>\n\n\n<script type=\"module\">\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-scroll-distance-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-scroll-distance-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Scroll Distance"
    },
    "demo/rh-back-to-top-warnings-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/rh-back-to-top-warnings-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top:not(#two)');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n",
      "hidden": true
    },
    "demo/warnings/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<div id=\"overflow\">\n  <a id=\"top\" href=\"#bottom\">Go to bottom</a>\n  <p>Scroll down or press tab to see the back to top button</p>\n  <a id=\"bottom\" href=\"#top\">Go to top</a>\n  <rh-back-to-top></rh-back-to-top>\n  <rh-back-to-top id=\"two\" scrollable-selector=\"\" scroll-distance=\"\"></rh-back-to-top>\n</div>\n<script type=\"module\">\n  import '@rhds/elements/rh-back-to-top/rh-back-to-top.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  main {\n    display: block;\n    scroll-behavior: smooth;\n    max-height: calc(100dvh - var(--pf-demo-header-height)) !important;\n  }\n\n  #nav {\n    height: calc(100dvh - var(--pf-demo-header-height, 4.375rem)) !important;\n  }\n\n  #overflow {\n    /* scroll distance set to 50px */\n    min-height: calc(100dvh + 51px);\n    position: relative;\n  }\n\n  #bottom {\n    position: absolute;\n    bottom: 0;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    main {\n      scroll-behavior: auto;\n    }\n  }\n</style>\n\n\n<script type=\"module\">\n  /* add support for demo/fullscreen and dev server */\n  const b2t = document.querySelector('rh-back-to-top:not(#two)');\n  const main = document.querySelector('main');\n  // if main isn't scrollable use window\n  if (window.getComputedStyle(main).overflow === 'scroll') {\n    b2t.scrollableSelector = 'main';\n  }\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-warnings-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-back-to-top-warnings-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Warnings"
    }
  }
};
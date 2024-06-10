export const config = {
  "files": {
    "demo/reset.css": {
      "contentType": "text/css",
      "content": "\n  /* Box sizing rules */\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  /* Remove default margin */\n  :where(body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  li,\n  figure,\n  figcaption,\n  blockquote,\n  dl,\n  dd) {\n    margin: 0;\n  }\n\n  /* Default scroll behavior */\n  html:focus-within {\n    scroll-behavior: smooth;\n  }\n\n  /* Inherit fonts for inputs and buttons */\n  :where(input,\n  button,\n  textarea,\n  select) {\n    font: inherit;\n  }\n\n  /* Remove all animations and transitions for people that prefer not to see them */\n  @media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n      scroll-behavior: auto;\n    }\n\n    *,\n    *:before,\n    *:after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n}\n",
      "hidden": true
    },
    "demo/fonts.css": {
      "contentType": "text/css",
      "content": "@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Regular.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 300;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Medium.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 400;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Bold.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 700;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatText;\n  src: url(\"../assets/fonts/RedHatText/RedHatText-Regular.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 400;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatText;\n  src: url(\"../assets/fonts/RedHatText/RedHatText-Medium.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 700;\n  text-rendering: optimizelegibility;\n}\n",
      "hidden": true
    },
    "demo/typography.css": {
      "contentType": "text/css",
      "content": "body {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  font-size: 1rem;\n  line-height: var(--rh-line-height-body-text, 1.5);\n}\n\n:where(h1, h2, h3, h4, h5, h6) {\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-heading, 1.3);\n}\n\n:where(code) {\n  font-family: var(--rh-font-family-code, RedHatMono, \"Red Hat Mono\", \"Courier New\", Courier, monospace);\n  line-height: var(--rh-line-height-code, 1.5);\n}\n\n:where(kbd) {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  font-size: 1rem;\n  line-height: var(--rh-line-height-body-text, 1.5);\n}\n\n:where(h1) {\n  font-size: var(--rh-font-size-heading-2xl, 3rem);\n}\n\n:where(h2) {\n  font-size: var(--rh-font-size-heading-xl, 2.5rem);\n}\n\n:where(h3) {\n  font-size: var(--rh-font-size-heading-lg, 2.25rem);\n}\n\n:where(h4) {\n  font-size: var(--rh-font-size-heading-md, 1.75rem);\n}\n\n:where(h5) {\n  font-size: var(--rh-font-size-heading-sm, 1.5rem);\n}\n\n:where(h6) {\n  font-size: var(--rh-font-size-heading-xs, 1.25rem);\n}\n\n:where(p) {\n  font-size: var(--rh-font-size-body-text-md, 1rem);\n}\n\n:where(p, h1, h2, h3, h4, h5, h6, li) {\n  max-width: 56rem;\n}\n",
      "hidden": true
    },
    "demo/rh-tooltip-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-tooltip>\n  <rh-button>Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-tooltip-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Tooltip"
    },
    "demo/rh-tooltip-bottom-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/bottom/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-tooltip position=\"bottom\">\n  <rh-button>Bottom Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-bottom-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Bottom"
    },
    "demo/rh-tooltip-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-tooltip>\n    <rh-button>Tooltip</rh-button>\n    <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n  </rh-tooltip>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-tooltip-left-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/left/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<p>\n  In order to demonstrate a left-positioned tooltip, we'll use a right-to-left language\n</p>\n\n<p lang=\"he\" dir=\"rtl\" style=\"text-align: right;\">\n  <rh-tooltip position=\"left\">\n    <rh-button>עם ישראל חי</rh-button>\n    <span slot=\"content\">\n  בְּאֶרֶץ-יִשְׂרָאֵל קָם הָעָם הַיְּהוּדִי, בָּהּ עֻצְּבָה דְּמוּתוֹ הָרוּחָנִית, הַדָּתִית וְהַמְּדִינִית, בָּהּ חַי חַיֵּי קוֹמְמִיּוּת מַמְלַכְתִּית, בָּהּ יָצַר נִכְסֵי תַּרְבּוּת לְאֻמִּיִּים וּכְלַל-אֱנוֹשִׁיִּים וְהוֹרִישׁ לָעוֹלָם כֻּלּוֹ אֶת סֵפֶר הַסְּפָרִים הַנִּצְחִי.\n  לְאַחַר שֶׁהֻגְלָה הָעָם מֵאַרְצוֹ בְּכֹחַ הַזְּרוֹעַ שָׁמַר לָהּ אֱמוּנִים בְּכָל אַרְצוֹת פְּזוּרָיו, וְלֹא חָדַל מִתְּפִלָּה וּמִתִּקְוָה לָשׁוּב לְאַרְצוֹ וּלְחַדֵּשׁ בְּתוֹכָהּ אֶת חֵרוּתוֹ הַמְּדִינִית. </span>\n  </rh-tooltip>\n</p>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-left-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Left"
    },
    "demo/rh-tooltip-right-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/right/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-tooltip position=\"right\">\n  <rh-button>Right Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-right-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Right"
    },
    "demo/rh-tooltip-top-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/top/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-tooltip position=\"top\">\n  <rh-button>Top Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<style>\n  rh-tooltip {\n    margin: 7rem 0;\n    display: inline-block;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-top-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Top"
    }
  }
};
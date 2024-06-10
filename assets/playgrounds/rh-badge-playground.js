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
    "demo/rh-badge-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-badge number=\"7\">7</rh-badge>\n<rh-badge number=\"24\">24</rh-badge>\n<rh-badge number=\"240\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-badge-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Badge"
    },
    "demo/rh-badge-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-badge number=\"1\">1</rh-badge>\n  <rh-badge number=\"1\" state=\"critical\">1</rh-badge>\n  <rh-badge number=\"2\" state=\"important\">2</rh-badge>\n  <rh-badge number=\"3\" state=\"moderate\">3</rh-badge>\n  <rh-badge number=\"5\" state=\"info\">5</rh-badge>\n  <rh-badge number=\"8\" state=\"success\">8</rh-badge>\n  <rh-badge number=\"1000\" threshold=\"999\" state=\"success\">1000</rh-badge>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-badge-critical-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/critical/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"critical\">7</rh-badge>\n<rh-badge number=\"24\" state=\"critical\">24</rh-badge>\n<rh-badge number=\"240\" state=\"critical\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"critical\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-critical-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Critical"
    },
    "demo/rh-badge-important-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/important/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"important\">7</rh-badge>\n<rh-badge number=\"24\" state=\"important\">24</rh-badge>\n<rh-badge number=\"240\" state=\"important\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"important\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-important-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Important"
    },
    "demo/rh-badge-info-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/info/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"info\">7</rh-badge>\n<rh-badge number=\"24\" state=\"info\">24</rh-badge>\n<rh-badge number=\"240\" state=\"info\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"info\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-info-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Info"
    },
    "demo/rh-badge-moderate-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/moderate/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"moderate\">7</rh-badge>\n<rh-badge number=\"24\" state=\"moderate\">24</rh-badge>\n<rh-badge number=\"240\" state=\"moderate\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"moderate\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-moderate-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Moderate"
    },
    "demo/rh-badge-success-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/success/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"success\">7</rh-badge>\n<rh-badge number=\"24\" state=\"success\">24</rh-badge>\n<rh-badge number=\"240\" state=\"success\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"success\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-success-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Success"
    },
    "demo/rh-badge-threshold-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/threshold/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"900\" threshold=\"100\">900</rh-badge> (Threshold = 100)\n<p>Should add '+' sign if the value exceeds the threshold</p>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-threshold-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Threshold"
    }
  }
};
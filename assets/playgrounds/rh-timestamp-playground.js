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
    "demo/rh-timestamp-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\"></rh-timestamp>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-timestamp-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Timestamp"
    },
    "demo/rh-timestamp-custom-format-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n  document.getElementById('timestamp-custom-format').customFormat = {\n    year: '2-digit',\n    month: 'short',\n    weekday: 'short',\n    day: 'numeric',\n    hour: 'numeric'\n  };\n",
      "hidden": true
    },
    "demo/custom-format/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-timestamp id=\"timestamp-custom-format\" date=\"Sat Jan 01 2022 00:00:00 GMT-0500\"></rh-timestamp>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n  document.getElementById('timestamp-custom-format').customFormat = {\n    year: '2-digit',\n    month: 'short',\n    weekday: 'short',\n    day: 'numeric',\n    hour: 'numeric'\n  };\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-timestamp-custom-format-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Custom Format"
    },
    "demo/rh-timestamp-fallback-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n",
      "hidden": true
    },
    "demo/fallback/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\">Tue Aug 09 2006 14:57:00 GMT-0400</rh-timestamp>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-timestamp-fallback-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Fallback"
    },
    "demo/rh-timestamp-formats-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n",
      "hidden": true
    },
    "demo/formats/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-timestamp date-format=\"full\" time-format=\"full\"></rh-timestamp>\n\n<rh-timestamp date-format=\"full\"></rh-timestamp>\n\n\n<rh-timestamp time-format=\"full\"></rh-timestamp>\n\n\n<rh-timestamp date-format=\"medium\" time-format=\"short\" display-suffix=\"US Eastern\"></rh-timestamp>\n\n<rh-timestamp date-format=\"full\" locale=\"es\"></rh-timestamp>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script>\n\n<style>\n  rh-timestamp {\n    display: block;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-timestamp-formats-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Formats"
    },
    "demo/rh-timestamp-relative-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n",
      "hidden": true
    },
    "demo/relative/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n<rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400 (Eastern Daylight Time)\" locale=\"es\" relative=\"\"></rh-timestamp>\n<rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n<rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" locale=\"es\" relative=\"\"></rh-timestamp>\n<rh-timestamp date=\"Tue Aug 09 2099 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n<rh-timestamp date=\"Tue Aug 09 2099 14:57:00 GMT-0400 (Eastern Daylight Time)\" locale=\"es\" relative=\"\"></rh-timestamp>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script>\n\n<style>\n  rh-timestamp {\n    display: block;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-timestamp-relative-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Relative"
    },
    "demo/rh-timestamp-tooltip-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n",
      "hidden": true
    },
    "demo/tooltip/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<section>\n  <h2>Default tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp></rh-timestamp>\n      <rh-timestamp slot=\"content\" utc=\"\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp></rh-timestamp>\n      <rh-timestamp slot=\"content\" utc=\"\" display-suffix=\"Coordinated Universal Time\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<section>\n  <h2>Custom tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\"></rh-timestamp>\n      <span slot=\"content\">Last updated on <rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" date-format=\"long\" time-format=\"short\" utc=\"\"></rh-timestamp></span>\n    </rh-tooltip>\n  </p>\n  <p>\n    <rh-tooltip>\n      Halloween\n      <rh-timestamp slot=\"content\" date=\"Mon Oct 31 2022 00:00:00 GMT-0400 (Eastern Daylight Time)\" date-format=\"medium\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<section>\n  <h2>Relative with tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n      <rh-timestamp slot=\"content\" date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n      <rh-timestamp slot=\"content\" date=\"Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-timestamp-tooltip-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Tooltip"
    }
  }
};
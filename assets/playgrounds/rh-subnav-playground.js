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
    "rh-subnav-lightdom.css": {
      "content": "rh-subnav:not(:defined) {\n  display: flex;\n  background-color: var(--_context-background-color, var(--rh-color-surface-lighter, #f2f2f2));\n}\n\nrh-subnav:not(:defined) a {\n  display: block !important;\n  white-space: nowrap !important;\n  padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px) !important;\n  text-decoration: none !important;\n  color: var(--rh-color-text-secondary-on-light, #4d4d4d) !important;\n  position: relative !important;\n}\n\nrh-subnav:not(:defined) a:after {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  border-block-end: var(--rh-border-width-lg, 3px) solid transparent !important;\n}\n\nrh-subnav:not(:defined) a[active]:after {\n  border-block-end-color: var(--rh-color-accent-brand-on-light, #ee0000) !important;\n}\n",
      "hidden": true
    },
    "demo/rh-subnav-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-subnav>\n  <a href=\"#\">Users</a>\n  <a href=\"#\">Containers</a>\n  <a href=\"#\">Databases</a>\n  <a href=\"#\" active=\"\">Servers</a>\n  <a href=\"#\">System</a>\n  <a href=\"#\">Network</a>\n  <a href=\"#\">Cloud</a>\n</rh-subnav>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-subnav-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Subnavigation"
    },
    "demo/rh-subnav-lightdom.css": {
      "content": "rh-subnav:not(:defined) {\n  display: flex;\n  background-color: var(--_context-background-color, var(--rh-color-surface-lighter, #f2f2f2));\n}\n\nrh-subnav:not(:defined) a {\n  display: block !important;\n  white-space: nowrap !important;\n  padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px) !important;\n  text-decoration: none !important;\n  color: var(--rh-color-text-secondary-on-light, #4d4d4d) !important;\n  position: relative !important;\n}\n\nrh-subnav:not(:defined) a:after {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  border-block-end: var(--rh-border-width-lg, 3px) solid transparent !important;\n}\n\nrh-subnav:not(:defined) a[active]:after {\n  border-block-end-color: var(--rh-color-accent-brand-on-light, #ee0000) !important;\n}\n",
      "hidden": true
    },
    "demo/rh-subnav-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</rh-context-demo>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-subnav-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-subnav-dynamic-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n\n  const demo = document.getElementById('demo');\n  demo.addEventListener('click', e => {\n    for (const link of demo.querySelectorAll('a')) {\n      if (e.target === link) { e.preventDefault(); }\n      link.toggleAttribute('active', (e.target === link));\n    }\n  });\n",
      "hidden": true
    },
    "demo/dynamic/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-subnav id=\"demo\">\n  <a href=\"#\">Users</a>\n  <a href=\"#\">Containers</a>\n  <a href=\"#\">Databases</a>\n  <a href=\"#\" active=\"\">Servers</a>\n  <a href=\"#\">System</a>\n  <a href=\"#\">Network</a>\n  <a href=\"#\">Cloud</a>\n</rh-subnav>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n\n  const demo = document.getElementById('demo');\n  demo.addEventListener('click', e => {\n    for (const link of demo.querySelectorAll('a')) {\n      if (e.target === link) { e.preventDefault(); }\n      link.toggleAttribute('active', (e.target === link));\n    }\n  });\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-subnav-dynamic-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Dynamic"
    },
    "demo/rh-subnav-padded-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/padded/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<h2>In a container with padding</h2>\n<div class=\"padded\">\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</div>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  .padded {\n    padding-inline: var(--rh-space-2xl, 32px);\n  }\n\n  @media screen and (min-width: 576px) {\n    .padded {\n      padding: var(--rh-space-3xl, 48px) var(--rh-space-3xl, 48px) 0;\n    }\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-subnav-padded-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Padded"
    }
  }
};
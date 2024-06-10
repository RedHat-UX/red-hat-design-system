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
    "demo/rh-site-status-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-site-status-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Site Status"
    },
    "demo/rh-site-status-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-site-status></rh-site-status>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-site-status-domains-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@patternfly/elements/pf-select/pf-select.js';\n  document.getElementById('domain').addEventListener('change', function(event) {\n    document.getElementById('status').__TESTING_ONLY_DONT_USE_OR_WELL_TELL_YOUR_BOSS__domain__ = event.target.value;\n  })\n",
      "hidden": true
    },
    "demo/domains/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<form id=\"demo-form\">\n  <rh-site-status id=\"status\"></rh-site-status>\n  <label for=\"domain\"></label>\n  <pf-select id=\"domain\">\n    <pf-option>redhat.com</pf-option>\n    <pf-option>access.redhat.com</pf-option>\n    <pf-option>bugzilla.redhat.com</pf-option>\n    <pf-option>cloud.redhat.com</pf-option>\n    <pf-option>connect.redhat.com</pf-option>\n    <pf-option>console.redhat.com</pf-option>\n    <pf-option>developers.redhat.com</pf-option>\n    <pf-option>docs.redhat.com</pf-option>\n    <pf-option>intelligence.redhat.com</pf-option>\n  </pf-select>\n</form>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@patternfly/elements/pf-select/pf-select.js';\n  document.getElementById('domain').addEventListener('change', function(event) {\n    document.getElementById('status').__TESTING_ONLY_DONT_USE_OR_WELL_TELL_YOUR_BOSS__domain__ = event.target.value;\n  })\n</script>\n\n<style>\n#demo-form {\n  display: flex;\n  gap: var(--rh-space-md, 8px);\n  & #domain {\n    flex: 1;\n  }\n}\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-domains-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Domains"
    },
    "demo/rh-site-status-loading-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'OK',\n    () => new Promise(resolve => {\n      setTimeout(() => resolve(\n        {\n          page: 'fake data',\n          components: ['fake data'],\n          incidents: 'fake data',\n          status: { indicator: 'none', description: 'All Systems Operational' }\n        }\n      ), 100000);\n    })\n  );\n",
      "hidden": true
    },
    "demo/rh-site-status-loading-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/loading/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'OK',\n    () => new Promise(resolve => {\n      setTimeout(() => resolve(\n        {\n          page: 'fake data',\n          components: ['fake data'],\n          incidents: 'fake data',\n          status: { indicator: 'none', description: 'All Systems Operational' }\n        }\n      ), 100000);\n    })\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<p>Example of translated loading text</p>\n<rh-context-demo lang=\"fr\">\n  <rh-site-status>\n    <span slot=\"loading-text\">Chargement</span>\n  </rh-site-status>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<style>\n  rh-context-demo {\n    height: unset;\n    margin: unset;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-loading-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-loading-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Loading"
    },
    "demo/rh-site-status-status-404-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(false, 404, 'Error: 404 Not Found');\n",
      "hidden": true
    },
    "demo/rh-site-status-status-404-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n",
      "hidden": true
    },
    "demo/status-404/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "\n<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(false, 404, 'Error: 404 Not Found');\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-404-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-404-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Status 404"
    },
    "demo/rh-site-status-status-critical-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Critical Outage',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'critical', description: 'Critical Outage' }\n      }\n    )\n  );\n",
      "hidden": true
    },
    "demo/rh-site-status-status-critical-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n",
      "hidden": true
    },
    "demo/status-critical/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Critical Outage',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'critical', description: 'Critical Outage' }\n      }\n    )\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-critical-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-critical-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Status Critical"
    },
    "demo/rh-site-status-status-major-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Major Outage',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'major', description: 'Major Outage' }\n      }\n    )\n  );\n",
      "hidden": true
    },
    "demo/rh-site-status-status-major-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n",
      "hidden": true
    },
    "demo/status-major/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Major Outage',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'major', description: 'Major Outage' }\n      }\n    )\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-major-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-major-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Status Major"
    },
    "demo/rh-site-status-status-minor-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Partially Degraded Service',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'minor', description: 'Partially Degraded Service' }\n      }\n    )\n  );\n",
      "hidden": true
    },
    "demo/rh-site-status-status-minor-inline-script-1.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n",
      "hidden": true
    },
    "demo/status-minor/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Partially Degraded Service',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'minor', description: 'Partially Degraded Service' }\n      }\n    )\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-minor-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-minor-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Status Minor"
    }
  }
};
export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
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
      "content": "<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-site-status-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-context-demo>\n  <rh-site-status></rh-site-status>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<form id=\"demo-form\">\n  <rh-site-status id=\"status\"></rh-site-status>\n  <label for=\"domain\"></label>\n  <pf-select id=\"domain\">\n    <pf-option>redhat.com</pf-option>\n    <pf-option>access.redhat.com</pf-option>\n    <pf-option>bugzilla.redhat.com</pf-option>\n    <pf-option>cloud.redhat.com</pf-option>\n    <pf-option>connect.redhat.com</pf-option>\n    <pf-option>console.redhat.com</pf-option>\n    <pf-option>developers.redhat.com</pf-option>\n    <pf-option>docs.redhat.com</pf-option>\n    <pf-option>intelligence.redhat.com</pf-option>\n  </pf-select>\n</form>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@patternfly/elements/pf-select/pf-select.js';\n  document.getElementById('domain').addEventListener('change', function(event) {\n    document.getElementById('status').__TESTING_ONLY_DONT_USE_OR_WELL_TELL_YOUR_BOSS__domain__ = event.target.value;\n  })\n</script>\n\n<style>\n#demo-form {\n  display: flex;\n  gap: var(--rh-space-md, 8px);\n  & #domain {\n    flex: 1;\n  }\n}\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-domains-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'OK',\n    () => new Promise(resolve => {\n      setTimeout(() => resolve(\n        {\n          page: 'fake data',\n          components: ['fake data'],\n          incidents: 'fake data',\n          status: { indicator: 'none', description: 'All Systems Operational' }\n        }\n      ), 100000);\n    })\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<p>Example of translated loading text</p>\n<rh-context-demo lang=\"fr\">\n  <rh-site-status>\n    <span slot=\"loading-text\">Chargement</span>\n  </rh-site-status>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<style>\n  rh-context-demo {\n    height: unset;\n    margin: unset;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-loading-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-loading-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "\n<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(false, 404, 'Error: 404 Not Found');\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-404-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-404-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Critical Outage',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'critical', description: 'Critical Outage' }\n      }\n    )\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-critical-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-critical-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Major Outage',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'major', description: 'Major Outage' }\n      }\n    )\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-major-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-major-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<script type=\"module\">\n  function overrideFetch(ok, status, statusText, json) {\n    window.fetch = new Proxy(window.fetch, {\n      apply: (target, thisArg, args) => {\n        if (args[0] === 'https://status.redhat.com/index.json') {\n          return Promise.resolve({\n            ok,\n            status,\n            statusText,\n            json,\n          });\n        }\n        return target.apply(thisArg, args);\n      },\n    });\n  }\n\n  overrideFetch(\n    true,\n    200,\n    'Partially Degraded Service',\n    () => Promise.resolve(\n      {\n        page: 'fake data',\n        components: ['fake data'],\n        incidents: 'fake data',\n        status: { indicator: 'minor', description: 'Partially Degraded Service' }\n      }\n    )\n  );\n</script>\n\n<rh-site-status></rh-site-status>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-site-status/rh-site-status.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-minor-inline-script-0.js\"></script>\n\n<!--playground-hide-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-site-status-status-minor-inline-script-1.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Status Minor"
    }
  }
};
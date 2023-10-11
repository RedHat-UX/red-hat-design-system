export const configure = project => project.config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<section>\n  <h2>Basic</h2>\n  <rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\"></rh-timestamp>\n</section>\n\n<section>\n  <h2>Basic with fallback</h2>\n  <rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\">Tue Aug 09 2006 14:57:00 GMT-0400</rh-timestamp>\n</section>\n\n<section>\n  <h2>Basic formats</h2>\n  <rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\" date-format=\"medium\" time-format=\"short\" display-suffix=\"US Eastern\"></rh-timestamp></section>\n\n\n<section>\n  <h2>Relative</h2>\n  <rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\" relative=\"\"></rh-timestamp></section>\n\n\n<section>\n  <h2>Tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400\"></rh-timestamp>\n      <rh-timestamp slot=\"content\" date=\"Tue Aug 09 2006 14:57:00 GMT-0400\" relative=\"\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\">\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script><!--playground-fold--><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end-->",
      "label": "Timestamp"
    },
    "demo/demo.css": {
      "content": "section {\n  padding: 0 var(--rh-space-lg, 16px);\n}",
      "hidden": true
    },
    "demo/formats/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<section>\n  <h2>Default</h2>\n  <p><rh-timestamp></rh-timestamp></p>\n</section>\n\n<section>\n  <h2>Basic formats</h2>\n  <p><rh-timestamp date-format=\"full\" time-format=\"full\"></rh-timestamp></p>\n  <p><rh-timestamp date-format=\"full\"></rh-timestamp></p>\n  <p><rh-timestamp time-format=\"full\"></rh-timestamp></p>\n  <p><rh-timestamp date-format=\"medium\" time-format=\"short\" display-suffix=\"US Eastern\"></rh-timestamp></p>\n  <p><rh-timestamp date-format=\"full\" locale=\"es\"></rh-timestamp></p>\n</section>\n\n<section>\n  <h2>Custom format</h2>\n  <p><rh-timestamp id=\"timestamp-custom-format\" date=\"Sat Jan 01 2022 00:00:00 GMT-0500\"></rh-timestamp></p>\n\n  <script>\n  document.getElementById('timestamp-custom-format').customFormat = {\n    year: '2-digit',\n    month: 'short',\n    weekday: 'short',\n    day: 'numeric',\n    hour: 'numeric'\n  };\n  </script>\n</section>\n\n<section>\n  <h2>Relative formats</h2>\n  <p><rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp></p>\n  <p><rh-timestamp date=\"Tue Aug 09 2006 14:57:00 GMT-0400 (Eastern Daylight Time)\" locale=\"es\" relative=\"\"></rh-timestamp></p>\n  <p><rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp></p>\n  <p><rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" locale=\"es\" relative=\"\"></rh-timestamp></p>\n  <p><rh-timestamp date=\"Tue Aug 09 2099 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp></p>\n  <p><rh-timestamp date=\"Tue Aug 09 2099 14:57:00 GMT-0400 (Eastern Daylight Time)\" locale=\"es\" relative=\"\"></rh-timestamp></p>\n</section>\n\n<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\">\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script><!--playground-fold--><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end-->",
      "label": "Formats"
    },
    "demo/formats/demo.css": {
      "content": "section {\n  padding: 0 var(--rh-space-lg, 16px);\n}",
      "hidden": true
    },
    "demo/tooltip/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<section>\n  <h2>Default tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp></rh-timestamp>\n      <rh-timestamp slot=\"content\" utc=\"\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp></rh-timestamp>\n      <rh-timestamp slot=\"content\" utc=\"\" display-suffix=\"Coordinated Universal Time\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<section>\n  <h2>Custom tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\"></rh-timestamp>\n      <span slot=\"content\">Last updated on <rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" date-format=\"long\" time-format=\"short\" utc=\"\"></rh-timestamp></span>\n    </rh-tooltip>\n  </p>\n  <p>\n    <rh-tooltip>\n      Halloween\n      <rh-timestamp slot=\"content\" date=\"Mon Oct 31 2022 00:00:00 GMT-0400 (Eastern Daylight Time)\" date-format=\"medium\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<section>\n  <h2>Relative with tooltip</h2>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n      <rh-timestamp slot=\"content\" date=\"Tue Aug 09 2022 14:57:00 GMT-0400 (Eastern Daylight Time)\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n  <p>\n    <rh-tooltip>\n      <rh-timestamp date=\"Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)\" relative=\"\"></rh-timestamp>\n      <rh-timestamp slot=\"content\" date=\"Aug 09 2024 14:57:00 GMT-0400 (Eastern Daylight Time)\"></rh-timestamp>\n    </rh-tooltip>\n  </p>\n</section>\n\n<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\">\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/rh-timestamp/rh-timestamp.js';\n</script><!--playground-fold--><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end-->",
      "label": "Tooltip"
    },
    "demo/tooltip/demo.css": {
      "content": "section {\n  padding: 0 var(--rh-space-lg, 16px);\n}",
      "hidden": true
    }
  }
};
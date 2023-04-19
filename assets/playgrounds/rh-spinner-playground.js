document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-spinner.js\"></script>\n\n<dl>\n  <div>\n    <dt>Default/Large</dt>\n    <dd>\n      <rh-spinner></rh-spinner>\n    </dd>\n  </div>\n\n  <div>\n    <dt>Medium</dt>\n    <dd>\n      <rh-spinner size=\"md\"></rh-spinner>\n    </dd>\n  </div>\n\n  <div>\n    <dt>Small</dt>\n    <dd>\n      <rh-spinner size=\"sm\"></rh-spinner>\n    </dd>\n  </div>\n\n  <div>\n    <dt>Default/large with text label</dt>\n    <dd>\n      <rh-spinner>\n        <p>Loading...</p>\n      </rh-spinner>\n    </dd>\n  </div>\n\n  <div>\n    <dt>Medium with text label</dt>\n    <dd>\n      <rh-spinner size=\"md\">\n        <p>Loading...</p>\n      </rh-spinner>\n    </dd>\n  </div>\n\n  <div>\n    <dt>Small with text label</dt>\n    <dd>\n      <rh-spinner size=\"sm\">\n        <p>Loading...</p>\n      </rh-spinner>\n    </dd>\n  </div>\n</dl>\n\n<rh-context-provider color-palette=\"darkest\">\n  <dl>\n    <div>\n      <dt>Default/Large</dt>\n      <dd>\n        <rh-spinner></rh-spinner>\n      </dd>\n    </div>\n    \n    <div>\n      <dt>Medium</dt>\n      <dd>\n        <rh-spinner size=\"md\"></rh-spinner>\n      </dd>\n    </div>\n    \n    <div>\n      <dt>Small</dt>\n      <dd>\n        <rh-spinner size=\"sm\"></rh-spinner>\n      </dd>\n    </div> \n\n    <div>\n      <dt>Default/large with text label</dt>\n      <dd>\n        <rh-spinner>\n          <p>Loading...</p>\n        </rh-spinner>\n      </dd>\n    </div>\n\n    <div>\n      <dt>Medium with text label</dt>\n      <dd>\n        <rh-spinner size=\"md\">\n            <p>Loading...</p>\n        </rh-spinner>\n      </dd>\n    </div>\n\n    <div>\n      <dt>Small with text label</dt>\n      <dd>\n        <rh-spinner size=\"sm\">\n            <p>Loading...</p>\n        </rh-spinner>\n      </dd>\n    </div>\n  </dl>\n</rh-context-provider>\n\n\n",
      "label": "Spinner"
    },
    "demo/demo.css": {
      "content": "h2 {\n  padding-inline-start: var(--rh-space-3xl, 48px);\n}\n\ndl {\n  padding-block: var(--rh-space-2xl, 32px);\n  padding-inline-start: var(--rh-space-3xl, 48px);\n  grid-template-columns: auto auto auto;\n}\n\ndl,\ndl div {\n  display: grid;\n  gap: var(--rh-space-3xl, 48px);\n}\n\ndt {\n  font-size: var(--rh-font-size-heading-xs, 1.25rem);\n  font-weight: var(--rh-font-weight-heading-bold, 700);\n}\n\ndd {\n  margin: 0;\n}\n",
      "hidden": true
    },
    "demo/rh-spinner.js": {
      "content": "import '@rhds/elements/rh-spinner/rh-spinner.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n",
      "hidden": true
    }
  }
};
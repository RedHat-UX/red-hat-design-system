document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"./demo.css\">\n<script type=\"module\" src=\"./rh-spinner.js\"></script>\n\n<h1>Spinner</h1>\n\n<section>\n    <div>\n        <h3>Default/Large</h3>\n        <rh-spinner></rh-spinner>\n    </div>\n    \n    <div>\n        <h3>Medium</h3>\n        <rh-spinner size=\"md\"></rh-spinner>\n    </div>\n    \n    <div>\n        <h3>Small</h3>\n        <rh-spinner size=\"sm\"></rh-spinner>\n    </div>\n\n    <div>\n        <h3>Default/large with text label</h3>\n        <rh-spinner>\n            <p>Loading...</p>\n        </rh-spinner>\n    </div>\n\n    <div>\n        <h3>Medium with text label</h3>\n        <rh-spinner size=\"md\">\n            <p>Loading...</p>\n        </rh-spinner>\n    </div>\n\n    <div>\n        <h3>Small with text label</h3>\n        <rh-spinner size=\"sm\">\n            <p>Loading...</p>\n        </rh-spinner>\n    </div>\n</section>\n\n<rh-context-provider color-palette=\"darkest\">\n    <section class=\"darkest\">\n        <div>\n            <h3>Default/Large</h3>\n            <rh-spinner></rh-spinner>\n        </div>\n        \n        <div>\n            <h3>Medium</h3>\n            <rh-spinner size=\"md\"></rh-spinner>\n        </div>\n        \n        <div>\n            <h3>Small</h3>\n            <rh-spinner size=\"sm\"></rh-spinner>\n        </div> \n    \n        <div>\n            <h3>Default/large with text label</h3>\n            <rh-spinner>\n                <p>Loading...</p>\n            </rh-spinner>\n        </div>\n    \n        <div>\n            <h3>Medium with text label</h3>\n            <rh-spinner size=\"md\">\n                <p>Loading...</p>\n            </rh-spinner>\n        </div>\n    \n        <div>\n            <h3>Small with text label</h3>\n            <rh-spinner size=\"sm\">\n                <p>Loading...</p>\n            </rh-spinner>\n        </div>\n    </section>\n</rh-context-provider>\n\n\n",
      "label": "Spinner"
    },
    "demo/rh-spinner.js": {
      "content": "import '@rhds/elements/rh-spinner/rh-spinner.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n",
      "hidden": true
    },
    "demo/demo.css": {
      "content": "h1,\nh2 {\n  padding-left: var(--rh-space-3xl, 48px);\n}\n\nsection {\n  padding-top: var(--rh-space-2xl, 32px);\n  padding-bottom: var(--rh-space-2xl, 32px);\n  padding-left: var(--rh-space-3xl, 48px);\n  display: grid;\n  gap: var(--rh-space-3xl, 48px);\n  grid-template-columns: auto auto auto;\n}\n\n.darkest {\n  background-color: var(--rh-color-surface-darkest, #151515);\n}\n",
      "hidden": true
    }
  }
};
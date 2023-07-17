/** @typedef {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage} DocsPage */

/**
 * @param {string} content
 */
function renderInstallation(content, { lightdomcss = false } = {}) {
  /**
   * NB: since the data for this shortcode is no a POJO,
   * but a DocsPage instance, 11ty assigns it to this.ctx._
   * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
   * @type {DocsPage}
   */
  const docsPage = this.ctx._;

  const lightDomCSSBlock = `

### Lightdom CSS

Lightdom CSS is required for this element to ensure a reduced [Cumulative Layout Shift (CLS)](https://web.dev/cls/) experience before the element has fully initialized.

~~~html
<link rel="stylesheet" href="/path/to/${docsPage.tagName}/${docsPage.tagName}-lightdom.css">
~~~

Replace \`/path/to\` in the \`href\` attribute with the installation path to the \`${docsPage.tagName}\` directory in your project.

`;

  return /* html */`

<section class="band">

  ## Installation ${!docsPage.manifest?.packageJson ? '' : `

  We are currently working on our CDN which will be soon moving into beta.  This will be the preferred method of installation in the near future.  If you are a Red Hat employee and have questions or comments about the CDN or installation process please join us in our [Red Hat Design System Google chat](https://red.ht/43bBaB0).
  
  In the meantime, install this component using npm:

npm
~~~shell
npm install ${docsPage.manifest.packageJson.name}
~~~

Red Hat CDN (recommend)
~~~html
<head>
  <script type="importmap">
    {
      "imports": {
        "@rhds/elements/": "https://www.redhatstatic.com/dx/v1-alpha/@rhds/elements@1.1.0/elements/",
        "@patternfly/elements/": "https://www.redhatstatic.com/dx/v1-alpha/@patternfly/elements@2.2.2/"
      }
    }
  </script>
  <script type="module">
    import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
  </script>
</head>
~~~

jspm.dev (for development purposes only)
~~~html
<script type="importmap"> 
  { 
    "imports": { 
      "@rhds/elements/": "https://jspm.dev/@rhds/elements/", 
      "@patternfly/elements/": "https://jspm.dev/@patternfly/elements/" 
    } 
  } 
</script>
<script type="module">
  import '@rhds/elements/rh-cta/rh-cta.js';
</script>
~~~
`}

  We recommend using an import map to manage your dependencies. For more information on import maps and how to use them, see the [import map reference on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap/).

  Then import this component into your project by using a [bare module specifier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):

~~~js
import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
~~~

${lightdomcss ? lightDomCSSBlock : ''}

${content ?? ''}

</section>

      `;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderInstallation', renderInstallation);
};

/** @typedef {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage} DocsPage */

/**
 * @param {string} content
 */
function renderInstall(content, {
  lightdomcss = false,
  cdnVersion = 'v1-alpha',
} = {}) {
  /**
   * NB: since the data for this shortcode is no a POJO,
   * but a DocsPage instance, 11ty assigns it to this.ctx._
   * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
   * @type {DocsPage}
   */
  const docsPage = this.ctx._;

  const lightdomcssblock = /* md */`
### Lightdom CSS

Lightdom CSS is required for this element to ensure a reduced
[Cumulative Layout Shift (CLS)][cls] experience before the element has
fully initialized.
  `;

  return /* md */`
<script type="module" src="/assets/javascript/elements/uxdot-installation-tabs.js"></script>

<style>
  /* progressively enhanced rh-tab-panel width */
  rh-tab-panel {
    container-type: inline-size;
  }

  rh-tab-panel > pre {
    max-width: 800px;
    max-width: 100cqw;
  }
</style>

<section class="band">

  ## Installation ${!docsPage.manifest?.packageJson ? '' : /* md */`

<uxdot-installation-tabs>
<rh-tab slot="tab">Red Hat CDN</rh-tab>
<rh-tab-panel>
  <rh-alert state="warning">
    <h3 slot="header">CDN Prerelease</h3>
    <p>We are currently working on our CDN, which will be soon moving
       into beta. This will be the preferred method of installation in
       the near future. If you are a Red Hat associate and have questions
       or comments about the CDN or installation process please join us
       in our <a href="https://red.ht/43bBaB0">Red Hat Design System Google chat</a>.</p>
    <p>In the meantime, install this component using npm</p>
  </rh-alert>

The recommended way to load RHDS is via the Red Hat Digital Experience CDN,
and using an [import map][import-maps].

If you have full control over the page you are using, add an import map
to the \`<head>\`, pointing to the CDN, or update any existing import map.
If you are not responsible for the page's \`<head>\`, request that the
page owner makes the change on your behalf.

~~~html
<script type="importmap">
  {
    "imports": {
      "@rhds/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@rhds/elements@1.1.0/elements/",
      "@patternfly/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@patternfly/elements@2.2.2/"
    }
  }
</script>
~~~

Once the import map is established, you can load the element with the following
module, containing a [bare module specifier][bare-specifier]:

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

Note that Modules may be placed in the \`<head>\`: since they are deferred by default,
they will not block rendering.

${!lightdomcss ? '' : /* md */`${lightdomcssblock}

~~~html
<link rel="stylesheet" href="https://www.redhatstatic.com/dx/${cdnVersion}/@rhds/elements@1.1.0/${docsPage.tagName}/${docsPage.tagName}-lightdom.css">
~~~

`}
</rh-tab-panel>
<rh-tab slot="tab">NPM</rh-tab>
<rh-tab-panel>

Install RHDS using your team's preferred NPM package manager, e.g.

~~~shell
npm install ${docsPage.manifest.packageJson.name}
~~~

Once that's been accomplished, you will need to use a bundler to resolve
the bare module specifiers and optionally optimize the package for your
site's particular use case and needs. Comprehensive guides to bundling are
beyond the scope of this page; read more about bundlers on their websites:

- [Rollup][rollup]
- [esbuild][esbuild]
- [Parcel][parcel]
- [Webpack][webpack]

${!lightdomcss ? '' : /* md */`${lightdomcssblock}

~~~html
<link rel="stylesheet" href="/path/to/@rhds/elements/elements/${docsPage.tagName}/${docsPage.tagName}-lightdom.css">
~~~

Replace \`/path/to\` in the \`href\` attribute with the installation path
to the \`${docsPage.tagName}\` directory in your project.

  `}
</rh-tab-panel>
<rh-tab slot="tab">JSPM</rh-tab>
<rh-tab-panel>
  <rh-alert state="warning">
    <h3 slot="header">Public CDNs</h3>
    <p>JSPM and other public CDNs should not be used on corporate domains.
       Use them for <strong>development purposes only</strong>!</p>
  </rh-alert>

Add an [import map][import-maps] to the \`<head>\`, pointing to the CDN,
or update any existing import map.

~~~html
<script type="importmap">
  {
    "imports": {
      "@rhds/elements/": "https://jspm.dev/@rhds/elements/",
      "@patternfly/elements/": "https://jspm.dev/@patternfly/elements/"
    }
  }
</script>
~~~

Once the import map is established, you can load the element with the following
module, containing a [bare module specifier][bare-specifier]:

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

Note that Modules may be placed in the \`<head>\`: since they are deferred by default,
they will not block rendering.

${!lightdomcss ? '' : /* md */ `${lightdomcssblock}

~~~html
<link rel="stylesheet" href="https://jspm.dev/@rhds/elements@1.1.0/elements/${docsPage.tagName}/${docsPage.tagName}-lightdom.css">
~~~

`}
  </rh-tab-panel>
</uxdot-installation-tabs>

${content ?? ''}`}

</section>

[import-maps]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap
[bare-specifier]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[rollup]: https://rollupjs.org/
[esbuild]: https://esbuild.github.io/
[parcel]: https://parceljs.org/
[webpack]: https://webpack.js.org/
[cls]: https://web.dev/cls/

      `;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderInstall', renderInstall);
};

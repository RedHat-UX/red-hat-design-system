import('@patternfly/pfe-tools/11ty/DocsPage.js');

/** @typedef {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage} DocsPage */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderCodeDocs',
    function renderCodeDocs(content, kwargs = {}) {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     * @type {DocsPage}
     */
      const docsPage = this.ctx._;

      const slugify = eleventyConfig.getFilter('slugify');

      const level = kwargs.level ?? 2;
      const subHeadings = level + 1;
      const component = kwargs.for ?? docsPage.tagName;
      const hideDescription = kwargs.hideDescription ?? false;
      const headerTag = `h${level}`;

      return /* html */`

        ${Array.from({ length: level }, () => '#').join('')} ${component}

        ${hideDescription ? `` : `<p>${docsPage.manifest.getDescription(component)}</p>`}
        ${docsPage.renderSlots('', { 'level': subHeadings, 'for': component })}
        ${docsPage.renderAttributes('', { 'level': subHeadings, 'for': component })}
        ${docsPage.renderMethods('', { 'level': subHeadings, 'for': component })}
        ${docsPage.renderEvents('', { 'level': subHeadings, 'for': component })}
        ${docsPage.renderCssParts('', { 'level': subHeadings, 'for': component })}
        ${docsPage.renderCssCustomProperties('', { 'level': subHeadings, 'for': component })}
        ${content}
      `.trim();
    }
  );
};


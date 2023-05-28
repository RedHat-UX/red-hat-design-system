// @ts-check
const { promisify } = require('node:util');
const { readFile } = require('node:fs/promises');
const Image = require('@11ty/eleventy-img');
const sizeOf = promisify(/** @type{import('image-size').default}*/(/** @type{unknown}*/(require('image-size') )));
const path = require('path');

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  /** Render a Call to Action */
  eleventyConfig.addPairedShortcode('cta', /** @param {string} content */async function(content, {
    href = '#',
    target = null,
  } = {}) {
    const innerHTML = await eleventyConfig.javascriptFunctions?.renderTemplate(content, 'md');
    return /* html */`<rh-cta><a href="${href}"${!target ? ''
                             : ` target="${target}"`}>${innerHTML.replace(/^<p>(.*)<\/p>$/m, '$1')}</a></rh-cta>`;
  });

  /** Render a Red Hat Alert */
  eleventyConfig.addPairedShortcode('alert', /** @param {string} content */function(content, {
    state = 'info',
    title = 'Note:',
    style = '',
    level = 3,
  } = {}) {
    return /* html */`

<rh-alert state="${state}"${!style ? ''
      : ` style="${style}"`}>
  <h${level} slot="header">${title}</h${level}>

  ${content}

</rh-alert>

`;
  });

  /**
   * Section macro
   * Creates a section of the page with a heading
   *
   * @param {object} options
   * @param options.headline       Text to go in the heading
   * @param options.palette        Palette to apply, e.g. lightest, light see components/_section.scss
   * @param options.headingLevel   The heading level, defaults to 2
   */
  eleventyConfig.addPairedShortcode('section', /** @param {string} content */function(content, {
    headline = '',
    palette = 'default',
    headingLevel = '2',
    style = '',
    class: className = '',
  } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    return /* html*/`
<section class="section section--palette-${palette} ${className ?? ''} container"${!style ? '' : `
         style="${style.replace('"', '\\"')}"`}>${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="section-title pfe-jump-links-panel__section">${headline}</h${headingLevel}>`}

${content}

</section>

`;
  });

  /* generate images and return metadata */
  async function getImg(url, width1x, width2x, outputDir, urlPath) {
    try {
      return await Image(url, {
        widths: [width1x, width2x],
        formats: ['auto'],
        filenameFormat(id, src, width, format) {
          const extension = path.extname(src);
          const name = path.basename(src, extension);
          // rewrite the default 2X image since we don't need two copies
          return width === width2x ? `${name}.${format}` : `${name}-${width}w.${format}`;
        },
        urlPath,
        outputDir,
      });
    } catch (error) {
      return false;
    }
  }

  /* get default 2x width */
  async function getImgSize(url) {
    try {
      const size = await sizeOf(url);
      return size;
    } catch (error) {
      return null;
    }
  }

  /**
   * Example
   * An example image or component
   *
   * @param {object}    options
   * @param {string}    options.alt               Image alt text
   * @param {string}    options.src               Image url
   * @param {number}    [options.width]           width of the img
   * @param {string}    [options.style]           styles for the wrapper
   * @param {string}    [options.wrapperClass]    class names for container element
   * @param {string}    [options.headline]        Text to go in the heading
   * @param {string}    [options.palette='light'] Palette to apply, e.g. lightest, light see components/_section.scss
   * @param {2|3|4|5|6} [headingLevel=3]          The heading level
   */
  eleventyConfig.addShortcode('example', /** @this{EleventyContext}*/ async function({
    alt = '',
    src = '',
    style = '',
    width = '',
    headline = '',
    wrapperClass = '',
    palette = 'light',
    headingLevel = '3'
  } = {}) {
    const { page } = this.ctx || {};
    const srcHref = path.join('_site', page?.url, src);
    const slugify = eleventyConfig.getFilter('slugify');
    const imgStyle = width && `--example-img-max-width:${width}px;`;
    const imgDir = srcHref.replace(/\/[^/]+$/, '/');
    const urlPath = imgDir.replace(/^_site/, '');
    const outputDir = `./${imgDir}`;
    const width2x = (await getImgSize(srcHref))?.width;
    const width1x = width2x ? width2x / 2 : false;
    /* determine filenames of generated images */
    const img = await getImg(srcHref, width1x, width2x, outputDir, urlPath);
    const sizes = `(max-width: ${width1x}px) ${width1x}px, ${width2x}px`;

    const imgAttributes = {
      alt,
      sizes,
      style: [`width:${width1x}px;height:auto`, imgStyle].join(';'),
      loading: 'lazy',
      decoding: 'async',
    };
    /**
  */
    return /* html */`
<div class="example example--palette-${palette} ${wrapperClass ?? ''}" ${!style ? ''
  : `style="${style}"}`}>${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="example-title">${headline}</h${headingLevel}>`}
  ${!img ? '' : Image.generateHTML(img, imgAttributes)}
</div>`;
  });

  /**
   * Demo
   * A live component demo
   *
   * @param headline       (Optional) Text to go in the heading
   * @param palette        Palette to apply, e.g. lightest, light see components/_section.scss
   * @param headingLevel   The heading level, defaults to 3
   */
  eleventyConfig.addPairedShortcode('demo', /** @param {string} content */function demoShortcode(content, { headline, palette = 'light', headingLevel = '3' } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    return /* html*/`

<div class="demo demo--palette-${palette}">${!headline ? '' : `
  <h${headingLevel} id="${slugify(headline)}" class="demo-title">${headline}</h${headingLevel}>`}

${content}

  <details>
    <summary>View Code</summary>

~~~html
${content.trim()}
~~~

  </details>
</div>

`;
  });

  /**
   * Reads component status data from global data (see above) and outputs a table for each component
   */
  eleventyConfig.addPairedShortcode('componentStatus', /** @this {EleventyContext} */ function componentStatus(_content, { heading = 'Component status' } = {}) {
    /** @type {string[][]} */
    const allStatuses = this.ctx.componentStatus ?? this.ctx._?.componentStatus ?? [];
    const title = this.ctx.title ?? this.ctx._?.title;
    const [header, ...componentStatus] = allStatuses;
    const bodyRows = componentStatus.filter(([rowHeader]) =>
      rowHeader.replace(/^([\w\s]+) - (.*)$/, '$1') === title);
    if (!Array.isArray(bodyRows) || !bodyRows.length) {
      return '';
    } else {
      const [[,,,,,,,, lastUpdatedStr]] = bodyRows;
      return /* html*/`


<section class="section section--palette-default container">
  <a id="Component status"></a>
  <h2 id="component-status" class="section-title pfe-jump-links-panel__section">${heading}</h2>
  <div class="component-status-table-container">
    <table class="component-status-table">
      <thead>
        <tr>${header.map(x => `
          <th>${x}</th>`.trim()).join('\n').trim()}
        </tr>
      </thead>
      <tbody>${bodyRows.map(([title, ...columns]) => `
        <tr>
          <th>${title}</th>${columns.map(x => `
          <td>${x}</td>`.trim()).join('\n').trim()}
        </tr>`.trim()).join('\n').trim()}
      </tbody>
    </table>${!lastUpdatedStr ? '' : `
    <small>Last updated: ${new Date(lastUpdatedStr).toLocaleDateString()}</small>`}
  </div>
</section>


`;
    }
  });

  eleventyConfig.addPairedNunjucksAsyncShortcode('playground', /** @this{EleventyContext}*/async function playground(_, { tagName } = {}) {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     * @type {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage}
     */
    const docsPage = this.ctx._;
    tagName ??= docsPage?.tagName;
    const { getPfeConfig } = await import('@patternfly/pfe-tools/config.js');
    const options = getPfeConfig();
    const { filePath } =
      docsPage.manifest
        .getDemoMetadata(tagName, options)
        ?.find(x => x.url === `https://ux.redhat.com/elements/${x.slug}/demo/`) ?? {};
    return /* html*/`

<script type="module" src="/assets/playgrounds/rh-playground.js"></script>
<rh-playground tag-name="${tagName}">${!filePath ? '' : `

~~~html
${await readFile(filePath, 'utf8')}
~~~`}

</rh-playground>`;
  });

  eleventyConfig.addPairedShortcode('renderInstallation', function(content) {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     * @type {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage}
     */
    const docsPage = this.ctx._;
    return /* html */`

<section class="band">
  <h2>Installation</h2>${!docsPage.manifest?.packageJson ? '' : `

~~~shell
npm install ${docsPage.manifest.packageJson.name}
~~~`}

~~~js
import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
~~~

${content ?? ''}

</section>

    `;
  });
};

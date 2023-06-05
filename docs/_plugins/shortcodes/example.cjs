// @ts-check

const { attrMap } = require('./helpers.cjs');

/** @typedef {import('../shortcodes.cjs').EleventyContext} EleventyContext */

const { promisify } = require('node:util');
const Image = require('@11ty/eleventy-img');
const sizeOf = promisify(/** @type{import('image-size').default}*/(/** @type{unknown}*/(require('image-size') )));
const path = require('path');

/**
 * generate images and return metadata
 * @param {Image.ImageSource} url
 * @param {'auto' | number | null} width1x
 * @param {'auto' | number | null} width2x
 * @param {string} outputDir
 * @param {string} urlPath
 */
async function getImg(url, width1x, width2x, outputDir, urlPath) {
  try {
    return await Image(url, {
      urlPath,
      outputDir,
      formats: ['auto'],
      widths: [width1x, width2x],
      filenameFormat(id, src, width, format) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        // rewrite the default 2X image since we don't need two copies
        return width === width2x ? `${name}.${format}` : `${name}-${width}w.${format}`;
      },
    });
  } catch (error) {
    return false;
  }
}

/**
 * get default 2x width
 * @param {string} url
 */
async function getImgSize(url) {
  try {
    const size = await sizeOf(url);
    return size;
  } catch (error) {
    return null;
  }
}

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('example',
    /**
     * Example
     * An example image or component
     *
     * @param {object}    options
     * @param {string}    [options.alt]             Image alt text
     * @param {string}    [options.src]             Image url
     * @param {number}    [options.width]           width of the img
     * @param {string}    [options.style]           styles for the wrapper
     * @param {string}    [options.wrapperClass]    class names for container element
     * @param {string}    [options.headline]        Text to go in the heading
     * @param {string}    [options.palette='light'] Palette to apply, or none for an unpadded image without background or border, e.g. lightest, light see components/_section.scss
     * @param {2|3|4|5|6} [options.headingLevel=3]          The heading level
     * @this {EleventyContext}
     */
    async function example({
      alt = '',
      src = '',
      style = '',
      headline = '',
      wrapperClass = '',
      palette = 'light',
      headingLevel = 3,
    } = {}) {
      const { page } = this.ctx || {};
      const srcHref = path.join('_site', page?.url, src);
      const slugify = eleventyConfig.getFilter('slugify');
      const imgDir = srcHref.replace(/\/[^/]+$/, '/');
      const urlPath = imgDir.replace(/^_site/, '');
      const outputDir = `./${imgDir}`;
      const width2x = (await getImgSize(srcHref))?.width ?? null;
      const width1x = width2x && width2x / 2;
      const styles = [`width:${width1x}px`, `height:auto`].join(';');
      const loading = 'lazy';
      const decoding = 'async';
      const img = await getImg(srcHref, width1x, width2x, outputDir, urlPath);
      const sizes = `(max-width: ${width1x}px) ${width1x}px, ${width2x}px`;
      const classes = `example example--palette-${palette} ${wrapperClass ?? ''}`;

      return /* html */`
<div ${attrMap({ style, class: classes })}>${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="example-title">${headline}</h${headingLevel}>`}
  ${!img ? '' : Image.generateHTML(img, { alt, sizes, style: styles, loading, decoding })}
</div>`;
    });
};

const { readFile } = require('node:fs/promises');
const { pathToFileURL } = require('node:url');
const cheerio = require('cheerio');

// for editor highlighting
const html = String.raw;

// because markdown, we have to replace newlines with a cookie crumb
const COMMENT = '<!--CSS_SAMPLE_NEWLINE-->';

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param {string} str
 */
function dedent(str) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

async function getCss(partial, kwargs) {
  const Tools = await import('@parse5/tools');
  let cssContent = kwargs.css ? await readFile(new URL(kwargs.css, kwargs.baseUrl), 'utf-8') : '';
  for (const styleTag of Tools.queryAll(partial, node =>
    Tools.isElementNode(node) && node.tagName === 'style')) {
    cssContent += `\n${dedent(Tools.getTextContent(styleTag))}`;
    Tools.removeNode(styleTag);
  }
  return cssContent.trim();
}

const dash = s => s.replace(/([A-Z])/g, '-$1');

const attrMap = attrs => Object.entries(attrs)
    .map(([name, value]) => `${value ? dash(name) : ''}${value === true || value === false ? '' : `="${value}"`}`)
    .join(' ');

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('uxdotPattern', async function(content, kwargs = {}) {
    const { __keywords, js, fullHeight, ...patternArgs } = kwargs;
    const { parseFragment, serialize } = await import('parse5');
    const partial = parseFragment(content);
    const baseUrl = pathToFileURL(this.page.inputPath);
    const cssContent = await getCss(partial, { ...kwargs, baseUrl });
    const jsContent = js && await readFile(new URL(js, baseUrl), 'utf-8');
    return html`
<uxdot-pattern ${attrMap(patternArgs)}>
  <h4 slot="heading">Example</h4>
  ${content}
  <h4 slot="html-heading">HTML</h4>
  <rh-code-block slot="html" actions="copy" ${attrMap({ fullHeight })}>
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy" hidden="" data-code-block-state="active">Copied!</span>
    <script type="text/html">${serialize(partial).trim().replaceAll(/\n/gm, COMMENT)}</script>
  </rh-code-block>${!cssContent ? '' : html`
  <h4 slot="css-heading">CSS</h4>
  <rh-code-block slot="css" actions="copy">
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy"
          hidden
          data-code-block-state="active">Copied!</span>
    <script type="text/css">${cssContent.replaceAll(/\n/gm, COMMENT)}</script>
  </rh-code-block>`}${!jsContent ? '' : html`
  <h4 slot="css-heading">JavaScript</h4>
  <rh-code-block slot="js" actions="copy">
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy" hidden="" data-code-block-state="active">Copied!</span>
    <script type="sample/javascript">${jsContent.replaceAll(/\n/gm, COMMENT)}</script>`}
  </rh-code-block>
</uxdot-pattern>
`;
  });

  eleventyConfig.addTransform('uxdot-pattern-restore-newlines', function(content) {
    const $ = cheerio.load(content);
    $([
      'uxdot-pattern script[type="text/css"]',
      'uxdot-pattern script[type="text/html"]',
      'uxdot-pattern script[type="sample/javascript"]',
    ].join()).each(function() {
      const el = $(this);
      el.text(el.text().replaceAll(COMMENT, '\n'));
    });
    return $.html();
  });
};

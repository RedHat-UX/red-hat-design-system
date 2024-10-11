import * as Parse5 from 'parse5';
import * as Tools from '@parse5/tools';
import { deslugify } from '@patternfly/pfe-tools/config.js';

// @ts-check
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Rewrite DEMO lightdom css relative URLs
const LIGHTDOM_HREF_RE = /href="\.(?<pathname>.*-lightdom.*\.css)"/g;
const LIGHTDOM_PATH_RE = /href="\.(.*)"/;

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  eleventyConfig.addTransform(
    'demo-subresources',
    /** @param {string} content the HTML content to replace */
    function demoPaths(content) {
      const { outputPath, inputPath } = this;
      if (!outputPath) {
        return '';
      }
      const isNested = outputPath.match(/demo\/.+\/index\.html$/);
      if (inputPath === './docs/elements/demos.html') {
        const document = Parse5.parse(content);
        for (const node of Tools.queryAll(document, node =>
          Tools.isElementNode(node)
          && (Tools.hasAttribute(node, 'href')
           || Tools.hasAttribute(node, 'src')))) {
          if (Tools.isElementNode(node)) {
            const attr = Tools.hasAttribute(node, 'href') ? 'href' : 'src';
            const val = Tools.getAttribute(node, attr);
            if (!val) {
              return;
            } else if (!val.startsWith('http') && !val.startsWith('/') && !val.startsWith('#')) {
              Tools.setAttribute(node, attr, `${isNested ? '../' : ''}${val}`);
            } else if (val.startsWith('/elements/rh-')) {
              Tools.setAttribute(node, attr, val.replace('/elements/rh-', '/'));
            }
          }
        }
        return Parse5.serialize(document);
      }
      return content;
    },
  );

  eleventyConfig.addTransform(
    'demo-lightdom-css',
    /** @param {string} content the HTML content to replace */
    async function(content) {
      const { outputPath, inputPath } = this;

      if (inputPath === './docs/elements/demo.html' ) {
        const tagNameMatch = outputPath.match(/\/elements\/(?<tagName>[-\w]+)\/demo\//);
        if (tagNameMatch) {
          const { tagName } = tagNameMatch.groups;

          // does the tagName exist in the aliases object?
          const prefixedTagName =
          deslugify(tagName, join(__dirname, '../..'));
          const matches = content.match(LIGHTDOM_HREF_RE);
          if (matches) {
            for (const match of matches) {
              const [, path] = match.match(LIGHTDOM_PATH_RE) ?? [];
              const { pathname } = new URL(path, `file:///${outputPath}`);
              const filename = pathname.split('/').pop();
              const replacement = `/assets/packages/@rhds/elements/elements/${prefixedTagName}/${filename}`;
              content = content.replace(`.${path}`, replacement);
            }
          }
        }
      }
      return content;
    });
};

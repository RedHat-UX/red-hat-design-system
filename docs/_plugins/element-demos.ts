import type { UserConfig } from '@11ty/eleventy';
import * as Parse5 from 'parse5';
import * as Tools from '@parse5/tools';

// Rewrite DEMO lightdom css URLs - matches both relative (../rh-foo-lightdom.css) and absolute (/rh-foo/rh-foo-lightdom.css) paths
const LIGHTDOM_HREF_RE = /href="([./].*-lightdom.*\.css)"/g;

/**
 * Eleventy plugin to handle demo page transformations
 * @param eleventyConfig - The Eleventy configuration object
 */
export default function(eleventyConfig: UserConfig) {
  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  eleventyConfig.addTransform('demo-subresources', function demoPaths(this, content) {
    const { outputPath, inputPath } = this.page;
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
            return '';
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
  });

  eleventyConfig.addTransform('demo-lightdom-css', async function(this, content) {
    const { inputPath } = this.page;

    if (inputPath === './docs/elements/demo.html' ) {
      const matches = content.match(LIGHTDOM_HREF_RE);
      if (matches) {
        for (const match of matches) {
          // Extract the path from the match (group 1)
          const [, path] = match.match(/href="([^"]+)"/) ?? [];
          if (!path) {
            continue;
          }

          // Extract the filename and tag name from the path
          // Handles both "../rh-foo-lightdom.css" and "../../rh-foo/rh-foo-lightdom.css"
          const pathParts = path.split('/');
          const filename = pathParts.pop() ?? '';

          // For paths like "/rh-foo/rh-foo-lightdom.css", the tag name is the second-to-last part
          // For paths like "../../rh-foo-lightdom.css", extract tag name from filename
          let elementName = pathParts.pop();
          if (!elementName || elementName === '..' || elementName === '.') {
            // Extract from filename: "rh-foo-lightdom.css" -> "rh-foo"
            elementName = filename.replace(/-lightdom.*\.css$/, '');
          }

          const replacement = `/assets/packages/@rhds/elements/elements/${elementName}/${filename}`;
          content = content.replace(match, `href="${replacement}"`);
        }
      }
    }
    return content;
  });
};

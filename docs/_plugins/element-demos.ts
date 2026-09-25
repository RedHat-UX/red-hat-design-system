import type { UserConfig } from '@11ty/eleventy';
import * as Parse5 from 'parse5';
import * as Tools from '@parse5/tools';
import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { stripFrontmatter } from '#11ty-plugins/frontmatter.js';

// Match relative lightdom CSS paths (../rh-foo-lightdom.css),
// but skip already-transformed asset paths (/assets/packages/...)
const LIGHTDOM_HREF_RE = /href="((?!\/assets)[./].*-lightdom.*\.css)"/g;

/**
 * Light DOM files live in `elements/{tag}/`. A second sheet such as
 * `rh-footer-universal-lightdom.css` still belongs in `elements/rh-footer/`.
 * The filename stem is not always the directory name, so use the directory
 * that actually contains the file.
 * @param filename light DOM stylesheet filename
 * @param guessed directory name taken from the request path, used when no file is found
 */
async function elementDirForLightdom(filename: string, guessed: string): Promise<string> {
  // `rh-footer-universal-lightdom.css` → ['rh', 'footer', 'universal']
  // The last segment is the sheet kind (`lightdom`), so it is not part of the tag.
  const segments = filename.replace(/\.css$/, '').split('-').slice(0, -1);

  while (segments.length >= 2) {
    const dir = segments.join('-');
    try {
      await access(join(process.cwd(), 'elements', dir, filename));
      return dir;
    } catch {
      // Try the next shorter element directory.
      segments.pop();
    }
  }
  return guessed;
}

/**
 * Eleventy plugin to handle demo page transformations
 * @param eleventyConfig - The Eleventy configuration object
 */
export default function(eleventyConfig: UserConfig) {
  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  /** Read a demo file and return its content with YAML frontmatter stripped */
  eleventyConfig.addShortcode('renderDemoFile', async function(filePath: string) {
    const content = await readFile(filePath, 'utf8');
    return stripFrontmatter(content);
  });

  eleventyConfig.addTransform('demo-subresources', function demoPaths(this, content) {
    const { outputPath, inputPath } = this.page;
    if (!outputPath) {
      return '';
    }
    const isNested = outputPath.match(/demo\/.+\/index\.html$/);
    if (inputPath === './docs/elements/demos.html'
      || inputPath === './docs/elements/demo.html') {
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

          // `rh-footer-universal-lightdom.css` is stored beside `rh-footer-lightdom.css`.
          elementName = await elementDirForLightdom(filename, elementName);

          const replacement = `/assets/packages/@rhds/elements/elements/${elementName}/${filename}`;
          content = content.replace(match, `href="${replacement}"`);
        }
      }
    }
    return content;
  });
};

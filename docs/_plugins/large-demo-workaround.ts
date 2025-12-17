import type { UserConfig } from '@11ty/eleventy';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import * as Parse5 from 'parse5';
import * as Tools from '@parse5/tools';

/**
 * Workaround for extremely large demo files that cause Nunjucks {% include %} to fail silently.
 * This plugin intercepts specific demo pages after template rendering and injects the demo
 * content directly using Node.js file I/O instead of Nunjucks includes.
 *
 * Can be safely removed once the underlying issue is resolved or the demo is restructured.
 */
export default function(eleventyConfig: UserConfig) {
  eleventyConfig.addTransform('large-demo-workaround', async function(this, content) {
    const { outputPath, inputPath } = this.page;

    // Define the large demo files that need workarounds
    const largeDemos = [
      {
        output: '/elements/code-block/demo/thousands/index.html',
        source: 'thousands.html',
      },
      {
        output: '/elements/code-block/demo/thousands-line-numbers/index.html',
        source: 'thousands-line-numbers.html',
      },
      {
        output: '/elements/code-block/demo/thousands-line-numbers-full-height/index.html',
        source: 'thousands-line-numbers-full-height.html',
      },
    ];

    // Check if this is one of the problematic demo files
    const demo = largeDemos.find(d =>
      inputPath === './docs/elements/demo.html' && outputPath.includes(d.output)
    );

    if (demo) {
      const document = Parse5.parse(content);
      const body = Tools.query(document, node =>
        Tools.isElementNode(node) && node.tagName === 'body'
      );

      if (body && Tools.isElementNode(body)) {
        // Check if body is empty (Nunjucks include failed)
        const hasContent = body.childNodes.some(node =>
          Tools.isElementNode(node)
          || (Tools.isTextNode(node) && Tools.getTextContent(node).trim())
        );

        if (!hasContent) {
          // Read the demo file directly
          const demoPath = join(process.cwd(), `elements/rh-code-block/demo/${demo.source}`);
          const demoContent = await readFile(demoPath, 'utf8');

          // Parse and inject the demo content
          const demoFragment = Parse5.parseFragment(demoContent);
          body.childNodes = demoFragment.childNodes;

          return Parse5.serialize(document);
        }
      }
    }

    return content;
  });
}

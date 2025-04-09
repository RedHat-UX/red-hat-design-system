import type { UserConfig } from '@11ty/eleventy';
import { parse, serialize } from 'parse5';
import * as Tools from '@parse5/tools';

interface Options {
  slotControllerTagNames: string[];
}

/**
 * automatically add ssr hint attrs to slotcontroller elements, based on their contents
 * @param eleventyConfig
 * @param pluginOpts
 */
export default function(eleventyConfig: UserConfig, pluginOpts: Partial<Options> = {
  slotControllerTagNames: [
    'rh-card',
    'rh-tile',
  ],
}) {
  const tagSet = new Set(pluginOpts.slotControllerTagNames);
  eleventyConfig.addTransform('rhds-ssr-hints', function(content: string) {
    const document = parse(content);

    for (const element of Tools.queryAll<Tools.Element>(document, (node): node is Tools.Element =>
      Tools.isElementNode(node)
       && tagSet.has(node.tagName))) {
      const slots = new Set();
      let foundDefault = false;
      for (const node of Tools.queryAll(element)) {
        if (Tools.isDocument(node)
          || Tools.isDocumentFragment(node)
          || Tools.isCommentNode(node)
          || Tools.isDocumentTypeNode(node)) {
          continue;
        } else if (Tools.isTextNode(node) || !Tools.hasAttribute(node, 'slot')) {
          foundDefault = true;
        } else if (Tools.hasAttribute(node, 'slot')) {
          slots.add(Tools.getAttribute(node, 'slot'));
        }
      }
      if (foundDefault) {
        Tools.setAttribute(element, 'ssr-hint-has-slotted-default', 'true');
      }
      if (slots.size) {
        Tools.setAttribute(element, 'ssr-hint-has-slotted', [...slots].join());
      }
    }

    return serialize(document);
  });
};

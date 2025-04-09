
import type { UserConfig } from '@11ty/eleventy';

import { parse, serialize } from 'parse5';
import {
  type Node,
  type Element,
  isElementNode,
  getAttribute,
  hasAttribute,
  isCommentNode,
  isDocument,
  isDocumentFragment,
  isDocumentTypeNode,
  isTextNode,
  queryAll,
  setAttribute,
} from '@parse5/tools';

interface Options {
  /** Tag names of elements which will require ssr hint attrs because they use slotcontroller in their templates */
  slotControllerElements: string[];
}


export function injectSSRHintAttributes(
  node: Node,
  options: Pick<Options, 'slotControllerElements'>,
): void {
  const tagSet = new Set(options.slotControllerElements);

  const isSlotControllerNode = (node: Node): node is Element =>
    isElementNode(node) && tagSet.has(node.tagName);

  for (const element of queryAll<Element>(node, isSlotControllerNode)) {
    const slots = new Set();
    let foundDefault = false;
    for (const node of queryAll(element)) {
      if (isDocument(node)
          || isDocumentFragment(node)
          || isCommentNode(node)
          || isDocumentTypeNode(node)) {
        continue;
      } else if (isTextNode(node) || !hasAttribute(node, 'slot')) {
        foundDefault = true;
      } else if (hasAttribute(node, 'slot')) {
        slots.add(getAttribute(node, 'slot'));
      }
    }
    if (foundDefault) {
      setAttribute(element, 'ssr-hint-has-slotted-default', 'true');
    }
    if (slots.size) {
      setAttribute(element, 'ssr-hint-has-slotted', [...slots].join());
    }
  }
}

/**
 * automatically add ssr hint attrs to slotcontroller elements, based on their contents
 * @param eleventyConfig
 * @param pluginOpts
 */
export default function(eleventyConfig: UserConfig, pluginOpts: Options) {
  eleventyConfig.addTransform('rhds-ssr-hints', function(content: string) {
    const document = parse(content);

    injectSSRHintAttributes(document, pluginOpts);

    return serialize(document);
  });
};
;

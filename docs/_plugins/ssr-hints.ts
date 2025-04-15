import type { UserConfig } from '@11ty/eleventy';

import { parse, serialize } from 'parse5';
import {
  type Node,
  type Element,
  isElementNode,
  getAttribute,
  getTextContent,
  hasAttribute,
  isCommentNode,
  isDocument,
  isDocumentFragment,
  isDocumentTypeNode,
  isTextNode,
  queryAll,
  setAttribute,
  type TextNode,
} from '@parse5/tools';
import type { Options } from './rhds.js';
import type { TransformContext } from '@11ty/eleventy/src/UserConfig.js';

function isLengthyTextNode(node: Node): node is TextNode {
  return isTextNode(node) && !!getTextContent(node).trim();
}

function isUnslottedElement(node: Node): node is Element {
  return isElementNode(node) && !hasAttribute(node, 'slot');
}

/**
 * inject ssr hints into elements which need them (per config)
 * @param node
 * @param options
 */
export function injectSSRHintAttributes(
  this: TransformContext,
  node: Node,
  options?: Pick<Options, 'slotControllerElements'>,
): void {
  const tagSet = new Set(options?.slotControllerElements ?? []);

  const isSlotControllerNode = (node: Node): node is Element =>
    isElementNode(node) && tagSet.has(node.tagName);

  for (const element of queryAll<Element>(node, isSlotControllerNode)) {
    const slots = new Set();
    let foundDefault: Node | null = null;
    for (const node of element.childNodes) {
      if (isDocument(node)
          || isDocumentFragment(node)
          || isCommentNode(node)
          || isDocumentTypeNode(node)) {
        continue;
      } else if (isLengthyTextNode(node) || isUnslottedElement(node)) {
        foundDefault = node;
      } else if (isElementNode(node) && hasAttribute(node, 'slot')) {
        slots.add(getAttribute(node, 'slot'));
      }
    }
    if (foundDefault) {
      setAttribute(element, 'ssr-hint-has-slotted-default', '');
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
export default function(
  eleventyConfig: UserConfig,
  pluginOpts?: Options,
) {
  eleventyConfig.addTransform('rhds-ssr-hints', function(this: TransformContext, content: string) {
    const document = parse(content);

    injectSSRHintAttributes.call(this, document, pluginOpts);

    return serialize(document);
  });
};
;

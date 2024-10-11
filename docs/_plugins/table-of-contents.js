import * as Parse5 from 'parse5';
import * as Tools from '@parse5/tools';

/// <reference lib="ESNext.collection" />
// @ts-check

/** @license adapted from code (c) Jordan Shermer MIT license*/

/* eslint-disable jsdoc/check-tag-names */

/** Attribute which if found on a heading means the heading is excluded */
const ignoreAttribute = 'data-toc-exclude';

/**
 * @typedef {object} EleventyPage
 */

/**
 * @typedef {object} Options
 * @property {string[]} tags
 * @property {string[]} ignoredElements
 * @property {import('@parse5/tools')} Tools
 * @property {import('parse5')} Parse5
 * @properry {EleventyPage} page
 */

/**
 * @param {Item} prev
 * @param {Item} current
 */
function getParent(prev, current) {
  if (current.level > prev.level) {
    // child heading
    return prev;
  } else if (current.level === prev.level) {
    // sibling of previous
    return prev.parent;
  } else {
    // above the previous
    return getParent(prev.parent, current);
  }
}

class Item {
  /** @type{Item[]} */
  children = [];

  /** @type{Item} */
  parent;

  level = 0;

  slug;

  text;

  /**
   * @param {import('@parse5/tools').Element} [element]
   */
  constructor(element) {
    if (element) {
      this.slug = Tools.getAttribute(element, 'id');
      this.text = Tools.getTextContent(element).trim();
      this.level = parseInt(element.tagName.replace('h', '')) || 0;
    }
  }

  getNode() {
    const { createElement, setTextContent, appendChild } = Tools;
    const container = this.slug && this.text ? createElement('li') : createElement('span');
    if (this.slug && this.text) {
      const a = createElement('a', { href: `#${this.slug}` });
      setTextContent(a, this.text);
      appendChild(container, a);
    }
    if (this.children.length > 0) {
      const details = createElement('ol', { slot: 'details' });
      const expanded = createElement('ol', { slot: 'expanded' });
      for (const child of this.children) {
        appendChild(details, child.getNode());
        appendChild(expanded, child.getNode());
      }
      appendChild(container, details);
      appendChild(container, expanded);
    }
    return container;
  }
}

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {Partial<Options>} pluginOpts
 */
export default function(eleventyConfig, pluginOpts = {}) {
  /**
   * @param {string} content
   * @param {Partial<Options>} filterOpts
   */
  async function toc(content, filterOpts) {
    const { tags = ['h2'], ignoredElements = [] } = {
      ...pluginOpts,
      ...filterOpts,
      tags: filterOpts?.tags || pluginOpts?.tags,
    };

    const root = new Item();

    root.parent = root;

    const document = Parse5.parse(content);

    const tagSet = new Set(tags).difference(new Set(ignoredElements));

    /** @type {IterableIterator<import('@parse5/tools').Element>} */
    const headings = Tools.queryAll(document, node =>
      Tools.isElementNode(node)
       && tagSet.has(node.tagName)
       && Tools.hasAttribute(node, 'id')
       && !Tools.hasAttribute(node, ignoreAttribute));

    let previous = root;

    for (const heading of headings) {
      const current = new Item(heading);
      const parent = getParent(previous, current);
      current.parent = parent;
      parent.children.push(current);
      previous = current;
    }

    return Parse5.serialize(root.getNode());
  }

  eleventyConfig.addFilter('toc', toc);
};

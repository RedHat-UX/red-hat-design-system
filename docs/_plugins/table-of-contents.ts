/** @license adapted from code (c) Jordan Shermer MIT license*/


import type { UserConfig } from '@11ty/eleventy';
import * as Parse5 from 'parse5';
import * as Tools from '@parse5/tools';

/** Attribute which if found on a heading means the heading is excluded */
const ignoreAttribute = 'data-toc-exclude';

type EleventyPage = object;

interface Options {
  tags: string[];
  ignoredElements: string[];
  page: EleventyPage;
}

function getParent(prev: Item, current: Item) {
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
  children: Item[] = [];

  parent!: Item;

  level = 0;

  slug!: string | null;

  text!: string;

  constructor(element?: Tools.Element) {
    if (element) {
      this.slug = Tools.getAttribute(element, 'id');
      this.text = Tools.getTextContent(element).trim();
      this.level = parseInt(element.tagName.replace('h', '')) || 0;
    }
  }

  getNode() {
    const { appendChild, createElement, setAttribute, setTextContent } = Tools;
    const container = createElement(this.slug && this.text ? 'uxdot-toc-item' : 'span');
    if (this.slug && this.text) {
      setAttribute(container, 'href', `#${this.slug}`);
      setTextContent(container, this.text);
    }
    if (this.children.length > 0) {
      const details = createElement('uxdot-toc-list', { slot: 'details' });
      const expanded = createElement('uxdot-toc-list', { slot: 'expanded' });
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

export default function(eleventyConfig: UserConfig, pluginOpts: Partial<Options> = {}) {
  eleventyConfig.addFilter('toc', async function toc(content: string, opts?: Partial<Options>) {
    const { tags = ['h2'], ignoredElements = [] } = {
      ...pluginOpts,
      ...opts,
      tags: opts?.tags || pluginOpts?.tags,
    };

    const root = new Item();

    root.parent = root;

    const document = Parse5.parse(content);

    const tagSet = new Set(tags).difference(new Set(ignoredElements));

    const headings = Tools.queryAll<Tools.Element>(document, (node): node is Tools.Element =>
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
  });
};

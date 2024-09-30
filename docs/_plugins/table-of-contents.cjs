// @ts-check

/** @license adapted from code (c) Jordan Shermer MIT license*/

/* eslint-disable jsdoc/check-tag-names */

/** Attribute which if found on a heading means the heading is excluded */
const ignoreAttribute = 'data-toc-exclude';

const defaults = {
  tags: ['h2'],
  /** @type{string[]} */
  ignoredElements: [],
};

/** @typedef {{ Tools: import('@parse5/tools'), Parse5: import('parse5') } & typeof defaults} Options */

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

  /**
   * @param {Options} options
   * @param {import('@parse5/tools').Element} [element]
   */
  constructor(options, element) {
    this.options = options;
    if (element) {
      const { getAttribute, getTextContent } = this.options.Tools;
      this.slug = getAttribute(element, 'id');
      this.text = getTextContent(element).trim();
      this.level = parseInt(element.tagName.replace('h', '')) || 0;
    }
  }

  getItem() {
    const { createElement, setTextContent, appendChild } = this.options.Tools;
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
        appendChild(details, child.getItem());
        appendChild(expanded, child.getItem());
      }
      appendChild(container, details);
      appendChild(container, expanded);
    }
    return container;
  }
}

class Toc {
  /**
   * @param {string} htmlstring
   * @param {Options} options
   */
  constructor(htmlstring = '', options) {
    this.html = htmlstring;
    this.options = options;
    this.root = new Item(this.options);
    this.root.parent = this.root;

    this.parse();
  }

  parse() {
    const { parse } = this.options.Parse5;
    const { queryAll, hasAttribute, isElementNode } = this.options.Tools;

    const document = parse(this.html);

    const tagSet =
      new Set(this.options.tags)
          .difference(new Set(this.options.ignoredElements));

    const headings = queryAll(document, node =>
      isElementNode(node)
      && tagSet.has(node.tagName)
      && hasAttribute(node, 'id')
      && !hasAttribute(node, ignoreAttribute));

    let previous = this.root;

    for (const heading of headings) {
      if (isElementNode(heading)) {
        const current = new Item(this.options, heading);
        const parent = getParent(previous, current);
        current.parent = parent;
        parent.children.push(current);
        previous = current;
      }
    }
  }

  serialize() {
    const { serialize } = this.options.Parse5;
    return serialize(this.root.getItem());
  }
}

module.exports = {
  initArguments: {},
  configFunction: function(eleventyConfig, options = {}) {
    eleventyConfig.addFilter('toc', /**
                                     * @param {string} content
                                     * @param {typeof defaults} opts
                                     */
                             async function(content, opts) {
                               const Parse5 = await import('parse5');
                               const Tools = await import('@parse5/tools');
                               const toc = new Toc(content, {
                                 ...defaults,
                                 ...options,
                                 ...opts,
                                 tags: opts?.tags || options?.tags,
                                 Parse5,
                                 Tools,
                                 page: this.page,
                               });
                               const html = toc.serialize();
                               return html;
                             });
  },
};

import type * as CEM from 'custom-elements-manifest';

import { parseFragment } from 'parse5';
import * as Tools from '@parse5/tools';
import { getAllManifests } from '@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js';

interface TagInfo {
  className: string;
  reactName: string;
  importPath: string;
}

const [manifest] = getAllManifests();

/**
 * Build a map of tagName -> React component info from the custom elements manifest
 */
function buildTagNameMap(): Map<string, TagInfo> {
  const map = new Map<string, TagInfo>();
  for (const mod of manifest.manifest?.modules ?? []) {
    for (const decl of mod.declarations ?? []) {
      const { tagName, name: className } = decl as CEM.CustomElementDeclaration;
      if (tagName && className) {
        // React component name strips the "Rh" prefix
        const reactName = className.replace(/^Rh/, '');
        // Import path pattern: @rhds/elements/react/{tagName}/{tagName}.js
        const importPath = `@rhds/elements/react/${tagName}/${tagName}.js`;
        map.set(tagName, { className, reactName, importPath });
      }
    }
  }
  return map;
}

const tagNameMap = buildTagNameMap();

/**
 * Collect all unique rh-* tag names from a parse5 fragment
 */
function collectRhTagNames(fragment: Tools.DocumentFragment): Set<string> {
  const tagNames = new Set<string>();
  for (const node of Tools.queryAll<Tools.Element>(fragment, Tools.isElementNode)) {
    if (node.tagName.startsWith('rh-') && tagNameMap.has(node.tagName)) {
      tagNames.add(node.tagName);
    }
  }
  return tagNames;
}

/**
 * Generate import statements for the given tag names
 */
function generateImports(tagNames: Set<string>): string {
  const imports: string[] = [];
  for (const tagName of [...tagNames].sort()) {
    const info = tagNameMap.get(tagName);
    if (info) {
      imports.push(`import { ${info.reactName} } from "${info.importPath}";`);
    }
  }
  return imports.join('\n');
}

/**
 * Get the React component name for an element, or return the original tag name
 */
function getComponentName(tagName: string): string {
  const info = tagNameMap.get(tagName);
  return info?.reactName ?? tagName;
}

/**
 * Transform attribute name for JSX (class -> className, for -> htmlFor)
 */
function transformAttrName(name: string): string {
  if (name === 'class') {
    return 'className';
  }
  if (name === 'for') {
    return 'htmlFor';
  }
  return name;
}

/**
 * Serialize attributes to JSX format
 */
function serializeAttrs(attrs: { name: string; value: string }[]): string {
  if (attrs.length === 0) {
    return '';
  }
  return ` ${attrs
      .map(({ name, value }) => {
        const jsxName = transformAttrName(name);
        // Boolean attributes (empty value)
        if (value === '') {
          return jsxName;
        }
        return `${jsxName}="${value}"`;
      })
      .join(' ')}`;
}

/**
 * Check if a node is only whitespace text
 */
function isWhitespaceOnly(node: Tools.ChildNode): boolean {
  return Tools.isTextNode(node) && /^\s*$/.test((node as Tools.TextNode).value);
}

/**
 * Check if element has only inline content (text and inline elements)
 */
function hasOnlyInlineContent(node: Tools.Element): boolean {
  const inlineTags = new Set(['a', 'span', 'strong', 'em', 'b', 'i', 'code', 'small']);
  for (const child of node.childNodes) {
    if (Tools.isTextNode(child)) {
      continue;
    }
    if (Tools.isElementNode(child)) {
      // rh-* components and block elements should cause multiline
      if (child.tagName.startsWith('rh-') || !inlineTags.has(child.tagName)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Recursively serialize a node to pretty-printed JSX
 */
function serializeNode(node: Tools.ChildNode, indent: number): string {
  const indentStr = '  '.repeat(indent);

  if (Tools.isTextNode(node)) {
    const text = (node as Tools.TextNode).value;
    // Collapse pure whitespace between elements
    if (/^\s*$/.test(text)) {
      return '';
    }
    // Trim and return text content
    return text.trim();
  }

  if (Tools.isCommentNode(node)) {
    return ''; // Skip comments in JSX output
  }

  if (!Tools.isElementNode(node)) {
    return '';
  }

  const elem = node as Tools.Element;
  const tagName = elem.tagName.startsWith('rh-') ?
    getComponentName(elem.tagName)
    : elem.tagName;
  const attrs = serializeAttrs(elem.attrs);

  // Filter out whitespace-only text nodes
  const meaningfulChildren = elem.childNodes.filter((c: Tools.ChildNode) => !isWhitespaceOnly(c));

  // Self-closing if no children
  if (meaningfulChildren.length === 0) {
    return `${indentStr}<${tagName}${attrs} />`;
  }

  // Check if we can render inline (single text node or simple inline content)
  if (meaningfulChildren.length === 1 && Tools.isTextNode(meaningfulChildren[0])) {
    const text = (meaningfulChildren[0] as Tools.TextNode).value.trim();
    return `${indentStr}<${tagName}${attrs}>${text}</${tagName}>`;
  }

  // Check for simple inline content
  if (hasOnlyInlineContent(elem) && meaningfulChildren.length <= 2) {
    const innerContent = meaningfulChildren
        .map((c: Tools.ChildNode) => serializeNode(c, 0))
        .filter(Boolean)
        .join('');
    if (innerContent.length < 60) {
      return `${indentStr}<${tagName}${attrs}>${innerContent}</${tagName}>`;
    }
  }

  // Multi-line output
  const childContent = meaningfulChildren
      .map((c: Tools.ChildNode) => serializeNode(c, indent + 1))
      .filter(Boolean)
      .join('\n');

  return `${indentStr}<${tagName}${attrs}>\n${childContent}\n${indentStr}</${tagName}>`;
}

/**
 * Serialize a fragment to pretty-printed JSX
 */
function serializeFragment(fragment: Tools.DocumentFragment): string {
  const parts: string[] = [];
  for (const node of fragment.childNodes) {
    if (isWhitespaceOnly(node)) {
      continue;
    }
    const serialized = serializeNode(node, 0);
    if (serialized) {
      parts.push(serialized);
    }
  }
  return parts.join('\n');
}

/**
 * Convert HTML containing rh-* elements to React JSX with imports
 */
export function htmlToReact(html: string): string {
  const fragment = parseFragment(html.trim());

  // Collect all unique rh-* tag names before transformation
  const tagNames = collectRhTagNames(fragment);

  if (tagNames.size === 0) {
    // No rh-* elements found, return empty
    return '';
  }

  // Generate imports
  const imports = generateImports(tagNames);

  // Serialize to pretty JSX (transformation happens during serialization)
  const jsx = serializeFragment(fragment);

  return `${imports}\n\n${jsx}`;
}

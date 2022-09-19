/**
 * Checks if the given `node` is an instanceof HTMLHeadingElemnt
 * @returns {boolean}
 */
export function isHeadingElement(node: Node | null): node is HTMLHeadingElement {
  return (node instanceof HTMLHeadingElement);
}

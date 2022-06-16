/**
 * Checks if the tagName string value matches
 * h1, h2, h3, h4, h5, h6 and returns boolean
 * @param tagName {String}
 * @returns {boolean}
 */
export function isHeader(tagName: string): boolean {
  return !!tagName.match(/^H[1-6]$/i);
}

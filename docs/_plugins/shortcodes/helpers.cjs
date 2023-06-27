
/**
 * @param {string} k
 * @param {unknown} v
 */
function getAttrMapValue(k, v) {
  switch (k) {
    case 'style': return typeof v === 'string' ? v.replace('"', '\\"') : v;
    default: return v;
  }
}

/**
 * @param {Record<string, unknown>} attrObj object map of attribute name to attribute value. `null` values will be removed.
 * @returns {string} html attributes
 */
exports.attrMap = function attrMap(attrObj) {
  return Object.entries(attrObj)
    .filter(([, v]) => v != null)
    .map(([k, v]) => `${k}="${getAttrMapValue(k, v)}"`)
    .join(' ');
};

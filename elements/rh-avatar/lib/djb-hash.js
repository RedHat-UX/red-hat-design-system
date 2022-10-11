// elements/pfe-avatar/lib/djb-hash.ts
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i) {
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  }
  return hash2 >>> 0;
}
export {
  hash
};
//# sourceMappingURL=djb-hash.js.map

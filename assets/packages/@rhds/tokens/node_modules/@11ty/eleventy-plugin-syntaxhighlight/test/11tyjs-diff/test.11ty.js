module.exports = function(data) {
  let result = this.highlight("diff-js", "-var test;");
  return result;
};

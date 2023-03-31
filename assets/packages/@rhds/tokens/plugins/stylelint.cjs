const rules = require('./stylelint/rules.cjs');
const stylelint = require('stylelint');

module.exports = rules.map(ruleFunction =>
  stylelint.createPlugin(ruleFunction.ruleName, ruleFunction));

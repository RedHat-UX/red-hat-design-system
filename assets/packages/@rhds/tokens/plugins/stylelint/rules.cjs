const TokenValues = require('./rules/token-values.cjs');
const NoUnknownTokenName = require('./rules/no-unknown-token-name.cjs');

module.exports = [
  TokenValues,
  NoUnknownTokenName,
];

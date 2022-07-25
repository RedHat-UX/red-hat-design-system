// @ts-check
const ts = require('typescript');

/**
 * Replace .css import specifiers with .css.js import specifiers
 */
module.exports = () =>
  /** @param {import('typescript').TransformationContext} ctx */
  ctx => {
    /** @param {import('typescript').Node} node */
    function visitor(node) {
      if (ts.isImportDeclaration(node) && !node.importClause?.isTypeOnly) {
        const specifier = node.moduleSpecifier.getText().replace(/^'(.*)'$/, '$1');
        if (specifier.endsWith('.css')) {
          return ctx.factory.createImportDeclaration(
            node.decorators,
            node.modifiers,
            node.importClause,
            ctx.factory.createStringLiteral(`${specifier}.js`)
          );
        }
      }
      return ts.visitEachChild(node, visitor, ctx);
    }

    /** @param {import('typescript').SourceFile} sourceFile */
    return sourceFile => ts.visitEachChild(sourceFile, visitor, ctx);
  };

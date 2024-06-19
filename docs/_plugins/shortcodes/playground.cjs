const { join } = require('node:path');

module.exports = function(eleventyConfig) {
  // eleventyConfig.on('eleventy.before', async function() {
  //  const { rollup } = await import('rollup');
  //  const { importMetaAssets } = await import('@web/rollup-plugin-import-meta-assets');
  //  const { nodeResolve } = await import('@rollup/plugin-node-resolve');
  //  const outdir = join(__dirname, `../../assets/javascript/elements/`);
  //  const bundle = await rollup({
  //    input: join(__dirname, 'playground-elements.js'),
  //    external: [/^@rhds/],
  //    plugins: [
  //      nodeResolve(),
  //      importMetaAssets(),
  //    ],
  //  });
  //  await bundle.write({ dir: outdir });
  // });
};

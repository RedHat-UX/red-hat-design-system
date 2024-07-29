const getPlayground = data => data.playgrounds[data.element.tagName];

/**
 * Demo data, which are computed by the custom elements manifest generator
 * and by /scripts/playgrounds.ts
 */
module.exports = {
  eleventyComputed: {
    playground: getPlayground,
    baseUrl: process.env.DEPLOY_PRIME_URL || 'http://localhost:8080',
    // ensure demo data, which is generated from `/elements/*/demo/*.html`
    // and which located in custom elements manifest,
    // is available to the 11th template
    doc: data => data.doc || data.collections.elementDocs
        .find(x => x.slug === data.element.slug),
    title(data) {
      return `Demos | ${this.deslugify(data.element.slug)}`;
    },
  },
};

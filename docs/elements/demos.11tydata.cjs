const getPlayground = data => data.playgrounds[data.element.tagName];
module.exports = {
  eleventyComputed: {
    playground: getPlayground,
    baseUrl: process.env.DEPLOY_PRIME_URL || 'http://localhost:8080',
    doc: data => data.doc || data.collections.elementDocs
        .find(x => x.slug === data.element.slug),
    title(data) {
      return `Demos | ${this.deslugify(data.element.slug)}`;
    },
  },
};

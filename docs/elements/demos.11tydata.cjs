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
    computedToc(data) {
      const playground = data.playground ?? getPlayground(data);
      const labels = Object.entries(playground?.files ?? {})
          .filter(([, v]) => v.label)
          .map(([filename, config]) => `<h2 id="demo-${filename.split('/').pop().split('.').shift()}">${config.label}</h2>`)
          .join('\n');
      return this.toc(labels);
    },
  },
};

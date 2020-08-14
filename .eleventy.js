const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  /**
   * Collections to organize by alphabetical instead of date
   */
  const tagsToAlphabetize = [
    'component',
    'foundation',
  ];

  for (let i = 0; i < tagsToAlphabetize.length; i++) {
    const tag = tagsToAlphabetize[i];

    eleventyConfig.addCollection(tag, function(collection) {
      return collection.getFilteredByTag(tag).sort(function(a, b) {
        if(a.data.title < b.data.title) { return -1; }
        if(a.data.title > b.data.title) { return 1; }
        return 0;
      });
    });
  }

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  // eleventyConfig.setBrowserSyncConfig({
  //   callbacks: {
  //     ready: function(err, browserSync) {
  //       const content_404 = fs.readFileSync('_site/404.html');

  //       browserSync.addMiddleware("*", (req, res) => {
  //         // Provides the 404 content without redirect.
  //         res.write(content_404);
  //         res.end();
  //       });
  //     },
  //   },
  //   ui: false,
  //   ghostMode: false
  // });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid",
    ],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    dir: {
      input: "pages",
      // This means anything from pages dir can be included in anything else
      includes: "",
      output: "webroot",
    },
  };
};

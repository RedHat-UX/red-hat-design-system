const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  /**
   * Collections to organize by 'order' value in front matter, then alphabetical by title;
   * instead of by date
   */
  // Tags to sort
  const tagsToAlphabetize = [
    'component',
    'foundations',
  ];

  // Iterate over tags to sort
  for (let tagIndex = 0; tagIndex < tagsToAlphabetize.length; tagIndex++) {
    const tag = tagsToAlphabetize[tagIndex];

    eleventyConfig.addCollection(tag, function(collection) {
      const currentCollection = collection.getFilteredByTag(tag);
      // weights will have a key for each specified weight (the value of order),
      // and an array of each item with that weight
      const weights = {};
      // Final sorted array of collection items
      let sorted = [];
      for (let index = 0; index < currentCollection.length; index++) {
        const item = currentCollection[index];
        // If order is set, remove it from currentCollection and add it to weights
        if (item.data.order) {
          const order = item.data.order;
          if (!weights[order]) {
            weights[order] = [];
          }
          const removedItem = currentCollection.splice(index, 1);
          weights[order].push(removedItem[0]);
        }
      }

      // Default non specified pages to a weigh tof 0 by
      // adding what's remaining in currentCollection to weight 0
      if (weights[0]) {
        weights[0].concat(currentCollection);
      }
      else {
        weights[0] = currentCollection;
      }

      // Iterate over weights with multiple items and sort by title alphabetically
      // @note The .sort() may need a sort handler that uses parseInt, but seems to be working?
      const weightKeys = Object.keys(weights).sort();
      for (let index = 0; index < weightKeys.length; index++) {
        const currentWeight = weightKeys[index];
        // Sort by title alphabetically
        weights[currentWeight].sort(function (a, b) {
          if(a.data.title < b.data.title) { return -1; }
          if(a.data.title > b.data.title) { return 1; }
          return 0;
        });
        // Append result to sorted array
        sorted = sorted.concat(weights[currentWeight]);
      }

      return sorted;
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

module.exports = function(eleventyConfig, { tagsToAlphabetize }) {
  // Iterate over tags to sort
  for (const tag of tagsToAlphabetize) {
    eleventyConfig.addCollection(tag, function(collection) {
      const currentCollection = [...collection.getFilteredByTag(tag)]
        .sort((a, b) => (a.data.order ?? Infinity) - (b.data.order ?? Infinity));

      // Final sorted array of collection items
      const sorted = new Set();

      for (const item of currentCollection) {
        // If order is set, remove it from currentCollection and add it to weights
        if (item.data.order) {
          sorted.add(item);
        }
      }

      // weights will have a key for each specified weight (the value of order),
      // and an array of each item with that weight
      const weights = {};

      // Default non specified pages to a weigh tof 0 by
      // adding what's remaining in currentCollection to weight 0
      if (weights[0]) {
        weights[0].concat(currentCollection);
      } else {
        weights[0] = currentCollection;
      }

      // Iterate over weights with multiple items and sort by title alphabetically
      // @note The .sort() may need a sort handler that uses parseInt, but seems to be working?
      for (const currentWeight of Object.keys(weights).sort()) {
        // Sort by title alphabetically
        weights[currentWeight].sort(function(a, b) {
          if (a.data.title < b.data.title) {
            return -1;
          }
          if (a.data.title > b.data.title) {
            return 1;
          }
          return 0;
        });

        // Append result to sorted array
        for (const item of weights[currentWeight]) {
          sorted.add(item);
        }
      }

      return [...sorted];
    });
  }
};

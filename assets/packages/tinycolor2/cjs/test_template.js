// This file is autogenerated.
// Ideally it wouldn't exist, but it's here to test cjs in node
// Changes should go into ./test.js, and if new assertions are needed
// they'll need to be shimmed here as well
const tinycolor = require("./tinycolor.js");
const { Deno, testDefinitions } = require("@deno/shim-deno-test");
async function runDenoTests() {
  for (const test of testDefinitions) {
    if (test.ignore) {
      console.log(`Ignoring ${test.name}`);
      continue;
    }
    console.log(`Running ${test.name}`);
    await test.fn();
    console.log(`> Passed ${test.name}`);
  }
}
(async () => {
  const { assertEquals, assert, assertThrows } = await import(
    "../deno_asserts@0.168.0.mjs"
  );

  // CONTENT_GOES_HERE

  runDenoTests();
})();
const test = require("ava");
const CharacterWrap = require("../src/CharacterWrap");

test("CharacterWrap", async t => {
  let wrapper = new CharacterWrap();
  t.is(wrapper.wrapContent("<html></html>", "html"), `<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><span data-index="1" class="charwrap">&lt;</span></span><span data-index="2" class="charwrap">h</span><span data-index="3" class="charwrap">t</span><span data-index="4" class="charwrap">m</span><span data-index="5" class="charwrap">l</span></span><span class="token punctuation"><span data-index="6" class="charwrap">&gt;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation"><span data-index="7" class="charwrap">&lt;</span><span data-index="8" class="charwrap">/</span></span><span data-index="9" class="charwrap">h</span><span data-index="10" class="charwrap">t</span><span data-index="11" class="charwrap">m</span><span data-index="12" class="charwrap">l</span></span><span class="token punctuation"><span data-index="13" class="charwrap">&gt;</span></span></span></code></pre>`);
});

test("CharacterWrap with different class prefix", async t => {
  let wrapper = new CharacterWrap();
  wrapper.setClassPrefix("customprefix");
  t.is(wrapper.wrapContent("<html></html>", "html"), `<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><span data-index="1" class="customprefix">&lt;</span></span><span data-index="2" class="customprefix">h</span><span data-index="3" class="customprefix">t</span><span data-index="4" class="customprefix">m</span><span data-index="5" class="customprefix">l</span></span><span class="token punctuation"><span data-index="6" class="customprefix">&gt;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation"><span data-index="7" class="customprefix">&lt;</span><span data-index="8" class="customprefix">/</span></span><span data-index="9" class="customprefix">h</span><span data-index="10" class="customprefix">t</span><span data-index="11" class="customprefix">m</span><span data-index="12" class="customprefix">l</span></span><span class="token punctuation"><span data-index="13" class="customprefix">&gt;</span></span></span></code></pre>`);
});

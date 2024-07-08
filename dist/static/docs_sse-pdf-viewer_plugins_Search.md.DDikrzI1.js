import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework.BxU-Can-.js";const k=JSON.parse('{"title":"Search","description":"","frontmatter":{"title":"Search"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Search.md","filePath":"docs/sse-pdf-viewer/plugins/Search.md"}'),i={name:"docs/sse-pdf-viewer/plugins/Search.md"},d=s(`<h1 id="search-plugin" tabindex="-1">Search plugin <a class="header-anchor" href="#search-plugin" aria-label="Permalink to &quot;Search plugin&quot;">​</a></h1><p>The <code>search</code> plugin provides a button or control to search for given keyword.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-search;</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-search;</span></span></code></pre></div><blockquote><p>The <code>search</code> plugin is included in the <a href="/docs/sse-pdf-viewer/plugins/Toolbar">toolbar</a> and <a href="/docs/sse-pdf-viewer/plugins/Default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin" tabindex="-1">1. Import the plugin <a class="header-anchor" href="#_1-import-the-plugin" aria-label="Permalink to &quot;1. Import the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { searchPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-search/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> searchPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> searchPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SearchPluginProps);</span></span></code></pre></div><p>The optional parameter <code>SearchPluginProps</code> represents an object of the property: <em>(? denotes an optional property)</em></p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>enableShortcuts?</code></td><td><code>boolean</code></td><td>Enable shortcuts</td><td>1.0.0</td></tr><tr><td><code>keyword?</code></td><td><code>string</code>, <code>RegExp</code> or <code>FlagKeyword</code></td><td>The initial keyword that will be highlighted in all 1.0.0</td><td>0.0</td></tr><tr><td><code>string[]</code>,</td><td><code>RegExp[]</code> or <code>FlagKeyword[]</code></td><td>You can set multiple keywords to be highlighted initially</td><td>1.0.0</td></tr><tr><td><code>renderHighlights</code></td><td><code>Function</code></td><td>Customize the highlighted elements. See this example</td><td>1.0.0</td></tr><tr><td><code>onHighlightKeyword</code></td><td><code>Function</code></td><td>Invoked when a keyword is highlighted</td><td>1.0.0</td></tr></tbody></table><p>By default, the shortcuts are enabled. Users can press <code>ctrl</code> + <code>F</code> to open the search popover. The plugin instance <code>searchPluginInstance</code> provides the following properties:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>Search</code></td><td><code>ReactElement</code></td><td>Customizable search control</td><td>1.0.0</td></tr><tr><td><code>ShowSearchPopover</code></td><td><code>ReactElement</code></td><td>Customizable button to show the search popover</td><td>1.0.0</td></tr><tr><td><code>ShowSearchPopoverButton</code></td><td><code>ReactElement</code></td><td>The default button to show the search popover</td><td>1.0.0</td></tr><tr><td><code>clearHighlights</code></td><td><code>Function</code></td><td>Clear the highlights</td><td>1.0.0</td></tr><tr><td><code>highlight</code></td><td><code>Function</code></td><td>Highlight multiple keywords</td><td>1.0.0</td></tr><tr><td><code>jumpToMatch</code></td><td><code>Function</code></td><td>Jump to a given match</td><td>1.0.0</td></tr><tr><td><code>jumpToNextMatch</code></td><td><code>Function</code></td><td>Jump to the next match</td><td>1.0.0</td></tr><tr><td><code>jumpToPreviousMatch</code></td><td><code>Function</code></td><td>Jump to the previous match</td><td>1.0.0</td></tr><tr><td><code>setTargetPages</code></td><td><code>Function</code></td><td>Set the pages that you want to search in</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Register the <code>search</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[searchPluginInstance]} /&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>search</code> plugin provides other useful properties as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { NextIcon, PreviousIcon, SearchIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>NextIcon</code></td><td><code>ReactElement</code></td><td>The icon used to go to the next match in the document</td><td>1.0.0</td></tr><tr><td><code>PreviousIcon</code></td><td><code>ReactElement</code></td><td>The icon used to go to the previous match in the document</td><td>1.0.0</td></tr><tr><td><code>SearchIcon</code></td><td><code>ReactElement</code></td><td>The search icon</td><td>1.0.0</td></tr></tbody></table>`,23),o=[d];function h(n,c,r,l,p,g){return a(),e("div",null,o)}const b=t(i,[["render",h]]);export{k as __pageData,b as default};
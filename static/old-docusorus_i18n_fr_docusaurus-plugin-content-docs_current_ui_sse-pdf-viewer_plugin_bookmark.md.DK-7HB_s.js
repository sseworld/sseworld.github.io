import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.CerNch-K.js";const g=JSON.parse('{"title":"Bookmark","description":"","frontmatter":{"sidebar_position":2,"title":"Bookmark"},"headers":[],"relativePath":"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/plugin/bookmark.md","filePath":"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/plugin/bookmark.md"}'),e={name:"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/plugin/bookmark.md"},n=t(`<h1 id="bookmark-plugin" tabindex="-1">Bookmark plugin <a class="header-anchor" href="#bookmark-plugin" aria-label="Permalink to &quot;Bookmark plugin&quot;">​</a></h1><p>The <code>bookamrk</code> plugin lists all outline bookmarks of a PDF document. Clicking a bookmark item will jump to its associate sections</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-bookmark</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-bookmark</span></span></code></pre></div><blockquote><p>The <code>bookmark</code> plugin is included in the <a href="/docs/ui/sse-pdf-viewer/plugin/default-layout">default-layout</a> plugin</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin-and-styles" tabindex="-1">1. Import the plugin and styles <a class="header-anchor" href="#_1-import-the-plugin-and-styles" aria-label="Permalink to &quot;1. Import the plugin and styles&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { bookmarkPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-bookmark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-bookmark/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bookmarkPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bookmarkPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>The plugin instance <code>bookmarkPluginInstance</code> provides the following property:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>Bookmarks</code></td><td><code>ReactElement</code></td><td>The component lists available bookmarks</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Register the <code>bookmark</code> plugin instance, and use the <code>&lt;Bookmarks /&gt;</code> component to list all bookmarks.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bookmarks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bookmarkPluginInstance;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[bookmarkPluginInstance]}&gt; /&gt;;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>bookmark</code> plugin provides other properties as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { DownArrowIcon, RightArrowIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-bookmark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>DownArrowIcon</code></td><td><code>ReactElement</code></td><td>The down arrow icon</td><td>1.0.0</td></tr><tr><td><code>RightArrowIcon</code></td><td><code>ReactElement</code></td><td>The right arrow icon</td><td>1.0.0</td></tr></tbody></table>`,21),o=[n];function l(p,r,h,d,k,c){return i(),a("div",null,o)}const b=s(e,[["render",l]]);export{g as __pageData,b as default};

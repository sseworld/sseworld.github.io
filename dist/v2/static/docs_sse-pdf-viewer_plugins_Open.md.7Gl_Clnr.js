import{_ as e,c as t,o as s,a4 as a}from"./chunks/framework.CV4YwD3C.js";const k=JSON.parse('{"title":"Open","description":"","frontmatter":{"title":"Open"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Open.md","filePath":"docs/sse-pdf-viewer/plugins/Open.md"}'),i={name:"docs/sse-pdf-viewer/plugins/Open.md"},n=a(`<h1 id="open-plugin" tabindex="-1">Open plugin <a class="header-anchor" href="#open-plugin" aria-label="Permalink to &quot;Open plugin&quot;">​</a></h1><p>The <code>open</code> plugin provides a button that can be used to open a PDF document in your computer. It is possible to customize the button as well.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install &#39;@sse-ui/pdf-open&#39;;</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add &#39;@sse-ui/pdf-open&#39;;</span></span></code></pre></div><blockquote><p>The <code>open</code> plugin is included in the <a href="//docs/sse-pdf-viewer/plugins/Toolbar" target="_blank" rel="noreferrer">toolbar</a> and <a href="/v2/docs/sse-pdf-viewer/plugins/Default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin" tabindex="-1">1. Import the plugin <a class="header-anchor" href="#_1-import-the-plugin" aria-label="Permalink to &quot;1. Import the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { openPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-open/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> openPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> openPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenPluginProps);</span></span></code></pre></div><p>The <code>openPlugin()</code> function takes an optional <code>OpenPluginProps</code> parameter that consists of the following property: <em>(? denotes an optional property)</em></p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>enableShortcuts?</code></td><td><code>boolean</code></td><td>Enable shortcuts</td><td>1.0.0</td></tr></tbody></table><p>By default, the shortcuts are enabled. Users can press <code>ctrl</code> + <code>O</code> to open a document. The plugin instance <code>openPluginInstance</code> provides the following properties:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>Open</code></td><td><code>ReactElement</code></td><td>Customizable open button</td><td>1.0.0</td></tr><tr><td><code>OpenButton</code></td><td><code>ReactElement</code></td><td>The default open button</td><td>1.0.0</td></tr><tr><td><code>OpenMenuItem</code></td><td><code>ReactElement</code></td><td>The default open menu item</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Register the <code>open</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[openPluginInstance]} /&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>open</code> plugin provides other useful property as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { OpenFileIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>OpenFileIcon</code></td><td><code>ReactElement</code></td><td>The open file icon</td><td>1.0.0</td></tr></tbody></table>`,23),p=[n];function l(o,d,h,r,c,u){return s(),t("div",null,p)}const b=e(i,[["render",l]]);export{k as __pageData,b as default};

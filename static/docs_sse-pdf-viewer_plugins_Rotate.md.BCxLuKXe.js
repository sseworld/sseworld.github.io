import{_ as t,c as e,o as a,a3 as s}from"./chunks/framework.CerNch-K.js";const k=JSON.parse('{"title":"Rotate","description":"","frontmatter":{"title":"Rotate"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Rotate.md","filePath":"docs/sse-pdf-viewer/plugins/Rotate.md"}'),i={name:"docs/sse-pdf-viewer/plugins/Rotate.md"},o=s(`<h1 id="rotate-plugin" tabindex="-1">Rotate plugin <a class="header-anchor" href="#rotate-plugin" aria-label="Permalink to &quot;Rotate plugin&quot;">​</a></h1><p>The <code>rotate</code> plugin provide buttons to rotate the document clockwise or counterclockwise. They come with the default styles and provide the ability of customization.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-rotate;</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-rotate;</span></span></code></pre></div><blockquote><p>The <code>rotate</code> plugin is included in the <a href="/docs/sse-pdf-viewer/plugins/Toolbar">toolbar</a> and <a href="/docs/sse-pdf-viewer/plugins/Default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin" tabindex="-1">1. Import the plugin <a class="header-anchor" href="#_1-import-the-plugin" aria-label="Permalink to &quot;1. Import the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { rotatePlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-rotate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin" tabindex="-1">2. Create the plugin <a class="header-anchor" href="#_2-create-the-plugin" aria-label="Permalink to &quot;2. Create the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rotatePluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rotatePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>The plugin instance <code>rotatePluginInstance</code> provides the following properties:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>Rotate</code></td><td><code>ReactElement</code></td><td>Customizable rotate button</td><td>1.0.0</td></tr><tr><td><code>RotatePage</code></td><td><code>ReactElement</code></td><td>Rotate a single page</td><td>1.0.0</td></tr><tr><td><code>RotateBackwardButton</code></td><td><code>ReactElement</code></td><td>The default button to rotate counterclockwise</td><td>1.0.0</td></tr><tr><td><code>RotateBackwardMenuItem</code></td><td><code>ReactElement</code></td><td>Customizable menu item to rotate counterclockwise</td><td>1.0.0</td></tr><tr><td><code>RotateForwardButton</code></td><td><code>ReactElement</code></td><td>The default button to rotate clockwise</td><td>1.0.0</td></tr><tr><td><code>RotateForwardMenuItem</code></td><td><code>ReactElement</code></td><td>Customizable menu item to rotate clockwise</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Register the <code>rotate</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[rotatePluginInstance]} /&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>rotate</code> plugin provides other useful properties as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RotateBackwardIcon,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RotateForwardIcon,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-rotate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>RotateBackwardIcon</code></td><td><code>ReactElement</code></td><td>The rotate counterclockwise icon</td><td>1.0.0</td></tr><tr><td><code>RotateForwardIcon</code></td><td><code>ReactElement</code></td><td>The rotate clockwise icon</td><td>1.0.0</td></tr></tbody></table>`,21),d=[o];function n(l,p,r,h,c,u){return a(),e("div",null,d)}const b=t(i,[["render",n]]);export{k as __pageData,b as default};

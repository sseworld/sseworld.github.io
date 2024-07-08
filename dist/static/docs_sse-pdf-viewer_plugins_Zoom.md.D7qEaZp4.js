import{_ as t,c as e,o,a4 as a}from"./chunks/framework.BxU-Can-.js";const g=JSON.parse('{"title":"Zoom","description":"","frontmatter":{"title":"Zoom"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Zoom.md","filePath":"docs/sse-pdf-viewer/plugins/Zoom.md"}'),d={name:"docs/sse-pdf-viewer/plugins/Zoom.md"},s=a(`<h1 id="zoom-plugin" tabindex="-1">Zoom plugin <a class="header-anchor" href="#zoom-plugin" aria-label="Permalink to &quot;Zoom plugin&quot;">​</a></h1><p>The <code>zoom</code> plugin provides a few components to zoom in or zoom out a PDF document. It also allows to customize these components.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-zoom;</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-zoom;</span></span></code></pre></div><blockquote><p>The <code>zoom</code> plugin is included in the <a href="/docs/sse-pdf-viewer/plugins/Toolbar">toolbar</a> and <a href="/docs/sse-pdf-viewer/plugins/Default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin" tabindex="-1">1. Import the plugin <a class="header-anchor" href="#_1-import-the-plugin" aria-label="Permalink to &quot;1. Import the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { zoomPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-zoom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-zoom/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zoomPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> zoomPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZoomPluginProps)</span></span></code></pre></div><p>The <code>zoomPlugin()</code> function takes an optional <code>ZoomPluginProps</code> parameter that consists of the following property: <em>(? denotes an optional property)</em></p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>enableShortcuts</code>?</td><td><code>boolean</code></td><td>Enable shortcuts</td><td>1.0.0</td></tr></tbody></table><p>By default, users can use particular shortcuts to zoom in or zoom out the current document:</p><table tabindex="0"><thead><tr><th>SHORTCUT</th><th>ACTION</th></tr></thead><tbody><tr><td><code>ctrl</code> + <code>+</code></td><td>Zoom in the document</td></tr><tr><td><code>ctrl</code> + <code>-</code></td><td>Zoom out the document</td></tr><tr><td><code>ctrl</code> + <code>0</code></td><td>View the actual size of the document</td></tr></tbody></table><p>The plugin instance <code>zoomPluginInstance</code> provides the following properties:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>CurrentScale</code></td><td><code>ReactElement</code></td><td>Show the current scale value</td><td>1.0.0</td></tr><tr><td><code>Zoom</code></td><td><code>ReactElement</code></td><td>Customizable zoom button</td><td>1.0.0</td></tr><tr><td><code>ZoomIn</code></td><td><code>ReactElement</code></td><td>Customizable zoom in button</td><td>1.0.0</td></tr><tr><td><code>ZoomInButton</code></td><td><code>ReactElement</code></td><td>The default zoom in button</td><td>1.0.0</td></tr><tr><td><code>ZoomInMenuItem</code></td><td><code>ReactElement</code></td><td>The default zoom in menu item</td><td>1.0.0</td></tr><tr><td><code>ZoomOut</code></td><td><code>ReactElement</code></td><td>Customizable zoom out button</td><td>1.0.0</td></tr><tr><td><code>ZoomOutButton</code></td><td><code>ReactElement</code></td><td>The default zoom out button</td><td>1.0.0</td></tr><tr><td><code>ZoomOutMenuItem</code></td><td><code>ReactElement</code></td><td>The default zoom out menu item</td><td>1.0.0</td></tr><tr><td><code>ZoomPopover</code></td><td><code>ReactElement</code></td><td>The default popover allows to zoom to specific level</td><td>1.0.0</td></tr><tr><td><code>zoomTo</code></td><td><code>Function</code></td><td>Zoom to specific level</td><td>1.0.0</td></tr></tbody></table>`,18),i=[s];function n(l,c,p,h,r,u){return o(),e("div",null,i)}const k=t(d,[["render",n]]);export{g as __pageData,k as default};

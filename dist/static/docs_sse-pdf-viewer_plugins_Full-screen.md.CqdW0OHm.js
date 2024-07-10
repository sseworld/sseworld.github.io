import{_ as e,c as t,o as s,a4 as i}from"./chunks/framework.BxU-Can-.js";const g=JSON.parse('{"title":"Full Screen","description":"","frontmatter":{"sidebar_position":5,"title":"Full Screen"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Full-screen.md","filePath":"docs/sse-pdf-viewer/plugins/Full-screen.md"}'),a={name:"docs/sse-pdf-viewer/plugins/Full-screen.md"},l=i(`<h1 id="full-screen-plugin" tabindex="-1">Full Screen plugin <a class="header-anchor" href="#full-screen-plugin" aria-label="Permalink to &quot;Full Screen plugin&quot;">​</a></h1><p>The <code>full-screen</code> plugin provides a button that can be used to view the PDF document in the full screen mde. It is possible to customize the button as well.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-full-screen</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-full-screen</span></span></code></pre></div><blockquote><p>The <code>full-screen</code> plugin is included in the <a href="/docs/sse-pdf-viewer/plugins/Toolbar">toolbar</a> and <a href="/docs/sse-pdf-viewer/plugins/Default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin-and-styles" tabindex="-1">1. Import the plugin and styles <a class="header-anchor" href="#_1-import-the-plugin-and-styles" aria-label="Permalink to &quot;1. Import the plugin and styles&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { fullScreenPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-full-screen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-full-screen/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullScreenPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fullScreenPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FullScreenPluginProps);</span></span></code></pre></div><p>The <code>fullScreenPlugin()</code> function takes a <code>FullScreenPluginProps</code> parameter that consists of the following propeties: <em>(? denotes an optional property)</em></p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>enableShortcuts?</code></td><td><code>boolean</code></td><td>Enable shortcuts</td><td>1.0.0</td></tr><tr><td><code>getFullScreenTarget?</code></td><td><code>Function</code></td><td>Indicate the custom full screen element.</td><td>1.0.0</td></tr><tr><td><code>onEnterFullScreen?</code></td><td><code>Zoom =&gt; void</code></td><td>Triggered after entering the full screen mode.</td><td>1.0.0</td></tr><tr><td><code>onExitFullScreen?</code></td><td><code>Zoom =&gt; void</code></td><td>Triggered after exiting the full screen mode.</td><td>1.0.0</td></tr><tr><td><code>renderExitFullScreenButton?</code></td><td><code>Function</code></td><td>Render a custom button to exit the full screen mode.</td><td>1.0.0</td></tr></tbody></table><p>By default, the shortcuts are enabled. Users can press <code>ctrl</code> + <code>cmd</code> + <code>F</code> (on macOS) or <code>F11</code> (on other operating systems) to enter the full screen mode. <code>Zoom</code> is the type defined as</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SpecialZoomLevel } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-full-screen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Zoom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpecialZoomLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>The plugin instance <code>fullScreenPluginInstance</code> provides the following properties:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>EnterFullScreen</code></td><td><code>ReactElement</code></td><td>Customizable full screen button</td><td>1.0.0</td></tr><tr><td><code>EnterFullScreenButton</code></td><td><code>ReactElement</code></td><td>The default full screen button</td><td>1.0.0</td></tr><tr><td><code>EnterFullScreenMenuItem</code></td><td><code>ReactElement</code></td><td>The default full screen menu item</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Finally, register the <code>full-screen</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[fullScreenPluginInstance]} /&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>full-screen</code> plugin provides other useful properties as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ExitFullScreenIcon, FullScreenIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-full-screen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>ExitFullScreenIcon</code></td><td><code>ReactElement</code></td><td>The exit full screen icon</td><td>1.0.0</td></tr><tr><td><code>FullScreenIcon</code></td><td><code>ReactElement</code></td><td>The full screen icon</td><td>1.0.0</td></tr></tbody></table>`,25),n=[l];function d(o,h,p,r,c,u){return s(),t("div",null,n)}const E=e(a,[["render",d]]);export{g as __pageData,E as default};
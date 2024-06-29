import{_ as t,c as a,o as s,a3 as i}from"./chunks/framework.CerNch-K.js";const g=JSON.parse('{"title":"Default Layout","description":"","frontmatter":{"sidebar_position":3,"title":"Default Layout"},"headers":[],"relativePath":"old-docusorus/docs/ui/sse-pdf-viewer/plugin/default-layout.md","filePath":"old-docusorus/docs/ui/sse-pdf-viewer/plugin/default-layout.md"}'),e={name:"old-docusorus/docs/ui/sse-pdf-viewer/plugin/default-layout.md"},n=i(`<h1 id="default-layout-plugin" tabindex="-1">Default Layout plugin <a class="header-anchor" href="#default-layout-plugin" aria-label="Permalink to &quot;Default Layout plugin&quot;">​</a></h1><p>The <code>default-layout</code> plugin brings the <code>toolbar</code> and a sidebar that contains the following tabs:</p><ul><li>A tab listing <a href="/docs/ui/sse-pdf-viewer/plugin/thumbnail"><code>thumbnails</code></a> of pages</li><li>A tab listing <a href="/docs/ui/sse-pdf-viewer/plugin/bookmark"><code>outline bookmarks</code></a></li><li>A tab listing <a href="/docs/ui/sse-pdf-viewer/plugin/attachment"><code>attachments</code></a></li></ul><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-default-layout</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-default-layout</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin-and-styles" tabindex="-1">1. Import the plugin and styles <a class="header-anchor" href="#_1-import-the-plugin-and-styles" aria-label="Permalink to &quot;1. Import the plugin and styles&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defaultLayoutPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-default-layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-default-layout/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> defaultLayoutPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defaultLayoutPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultLayoutPluginProps</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>The optional parameter <code>DefaultLayoutPluginProps</code> represents an object of the following properties:</p><p><em>(? denotes an optional property)</em></p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>setInitialTab</code>?</td><td><code>Function</code></td><td>Set the initial tab that will be activated in the sidebar.</td><td>1.0.0</td></tr><tr><td><code>sidebarTabs</code>?</td><td><code>Function</code></td><td>Indicate the tabs in the sidebar.</td><td>1.0.0</td></tr><tr><td><code>toolbarPlugin</code>?</td><td><code>ToolbarPluginProps</code></td><td>The options of the <a href="/docs/ui/sse-pdf-viewer/plugin/toolbar">toolbar</a> plugin.</td><td>1.0.0</td></tr><tr><td><code>renderToolbar</code>?</td><td><code>Function</code></td><td>Cstom toolbar renderer.</td><td>1.0.0</td></tr></tbody></table><p>The plugin instance <code>defaultLayoutPluginInstance</code> provides the following property:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>activateTab</code></td><td><code>Function</code></td><td>Activate a given tab</td><td>1.0.0</td></tr><tr><td><code>attachmentPluginInstance</code></td><td><code>AttachmentPlugin</code></td><td>The instance of the <a href="/docs/ui/sse-pdf-viewer/plugin/attachment">Attachment plugin</a></td><td>1.0.0</td></tr><tr><td><code>bookmarkPluginInstance</code></td><td><code>BookmarkPlugin</code></td><td>The instance of the <a href="/docs/ui/sse-pdf-viewer/plugin/bookmark">Bookmark plugin</a></td><td>1.0.0</td></tr><tr><td><code>thumbnailPluginInstance</code></td><td><code>ThumbnailPlugin</code></td><td>The instance of the <a href="/docs/ui/sse-pdf-viewer/plugin/thumbnail">THumbnail plugin</a></td><td>1.0.0</td></tr><tr><td><code>toggleTab</code></td><td><code>Function</code></td><td>Toggle a given tab</td><td>1.0.0</td></tr><tr><td><code>toolbarPluginInstance</code></td><td><code>ToolbarPlugin</code></td><td>The instance of the <a href="/docs/ui/sse-pdf-viewer/plugin/toolbar">Attachment plugin</a></td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>FInally, register the <code>default-layout</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bookmarks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> defaultLayoutPluginInstance;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[defaultLayoutPluginInstance]}&gt; /&gt;;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>default-layout</code> plugin provides other properties as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  BookmarkIcon,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FileIcon,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ThumbnailIcon,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-default-layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>BookmarkIcon</code></td><td><code>ReactElement</code></td><td>The icon shown in the bookmark tab in the sidebar</td><td>1.0.0</td></tr><tr><td><code>FileIcon</code></td><td><code>ReactElement</code></td><td>The icon shown in the attachment tab in the sidebar</td><td>1.0.0</td></tr><tr><td><code>FileIcon</code></td><td><code>ReactElement</code></td><td>The icon shown in the thumbnail tab in the sidebar</td><td>1.0.0</td></tr></tbody></table><h2 id="customize-the-tabs-in-the-sidebar" tabindex="-1">Customize the tabs in the sidebar <a class="header-anchor" href="#customize-the-tabs-in-the-sidebar" aria-label="Permalink to &quot;Customize the tabs in the sidebar&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> defaultLayoutPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defaultLayoutPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sidebarTabs: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">defaultTabs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>The <code>sidebarTabs</code> property is a function that takes the default tabs and returns the list of tabs you want to display in the sidebar.</p><p>Each tab defines the following properties:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SidebarTab } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sse-ui/pdf-default-layou</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">t</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>content</code></td><td><code>ReactElement</code></td><td>The tab content</td><td>1.0.0</td></tr><tr><td><code>icon</code></td><td><code>ReactElement</code></td><td>The tab icon</td><td>1.0.0</td></tr><tr><td><code>title</code></td><td><code>ReactElement</code></td><td>The tab title</td><td>1.0.0</td></tr></tbody></table><p>The default tabs is an array of tabs listing thumbnails, bookmark and attachments in that order.</p><table tabindex="0"><thead><tr><th>INDEX</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>defaultTabs[0]</code></td><td>The tab lists thumbnails</td><td>1.0.0</td></tr><tr><td><code>defaultTabs[1]</code></td><td>The tab lists bookmarks</td><td>1.0.0</td></tr><tr><td><code>defaultTabs[2]</code></td><td>The tab lists attachments</td><td>1.0.0</td></tr></tbody></table><h2 id="open-a-sidebar-tab" tabindex="-1">Open a sidebar tab <a class="header-anchor" href="#open-a-sidebar-tab" aria-label="Permalink to &quot;Open a sidebar tab&quot;">​</a></h2><p>To <code>open a tab</code> in the sidebar, you can invoke the <code>activateTab</code> function:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activateTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> defaultLayoutPluginInstance;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Open the first tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">activateTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Open the second tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">activateTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="toggle-a-sidebar-tab" tabindex="-1">Toggle a sidebar tab <a class="header-anchor" href="#toggle-a-sidebar-tab" aria-label="Permalink to &quot;Toggle a sidebar tab&quot;">​</a></h2><p>Call the <code>toggleTab</code> function to toggle a given tab:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">toggleTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> defaultLayoutPluginInstance;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Open the first tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toggleTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Open the second tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toggleTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,38),l=[n];function d(h,p,o,r,c,k){return s(),a("div",null,l)}const b=t(e,[["render",d]]);export{g as __pageData,b as default};

import{_ as t,c as e,o as a,a4 as i}from"./chunks/framework.BxU-Can-.js";const k=JSON.parse('{"title":"Get File","description":"","frontmatter":{"sidebar_position":6,"title":"Get File"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Get-file.md","filePath":"docs/sse-pdf-viewer/plugins/Get-file.md"}'),s={name:"docs/sse-pdf-viewer/plugins/Get-file.md"},l=i('<h1 id="get-file-plugin" tabindex="-1">Get File plugin <a class="header-anchor" href="#get-file-plugin" aria-label="Permalink to &quot;Get File plugin&quot;">​</a></h1><p>The <code>get-file</code> plugin provides a button that can be used to download the PDF document. It is able to customize the download button as well.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-get-file</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-get-file</span></span></code></pre></div><blockquote><p>The <code>get-file</code> plugin is included in the <a href="/docs/sse-pdf-viewer/plugins/Toolbar">toolbar</a> and <a href="/docs/ui/sse-pdf-viewer/plugin/default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin" tabindex="-1">1. Import the plugin <a class="header-anchor" href="#_1-import-the-plugin" aria-label="Permalink to &quot;1. Import the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getFilePlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-get-file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getFilePluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getFilePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GetFilePluginProps);</span></span></code></pre></div><p>The <code>getFilePlugin()</code> function takes a <code>GetFilePluginProps</code> parameter that consists of the following property:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>fileNameGenerator</code></td><td><code>OpenFile =&gt; String</code></td><td>Generate the name of download file</td><td>1.0.0</td></tr></tbody></table><p>The plugin instance <code>getFilePluginInstance</code> provides the following properties:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>Download</code></td><td><code>ReactElement</code></td><td>Customizable download button</td><td>1.0.0</td></tr><tr><td><code>DownloadButton</code></td><td><code>ReactElement</code></td><td>The default download button</td><td>1.0.0</td></tr><tr><td><code>DownloadMenuItem</code></td><td><code>ReactElement</code></td><td>The default download menu item</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Finally, register the <code>get-file</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[getFilePluginInstance]} /&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>get-file</code> plugin provides other useful property as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { DownloadIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>DownloadIcon</code></td><td><code>ReactElement</code></td><td>The download file icon</td><td>1.0.0</td></tr></tbody></table>',23),n=[l];function d(o,p,h,r,c,g){return a(),e("div",null,n)}const b=t(s,[["render",d]]);export{k as __pageData,b as default};

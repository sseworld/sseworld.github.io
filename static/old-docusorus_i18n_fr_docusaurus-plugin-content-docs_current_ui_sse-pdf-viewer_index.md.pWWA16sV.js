import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.CerNch-K.js";const g=JSON.parse('{"title":"Installation","description":"","frontmatter":{"sidebar_position":1,"title":"Installation"},"headers":[],"relativePath":"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/index.md","filePath":"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/index.md"}'),n={name:"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/index.md"},l=e(`<h1 id="sse-pdf-viewer" tabindex="-1">SSE PDF Viewer <a class="header-anchor" href="#sse-pdf-viewer" aria-label="Permalink to &quot;SSE PDF Viewer&quot;">​</a></h1><p>A React component to view a PDF document. It&#39;s written in TypeScript, and powered by React hooks completely.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Core viewer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Viewer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sse-ui/pdf-core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Plugins</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defaultLayoutPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sse-ui/pdf-default-layout&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sse-ui/pdf-core/lib/styles/index.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sse-ui/pdf-default-layout/lib/styles/index.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create new plugin instance</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> defaultLayoutPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defaultLayoutPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fileUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/assets/pdf-open-parameters.pdf&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Register plugins</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        defaultLayoutPluginInstance,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p><strong>Basic features</strong></p><ul><li>[x] Support password protected document</li><li>[x] Zooming: Support custom levels such as actual size, page fit, and page width</li><li>[x] Navigation between pages</li><li>[x] Can go to the first and last pages quickly</li><li>[x] Search for text</li><li>[x] Preview page thumbnails</li><li>[x] View and navigate the table of contents</li><li>[x] List and download attachments</li><li>[x] Rotating</li><li>[x] Text selection and hand tool modes</li><li>[x] Different scrolling modes</li><li>[x] Full screen mode</li><li>[x] Can open a file from local. Users can drag and drop a local file to view it</li><li>[x] Download file</li><li>[x] View the document properties</li><li>[x] Support SSR</li><li>[x] Print</li><li>[x] Theming</li><li>[x] Dark mode</li><li>[x] Accessibility</li></ul><p><strong>Customization</strong></p><ul><li>[x] The toolbar can be customized easily</li><li>[x] All text items can be localized in another language</li></ul><h2 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-label="Permalink to &quot;About&quot;">​</a></h2><p>This project is developed by <em>SSE World</em>. I love building products and sharing knowledge.</p><ul><li><a href="https://dev.to/sseworld" target="_blank" rel="noreferrer">DEV</a></li><li><a href="https://github.com/sseworld" target="_blank" rel="noreferrer">Github</a></li></ul>`,11),t=[l];function p(r,h,o,d,k,c){return a(),i("div",null,t)}const E=s(n,[["render",p]]);export{g as __pageData,E as default};

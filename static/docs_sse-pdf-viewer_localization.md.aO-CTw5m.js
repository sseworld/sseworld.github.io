import{_ as t,c as i,o as a,a3 as s}from"./chunks/framework.CerNch-K.js";const u=JSON.parse('{"title":"Localization","description":"","frontmatter":{"title":"Localization"},"headers":[],"relativePath":"docs/sse-pdf-viewer/localization.md","filePath":"docs/sse-pdf-viewer/localization.md"}'),e={name:"docs/sse-pdf-viewer/localization.md"},n=s(`<h1 id="localization" tabindex="-1">Localization <a class="header-anchor" href="#localization" aria-label="Permalink to &quot;Localization&quot;">​</a></h1><p>React PDF Viewer provides different localization files that can be used to localize the user interface.</p><h2 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-label="Permalink to &quot;Installing&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-locales;</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-locales;</span></span></code></pre></div><h2 id="using-a-localization-file" tabindex="-1">Using a localization file <a class="header-anchor" href="#using-a-localization-file" aria-label="Permalink to &quot;Using a localization file&quot;">​</a></h2><p>The <code>locales</code> package provides the following localization files whose each of them is a JSON file:</p><table tabindex="0"><thead><tr><th>LOCALE</th><th>FILE</th><th>FROM</th></tr></thead><tbody><tr><td>Arabic</td><td><code>lib/ar_AE.json</code></td><td>1.0.0</td></tr><tr><td>Chinese (simplified)</td><td><code>lib/zh_CN.json</code></td><td>1.0.0</td></tr><tr><td>Chinese (traditional)</td><td><code>lib/zh_TW.json</code></td><td>1.0.0</td></tr><tr><td>English</td><td><code>lib/en_US.json</code></td><td>1.0.0</td></tr><tr><td>French</td><td><code>lib/fr_FR.json</code></td><td>1.0.0</td></tr><tr><td>German</td><td><code>lib/de_DE.json</code></td><td>1.0.0</td></tr><tr><td>Italian</td><td><code>lib/it_IT.json</code></td><td>1.0.0</td></tr><tr><td>Japanese</td><td><code>lib/jp_JP.json</code></td><td>1.0.0</td></tr><tr><td>Korean</td><td><code>lib/ko_KR.json</code></td><td>1.0.0</td></tr><tr><td>Portuguese</td><td><code>lib/pt_PT.json</code></td><td>1.0.0</td></tr><tr><td>Russian</td><td><code>lib/ru_RU.json</code></td><td>1.0.0</td></tr><tr><td>Spanish</td><td><code>lib/es_ES.json</code></td><td>1.0.0</td></tr><tr><td>Vietnamese</td><td><code>lib/vi_VN.json</code></td><td>1.0.0</td></tr></tbody></table><p>In order to use the given localization file, you need to import it and pass it to the <code>localization</code> option of the <code>Viewer</code> component.</p><p>The example below applies the German localization file:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { LocalizationMap, Viewer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import the localization file</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> de_DE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-locales/lib/de_DE.json&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// render function</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> localization</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ de_DE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LocalizationMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } /&gt;</span></span></code></pre></div><p>You can use the <a href="/docs/ui/sse-pdf-viewer/plugin/locale-switcher">Locale Switcher</a> plugin to add a menu that allows users to switch between different locales.</p><h2 id="using-a-rtl-longuage" tabindex="-1">Using a RTL longuage <a class="header-anchor" href="#using-a-rtl-longuage" aria-label="Permalink to &quot;Using a RTL longuage&quot;">​</a></h2><p>If you want to use a RTL language such as Arabic, it&#39;s recommende to use the <code>direction</code> options. So the user interface is shown in the same direction.</p>`,15),d=[n];function o(l,c,h,p,r,k){return a(),i("div",null,d)}const b=t(e,[["render",o]]);export{u as __pageData,b as default};

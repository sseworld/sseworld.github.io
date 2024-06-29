import{_ as s,c as a,o as i,a3 as e}from"./chunks/framework.CerNch-K.js";const n="/static/docsVersionDropdown.CN1GDq6S.png",E=JSON.parse('{"title":"Manage Docs Versions","description":"","frontmatter":{"sidebar_position":1},"headers":[],"relativePath":"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/tutorial-extras/manage-docs-versions.md","filePath":"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/tutorial-extras/manage-docs-versions.md"}'),o={name:"old-docusorus/i18n/fr/docusaurus-plugin-content-docs/current/tutorial-extras/manage-docs-versions.md"},t=e(`<h1 id="manage-docs-versions" tabindex="-1">Manage Docs Versions <a class="header-anchor" href="#manage-docs-versions" aria-label="Permalink to &quot;Manage Docs Versions&quot;">​</a></h1><p>Docusaurus can manage multiple versions of your docs.</p><h2 id="create-a-docs-version" tabindex="-1">Create a docs version <a class="header-anchor" href="#create-a-docs-version" aria-label="Permalink to &quot;Create a docs version&quot;">​</a></h2><p>Release a version 1.0 of your project:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docusaurus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span></span></code></pre></div><p>The <code>docs</code> folder is copied into <code>versioned_docs/version-1.0</code> and <code>versions.json</code> is created.</p><p>Your docs now have 2 versions:</p><ul><li><code>1.0</code> at <code>http://localhost:3000/docs/</code> for the version 1.0 docs</li><li><code>current</code> at <code>http://localhost:3000/docs/next/</code> for the <strong>upcoming, unreleased docs</strong></li></ul><h2 id="add-a-version-dropdown" tabindex="-1">Add a Version Dropdown <a class="header-anchor" href="#add-a-version-dropdown" aria-label="Permalink to &quot;Add a Version Dropdown&quot;">​</a></h2><p>To navigate seamlessly across versions, add a version dropdown.</p><p>Modify the <code>docusaurus.config.js</code> file:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    navbar: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      items: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // highlight-start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docsVersionDropdown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // highlight-end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>The docs version dropdown appears in your navbar:</p><p><img src="`+n+'" alt="Docs Version Dropdown"></p><h2 id="update-an-existing-version" tabindex="-1">Update an existing version <a class="header-anchor" href="#update-an-existing-version" aria-label="Permalink to &quot;Update an existing version&quot;">​</a></h2><p>It is possible to edit versioned docs in their respective folder:</p><ul><li><code>versioned_docs/version-1.0/hello.md</code> updates <code>http://localhost:3000/docs/hello</code></li><li><code>docs/hello.md</code> updates <code>http://localhost:3000/docs/next/hello</code></li></ul>',17),d=[t];function r(l,p,c,h,k,u){return i(),a("div",null,d)}const v=s(o,[["render",r]]);export{E as __pageData,v as default};

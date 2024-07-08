import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SSE Documentation',
  description: 'Documentation Made By SSE with Love',
  cleanUrls: true,
  outDir: './dist',
  assetsDir: 'static',
  ignoreDeadLinks: true,

  //  head: [
  //   [
  //     'script',
  //     {
  //       src: 'https://analytics.lucide.dev/js/script.js',
  //       'data-domain': 'lucide.dev',
  //       defer: '',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:locale',
  //       content: 'en_US',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:type',
  //       content: 'website',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:site_name',
  //       content: title,
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:title',
  //       content: socialTitle,
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:description',
  //       content: description,
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:url',
  //       content: 'https://lucide.dev',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:image',
  //       content: 'https://lucide.dev/og.png',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:image:width',
  //       content: '1200',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:image:height',
  //       content: '630',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'og:image:type',
  //       content: 'image/png',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'twitter:card',
  //       content: 'summary_large_image',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'twitter:title',
  //       content: socialTitle,
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'twitter:description',
  //       content: description,
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       property: 'twitter:image',
  //       content: 'https://lucide.dev/og.png',
  //     },
  //   ],
  // ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {selector: 'h1, h2, h3, h4, h5, h6',},
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Members', link: '/members' },
      { text: 'Documentation', link: '/docs' },
      { text: 'Packages', link: '/packages' },
      // { text: 'Packages', items: [
      //     { text: 'Code Editor', link: '/docs/code-editor/Installation', icon: 'mdi:code-brackets', },        
      //     { text: 'SSE PDF Viewer', link: '/docs/sse-pdf-viewer/Installation', icon: 'mdi:file-pdf', },
      //     { text: 'SSE Auth', link: '/docs/sse-auth/', },
      //   ] 
      // },
      { text: 'LICENSE', link:'/license' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()}-present SSE World`,
      // links: [
      //   { text: 'GitHub', link: 'https://github.com/sseworld' },
      // ],
    },

    editLink: {
      pattern:
        'https://github.com/sseworld/sseworld.github.io/edit/master/:path',
    },

    sidebar: {
      "/docs": [
          { text: 'Code Editor', link: '/docs/code-editor/Installation', icon: 'mdi:code-brackets', },        
          { text: 'SSE PDF Viewer', link: '/docs/sse-pdf-viewer/Installation', icon: 'mdi:file-pdf', }, 
          { text: 'SSE Auth', link: '/docs/sse-auth/', },
          { text: 'SSE Date Time', link: '/docs/sse-date-time/', },
          { text: 'SSE Spotify', link: '/docs/sse-spotify-api', },
          { text: 'SSE Currency', link: '/docs/sse-currency', },
          { text: 'SSE File Saver', link: '/docs/sse-file-saver', },
          { text: 'SSE Validator', link: '/docs/sse-validator', },
        ],
      "/docs/code-editor/": [
        {        
          text: 'Go back', link: '/docs/', icon: 'mdi:KeyboardArrowLeft'
        },
        {
          text: 'Code Editor',
          items: [
            { text: 'Installation', link: '/docs/code-editor/Installation' },
            { text: 'Introduction', link: '/docs/code-editor/Introduction' },
            { text: 'Integrate-AMD', link: '/docs/code-editor/Integrate-AMD' },
            { text: 'Integrate-ESM', link: '/docs/code-editor/Integrate-ESM' },
          ],
        },
      ],
      "/docs/sse-pdf-viewer/": [
        {        
          text: 'Go back', link: '/docs/', icon: 'mdi:KeyboardArrowLeft'
        },
        {
          text: 'SSE PDF Viewer',
          items: [
            { text: 'Installation', link: '/docs/sse-pdf-viewer/Installation' },
            { text: 'Introduction', link: '/docs/sse-pdf-viewer/Introduction' },
            { text: 'Localisation', link: '/docs/sse-pdf-viewer/Localisation' },
            { text: 'Plugins', items: [
                { text: 'Attachment', link: '/docs/sse-pdf-viewer/plugins/Attachment' },
                { text: 'Bookmark', link: '/docs/sse-pdf-viewer/plugins/Bookmark' },
                { text: 'Default Layout', link: '/docs/sse-pdf-viewer/plugins/Default-layout' },
                { text: 'Drop', link: '/docs/sse-pdf-viewer/plugins/Drop' },
                { text: 'Full Screen', link: '/docs/sse-pdf-viewer/plugins/Full-screen' },
                { text: 'Get File', link: '/docs/sse-pdf-viewer/plugins/Get-file' },
                { text: 'Highlight', link: '/docs/sse-pdf-viewer/plugins/Highlight' },
                { text: 'Locale Switcher', link: '/docs/sse-pdf-viewer/plugins/Locale-switcher' },
                { text: 'Open', link: '/docs/sse-pdf-viewer/plugins/Open' },
                { text: 'Page Navigation', link: '/docs/sse-pdf-viewer/plugins/Page-navigation' },
                { text: 'Properties', link: '/docs/sse-pdf-viewer/plugins/Properties' },
                { text: 'Rotate', link: '/docs/sse-pdf-viewer/plugins/Rotate' },
                { text: 'Scroll Mode', link: '/docs/sse-pdf-viewer/plugins/Scroll-mode' },
                { text: 'Search', link: '/docs/sse-pdf-viewer/plugins/Search' },
                { text: 'Selection Mode', link: '/docs/sse-pdf-viewer/plugins/Selection-mode' },
                { text: 'Theme', link: '/docs/sse-pdf-viewer/plugins/Theme' },
                { text: 'Thumbnail', link: '/docs/sse-pdf-viewer/plugins/Thumbnail' },
                { text: 'Toolbar', link: '/docs/sse-pdf-viewer/plugins/Toolbar' },
                { text: 'Zoom', link: '/docs/sse-pdf-viewer/plugins/Zoom' },
              ],
            },
          ],
        },
      ],
      "/docs/sse-auth/": [
        {        
          text: 'Go back', link: '/docs/', icon: 'mdi:KeyboardArrowLeft'
        },
        {
          text: "Login Packages",
          items: [
            { text: "Github", link: "/docs/sse-auth/Github" }
          ]
        }
      ],
      "/docs/sse-date-time/": [
        {        
          text: 'Go back', link: '/docs/', icon: 'mdi:KeyboardArrowLeft'
        },
        {
          text: "Date Time Packages",
          items: [
            { text: "Installation", link: "/docs/sse-date-time/" },
            { text: "Extend", link: "/docs/sse-date-time/EXTEND" },
            { text: "Locale", link: "/docs/sse-date-time/LOCALE" },
            { text: "Plugins", link: "/docs/sse-date-time/PLUGINS" },
          ]
        }
      ],
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sseworld/sseworld.github.io',
      },
    ],
  },
  sitemap: {
    hostname: 'https://sseworld.github.io/',
  },
});

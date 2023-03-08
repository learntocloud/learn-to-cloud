// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn to Cloud',
  url: 'https://learntocloud.guide',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'learn-to-cloud', // Usually your GitHub org/user name.
  projectName: 'learn-to-cloud', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt', 'ne']
  },
  scripts: [
    'https://static.cloudflareinsights.com/beacon.min.js',
    {
      'src': 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon':'{"token": "a3e0a23a1a6a44c290695d32eea7769a"}', 
    }],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/learntocloud/learn-to-cloud/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        navbar: {
          title: 'LTC',
          logo: {
            alt: 'LTC Logo',
            src: '/img/favicon.ico',
          },
          items: [
            {

              type: 'localeDropdown',
              position: 'right',

            },
            {
              type: 'doc',
              docId: 'Welcome',
              position: 'left',
              label: 'Guide',
            },
            {
              href: 'https://madebygps.com/cloudcamp',
              label: 'Study Plan',
              position: 'left',
            },
            {
              href: 'https://discord.gg/nxcGpYQpw4',
              label: 'Discord',
              position: 'right',
            },
            {
              href: 'https://youtube.com/@learntocloud',
              label: 'Podcast',
              position: 'right',
            },
            {
              href: 'https://github.com/orgs/learntocloud/projects/2/views/1',
              label: 'LTC Roadmap',
              position: 'left',
            },
            {
              href: 'https://github.com/learntocloud/learn-to-cloud',
              position: 'right',
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
          ],
        },
        footer: {
          style: 'dark',

          copyright: `Copyright © ${new Date().getFullYear()} Learn To Cloud`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },

        algolia: {
          // The application ID provided by Algolia
          appId: process.env.ALGOLIA_APP_ID,

          // Public API key
          apiKey: process.env.ALGOLIA_API_KEY,

          indexName: "learntocloud",

          // Ensures search results are relevant to the current language and version
          contextualSearch: true,
        },
        announcementBar: {
          id: 'Learn Cloud',
          content:
          /*
            '<b>Find #30DaysOfSWA useful? Give it a star on <a href="https://github.com/staticwebdev/30DaysOfSWA"><b>GitHub</b></a></b>',
          */
            '<b>Found this guide helpful? Give us a star on <a href="https://github.com/learntocloud/learn-to-cloud"><b>GitHub</b></a></b> ☁️',
          backgroundColor: '#134D99',
          textColor: '#ffffff',
          isCloseable: false,
        },
      }),
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-216012364-1',
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 640, // max resized image's size.
        min: 160, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;

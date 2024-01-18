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
    locales: ['en', 'es', 'fr', 'pt', 'ne']
  },
  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon':`{"token": ${process.env.CLOUDFARE_ANALYTICS_TOKEN}}`, 
    }],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
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
              href: 'https://definethecloud.guide/',
              label: 'Cloud Dictionary',
              position: 'left',
            },
            {
              href: 'https://discord.gg/dr2kvtA726',
              label: 'Discord',
              position: 'right',
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
          links: [
            {
              title: 'Socials',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.gg/dr2kvtA726',
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/learntocloudguide/',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/learntocloud',
                },
                {
                  label: 'Podcast',
                  href: 'https://youtube.com/@learntocloud'
                },
              ],
            },
            {
              title: 'Guide Help',
              items: [
                {
                  label: 'Report Issue',
                  href: 'https://github.com/learntocloud/learn-to-cloud/issues',
                },
                {
                  label:'GitHub Repo',
                  href:'https://github.com/learntocloud/learn-to-cloud/',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Contributors',
                  href: '/Contributors',
                },
                {
                  label:'Code of Conduct',
                  href:'https://github.com/learntocloud/learn-to-cloud/blob/main/CODE_OF_CONDUCT.md',
                },
                {
                    label: 'License',
                    href: 'https://github.com/learntocloud/learn-to-cloud/tree/main?tab=MIT-1-ov-file',
                },
              ],
            },
            {
              title: 'Want to contribute',
              items: [
                {
                    label: 'LTC Roadmap',
                    href: 'https://github.com/orgs/learntocloud/projects/2/views/1',
                },
                {
                  label: 'DTC Roadmap',
                  href: 'https://github.com/orgs/learntocloud/projects/3'
                }
              ],
            },
          ],
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
            '<b><a href="https://youtu.be/vqv1EhI8azs">Learn how Skylar used Learn to Cloud to land a cloud admin role</a></b> ☁️',
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

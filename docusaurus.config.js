// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn to Cloud',
  url: 'https://learntocloud.guide',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
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
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },
  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon':`{"token": ${process.env.CLOUDFARE_ANALYTICS_TOKEN}}`, 
    },
    {
      src:"https://plausible.rishab.cloud/js/script.js",
      defer: true,
      'data-domain': 'learntocloud.guide'
    }
  ],
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
                  href: '/contributors',
                },
                {
                  label:'Code of Conduct',
                  href:'https://github.com/learntocloud/learn-to-cloud/blob/main/CODE_OF_CONDUCT.md',
                },
                {
                    label: 'License (CC BY 4.0)',
                    href: 'http://creativecommons.org/licenses/by/4.0/',
                },
              ],
            },
            {
              title: 'Want to contribute',
              items: [
                {
                    label: 'LTC Roadmap',
                    href: 'https://github.com/orgs/learntocloud/projects/2/views/1',
                }
              ],
            },
          ],
          copyright: `© ${new Date().getFullYear()} Learn to Cloud by Gwyneth Peña-Siguenza · Licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        announcementBar: {
          id: 'Learn Cloud',
          content:
          /*
            '<b>Find #30DaysOfSWA useful? Give it a star on <a href="https://github.com/staticwebdev/30DaysOfSWA"><b>GitHub</b></a></b>',
          */
            '<b><a href="https://www.youtube.com/watch?v=88hnhRmpPZs">6 Months Following This Study Routine TRANSFORMED My Cloud Career</a></b> ☁️',
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

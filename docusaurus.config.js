// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            alt: 'My Site Logo',
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
              href: 'https://youtube.com/@learntocloud',
              label: 'Podcast',
              position: 'right',
            },
            {
              href: 'https://github.com/learn-to-cloud/learn-to-cloud',
              label: 'GitHub',
              position: 'right',
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
      }),
  plugins: [
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

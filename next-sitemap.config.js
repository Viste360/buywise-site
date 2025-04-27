/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://buywise.es',
    generateRobotsTxt: true,
    // (optional) fine-tune your robots.txt policies:
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        // e.g. disallow staging-only paths:
        // { userAgent: '*', disallow: ['/secret'] }
      ],
      // you can also add a sitemap index:
      // additionalSitemaps: ['https://buywise.es/my-extra-sitemap.xml'],
    },
  }
  
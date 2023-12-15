/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/backoffice', '/backoffice/*'],
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_APP_URL + '/en',
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_APP_URL + '/fr',
      hreflang: 'fr',
    },
  ],
}

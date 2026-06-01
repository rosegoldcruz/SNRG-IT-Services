module.exports = {
  siteUrl: 'https://snrglabs.com',
  generateRobotsTxt: true,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  }
}

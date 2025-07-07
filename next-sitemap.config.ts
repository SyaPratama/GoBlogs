module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://syapratama.com',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://syapratama.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://syapratama.com',
      hreflang: 'id',
    },
  ],
};
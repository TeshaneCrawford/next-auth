/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.example.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://www.example.com/sitemap.xml',
        ],
    },
};
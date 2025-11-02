/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://web3camp.us',
    generateRobotsTxt: true, // (optional)
    // ...other options
    additionalPaths: async (config) => {
        const result = []

        // open list.json in public folder
        const list = require('./public/json/list.json');
        list.forEach((item) => {
            result.push({ changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString(), loc: `${item.href}` });
        });

        return result
    },
}
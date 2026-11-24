let policy = {
  userAgent: "*",
};

if (process.env.URL !== "https://rufusleonard.com") {
  policy.disallow = "/";
}

module.exports = {
  siteUrl: process.env.URL || "https://irekonu.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  exclude: ["/server-sitemap.xml", "/preview"],
  outDir: "./out",
};

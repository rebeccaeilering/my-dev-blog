const config = {
  siteTitle: "Rebecca's Developer Blog", // Site title.
  siteTitleShort: "RE Dev Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Rebecca's Developer Blog", // Alternative site title for SEO.
  siteLogo: "/img/rebecca-web.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://rebeccaeilering.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/my-dev-blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "This is a blog about my developer experience. Learning, thoughts, and whatever.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Web Development", // Default category for posts.
  dateFromFormat: "MM/DD/YYYY", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  userName: "Rebecca Eilering", // Username to display in the author segment.
  userEmail: "rebeccaeilering@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "rebeccaeilering", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Springfield, IL", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "I'm a front-end web developer", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rebeccaeilering/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/rebeccaeilering",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:rebeccaeilering@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020 Rebecca's Developer Blog", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

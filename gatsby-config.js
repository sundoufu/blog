if (process.env.NODE_ENV === 'development') {
  require("dotenv").config({
    path: `.env.development`,
  })
}

const { NOTION_TOKEN, NOTION_DATABASE } = process.env

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.jae-seong.kim",
    title: "Jaeseong Kim",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: NOTION_TOKEN,
        databaseId: NOTION_DATABASE,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    'gatsby-transformer-remark'
  ],
};

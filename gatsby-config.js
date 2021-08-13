if (process.env.NODE_ENV === 'development') {
  require("dotenv").config({
    path: `.env`,
  })
}

const { NOTION_TOKEN, NOTION_DATABASE } = process.env

module.exports = {
  siteMetadata: {
    title: `김재성의 마이크로에세이 & 개발 블로그`,
    author: {
      name: `김재성`,
      summary: `인문, 사회에 관심이 많은 전산학 전공 대학생`,
    },
    description: `김재성의 마이크로에세이 & 개발 블로그`,
    siteUrl: `https://jae-seong.kim`,
    social: {
      github: `sundoufu`,
      instagram: 'jae.s.kim'
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: NOTION_TOKEN,
        databaseId: NOTION_DATABASE,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}

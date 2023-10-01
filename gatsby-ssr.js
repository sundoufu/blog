/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ko` })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Pretendard.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
  ])
}

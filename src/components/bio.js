/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          안녕하세요. {author?.summary || null} <strong>{author.name}</strong>입니다. 부족한 글이지만, 재밌게 즐겨주세요 :)
          {` `}
          {social?.instagram && <a href={`https://instagram.com/${social?.instagram}`}>
            인스타그램
          </a>}
          {` `}
          {social?.github && <a href={`https://github.com/${social?.github}`}>
            깃허브
          </a>}
        </p>
      )}
    </div>
  )
}

export default Bio

import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  const pages = data.allMarkdownRemark.edges
  console.log(data);
  return (
    <main>
      <title>Jaeseong Kim</title>
      <h1>게시글 목록</h1>
      <ol>
        {pages.map(({ node }) => (
          <li key={node.fields.slug}>
            <a href={node.fields.slug}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ol>
    </main>
  )
}

export default IndexPage

export const query = graphql`
	query IndexPage {
		allMarkdownRemark(
			filter: { frontmatter: { Publish_Date: { start: { lte: "2021-05-22" } } } }
			sort: { fields: frontmatter___Publish_Date___start, order: DESC }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						Publish_Date {
							start
						}
						Tags {
							name
							color
						}
					}
				}
			}
		}
	}
`

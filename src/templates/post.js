import * as React from "react"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
	const page = data.markdownRemark

	return (
		<div>
			<h1>{page.frontmatter.title}</h1>
			<div
				dangerouslySetInnerHTML={{ __html: page.html }}
			/>
		</div>
	)
}

export default PostTemplate

export const query = graphql`
	query PageContents($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
			}
			html
		}
	}
`

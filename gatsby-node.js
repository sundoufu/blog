const path = require("path")
const slugify = require("slugify")
const {kebabCase} = require('lodash');

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = kebabCase(node.frontmatter && node.frontmatter.title)

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve("src/templates/post.js")

	const result = await graphql(`
		{
			postsRemark: allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___Publish_Date___start] }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	if (result.errors) {
		reporter.panicOnBuild("Error while running GraphQL query.")
		return
	}

	const posts = result.data.postsRemark.edges

	posts.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: blogPostTemplate,
			context: {
				slug: node.fields.slug,
			},
		})
	})
}

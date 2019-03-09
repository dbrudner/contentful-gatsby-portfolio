const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPost = path.resolve("./src/templates/blog-post.js");
		resolve(
			graphql(
				`
					{
						allContentfulBlogPost {
							edges {
								node {
									title
									id
									tags
									post {
										json
									}
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}

				const posts = result.data.allContentfulBlogPost.edges;
				posts.forEach((post, index) => {
					const pageName = post.node.title.replace(/\s/g, "-");
					createPage({
						path: `/blog/${pageName}/`,
						component: blogPost,
						context: {
							slug: post.node.slug
						}
					});
				});
			})
		);
	});
};

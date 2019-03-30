import React from "react";
import Layout from "../../components/layout";
import { Post } from "../../components/blog/post";

const Blog = props => {
	return (
		<Layout>
			<h1>Blog</h1>
			{props.data.allContentfulBlogPost.edges.map(({ node }, i, a) => (
				<Post node={node} i={i} a={a} />
			))}
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulBlogPost {
			edges {
				node {
					title
					id
					tags
					urlPath
					description
					image {
						resize(width: 300) {
							src
							width
							height
						}
					}
				}
			}
		}
	}
`;

export default Blog;

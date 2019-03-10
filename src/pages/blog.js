import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const Blog = props => {
	return (
		<Layout>
			<h1>Blog</h1>
			{props.data.allContentfulBlogPost.edges.map(({ node }) => (
				<div key={node.id}>
					<Link to={`/blog/${node.urlPath}`}>{node.title}</Link>
				</div>
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
				}
			}
		}
	}
`;

export default Blog;

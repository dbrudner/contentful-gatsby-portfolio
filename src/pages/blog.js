import React from "react";
import Layout from "../components/layout";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Blog = props => {
	console.log(props.data.allContentfulBlogPost.edges);
	return (
		<Layout>
			<h1>Blog</h1>
			{props.data.allContentfulBlogPost.edges.map(({ node }) => (
				<div>{node.title}</div>
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
				}
			}
		}
	}
`;

export default Blog;

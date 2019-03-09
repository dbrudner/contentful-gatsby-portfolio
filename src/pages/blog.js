import React from "react";
import Layout from "../components/layout";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Blog = props => {
	console.log(props.data.allContentfulBlogPost.edges[0].node.post.json);
	return (
		<Layout>
			<div
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(
						props.data.allContentfulBlogPost.edges[0].node.post.json
					)
				}}
			/>
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
					post {
						json
					}
				}
			}
		}
	}
`;

export default Blog;

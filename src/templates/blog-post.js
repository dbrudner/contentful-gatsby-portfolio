import React from "react";
import Layout from "../components/layout";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import styled from "styled-components";

const BlogPost = styled.div`
	img {
		width: 100%;
	}
`;

const Blog = props => {
	console.log(BLOCKS);
	return (
		<Layout>
			<BlogPost
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(props.pageContext.post.json, {
						renderNode: {
							[BLOCKS.EMBEDDED_ASSET]: ({
								data: {
									target: { fields },
								},
							}) => {
								console.log(fields);
								return `<img src="${
									fields.file["en-US"].url
								}" alt="${fields.description ||
									fields.title["en-US"]}"/>`;
							},
						},
					}),
				}}
			/>
		</Layout>
	);
};

export default Blog;
